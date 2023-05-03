import { BsModalService } from 'ngx-bootstrap/modal';
import { IModalInput as IDropFileInput } from '../drop-file-modal/drop-file-modal.component';
import { IExportWizardModalInput } from '../export-wizard-modal/export-wizard-modal.component';
import { IImportWizardModalInput } from '../import-wizard-modal/import-wizard-modal.component';
import * as i0 from "@angular/core";
export declare class ModalUtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showFileDropDialogAsync(input: IDropFileInput): Promise<File[]>;
    showImportDialog(input: IImportWizardModalInput): void;
    showExportDialog(input: IExportWizardModalInput): void;
    selectExportTargetAsync(options: Array<{
        value: string;
        label: string;
    }>): Promise<{
        [key: string]: any;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalUtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalUtilsService>;
}
