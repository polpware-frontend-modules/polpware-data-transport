import { OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { IRowDataType, NgxDatatablePoweredBase } from '@polpware/ngx-reactive-table';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as i0 from "@angular/core";
export declare class DataPreviewComponent extends NgxDatatablePoweredBase<IRowDataType> implements OnInit, OnChanges {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DataPreviewComponent, "polp-data-preview", never, { "initData": "initData"; "columnNames": "columnNames"; }, {}, never, never>;
}
