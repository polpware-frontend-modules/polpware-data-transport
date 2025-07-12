import { Component, Input } from '@angular/core';
import { faArrowLeft, faArrowRight, faCheck, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { safeParseBool } from '@polpware/fe-utilities';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import { ReplaySubject } from 'rxjs';
import { writeExcelAsync } from '../methods/file-ops';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
import * as i3 from "ngx-log-monitor";
import * as i4 from "../data-preview/data-preview.component";
function ExportDataWizardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the following snippet of the data to be exported, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵelement(6, "polp-data-preview", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r0.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r0.state.preview.rows)("columnNames", ctx_r0.state.preview.cols);
} }
function ExportDataWizardComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 12);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_div_1_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.confirmExport()); });
    i0.ɵɵtext(2, " Start to export ");
    i0.ɵɵelementEnd()();
} }
function ExportDataWizardComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "log-monitor", 13);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("logStream", ctx_r0.logStream)("animated", true)("icons", true);
} }
function ExportDataWizardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please confirm ... ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵtemplate(6, ExportDataWizardComponent_div_1_div_6_Template, 3, 0, "div", 11)(7, ExportDataWizardComponent_div_1_ng_template_7_Template, 1, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const exportLogs_r3 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r0.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.confirmed)("ngIfElse", exportLogs_r3);
} }
function ExportDataWizardComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.prevStep()); });
    i0.ɵɵelement(1, "fa-icon", 15);
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.disablePrevStep);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r0.faArrowLeft);
} }
function ExportDataWizardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.nextStep()); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelement(2, "fa-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.disableNextStep);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r0.faArrowRight);
} }
function makeColumnSchema(data) {
    if (data.inputType == 'date') {
        // todo: Maybe simplify as a string
        return {
            column: data.name,
            type: Date,
            format: 'dd/mm/yyyy hh:mm AM/PM',
            value: (a) => new Date(a[data.prop])
        };
    }
    else if (data.inputType == 'number') {
        return {
            column: data.name,
            type: Number,
            value: (a) => Number(a[data.prop])
        };
    }
    else if (data.inputType == 'checkbox') {
        return {
            column: data.name,
            type: Boolean,
            value: (a) => safeParseBool(a[data.prop])
        };
    }
    else {
        return {
            column: data.name,
            type: String,
            value: (a) => a[data.prop]
        };
    }
}
// We on purpose extends from the abstract wizard,
// to allow for extensibility in the future.
export class ExportDataWizardComponent extends WizardAbstractComponent {
    constructor() {
        super();
        this.faChevronRight = faChevronRight;
        this.faArrowLeft = faArrowLeft;
        this.faArrowRight = faArrowRight;
        this.faSpinner = faSpinner;
        this.faCheck = faCheck;
        this.columns = [];
        this.downloadAsync = (_) => {
            return new Promise(function (resolve, reject) {
                resolve({
                    totalCount: 0,
                    items: []
                });
            });
        };
        // First step: preview
        // Optional second step: configuration 
        // Progress bar
        this.logStream = new ReplaySubject();
        this.confirmed = false;
        this.state = {
            preview: {
                cols: {},
                rows: [],
                totalCount: 0
            }
        };
        this.maxDim = 2;
        this.buildNavigatorCfg();
    }
    ngOnInit() {
        this.loadPreviewAsync();
    }
    // Override
    buildNavigatorCfg() {
        super.buildNavigatorCfg();
        // Specific logic in this class
        // Configure [1] ; options for preview
        this.navigatorCfg.setElement({
            hasPrevStep: false,
            hasNextStep: true,
            hasNextGuard: false,
            visible: true
        }, 1);
        // Configure [1, 1] ; options for progress
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: false,
            hasNextGuard: true,
            visible: true
        }, 1, 1);
        this.stepIndex = 0;
        this.dimIndice = [0, 0];
        this.forwardDimIndice = [1, 0];
        this.navigator = this.navigatorCfg.getElement(0);
        this.forwardNavigator = this.navigatorCfg.getElement(...this.forwardDimIndice);
    }
    // Not override 
    get disablePrevStep() {
        return this.confirmed;
    }
    // Preview step
    async loadPreviewAsync() {
        const ret = await this.downloadAsync({
            pageIndex: 0,
            pageSize: 1
        });
        // No need to continue in this case.
        if (ret.totalCount <= 0) {
            return;
        }
        // Otherwise continue
        const firstRow = ret.items[0];
        // todo: Make it a IRowDatatype 
        this.state.preview.rows = [firstRow];
        this.state.preview.cols = this.columns.reduce((sum, a) => {
            sum[a.prop] = a.name;
            return sum;
        }, {});
        this.state.preview.totalCount = ret.totalCount;
    }
    confirmExport() {
        this.confirmed = true;
        this.exportDataAsync();
    }
    async exportDataAsync() {
        const data = await this.invokeDownloadAsync();
        if (data.length) {
            this.logStream.next({
                type: 'INFO',
                message: 'Start to write an excelsheet file'
            });
            const schema = this.columns.map(a => makeColumnSchema(a));
            await writeExcelAsync(data, {
                schema: schema,
                fileName: 'test'
            });
            this.logStream.next({
                type: 'SUCCESS',
                message: `Excelsheet created`
            });
        }
    }
    // We expect that the underlying upload method is working in a transactional way.
    // I.e., either all the data is uploaded or none of them is uploaded.
    async invokeDownloadAsync() {
        let data = [];
        try {
            let pageSize = 100;
            let startPageIndex = 0;
            let hasMoreData = true;
            while (hasMoreData && (startPageIndex * pageSize < this.state.preview.totalCount)) {
                this.logStream.next({
                    type: 'INFO',
                    message: `Start to retrieve the data from [${startPageIndex * pageSize}]`
                });
                const ret = await this.downloadAsync({
                    pageIndex: startPageIndex,
                    pageSize: pageSize
                });
                hasMoreData = ret.items.length > 0;
                // data
                data.push(...ret.items);
                startPageIndex++;
                this.logStream.next({
                    type: 'SUCCESS',
                    message: `Data retrieved (${data.length / this.state.preview.totalCount * 100}% completed)`
                });
            }
            this.logStream.next({
                type: 'SUCCESS',
                message: `Data retrieval succeeded`
            });
        }
        catch (e) {
            this.logStream.next({
                type: 'ERR',
                message: `Error happened (${e.message})`
            });
            this.logStream.next({
                type: 'ERR',
                message: `Data retrieval failed`
            });
        }
        return data;
    }
    static { this.ɵfac = function ExportDataWizardComponent_Factory(t) { return new (t || ExportDataWizardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExportDataWizardComponent, selectors: [["polp-export-data-wizard"]], inputs: { columns: "columns", downloadAsync: "downloadAsync" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 4, consts: [["exportLogs", ""], ["class", "card", 4, "ngIf"], [1, "d-flex", "mt-4", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "disabled", "click", 4, "ngIf"], [1, "me-auto"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "card"], [1, "card-header", "h6"], [1, "badge", "rounded-pill", "bg-dark", "me-1"], [1, "card-body"], [3, "initData", "columnNames"], [4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], ["theme", "dark", "title", "Data export logs", 3, "logStream", "animated", "icons"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function ExportDataWizardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ExportDataWizardComponent_div_0_Template, 7, 3, "div", 1)(1, ExportDataWizardComponent_div_1_Template, 9, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, ExportDataWizardComponent_button_3_Template, 3, 2, "button", 3);
            i0.ɵɵelement(4, "span", 4);
            i0.ɵɵtemplate(5, ExportDataWizardComponent_button_5_Template, 3, 2, "button", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible(0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasPrevStep);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasNextStep);
        } }, dependencies: [i1.NgIf, i2.FaIconComponent, i3.LogMonitorComponent, i4.DataPreviewComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportDataWizardComponent, [{
        type: Component,
        args: [{ selector: 'polp-export-data-wizard', template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the following snippet of the data to be\n        exported, and then continue to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-preview [initData]=\"state.preview.rows\"\n                           [columnNames]=\"state.preview.cols\">\n        </polp-data-preview>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please confirm ...\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"!confirmed; else exportLogs\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"confirmExport()\">\n                Start to export\n            </button>\n        </div>\n        <ng-template #exportLogs>\n            <log-monitor\n                [logStream]=\"logStream\"\n                theme=\"dark\"\n                title=\"Data export logs\"\n                [animated]=\"true\"\n                [icons]=\"true\">\n            </log-monitor>            \n        </ng-template>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n\n" }]
    }], () => [], { columns: [{
            type: Input
        }], downloadAsync: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExportDataWizardComponent, { className: "ExportDataWizardComponent", filePath: "lib\\export-data-wizard\\export-data-wizard.component.ts", lineNumber: 59 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZXhwb3J0LWRhdGEtd2l6YXJkL2V4cG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2V4cG9ydC1kYXRhLXdpemFyZC9leHBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7SUNMOUMsQUFESixBQURKLDhCQUFxQyxhQUNMLGNBQ3NCO0lBQUEsWUFBc0I7SUFBQSxpQkFBTztJQUMzRSxxSEFFSjtJQUFBLGlCQUFNO0lBQ04sOEJBQXVCO0lBQ25CLHdDQUVvQjtJQUU1QixBQURJLGlCQUFNLEVBQ0o7OztJQVRnRCxlQUFzQjtJQUF0Qix3REFBc0I7SUFLakQsZUFBK0I7SUFDL0IsQUFEQSxvREFBK0IsMENBQ0c7Ozs7SUFZakQsQUFESiwyQkFBeUMsaUJBQ29EO0lBQTFCLDRMQUFTLHNCQUFlLEtBQUM7SUFDcEYsaUNBQ0o7SUFDSixB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TyxJQUFJLENBQUM7SUFDaEIsQ0FBQzswRkE3S1EseUJBQXlCO29FQUF6Qix5QkFBeUI7WUM3Q3RDLEFBYkEsMEVBQXFDLDZEQWFBO1lBd0JyQyw4QkFBOEI7WUFDMUIsZ0ZBQ2lEO1lBSWpELDBCQUE2QjtZQUM3QixnRkFDaUQ7WUFJckQsaUJBQU07O1lBakRhLHFDQUFnQjtZQWFoQixjQUFnQjtZQUFoQixxQ0FBZ0I7WUEwQnRCLGVBQWlCO1lBQWpCLHNDQUFpQjtZQU1qQixlQUFpQjtZQUFqQixzQ0FBaUI7OztpRkRhakIseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0kseUJBQXlCO29CQWExQixPQUFPO2tCQUFmLEtBQUs7WUFLRyxhQUFhO2tCQUFyQixLQUFLOztrRkFkRyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhQXJyb3dMZWZ0LCBmYUFycm93UmlnaHQsIGZhQ2hlY2ssIGZhQ2hldnJvblJpZ2h0LCBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgc2FmZVBhcnNlQm9vbCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgV2l6YXJkQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvbmd4LXdpemFyZCc7XG5pbXBvcnQgeyBMb2dNZXNzYWdlIH0gZnJvbSAnbmd4LWxvZy1tb25pdG9yJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERvd25sb2FkRnVuY1R5cGUsIElEb3dubG9hZElucHV0LCBJRXhjZWxPdXRwdXRDb2x1bW5TY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2V4Y2VsLWlvLmludGVyZmFjZSc7XG5pbXBvcnQgeyB3cml0ZUV4Y2VsQXN5bmMgfSBmcm9tICcuLi9tZXRob2RzL2ZpbGUtb3BzJztcblxuaW50ZXJmYWNlIElXaXphcmRTdGF0ZSB7XG4gICAgcHJldmlldzoge1xuICAgICAgICBjb2xzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgICByb3dzOiBBcnJheTxhbnk+O1xuICAgICAgICB0b3RhbENvdW50OiBudW1iZXI7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbHVtblNjaGVtYShkYXRhOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlucHV0VHlwZTogJ3RleHQnIHwgJ3RlbCcgfCAnZW1haWwnIHwgJ2RhdGUnIHwgJ251bWJlcicgfCAnY2hlY2tib3gnIHwgJ2ZpbGUnO1xuICAgIHByb3A6IHN0cmluZztcbn0pOiBJRXhjZWxPdXRwdXRDb2x1bW5TY2hlbWE8YW55PiB7XG4gICAgaWYgKGRhdGEuaW5wdXRUeXBlID09ICdkYXRlJykge1xuICAgICAgICAvLyB0b2RvOiBNYXliZSBzaW1wbGlmeSBhcyBhIHN0cmluZ1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sdW1uOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICAgICAgZm9ybWF0OiAnZGQvbW0veXl5eSBoaDptbSBBTS9QTScsXG4gICAgICAgICAgICB2YWx1ZTogKGEpID0+IG5ldyBEYXRlKGFbZGF0YS5wcm9wXSlcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaW5wdXRUeXBlID09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2x1bW46IGRhdGEubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAoYSkgPT4gTnVtYmVyKGFbZGF0YS5wcm9wXSlcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGRhdGEuaW5wdXRUeXBlID09ICdjaGVja2JveCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHVtbjogZGF0YS5uYW1lLFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiAoYSkgPT4gc2FmZVBhcnNlQm9vbChhW2RhdGEucHJvcF0pXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHVtbjogZGF0YS5uYW1lLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IChhKSA9PiBhW2RhdGEucHJvcF1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8vIFdlIG9uIHB1cnBvc2UgZXh0ZW5kcyBmcm9tIHRoZSBhYnN0cmFjdCB3aXphcmQsXG4vLyB0byBhbGxvdyBmb3IgZXh0ZW5zaWJpbGl0eSBpbiB0aGUgZnV0dXJlLlxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWV4cG9ydC1kYXRhLXdpemFyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4cG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXhwb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBvcnREYXRhV2l6YXJkQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBXaXphcmRBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmYUNoZXZyb25SaWdodCA9IGZhQ2hldnJvblJpZ2h0O1xuICAgIGZhQXJyb3dMZWZ0ID0gZmFBcnJvd0xlZnQ7XG4gICAgZmFBcnJvd1JpZ2h0ID0gZmFBcnJvd1JpZ2h0O1xuICAgIGZhU3Bpbm5lciA9IGZhU3Bpbm5lcjtcbiAgICBmYUNoZWNrID0gZmFDaGVjaztcblxuICAgIEBJbnB1dCgpIGNvbHVtbnM6IEFycmF5PHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBpbnB1dFR5cGU6ICd0ZXh0JyB8ICd0ZWwnIHwgJ2VtYWlsJyB8ICdkYXRlJyB8ICdudW1iZXInIHwgJ2NoZWNrYm94JyB8ICdmaWxlJztcbiAgICAgICAgcHJvcDogc3RyaW5nO1xuICAgIH0+ID0gW107XG4gICAgQElucHV0KCkgZG93bmxvYWRBc3luYzogRG93bmxvYWRGdW5jVHlwZSA9IChfOiBJRG93bmxvYWRJbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzdGF0ZTogSVdpemFyZFN0YXRlO1xuXG4gICAgLy8gRmlyc3Qgc3RlcDogcHJldmlld1xuICAgIC8vIE9wdGlvbmFsIHNlY29uZCBzdGVwOiBjb25maWd1cmF0aW9uIFxuICAgIC8vIFByb2dyZXNzIGJhclxuICAgIGxvZ1N0cmVhbSA9IG5ldyBSZXBsYXlTdWJqZWN0PExvZ01lc3NhZ2U+KCk7XG4gICAgY29uZmlybWVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJldmlldzoge1xuICAgICAgICAgICAgICAgIGNvbHM6IHt9LFxuICAgICAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgICAgIHRvdGFsQ291bnQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1heERpbSA9IDI7XG4gICAgICAgIHRoaXMuYnVpbGROYXZpZ2F0b3JDZmcoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkUHJldmlld0FzeW5jKCk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBidWlsZE5hdmlnYXRvckNmZygpIHtcbiAgICAgICAgc3VwZXIuYnVpbGROYXZpZ2F0b3JDZmcoKTtcbiAgICAgICAgLy8gU3BlY2lmaWMgbG9naWMgaW4gdGhpcyBjbGFzc1xuXG4gICAgICAgIC8vIENvbmZpZ3VyZSBbMV0gOyBvcHRpb25zIGZvciBwcmV2aWV3XG4gICAgICAgIHRoaXMubmF2aWdhdG9yQ2ZnLnNldEVsZW1lbnQoe1xuICAgICAgICAgICAgaGFzUHJldlN0ZXA6IGZhbHNlLFxuICAgICAgICAgICAgaGFzTmV4dFN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0R3VhcmQ6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICB9LCAxKTtcblxuICAgICAgICAvLyBDb25maWd1cmUgWzEsIDFdIDsgb3B0aW9ucyBmb3IgcHJvZ3Jlc3NcbiAgICAgICAgdGhpcy5uYXZpZ2F0b3JDZmcuc2V0RWxlbWVudCh7XG4gICAgICAgICAgICBoYXNQcmV2U3RlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc05leHRTdGVwOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc05leHRHdWFyZDogdHJ1ZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfSwgMSwgMSk7XG5cbiAgICAgICAgdGhpcy5zdGVwSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmRpbUluZGljZSA9IFswLCAwXTtcbiAgICAgICAgdGhpcy5mb3J3YXJkRGltSW5kaWNlID0gWzEsIDBdO1xuXG4gICAgICAgIHRoaXMubmF2aWdhdG9yID0gdGhpcy5uYXZpZ2F0b3JDZmcuZ2V0RWxlbWVudCgwKTtcbiAgICAgICAgdGhpcy5mb3J3YXJkTmF2aWdhdG9yID0gdGhpcy5uYXZpZ2F0b3JDZmcuZ2V0RWxlbWVudCguLi50aGlzLmZvcndhcmREaW1JbmRpY2UpO1xuICAgIH1cblxuICAgIC8vIE5vdCBvdmVycmlkZSBcbiAgICBnZXQgZGlzYWJsZVByZXZTdGVwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maXJtZWQ7XG4gICAgfVxuXG4gICAgLy8gUHJldmlldyBzdGVwXG4gICAgYXN5bmMgbG9hZFByZXZpZXdBc3luYygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5kb3dubG9hZEFzeW5jKHtcbiAgICAgICAgICAgIHBhZ2VJbmRleDogMCxcbiAgICAgICAgICAgIHBhZ2VTaXplOiAxXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBObyBuZWVkIHRvIGNvbnRpbnVlIGluIHRoaXMgY2FzZS5cbiAgICAgICAgaWYgKHJldC50b3RhbENvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UgY29udGludWVcbiAgICAgICAgY29uc3QgZmlyc3RSb3cgPSByZXQuaXRlbXNbMF07XG4gICAgICAgIC8vIHRvZG86IE1ha2UgaXQgYSBJUm93RGF0YXR5cGUgXG4gICAgICAgIHRoaXMuc3RhdGUucHJldmlldy5yb3dzID0gW2ZpcnN0Um93XTtcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aWV3LmNvbHMgPSB0aGlzLmNvbHVtbnMucmVkdWNlKChzdW0sIGEpID0+IHtcbiAgICAgICAgICAgIHN1bVthLnByb3BdID0gYS5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwge30pO1xuICAgICAgICB0aGlzLnN0YXRlLnByZXZpZXcudG90YWxDb3VudCA9IHJldC50b3RhbENvdW50O1xuICAgIH1cblxuICAgIGNvbmZpcm1FeHBvcnQoKSB7XG4gICAgICAgIHRoaXMuY29uZmlybWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5leHBvcnREYXRhQXN5bmMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBleHBvcnREYXRhQXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmludm9rZURvd25sb2FkQXN5bmMoKTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N0YXJ0IHRvIHdyaXRlIGFuIGV4Y2Vsc2hlZXQgZmlsZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLmNvbHVtbnMubWFwKGEgPT4gbWFrZUNvbHVtblNjaGVtYShhKSk7XG4gICAgICAgICAgICBhd2FpdCB3cml0ZUV4Y2VsQXN5bmMoZGF0YSwge1xuICAgICAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiAndGVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBFeGNlbHNoZWV0IGNyZWF0ZWRgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlIGV4cGVjdCB0aGF0IHRoZSB1bmRlcmx5aW5nIHVwbG9hZCBtZXRob2QgaXMgd29ya2luZyBpbiBhIHRyYW5zYWN0aW9uYWwgd2F5LlxuICAgIC8vIEkuZS4sIGVpdGhlciBhbGwgdGhlIGRhdGEgaXMgdXBsb2FkZWQgb3Igbm9uZSBvZiB0aGVtIGlzIHVwbG9hZGVkLlxuICAgIGFzeW5jIGludm9rZURvd25sb2FkQXN5bmMoKSB7XG4gICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcGFnZVNpemUgPSAxMDA7XG4gICAgICAgICAgICBsZXQgc3RhcnRQYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGhhc01vcmVEYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChoYXNNb3JlRGF0YSAmJiAoc3RhcnRQYWdlSW5kZXggKiBwYWdlU2l6ZSA8IHRoaXMuc3RhdGUucHJldmlldy50b3RhbENvdW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBTdGFydCB0byByZXRyaWV2ZSB0aGUgZGF0YSBmcm9tIFske3N0YXJ0UGFnZUluZGV4ICogcGFnZVNpemV9XWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSBhd2FpdCB0aGlzLmRvd25sb2FkQXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBwYWdlSW5kZXg6IHN0YXJ0UGFnZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGhhc01vcmVEYXRhID0gcmV0Lml0ZW1zLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgLy8gZGF0YVxuICAgICAgICAgICAgICAgIGRhdGEucHVzaCguLi5yZXQuaXRlbXMpO1xuICAgICAgICAgICAgICAgIHN0YXJ0UGFnZUluZGV4Kys7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRGF0YSByZXRyaWV2ZWQgKCR7ZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnByZXZpZXcudG90YWxDb3VudCAqIDEwMH0lIGNvbXBsZXRlZClgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU1VDQ0VTUycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYERhdGEgcmV0cmlldmFsIHN1Y2NlZWRlZGBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRVJSJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRXJyb3IgaGFwcGVuZWQgKCR7ZS5tZXNzYWdlfSlgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdFUlInLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBEYXRhIHJldHJpZXZhbCBmYWlsZWRgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nSWY9XCJ2aXNpYmxlKDApXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGg2XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmsgbWUtMVwiPlN0ZXAge3tzdGVwSW5kZXggKyAxfX08L3NwYW4+XG4gICAgICAgIFBsZWFzZSByZXZpZXcgdGhlIGZvbGxvd2luZyBzbmlwcGV0IG9mIHRoZSBkYXRhIHRvIGJlXG4gICAgICAgIGV4cG9ydGVkLCBhbmQgdGhlbiBjb250aW51ZSB0byB0aGUgbmV4dCBzdGVwLlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPHBvbHAtZGF0YS1wcmV2aWV3IFtpbml0RGF0YV09XCJzdGF0ZS5wcmV2aWV3LnJvd3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbk5hbWVzXT1cInN0YXRlLnByZXZpZXcuY29sc1wiPlxuICAgICAgICA8L3BvbHAtZGF0YS1wcmV2aWV3PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nSWY9XCJ2aXNpYmxlKDEpXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGg2XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIGJnLWRhcmsgbWUtMVwiPlN0ZXAge3tzdGVwSW5kZXggKyAxfX08L3NwYW4+XG4gICAgICAgIFBsZWFzZSBjb25maXJtIC4uLlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiFjb25maXJtZWQ7IGVsc2UgZXhwb3J0TG9nc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9ja1wiIChjbGljayk9XCJjb25maXJtRXhwb3J0KClcIj5cbiAgICAgICAgICAgICAgICBTdGFydCB0byBleHBvcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNleHBvcnRMb2dzPlxuICAgICAgICAgICAgPGxvZy1tb25pdG9yXG4gICAgICAgICAgICAgICAgW2xvZ1N0cmVhbV09XCJsb2dTdHJlYW1cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJEYXRhIGV4cG9ydCBsb2dzXCJcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2ljb25zXT1cInRydWVcIj5cbiAgICAgICAgICAgIDwvbG9nLW1vbml0b3I+ICAgICAgICAgICAgXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBOYXZpZ2F0aW9uIC0tPlxuPGRpdiBjbGFzcz1cImQtZmxleCBtdC00IG1iLTRcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIFtkaXNhYmxlZF09XCJkaXNhYmxlUHJldlN0ZXBcIlxuICAgICAgICAgICAgKm5nSWY9XCJoYXNQcmV2U3RlcFwiIChjbGljayk9XCJwcmV2U3RlcCgpXCI+XG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQXJyb3dMZWZ0XCI+PC9mYS1pY29uPlxuICAgICAgICBQcmV2aW91c1xuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuIGNsYXNzPVwibWUtYXV0b1wiPjwvc3Bhbj4gICAgXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZU5leHRTdGVwXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaGFzTmV4dFN0ZXBcIiAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPlxuICAgICAgICBOZXh0XG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQXJyb3dSaWdodFwiPjwvZmEtaWNvbj4gICAgICAgICAgICAgICAgXG4gICAgPC9idXR0b24+ICAgICAgICAgICAgXG48L2Rpdj4gICAgXG5cbiJdfQ==