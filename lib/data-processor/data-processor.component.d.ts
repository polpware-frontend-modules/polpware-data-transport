import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { SearchBoxWidgetComponent } from '@polpware/bs-components';
import { NgxNotyImpl } from '@polpware/ngx-noty';
import { IRowDataType, ITableDataChangeEvent, NgxDatatableLocalData } from '@polpware/ngx-reactive-table';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { LogMessage } from 'ngx-log-monitor';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DataProcessorComponent extends NgxDatatableLocalData<IRowDataType> implements OnInit, OnChanges, OnDestroy {
    readonly noty: NgxNotyImpl;
    initData: IRowDataType[];
    columnNames: {
        [key: string]: string;
    };
    dataChange: EventEmitter<ITableDataChangeEvent>;
    onReset: EventEmitter<void>;
    searchBox: SearchBoxWidgetComponent;
    datatable: DatatableComponent;
    editActionHeaderTmpl: TemplateRef<any>;
    editActionCellTmpl: TemplateRef<any>;
    inputCellTmpl: TemplateRef<any>;
    faEdit: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faTrash: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCheck: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faTimes: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faPlus: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faUndo: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faExclamationTriangle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSearch: import("@fortawesome/fontawesome-common-types").IconDefinition;
    isConfirmReset: boolean;
    originalRows: IRowDataType[];
    showLogs: boolean;
    logStream: ReplaySubject<LogMessage>;
    constructor(noty: NgxNotyImpl);
    get editable(): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    kickOffSearch(): void;
    buildColumns(): void;
    reset(): void;
    publish(event: ITableDataChangeEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataProcessorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataProcessorComponent, "polp-data-processor", never, { "initData": "initData"; "columnNames": "columnNames"; }, { "dataChange": "dataChange"; "onReset": "onReset"; }, never, never>;
}
