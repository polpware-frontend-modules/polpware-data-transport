import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "../import-data-wizard/import-data-wizard.component";
import * as i3 from "@polpware/modal-directives";
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
}
ImportWizardModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportWizardModalComponent, deps: [{ token: i1.BsModalRef }, { token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Component });
ImportWizardModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: ImportWizardModalComponent, selector: "polp-import-wizard-modal", inputs: { file: "file", columns: "columns", uploadAsync: "uploadAsync", successCallback: "successCallback" }, viewQueries: [{ propertyName: "importDataWizard", first: true, predicate: ["importDataWizard"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-import-data-wizard #importDataWizard\n                             [file]=\"file\"\n                             [targetColumns]=\"columns\"\n                             [uploadAsync]=\"uploadAsync\">\n    </polp-import-data-wizard>\n</div>\n", styles: [""], components: [{ type: i2.ImportDataWizardComponent, selector: "polp-import-data-wizard", inputs: ["file", "targetColumns", "uploadAsync"] }], directives: [{ type: i3.polpModalDraggableDirective, selector: "[polpModalDraggable]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportWizardModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-import-wizard-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-import-data-wizard #importDataWizard\n                             [file]=\"file\"\n                             [targetColumns]=\"columns\"\n                             [uploadAsync]=\"uploadAsync\">\n    </polp-import-data-wizard>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, propDecorators: { file: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC13aXphcmQtbW9kYWwvaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2ltcG9ydC13aXphcmQtbW9kYWwvaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBd0JwRSxNQUFNLE9BQU8sMEJBQTBCO0lBeUJuQyxZQUNvQixVQUFzQixFQUNuQixjQUE4QjtRQURqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXhCNUMsWUFBTyxHQUlYLEVBQUUsQ0FBQztRQUNDLGdCQUFXLEdBR2YsQ0FBQyxJQUF5QixFQUFFLEVBQUU7WUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFTLE9BQU8sRUFBRSxNQUFNO2dCQUN2QyxPQUFPLENBQUM7b0JBQ0osUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLEVBQUU7aUJBQ2IsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFDTyxvQkFBZSxHQUFjLElBQUksQ0FBQztRQUkzQyxVQUFLLEdBQUcsZUFBZSxDQUFDO0lBTXhCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzt3SEF6Q1EsMEJBQTBCOzRHQUExQiwwQkFBMEIsa1RDeEJ2Qyw0ZUFZQTs0RkRZYSwwQkFBMEI7a0JBTHRDLFNBQVM7K0JBQ0ksMEJBQTBCOzhIQU0zQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUtHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBV0csZUFBZTtzQkFBdkIsS0FBSztnQkFFMkMsZ0JBQWdCO3NCQUFoRSxTQUFTO3VCQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUm93RGF0YVR5cGUgfSBmcm9tICdAcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJbXBvcnREYXRhV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vaW1wb3J0LWRhdGEtd2l6YXJkL2ltcG9ydC1kYXRhLXdpemFyZC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbXBvcnRXaXphcmRNb2RhbElucHV0IHtcbiAgICBmaWxlOiBGaWxlO1xuICAgIGNvbHVtbnM6IEFycmF5PHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICAgICAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgfT47XG4gICAgdXBsb2FkQXN5bmM/OiAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gUHJvbWlzZTx7XG4gICAgICAgIGZhaWx1cmVzOiBBcnJheTxJUm93RGF0YVR5cGU+O1xuICAgICAgICBlcnJvcnM6IEFycmF5PHN0cmluZz47XG4gICAgfT47XG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogKCkgPT4gYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtaW1wb3J0LXdpemFyZC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltcG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltcG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltcG9ydFdpemFyZE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGZpbGU6IEZpbGU7XG4gICAgQElucHV0KCkgY29sdW1uczogQXJyYXk8e1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICByZXF1aXJlZDogYm9vbGVhbjtcbiAgICB9PiA9IFtdO1xuICAgIEBJbnB1dCgpIHVwbG9hZEFzeW5jOiAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gUHJvbWlzZTx7XG4gICAgICAgIGZhaWx1cmVzOiBBcnJheTxJUm93RGF0YVR5cGU+O1xuICAgICAgICBlcnJvcnM6IEFycmF5PHN0cmluZz47XG4gICAgfT4gPSAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlczogW10sXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQElucHV0KCkgc3VjY2Vzc0NhbGxiYWNrOiAoKSA9PiBhbnkgPSBudWxsO1xuXG4gICAgQFZpZXdDaGlsZCgnaW1wb3J0RGF0YVdpemFyZCcsIHsgc3RhdGljOiB0cnVlIH0pIGltcG9ydERhdGFXaXphcmQ6IEltcG9ydERhdGFXaXphcmRDb21wb25lbnQ7XG5cbiAgICB0aXRsZSA9ICdJbXBvcnQgd2l6YXJkJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmltcG9ydERhdGFXaXphcmQuaW1wb3J0U3RhdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayAmJiB0aGlzLnN1Y2Nlc3NDYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBwb2xwTW9kYWxEcmFnZ2FibGU+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8cG9scC1pbXBvcnQtZGF0YS13aXphcmQgI2ltcG9ydERhdGFXaXphcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpbGVdPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0YXJnZXRDb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXBsb2FkQXN5bmNdPVwidXBsb2FkQXN5bmNcIj5cbiAgICA8L3BvbHAtaW1wb3J0LWRhdGEtd2l6YXJkPlxuPC9kaXY+XG4iXX0=