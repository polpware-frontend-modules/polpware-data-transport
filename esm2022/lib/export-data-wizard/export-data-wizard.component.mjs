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
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the following snippet of the data to be exported, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵelement(6, "polp-data-preview", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r0.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r0.state.preview.rows)("columnNames", ctx_r0.state.preview.cols);
} }
function ExportDataWizardComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 12);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_div_1_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.confirmExport()); });
    i0.ɵɵtext(2, " Start to export ");
    i0.ɵɵelementEnd()();
} }
function ExportDataWizardComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "log-monitor", 13);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("logStream", ctx_r6.logStream)("animated", true)("icons", true);
} }
function ExportDataWizardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please confirm ... ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵtemplate(6, ExportDataWizardComponent_div_1_div_6_Template, 3, 0, "div", 10);
    i0.ɵɵtemplate(7, ExportDataWizardComponent_div_1_ng_template_7_Template, 1, 3, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r5 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.confirmed)("ngIfElse", _r5);
} }
function ExportDataWizardComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.prevStep()); });
    i0.ɵɵelement(1, "fa-icon", 15);
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.disablePrevStep);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r2.faArrowLeft);
} }
function ExportDataWizardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.nextStep()); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelement(2, "fa-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r3.disableNextStep);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r3.faArrowRight);
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExportDataWizardComponent, selectors: [["polp-export-data-wizard"]], inputs: { columns: "columns", downloadAsync: "downloadAsync" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 4, consts: [["class", "card", 4, "ngIf"], [1, "d-flex", "mt-4", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "disabled", "click", 4, "ngIf"], [1, "me-auto"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "card"], [1, "card-header", "h6"], [1, "badge", "rounded-pill", "bg-dark", "me-1"], [1, "card-body"], [3, "initData", "columnNames"], [4, "ngIf", "ngIfElse"], ["exportLogs", ""], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], ["theme", "dark", "title", "Data export logs", 3, "logStream", "animated", "icons"], ["type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function ExportDataWizardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ExportDataWizardComponent_div_0_Template, 7, 3, "div", 0);
            i0.ɵɵtemplate(1, ExportDataWizardComponent_div_1_Template, 9, 3, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵtemplate(3, ExportDataWizardComponent_button_3_Template, 3, 2, "button", 2);
            i0.ɵɵelement(4, "span", 3);
            i0.ɵɵtemplate(5, ExportDataWizardComponent_button_5_Template, 3, 2, "button", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible(0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.visible(1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasPrevStep);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasNextStep);
        } }, dependencies: [i1.NgIf, i2.FaIconComponent, i3.LogMonitorComponent, i4.DataPreviewComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportDataWizardComponent, [{
        type: Component,
        args: [{ selector: 'polp-export-data-wizard', template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the following snippet of the data to be\n        exported, and then continue to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-preview [initData]=\"state.preview.rows\"\n                           [columnNames]=\"state.preview.cols\">\n        </polp-data-preview>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please confirm ...\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"!confirmed; else exportLogs\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"confirmExport()\">\n                Start to export\n            </button>\n        </div>\n        <ng-template #exportLogs>\n            <log-monitor\n                [logStream]=\"logStream\"\n                theme=\"dark\"\n                title=\"Data export logs\"\n                [animated]=\"true\"\n                [icons]=\"true\">\n            </log-monitor>            \n        </ng-template>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n\n" }]
    }], function () { return []; }, { columns: [{
            type: Input
        }], downloadAsync: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZXhwb3J0LWRhdGEtd2l6YXJkL2V4cG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2V4cG9ydC1kYXRhLXdpemFyZC9leHBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7SUNQdEQsOEJBQXFDLGFBQUEsY0FBQTtJQUVpQixZQUFzQjtJQUFBLGlCQUFPO0lBQzNFLHFIQUVKO0lBQUEsaUJBQU07SUFDTiw4QkFBdUI7SUFDbkIsdUNBRW9CO0lBQ3hCLGlCQUFNLEVBQUE7OztJQVI0QyxlQUFzQjtJQUF0Qix3REFBc0I7SUFLakQsZUFBK0I7SUFBL0Isb0RBQStCLDBDQUFBOzs7O0lBWWxELDJCQUF5QyxpQkFBQTtJQUMwQiw2S0FBUyxlQUFBLHNCQUFlLENBQUEsSUFBQztJQUNwRixpQ0FDSjtJQUFBLGlCQUFTLEVBQUE7OztJQUdU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O1lBQ2IsaUJBQU07O1lBakRhLHFDQUFnQjtZQWFoQixlQUFnQjtZQUFoQixxQ0FBZ0I7WUEwQnRCLGVBQWlCO1lBQWpCLHNDQUFpQjtZQU1qQixlQUFpQjtZQUFqQixzQ0FBaUI7Ozt1RkRhakIseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0kseUJBQXlCO3NDQWExQixPQUFPO2tCQUFmLEtBQUs7WUFLRyxhQUFhO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUFycm93TGVmdCwgZmFBcnJvd1JpZ2h0LCBmYUNoZWNrLCBmYUNoZXZyb25SaWdodCwgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IHNhZmVQYXJzZUJvb2wgfSBmcm9tICdAcG9scHdhcmUvZmUtdXRpbGl0aWVzJztcbmltcG9ydCB7IFdpemFyZEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL25neC13aXphcmQnO1xuaW1wb3J0IHsgTG9nTWVzc2FnZSB9IGZyb20gJ25neC1sb2ctbW9uaXRvcic7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEb3dubG9hZEZ1bmNUeXBlLCBJRG93bmxvYWRJbnB1dCwgSUV4Y2VsT3V0cHV0Q29sdW1uU2NoZW1hIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9leGNlbC1pby5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgd3JpdGVFeGNlbEFzeW5jIH0gZnJvbSAnLi4vbWV0aG9kcy9maWxlLW9wcyc7XG5cbmludGVyZmFjZSBJV2l6YXJkU3RhdGUge1xuICAgIHByZXZpZXc6IHtcbiAgICAgICAgY29sczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAgICAgcm93czogQXJyYXk8YW55PjtcbiAgICAgICAgdG90YWxDb3VudDogbnVtYmVyO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VDb2x1bW5TY2hlbWEoZGF0YToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbnB1dFR5cGU6ICd0ZXh0JyB8ICd0ZWwnIHwgJ2VtYWlsJyB8ICdkYXRlJyB8ICdudW1iZXInIHwgJ2NoZWNrYm94JyB8ICdmaWxlJztcbiAgICBwcm9wOiBzdHJpbmc7XG59KTogSUV4Y2VsT3V0cHV0Q29sdW1uU2NoZW1hPGFueT4ge1xuICAgIGlmIChkYXRhLmlucHV0VHlwZSA9PSAnZGF0ZScpIHtcbiAgICAgICAgLy8gdG9kbzogTWF5YmUgc2ltcGxpZnkgYXMgYSBzdHJpbmdcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHVtbjogZGF0YS5uYW1lLFxuICAgICAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgICAgIGZvcm1hdDogJ2RkL21tL3l5eXkgaGg6bW0gQU0vUE0nLFxuICAgICAgICAgICAgdmFsdWU6IChhKSA9PiBuZXcgRGF0ZShhW2RhdGEucHJvcF0pXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRhLmlucHV0VHlwZSA9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sdW1uOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogKGEpID0+IE51bWJlcihhW2RhdGEucHJvcF0pXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRhLmlucHV0VHlwZSA9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2x1bW46IGRhdGEubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogKGEpID0+IHNhZmVQYXJzZUJvb2woYVtkYXRhLnByb3BdKVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2x1bW46IGRhdGEubmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAoYSkgPT4gYVtkYXRhLnByb3BdXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vLyBXZSBvbiBwdXJwb3NlIGV4dGVuZHMgZnJvbSB0aGUgYWJzdHJhY3Qgd2l6YXJkLFxuLy8gdG8gYWxsb3cgZm9yIGV4dGVuc2liaWxpdHkgaW4gdGhlIGZ1dHVyZS5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1leHBvcnQtZGF0YS13aXphcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leHBvcnQtZGF0YS13aXphcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4cG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhwb3J0RGF0YVdpemFyZENvbXBvbmVudFxuICAgIGV4dGVuZHMgV2l6YXJkQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZmFDaGV2cm9uUmlnaHQgPSBmYUNoZXZyb25SaWdodDtcbiAgICBmYUFycm93TGVmdCA9IGZhQXJyb3dMZWZ0O1xuICAgIGZhQXJyb3dSaWdodCA9IGZhQXJyb3dSaWdodDtcbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG4gICAgZmFDaGVjayA9IGZhQ2hlY2s7XG5cbiAgICBASW5wdXQoKSBjb2x1bW5zOiBBcnJheTx7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgaW5wdXRUeXBlOiAndGV4dCcgfCAndGVsJyB8ICdlbWFpbCcgfCAnZGF0ZScgfCAnbnVtYmVyJyB8ICdjaGVja2JveCcgfCAnZmlsZSc7XG4gICAgICAgIHByb3A6IHN0cmluZztcbiAgICB9PiA9IFtdO1xuICAgIEBJbnB1dCgpIGRvd25sb2FkQXN5bmM6IERvd25sb2FkRnVuY1R5cGUgPSAoXzogSURvd25sb2FkSW5wdXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc3RhdGU6IElXaXphcmRTdGF0ZTtcblxuICAgIC8vIEZpcnN0IHN0ZXA6IHByZXZpZXdcbiAgICAvLyBPcHRpb25hbCBzZWNvbmQgc3RlcDogY29uZmlndXJhdGlvbiBcbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBsb2dTdHJlYW0gPSBuZXcgUmVwbGF5U3ViamVjdDxMb2dNZXNzYWdlPigpO1xuICAgIGNvbmZpcm1lZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHByZXZpZXc6IHtcbiAgICAgICAgICAgICAgICBjb2xzOiB7fSxcbiAgICAgICAgICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tYXhEaW0gPSAyO1xuICAgICAgICB0aGlzLmJ1aWxkTmF2aWdhdG9yQ2ZnKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZFByZXZpZXdBc3luYygpO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgYnVpbGROYXZpZ2F0b3JDZmcoKSB7XG4gICAgICAgIHN1cGVyLmJ1aWxkTmF2aWdhdG9yQ2ZnKCk7XG4gICAgICAgIC8vIFNwZWNpZmljIGxvZ2ljIGluIHRoaXMgY2xhc3NcblxuICAgICAgICAvLyBDb25maWd1cmUgWzFdIDsgb3B0aW9ucyBmb3IgcHJldmlld1xuICAgICAgICB0aGlzLm5hdmlnYXRvckNmZy5zZXRFbGVtZW50KHtcbiAgICAgICAgICAgIGhhc1ByZXZTdGVwOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc05leHRTdGVwOiB0cnVlLFxuICAgICAgICAgICAgaGFzTmV4dEd1YXJkOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgLy8gQ29uZmlndXJlIFsxLCAxXSA7IG9wdGlvbnMgZm9yIHByb2dyZXNzXG4gICAgICAgIHRoaXMubmF2aWdhdG9yQ2ZnLnNldEVsZW1lbnQoe1xuICAgICAgICAgICAgaGFzUHJldlN0ZXA6IHRydWUsXG4gICAgICAgICAgICBoYXNOZXh0U3RlcDogZmFsc2UsXG4gICAgICAgICAgICBoYXNOZXh0R3VhcmQ6IHRydWUsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH0sIDEsIDEpO1xuXG4gICAgICAgIHRoaXMuc3RlcEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5kaW1JbmRpY2UgPSBbMCwgMF07XG4gICAgICAgIHRoaXMuZm9yd2FyZERpbUluZGljZSA9IFsxLCAwXTtcblxuICAgICAgICB0aGlzLm5hdmlnYXRvciA9IHRoaXMubmF2aWdhdG9yQ2ZnLmdldEVsZW1lbnQoMCk7XG4gICAgICAgIHRoaXMuZm9yd2FyZE5hdmlnYXRvciA9IHRoaXMubmF2aWdhdG9yQ2ZnLmdldEVsZW1lbnQoLi4udGhpcy5mb3J3YXJkRGltSW5kaWNlKTtcbiAgICB9XG5cbiAgICAvLyBOb3Qgb3ZlcnJpZGUgXG4gICAgZ2V0IGRpc2FibGVQcmV2U3RlcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlybWVkO1xuICAgIH1cblxuICAgIC8vIFByZXZpZXcgc3RlcFxuICAgIGFzeW5jIGxvYWRQcmV2aWV3QXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuZG93bmxvYWRBc3luYyh7XG4gICAgICAgICAgICBwYWdlSW5kZXg6IDAsXG4gICAgICAgICAgICBwYWdlU2l6ZTogMVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gTm8gbmVlZCB0byBjb250aW51ZSBpbiB0aGlzIGNhc2UuXG4gICAgICAgIGlmIChyZXQudG90YWxDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IGZpcnN0Um93ID0gcmV0Lml0ZW1zWzBdO1xuICAgICAgICAvLyB0b2RvOiBNYWtlIGl0IGEgSVJvd0RhdGF0eXBlIFxuICAgICAgICB0aGlzLnN0YXRlLnByZXZpZXcucm93cyA9IFtmaXJzdFJvd107XG4gICAgICAgIHRoaXMuc3RhdGUucHJldmlldy5jb2xzID0gdGhpcy5jb2x1bW5zLnJlZHVjZSgoc3VtLCBhKSA9PiB7XG4gICAgICAgICAgICBzdW1bYS5wcm9wXSA9IGEubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aWV3LnRvdGFsQ291bnQgPSByZXQudG90YWxDb3VudDtcbiAgICB9XG5cbiAgICBjb25maXJtRXhwb3J0KCkge1xuICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXhwb3J0RGF0YUFzeW5jKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZXhwb3J0RGF0YUFzeW5jKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5pbnZva2VEb3dubG9hZEFzeW5jKCk7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdGFydCB0byB3cml0ZSBhbiBleGNlbHNoZWV0IGZpbGUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5jb2x1bW5zLm1hcChhID0+IG1ha2VDb2x1bW5TY2hlbWEoYSkpO1xuICAgICAgICAgICAgYXdhaXQgd3JpdGVFeGNlbEFzeW5jKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogJ3Rlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTVUNDRVNTJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRXhjZWxzaGVldCBjcmVhdGVkYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSBleHBlY3QgdGhhdCB0aGUgdW5kZXJseWluZyB1cGxvYWQgbWV0aG9kIGlzIHdvcmtpbmcgaW4gYSB0cmFuc2FjdGlvbmFsIHdheS5cbiAgICAvLyBJLmUuLCBlaXRoZXIgYWxsIHRoZSBkYXRhIGlzIHVwbG9hZGVkIG9yIG5vbmUgb2YgdGhlbSBpcyB1cGxvYWRlZC5cbiAgICBhc3luYyBpbnZva2VEb3dubG9hZEFzeW5jKCkge1xuICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHBhZ2VTaXplID0gMTAwO1xuICAgICAgICAgICAgbGV0IHN0YXJ0UGFnZUluZGV4ID0gMDtcbiAgICAgICAgICAgIGxldCBoYXNNb3JlRGF0YSA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAoaGFzTW9yZURhdGEgJiYgKHN0YXJ0UGFnZUluZGV4ICogcGFnZVNpemUgPCB0aGlzLnN0YXRlLnByZXZpZXcudG90YWxDb3VudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU3RhcnQgdG8gcmV0cmlldmUgdGhlIGRhdGEgZnJvbSBbJHtzdGFydFBhZ2VJbmRleCAqIHBhZ2VTaXplfV1gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5kb3dubG9hZEFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUluZGV4OiBzdGFydFBhZ2VJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBoYXNNb3JlRGF0YSA9IHJldC5pdGVtcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIC8vIGRhdGFcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goLi4ucmV0Lml0ZW1zKTtcbiAgICAgICAgICAgICAgICBzdGFydFBhZ2VJbmRleCsrO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTVUNDRVNTJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYERhdGEgcmV0cmlldmVkICgke2RhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wcmV2aWV3LnRvdGFsQ291bnQgKiAxMDB9JSBjb21wbGV0ZWQpYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBEYXRhIHJldHJpZXZhbCBzdWNjZWVkZWRgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0VSUicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEVycm9yIGhhcHBlbmVkICgke2UubWVzc2FnZX0pYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRVJSJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRGF0YSByZXRyaWV2YWwgZmFpbGVkYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiICpuZ0lmPVwidmlzaWJsZSgwKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBoNlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrIG1lLTFcIj5TdGVwIHt7c3RlcEluZGV4ICsgMX19PC9zcGFuPlxuICAgICAgICBQbGVhc2UgcmV2aWV3IHRoZSBmb2xsb3dpbmcgc25pcHBldCBvZiB0aGUgZGF0YSB0byBiZVxuICAgICAgICBleHBvcnRlZCwgYW5kIHRoZW4gY29udGludWUgdG8gdGhlIG5leHQgc3RlcC5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxwb2xwLWRhdGEtcHJldmlldyBbaW5pdERhdGFdPVwic3RhdGUucHJldmlldy5yb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5OYW1lc109XCJzdGF0ZS5wcmV2aWV3LmNvbHNcIj5cbiAgICAgICAgPC9wb2xwLWRhdGEtcHJldmlldz5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY2FyZFwiICpuZ0lmPVwidmlzaWJsZSgxKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBoNlwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIHJvdW5kZWQtcGlsbCBiZy1kYXJrIG1lLTFcIj5TdGVwIHt7c3RlcEluZGV4ICsgMX19PC9zcGFuPlxuICAgICAgICBQbGVhc2UgY29uZmlybSAuLi5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhY29uZmlybWVkOyBlbHNlIGV4cG9ydExvZ3NcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2tcIiAoY2xpY2spPVwiY29uZmlybUV4cG9ydCgpXCI+XG4gICAgICAgICAgICAgICAgU3RhcnQgdG8gZXhwb3J0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZXhwb3J0TG9ncz5cbiAgICAgICAgICAgIDxsb2ctbW9uaXRvclxuICAgICAgICAgICAgICAgIFtsb2dTdHJlYW1dPVwibG9nU3RyZWFtXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRGF0YSBleHBvcnQgbG9nc1wiXG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtpY29uc109XCJ0cnVlXCI+XG4gICAgICAgICAgICA8L2xvZy1tb25pdG9yPiAgICAgICAgICAgIFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gTmF2aWdhdGlvbiAtLT5cbjxkaXYgY2xhc3M9XCJkLWZsZXggbXQtNCBtYi00XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZVByZXZTdGVwXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaGFzUHJldlN0ZXBcIiAoY2xpY2spPVwicHJldlN0ZXAoKVwiPlxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93TGVmdFwiPjwvZmEtaWNvbj5cbiAgICAgICAgUHJldmlvdXNcbiAgICA8L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz1cIm1lLWF1dG9cIj48L3NwYW4+ICAgIFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVOZXh0U3RlcFwiXG4gICAgICAgICAgICAqbmdJZj1cImhhc05leHRTdGVwXCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5cbiAgICAgICAgTmV4dFxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93UmlnaHRcIj48L2ZhLWljb24+ICAgICAgICAgICAgICAgIFxuICAgIDwvYnV0dG9uPiAgICAgICAgICAgIFxuPC9kaXY+ICAgIFxuXG4iXX0=