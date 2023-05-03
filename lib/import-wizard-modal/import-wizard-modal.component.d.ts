import { OnInit } from '@angular/core';
import { IRowDataType } from '@polpware/ngx-reactive-table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ImportDataWizardComponent } from '../import-data-wizard/import-data-wizard.component';
import * as i0 from "@angular/core";
export interface IImportWizardModalInput {
    file: File;
    columns: Array<{
        id: string;
        label: string;
        required: boolean;
    }>;
    uploadAsync?: (data: Array<IRowDataType>) => Promise<{
        failures: Array<IRowDataType>;
        errors: Array<string>;
    }>;
    successCallback?: () => any;
}
export declare class ImportWizardModalComponent implements OnInit {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    file: File;
    columns: Array<{
        id: string;
        label: string;
        required: boolean;
    }>;
    uploadAsync: (data: Array<IRowDataType>) => Promise<{
        failures: Array<IRowDataType>;
        errors: Array<string>;
    }>;
    successCallback: () => any;
    importDataWizard: ImportDataWizardComponent;
    title: string;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportWizardModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportWizardModalComponent, "polp-import-wizard-modal", never, { "file": "file"; "columns": "columns"; "uploadAsync": "uploadAsync"; "successCallback": "successCallback"; }, {}, never, never>;
}
