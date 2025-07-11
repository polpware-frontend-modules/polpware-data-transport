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
ModalUtilsService.ɵfac = function ModalUtilsService_Factory(t) { return new (t || ModalUtilsService)(i0.ɵɵinject(i1.BsModalService)); };
ModalUtilsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalUtilsService, factory: ModalUtilsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvc2VydmljZXMvbW9kYWwtdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBc0Msb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBaUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUNySCxPQUFPLEVBQUUsMEJBQTBCLEVBQTJCLE1BQU0sc0RBQXNELENBQUM7QUFDM0gsT0FBTyxFQUEyQiwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7QUFLM0gsTUFBTSxPQUFPLGlCQUFpQjtJQUUxQixZQUE2QixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9ELHVCQUF1QixDQUFDLEtBQXFCO1FBRXpDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzdELFFBQVEsRUFBRSxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUE4QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNoRCxRQUFRLEVBQUUsSUFBSTtZQUNkLG1CQUFtQixFQUFFLElBQUk7WUFDekIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUE4QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNoRCxRQUFRLEVBQUUsSUFBSTtZQUNkLG1CQUFtQixFQUFFLElBQUk7WUFDekIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsT0FHbkM7UUFFRSxJQUFJLFdBQVcsR0FBc0I7WUFDakM7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFVBQVUsRUFBRSxFQUFFO2FBQ2pCO1NBQ0osQ0FBQztRQUVGLE1BQU0sU0FBUyxHQUFHOzs7O09BSW5CLENBQUM7UUFFQSxNQUFNLFNBQVMsR0FBc0I7WUFDakMsS0FBSyxFQUFFLDZCQUE2QjtZQUNwQyxXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsSUFBSTtZQUNsQixTQUFTLEVBQUUsU0FBUztZQUNwQixNQUFNLEVBQUUsV0FBVztZQUNuQixhQUFhLEVBQUUsS0FBSztZQUNwQixjQUFjLEVBQUUsS0FBSztTQUN4QixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0QsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsWUFBWSxFQUFFLFNBQVM7WUFDdkIsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWxELENBQUM7O2tGQS9FUSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTt1RkFFVCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUlucHV0RmllbGRTcGVjLCBJUHJvbXB0Rm9ybUlucHV0cywgUHJvbXB0TW9kYWxDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJvcEZpbGVNb2RhbENvbXBvbmVudCwgSU1vZGFsSW5wdXQgYXMgSURyb3BGaWxlSW5wdXQgfSBmcm9tICcuLi9kcm9wLWZpbGUtbW9kYWwvZHJvcC1maWxlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBvcnRXaXphcmRNb2RhbENvbXBvbmVudCwgSUV4cG9ydFdpemFyZE1vZGFsSW5wdXQgfSBmcm9tICcuLi9leHBvcnQtd2l6YXJkLW1vZGFsL2V4cG9ydC13aXphcmQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IElJbXBvcnRXaXphcmRNb2RhbElucHV0LCBJbXBvcnRXaXphcmRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2ltcG9ydC13aXphcmQtbW9kYWwvaW1wb3J0LXdpemFyZC1tb2RhbC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVXRpbHNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX21vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHsgfVxuXG4gICAgc2hvd0ZpbGVEcm9wRGlhbG9nQXN5bmMoaW5wdXQ6IElEcm9wRmlsZUlucHV0KSB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvdyhEcm9wRmlsZU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShtb2RhbFJlZi5jb250ZW50LnJlc3VsdCk7XG4gICAgfVxuXG4gICAgc2hvd0ltcG9ydERpYWxvZyhpbnB1dDogSUltcG9ydFdpemFyZE1vZGFsSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coSW1wb3J0V2l6YXJkTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3M6ICdtb2RhbC14bCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd0V4cG9ydERpYWxvZyhpbnB1dDogSUV4cG9ydFdpemFyZE1vZGFsSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coRXhwb3J0V2l6YXJkTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3M6ICdtb2RhbC14bCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNlbGVjdEV4cG9ydFRhcmdldEFzeW5jKG9wdGlvbnM6IEFycmF5PHtcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICAgICAgbGFiZWw6IHN0cmluZztcbiAgICB9Pikge1xuXG4gICAgICAgIGxldCBpbnB1dEZpZWxkczogSUlucHV0RmllbGRTcGVjW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RhcmdldElkJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1NlbGVjdCBvbmUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgYWxlcnRJbmZvID0gYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCI+XG5UaGlzIGZvcm0gY29udGFpbnMgdGFibGUgcXVlc3Rpb25zLiBcblRoZSByZXNwb25zZSB0byBlYWNoIHRhYmxlIHdpbGwgYmUgZXhwb3J0ZWQgaW50byBhIHNlcGFyYXRlIHNwcmVhZHNoZWV0LiBcblBsZWFzZSBzZWxlY3Qgb25lIHRhYmxlIHF1ZXN0aW9uIG9yIG5vbmUuXG48L2Rpdj5gO1xuXG4gICAgICAgIGNvbnN0IGluaXRTdGF0ZTogSVByb21wdEZvcm1JbnB1dHMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1doYXQgZG8geW91IHdhbnQgdG8gZXhwb3J0PycsXG4gICAgICAgICAgICBlbmFibGVFbnRlcjogZmFsc2UsXG4gICAgICAgICAgICBoaWRlQ2xvc2VCdG46IHRydWUsXG4gICAgICAgICAgICBpbm5lckJvZHk6IGFsZXJ0SW5mbyxcbiAgICAgICAgICAgIGZpZWxkczogaW5wdXRGaWVsZHMsXG4gICAgICAgICAgICBoaWRlQ2FuY2VsQnRuOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVDb25maXJtQnRuOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coUHJvbXB0TW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZSwgLyogc28gdGhhdCB3ZSBjYW4gY2FwdHVyZSB0aGUgY2xvc2UgZXZlbnQgKi9cbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSwgLyogU28gdGhhdCB3ZSBjYW4gY2FwdHVyZSB0aGUgY2xvc2UgZXZlbnQuICovXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IGluaXRTdGF0ZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShtb2RhbFJlZi5jb250ZW50LnJlc3VsdCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==