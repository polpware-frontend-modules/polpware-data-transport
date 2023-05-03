import { OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { LoggerProviderImpl } from '@polpware/ngx-logger';
import * as i0 from "@angular/core";
export declare class DefineColumnMappingComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy {
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
    form: FormGroup;
    private _subr;
    private readonly _logger;
    constructor(_builder: FormBuilder, loggerProvider: LoggerProviderImpl);
    get mappings(): FormArray;
    ngOnInit(): void;
    ngOnDestroy(): void;
    sourceLabel(i: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefineColumnMappingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefineColumnMappingComponent, "polp-define-column-mapping", never, { "sourceColumns": "sourceColumns"; "targetColumns": "targetColumns"; "initValue": "initValue"; }, {}, never, never>;
}
