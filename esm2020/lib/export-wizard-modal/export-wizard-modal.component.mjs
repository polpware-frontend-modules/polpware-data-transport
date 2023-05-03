import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "../export-data-wizard/export-data-wizard.component";
import * as i3 from "@polpware/modal-directives";
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
ExportWizardModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ExportWizardModalComponent, deps: [{ token: i1.BsModalRef }, { token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Component });
ExportWizardModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: ExportWizardModalComponent, selector: "polp-export-wizard-modal", inputs: { columns: "columns", downloadAsync: "downloadAsync" }, ngImport: i0, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-export-data-wizard [columns]=\"columns\"\n                             [downloadAsync]=\"downloadAsync\">\n    </polp-export-data-wizard>\n</div>\n\n", styles: [""], components: [{ type: i2.ExportDataWizardComponent, selector: "polp-export-data-wizard", inputs: ["columns", "downloadAsync"] }], directives: [{ type: i3.polpModalDraggableDirective, selector: "[polpModalDraggable]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ExportWizardModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-export-wizard-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-export-data-wizard [columns]=\"columns\"\n                             [downloadAsync]=\"downloadAsync\">\n    </polp-export-data-wizard>\n</div>\n\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, propDecorators: { columns: [{
                type: Input
            }], downloadAsync: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2V4cG9ydC13aXphcmQtbW9kYWwvZXhwb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2V4cG9ydC13aXphcmQtbW9kYWwvZXhwb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFrQnpELE1BQU0sT0FBTywwQkFBMEI7SUFrQm5DLFlBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBRGpDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbEI1QyxZQUFPLEdBSVgsRUFBRSxDQUFDO1FBQ0Msa0JBQWEsR0FBcUIsQ0FBQyxDQUFpQixFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO2dCQUN2QyxPQUFPLENBQUM7b0JBQ0osVUFBVSxFQUFFLENBQUM7b0JBQ2IsS0FBSyxFQUFFLEVBQUU7aUJBQ1osQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFFRixVQUFLLEdBQUcsZUFBZSxDQUFDO0lBTXhCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O3dIQTdCUSwwQkFBMEI7NEdBQTFCLDBCQUEwQixnSUNsQnZDLDhZQVdBOzRGRE9hLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDSSwwQkFBMEI7OEhBTTNCLE9BQU87c0JBQWYsS0FBSztnQkFLRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgRG93bmxvYWRGdW5jVHlwZSwgSURvd25sb2FkSW5wdXQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2V4Y2VsLWlvLmludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV4cG9ydFdpemFyZE1vZGFsSW5wdXQge1xuICAgIGNvbHVtbnM6IEFycmF5PHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBpbnB1dFR5cGU6ICd0ZXh0JyB8ICd0ZWwnIHwgJ2VtYWlsJyB8ICdkYXRlJyB8ICdudW1iZXInIHwgJ2NoZWNrYm94JyB8ICdmaWxlJzsgLy8gT24gcHVycG9zZSBkbyBub3QgdXNlIHRoZSBUeXBlIGZyb20gbmd4IHJlYWN0aXZlIHRhYmxlLCB0byBnZXQgcmlkZSBvZiB0aGlzIGRlcGVuZGVuY3lcbiAgICAgICAgcHJvcDogc3RyaW5nO1xuICAgIH0+O1xuICAgIGRvd25sb2FkQXN5bmM/OiBEb3dubG9hZEZ1bmNUeXBlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZXhwb3J0LXdpemFyZC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4cG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V4cG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4cG9ydFdpemFyZE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGNvbHVtbnM6IEFycmF5PHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBpbnB1dFR5cGU6ICd0ZXh0JyB8ICd0ZWwnIHwgJ2VtYWlsJyB8ICdkYXRlJyB8ICdudW1iZXInIHwgJ2NoZWNrYm94JyB8ICdmaWxlJztcbiAgICAgICAgcHJvcDogc3RyaW5nO1xuICAgIH0+ID0gW107XG4gICAgQElucHV0KCkgZG93bmxvYWRBc3luYzogRG93bmxvYWRGdW5jVHlwZSA9IChfOiBJRG93bmxvYWRJbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50OiAwLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aXRsZSA9ICdFeHBvcnQgd2l6YXJkJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmJzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBwb2xwTW9kYWxEcmFnZ2FibGU+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8cG9scC1leHBvcnQtZGF0YS13aXphcmQgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkb3dubG9hZEFzeW5jXT1cImRvd25sb2FkQXN5bmNcIj5cbiAgICA8L3BvbHAtZXhwb3J0LWRhdGEtd2l6YXJkPlxuPC9kaXY+XG5cbiJdfQ==