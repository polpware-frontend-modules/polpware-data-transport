import { OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DownloadFuncType } from '../interfaces/excel-io.interface';
import * as i0 from "@angular/core";
export interface IExportWizardModalInput {
    columns: Array<{
        name: string;
        inputType: 'text' | 'tel' | 'email' | 'date' | 'number' | 'checkbox' | 'file';
        prop: string;
    }>;
    downloadAsync?: DownloadFuncType;
}
export declare class ExportWizardModalComponent implements OnInit {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    columns: Array<{
        name: string;
        inputType: 'text' | 'tel' | 'email' | 'date' | 'number' | 'checkbox' | 'file';
        prop: string;
    }>;
    downloadAsync: DownloadFuncType;
    title: string;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExportWizardModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExportWizardModalComponent, "polp-export-wizard-modal", never, { "columns": "columns"; "downloadAsync": "downloadAsync"; }, {}, never, never>;
}
