import * as i0 from '@angular/core';
import { OnInit, OnChanges, TemplateRef, SimpleChanges, OnDestroy, EventEmitter } from '@angular/core';
import { NgxDatatablePoweredBase, IRowDataType, NgxDatatableLocalData, ITableDataChangeEvent } from '@polpware/ngx-reactive-table';
import * as i20 from '@swimlane/ngx-datatable';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as _fortawesome_fontawesome_common_types from '@fortawesome/fontawesome-common-types';
import * as i17 from '@polpware/bs-components';
import { SearchBoxWidgetComponent, ObservableModalAbstractComponent } from '@polpware/bs-components';
import { NgxNotyImpl } from '@polpware/ngx-noty';
import * as i22 from 'ngx-log-monitor';
import { LogMessage } from 'ngx-log-monitor';
import { ReplaySubject } from 'rxjs';
import * as i12 from '@angular/forms';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray } from '@angular/forms';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { LoggerProviderImpl } from '@polpware/ngx-logger';
import * as i13 from 'ngx-bootstrap/modal';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as i16 from 'ngx-file-drop';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import * as read_excel_file from 'read-excel-file';
import { Row } from 'read-excel-file';
import * as i11 from '@angular/common';
import * as i14 from 'ngx-bootstrap/popover';
import * as i15 from 'ngx-bootstrap/collapse';
import * as i18 from '@polpware/modal-directives';
import * as i19 from '@fortawesome/angular-fontawesome';
import * as i21 from '@polpware/ngx-pipes';

declare class DataPreviewComponent extends NgxDatatablePoweredBase<IRowDataType> implements OnInit, OnChanges {
    initData: IRowDataType[];
    columnNames: {
        [key: string]: string;
    };
    datatable: DatatableComponent;
    titleCellTmpl: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    buildColumns(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataPreviewComponent, "polp-data-preview", never, { "initData": { "alias": "initData"; "required": false; }; "columnNames": { "alias": "columnNames"; "required": false; }; }, {}, never, never, false, never>;
}

declare class DataProcessorComponent extends NgxDatatableLocalData<IRowDataType> implements OnInit, OnChanges, OnDestroy {
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
    faEdit: _fortawesome_fontawesome_common_types.IconDefinition;
    faTrash: _fortawesome_fontawesome_common_types.IconDefinition;
    faCheck: _fortawesome_fontawesome_common_types.IconDefinition;
    faTimes: _fortawesome_fontawesome_common_types.IconDefinition;
    faPlus: _fortawesome_fontawesome_common_types.IconDefinition;
    faUndo: _fortawesome_fontawesome_common_types.IconDefinition;
    faExclamationTriangle: _fortawesome_fontawesome_common_types.IconDefinition;
    faSearch: _fortawesome_fontawesome_common_types.IconDefinition;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DataProcessorComponent, "polp-data-processor", never, { "initData": { "alias": "initData"; "required": false; }; "columnNames": { "alias": "columnNames"; "required": false; }; }, { "dataChange": "dataChange"; "onReset": "onReset"; }, never, never, false, never>;
}

interface IPubRowType extends IRowDataType {
    _state: 'waiting' | 'working' | 'success' | 'failure';
}
declare class DataPublicationComponent extends NgxDatatableLocalData<IPubRowType> implements OnInit, OnDestroy {
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
    faCheck: _fortawesome_fontawesome_common_types.IconDefinition;
    faTimes: _fortawesome_fontawesome_common_types.IconDefinition;
    faHourglass: _fortawesome_fontawesome_common_types.IconDefinition;
    faArrowCircleUp: _fortawesome_fontawesome_common_types.IconDefinition;
    faArrowUp: _fortawesome_fontawesome_common_types.IconDefinition;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DataPublicationComponent, "polp-data-publication", never, { "initData": { "alias": "initData"; "required": false; }; "columnNames": { "alias": "columnNames"; "required": false; }; "uploadAsync": { "alias": "uploadAsync"; "required": false; }; }, { "onImport": "onImport"; "afterImport": "afterImport"; }, never, never, false, never>;
}

declare class DataStagingComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataStagingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataStagingComponent, "polp-data-staging", never, {}, {}, never, never, false, never>;
}

