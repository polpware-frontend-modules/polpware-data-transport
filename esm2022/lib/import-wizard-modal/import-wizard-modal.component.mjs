import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@polpware/modal-directives";
import * as i3 from "../import-data-wizard/import-data-wizard.component";
const _c0 = ["importDataWizard"];
export class ImportWizardModalComponent {
    constructor(bsModalRef, bsModalService) {
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.columns = [];
        this.uploadAsync = (data) => {
            return new Promise(function (resolve, reject) {
                resolve({
                    failures: [],
                    errors: []
                });
            });
        };
        this.successCallback = null;
        this.title = 'Import wizard';
    }
    ngOnInit() {
    }
    close() {
        if (this.importDataWizard.importStat.success) {
            this.successCallback && this.successCallback();
        }
        this.bsModalRef.hide();
    }
    static { this.ɵfac = function ImportWizardModalComponent_Factory(t) { return new (t || ImportWizardModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportWizardModalComponent, selectors: [["polp-import-wizard-modal"]], viewQuery: function ImportWizardModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.importDataWizard = _t.first);
        } }, inputs: { file: "file", columns: "columns", uploadAsync: "uploadAsync", successCallback: "successCallback" }, decls: 7, vars: 4, consts: [["importDataWizard", ""], ["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "file", "targetColumns", "uploadAsync"]], template: function ImportWizardModalComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "h4", 2);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function ImportWizardModalComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.close()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "polp-import-data-wizard", 5, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("file", ctx.file)("targetColumns", ctx.columns)("uploadAsync", ctx.uploadAsync);
        } }, dependencies: [i2.polpModalDraggableDirective, i3.ImportDataWizardComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportWizardModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-import-wizard-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-import-data-wizard #importDataWizard\n                             [file]=\"file\"\n                             [targetColumns]=\"columns\"\n                             [uploadAsync]=\"uploadAsync\">\n    </polp-import-data-wizard>\n</div>\n" }]
    }], () => [{ type: i1.BsModalRef }, { type: i1.BsModalService }], { file: [{
            type: Input
        }], columns: [{
            type: Input
        }], uploadAsync: [{
            type: Input
        }], successCallback: [{
            type: Input
        }], importDataWizard: [{
            type: ViewChild,
            args: ['importDataWizard', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImportWizardModalComponent, { className: "ImportWizardModalComponent", filePath: "lib\\import-wizard-modal\\import-wizard-modal.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC13aXphcmQtbW9kYWwvaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC13aXphcmQtbW9kYWwvaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQXdCcEUsTUFBTSxPQUFPLDBCQUEwQjtJQXlCbkMsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFEakMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF4QjVDLFlBQU8sR0FJWCxFQUFFLENBQUM7UUFDQyxnQkFBVyxHQUdmLENBQUMsSUFBeUIsRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtnQkFDdkMsT0FBTyxDQUFDO29CQUNKLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxFQUFFO2lCQUNiLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBQ08sb0JBQWUsR0FBYyxJQUFJLENBQUM7UUFJM0MsVUFBSyxHQUFHLGVBQWUsQ0FBQztJQU14QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ25ELENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7MkZBekNRLDBCQUEwQjtvRUFBMUIsMEJBQTBCOzs7Ozs7O1lDdkJuQyxBQURKLDhCQUE2QyxZQUNqQjtZQUFBLFlBQVM7WUFBQSxpQkFBSztZQUN0QyxpQ0FBNkU7WUFBbEIsNklBQVMsV0FBTyxLQUFDO1lBRWhGLEFBREksaUJBQVMsRUFDUDtZQUNOLDhCQUF3QjtZQUNwQixnREFJMEI7WUFDOUIsaUJBQU07O1lBVnNCLGVBQVM7WUFBVCwrQkFBUztZQU1SLGVBQWE7WUFFYixBQURBLEFBREEsK0JBQWEsOEJBQ1ksZ0NBQ0U7OztpRkRlM0MsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0ksMEJBQTBCO3dFQU0zQixJQUFJO2tCQUFaLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFLRyxXQUFXO2tCQUFuQixLQUFLO1lBV0csZUFBZTtrQkFBdkIsS0FBSztZQUUyQyxnQkFBZ0I7a0JBQWhFLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrRkFyQnRDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUm93RGF0YVR5cGUgfSBmcm9tICdAcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJbXBvcnREYXRhV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vaW1wb3J0LWRhdGEtd2l6YXJkL2ltcG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbXBvcnRXaXphcmRNb2RhbElucHV0IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIGNvbHVtbnM6IEFycmF5PHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgfT47XG4gICAgdXBsb2FkQXN5bmM/OiAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gUHJvbWlzZTx7XG4gICAgICAgIGZhaWx1cmVzOiBBcnJheTxJUm93RGF0YVR5cGU+O1xuICAgICAgICBlcnJvcnM6IEFycmF5PHN0cmluZz47XG4gICAgfT47XG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogKCkgPT4gYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtaW1wb3J0LXdpemFyZC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltcG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltcG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltcG9ydFdpemFyZE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGZpbGU6IEZpbGU7XG4gICAgQElucHV0KCkgY29sdW1uczogQXJyYXk8e1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICByZXF1aXJlZDogYm9vbGVhbjtcbiAgICB9PiA9IFtdO1xuICAgIEBJbnB1dCgpIHVwbG9hZEFzeW5jOiAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gUHJvbWlzZTx7XG4gICAgICAgIGZhaWx1cmVzOiBBcnJheTxJUm93RGF0YVR5cGU+O1xuICAgICAgICBlcnJvcnM6IEFycmF5PHN0cmluZz47XG4gICAgfT4gPSAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlczogW10sXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQElucHV0KCkgc3VjY2Vzc0NhbGxiYWNrOiAoKSA9PiBhbnkgPSBudWxsO1xuXG4gICAgQFZpZXdDaGlsZCgnaW1wb3J0RGF0YVdpemFyZCcsIHsgc3RhdGljOiB0cnVlIH0pIGltcG9ydERhdGFXaXphcmQ6IEltcG9ydERhdGFXaXphcmRDb21wb25lbnQ7XG5cbiAgICB0aXRsZSA9ICdJbXBvcnQgd2l6YXJkJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmltcG9ydERhdGFXaXphcmQuaW1wb3J0U3RhdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayAmJiB0aGlzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBwb2xwTW9kYWxEcmFnZ2FibGU+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8cG9scC1pbXBvcnQtZGF0YS13aXphcmQgI2ltcG9ydERhdGFXaXphcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpbGVdPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0YXJnZXRDb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXBsb2FkQXN5bmNdPVwidXBsb2FkQXN5bmNcIj5cbiAgICA8L3BvbHAtaW1wb3J0LWRhdGEtd2l6YXJkPlxuPC9kaXY+XG4iXX0=