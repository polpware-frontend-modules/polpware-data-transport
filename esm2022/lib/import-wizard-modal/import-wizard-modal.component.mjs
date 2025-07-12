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
        } }, inputs: { file: "file", columns: "columns", uploadAsync: "uploadAsync", successCallback: "successCallback" }, decls: 7, vars: 4, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "file", "targetColumns", "uploadAsync"], ["importDataWizard", ""]], template: function ImportWizardModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function ImportWizardModalComponent_Template_button_click_3_listener() { return ctx.close(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "polp-import-data-wizard", 4, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("file", ctx.file)("targetColumns", ctx.columns)("uploadAsync", ctx.uploadAsync);
        } }, dependencies: [i2.polpModalDraggableDirective, i3.ImportDataWizardComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportWizardModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-import-wizard-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-import-data-wizard #importDataWizard\n                             [file]=\"file\"\n                             [targetColumns]=\"columns\"\n                             [uploadAsync]=\"uploadAsync\">\n    </polp-import-data-wizard>\n</div>\n" }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, { file: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC13aXphcmQtbW9kYWwvaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC13aXphcmQtbW9kYWwvaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQXdCcEUsTUFBTSxPQUFPLDBCQUEwQjtJQXlCbkMsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFEakMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF4QjVDLFlBQU8sR0FJWCxFQUFFLENBQUM7UUFDQyxnQkFBVyxHQUdmLENBQUMsSUFBeUIsRUFBRSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtnQkFDdkMsT0FBTyxDQUFDO29CQUNKLFFBQVEsRUFBRSxFQUFFO29CQUNaLE1BQU0sRUFBRSxFQUFFO2lCQUNiLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBQ08sb0JBQWUsR0FBYyxJQUFJLENBQUM7UUFJM0MsVUFBSyxHQUFHLGVBQWUsQ0FBQztJQU14QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUMxQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzsyRkF6Q1EsMEJBQTBCO29FQUExQiwwQkFBMEI7Ozs7OztZQ3hCdkMsOEJBQTZDLFlBQUE7WUFDakIsWUFBUztZQUFBLGlCQUFLO1lBQ3RDLGlDQUE2RTtZQUFsQix1R0FBUyxXQUFPLElBQUM7WUFDNUUsaUJBQVMsRUFBQTtZQUViLDhCQUF3QjtZQUNwQixnREFJMEI7WUFDOUIsaUJBQU07O1lBVnNCLGVBQVM7WUFBVCwrQkFBUztZQU1SLGVBQWE7WUFBYiwrQkFBYSw4QkFBQSxnQ0FBQTs7O3VGRGlCN0IsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0ksMEJBQTBCOzBGQU0zQixJQUFJO2tCQUFaLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFLRyxXQUFXO2tCQUFuQixLQUFLO1lBV0csZUFBZTtrQkFBdkIsS0FBSztZQUUyQyxnQkFBZ0I7a0JBQWhFLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElSb3dEYXRhVHlwZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IEltcG9ydERhdGFXaXphcmRDb21wb25lbnQgfSBmcm9tICcuLi9pbXBvcnQtZGF0YS13aXphcmQvaW1wb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltcG9ydFdpemFyZE1vZGFsSW5wdXQge1xuICAgIGZpbGU6IEZpbGU7XG4gICAgY29sdW1uczogQXJyYXk8e1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICByZXF1aXJlZDogYm9vbGVhbjtcbiAgICB9PjtcbiAgICB1cGxvYWRBc3luYz86IChkYXRhOiBBcnJheTxJUm93RGF0YVR5cGU+KSA9PiBQcm9taXNlPHtcbiAgICAgICAgZmFpbHVyZXM6IEFycmF5PElSb3dEYXRhVHlwZT47XG4gICAgICAgIGVycm9yczogQXJyYXk8c3RyaW5nPjtcbiAgICB9PjtcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiAoKSA9PiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1pbXBvcnQtd2l6YXJkLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1wb3J0V2l6YXJkTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgZmlsZTogRmlsZTtcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBBcnJheTx7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgICAgIHJlcXVpcmVkOiBib29sZWFuO1xuICAgIH0+ID0gW107XG4gICAgQElucHV0KCkgdXBsb2FkQXN5bmM6IChkYXRhOiBBcnJheTxJUm93RGF0YVR5cGU+KSA9PiBQcm9taXNlPHtcbiAgICAgICAgZmFpbHVyZXM6IEFycmF5PElSb3dEYXRhVHlwZT47XG4gICAgICAgIGVycm9yczogQXJyYXk8c3RyaW5nPjtcbiAgICB9PiA9IChkYXRhOiBBcnJheTxJUm93RGF0YVR5cGU+KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGZhaWx1cmVzOiBbXSxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBASW5wdXQoKSBzdWNjZXNzQ2FsbGJhY2s6ICgpID0+IGFueSA9IG51bGw7XG5cbiAgICBAVmlld0NoaWxkKCdpbXBvcnREYXRhV2l6YXJkJywgeyBzdGF0aWM6IHRydWUgfSkgaW1wb3J0RGF0YVdpemFyZDogSW1wb3J0RGF0YVdpemFyZENvbXBvbmVudDtcblxuICAgIHRpdGxlID0gJ0ltcG9ydCB3aXphcmQnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0RGF0YVdpemFyZC5pbXBvcnRTdGF0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrICYmIHRoaXMuc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiIHBvbHBNb2RhbERyYWdnYWJsZT5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7dGl0bGV9fTwvaDQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxwb2xwLWltcG9ydC1kYXRhLXdpemFyZCAjaW1wb3J0RGF0YVdpemFyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmlsZV09XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RhcmdldENvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1cGxvYWRBc3luY109XCJ1cGxvYWRBc3luY1wiPlxuICAgIDwvcG9scC1pbXBvcnQtZGF0YS13aXphcmQ+XG48L2Rpdj5cbiJdfQ==