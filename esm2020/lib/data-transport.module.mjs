import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PolpBsComponentsModule } from '@polpware/bs-components';
import { PolpDraggableModule } from '@polpware/modal-directives';
import { PolpwareNgxPipesModule } from '@polpware/ngx-pipes';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxFileDropModule } from 'ngx-file-drop';
import { LogMonitorModule } from 'ngx-log-monitor';
import { DataPreviewComponent } from './data-preview/data-preview.component';
import { DataProcessorComponent } from './data-processor/data-processor.component';
import { DataPublicationComponent } from './data-publication/data-publication.component';
import { DataStagingComponent } from './data-staging/data-staging.component';
import { DefineColumnMappingComponent } from './define-column-mapping/define-column-mapping.component';
import { DropFileModalComponent } from './drop-file-modal/drop-file-modal.component';
import { ExportDataWizardComponent } from './export-data-wizard/export-data-wizard.component';
import { ExportWizardModalComponent } from './export-wizard-modal/export-wizard-modal.component';
import { ImportDataWizardComponent } from './import-data-wizard/import-data-wizard.component';
import { ImportWizardModalComponent } from './import-wizard-modal/import-wizard-modal.component';
import * as i0 from "@angular/core";
export class PolpDataTransportModule {
}
PolpDataTransportModule.ɵfac = function PolpDataTransportModule_Factory(t) { return new (t || PolpDataTransportModule)(); };
PolpDataTransportModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolpDataTransportModule });
PolpDataTransportModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        PopoverModule,
        CollapseModule,
        NgxFileDropModule,
        PolpBsComponentsModule,
        PolpDraggableModule,
        FontAwesomeModule,
        NgxDatatableModule,
        PolpwareNgxPipesModule,
        LogMonitorModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpDataTransportModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DropFileModalComponent,
                    ImportDataWizardComponent,
                    ImportWizardModalComponent,
                    DefineColumnMappingComponent,
                    DataStagingComponent,
                    DataPublicationComponent,
                    DataProcessorComponent,
                    ExportDataWizardComponent,
                    ExportWizardModalComponent,
                    DataPreviewComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ModalModule,
                    PopoverModule,
                    CollapseModule,
                    NgxFileDropModule,
                    PolpBsComponentsModule,
                    PolpDraggableModule,
                    FontAwesomeModule,
                    NgxDatatableModule,
                    PolpwareNgxPipesModule,
                    LogMonitorModule
                ],
                exports: [
                    DropFileModalComponent,
                    ImportDataWizardComponent,
                    ImportWizardModalComponent,
                    DefineColumnMappingComponent,
                    DataStagingComponent,
                    DataPublicationComponent,
                    DataProcessorComponent,
                    ExportDataWizardComponent,
                    ExportWizardModalComponent,
                    DataPreviewComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpDataTransportModule, { declarations: [DropFileModalComponent,
        ImportDataWizardComponent,
        ImportWizardModalComponent,
        DefineColumnMappingComponent,
        DataStagingComponent,
        DataPublicationComponent,
        DataProcessorComponent,
        ExportDataWizardComponent,
        ExportWizardModalComponent,
        DataPreviewComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        PopoverModule,
        CollapseModule,
        NgxFileDropModule,
        PolpBsComponentsModule,
        PolpDraggableModule,
        FontAwesomeModule,
        NgxDatatableModule,
        PolpwareNgxPipesModule,
        LogMonitorModule], exports: [DropFileModalComponent,
        ImportDataWizardComponent,
        ImportWizardModalComponent,
        DefineColumnMappingComponent,
        DataStagingComponent,
        DataPublicationComponent,
        DataProcessorComponent,
        ExportDataWizardComponent,
        ExportWizardModalComponent,
        DataPreviewComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10cmFuc3BvcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvZGF0YS10cmFuc3BvcnQvc3JjL2xpYi9kYXRhLXRyYW5zcG9ydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUE4Q2pHLE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs2RUE5QjVCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBRW5CLFdBQVc7UUFDWCxhQUFhO1FBQ2IsY0FBYztRQUVkLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBRXRCLGdCQUFnQjt1RkFlWCx1QkFBdUI7Y0E1Q25DLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1Ysc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsb0JBQW9CO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFFbkIsV0FBVztvQkFDWCxhQUFhO29CQUNiLGNBQWM7b0JBRWQsaUJBQWlCO29CQUNqQixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFFdEIsZ0JBQWdCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0Qix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFDMUIsb0JBQW9CO2lCQUN2QjthQUNKOzt3RkFDWSx1QkFBdUIsbUJBMUM1QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIsV0FBVztRQUNYLGFBQWE7UUFDYixjQUFjO1FBRWQsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFFdEIsZ0JBQWdCLGFBR2hCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFBvbHBCc0NvbXBvbmVudHNNb2R1bGUgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQb2xwRHJhZ2dhYmxlTW9kdWxlIH0gZnJvbSAnQHBvbHB3YXJlL21vZGFsLWRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUG9scHdhcmVOZ3hQaXBlc01vZHVsZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtcGlwZXMnO1xuaW1wb3J0IHsgTmd4RGF0YXRhYmxlTW9kdWxlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IE5neEZpbGVEcm9wTW9kdWxlIH0gZnJvbSAnbmd4LWZpbGUtZHJvcCc7XG5pbXBvcnQgeyBMb2dNb25pdG9yTW9kdWxlIH0gZnJvbSAnbmd4LWxvZy1tb25pdG9yJztcbmltcG9ydCB7IERhdGFQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXByZXZpZXcvZGF0YS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhUHJvY2Vzc29yQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXByb2Nlc3Nvci9kYXRhLXByb2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVB1YmxpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXB1YmxpY2F0aW9uL2RhdGEtcHVibGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFTdGFnaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXN0YWdpbmcvZGF0YS1zdGFnaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZpbmVDb2x1bW5NYXBwaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9kZWZpbmUtY29sdW1uLW1hcHBpbmcvZGVmaW5lLWNvbHVtbi1tYXBwaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wRmlsZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wLWZpbGUtbW9kYWwvZHJvcC1maWxlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBvcnREYXRhV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi9leHBvcnQtZGF0YS13aXphcmQvZXhwb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBvcnRXaXphcmRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vZXhwb3J0LXdpemFyZC1tb2RhbC9leHBvcnQtd2l6YXJkLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbXBvcnREYXRhV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi9pbXBvcnQtZGF0YS13aXphcmQvaW1wb3J0LWRhdGEtd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbXBvcnRXaXphcmRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW1wb3J0LXdpemFyZC1tb2RhbC9pbXBvcnQtd2l6YXJkLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERyb3BGaWxlTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEltcG9ydERhdGFXaXphcmRDb21wb25lbnQsXG4gICAgICAgIEltcG9ydFdpemFyZE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBEZWZpbmVDb2x1bW5NYXBwaW5nQ29tcG9uZW50LFxuICAgICAgICBEYXRhU3RhZ2luZ0NvbXBvbmVudCxcbiAgICAgICAgRGF0YVB1YmxpY2F0aW9uQ29tcG9uZW50LFxuICAgICAgICBEYXRhUHJvY2Vzc29yQ29tcG9uZW50LFxuICAgICAgICBFeHBvcnREYXRhV2l6YXJkQ29tcG9uZW50LFxuICAgICAgICBFeHBvcnRXaXphcmRNb2RhbENvbXBvbmVudCxcbiAgICAgICAgRGF0YVByZXZpZXdDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICAgICAgUG9wb3Zlck1vZHVsZSxcbiAgICAgICAgQ29sbGFwc2VNb2R1bGUsXG5cbiAgICAgICAgTmd4RmlsZURyb3BNb2R1bGUsXG4gICAgICAgIFBvbHBCc0NvbXBvbmVudHNNb2R1bGUsXG4gICAgICAgIFBvbHBEcmFnZ2FibGVNb2R1bGUsXG4gICAgICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgICAgICBOZ3hEYXRhdGFibGVNb2R1bGUsXG4gICAgICAgIFBvbHB3YXJlTmd4UGlwZXNNb2R1bGUsXG5cbiAgICAgICAgTG9nTW9uaXRvck1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBEcm9wRmlsZU1vZGFsQ29tcG9uZW50LFxuICAgICAgICBJbXBvcnREYXRhV2l6YXJkQ29tcG9uZW50LFxuICAgICAgICBJbXBvcnRXaXphcmRNb2RhbENvbXBvbmVudCxcbiAgICAgICAgRGVmaW5lQ29sdW1uTWFwcGluZ0NvbXBvbmVudCxcbiAgICAgICAgRGF0YVN0YWdpbmdDb21wb25lbnQsXG4gICAgICAgIERhdGFQdWJsaWNhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgRGF0YVByb2Nlc3NvckNvbXBvbmVudCxcbiAgICAgICAgRXhwb3J0RGF0YVdpemFyZENvbXBvbmVudCxcbiAgICAgICAgRXhwb3J0V2l6YXJkTW9kYWxDb21wb25lbnQsXG4gICAgICAgIERhdGFQcmV2aWV3Q29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwRGF0YVRyYW5zcG9ydE1vZHVsZSB7IH1cbiJdfQ==