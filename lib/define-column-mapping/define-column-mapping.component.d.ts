import { OnDestroy, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
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
