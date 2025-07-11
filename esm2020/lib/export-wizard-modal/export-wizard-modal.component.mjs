import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@polpware/modal-directives";
import * as i3 from "../export-data-wizard/export-data-wizard.component";
export class ExportWizardModalComponent {
    constructor(bsModalRef, bsModalService) {
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.columns = [];
        this.downloadAsync = (_) => {
            return new Promise(function (resolve, reject) {
                resolve({
                    totalCount: 0,
                    items: []
                });
            });
        };
        this.title = 'Export wizard';
    }
    ngOnInit() {
    }
    close() {
        this.bsModalRef.hide();
    }
}
ExportWizardModalComponent.ɵfac = function ExportWizardModalComponent_Factory(t) { return new (t || ExportWizardModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.BsModalService)); };
ExportWizardModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExportWizardModalComponent, selectors: [["polp-export-wizard-modal"]], inputs: { columns: "columns", downloadAsync: "downloadAsync" }, decls: 6, vars: 3, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "columns", "downloadAsync"]], template: function ExportWizardModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function ExportWizardModalComponent_Template_button_click_3_listener() { return ctx.close(); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelement(5, "polp-export-data-wizard", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("columns", ctx.columns)("downloadAsync", ctx.downloadAsync);
    } }, dependencies: [i2.polpModalDraggableDirective, i3.ExportDataWizardComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportWizardModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-export-wizard-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-export-data-wizard [columns]=\"columns\"\n                             [downloadAsync]=\"downloadAsync\">\n    </polp-export-data-wizard>\n</div>\n\n" }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, { columns: [{
            type: Input
        }], downloadAsync: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2V4cG9ydC13aXphcmQtbW9kYWwvZXhwb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2V4cG9ydC13aXphcmQtbW9kYWwvZXhwb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFrQnpELE1BQU0sT0FBTywwQkFBMEI7SUFrQm5DLFlBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBRGpDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbEI1QyxZQUFPLEdBSVgsRUFBRSxDQUFDO1FBQ0Msa0JBQWEsR0FBcUIsQ0FBQyxDQUFpQixFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO2dCQUN2QyxPQUFPLENBQUM7b0JBQ0osVUFBVSxFQUFFLENBQUM7b0JBQ2IsS0FBSyxFQUFFLEVBQUU7aUJBQ1osQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFRixVQUFLLEdBQUcsZUFBZSxDQUFDO0lBTXhCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O29HQTdCUSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ2xCdkMsOEJBQTZDLFlBQUE7UUFDakIsWUFBUztRQUFBLGlCQUFLO1FBQ3RDLGlDQUE2RTtRQUFsQix1R0FBUyxXQUFPLElBQUM7UUFDNUUsaUJBQVMsRUFBQTtRQUViLDhCQUF3QjtRQUNwQiw2Q0FFMEI7UUFDOUIsaUJBQU07O1FBUnNCLGVBQVM7UUFBVCwrQkFBUztRQUtSLGVBQW1CO1FBQW5CLHFDQUFtQixvQ0FBQTs7dUZEWW5DLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNJLDBCQUEwQjswRkFNM0IsT0FBTztrQkFBZixLQUFLO1lBS0csYUFBYTtrQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IERvd25sb2FkRnVuY1R5cGUsIElEb3dubG9hZElucHV0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9leGNlbC1pby5pbnRlcmZhY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFeHBvcnRXaXphcmRNb2RhbElucHV0IHtcbiAgICBjb2x1bW5zOiBBcnJheTx7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgaW5wdXRUeXBlOiAndGV4dCcgfCAndGVsJyB8ICdlbWFpbCcgfCAnZGF0ZScgfCAnbnVtYmVyJyB8ICdjaGVja2JveCcgfCAnZmlsZSc7IC8vIE9uIHB1cnBvc2UgZG8gbm90IHVzZSB0aGUgVHlwZSBmcm9tIG5neCByZWFjdGl2ZSB0YWJsZSwgdG8gZ2V0IHJpZGUgb2YgdGhpcyBkZXBlbmRlbmN5XG4gICAgICAgIHByb3A6IHN0cmluZztcbiAgICB9PjtcbiAgICBkb3dubG9hZEFzeW5jPzogRG93bmxvYWRGdW5jVHlwZTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWV4cG9ydC13aXphcmQtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leHBvcnQtd2l6YXJkLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9leHBvcnQtd2l6YXJkLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBvcnRXaXphcmRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBjb2x1bW5zOiBBcnJheTx7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgaW5wdXRUeXBlOiAndGV4dCcgfCAndGVsJyB8ICdlbWFpbCcgfCAnZGF0ZScgfCAnbnVtYmVyJyB8ICdjaGVja2JveCcgfCAnZmlsZSc7XG4gICAgICAgIHByb3A6IHN0cmluZztcbiAgICB9PiA9IFtdO1xuICAgIEBJbnB1dCgpIGRvd25sb2FkQXN5bmM6IERvd25sb2FkRnVuY1R5cGUgPSAoXzogSURvd25sb2FkSW5wdXQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgdG90YWxDb3VudDogMCxcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGl0bGUgPSAnRXhwb3J0IHdpemFyZCc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgcG9scE1vZGFsRHJhZ2dhYmxlPlxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3t0aXRsZX19PC9oND5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPHBvbHAtZXhwb3J0LWRhdGEtd2l6YXJkIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZG93bmxvYWRBc3luY109XCJkb3dubG9hZEFzeW5jXCI+XG4gICAgPC9wb2xwLWV4cG9ydC1kYXRhLXdpemFyZD5cbjwvZGl2PlxuXG4iXX0=