import { EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { SearchBoxWidgetComponent } from '@polpware/bs-components';
import { NgxNotyImpl } from '@polpware/ngx-noty';
import { IRowDataType, ITableDataChangeEvent, NgxDatatableLocalData } from '@polpware/ngx-reactive-table';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { LogMessage } from 'ngx-log-monitor';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
interface IPubRowType extends IRowDataType {
    _state: 'waiting' | 'working' | 'success' | 'failure';
}
export declare class DataPublicationComponent extends NgxDatatableLocalData<IPubRowType> implements OnInit, OnDestroy {
    readonly noty: NgxNotyImpl;
    initData: IRowDataType[];
    columnNames: {
        [key: string]: string;
    };
    uploadAsync: (data: Array<IRowDataType>) => Promise<{
        failures: Array<IRowDataType>;
        errors: Array<string>;
    }>;
    onImport: EventEmitter<void>;
    afterImport: EventEmitter<{
        success: number;
        failure: number;
    }>;
    faCheck: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faTimes: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faHourglass: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faArrowCircleUp: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faArrowUp: import("@fortawesome/fontawesome-common-types").IconDefinition;
    originalRows: IPubRowType[];
    showLogs: boolean;
    logStream: ReplaySubject<LogMessage>;
    searchBox: SearchBoxWidgetComponent;
    datatable: DatatableComponent;
    stateHeaderTmpl: TemplateRef<any>;
    stateCellTmpl: TemplateRef<any>;
    titleCellTmpl: TemplateRef<any>;
    inputCellTmpl: TemplateRef<any>;
    private _importStat;
    constructor(noty: NgxNotyImpl);
    get anyKeyword(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    kickOffSearch(): void;
    buildColumns(): void;
    publish(event: ITableDataChangeEvent): void;
    uploadSelectedAsync(): Promise<void>;
    uploadAllAsync(): Promise<void>;
    invokeUploadAsync(data: Array<IPubRowType>): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataPublicationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataPublicationComponent, "polp-data-publication", never, { "initData": "initData"; "columnNames": "columnNames"; "uploadAsync": "uploadAsync"; }, { "onImport": "onImport"; "afterImport": "afterImport"; }, never, never>;
}
export {};
