import { OnInit } from '@angular/core';
import { NgxNotyImpl } from '@polpware/ngx-noty';
import { IRowDataType, ITableDataChangeEvent } from '@polpware/ngx-reactive-table';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import { Row } from 'read-excel-file/types';
import * as i0 from "@angular/core";
interface IDataState {
    originalData: Row[];
    preprocessor: {
        cols: {
            [key: string]: string;
        };
        inputRows: IRowDataType[];
        outputRows: IRowDataType[];
        updated: boolean;
    };
    mappings: Array<{
        sourceId: string;
        targetId: string;
    }>;
    postprocessor: {
        cols: {
            [key: string]: string;
        };
        inputRows: IRowDataType[];
        outputRows: IRowDataType[];
        updated: boolean;
    };
    publication: {
        cols: {
            [key: string]: string;
        };
        rows: IRowDataType[];
    };
}
export declare class ImportDataWizardComponent extends WizardAbstractComponent implements OnInit {
    private readonly _noty;
    faChevronRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faArrowLeft: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faArrowRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCheck: import("@fortawesome/fontawesome-common-types").IconDefinition;
    file: File;
    targetColumns: Array<{
        label: string;
        id: string;
        required: boolean;
    }>;
    uploadAsync: (data: Array<IRowDataType>) => Promise<{
        failures: Array<IRowDataType>;
        errors: Array<string>;
    }>;
    state: IDataState;
    isMappingsValid: boolean;
    hasImportStarted: boolean;
    importStat: {
        success: number;
        failure: number;
    };
    constructor(_noty: NgxNotyImpl);
    get sourceColumns(): {
        id: string;
        label: string;
    }[];
    ngOnInit(): void;
    buildNavigatorCfg(): void;
    get disableNextStep(): boolean;
    get disablePrevStep(): boolean;
    startImport(): void;
    loadDataAsync(): Promise<void>;
    protected preparePreprocessor(): void;
    resetPreprocessor(): void;
    updatePreprocessor(event: ITableDataChangeEvent): void;
    updateMappings(data: Array<{
        sourceId: string;
        targetId: string;
    }>): void;
    validateMappings(errors: any): void;
    preparePostprecessor(): void;
    updatePostprocessor(event: ITableDataChangeEvent): void;
    resetPostprocessor(): void;
    preparePublication(): void;
    protected mapObject(a: IRowDataType): {
        id: any;
    };
    updateImportStat(evt: {
        success: number;
        failure: number;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportDataWizardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportDataWizardComponent, "polp-import-data-wizard", never, { "file": "file"; "targetColumns": "targetColumns"; "uploadAsync": "uploadAsync"; }, {}, never, never>;
}
export {};
