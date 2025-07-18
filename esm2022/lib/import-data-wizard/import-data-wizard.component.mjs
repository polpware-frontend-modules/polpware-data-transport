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
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, make changes, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-processor", 9);
    i0.ɵɵlistener("onReset", function ImportDataWizardComponent_div_0_Template_polp_data_processor_onReset_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetPreprocessor()); })("dataChange", function ImportDataWizardComponent_div_0_Template_polp_data_processor_dataChange_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreprocessor($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r1.state.preprocessor.inputRows)("columnNames", ctx_r1.state.preprocessor.cols);
} }
function ImportDataWizardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please define the mappings from source columns to target columns, and then move to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-define-column-mapping", 10);
    i0.ɵɵlistener("onValueChanged", function ImportDataWizardComponent_div_1_Template_polp_define_column_mapping_onValueChanged_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateMappings($event)); })("onValidation", function ImportDataWizardComponent_div_1_Template_polp_define_column_mapping_onValidation_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.validateMappings($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("sourceColumns", ctx_r1.sourceColumns)("targetColumns", ctx_r1.targetColumns)("initValue", ctx_r1.state.mappings);
} }
function ImportDataWizardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, make changes, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-processor", 9);
    i0.ɵɵlistener("onReset", function ImportDataWizardComponent_div_2_Template_polp_data_processor_onReset_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetPostprocessor()); })("dataChange", function ImportDataWizardComponent_div_2_Template_polp_data_processor_dataChange_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePostprocessor($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r1.state.postprocessor.inputRows)("columnNames", ctx_r1.state.postprocessor.cols);
} }
function ImportDataWizardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, and upload some or all of them. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-publication", 11);
    i0.ɵɵlistener("onImport", function ImportDataWizardComponent_div_3_Template_polp_data_publication_onImport_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.startImport()); })("afterImport", function ImportDataWizardComponent_div_3_Template_polp_data_publication_afterImport_6_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateImportStat($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("columnNames", ctx_r1.state.publication.cols)("uploadAsync", ctx_r1.uploadAsync)("initData", ctx_r1.state.publication.rows);
} }
function ImportDataWizardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function ImportDataWizardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.prevStep()); });
    i0.ɵɵelement(1, "fa-icon", 13);
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.disablePrevStep);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r1.faArrowLeft);
} }
function ImportDataWizardComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ImportDataWizardComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nextStep()); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelement(2, "fa-icon", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.disableNextStep);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r1.faArrowRight);
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
    static { this.ɵfac = function ImportDataWizardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImportDataWizardComponent)(i0.ɵɵdirectiveInject(i1.NgxNotyImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportDataWizardComponent, selectors: [["polp-import-data-wizard"]], inputs: { file: "file", targetColumns: "targetColumns", uploadAsync: "uploadAsync" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 6, consts: [["class", "card", 4, "ngIf"], [1, "d-flex", "mt-4", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "disabled", "click", 4, "ngIf"], [1, "me-auto"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "card"], [1, "card-header", "h6"], [1, "badge", "rounded-pill", "bg-dark", "me-1"], [1, "card-body"], [3, "onReset", "dataChange", "initData", "columnNames"], [3, "onValueChanged", "onValidation", "sourceColumns", "targetColumns", "initValue"], [3, "onImport", "afterImport", "columnNames", "uploadAsync", "initData"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function ImportDataWizardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ImportDataWizardComponent_div_0_Template, 7, 3, "div", 0)(1, ImportDataWizardComponent_div_1_Template, 7, 4, "div", 0)(2, ImportDataWizardComponent_div_2_Template, 7, 3, "div", 0)(3, ImportDataWizardComponent_div_3_Template, 7, 4, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵtemplate(5, ImportDataWizardComponent_button_5_Template, 3, 2, "button", 2);
            i0.ɵɵelement(6, "span", 3);
            i0.ɵɵtemplate(7, ImportDataWizardComponent_button_7_Template, 3, 2, "button", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible(0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1, 1));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1, 1, 1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasPrevStep);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasNextStep);
        } }, dependencies: [i2.NgIf, i3.FaIconComponent, i4.DefineColumnMappingComponent, i5.DataPublicationComponent, i6.DataProcessorComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportDataWizardComponent, [{
        type: Component,
        args: [{ selector: 'polp-import-data-wizard', template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.preprocessor.inputRows\"\n                             [columnNames]=\"state.preprocessor.cols\"\n                             (onReset)=\"resetPreprocessor()\"\n                             (dataChange)=\"updatePreprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please define the mappings from source columns to target\n        columns, and then move to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-define-column-mapping [sourceColumns]=\"sourceColumns\"\n                                    [targetColumns]=\"targetColumns\"\n                                    (onValueChanged)=\"updateMappings($event)\"\n                                    (onValidation)=\"validateMappings($event)\"\n                                    [initValue]=\"state.mappings\">\n        </polp-define-column-mapping>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.postprocessor.inputRows\"\n                             [columnNames]=\"state.postprocessor.cols\"\n                             (onReset)=\"resetPostprocessor()\"\n                             (dataChange)=\"updatePostprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, and upload some or all of them.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-publication [columnNames]=\"state.publication.cols\"\n                               [uploadAsync]=\"uploadAsync\"\n                               (onImport)=\"startImport()\"\n                               (afterImport)=\"updateImportStat($event)\"\n                               [initData]=\"state.publication.rows\">\n        </polp-data-publication>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n" }]
    }], () => [{ type: i1.NgxNotyImpl }], { file: [{
            type: Input
        }], targetColumns: [{
            type: Input
        }], uploadAsync: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImportDataWizardComponent, { className: "ImportDataWizardComponent", filePath: "lib\\import-data-wizard\\import-data-wizard.component.ts", lineNumber: 39 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvaW1wb3J0LWRhdGEtd2l6YXJkL2ltcG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC1kYXRhLXdpemFyZC9pbXBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsSCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUMsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7SUNMN0MsQUFESixBQURKLDhCQUFxQyxhQUNMLGNBQ3NCO0lBQUEsWUFBc0I7SUFBQSxpQkFBTztJQUMzRSxpR0FFSjtJQUFBLGlCQUFNO0lBRUYsQUFESiw4QkFBdUIsNkJBSTRDO0lBQTFDLEFBREEsc01BQVcsMEJBQW1CLEtBQUMscU1BQ2pCLGlDQUEwQixLQUFDO0lBR3RFLEFBREksQUFESSxpQkFBc0IsRUFDcEIsRUFDSjs7O0lBWGdELGVBQXNCO0lBQXRCLHdEQUFzQjtJQUsvQyxlQUF5QztJQUN6QyxBQURBLDhEQUF5QywrQ0FDRjs7OztJ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LFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsR0FBeUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFDLENBQUM7MEhBeFJRLHlCQUF5QjtvRUFBekIseUJBQXlCO1lDUXRDLEFBZkEsQUFoQkEsQUFmQSwwRUFBcUMsNkRBZUEsNkRBZ0JHLDZEQWVHO1lBZ0IzQyw4QkFBOEI7WUFDMUIsZ0ZBQ2lEO1lBSWpELDBCQUE2QjtZQUM3QixnRkFDaUQ7WUFJckQsaUJBQU07O1lBMUVhLHFDQUFnQjtZQWVoQixjQUFnQjtZQUFoQixxQ0FBZ0I7WUFnQmhCLGNBQW1CO1lBQW5CLHdDQUFtQjtZQWVuQixjQUFzQjtZQUF0QiwyQ0FBc0I7WUFrQjVCLGVBQWlCO1lBQWpCLHNDQUFpQjtZQU1qQixlQUFpQjtZQUFqQixzQ0FBaUI7OztpRkRoQ2pCLHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNJLHlCQUF5Qjs0Q0FhMUIsSUFBSTtrQkFBWixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUtHLFdBQVc7a0JBQW5CLEtBQUs7O2tGQWZHLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQsIGZhQXJyb3dSaWdodCwgZmFDaGVjaywgZmFDaGV2cm9uUmlnaHQsIGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBndWlkIH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBOZ3hOb3R5SW1wbCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XG5pbXBvcnQgeyBJUm93RGF0YVR5cGUsIElUYWJsZURhdGFDaGFuZ2VFdmVudCwgc2xpY2VBcnJheSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUnO1xuaW1wb3J0IHsgV2l6YXJkQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvbmd4LXdpemFyZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFkLWV4Y2VsLWZpbGUvdHlwZXMnO1xuaW1wb3J0IHsgcmVhZEV4Y2VsQXN5bmMgfSBmcm9tICcuLi9tZXRob2RzL2ZpbGUtb3BzJztcblxuaW50ZXJmYWNlIElEYXRhU3RhdGUge1xuICAgIG9yaWdpbmFsRGF0YTogUm93W107XG4gICAgcHJlcHJvY2Vzc29yOiB7XG4gICAgICAgIGNvbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgIGlucHV0Um93czogSVJvd0RhdGFUeXBlW107XG4gICAgICAgIG91dHB1dFJvd3M6IElSb3dEYXRhVHlwZVtdO1xuICAgICAgICB1cGRhdGVkOiBib29sZWFuO1xuICAgIH07XG4gICAgbWFwcGluZ3M6IEFycmF5PHtcbiAgICAgICAgc291cmNlSWQ6IHN0cmluZztcbiAgICAgICAgdGFyZ2V0SWQ6IHN0cmluZztcbiAgICB9PjtcbiAgICBwb3N0cHJvY2Vzc29yOiB7XG4gICAgICAgIGNvbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgICAgIGlucHV0Um93czogSVJvd0RhdGFUeXBlW107XG4gICAgICAgIG91dHB1dFJvd3M6IElSb3dEYXRhVHlwZVtdO1xuICAgICAgICB1cGRhdGVkOiBib29sZWFuO1xuICAgIH07XG4gICAgcHVibGljYXRpb246IHtcbiAgICAgICAgY29sczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgcm93czogSVJvd0RhdGFUeXBlW107XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtaW1wb3J0LWRhdGEtd2l6YXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1wb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbXBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltcG9ydERhdGFXaXphcmRDb21wb25lbnRcbiAgICBleHRlbmRzIFdpemFyZEFic3RyYWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZhQ2hldnJvblJpZ2h0ID0gZmFDaGV2cm9uUmlnaHQ7XG4gICAgZmFBcnJvd0xlZnQgPSBmYUFycm93TGVmdDtcbiAgICBmYUFycm93UmlnaHQgPSBmYUFycm93UmlnaHQ7XG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuICAgIGZhQ2hlY2sgPSBmYUNoZWNrO1xuXG4gICAgQElucHV0KCkgZmlsZTogRmlsZTtcbiAgICBASW5wdXQoKSB0YXJnZXRDb2x1bW5zOiBBcnJheTx7XG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIHJlcXVpcmVkOiBib29sZWFuO1xuICAgIH0+ID0gW107XG4gICAgQElucHV0KCkgdXBsb2FkQXN5bmM6IChkYXRhOiBBcnJheTxJUm93RGF0YVR5cGU+KSA9PiBQcm9taXNlPHtcbiAgICAgICAgZmFpbHVyZXM6IEFycmF5PElSb3dEYXRhVHlwZT47XG4gICAgICAgIGVycm9yczogQXJyYXk8c3RyaW5nPjtcbiAgICB9PjtcblxuICAgIHN0YXRlOiBJRGF0YVN0YXRlO1xuICAgIGlzTWFwcGluZ3NWYWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGhhc0ltcG9ydFN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIGltcG9ydFN0YXQ6IHsgc3VjY2VzczogbnVtYmVyOyBmYWlsdXJlOiBudW1iZXIgfSA9IHsgc3VjY2VzczogMCwgZmFpbHVyZTogMCB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfbm90eTogTmd4Tm90eUltcGwpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3JpZ2luYWxEYXRhOiBbXSxcbiAgICAgICAgICAgIHByZXByb2Nlc3Nvcjoge1xuICAgICAgICAgICAgICAgIGNvbHM6IHt9LFxuICAgICAgICAgICAgICAgIGlucHV0Um93czogW10sXG4gICAgICAgICAgICAgICAgb3V0cHV0Um93czogW10sXG4gICAgICAgICAgICAgICAgdXBkYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXBwaW5nczogW10sXG4gICAgICAgICAgICBwb3N0cHJvY2Vzc29yOiB7XG4gICAgICAgICAgICAgICAgaW5wdXRSb3dzOiBbXSxcbiAgICAgICAgICAgICAgICBvdXRwdXRSb3dzOiBbXSxcbiAgICAgICAgICAgICAgICBjb2xzOiB7fSxcbiAgICAgICAgICAgICAgICB1cGRhdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1YmxpY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgcm93czogW10sXG4gICAgICAgICAgICAgICAgY29sczoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1heERpbSA9IDQ7XG4gICAgICAgIHRoaXMuYnVpbGROYXZpZ2F0b3JDZmcoKTtcbiAgICB9XG5cbiAgICBnZXQgc291cmNlQ29sdW1ucygpIHtcbiAgICAgICAgY29uc3QgcmV0OiBBcnJheTx7XG4gICAgICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgfT4gPSBbXTtcbiAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IuY29scztcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcm9wLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogb2JqW3Byb3BdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YUFzeW5jKCk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBidWlsZE5hdmlnYXRvckNmZygpIHtcbiAgICAgICAgc3VwZXIuYnVpbGROYXZpZ2F0b3JDZmcoKTtcbiAgICAgICAgLy8gU3BlY2lmaWMgbG9naWMgaW4gdGhpcyBjbGFzc1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBbMV0gOyBvcHRpb25zIGZvciBwcmVwcm9jZXNzb3JcbiAgICAgICAgdGhpcy5uYXZpZ2F0b3JDZmcuc2V0RWxlbWVudCh7XG4gICAgICAgICAgICBoYXNQcmV2U3RlcDogZmFsc2UsXG4gICAgICAgICAgICBoYXNOZXh0U3RlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc05leHRHdWFyZDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH0sIDEpO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBbMSwgMV0gOyBvcHRpb25zIGZvciBjb2x1bW4gbWFwcGluZ1xuICAgICAgICB0aGlzLm5hdmlnYXRvckNmZy5zZXRFbGVtZW50KHtcbiAgICAgICAgICAgIGhhc1ByZXZTdGVwOiB0cnVlLFxuICAgICAgICAgICAgaGFzTmV4dFN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0R3VhcmQ6IHRydWUsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmV4dFN0ZXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVQb3N0cHJlY2Vzc29yKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RlcEludGVybmFsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldlN0ZXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5pbnB1dFJvd3MgPSB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5vdXRwdXRSb3dzO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldlN0ZXBJbnRlcm5hbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxLCAxKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgWzEsIDEsIDFdIDsgb3B0aW9ucyBmb3IgcG9zdHByb2Nlc3NvclxuICAgICAgICB0aGlzLm5hdmlnYXRvckNmZy5zZXRFbGVtZW50KHtcbiAgICAgICAgICAgIGhhc1ByZXZTdGVwOiB0cnVlLFxuICAgICAgICAgICAgaGFzTmV4dFN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0R3VhcmQ6IHRydWUsXG4gICAgICAgICAgICBuZXh0U3RlcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVB1YmxpY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RlcEludGVybmFsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICB9LCAxLCAxLCAxKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgWzEsIDEsIDEsIDFdIDsgb3B0aW9ucyBmb3IgcHVibGljYXRpb25cbiAgICAgICAgdGhpcy5uYXZpZ2F0b3JDZmcuc2V0RWxlbWVudCh7XG4gICAgICAgICAgICBoYXNQcmV2U3RlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc05leHRTdGVwOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc05leHRHdWFyZDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgcHJldlN0ZXA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBEaXNhYmxlIHByZXYgYnV0dG9uXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2U3RlcEludGVybmFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEsIDEsIDEsIDEpO1xuXG5cbiAgICAgICAgdGhpcy5zdGVwSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmRpbUluZGljZSA9IFswLCAwLCAwLCAwXTtcbiAgICAgICAgdGhpcy5mb3J3YXJkRGltSW5kaWNlID0gWzEsIDAsIDAsIDBdO1xuXG4gICAgICAgIHRoaXMubmF2aWdhdG9yID0gdGhpcy5uYXZpZ2F0b3JDZmcuZ2V0RWxlbWVudCgwKTtcbiAgICAgICAgdGhpcy5mb3J3YXJkTmF2aWdhdG9yID0gdGhpcy5uYXZpZ2F0b3JDZmcuZ2V0RWxlbWVudCguLi50aGlzLmZvcndhcmREaW1JbmRpY2UpO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIFxuICAgIGdldCBkaXNhYmxlTmV4dFN0ZXAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcndhcmROYXZpZ2F0b3IuaGFzTmV4dEd1YXJkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGVwSW5kZXggPT0gMSAmJiAhdGhpcy5pc01hcHBpbmdzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGlmIG1hcHBpbmdzIGFyZSBub3QgdmFsaWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBOb3Qgb3ZlcnJpZGUgXG4gICAgZ2V0IGRpc2FibGVQcmV2U3RlcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzSW1wb3J0U3RhcnRlZDtcbiAgICB9XG5cbiAgICBzdGFydEltcG9ydCgpIHtcbiAgICAgICAgdGhpcy5oYXNJbXBvcnRTdGFydGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkRGF0YUFzeW5jKCkge1xuICAgICAgICAvLyBBc3N1bWUgdGhhdCB0aGVyZSBhcmUgZGF0YS5cbiAgICAgICAgY29uc3Qgcm93cyA9IGF3YWl0IHJlYWRFeGNlbEFzeW5jKHRoaXMuZmlsZSk7XG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5vcmlnaW5hbERhdGEgPSByb3dzO1xuICAgICAgICB0aGlzLnByZXBhcmVQcmVwcm9jZXNzb3IoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZVByZXByb2Nlc3NvcigpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuc3RhdGUub3JpZ2luYWxEYXRhO1xuICAgICAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZmlyc3Qgcm93IGlzIHRoZSBoZWFkZXJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHJvd3NbMF0ucmVkdWNlKChzdW0sIGIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgayA9ICdjb2x1bW4nICsgKGlkeCArIDEpO1xuICAgICAgICAgICAgc3VtW2tdID0gYjtcbiAgICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IuY29scyA9IGNvbHVtbnM7XG5cbiAgICAgICAgY29uc3QgcmVzdERhdGEgPSBzbGljZUFycmF5KHJvd3MsIDEsIHJvd3MubGVuZ3RoKTtcbiAgICAgICAgLy8gTmV4dCBwcmVwYXJlIGRhdGFcbiAgICAgICAgY29uc3QgZWxlbXMgPSByZXN0RGF0YS5tYXAoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5yZWR1Y2UoKHN1bSwgYiwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9ICdjb2x1bW4nICsgKGlkeCArIDEpO1xuICAgICAgICAgICAgICAgIHN1bVtrXSA9IGI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgICAgIH0sIHsgaWQ6IGd1aWQoKSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IuaW5wdXRSb3dzID0gZWxlbXM7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLm91dHB1dFJvd3MgPSBlbGVtcztcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IudXBkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXRQcmVwcm9jZXNzb3IoKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZVByZXByb2Nlc3NvcigpO1xuICAgICAgICB0aGlzLl9ub3R5LnN1Y2Nlc3MoJ0RhdGEgaGFzIGJlZW4gcmVzZXQgc3VjY2Vzc2Z1bGx5IScsICdPcGVyYXRpb24gcmVzdWx0Jyk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJlcHJvY2Vzc29yKGV2ZW50OiBJVGFibGVEYXRhQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3Iub3V0cHV0Um93cyA9IGV2ZW50LnJvd3M7XG4gICAgICAgIHRoaXMuc3RhdGUucHJlcHJvY2Vzc29yLnVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZU1hcHBpbmdzKGRhdGE6IEFycmF5PHtcbiAgICAgICAgc291cmNlSWQ6IHN0cmluZztcbiAgICAgICAgdGFyZ2V0SWQ6IHN0cmluZztcbiAgICB9Pikge1xuICAgICAgICB0aGlzLnN0YXRlLm1hcHBpbmdzID0gWy4uLmRhdGFdO1xuICAgIH1cblxuICAgIHZhbGlkYXRlTWFwcGluZ3MoZXJyb3JzOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgdGhpcy5pc01hcHBpbmdzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXBwaW5nc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXBhcmVQb3N0cHJlY2Vzc29yKCkge1xuXG4gICAgICAgIC8vIFByZXBhcmUgY29sdW1uc1xuICAgICAgICBjb25zdCBjb2x1bW5zID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tYXBwaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuc3RhdGUubWFwcGluZ3NbaV07XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5jb2xzW2VsZW0uc291cmNlSWRdO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXRDb2x1bW5zLmZpbmQoYSA9PiBhLmlkID09IGVsZW0udGFyZ2V0SWQpO1xuICAgICAgICAgICAgY29sdW1uc1tlbGVtLnNvdXJjZUlkXSA9IGAke3NvdXJjZX0gPT4gJHt0YXJnZXQubGFiZWx9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IuY29scyA9IGNvbHVtbnM7XG5cbiAgICAgICAgLy8gSWYgdGhlIHByZWRlY2Vzc29yIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci51cGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci51cGRhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5pbnB1dFJvd3MgPSB0aGlzLnN0YXRlLnByZXByb2Nlc3Nvci5vdXRwdXRSb3dzO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLm91dHB1dFJvd3MgPSB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IuaW5wdXRSb3dzO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLmlucHV0Um93cyA9IHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5vdXRwdXRSb3dzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zdHByb2Nlc3NvcihldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3RhdGUucG9zdHByb2Nlc3Nvci5vdXRwdXRSb3dzID0gZXZlbnQucm93cztcbiAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLnVwZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0UG9zdHByb2Nlc3NvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3IudXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IuaW5wdXRSb3dzID0gdGhpcy5zdGF0ZS5wcmVwcm9jZXNzb3Iub3V0cHV0Um93cztcbiAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cHJvY2Vzc29yLm91dHB1dFJvd3MgPSB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IuaW5wdXRSb3dzO1xuICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3IudXBkYXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX25vdHkuc3VjY2VzcygnRGF0YSBoYXMgYmVlbiByZXNldCBzdWNjZXNzZnVsbHkhJywgJ09wZXJhdGlvbiByZXN1bHQnKTtcbiAgICB9XG5cbiAgICBwcmVwYXJlUHVibGljYXRpb24oKSB7XG4gICAgICAgIC8vIE1ha2UgY29sc1xuICAgICAgICBjb25zdCBjb2xzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUubWFwcGluZ3MuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgIGNvbHNbZWxlbS50YXJnZXRJZF0gPSB0aGlzLnRhcmdldENvbHVtbnMuZmluZChhID0+IGEuaWQgPT0gZWxlbS50YXJnZXRJZCkubGFiZWw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlLnB1YmxpY2F0aW9uLmNvbHMgPSBjb2xzO1xuXG4gICAgICAgIHRoaXMuc3RhdGUucHVibGljYXRpb24ucm93cyA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBvc3Rwcm9jZXNzb3Iub3V0cHV0Um93cy5tYXAoZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwT2JqZWN0KGVsZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcE9iamVjdChhOiBJUm93RGF0YVR5cGUpIHtcbiAgICAgICAgY29uc3QgYiA9IHsgaWQ6IGEuaWQgfTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXBwaW5ncy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgYltlbGVtLnRhcmdldElkXSA9IGFbZWxlbS5zb3VyY2VJZF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICB1cGRhdGVJbXBvcnRTdGF0KGV2dDogeyBzdWNjZXNzOiBudW1iZXI7IGZhaWx1cmU6IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMuaW1wb3J0U3RhdC5zdWNjZXNzID0gZXZ0LnN1Y2Nlc3M7XG4gICAgICAgIHRoaXMuaW1wb3J0U3RhdC5mYWlsdXJlID0gZXZ0LmZhaWx1cmU7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cInZpc2libGUoMClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgaDZcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFyayBtZS0xXCI+U3RlcCB7e3N0ZXBJbmRleCArIDF9fTwvc3Bhbj5cbiAgICAgICAgUGxlYXNlIHJldmlldyB0aGUgZGF0YSBiZWxvdywgbWFrZSBjaGFuZ2VzLCBhbmQgdGhlbiBjb250aW51ZVxuICAgICAgICB0byB0aGUgbmV4dCBzdGVwLlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPHBvbHAtZGF0YS1wcm9jZXNzb3IgW2luaXREYXRhXT1cInN0YXRlLnByZXByb2Nlc3Nvci5pbnB1dFJvd3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTmFtZXNdPVwic3RhdGUucHJlcHJvY2Vzc29yLmNvbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZXNldCk9XCJyZXNldFByZXByb2Nlc3NvcigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFDaGFuZ2UpPVwidXBkYXRlUHJlcHJvY2Vzc29yKCRldmVudClcIj5cbiAgICAgICAgPC9wb2xwLWRhdGEtcHJvY2Vzc29yPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nSWY9XCJ2aXNpYmxlKDEpXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGg2XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmsgbWUtMVwiPlN0ZXAge3tzdGVwSW5kZXggKyAxfX08L3NwYW4+XG4gICAgICAgIFBsZWFzZSBkZWZpbmUgdGhlIG1hcHBpbmdzIGZyb20gc291cmNlIGNvbHVtbnMgdG8gdGFyZ2V0XG4gICAgICAgIGNvbHVtbnMsIGFuZCB0aGVuIG1vdmUgdG8gdGhlIG5leHQgc3RlcC5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwb2xwLWRlZmluZS1jb2x1bW4tbWFwcGluZyBbc291cmNlQ29sdW1uc109XCJzb3VyY2VDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0YXJnZXRDb2x1bW5zXT1cInRhcmdldENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVmFsdWVDaGFuZ2VkKT1cInVwZGF0ZU1hcHBpbmdzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVmFsaWRhdGlvbik9XCJ2YWxpZGF0ZU1hcHBpbmdzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luaXRWYWx1ZV09XCJzdGF0ZS5tYXBwaW5nc1wiPlxuICAgICAgICA8L3BvbHAtZGVmaW5lLWNvbHVtbi1tYXBwaW5nPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nSWY9XCJ2aXNpYmxlKDEsIDEpXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGg2XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmsgbWUtMVwiPlN0ZXAge3tzdGVwSW5kZXggKyAxfX08L3NwYW4+XG4gICAgICAgIFBsZWFzZSByZXZpZXcgdGhlIGRhdGEgYmVsb3csIG1ha2UgY2hhbmdlcywgYW5kIHRoZW4gY29udGludWVcbiAgICAgICAgdG8gdGhlIG5leHQgc3RlcC5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwb2xwLWRhdGEtcHJvY2Vzc29yIFtpbml0RGF0YV09XCJzdGF0ZS5wb3N0cHJvY2Vzc29yLmlucHV0Um93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5OYW1lc109XCJzdGF0ZS5wb3N0cHJvY2Vzc29yLmNvbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25SZXNldCk9XCJyZXNldFBvc3Rwcm9jZXNzb3IoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhQ2hhbmdlKT1cInVwZGF0ZVBvc3Rwcm9jZXNzb3IoJGV2ZW50KVwiPlxuICAgICAgICA8L3BvbHAtZGF0YS1wcm9jZXNzb3I+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cInZpc2libGUoMSwgMSwgMSlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgaDZcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSByb3VuZGVkLXBpbGwgYmctZGFyayBtZS0xXCI+U3RlcCB7e3N0ZXBJbmRleCArIDF9fTwvc3Bhbj5cbiAgICAgICAgUGxlYXNlIHJldmlldyB0aGUgZGF0YSBiZWxvdywgYW5kIHVwbG9hZCBzb21lIG9yIGFsbCBvZiB0aGVtLlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPHBvbHAtZGF0YS1wdWJsaWNhdGlvbiBbY29sdW1uTmFtZXNdPVwic3RhdGUucHVibGljYXRpb24uY29sc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VwbG9hZEFzeW5jXT1cInVwbG9hZEFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25JbXBvcnQpPVwic3RhcnRJbXBvcnQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFmdGVySW1wb3J0KT1cInVwZGF0ZUltcG9ydFN0YXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2luaXREYXRhXT1cInN0YXRlLnB1YmxpY2F0aW9uLnJvd3NcIj5cbiAgICAgICAgPC9wb2xwLWRhdGEtcHVibGljYXRpb24+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBOYXZpZ2F0aW9uIC0tPlxuPGRpdiBjbGFzcz1cImQtZmxleCBtdC00IG1iLTRcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIFtkaXNhYmxlZF09XCJkaXNhYmxlUHJldlN0ZXBcIlxuICAgICAgICAgICAgKm5nSWY9XCJoYXNQcmV2U3RlcFwiIChjbGljayk9XCJwcmV2U3RlcCgpXCI+XG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQXJyb3dMZWZ0XCI+PC9mYS1pY29uPlxuICAgICAgICBQcmV2aW91c1xuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuIGNsYXNzPVwibWUtYXV0b1wiPjwvc3Bhbj4gICAgXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZU5leHRTdGVwXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaGFzTmV4dFN0ZXBcIiAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPlxuICAgICAgICBOZXh0XG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQXJyb3dSaWdodFwiPjwvZmEtaWNvbj4gICAgICAgICAgICAgICAgXG4gICAgPC9idXR0b24+ICAgICAgICAgICAgXG48L2Rpdj4gICAgXG4iXX0=