import { Component, Input } from '@angular/core';
import { faArrowLeft, faArrowRight, faCheck, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { guid } from '@polpware/fe-utilities';
import { sliceArray } from '@polpware/ngx-reactive-table';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import { readExcelAsync } from '../methods/file-ops';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-noty";
import * as i2 from "@angular/common";
import * as i3 from "@fortawesome/angular-fontawesome";
import * as i4 from "../define-column-mapping/define-column-mapping.component";
import * as i5 from "../data-publication/data-publication.component";
import * as i6 from "../data-processor/data-processor.component";
function ImportDataWizardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, make changes, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-processor", 9);
    i0.ɵɵlistener("onReset", function ImportDataWizardComponent_div_0_Template_polp_data_processor_onReset_6_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.resetPreprocessor()); })("dataChange", function ImportDataWizardComponent_div_0_Template_polp_data_processor_dataChange_6_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.updatePreprocessor($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r0.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r0.state.preprocessor.inputRows)("columnNames", ctx_r0.state.preprocessor.cols);
} }
function ImportDataWizardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please define the mappings from source columns to target columns, and then move to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-define-column-mapping", 10);
    i0.ɵɵlistener("onValueChanged", function ImportDataWizardComponent_div_1_Template_polp_define_column_mapping_onValueChanged_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.updateMappings($event)); })("onValidation", function ImportDataWizardComponent_div_1_Template_polp_define_column_mapping_onValidation_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.validateMappings($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("sourceColumns", ctx_r1.sourceColumns)("targetColumns", ctx_r1.targetColumns)("initValue", ctx_r1.state.mappings);
} }
function ImportDataWizardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, make changes, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-processor", 9);
    i0.ɵɵlistener("onReset", function ImportDataWizardComponent_div_2_Template_polp_data_processor_onReset_6_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.resetPostprocessor()); })("dataChange", function ImportDataWizardComponent_div_2_Template_polp_data_processor_dataChange_6_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.updatePostprocessor($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r2.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r2.state.postprocessor.inputRows)("columnNames", ctx_r2.state.postprocessor.cols);
} }
function ImportDataWizardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, and upload some or all of them. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-publication", 11);
    i0.ɵɵlistener("onImport", function ImportDataWizardComponent_div_3_Template_polp_data_publication_onImport_6_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.startImport()); })("afterImport", function ImportDataWizardComponent_div_3_Template_polp_data_publication_afterImport_6_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.updateImportStat($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r3.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("columnNames", ctx_r3.state.publication.cols)("uploadAsync", ctx_r3.uploadAsync)("initData", ctx_r3.state.publication.rows);
} }
function ImportDataWizardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function ImportDataWizardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.prevStep()); });
    i0.ɵɵelement(1, "fa-icon", 13);
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r4.disablePrevStep);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r4.faArrowLeft);
} }
function ImportDataWizardComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ImportDataWizardComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.nextStep()); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelement(2, "fa-icon", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r5.disableNextStep);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r5.faArrowRight);
} }
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
    static { this.ɵfac = function ImportDataWizardComponent_Factory(t) { return new (t || ImportDataWizardComponent)(i0.ɵɵdirectiveInject(i1.NgxNotyImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportDataWizardComponent, selectors: [["polp-import-data-wizard"]], inputs: { file: "file", targetColumns: "targetColumns", uploadAsync: "uploadAsync" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 6, consts: [["class", "card", 4, "ngIf"], [1, "d-flex", "mt-4", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "disabled", "click", 4, "ngIf"], [1, "me-auto"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "card"], [1, "card-header", "h6"], [1, "badge", "rounded-pill", "bg-dark", "me-1"], [1, "card-body"], [3, "initData", "columnNames", "onReset", "dataChange"], [3, "sourceColumns", "targetColumns", "initValue", "onValueChanged", "onValidation"], [3, "columnNames", "uploadAsync", "initData", "onImport", "afterImport"], ["type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function ImportDataWizardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ImportDataWizardComponent_div_0_Template, 7, 3, "div", 0);
            i0.ɵɵtemplate(1, ImportDataWizardComponent_div_1_Template, 7, 4, "div", 0);
            i0.ɵɵtemplate(2, ImportDataWizardComponent_div_2_Template, 7, 3, "div", 0);
            i0.ɵɵtemplate(3, ImportDataWizardComponent_div_3_Template, 7, 4, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵtemplate(5, ImportDataWizardComponent_button_5_Template, 3, 2, "button", 2);
            i0.ɵɵelement(6, "span", 3);
            i0.ɵɵtemplate(7, ImportDataWizardComponent_button_7_Template, 3, 2, "button", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible(0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.visible(1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.visible(1, 1));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.visible(1, 1, 1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasPrevStep);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasNextStep);
        } }, dependencies: [i2.NgIf, i3.FaIconComponent, i4.DefineColumnMappingComponent, i5.DataPublicationComponent, i6.DataProcessorComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportDataWizardComponent, [{
        type: Component,
        args: [{ selector: 'polp-import-data-wizard', template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.preprocessor.inputRows\"\n                             [columnNames]=\"state.preprocessor.cols\"\n                             (onReset)=\"resetPreprocessor()\"\n                             (dataChange)=\"updatePreprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please define the mappings from source columns to target\n        columns, and then move to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-define-column-mapping [sourceColumns]=\"sourceColumns\"\n                                    [targetColumns]=\"targetColumns\"\n                                    (onValueChanged)=\"updateMappings($event)\"\n                                    (onValidation)=\"validateMappings($event)\"\n                                    [initValue]=\"state.mappings\">\n        </polp-define-column-mapping>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.postprocessor.inputRows\"\n                             [columnNames]=\"state.postprocessor.cols\"\n                             (onReset)=\"resetPostprocessor()\"\n                             (dataChange)=\"updatePostprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, and upload some or all of them.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-publication [columnNames]=\"state.publication.cols\"\n                               [uploadAsync]=\"uploadAsync\"\n                               (onImport)=\"startImport()\"\n                               (afterImport)=\"updateImportStat($event)\"\n                               [initData]=\"state.publication.rows\">\n        </polp-data-publication>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n" }]
    }], function () { return [{ type: i1.NgxNotyImpl }]; }, { file: [{
            type: Input
        }], targetColumns: [{
            type: Input
        }], uploadAsync: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvaW1wb3J0LWRhdGEtd2l6YXJkL2ltcG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC1kYXRhLXdpemFyZC9pbXBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsSCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUMsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7SUNQckQsOEJBQXFDLGFBQUEsY0FBQTtJQUVpQixZQUFzQjtJQUFBLGlCQUFPO0lBQzNFLGlHQUVKO0lBQUEsaUJBQU07SUFDTiw4QkFBdUIsNkJBQUE7SUFHRSx1TEFBVyxlQUFBLDBCQUFtQixDQUFBLElBQUMsc0xBQ2pCLGVBQUEsaUNBQTBCLENBQUEsSUFEVDtJQUVwRCxpQkFBc0IsRUFBQSxFQUFBOzs7SUFUd0IsZUFBc0I7SUFBdEIsd0RBQXNCO0lBSy9DLGVBQXlDO0lBQXpDLDhEQUF5QywrQ0FBQTs7OztJQVF0RSw4QkFBcUMsYUFBQSxj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RUQsZ0JBQWdCLENBQUMsR0FBeUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFDLENBQUM7MEZBeFJRLHlCQUF5QjtvRUFBekIseUJBQXlCO1lDdEN0QywwRUFhTTtZQUVOLDBFQWNNO1lBRU4sMEVBYU07WUFFTiwwRUFhTTtZQUdOLDhCQUE4QjtZQUMxQixnRkFJUztZQUNULDBCQUE2QjtZQUM3QixnRkFJUztZQUNiLGlCQUFNOztZQTFFYSxxQ0FBZ0I7WUFlaEIsZUFBZ0I7WUFBaEIscUNBQWdCO1lBZ0JoQixlQUFtQjtZQUFuQix3Q0FBbUI7WUFlbkIsZUFBc0I7WUFBdEIsMkNBQXNCO1lBa0I1QixlQUFpQjtZQUFqQixzQ0FBaUI7WUFNakIsZUFBaUI7WUFBakIsc0NBQWlCOzs7dUZEaENqQix5QkFBeUI7Y0FMckMsU0FBUzsyQkFDSSx5QkFBeUI7OERBYTFCLElBQUk7a0JBQVosS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFLRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0LCBmYUNoZWNrLCBmYUNoZXZyb25SaWdodCwgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGd1aWQgfSBmcm9tICdAcG9scHdhcmUvZmUtdXRpbGl0aWVzJztcbmltcG9ydCB7IE5neE5vdHlJbXBsIH0gZnJvbSAnQHBvbHB3YXJlL25neC1ub3R5JztcbmltcG9ydCB7IElSb3dEYXRhVHlwZSwgSVRhYmxlRGF0YUNoYW5nZUV2ZW50LCBzbGljZUFycmF5IH0gZnJvbSAnQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZSc7XG5pbXBvcnQgeyBXaXphcmRBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtd2l6YXJkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWQtZXhjZWwtZmlsZS90eXBlcyc7XG5pbXBvcnQgeyByZWFkRXhjZWxBc3luYyB9IGZyb20gJy4uL21ldGhvZHMvZmlsZS1vcHMnO1xuXG5pbnRlcmZhY2UgSURhdGFTdGF0ZSB7XG4gICAgb3JpZ2luYWxEYXRhOiBSb3dbXTtcbiAgICBwcmVwcm9jZXNzb3I6IHtcbiAgICAgICAgY29sczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgaW5wdXRSb3dzOiBJUm93RGF0YVR5cGVbXTtcbiAgICAgICAgb3V0cHV0Um93czogSVJvd0RhdGFUeXBlW107XG4gICAgICAgIHVwZGF0ZWQ6IGJvb2xlYW47XG4gICAgfTtcbiAgICBtYXBwaW5nczogQXJyYXk8e1xuICAgICAgICBzb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIH0+O1xuICAgIHBvc3Rwcm9jZXNzb3I6IHtcbiAgICAgICAgY29sczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgaW5wdXRSb3dzOiBJUm93RGF0YVR5cGVbXTtcbiAgICAgICAgb3V0cHV0Um93czogSVJvd0RhdGFUeXBlW107XG4gICAgICAgIHVwZGF0ZWQ6IGJvb2xlYW47XG4gICAgfTtcbiAgICBwdWJsaWNhdGlvbjoge1xuICAgICAgICBjb2xzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICByb3dzOiBJUm93RGF0YVR5cGVbXTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1pbXBvcnQtZGF0YS13aXphcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbXBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltcG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1wb3J0RGF0YVdpemFyZENvbXBvbmVudFxuICAgIGV4dGVuZHMgV2l6YXJkQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZmFDaGV2cm9uUmlnaHQgPSBmYUNoZXZyb25SaWdodDtcbiAgICBmYUFycm93TGVmdCA9IGZhQXJyb3dMZWZ0O1xuICAgIGZhQXJyb3dSaWdodCA9IGZhQXJyb3dSaWdodDtcbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG4gICAgZmFDaGVjayA9IGZhQ2hlY2s7XG5cbiAgICBASW5wdXQoKSBmaWxlOiBGaWxlO1xuICAgIEBJbnB1dCgpIHRhcmdldENvbHVtbnM6IEFycmF5PHtcbiAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgfT4gPSBbXTtcbiAgICBASW5wdXQoKSB1cGxvYWRBc3luYzogKGRhdGE6IEFycmF5PElSb3dEYXRhVHlwZT4pID0+IFByb21pc2U8e1xuICAgICAgICBmYWlsdXJlczogQXJyYXk8SVJvd0RhdGFUeXBlPjtcbiAgICAgICAgZXJyb3JzOiBBcnJheTxzdHJpbmc+O1xuICAgIH0+O1xuXG4gICAgc3RhdGU6IElEYXRhU3RhdGU7XG4gICAgaXNNYXBwaW5nc1ZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaGFzSW1wb3J0U3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgaW1wb3J0U3RhdDogeyBzdWNjZXNzOiBudW1iZXI7IGZhaWx1cmU6IG51bWJlciB9ID0geyBzdWNjZXNzOiAwLCBmYWlsdXJlOiAwIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9ub3R5OiBOZ3hOb3R5SW1wbCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcmlnaW5hbERhdGE6IFtdLFxuICAgICAgICAgICAgcHJlcHJvY2Vzc29yOiB7XG4gICAgICAgICAgICAgICAgY29sczoge30sXG4gICAgICAgICAgICAgICAgaW5wdXRSb3dzOiBbXSxcbiAgICAgICAgICAgICAgICBvdXRwdXRSb3dzOiBbXSxcbiAgICAgICAgICAgICAgICB1cGRhdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcHBpbmdzOiBbXSxcbiAgICAgICAgICAgIHBvc3Rwcm9jZXNzb3I6IHtcbiAgICAgICAgICAgICAgICBpbnB1dFJvd3M6IFtdLFxuICAgICAgICAgICAgICAgIG91dHB1dFJvd3M6IFtdLFxuICAgICAgICAgICAgICAgIGNvbHM6IHt9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHVibGljYXRpb246IHtcbiAgICAgICAgICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgICAgICAgICBjb2xzOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubWF4RGltID0gNDtcbiAgICAgICAgdGhpcy5idWlsZE5hdmlnYXRvckNmZygpO1xuICAgIH1cblxuICAgIGdldCBzb3VyY2VDb2x1bW5zKCkge1xuICAgICAgICBjb25zdCByZXQ6IEFycmF5PHtcbiAgICAgICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICB9PiA9IFtdO1xuICAgICAgICBjb25zdCBvYmogPSB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5jb2xzO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHByb3AsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvYmpbcHJvcF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWREYXRhQXN5bmMoKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIGJ1aWxkTmF2aWdhdG9yQ2ZnKCkge1xuICAgICAgICBzdXBlci5idWlsZE5hdmlnYXRvckNmZygpO1xuICAgICAgICAvLyBTcGVjaWZpYyBsb2dpYyBpbiB0aGlzIGNsYXNzXG5cbiAgICAgICAgLy8gQ29uZmlndXJlIFsxXSA7IG9wdGlvbnMgZm9yIHByZXByb2Nlc3NvclxuICAgICAgICB0aGlzLm5hdmlnYXRvckNmZy5zZXRFbGVtZW50KHtcbiAgICAgICAgICAgIGhhc1ByZXZTdGVwOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc05leHRTdGVwOiB0cnVlLFxuICAgICAgICAgICAgaGFzTmV4dEd1YXJkOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgLy8gQ29uZmlndXJlIFsxLCAxXSA7IG9wdGlvbnMgZm9yIGNvbHVtbiBtYXBwaW5nXG4gICAgICAgIHRoaXMubmF2aWdhdG9yQ2ZnLnNldEVsZW1lbnQoe1xuICAgICAgICAgICAgaGFzUHJldlN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0U3RlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc05leHRHdWFyZDogdHJ1ZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBuZXh0U3RlcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVBvc3RwcmVjZXNzb3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTdGVwSW50ZXJuYWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmV2U3RlcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLmlucHV0Um93cyA9IHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLm91dHB1dFJvd3M7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2U3RlcEludGVybmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEsIDEpO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBbMSwgMSwgMV0gOyBvcHRpb25zIGZvciBwb3N0cHJvY2Vzc29yXG4gICAgICAgIHRoaXMubmF2aWdhdG9yQ2ZnLnNldEVsZW1lbnQoe1xuICAgICAgICAgICAgaGFzUHJldlN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0U3RlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc05leHRHdWFyZDogdHJ1ZSxcbiAgICAgICAgICAgIG5leHRTdGVwOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlUHVibGljYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTdGVwSW50ZXJuYWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH0sIDEsIDEsIDEpO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBbMSwgMSwgMSwgMV0gOyBvcHRpb25zIGZvciBwdWJsaWNhdGlvblxuICAgICAgICB0aGlzLm5hdmlnYXRvckNmZy5zZXRFbGVtZW50KHtcbiAgICAgICAgICAgIGhhc1ByZXZTdGVwOiB0cnVlLFxuICAgICAgICAgICAgaGFzTmV4dFN0ZXA6IGZhbHNlLFxuICAgICAgICAgICAgaGFzTmV4dEd1YXJkOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2U3RlcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IERpc2FibGUgcHJldiBidXR0b25cbiAgICAgICAgICAgICAgICB0aGlzLnByZXZTdGVwSW50ZXJuYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSwgMSwgMSwgMSk7XG5cblxuICAgICAgICB0aGlzLnN0ZXBJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZGltSW5kaWNlID0gWzAsIDAsIDAsIDBdO1xuICAgICAgICB0aGlzLmZvcndhcmREaW1JbmRpY2UgPSBbMSwgMCwgMCwgMF07XG5cbiAgICAgICAgdGhpcy5uYXZpZ2F0b3IgPSB0aGlzLm5hdmlnYXRvckNmZy5nZXRFbGVtZW50KDApO1xuICAgICAgICB0aGlzLmZvcndhcmROYXZpZ2F0b3IgPSB0aGlzLm5hdmlnYXRvckNmZy5nZXRFbGVtZW50KC4uLnRoaXMuZm9yd2FyZERpbUluZGljZSk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGUgXG4gICAgZ2V0IGRpc2FibGVOZXh0U3RlcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9yd2FyZE5hdmlnYXRvci5oYXNOZXh0R3VhcmQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0ZXBJbmRleCA9PSAxICYmICF0aGlzLmlzTWFwcGluZ3NWYWxpZCkge1xuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgaWYgbWFwcGluZ3MgYXJlIG5vdCB2YWxpZFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE5vdCBvdmVycmlkZSBcbiAgICBnZXQgZGlzYWJsZVByZXZTdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNJbXBvcnRTdGFydGVkO1xuICAgIH1cblxuICAgIHN0YXJ0SW1wb3J0KCkge1xuICAgICAgICB0aGlzLmhhc0ltcG9ydFN0YXJ0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWREYXRhQXN5bmMoKSB7XG4gICAgICAgIC8vIEFzc3VtZSB0aGF0IHRoZXJlIGFyZSBkYXRhLlxuICAgICAgICBjb25zdCByb3dzID0gYXdhaXQgcmVhZEV4Y2VsQXN5bmModGhpcy5maWxlKTtcbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLm9yaWdpbmFsRGF0YSA9IHJvd3M7XG4gICAgICAgIHRoaXMucHJlcGFyZVByZXByb2Nlc3NvcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVwYXJlUHJlcHJvY2Vzc29yKCkge1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy5zdGF0ZS5vcmlnaW5hbERhdGE7XG4gICAgICAgIC8vIEFzc3VtZSB0aGF0IHRoZSBmaXJzdCByb3cgaXMgdGhlIGhlYWRlclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gcm93c1swXS5yZWR1Y2UoKHN1bSwgYiwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrID0gJ2NvbHVtbicgKyAoaWR4ICsgMSk7XG4gICAgICAgICAgICBzdW1ba10gPSBiO1xuICAgICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwge30pO1xuICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5jb2xzID0gY29sdW1ucztcblxuICAgICAgICBjb25zdCByZXN0RGF0YSA9IHNsaWNlQXJyYXkocm93cywgMSwgcm93cy5sZW5ndGgpO1xuICAgICAgICAvLyBOZXh0IHByZXBhcmUgZGF0YVxuICAgICAgICBjb25zdCBlbGVtcyA9IHJlc3REYXRhLm1hcChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLnJlZHVjZSgoc3VtLCBiLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gJ2NvbHVtbicgKyAoaWR4ICsgMSk7XG4gICAgICAgICAgICAgICAgc3VtW2tdID0gYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICAgICAgfSwgeyBpZDogZ3VpZCgpIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5pbnB1dFJvd3MgPSBlbGVtcztcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3Iub3V0cHV0Um93cyA9IGVsZW1zO1xuICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci51cGRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNldFByZXByb2Nlc3NvcigpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlUHJlcHJvY2Vzc29yKCk7XG4gICAgICAgIHRoaXMuX25vdHkuc3VjY2VzcygnRGF0YSBoYXMgYmVlbiByZXNldCBzdWNjZXNzZnVsbHkhJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmVwcm9jZXNzb3IoZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCkge1xuICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5vdXRwdXRSb3dzID0gZXZlbnQucm93cztcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IudXBkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlTWFwcGluZ3MoZGF0YTogQXJyYXk8e1xuICAgICAgICBzb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIH0+KSB7XG4gICAgICAgIHRoaXMuc3RhdGUubWFwcGluZ3MgPSBbLi4uZGF0YV07XG4gICAgfVxuXG4gICAgdmFsaWRhdGVNYXBwaW5ncyhlcnJvcnM6IGFueSkge1xuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICB0aGlzLmlzTWFwcGluZ3NWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc01hcHBpbmdzVmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlcGFyZVBvc3RwcmVjZXNzb3IoKSB7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBjb2x1bW5zXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1hcHBpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5zdGF0ZS5tYXBwaW5nc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLmNvbHNbZWxlbS5zb3VyY2VJZF07XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldENvbHVtbnMuZmluZChhID0+IGEuaWQgPT0gZWxlbS50YXJnZXRJZCk7XG4gICAgICAgICAgICBjb2x1bW5zW2VsZW0uc291cmNlSWRdID0gYCR7c291cmNlfSA9PiAke3RhcmdldC5sYWJlbH1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5jb2xzID0gY29sdW1ucztcblxuICAgICAgICAvLyBJZiB0aGUgcHJlZGVjZXNzb3IgaGFzIGJlZW4gY2hhbmdlZC5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLnVwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLnVwZGF0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLmlucHV0Um93cyA9IHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLm91dHB1dFJvd3M7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3Iub3V0cHV0Um93cyA9IHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5pbnB1dFJvd3M7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IudXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IuaW5wdXRSb3dzID0gdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLm91dHB1dFJvd3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQb3N0cHJvY2Vzc29yKGV2ZW50OiBJVGFibGVEYXRhQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLm91dHB1dFJvd3MgPSBldmVudC5yb3dzO1xuICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IudXBkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXRQb3N0cHJvY2Vzc29yKCkge1xuICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci51cGRhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5pbnB1dFJvd3MgPSB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5vdXRwdXRSb3dzO1xuICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3Iub3V0cHV0Um93cyA9IHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5pbnB1dFJvd3M7XG4gICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci51cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbm90eS5zdWNjZXNzKCdEYXRhIGhhcyBiZWVuIHJlc2V0IHN1Y2Nlc3NmdWxseSEnLCAnT3BlcmF0aW9uIHJlc3VsdCcpO1xuICAgIH1cblxuICAgIHByZXBhcmVQdWJsaWNhdGlvbigpIHtcbiAgICAgICAgLy8gTWFrZSBjb2xzXG4gICAgICAgIGNvbnN0IGNvbHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXBwaW5ncy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgY29sc1tlbGVtLnRhcmdldElkXSA9IHRoaXMudGFyZ2V0Q29sdW1ucy5maW5kKGEgPT4gYS5pZCA9PSBlbGVtLnRhcmdldElkKS5sYWJlbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUucHVibGljYXRpb24uY29scyA9IGNvbHM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5wdWJsaWNhdGlvbi5yb3dzID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5vdXRwdXRSb3dzLm1hcChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBPYmplY3QoZWxlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwT2JqZWN0KGE6IElSb3dEYXRhVHlwZSkge1xuICAgICAgICBjb25zdCBiID0geyBpZDogYS5pZCB9O1xuICAgICAgICB0aGlzLnN0YXRlLm1hcHBpbmdzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBiW2VsZW0udGFyZ2V0SWRdID0gYVtlbGVtLnNvdXJjZUlkXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cblxuICAgIHVwZGF0ZUltcG9ydFN0YXQoZXZ0OiB7IHN1Y2Nlc3M6IG51bWJlcjsgZmFpbHVyZTogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5pbXBvcnRTdGF0LnN1Y2Nlc3MgPSBldnQuc3VjY2VzcztcbiAgICAgICAgdGhpcy5pbXBvcnRTdGF0LmZhaWx1cmUgPSBldnQuZmFpbHVyZTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiICpuZ0lmPVwidmlzaWJsZSgwKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBoNlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrIG1lLTFcIj5TdGVwIHt7c3RlcEluZGV4ICsgMX19PC9zcGFuPlxuICAgICAgICBQbGVhc2UgcmV2aWV3IHRoZSBkYXRhIGJlbG93LCBtYWtlIGNoYW5nZXMsIGFuZCB0aGVuIGNvbnRpbnVlXG4gICAgICAgIHRvIHRoZSBuZXh0IHN0ZXAuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8cG9scC1kYXRhLXByb2Nlc3NvciBbaW5pdERhdGFdPVwic3RhdGUucHJlcHJvY2Vzc29yLmlucHV0Um93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5OYW1lc109XCJzdGF0ZS5wcmVwcm9jZXNzb3IuY29sc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlc2V0KT1cInJlc2V0UHJlcHJvY2Vzc29yKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YUNoYW5nZSk9XCJ1cGRhdGVQcmVwcm9jZXNzb3IoJGV2ZW50KVwiPlxuICAgICAgICA8L3BvbHAtZGF0YS1wcm9jZXNzb3I+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cInZpc2libGUoMSlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgaDZcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFyayBtZS0xXCI+U3RlcCB7e3N0ZXBJbmRleCArIDF9fTwvc3Bhbj5cbiAgICAgICAgUGxlYXNlIGRlZmluZSB0aGUgbWFwcGluZ3MgZnJvbSBzb3VyY2UgY29sdW1ucyB0byB0YXJnZXRcbiAgICAgICAgY29sdW1ucywgYW5kIHRoZW4gbW92ZSB0byB0aGUgbmV4dCBzdGVwLlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPHBvbHAtZGVmaW5lLWNvbHVtbi1tYXBwaW5nIFtzb3VyY2VDb2x1bW5zXT1cInNvdXJjZUNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RhcmdldENvbHVtbnNdPVwidGFyZ2V0Q29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25WYWx1ZUNoYW5nZWQpPVwidXBkYXRlTWFwcGluZ3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25WYWxpZGF0aW9uKT1cInZhbGlkYXRlTWFwcGluZ3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5pdFZhbHVlXT1cInN0YXRlLm1hcHBpbmdzXCI+XG4gICAgICAgIDwvcG9scC1kZWZpbmUtY29sdW1uLW1hcHBpbmc+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cInZpc2libGUoMSwgMSlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgaDZcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFyayBtZS0xXCI+U3RlcCB7e3N0ZXBJbmRleCArIDF9fTwvc3Bhbj5cbiAgICAgICAgUGxlYXNlIHJldmlldyB0aGUgZGF0YSBiZWxvdywgbWFrZSBjaGFuZ2VzLCBhbmQgdGhlbiBjb250aW51ZVxuICAgICAgICB0byB0aGUgbmV4dCBzdGVwLlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPHBvbHAtZGF0YS1wcm9jZXNzb3IgW2luaXREYXRhXT1cInN0YXRlLnBvc3Rwcm9jZXNzb3IuaW5wdXRSb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk5hbWVzXT1cInN0YXRlLnBvc3Rwcm9jZXNzb3IuY29sc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblJlc2V0KT1cInJlc2V0UG9zdHByb2Nlc3NvcigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFDaGFuZ2UpPVwidXBkYXRlUG9zdHByb2Nlc3NvcigkZXZlbnQpXCI+XG4gICAgICAgIDwvcG9scC1kYXRhLXByb2Nlc3Nvcj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY2FyZFwiICpuZ0lmPVwidmlzaWJsZSgxLCAxLCAxKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBoNlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrIG1lLTFcIj5TdGVwIHt7c3RlcEluZGV4ICsgMX19PC9zcGFuPlxuICAgICAgICBQbGVhc2UgcmV2aWV3IHRoZSBkYXRhIGJlbG93LCBhbmQgdXBsb2FkIHNvbWUgb3IgYWxsIG9mIHRoZW0uXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8cG9scC1kYXRhLXB1YmxpY2F0aW9uIFtjb2x1bW5OYW1lc109XCJzdGF0ZS5wdWJsaWNhdGlvbi5jb2xzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXBsb2FkQXN5bmNdPVwidXBsb2FkQXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkltcG9ydCk9XCJzdGFydEltcG9ydCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWZ0ZXJJbXBvcnQpPVwidXBkYXRlSW1wb3J0U3RhdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5pdERhdGFdPVwic3RhdGUucHVibGljYXRpb24ucm93c1wiPlxuICAgICAgICA8L3BvbHAtZGF0YS1wdWJsaWNhdGlvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48IS0tIE5hdmlnYXRpb24gLS0+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IG10LTQgbWItNFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgW2Rpc2FibGVkXT1cImRpc2FibGVQcmV2U3RlcFwiXG4gICAgICAgICAgICAqbmdJZj1cImhhc1ByZXZTdGVwXCIgKGNsaWNrKT1cInByZXZTdGVwKClcIj5cbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFBcnJvd0xlZnRcIj48L2ZhLWljb24+XG4gICAgICAgIFByZXZpb3VzXG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJtZS1hdXRvXCI+PC9zcGFuPiAgICBcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlTmV4dFN0ZXBcIlxuICAgICAgICAgICAgKm5nSWY9XCJoYXNOZXh0U3RlcFwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+XG4gICAgICAgIE5leHRcbiAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFBcnJvd1JpZ2h0XCI+PC9mYS1pY29uPiAgICAgICAgICAgICAgICBcbiAgICA8L2J1dHRvbj4gICAgICAgICAgICBcbjwvZGl2PiAgICBcbiJdfQ==