import { Injectable } from '@angular/core';
import { PromptModalComponent } from '@polpware/bs-components';
import { lastValueFrom } from 'rxjs';
import { DropFileModalComponent } from '../drop-file-modal/drop-file-modal.component';
import { ExportWizardModalComponent } from '../export-wizard-modal/export-wizard-modal.component';
import { ImportWizardModalComponent } from '../import-wizard-modal/import-wizard-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class ModalUtilsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showFileDropDialogAsync(input) {
        const modalRef = this._modalService.show(DropFileModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return lastValueFrom(modalRef.content.result);
    }
    showImportDialog(input) {
        this._modalService.show(ImportWizardModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-xl'
        });
    }
    showExportDialog(input) {
        this._modalService.show(ExportWizardModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-xl'
        });
    }
    async selectExportTargetAsync(options) {
        let inputFields = [
            {
                name: 'targetId',
                label: 'Select one',
                value: '',
                category: 'radio',
                options: options,
                validators: {}
            }
        ];
        const alertInfo = `<div class="alert alert-info">
This form contains table questions. 
The response to each table will be exported into a separate spreadsheet. 
Please select one table question or none.
</div>`;
        const initState = {
            title: 'What do you want to export?',
            enableEnter: false,
            hideCloseBtn: true,
            innerBody: alertInfo,
            fields: inputFields,
            hideCancelBtn: false,
            hideConfirmBtn: false
        };
        const modalRef = this._modalService.show(PromptModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            keyboard: false,
            initialState: initState,
            class: 'modal-dialog-centered'
        });
        return lastValueFrom(modalRef.content.result);
    }
}
ModalUtilsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ModalUtilsService, deps: [{ token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable });
ModalUtilsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ModalUtilsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ModalUtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.BsModalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvc2VydmljZXMvbW9kYWwtdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBc0Msb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBaUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUNySCxPQUFPLEVBQUUsMEJBQTBCLEVBQTJCLE1BQU0sc0RBQXNELENBQUM7QUFDM0gsT0FBTyxFQUEyQiwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7QUFLM0gsTUFBTSxPQUFPLGlCQUFpQjtJQUUxQixZQUE2QixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9ELHVCQUF1QixDQUFDLEtBQXFCO1FBRXpDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzdELFFBQVEsRUFBRSxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUE4QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNoRCxRQUFRLEVBQUUsSUFBSTtZQUNkLG1CQUFtQixFQUFFLElBQUk7WUFDekIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUE4QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNoRCxRQUFRLEVBQUUsSUFBSTtZQUNkLG1CQUFtQixFQUFFLElBQUk7WUFDekIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsT0FHbkM7UUFFRSxJQUFJLFdBQVcsR0FBc0I7WUFDakM7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFVBQVUsRUFBRSxFQUFFO2FBQ2pCO1NBQ0osQ0FBQztRQUVGLE1BQU0sU0FBUyxHQUFHOzs7O09BSW5CLENBQUM7UUFFQSxNQUFNLFNBQVMsR0FBc0I7WUFDakMsS0FBSyxFQUFFLDZCQUE2QjtZQUNwQyxXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsSUFBSTtZQUNsQixTQUFTLEVBQUUsU0FBUztZQUNwQixNQUFNLEVBQUUsV0FBVztZQUNuQixhQUFhLEVBQUUsS0FBSztZQUNwQixjQUFjLEVBQUUsS0FBSztTQUN4QixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0QsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsWUFBWSxFQUFFLFNBQVM7WUFDdkIsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWxELENBQUM7OytHQS9FUSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUZkLE1BQU07NEZBRVQsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElJbnB1dEZpZWxkU3BlYywgSVByb21wdEZvcm1JbnB1dHMsIFByb21wdE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERyb3BGaWxlTW9kYWxDb21wb25lbnQsIElNb2RhbElucHV0IGFzIElEcm9wRmlsZUlucHV0IH0gZnJvbSAnLi4vZHJvcC1maWxlLW1vZGFsL2Ryb3AtZmlsZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwb3J0V2l6YXJkTW9kYWxDb21wb25lbnQsIElFeHBvcnRXaXphcmRNb2RhbElucHV0IH0gZnJvbSAnLi4vZXhwb3J0LXdpemFyZC1tb2RhbC9leHBvcnQtd2l6YXJkLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJSW1wb3J0V2l6YXJkTW9kYWxJbnB1dCwgSW1wb3J0V2l6YXJkTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9pbXBvcnQtd2l6YXJkLW1vZGFsL2ltcG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFV0aWxzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9tb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7IH1cblxuICAgIHNob3dGaWxlRHJvcERpYWxvZ0FzeW5jKGlucHV0OiBJRHJvcEZpbGVJbnB1dCkge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coRHJvcEZpbGVNb2RhbENvbXBvbmVudCwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlOiBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCksXG4gICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgICAgICBjbGFzczogJ21vZGFsLWRpYWxvZy1jZW50ZXJlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20obW9kYWxSZWYuY29udGVudC5yZXN1bHQpO1xuICAgIH1cblxuICAgIHNob3dJbXBvcnREaWFsb2coaW5wdXQ6IElJbXBvcnRXaXphcmRNb2RhbElucHV0KSB7XG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93KEltcG9ydFdpemFyZE1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwteGwnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dFeHBvcnREaWFsb2coaW5wdXQ6IElFeHBvcnRXaXphcmRNb2RhbElucHV0KSB7XG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93KEV4cG9ydFdpemFyZE1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwteGwnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZWxlY3RFeHBvcnRUYXJnZXRBc3luYyhvcHRpb25zOiBBcnJheTx7XG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgfT4pIHtcblxuICAgICAgICBsZXQgaW5wdXRGaWVsZHM6IElJbnB1dEZpZWxkU3BlY1tdID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0YXJnZXRJZCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3Qgb25lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGFsZXJ0SW5mbyA9IGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxuVGhpcyBmb3JtIGNvbnRhaW5zIHRhYmxlIHF1ZXN0aW9ucy4gXG5UaGUgcmVzcG9uc2UgdG8gZWFjaCB0YWJsZSB3aWxsIGJlIGV4cG9ydGVkIGludG8gYSBzZXBhcmF0ZSBzcHJlYWRzaGVldC4gXG5QbGVhc2Ugc2VsZWN0IG9uZSB0YWJsZSBxdWVzdGlvbiBvciBub25lLlxuPC9kaXY+YDtcblxuICAgICAgICBjb25zdCBpbml0U3RhdGU6IElQcm9tcHRGb3JtSW5wdXRzID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdXaGF0IGRvIHlvdSB3YW50IHRvIGV4cG9ydD8nLFxuICAgICAgICAgICAgZW5hYmxlRW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgaGlkZUNsb3NlQnRuOiB0cnVlLFxuICAgICAgICAgICAgaW5uZXJCb2R5OiBhbGVydEluZm8sXG4gICAgICAgICAgICBmaWVsZHM6IGlucHV0RmllbGRzLFxuICAgICAgICAgICAgaGlkZUNhbmNlbEJ0bjogZmFsc2UsXG4gICAgICAgICAgICBoaWRlQ29uZmlybUJ0bjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5zaG93KFByb21wdE1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsIC8qIHNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgdGhlIGNsb3NlIGV2ZW50ICovXG4gICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsIC8qIFNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgdGhlIGNsb3NlIGV2ZW50LiAqL1xuICAgICAgICAgICAgaW5pdGlhbFN0YXRlOiBpbml0U3RhdGUsXG4gICAgICAgICAgICBjbGFzczogJ21vZGFsLWRpYWxvZy1jZW50ZXJlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20obW9kYWxSZWYuY29udGVudC5yZXN1bHQpO1xuXG4gICAgfVxuXG59XG4iXX0=