declare class DefineColumnMappingComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy {
    private readonly _builder;
    sourceColumns: Array<{
        label: string;
        id: string;
    }>;
    targetColumns: Array<{
        label: string;
        id: string;
        required: boolean;
    }>;
    initValue: Array<{
        sourceId: string;
        targetId: string;
    }>;
    form: UntypedFormGroup;
    private _subr;
    private readonly _logger;
    constructor(_builder: UntypedFormBuilder, loggerProvider: LoggerProviderImpl);
    get mappings(): UntypedFormArray;
    ngOnInit(): void;
    ngOnDestroy(): void;
    sourceLabel(i: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefineColumnMappingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefineColumnMappingComponent, "polp-define-column-mapping", never, { "sourceColumns": { "alias": "sourceColumns"; "required": false; }; "targetColumns": { "alias": "targetColumns"; "required": false; }; "initValue": { "alias": "initValue"; "required": false; }; }, {}, never, never, false, never>;
}

interface IModalInput {
    multiple?: boolean;
    accept?: string;
    maxFileSizeInBytes?: number;
}
declare class DropFileModalComponent extends ObservableModalAbstractComponent<IModalInput, File[]> implements OnInit {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    faSave: _fortawesome_fontawesome_common_types.IconDefinition;
    items: File[];
    valid: boolean;
    title: string;
    multiple: boolean;
    accept: string;
    maxFileSizeInBytes: number;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    ngOnInit(): void;
    onSelect(files: NgxFileDropEntry[]): void;
    onRemove(event: File): void;
    confirm(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropFileModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropFileModalComponent, "polp-drop-file-modal", never, { "multiple": { "alias": "multiple"; "required": false; }; "accept": { "alias": "accept"; "required": false; }; "maxFileSizeInBytes": { "alias": "maxFileSizeInBytes"; "required": false; }; }, {}, never, never, false, never>;
}

type ExcelOutputRowType = {
    [key: string]: any;
};
type ExcelOutputSheetRows = Array<ExcelOutputRowType>;
interface IExcelOutputColumnSchema<T> {
    column: string;
    type?: T;
    format?: string;
    width?: number;
    value: (a: ExcelOutputRowType) => T;
}
type ExcelOutputSheetSchema = Array<IExcelOutputColumnSchema<any>>;
interface IDownloadOutput<T> {
    totalCount: number;
    items: Array<T>;
}
interface IDownloadInput {
    pageSize: number;
    pageIndex: number;
}
type DownloadFuncType = (a: IDownloadInput) => Promise<IDownloadOutput<any>>;

interface IWizardState {
    preview: {
        cols: {
            [key: string]: string;
        };
        rows: Array<any>;
        totalCount: number;
    };
}
declare class ExportDataWizardComponent extends WizardAbstractComponent implements OnInit {
    faChevronRight: _fortawesome_fontawesome_common_types.IconDefinition;
    faArrowLeft: _fortawesome_fontawesome_common_types.IconDefinition;
    faArrowRight: _fortawesome_fontawesome_common_types.IconDefinition;
    faSpinner: _fortawesome_fontawesome_common_types.IconDefinition;
    faCheck: _fortawesome_fontawesome_common_types.IconDefinition;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ExportDataWizardComponent, "polp-export-data-wizard", never, { "columns": { "alias": "columns"; "required": false; }; "downloadAsync": { "alias": "downloadAsync"; "required": false; }; }, {}, never, never, false, never>;
}

interface IExportWizardModalInput {
    columns: Array<{
        name: string;
        inputType: 'text' | 'tel' | 'email' | 'date' | 'number' | 'checkbox' | 'file';
        prop: string;
    }>;
    downloadAsync?: DownloadFuncType;
}
declare class ExportWizardModalComponent implements OnInit {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ExportWizardModalComponent, "polp-export-wizard-modal", never, { "columns": { "alias": "columns"; "required": false; }; "downloadAsync": { "alias": "downloadAsync"; "required": false; }; }, {}, never, never, false, never>;
}

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
declare class ImportDataWizardComponent extends WizardAbstractComponent implements OnInit {
    private readonly _noty;
    faChevronRight: _fortawesome_fontawesome_common_types.IconDefinition;
    faArrowLeft: _fortawesome_fontawesome_common_types.IconDefinition;
    faArrowRight: _fortawesome_fontawesome_common_types.IconDefinition;
    faSpinner: _fortawesome_fontawesome_common_types.IconDefinition;
    faCheck: _fortawesome_fontawesome_common_types.IconDefinition;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportDataWizardComponent, "polp-import-data-wizard", never, { "file": { "alias": "file"; "required": false; }; "targetColumns": { "alias": "targetColumns"; "required": false; }; "uploadAsync": { "alias": "uploadAsync"; "required": false; }; }, {}, never, never, false, never>;
}

interface IImportWizardModalInput {
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
declare class ImportWizardModalComponent implements OnInit {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportWizardModalComponent, "polp-import-wizard-modal", never, { "file": { "alias": "file"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "uploadAsync": { "alias": "uploadAsync"; "required": false; }; "successCallback": { "alias": "successCallback"; "required": false; }; }, {}, never, never, false, never>;
}

declare function readExcelAsync(file: File): Promise<read_excel_file.Row[]>;
declare function writeExcelAsync(data: Array<ExcelOutputRowType>, options: {
    schema: ExcelOutputSheetSchema;
    fileName: string;
}): Promise<void>;

declare class ModalUtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showFileDropDialogAsync(input: IModalInput): Promise<File[]>;
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

declare class PolpDataTransportModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PolpDataTransportModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PolpDataTransportModule, [typeof DropFileModalComponent, typeof ImportDataWizardComponent, typeof ImportWizardModalComponent, typeof DefineColumnMappingComponent, typeof DataStagingComponent, typeof DataPublicationComponent, typeof DataProcessorComponent, typeof ExportDataWizardComponent, typeof ExportWizardModalComponent, typeof DataPreviewComponent], [typeof i11.CommonModule, typeof i12.FormsModule, typeof i12.ReactiveFormsModule, typeof i13.ModalModule, typeof i14.PopoverModule, typeof i15.CollapseModule, typeof i16.NgxFileDropModule, typeof i17.PolpBsComponentsModule, typeof i18.PolpDraggableModule, typeof i19.FontAwesomeModule, typeof i20.NgxDatatableModule, typeof i21.PolpwareNgxPipesModule, typeof i22.LogMonitorModule], [typeof DropFileModalComponent, typeof ImportDataWizardComponent, typeof ImportWizardModalComponent, typeof DefineColumnMappingComponent, typeof DataStagingComponent, typeof DataPublicationComponent, typeof DataProcessorComponent, typeof ExportDataWizardComponent, typeof ExportWizardModalComponent, typeof DataPreviewComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PolpDataTransportModule>;
}

export { DataPreviewComponent, DataProcessorComponent, DataPublicationComponent, DataStagingComponent, DefineColumnMappingComponent, DropFileModalComponent, ExportDataWizardComponent, ExportWizardModalComponent, ImportDataWizardComponent, ImportWizardModalComponent, ModalUtilsService, PolpDataTransportModule, readExcelAsync, writeExcelAsync };
export type { DownloadFuncType, ExcelOutputRowType, ExcelOutputSheetRows, ExcelOutputSheetSchema, IDownloadInput, IDownloadOutput, IExcelOutputColumnSchema, IExportWizardModalInput, IImportWizardModalInput, IModalInput };
