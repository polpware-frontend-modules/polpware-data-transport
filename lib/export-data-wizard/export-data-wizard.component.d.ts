import { OnInit } from '@angular/core';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import { LogMessage } from 'ngx-log-monitor';
import { ReplaySubject } from 'rxjs';
import { DownloadFuncType } from '../interfaces/excel-io.interface';
import * as i0 from "@angular/core";
interface IWizardState {
    preview: {
        cols: {
            [key: string]: string;
        };
        rows: Array<any>;
        totalCount: number;
    };
}
export declare class ExportDataWizardComponent extends WizardAbstractComponent implements OnInit {
    faChevronRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faArrowLeft: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faArrowRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCheck: import("@fortawesome/fontawesome-common-types").IconDefinition;
    columns: Array<{
        name: string;
        inputType: 'text' | 'tel' | 'email' | 'date' | 'number' | 'checkbox' | 'file';
        prop: string;
    }>;
    downloadAsync: DownloadFuncType;
    state: IWizardState;
    logStream: ReplaySubject<LogMessage>;
    confirmed: boolean;
    constructor();
    ngOnInit(): void;
    buildNavigatorCfg(): void;
    get disablePrevStep(): boolean;
    loadPreviewAsync(): Promise<void>;
    confirmExport(): void;
    exportDataAsync(): Promise<void>;
    invokeDownloadAsync(): Promise<any[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExportDataWizardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExportDataWizardComponent, "polp-export-data-wizard", never, { "columns": "columns"; "downloadAsync": "downloadAsync"; }, {}, never, never>;
}
export {};
