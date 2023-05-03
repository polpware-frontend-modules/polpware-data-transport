import { Component, Input } from '@angular/core';
import { faArrowLeft, faArrowRight, faCheck, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { guid } from '@polpware/fe-utilities';
import { sliceArray } from '@polpware/ngx-reactive-table';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import { readExcelAsync } from '../methods/file-ops';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-noty";
import * as i2 from "../data-processor/data-processor.component";
import * as i3 from "../define-column-mapping/define-column-mapping.component";
import * as i4 from "../data-publication/data-publication.component";
import * as i5 from "@fortawesome/angular-fontawesome";
import * as i6 from "@angular/common";
export class ImportDataWizardComponent extends WizardAbstractComponent {
    constructor(_noty) {
        super();
        this._noty = _noty;
        this.faChevronRight = faChevronRight;
        this.faArrowLeft = faArrowLeft;
        this.faArrowRight = faArrowRight;
        this.faSpinner = faSpinner;
        this.faCheck = faCheck;
        this.targetColumns = [];
        this.isMappingsValid = false;
        this.hasImportStarted = false;
        this.importStat = { success: 0, failure: 0 };
        this.state = {
            originalData: [],
            preprocessor: {
                cols: {},
                inputRows: [],
                outputRows: [],
                updated: false
            },
            mappings: [],
            postprocessor: {
                inputRows: [],
                outputRows: [],
                cols: {},
                updated: false
            },
            publication: {
                rows: [],
                cols: {}
            }
        };
        this.maxDim = 4;
        this.buildNavigatorCfg();
    }
    get sourceColumns() {
        const ret = [];
        const obj = this.state.preprocessor.cols;
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                ret.push({
                    id: prop,
                    label: obj[prop]
                });
            }
        }
        return ret;
    }
    ngOnInit() {
        this.loadDataAsync();
    }
    // Override
    buildNavigatorCfg() {
        super.buildNavigatorCfg();
        // Specific logic in this class
        // Configure [1] ; options for preprocessor
        this.navigatorCfg.setElement({
            hasPrevStep: false,
            hasNextStep: true,
            hasNextGuard: false,
            visible: true
        }, 1);
        // Configure [1, 1] ; options for column mapping
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: true,
            hasNextGuard: true,
            visible: true,
            nextStep: () => {
                this.preparePostprecessor();
                this.nextStepInternal();
            },
            prevStep: () => {
                this.state.preprocessor.inputRows = this.state.preprocessor.outputRows;
                this.prevStepInternal();
            }
        }, 1, 1);
        // Configure [1, 1, 1] ; options for postprocessor
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: true,
            hasNextGuard: true,
            nextStep: () => {
                this.preparePublication();
                this.nextStepInternal();
            },
            visible: true
        }, 1, 1, 1);
        // Configure [1, 1, 1, 1] ; options for publication
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: false,
            hasNextGuard: false,
            visible: true,
            prevStep: () => {
                // todo: Disable prev button
                this.prevStepInternal();
            }
        }, 1, 1, 1, 1);
        this.stepIndex = 0;
        this.dimIndice = [0, 0, 0, 0];
        this.forwardDimIndice = [1, 0, 0, 0];
        this.navigator = this.navigatorCfg.getElement(0);
        this.forwardNavigator = this.navigatorCfg.getElement(...this.forwardDimIndice);
    }
    // Override 
    get disableNextStep() {
        if (this.forwardNavigator.hasNextGuard) {
            if (this.stepIndex == 1 && !this.isMappingsValid) {
                // Disable if mappings are not valid
                return true;
            }
        }
        return false;
    }
    // Not override 
    get disablePrevStep() {
        return this.hasImportStarted;
    }
    startImport() {
        this.hasImportStarted = true;
    }
    async loadDataAsync() {
        // Assume that there are data.
        const rows = await readExcelAsync(this.file);
        if (rows.length <= 0) {
            return;
        }
        this.state.originalData = rows;
        this.preparePreprocessor();
    }
    preparePreprocessor() {
        const rows = this.state.originalData;
        // Assume that the first row is the header
        const columns = rows[0].reduce((sum, b, idx) => {
            const k = 'column' + (idx + 1);
            sum[k] = b;
            return sum;
        }, {});
        this.state.preprocessor.cols = columns;
        const restData = sliceArray(rows, 1, rows.length);
        // Next prepare data
        const elems = restData.map(a => {
            return a.reduce((sum, b, idx) => {
                const k = 'column' + (idx + 1);
                sum[k] = b;
                return sum;
            }, { id: guid() });
        });
        this.state.preprocessor.inputRows = elems;
        this.state.preprocessor.outputRows = elems;
        this.state.preprocessor.updated = true;
    }
    resetPreprocessor() {
        this.preparePreprocessor();
        this._noty.success('Data has been reset successfully!', 'Operation result');
    }
    updatePreprocessor(event) {
        this.state.preprocessor.outputRows = event.rows;
        this.state.preprocessor.updated = true;
    }
    updateMappings(data) {
        this.state.mappings = [...data];
    }
    validateMappings(errors) {
        if (errors) {
            this.isMappingsValid = false;
        }
        else {
            this.isMappingsValid = true;
        }
    }
    preparePostprecessor() {
        // Prepare columns
        const columns = {};
        for (let i = 0; i < this.state.mappings.length; i++) {
            const elem = this.state.mappings[i];
            const source = this.state.preprocessor.cols[elem.sourceId];
            const target = this.targetColumns.find(a => a.id == elem.targetId);
            columns[elem.sourceId] = `${source} => ${target.label}`;
        }
        this.state.postprocessor.cols = columns;
        // If the predecessor has been changed.
        if (this.state.preprocessor.updated) {
            this.state.preprocessor.updated = false;
            this.state.postprocessor.inputRows = this.state.preprocessor.outputRows;
            this.state.postprocessor.outputRows = this.state.postprocessor.inputRows;
            this.state.postprocessor.updated = true;
        }
        else {
            this.state.postprocessor.inputRows = this.state.postprocessor.outputRows;
        }
    }
    updatePostprocessor(event) {
        this.state.postprocessor.outputRows = event.rows;
        this.state.postprocessor.updated = true;
    }
    resetPostprocessor() {
        this.state.preprocessor.updated = false;
        this.state.postprocessor.inputRows = this.state.preprocessor.outputRows;
        this.state.postprocessor.outputRows = this.state.postprocessor.inputRows;
        this.state.postprocessor.updated = true;
        this._noty.success('Data has been reset successfully!', 'Operation result');
    }
    preparePublication() {
        // Make cols
        const cols = {};
        this.state.mappings.forEach(elem => {
            cols[elem.targetId] = this.targetColumns.find(a => a.id == elem.targetId).label;
        });
        this.state.publication.cols = cols;
        this.state.publication.rows =
            this.state.postprocessor.outputRows.map(elem => {
                return this.mapObject(elem);
            });
    }
    mapObject(a) {
        const b = { id: a.id };
        this.state.mappings.forEach(elem => {
            b[elem.targetId] = a[elem.sourceId];
        });
        return b;
    }
    updateImportStat(evt) {
        this.importStat.success = evt.success;
        this.importStat.failure = evt.failure;
    }
}
ImportDataWizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportDataWizardComponent, deps: [{ token: i1.NgxNotyImpl }], target: i0.ɵɵFactoryTarget.Component });
ImportDataWizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: ImportDataWizardComponent, selector: "polp-import-data-wizard", inputs: { file: "file", targetColumns: "targetColumns", uploadAsync: "uploadAsync" }, usesInheritance: true, ngImport: i0, template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.preprocessor.inputRows\"\n                             [columnNames]=\"state.preprocessor.cols\"\n                             (onReset)=\"resetPreprocessor()\"\n                             (dataChange)=\"updatePreprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please define the mappings from source columns to target\n        columns, and then move to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-define-column-mapping [sourceColumns]=\"sourceColumns\"\n                                    [targetColumns]=\"targetColumns\"\n                                    (onValueChanged)=\"updateMappings($event)\"\n                                    (onValidation)=\"validateMappings($event)\"\n                                    [initValue]=\"state.mappings\">\n        </polp-define-column-mapping>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.postprocessor.inputRows\"\n                             [columnNames]=\"state.postprocessor.cols\"\n                             (onReset)=\"resetPostprocessor()\"\n                             (dataChange)=\"updatePostprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, and upload some or all of them.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-publication [columnNames]=\"state.publication.cols\"\n                               [uploadAsync]=\"uploadAsync\"\n                               (onImport)=\"startImport()\"\n                               (afterImport)=\"updateImportStat($event)\"\n                               [initData]=\"state.publication.rows\">\n        </polp-data-publication>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n", styles: [""], components: [{ type: i2.DataProcessorComponent, selector: "polp-data-processor", inputs: ["initData", "columnNames"], outputs: ["dataChange", "onReset"] }, { type: i3.DefineColumnMappingComponent, selector: "polp-define-column-mapping", inputs: ["sourceColumns", "targetColumns", "initValue"] }, { type: i4.DataPublicationComponent, selector: "polp-data-publication", inputs: ["initData", "columnNames", "uploadAsync"], outputs: ["onImport", "afterImport"] }, { type: i5.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportDataWizardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-import-data-wizard', template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.preprocessor.inputRows\"\n                             [columnNames]=\"state.preprocessor.cols\"\n                             (onReset)=\"resetPreprocessor()\"\n                             (dataChange)=\"updatePreprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please define the mappings from source columns to target\n        columns, and then move to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-define-column-mapping [sourceColumns]=\"sourceColumns\"\n                                    [targetColumns]=\"targetColumns\"\n                                    (onValueChanged)=\"updateMappings($event)\"\n                                    (onValidation)=\"validateMappings($event)\"\n                                    [initValue]=\"state.mappings\">\n        </polp-define-column-mapping>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.postprocessor.inputRows\"\n                             [columnNames]=\"state.postprocessor.cols\"\n                             (onReset)=\"resetPostprocessor()\"\n                             (dataChange)=\"updatePostprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, and upload some or all of them.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-publication [columnNames]=\"state.publication.cols\"\n                               [uploadAsync]=\"uploadAsync\"\n                               (onImport)=\"startImport()\"\n                               (afterImport)=\"updateImportStat($event)\"\n                               [initData]=\"state.publication.rows\">\n        </polp-data-publication>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.NgxNotyImpl }]; }, propDecorators: { file: [{
                type: Input
            }], targetColumns: [{
                type: Input
            }], uploadAsync: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvaW1wb3J0LWRhdGEtd2l6YXJkL2ltcG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC1kYXRhLXdpemFyZC9pbXBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsSCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUMsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7O0FBK0JyRCxNQUFNLE9BQU8seUJBQ1QsU0FBUSx1QkFBdUI7SUF5Qi9CLFlBQTZCLEtBQWtCO1FBQzNDLEtBQUssRUFBRSxDQUFDO1FBRGlCLFVBQUssR0FBTCxLQUFLLENBQWE7UUF2Qi9DLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUdULGtCQUFhLEdBSWpCLEVB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LEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhQXJyb3dMZWZ0LCBmYUFycm93UmlnaHQsIGZhQ2hlY2ssIGZhQ2hldnJvblJpZ2h0LCBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZ3VpZCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgTmd4Tm90eUltcGwgfSBmcm9tICdAcG9scHdhcmUvbmd4LW5vdHknO1xuaW1wb3J0IHsgSVJvd0RhdGFUeXBlLCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIHNsaWNlQXJyYXkgfSBmcm9tICdAcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlJztcbmltcG9ydCB7IFdpemFyZEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL25neC13aXphcmQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhZC1leGNlbC1maWxlL3R5cGVzJztcbmltcG9ydCB7IHJlYWRFeGNlbEFzeW5jIH0gZnJvbSAnLi4vbWV0aG9kcy9maWxlLW9wcyc7XG5cbmludGVyZmFjZSBJRGF0YVN0YXRlIHtcbiAgICBvcmlnaW5hbERhdGE6IFJvd1tdO1xuICAgIHByZXByb2Nlc3Nvcjoge1xuICAgICAgICBjb2xzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICBpbnB1dFJvd3M6IElSb3dEYXRhVHlwZVtdO1xuICAgICAgICBvdXRwdXRSb3dzOiBJUm93RGF0YVR5cGVbXTtcbiAgICAgICAgdXBkYXRlZDogYm9vbGVhbjtcbiAgICB9O1xuICAgIG1hcHBpbmdzOiBBcnJheTx7XG4gICAgICAgIHNvdXJjZUlkOiBzdHJpbmc7XG4gICAgICAgIHRhcmdldElkOiBzdHJpbmc7XG4gICAgfT47XG4gICAgcG9zdHByb2Nlc3Nvcjoge1xuICAgICAgICBjb2xzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICBpbnB1dFJvd3M6IElSb3dEYXRhVHlwZVtdO1xuICAgICAgICBvdXRwdXRSb3dzOiBJUm93RGF0YVR5cGVbXTtcbiAgICAgICAgdXBkYXRlZDogYm9vbGVhbjtcbiAgICB9O1xuICAgIHB1YmxpY2F0aW9uOiB7XG4gICAgICAgIGNvbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgIHJvd3M6IElSb3dEYXRhVHlwZVtdO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWltcG9ydC1kYXRhLXdpemFyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltcG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1wb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbXBvcnREYXRhV2l6YXJkQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBXaXphcmRBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmYUNoZXZyb25SaWdodCA9IGZhQ2hldnJvblJpZ2h0O1xuICAgIGZhQXJyb3dMZWZ0ID0gZmFBcnJvd0xlZnQ7XG4gICAgZmFBcnJvd1JpZ2h0ID0gZmFBcnJvd1JpZ2h0O1xuICAgIGZhU3Bpbm5lciA9IGZhU3Bpbm5lcjtcbiAgICBmYUNoZWNrID0gZmFDaGVjaztcblxuICAgIEBJbnB1dCgpIGZpbGU6IEZpbGU7XG4gICAgQElucHV0KCkgdGFyZ2V0Q29sdW1uczogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICByZXF1aXJlZDogYm9vbGVhbjtcbiAgICB9PiA9IFtdO1xuICAgIEBJbnB1dCgpIHVwbG9hZEFzeW5jOiAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gUHJvbWlzZTx7XG4gICAgICAgIGZhaWx1cmVzOiBBcnJheTxJUm93RGF0YVR5cGU+O1xuICAgICAgICBlcnJvcnM6IEFycmF5PHN0cmluZz47XG4gICAgfT47XG5cbiAgICBzdGF0ZTogSURhdGFTdGF0ZTtcbiAgICBpc01hcHBpbmdzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBoYXNJbXBvcnRTdGFydGVkID0gZmFsc2U7XG5cbiAgICBpbXBvcnRTdGF0OiB7IHN1Y2Nlc3M6IG51bWJlcjsgZmFpbHVyZTogbnVtYmVyIH0gPSB7IHN1Y2Nlc3M6IDAsIGZhaWx1cmU6IDAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX25vdHk6IE5neE5vdHlJbXBsKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9yaWdpbmFsRGF0YTogW10sXG4gICAgICAgICAgICBwcmVwcm9jZXNzb3I6IHtcbiAgICAgICAgICAgICAgICBjb2xzOiB7fSxcbiAgICAgICAgICAgICAgICBpbnB1dFJvd3M6IFtdLFxuICAgICAgICAgICAgICAgIG91dHB1dFJvd3M6IFtdLFxuICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFwcGluZ3M6IFtdLFxuICAgICAgICAgICAgcG9zdHByb2Nlc3Nvcjoge1xuICAgICAgICAgICAgICAgIGlucHV0Um93czogW10sXG4gICAgICAgICAgICAgICAgb3V0cHV0Um93czogW10sXG4gICAgICAgICAgICAgICAgY29sczoge30sXG4gICAgICAgICAgICAgICAgdXBkYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwdWJsaWNhdGlvbjoge1xuICAgICAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgICAgIGNvbHM6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tYXhEaW0gPSA0O1xuICAgICAgICB0aGlzLmJ1aWxkTmF2aWdhdG9yQ2ZnKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNvdXJjZUNvbHVtbnMoKSB7XG4gICAgICAgIGNvbnN0IHJldDogQXJyYXk8e1xuICAgICAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAgIH0+ID0gW107XG4gICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLmNvbHM7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogcHJvcCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9ialtwcm9wXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZERhdGFBc3luYygpO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgYnVpbGROYXZpZ2F0b3JDZmcoKSB7XG4gICAgICAgIHN1cGVyLmJ1aWxkTmF2aWdhdG9yQ2ZnKCk7XG4gICAgICAgIC8vIFNwZWNpZmljIGxvZ2ljIGluIHRoaXMgY2xhc3NcblxuICAgICAgICAvLyBDb25maWd1cmUgWzFdIDsgb3B0aW9ucyBmb3IgcHJlcHJvY2Vzc29yXG4gICAgICAgIHRoaXMubmF2aWdhdG9yQ2ZnLnNldEVsZW1lbnQoe1xuICAgICAgICAgICAgaGFzUHJldlN0ZXA6IGZhbHNlLFxuICAgICAgICAgICAgaGFzTmV4dFN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0R3VhcmQ6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICB9LCAxKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgWzEsIDFdIDsgb3B0aW9ucyBmb3IgY29sdW1uIG1hcHBpbmdcbiAgICAgICAgdGhpcy5uYXZpZ2F0b3JDZmcuc2V0RWxlbWVudCh7XG4gICAgICAgICAgICBoYXNQcmV2U3RlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc05leHRTdGVwOiB0cnVlLFxuICAgICAgICAgICAgaGFzTmV4dEd1YXJkOiB0cnVlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5leHRTdGVwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUG9zdHByZWNlc3NvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0ZXBJbnRlcm5hbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZTdGVwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IuaW5wdXRSb3dzID0gdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3Iub3V0cHV0Um93cztcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZTdGVwSW50ZXJuYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSwgMSk7XG5cbiAgICAgICAgLy8gQ29uZmlndXJlIFsxLCAxLCAxXSA7IG9wdGlvbnMgZm9yIHBvc3Rwcm9jZXNzb3JcbiAgICAgICAgdGhpcy5uYXZpZ2F0b3JDZmcuc2V0RWxlbWVudCh7XG4gICAgICAgICAgICBoYXNQcmV2U3RlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc05leHRTdGVwOiB0cnVlLFxuICAgICAgICAgICAgaGFzTmV4dEd1YXJkOiB0cnVlLFxuICAgICAgICAgICAgbmV4dFN0ZXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQdWJsaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0ZXBJbnRlcm5hbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfSwgMSwgMSwgMSk7XG5cbiAgICAgICAgLy8gQ29uZmlndXJlIFsxLCAxLCAxLCAxXSA7IG9wdGlvbnMgZm9yIHB1YmxpY2F0aW9uXG4gICAgICAgIHRoaXMubmF2aWdhdG9yQ2ZnLnNldEVsZW1lbnQoe1xuICAgICAgICAgICAgaGFzUHJldlN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0U3RlcDogZmFsc2UsXG4gICAgICAgICAgICBoYXNOZXh0R3VhcmQ6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZTdGVwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogRGlzYWJsZSBwcmV2IGJ1dHRvblxuICAgICAgICAgICAgICAgIHRoaXMucHJldlN0ZXBJbnRlcm5hbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxLCAxLCAxLCAxKTtcblxuXG4gICAgICAgIHRoaXMuc3RlcEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5kaW1JbmRpY2UgPSBbMCwgMCwgMCwgMF07XG4gICAgICAgIHRoaXMuZm9yd2FyZERpbUluZGljZSA9IFsxLCAwLCAwLCAwXTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRvciA9IHRoaXMubmF2aWdhdG9yQ2ZnLmdldEVsZW1lbnQoMCk7XG4gICAgICAgIHRoaXMuZm9yd2FyZE5hdmlnYXRvciA9IHRoaXMubmF2aWdhdG9yQ2ZnLmdldEVsZW1lbnQoLi4udGhpcy5mb3J3YXJkRGltSW5kaWNlKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSBcbiAgICBnZXQgZGlzYWJsZU5leHRTdGVwKCkge1xuICAgICAgICBpZiAodGhpcy5mb3J3YXJkTmF2aWdhdG9yLmhhc05leHRHdWFyZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RlcEluZGV4ID09IDEgJiYgIXRoaXMuaXNNYXBwaW5nc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBpZiBtYXBwaW5ncyBhcmUgbm90IHZhbGlkXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gTm90IG92ZXJyaWRlIFxuICAgIGdldCBkaXNhYmxlUHJldlN0ZXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0ltcG9ydFN0YXJ0ZWQ7XG4gICAgfVxuXG4gICAgc3RhcnRJbXBvcnQoKSB7XG4gICAgICAgIHRoaXMuaGFzSW1wb3J0U3RhcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGFBc3luYygpIHtcbiAgICAgICAgLy8gQXNzdW1lIHRoYXQgdGhlcmUgYXJlIGRhdGEuXG4gICAgICAgIGNvbnN0IHJvd3MgPSBhd2FpdCByZWFkRXhjZWxBc3luYyh0aGlzLmZpbGUpO1xuICAgICAgICBpZiAocm93cy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUub3JpZ2luYWxEYXRhID0gcm93cztcbiAgICAgICAgdGhpcy5wcmVwYXJlUHJlcHJvY2Vzc29yKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZXBhcmVQcmVwcm9jZXNzb3IoKSB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLnN0YXRlLm9yaWdpbmFsRGF0YTtcbiAgICAgICAgLy8gQXNzdW1lIHRoYXQgdGhlIGZpcnN0IHJvdyBpcyB0aGUgaGVhZGVyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSByb3dzWzBdLnJlZHVjZSgoc3VtLCBiLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAnY29sdW1uJyArIChpZHggKyAxKTtcbiAgICAgICAgICAgIHN1bVtrXSA9IGI7XG4gICAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLmNvbHMgPSBjb2x1bW5zO1xuXG4gICAgICAgIGNvbnN0IHJlc3REYXRhID0gc2xpY2VBcnJheShyb3dzLCAxLCByb3dzLmxlbmd0aCk7XG4gICAgICAgIC8vIE5leHQgcHJlcGFyZSBkYXRhXG4gICAgICAgIGNvbnN0IGVsZW1zID0gcmVzdERhdGEubWFwKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEucmVkdWNlKChzdW0sIGIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGsgPSAnY29sdW1uJyArIChpZHggKyAxKTtcbiAgICAgICAgICAgICAgICBzdW1ba10gPSBiO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgICAgICB9LCB7IGlkOiBndWlkKCkgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLmlucHV0Um93cyA9IGVsZW1zO1xuICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5vdXRwdXRSb3dzID0gZWxlbXM7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLnVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0UHJlcHJvY2Vzc29yKCkge1xuICAgICAgICB0aGlzLnByZXBhcmVQcmVwcm9jZXNzb3IoKTtcbiAgICAgICAgdGhpcy5fbm90eS5zdWNjZXNzKCdEYXRhIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseSEnLCAnT3BlcmF0aW9uIHJlc3VsdCcpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByZXByb2Nlc3NvcihldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLm91dHB1dFJvd3MgPSBldmVudC5yb3dzO1xuICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci51cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXBwaW5ncyhkYXRhOiBBcnJheTx7XG4gICAgICAgIHNvdXJjZUlkOiBzdHJpbmc7XG4gICAgICAgIHRhcmdldElkOiBzdHJpbmc7XG4gICAgfT4pIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXBwaW5ncyA9IFsuLi5kYXRhXTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZU1hcHBpbmdzKGVycm9yczogYW55KSB7XG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXBwaW5nc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTWFwcGluZ3NWYWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVwYXJlUG9zdHByZWNlc3NvcigpIHtcblxuICAgICAgICAvLyBQcmVwYXJlIGNvbHVtbnNcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubWFwcGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLnN0YXRlLm1hcHBpbmdzW2ldO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IuY29sc1tlbGVtLnNvdXJjZUlkXTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0Q29sdW1ucy5maW5kKGEgPT4gYS5pZCA9PSBlbGVtLnRhcmdldElkKTtcbiAgICAgICAgICAgIGNvbHVtbnNbZWxlbS5zb3VyY2VJZF0gPSBgJHtzb3VyY2V9ID0+ICR7dGFyZ2V0LmxhYmVsfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLmNvbHMgPSBjb2x1bW5zO1xuXG4gICAgICAgIC8vIElmIHRoZSBwcmVkZWNlc3NvciBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IudXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IudXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IuaW5wdXRSb3dzID0gdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3Iub3V0cHV0Um93cztcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5vdXRwdXRSb3dzID0gdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLmlucHV0Um93cztcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci51cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5pbnB1dFJvd3MgPSB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3Iub3V0cHV0Um93cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVBvc3Rwcm9jZXNzb3IoZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCkge1xuICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3Iub3V0cHV0Um93cyA9IGV2ZW50LnJvd3M7XG4gICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci51cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNldFBvc3Rwcm9jZXNzb3IoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLmlucHV0Um93cyA9IHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLm91dHB1dFJvd3M7XG4gICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5vdXRwdXRSb3dzID0gdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLmlucHV0Um93cztcbiAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9ub3R5LnN1Y2Nlc3MoJ0RhdGEgaGFzIGJlZW4gcmVzZXQgc3VjY2Vzc2Z1bGx5IScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XG4gICAgfVxuXG4gICAgcHJlcGFyZVB1YmxpY2F0aW9uKCkge1xuICAgICAgICAvLyBNYWtlIGNvbHNcbiAgICAgICAgY29uc3QgY29scyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlLm1hcHBpbmdzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBjb2xzW2VsZW0udGFyZ2V0SWRdID0gdGhpcy50YXJnZXRDb2x1bW5zLmZpbmQoYSA9PiBhLmlkID09IGVsZW0udGFyZ2V0SWQpLmxhYmVsO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5wdWJsaWNhdGlvbi5jb2xzID0gY29scztcblxuICAgICAgICB0aGlzLnN0YXRlLnB1YmxpY2F0aW9uLnJvd3MgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLm91dHB1dFJvd3MubWFwKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcE9iamVjdChlbGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBPYmplY3QoYTogSVJvd0RhdGFUeXBlKSB7XG4gICAgICAgIGNvbnN0IGIgPSB7IGlkOiBhLmlkIH07XG4gICAgICAgIHRoaXMuc3RhdGUubWFwcGluZ3MuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgIGJbZWxlbS50YXJnZXRJZF0gPSBhW2VsZW0uc291cmNlSWRdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgdXBkYXRlSW1wb3J0U3RhdChldnQ6IHsgc3VjY2VzczogbnVtYmVyOyBmYWlsdXJlOiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLmltcG9ydFN0YXQuc3VjY2VzcyA9IGV2dC5zdWNjZXNzO1xuICAgICAgICB0aGlzLmltcG9ydFN0YXQuZmFpbHVyZSA9IGV2dC5mYWlsdXJlO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nSWY9XCJ2aXNpYmxlKDApXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGg2XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmsgbWUtMVwiPlN0ZXAge3tzdGVwSW5kZXggKyAxfX08L3NwYW4+XG4gICAgICAgIFBsZWFzZSByZXZpZXcgdGhlIGRhdGEgYmVsb3csIG1ha2UgY2hhbmdlcywgYW5kIHRoZW4gY29udGludWVcbiAgICAgICAgdG8gdGhlIG5leHQgc3RlcC5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwb2xwLWRhdGEtcHJvY2Vzc29yIFtpbml0RGF0YV09XCJzdGF0ZS5wcmVwcm9jZXNzb3IuaW5wdXRSb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk5hbWVzXT1cInN0YXRlLnByZXByb2Nlc3Nvci5jb2xzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVzZXQpPVwicmVzZXRQcmVwcm9jZXNzb3IoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhQ2hhbmdlKT1cInVwZGF0ZVByZXByb2Nlc3NvcigkZXZlbnQpXCI+XG4gICAgICAgIDwvcG9scC1kYXRhLXByb2Nlc3Nvcj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY2FyZFwiICpuZ0lmPVwidmlzaWJsZSgxKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBoNlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrIG1lLTFcIj5TdGVwIHt7c3RlcEluZGV4ICsgMX19PC9zcGFuPlxuICAgICAgICBQbGVhc2UgZGVmaW5lIHRoZSBtYXBwaW5ncyBmcm9tIHNvdXJjZSBjb2x1bW5zIHRvIHRhcmdldFxuICAgICAgICBjb2x1bW5zLCBhbmQgdGhlbiBtb3ZlIHRvIHRoZSBuZXh0IHN0ZXAuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8cG9scC1kZWZpbmUtY29sdW1uLW1hcHBpbmcgW3NvdXJjZUNvbHVtbnNdPVwic291cmNlQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGFyZ2V0Q29sdW1uc109XCJ0YXJnZXRDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblZhbHVlQ2hhbmdlZCk9XCJ1cGRhdGVNYXBwaW5ncygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblZhbGlkYXRpb24pPVwidmFsaWRhdGVNYXBwaW5ncygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbml0VmFsdWVdPVwic3RhdGUubWFwcGluZ3NcIj5cbiAgICAgICAgPC9wb2xwLWRlZmluZS1jb2x1bW4tbWFwcGluZz5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY2FyZFwiICpuZ0lmPVwidmlzaWJsZSgxLCAxKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBoNlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrIG1lLTFcIj5TdGVwIHt7c3RlcEluZGV4ICsgMX19PC9zcGFuPlxuICAgICAgICBQbGVhc2UgcmV2aWV3IHRoZSBkYXRhIGJlbG93LCBtYWtlIGNoYW5nZXMsIGFuZCB0aGVuIGNvbnRpbnVlXG4gICAgICAgIHRvIHRoZSBuZXh0IHN0ZXAuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8cG9scC1kYXRhLXByb2Nlc3NvciBbaW5pdERhdGFdPVwic3RhdGUucG9zdHByb2Nlc3Nvci5pbnB1dFJvd3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTmFtZXNdPVwic3RhdGUucG9zdHByb2Nlc3Nvci5jb2xzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uUmVzZXQpPVwicmVzZXRQb3N0cHJvY2Vzc29yKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YUNoYW5nZSk9XCJ1cGRhdGVQb3N0cHJvY2Vzc29yKCRldmVudClcIj5cbiAgICAgICAgPC9wb2xwLWRhdGEtcHJvY2Vzc29yPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nSWY9XCJ2aXNpYmxlKDEsIDEsIDEpXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGg2XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmsgbWUtMVwiPlN0ZXAge3tzdGVwSW5kZXggKyAxfX08L3NwYW4+XG4gICAgICAgIFBsZWFzZSByZXZpZXcgdGhlIGRhdGEgYmVsb3csIGFuZCB1cGxvYWQgc29tZSBvciBhbGwgb2YgdGhlbS5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwb2xwLWRhdGEtcHVibGljYXRpb24gW2NvbHVtbk5hbWVzXT1cInN0YXRlLnB1YmxpY2F0aW9uLmNvbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1cGxvYWRBc3luY109XCJ1cGxvYWRBc3luY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uSW1wb3J0KT1cInN0YXJ0SW1wb3J0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhZnRlckltcG9ydCk9XCJ1cGRhdGVJbXBvcnRTdGF0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbml0RGF0YV09XCJzdGF0ZS5wdWJsaWNhdGlvbi5yb3dzXCI+XG4gICAgICAgIDwvcG9scC1kYXRhLXB1YmxpY2F0aW9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gTmF2aWdhdGlvbiAtLT5cbjxkaXYgY2xhc3M9XCJkLWZsZXggbXQtNCBtYi00XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZVByZXZTdGVwXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaGFzUHJldlN0ZXBcIiAoY2xpY2spPVwicHJldlN0ZXAoKVwiPlxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93TGVmdFwiPjwvZmEtaWNvbj5cbiAgICAgICAgUHJldmlvdXNcbiAgICA8L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz1cIm1lLWF1dG9cIj48L3NwYW4+ICAgIFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVOZXh0U3RlcFwiXG4gICAgICAgICAgICAqbmdJZj1cImhhc05leHRTdGVwXCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5cbiAgICAgICAgTmV4dFxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93UmlnaHRcIj48L2ZhLWljb24+ICAgICAgICAgICAgICAgIFxuICAgIDwvYnV0dG9uPiAgICAgICAgICAgIFxuPC9kaXY+ICAgIFxuIl19