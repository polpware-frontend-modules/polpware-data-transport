import { OnInit } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export interface IModalInput {
    multiple?: boolean;
    accept?: string;
    maxFileSizeInBytes?: number;
}
export declare class DropFileModalComponent extends ObservableModalAbstractComponent<IModalInput, File[]> implements OnInit {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    faSave: import("@fortawesome/fontawesome-common-types").IconDefinition;
    items: File[];
    valid: boolean;
    title: string;
    multiple: boolean;
    accept: string;
    maxFileSizeInBytes: number;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    ngOnInit(): void;
    onSelect(event: {
        addedFiles: File[];
    }): void;
    onRemove(event: File): void;
    confirm(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropFileModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropFileModalComponent, "polp-drop-file-modal", never, { "multiple": "multiple"; "accept": "accept"; "maxFileSizeInBytes": "maxFileSizeInBytes"; }, {}, never, never>;
}
