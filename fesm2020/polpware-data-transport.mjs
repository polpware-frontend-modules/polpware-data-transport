import * as i0 from '@angular/core';
import { Component, Input, ViewChild, EventEmitter, Output, Injectable, NgModule } from '@angular/core';
import { NgxDatatablePoweredBase, getInputType, NgxDatatableLocalData, supportOperationsDecorator, sliceArray } from '@polpware/ngx-reactive-table';
import * as i5 from '@swimlane/ngx-datatable';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { __decorate } from 'tslib';
import { faEdit, faTrash, faCheck, faTimes, faPlus, faUndo, faExclamationTriangle, faSearch, faHourglass, faArrowCircleUp, faArrowUp, faSave, faChevronRight, faArrowLeft, faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ReplaySubject, lastValueFrom } from 'rxjs';
import * as i1 from '@polpware/ngx-noty';
import * as i2 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i3 from '@polpware/bs-components';
import { ObservableModalAbstractComponent, PromptModalComponent, PolpBsComponentsModule } from '@polpware/bs-components';
import * as i4 from 'ngx-log-monitor';
import { LogMonitorModule } from 'ngx-log-monitor';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i7 from 'ngx-bootstrap/popover';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i1$1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2$1 from '@polpware/ngx-logger';
import * as i4$1 from '@polpware/ngx-pipes';
import { PolpwareNgxPipesModule } from '@polpware/ngx-pipes';
import * as i1$2 from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as i2$2 from 'ngx-dropzone';
import { NgxDropzoneModule } from 'ngx-dropzone';
import * as i3$1 from '@polpware/modal-directives';
import { PolpDraggableModule } from '@polpware/modal-directives';
import { safeParseBool, guid } from '@polpware/fe-utilities';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import readXlsxFile from 'read-excel-file';
import writeXlsxFile from 'write-excel-file';
import { CollapseModule } from 'ngx-bootstrap/collapse';

class DataPreviewComponent extends NgxDatatablePoweredBase {
    constructor() {
        super();
        this.initData = [];
        this.columnNames = {};
    }
    ngOnInit() {
        this.settings = Object.assign({}, this.settings, { pageSize: 10, editable: true });
        this.pageSize = this.settings.pageSize;
        this.buildColumns();
    }
    ngOnChanges(changes) {
        if (changes.initData && !changes.initData.firstChange && changes.initData.currentValue) {
            this.buildColumns();
        }
    }
    buildColumns() {
        if (!this.initData || this.initData.length <= 0) {
            return;
        }
        const columns = [];
        const firstRow = this.initData[0];
        for (let prop in this.columnNames) {
            const c = {
                name: this.columnNames[prop],
                prop: prop,
                sortable: true,
                minWidth: 150,
                editable: true,
                inputType: getInputType(firstRow[prop]),
                headerTemplate: this.titleCellTmpl
            };
            columns.push(c);
        }
        this.columns = columns;
        this.rows = this.initData;
    }
}
DataPreviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataPreviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DataPreviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DataPreviewComponent, selector: "polp-data-preview", inputs: { initData: "initData", columnNames: "columnNames" }, viewQueries: [{ propertyName: "datatable", first: true, predicate: ["datatable"], descendants: true, static: true }, { propertyName: "titleCellTmpl", first: true, predicate: ["titleCell "], descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"card\">\n    <div class=\"card-body\">\n        <ngx-datatable class=\"bootstrap\" #datatable\n                       [rows]=\"rows\"\n                       [columns]=\"columns\"\n                       [columnMode]=\"ColumnMode.force\"\n                       headerHeight=\"auto\"\n                       [footerHeight]=\"50\"\n                       rowHeight=\"auto\"\n                       [limit]=\"pageSize\"\n                       [scrollbarH]=\"true\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n    </div>\n</div>\n", styles: [""], components: [{ type: i5.DatatableComponent, selector: "ngx-datatable", inputs: ["targetMarkerTemplate", "rows", "groupRowsBy", "groupedRows", "columns", "selected", "scrollbarV", "scrollbarH", "rowHeight", "columnMode", "headerHeight", "footerHeight", "externalPaging", "externalSorting", "limit", "count", "offset", "loadingIndicator", "selectionType", "reorderable", "swapColumns", "sortType", "sorts", "cssClasses", "messages", "rowClass", "selectCheck", "displayCheck", "groupExpansionDefault", "trackByProp", "selectAllRowsOnPage", "virtualization", "treeFromRelation", "treeToRelation", "summaryRow", "summaryHeight", "summaryPosition", "rowIdentity"], outputs: ["scroll", "activate", "select", "sort", "page", "reorder", "resize", "tableContextmenu", "treeAction"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataPreviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-data-preview', template: "<div class=\"card\">\n    <div class=\"card-body\">\n        <ngx-datatable class=\"bootstrap\" #datatable\n                       [rows]=\"rows\"\n                       [columns]=\"columns\"\n                       [columnMode]=\"ColumnMode.force\"\n                       headerHeight=\"auto\"\n                       [footerHeight]=\"50\"\n                       rowHeight=\"auto\"\n                       [limit]=\"pageSize\"\n                       [scrollbarH]=\"true\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initData: [{
                type: Input
            }], columnNames: [{
                type: Input
            }], datatable: [{
                type: ViewChild,
                args: ['datatable', { static: true }]
            }], titleCellTmpl: [{
                type: ViewChild,
                args: ["titleCell ", { static: true }]
            }] } });

let DataProcessorComponent = class DataProcessorComponent extends NgxDatatableLocalData {
    constructor(noty) {
        super();
        this.noty = noty;
        this.initData = [];
        this.columnNames = {};
        this.dataChange = new EventEmitter();
        this.onReset = new EventEmitter();
        // Support operations over data
        this.faEdit = faEdit;
        this.faTrash = faTrash;
        this.faCheck = faCheck;
        this.faTimes = faTimes;
        this.faPlus = faPlus;
        this.faUndo = faUndo;
        this.faExclamationTriangle = faExclamationTriangle;
        this.faSearch = faSearch;
        this.isConfirmReset = false;
        // Used to keep the original rows 
        this.originalRows = [];
        this.showLogs = false;
        this.logStream = new ReplaySubject();
    }
    get editable() {
        return this.settings ? (this.settings.canCreate || this.settings.canDelete || this.settings.canUpdate) : false;
    }
    ngOnInit() {
        this.settings = Object.assign({}, this.settings, { pageSize: 10, canCreate: true, canUpdate: true, canDelete: true });
        this.pageSize = this.settings.pageSize;
        this.buildColumns();
    }
    ngOnChanges(changes) {
        if (changes.initData && !changes.initData.firstChange && changes.initData.currentValue) {
            this.buildColumns();
        }
    }
    ngOnDestroy() {
    }
    // Starts a new round of search
    //
    // This operation causes new network request.
    kickOffSearch() {
        const k = this.searchBox.effectiveKeyword;
        if (k) {
            this.rows = this.originalRows.filter(elem => {
                for (let prop in elem) {
                    if (prop != 'id' && elem.hasOwnProperty(prop)) {
                        const v = elem[prop];
                        if (v) {
                            const w = v.toString().toLowerCase();
                            if (w.includes(k)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            });
        }
        else {
            this.rows = this.originalRows;
        }
    }
    buildColumns() {
        if (!this.initData || this.initData.length <= 0) {
            return;
        }
        const columns = [];
        columns.push({
            width: 50,
            sortable: false,
            canAutoResize: false,
            draggable: false,
            resizeable: false,
            headerCheckboxable: true,
            checkboxable: true
        });
        columns.push({
            name: 'Actions',
            width: 120,
            sortable: false,
            canAutoResize: false,
            draggable: false,
            resizeable: false,
            headerTemplate: this.editActionHeaderTmpl,
            cellTemplate: this.editActionCellTmpl
        });
        const firstRow = this.initData[0];
        for (let prop in this.columnNames) {
            const c = {
                name: this.columnNames[prop],
                prop: prop,
                sortable: true,
                minWidth: 150,
                editable: true,
                inputType: getInputType(firstRow[prop]),
                cellTemplate: this.inputCellTmpl
            };
            columns.push(c);
        }
        this.columns = columns;
        this.originalRows = [...this.initData];
        this.rows = [...this.initData];
        this.searchBox && this.searchBox.searchControl && this.searchBox.resetKeyword(false);
    }
    reset() {
        this.onReset.emit();
        this.logStream.next({
            type: 'INFO',
            message: `reset record(s)`
        });
        this.showLogs = true;
    }
    // Override
    publish(event) {
        if (event.op == 'create') {
            // Add 
            const data = event.data;
            this.originalRows.push(data);
            this.logStream.next({
                type: 'INFO',
                message: `Created a new record`
            });
            this.showLogs = true;
        }
        else if (event.op == 'update') {
            // Add or edit
            // We do not need to preserve value semantics;
            // therefore, we can do in-place editing.
            const data = event.data;
            const index = this.originalRows.findIndex(a => a.id == data.id);
            if (index != -1) {
                this.originalRows.splice(index, 1, data);
                this.logStream.next({
                    type: 'INFO',
                    message: `Updated a record`
                });
                this.showLogs = true;
            }
        }
        else if (event.op == 'delete') {
            // Remove
            const data = event.data;
            this.originalRows = this.originalRows.filter(a => {
                return !data.some(b => b.id == a.id);
            });
            this.logStream.next({
                type: 'INFO',
                message: `removed ${data.length} record(s)`
            });
            this.showLogs = true;
        }
        // Notify client 
        this.dataChange.emit(Object.assign({}, event, { rows: this.originalRows }));
    }
};
DataProcessorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataProcessorComponent, deps: [{ token: i1.NgxNotyImpl }], target: i0.ɵɵFactoryTarget.Component });
DataProcessorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DataProcessorComponent, selector: "polp-data-processor", inputs: { initData: "initData", columnNames: "columnNames" }, outputs: { dataChange: "dataChange", onReset: "onReset" }, viewQueries: [{ propertyName: "searchBox", first: true, predicate: ["searchBox"], descendants: true, static: true }, { propertyName: "datatable", first: true, predicate: ["datatable"], descendants: true, static: true }, { propertyName: "editActionHeaderTmpl", first: true, predicate: ["editActionHeader"], descendants: true, static: true }, { propertyName: "editActionCellTmpl", first: true, predicate: ["editActionCell "], descendants: true, static: true }, { propertyName: "inputCellTmpl", first: true, predicate: ["inputCell "], descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\" *ngIf=\"editable\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Update\">\n                <button class=\"btn btn-success\" role=\"button\" *ngIf=\"settings.canCreate\"\n                        (click)=\"startAdd()\" [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>\n                    Add\n                </button>\n                <button class=\"btn btn-danger\" role=\"button\" *ngIf=\"settings.canDelete\"\n                        (click)=\"rmAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faTrash\" class=\"me-1\"></fa-icon>\n                    Delete\n                </button>\n            </div>\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Reset\">\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset = true;\"\n                        [popover]=\"confirmResetTmpl\" triggers=\"\" [isOpen]=\"isConfirmReset\"\n                        container=\"body\" popoverTitle=\"Warning\"\n                        [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faUndo\" class=\"me-1\"></fa-icon>\n                    Reset\n                </button>\n            </div>\n            <ng-template #confirmResetTmpl>\n                <div class=\"alert alert-warning\">\n                    This operation will discard all changes and cannot be undo. Are you sure to continue?\n                </div>\n                <div>\n                    <button class=\"btn btn-info me-2\" role=\"button\" (click)=\"isConfirmReset = false;\">\n                        <fa-icon [icon]=\"faTimes\" class=\"me-1\"></fa-icon>\n                        Cancel\n                    </button>\n                    <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset=false;reset();\">\n                        <fa-icon [icon]=\"faExclamationTriangle\" class=\"me-1\"></fa-icon>\n                        Confirm\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Operation logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"Logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n\n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"false\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #editActionHeader>\n            <span>\n                Actions\n            </span>\n        </ng-template>\n\n        <ng-template #editActionCell let-rowIndex=\"rowIndex\">\n            <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"startEdit(rowIndex)\"\n                    *ngIf=\"!backup[rowIndex]; else otherActionTmpl\">\n                <fa-icon [icon]=\"faEdit\"></fa-icon>\n            </button>\n            <ng-template #otherActionTmpl>\n                <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"confirmEditAsync(rowIndex)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                </button>\n                <button class=\"btn btn-outline-warning icon-only\" role=\"button\" (click)=\"cancelEdit(rowIndex)\">\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\n                </button>\n            </ng-template>\n        </ng-template>\n    </div>\n</div>\n", styles: [""], components: [{ type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }, { type: i3.ExpandableCardComponent, selector: "polp-bs-expandable-card", inputs: ["isCollapsed", "titleClass"] }, { type: i4.LogMonitorComponent, selector: "log-monitor", inputs: ["delay", "history", "theme", "icons", "customClass", "animated", "title", "logStream"] }, { type: i3.SearchBoxWidgetComponent, selector: "polp-bs-search-box-widget", inputs: ["initKeyword", "formClass", "inputClass", "prependText", "debounceTime", "minLength"], outputs: ["onSearch"] }, { type: i5.DatatableComponent, selector: "ngx-datatable", inputs: ["targetMarkerTemplate", "rows", "groupRowsBy", "groupedRows", "columns", "selected", "scrollbarV", "scrollbarH", "rowHeight", "columnMode", "headerHeight", "footerHeight", "externalPaging", "externalSorting", "limit", "count", "offset", "loadingIndicator", "selectionType", "reorderable", "swapColumns", "sortType", "sorts", "cssClasses", "messages", "rowClass", "selectCheck", "displayCheck", "groupExpansionDefault", "trackByProp", "selectAllRowsOnPage", "virtualization", "treeFromRelation", "treeToRelation", "summaryRow", "summaryHeight", "summaryPosition", "rowIdentity"], outputs: ["scroll", "activate", "select", "sort", "page", "reorder", "resize", "tableContextmenu", "treeAction"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.PopoverDirective, selector: "[popover]", inputs: ["adaptivePosition", "popover", "popoverContext", "popoverTitle", "placement", "outsideClick", "triggers", "container", "containerClass", "isOpen", "delay"], outputs: ["onShown", "onHidden"], exportAs: ["bs-popover"] }] });
DataProcessorComponent = __decorate([
    supportOperationsDecorator
], DataProcessorComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataProcessorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-data-processor', template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\" *ngIf=\"editable\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Update\">\n                <button class=\"btn btn-success\" role=\"button\" *ngIf=\"settings.canCreate\"\n                        (click)=\"startAdd()\" [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>\n                    Add\n                </button>\n                <button class=\"btn btn-danger\" role=\"button\" *ngIf=\"settings.canDelete\"\n                        (click)=\"rmAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faTrash\" class=\"me-1\"></fa-icon>\n                    Delete\n                </button>\n            </div>\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Reset\">\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset = true;\"\n                        [popover]=\"confirmResetTmpl\" triggers=\"\" [isOpen]=\"isConfirmReset\"\n                        container=\"body\" popoverTitle=\"Warning\"\n                        [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faUndo\" class=\"me-1\"></fa-icon>\n                    Reset\n                </button>\n            </div>\n            <ng-template #confirmResetTmpl>\n                <div class=\"alert alert-warning\">\n                    This operation will discard all changes and cannot be undo. Are you sure to continue?\n                </div>\n                <div>\n                    <button class=\"btn btn-info me-2\" role=\"button\" (click)=\"isConfirmReset = false;\">\n                        <fa-icon [icon]=\"faTimes\" class=\"me-1\"></fa-icon>\n                        Cancel\n                    </button>\n                    <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset=false;reset();\">\n                        <fa-icon [icon]=\"faExclamationTriangle\" class=\"me-1\"></fa-icon>\n                        Confirm\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Operation logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"Logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n\n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"false\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #editActionHeader>\n            <span>\n                Actions\n            </span>\n        </ng-template>\n\n        <ng-template #editActionCell let-rowIndex=\"rowIndex\">\n            <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"startEdit(rowIndex)\"\n                    *ngIf=\"!backup[rowIndex]; else otherActionTmpl\">\n                <fa-icon [icon]=\"faEdit\"></fa-icon>\n            </button>\n            <ng-template #otherActionTmpl>\n                <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"confirmEditAsync(rowIndex)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                </button>\n                <button class=\"btn btn-outline-warning icon-only\" role=\"button\" (click)=\"cancelEdit(rowIndex)\">\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\n                </button>\n            </ng-template>\n        </ng-template>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.NgxNotyImpl }]; }, propDecorators: { initData: [{
                type: Input
            }], columnNames: [{
                type: Input
            }], dataChange: [{
                type: Output
            }], onReset: [{
                type: Output
            }], searchBox: [{
                type: ViewChild,
                args: ['searchBox', { static: true }]
            }], datatable: [{
                type: ViewChild,
                args: ['datatable', { static: true }]
            }], editActionHeaderTmpl: [{
                type: ViewChild,
                args: ["editActionHeader", { static: true }]
            }], editActionCellTmpl: [{
                type: ViewChild,
                args: ["editActionCell ", { static: true }]
            }], inputCellTmpl: [{
                type: ViewChild,
                args: ["inputCell ", { static: true }]
            }] } });

let DataPublicationComponent = class DataPublicationComponent extends NgxDatatableLocalData {
    constructor(noty) {
        super();
        this.noty = noty;
        this.initData = [];
        this.columnNames = {};
        this.uploadAsync = (data) => {
            return new Promise(function (resolve, reject) {
                resolve({
                    failures: [],
                    errors: []
                });
            });
        };
        this.onImport = new EventEmitter();
        this.afterImport = new EventEmitter();
        this.faCheck = faCheck;
        this.faTimes = faTimes;
        this.faHourglass = faHourglass;
        this.faArrowCircleUp = faArrowCircleUp;
        this.faArrowUp = faArrowUp;
        // Used to keep the original rows 
        this.originalRows = [];
        this.showLogs = false;
        this.logStream = new ReplaySubject();
        this._importStat = { success: 0, failure: 0 };
    }
    get anyKeyword() {
        return this.searchBox ? this.searchBox.effectiveKeyword : '';
    }
    ngOnInit() {
        this.settings = Object.assign({}, this.settings, { pageSize: 10, canCreate: true, canDelete: true, canUpdate: true });
        this.pageSize = this.settings.pageSize;
        this.buildColumns();
    }
    ngOnDestroy() {
    }
    // Starts a new round of search
    //
    // This operation causes new network request.
    kickOffSearch() {
        const k = this.searchBox.effectiveKeyword;
        if (k) {
            this.rows = this.originalRows.filter(elem => {
                for (let prop in elem) {
                    if (prop != 'id' && elem.hasOwnProperty(prop)) {
                        const v = elem[prop];
                        if (v) {
                            const w = v.toString().toLowerCase();
                            if (w.includes(k)) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            });
        }
        else {
            this.rows = this.originalRows;
        }
    }
    buildColumns() {
        if (!this.initData || this.initData.length <= 0) {
            return;
        }
        const columns = [];
        columns.push({
            width: 50,
            sortable: false,
            canAutoResize: false,
            draggable: false,
            resizeable: false,
            headerCheckboxable: true,
            checkboxable: true
        });
        columns.push({
            name: 'State',
            prop: '_state',
            width: 80,
            sortable: false,
            canAutoResize: false,
            draggable: false,
            resizeable: false,
            headerTemplate: this.stateHeaderTmpl,
            cellTemplate: this.stateCellTmpl
        });
        const firstRow = this.initData[0];
        for (let prop in this.columnNames) {
            const c = {
                name: this.columnNames[prop],
                prop: prop,
                sortable: true,
                minWidth: 150,
                editable: true,
                inputType: getInputType(firstRow[prop]),
                headerTemplate: this.titleCellTmpl,
                cellTemplate: this.inputCellTmpl
            };
            columns.push(c);
        }
        this.columns = columns;
        this.originalRows = this.initData.map(a => {
            return Object.assign({ _state: 'waiting' }, a);
        });
        this.rows = this.originalRows;
        this.searchBox && this.searchBox.searchControl && this.searchBox.resetKeyword(false);
    }
    // Override
    publish(event) {
        if (event.op == 'create') {
            // Add 
            const data = event.data;
            this.originalRows.push(data);
        }
        else if (event.op == 'update') {
            // Add or edit
            // We do not need to preserve value semantics;
            // therefore, we can do in-place editing.
            const data = event.data;
            const index = this.originalRows.findIndex(a => a.id == data.id);
            if (index != -1) {
                this.originalRows.splice(index, 1, data);
            }
        }
        else if (event.op == 'delete') {
            // Remove
            const data = event.data;
            this.originalRows = this.originalRows.filter(a => {
                return !data.some(b => b.id == a.id);
            });
        }
    }
    async uploadSelectedAsync() {
        // Emit a message 
        this.onImport.emit();
        const todo = this.selected.filter(a => a._state != 'success');
        this.logStream.next({
            type: 'INFO',
            message: `Start to import the selected records (${todo.length})`
        });
        const noError = await this.invokeUploadAsync(todo);
        if (noError) {
            this.logStream.next({
                type: 'SUCCESS',
                message: 'Successfully uploaded the selected records'
            });
        }
        this.showLogs = true;
    }
    // This will work for filter set or all.
    async uploadAllAsync() {
        // Emit a message 
        this.onImport.emit();
        // Page by page
        const internalRows = this.datatable._internalRows;
        const totalPages = Math.ceil(internalRows.length / this.pageSize);
        let noError = true;
        // Disable sorting but preserve the current order
        this.datatable.sorts = [];
        this.datatable.rows = internalRows;
        this.logStream.next({
            type: 'INFO',
            message: `Start to import all records`
        });
        for (let pIndex = 0; (noError && pIndex < totalPages); pIndex++) {
            this.logStream.next({
                type: 'INFO',
                message: `Import ${pIndex + 1} page`
            });
            this.datatable._offset = pIndex;
            // One page 
            let todo = sliceArray(internalRows, pIndex * this.pageSize, (pIndex + 1) * this.pageSize);
            todo = todo.filter(a => a._state != 'success');
            noError = await this.invokeUploadAsync(todo);
        }
        if (noError) {
            this.logStream.next({
                type: 'SUCCESS',
                message: 'Successfully uploaded all records'
            });
        }
        this.showLogs = true;
    }
    // We expect that the underlying upload method is working in a transactional way.
    // I.e., either all the data is uploaded or none of them is uploaded.
    async invokeUploadAsync(data) {
        let noError = true;
        try {
            data.forEach(elem => elem._state = 'working');
            // Trigger value semantics
            this.rows = [...this.rows];
            // Update state 
            // Start with the first page and then move on
            const ret = await this.uploadAsync(data);
            // todo: Error handling
            data.forEach(elem => elem._state = 'success');
            ret.failures.forEach(p => {
                const q = data.find(x => x.id == p.id);
                q && (q._state = 'failure');
            });
            // Force to change             
            this.rows = [...this.rows];
            this.logStream.next({
                type: 'SUCCESS',
                message: `Imported ${data.length - ret.failures.length} records`
            });
            if (ret.failures && ret.failures.length) {
                noError = false;
                this.logStream.next({
                    type: 'ERR',
                    message: `Failed to import ${ret.failures.length} records`
                });
            }
            if (ret.errors && ret.errors.length) {
                ret.errors.forEach(e => {
                    this.logStream.next({
                        type: 'ERR',
                        message: `Error: ${e}`
                    });
                });
            }
            this._importStat.success += (data.length - ret.failures.length);
            this._importStat.failure += ret.failures.length;
            this.afterImport.emit(this._importStat);
        }
        catch (e) {
            // In place editing
            data.forEach(elem => elem._state = 'failure');
            // Force to change 
            this.rows = [...this.rows];
            noError = false;
        }
        return noError;
    }
};
DataPublicationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataPublicationComponent, deps: [{ token: i1.NgxNotyImpl }], target: i0.ɵɵFactoryTarget.Component });
DataPublicationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DataPublicationComponent, selector: "polp-data-publication", inputs: { initData: "initData", columnNames: "columnNames", uploadAsync: "uploadAsync" }, outputs: { onImport: "onImport", afterImport: "afterImport" }, viewQueries: [{ propertyName: "searchBox", first: true, predicate: ["searchBox4DataPub"], descendants: true, static: true }, { propertyName: "datatable", first: true, predicate: ["datatable"], descendants: true, static: true }, { propertyName: "stateHeaderTmpl", first: true, predicate: ["stateHeader"], descendants: true, static: true }, { propertyName: "stateCellTmpl", first: true, predicate: ["stateCell "], descendants: true, static: true }, { propertyName: "titleCellTmpl", first: true, predicate: ["titleCell "], descendants: true, static: true }, { propertyName: "inputCellTmpl", first: true, predicate: ["inputCell "], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Upload\">\n                <button class=\"btn btn-success\" role=\"button\" (click)=\"uploadSelectedAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faArrowUp\" class=\"me-1\"></fa-icon>\n                    Upload selected\n                </button>\n                <button class=\"btn btn-info\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload all\n                </button>\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"!anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload filtered\n                </button>\n            </div>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Data import logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox4DataPub\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n                    \n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"true\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #stateHeader let-column=\"column\">\n            <span class=\"fw-bold text-warp\">\n                State\n            </span>\n        </ng-template>\n\n        <ng-template #stateCell let-value=\"value\">\n            <ng-container [ngSwitch]=\"value\">\n                <span class=\"text-info\" *ngSwitchCase=\"'waiting'\">\n                    <fa-icon [icon]=\"faHourglass\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-info\" *ngSwitchCase=\"'working'\">\n                    <fa-icon [icon]=\"faHourglass\" [spin]=\"true\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-success\" *ngSwitchCase=\"'success'\">\n                    <fa-icon [icon]=\"faCheck\" >\n                    </fa-icon>\n                </span>\n                <span class=\"text-danger\" *ngSwitchCase=\"'failure'\">\n                    <fa-icon [icon]=\"faTimes\">\n                    </fa-icon>\n                </span>\n            </ng-container>\n        </ng-template>\n    </div>\n</div>\n\n", styles: [""], components: [{ type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }, { type: i3.ExpandableCardComponent, selector: "polp-bs-expandable-card", inputs: ["isCollapsed", "titleClass"] }, { type: i4.LogMonitorComponent, selector: "log-monitor", inputs: ["delay", "history", "theme", "icons", "customClass", "animated", "title", "logStream"] }, { type: i3.SearchBoxWidgetComponent, selector: "polp-bs-search-box-widget", inputs: ["initKeyword", "formClass", "inputClass", "prependText", "debounceTime", "minLength"], outputs: ["onSearch"] }, { type: i5.DatatableComponent, selector: "ngx-datatable", inputs: ["targetMarkerTemplate", "rows", "groupRowsBy", "groupedRows", "columns", "selected", "scrollbarV", "scrollbarH", "rowHeight", "columnMode", "headerHeight", "footerHeight", "externalPaging", "externalSorting", "limit", "count", "offset", "loadingIndicator", "selectionType", "reorderable", "swapColumns", "sortType", "sorts", "cssClasses", "messages", "rowClass", "selectCheck", "displayCheck", "groupExpansionDefault", "trackByProp", "selectAllRowsOnPage", "virtualization", "treeFromRelation", "treeToRelation", "summaryRow", "summaryHeight", "summaryPosition", "rowIdentity"], outputs: ["scroll", "activate", "select", "sort", "page", "reorder", "resize", "tableContextmenu", "treeAction"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i6.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }] });
DataPublicationComponent = __decorate([
    supportOperationsDecorator
], DataPublicationComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataPublicationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-data-publication', template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Upload\">\n                <button class=\"btn btn-success\" role=\"button\" (click)=\"uploadSelectedAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faArrowUp\" class=\"me-1\"></fa-icon>\n                    Upload selected\n                </button>\n                <button class=\"btn btn-info\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload all\n                </button>\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"!anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload filtered\n                </button>\n            </div>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Data import logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox4DataPub\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n                    \n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"true\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #stateHeader let-column=\"column\">\n            <span class=\"fw-bold text-warp\">\n                State\n            </span>\n        </ng-template>\n\n        <ng-template #stateCell let-value=\"value\">\n            <ng-container [ngSwitch]=\"value\">\n                <span class=\"text-info\" *ngSwitchCase=\"'waiting'\">\n                    <fa-icon [icon]=\"faHourglass\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-info\" *ngSwitchCase=\"'working'\">\n                    <fa-icon [icon]=\"faHourglass\" [spin]=\"true\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-success\" *ngSwitchCase=\"'success'\">\n                    <fa-icon [icon]=\"faCheck\" >\n                    </fa-icon>\n                </span>\n                <span class=\"text-danger\" *ngSwitchCase=\"'failure'\">\n                    <fa-icon [icon]=\"faTimes\">\n                    </fa-icon>\n                </span>\n            </ng-container>\n        </ng-template>\n    </div>\n</div>\n\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.NgxNotyImpl }]; }, propDecorators: { initData: [{
                type: Input
            }], columnNames: [{
                type: Input
            }], uploadAsync: [{
                type: Input
            }], onImport: [{
                type: Output
            }], afterImport: [{
                type: Output
            }], searchBox: [{
                type: ViewChild,
                args: ['searchBox4DataPub', { static: true }]
            }], datatable: [{
                type: ViewChild,
                args: ['datatable', { static: true }]
            }], stateHeaderTmpl: [{
                type: ViewChild,
                args: ["stateHeader", { static: true }]
            }], stateCellTmpl: [{
                type: ViewChild,
                args: ["stateCell ", { static: true }]
            }], titleCellTmpl: [{
                type: ViewChild,
                args: ["titleCell ", { static: true }]
            }], inputCellTmpl: [{
                type: ViewChild,
                args: ["inputCell ", { static: true }]
            }] } });

class DataStagingComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataStagingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataStagingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DataStagingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DataStagingComponent, selector: "polp-data-staging", ngImport: i0, template: "<p>data-staging works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataStagingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-data-staging', template: "<p>data-staging works!</p>\n", styles: [""] }]
        }], ctorParameters: function () { return []; } });

function findFirstDuplicate(array) {
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < array.length; ++i) {
        const value = array[i];
        if (value in valuesSoFar) {
            return value;
        }
        valuesSoFar[value] = true;
    }
    return '';
}
function makeFormValidator(targetColumns) {
    return (control) => {
        // Make sure that
        const mappings = control.get('mappings');
        const subset = mappings.controls.filter((x) => {
            const checked = x.get('targetId');
            return !!checked.value;
        });
        const targetIds = subset.map((y) => {
            return y.get('targetId').value;
        });
        // Check redundancy
        const anyDuplicate = findFirstDuplicate(targetIds);
        if (anyDuplicate) {
            const desc = targetColumns.find(a => a.id == anyDuplicate);
            return {
                duplicate: `${desc?.label}(${desc?.id})`
            };
        }
        // Check if all required are included.
        const anyMissing = targetColumns
            .filter(a => a.required)
            .find(b => !targetIds.some(c => c == b.id));
        if (anyMissing) {
            return {
                missing: `${anyMissing.label}(${anyMissing.id})`
            };
        }
        return null;
    };
}
class DefineColumnMappingComponent extends DefaultFormBaseComponent {
    constructor(_builder, loggerProvider) {
        super();
        this._builder = _builder;
        this.sourceColumns = [];
        this.targetColumns = [];
        this.initValue = [];
        this._logger = loggerProvider.logger('polp_data_transport_define_column_mapping');
    }
    get mappings() {
        return this.form.get('mappings');
    }
    ngOnInit() {
        // Build form
        this.form = this._builder.group({
            mappings: this._builder.array([])
        }, { validators: [makeFormValidator(this.targetColumns)] });
        this._subr = this.form.valueChanges.subscribe(a => {
            const b = a.mappings;
            const c = b.filter(b => b.targetId);
            this.onValueChanged.emit(c);
            this.onValidation.emit(this.form.errors);
        });
        this.sourceColumns.forEach(source => {
            // Build mapping entries
            const record = {
                checked: false,
                sourceId: source.id,
                targetId: ''
            };
            const anyMap = this.initValue.find(x => x.sourceId == source.id);
            if (anyMap) {
                record.targetId = anyMap.targetId;
            }
            this.mappings.push(this._builder.group(record));
        });
    }
    ngOnDestroy() {
        this._subr && this._subr.unsubscribe();
    }
    sourceLabel(i) {
        const id = this.mappings.controls[i].value.sourceId;
        return this.sourceColumns.find(a => a.id == id).label;
    }
}
DefineColumnMappingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DefineColumnMappingComponent, deps: [{ token: i1$1.FormBuilder }, { token: i2$1.LoggerProviderImpl }], target: i0.ɵɵFactoryTarget.Component });
DefineColumnMappingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DefineColumnMappingComponent, selector: "polp-define-column-mapping", inputs: { sourceColumns: "sourceColumns", targetColumns: "targetColumns", initValue: "initValue" }, usesInheritance: true, ngImport: i0, template: "<form  [formGroup]=\"form\">\n    <!-- Header -->\n    <div class=\"form-row mb-4\">\n        <div class=\"col-1\">\n            #\n        </div>\n        <div class=\"col-4\">\n            <b>Source</b>\n        </div>\n        <div class=\"col-3\">\n            <b>Example</b>\n        </div>\n        <div class=\"col-4\">\n            <b>Target</b>\n        </div>\n    </div>\n    \n    <ng-container formArrayName=\"mappings\">\n        <div class=\"form-row mb-4\" *ngFor=\"let f of mappings.controls; let i=index\">\n            <ng-container [formGroupName]=\"i\">\n                <div class=\"col-1\">\n                    {{i + 1}}\n                </div>\n                <div class=\"col-4\">\n                    <div [innerHtml]=\"sourceLabel(i) | safeDom:'html'\"></div>\n                </div>\n                <div class=\"col-3\">\n                    <!-- Something -->\n                </div>\n                <div class=\"col-4\">\n                    <select class=\"form-control form-control-sm\" formControlName=\"targetId\">\n                        <option value=\"\">...</option>                        \n                        <option *ngFor=\"let o of targetColumns\" [value]=\"o.id\">\n                            <span [innerHtml]=\"o.label | safeDom:'html'\">\n                            </span>\n                        </option>\n                    </select>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>                \n    \n</form>\n", styles: [""], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i1$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }], pipes: { "safeDom": i4$1.SafeDomPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DefineColumnMappingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-define-column-mapping', template: "<form  [formGroup]=\"form\">\n    <!-- Header -->\n    <div class=\"form-row mb-4\">\n        <div class=\"col-1\">\n            #\n        </div>\n        <div class=\"col-4\">\n            <b>Source</b>\n        </div>\n        <div class=\"col-3\">\n            <b>Example</b>\n        </div>\n        <div class=\"col-4\">\n            <b>Target</b>\n        </div>\n    </div>\n    \n    <ng-container formArrayName=\"mappings\">\n        <div class=\"form-row mb-4\" *ngFor=\"let f of mappings.controls; let i=index\">\n            <ng-container [formGroupName]=\"i\">\n                <div class=\"col-1\">\n                    {{i + 1}}\n                </div>\n                <div class=\"col-4\">\n                    <div [innerHtml]=\"sourceLabel(i) | safeDom:'html'\"></div>\n                </div>\n                <div class=\"col-3\">\n                    <!-- Something -->\n                </div>\n                <div class=\"col-4\">\n                    <select class=\"form-control form-control-sm\" formControlName=\"targetId\">\n                        <option value=\"\">...</option>                        \n                        <option *ngFor=\"let o of targetColumns\" [value]=\"o.id\">\n                            <span [innerHtml]=\"o.label | safeDom:'html'\">\n                            </span>\n                        </option>\n                    </select>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>                \n    \n</form>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i2$1.LoggerProviderImpl }]; }, propDecorators: { sourceColumns: [{
                type: Input
            }], targetColumns: [{
                type: Input
            }], initValue: [{
                type: Input
            }] } });

class DropFileModalComponent extends ObservableModalAbstractComponent {
    constructor(bsModalRef, bsModalService) {
        super();
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.faSave = faSave;
        this.items = [];
        this.valid = false;
        this.title = 'Select a file';
        this.multiple = false;
        this.accept = '*';
        this.maxFileSizeInBytes = undefined;
    }
    ngOnInit() {
    }
    onSelect(event) {
        this.items.push(...event.addedFiles);
        this.valid = true;
    }
    onRemove(event) {
        this.items.splice(this.items.indexOf(event), 1);
        this.valid = false;
    }
    confirm() {
        this.closeModal(this.items);
    }
    close() {
        this.closeModal(null);
    }
}
DropFileModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DropFileModalComponent, deps: [{ token: i1$2.BsModalRef }, { token: i1$2.BsModalService }], target: i0.ɵɵFactoryTarget.Component });
DropFileModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DropFileModalComponent, selector: "polp-drop-file-modal", inputs: { multiple: "multiple", accept: "accept", maxFileSizeInBytes: "maxFileSizeInBytes" }, usesInheritance: true, ngImport: i0, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ngx-dropzone [multiple]=\"multiple\"\n                  [accept]=\"accept\"\n                  [maxFileSize]=\"maxFileSizeInBytes\"\n                  (change)=\"onSelect($event)\">        \n        <ngx-dropzone-label>Drop a file</ngx-dropzone-label>\n        <ngx-dropzone-preview *ngFor=\"let f of items\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t    <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n        </ngx-dropzone-preview>\n    </ngx-dropzone>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cancel</button>\n    <button class=\"btn btn-primary\" (click)=\"confirm()\" [disabled]=\"!valid\">\n        <fa-icon [icon]=\"faSave\" class=\"me-1\"></fa-icon> <span>Confirm</span>\n    </button>\n</div>\n", styles: [""], components: [{ type: i2$2.NgxDropzoneComponent, selector: "ngx-dropzone, [ngx-dropzone]", inputs: ["accept", "disabled", "multiple", "maxFileSize", "expandable", "disableClick", "processDirectoryDrop", "id", "aria-label", "aria-labelledby", "aria-describedby"], outputs: ["change"] }, { type: i2$2.NgxDropzonePreviewComponent, selector: "ngx-dropzone-preview", inputs: ["file", "removable"], outputs: ["removed"] }, { type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i3$1.polpModalDraggableDirective, selector: "[polpModalDraggable]" }, { type: i2$2.NgxDropzoneLabelDirective, selector: "ngx-dropzone-label" }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DropFileModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-drop-file-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ngx-dropzone [multiple]=\"multiple\"\n                  [accept]=\"accept\"\n                  [maxFileSize]=\"maxFileSizeInBytes\"\n                  (change)=\"onSelect($event)\">        \n        <ngx-dropzone-label>Drop a file</ngx-dropzone-label>\n        <ngx-dropzone-preview *ngFor=\"let f of items\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t    <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n        </ngx-dropzone-preview>\n    </ngx-dropzone>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cancel</button>\n    <button class=\"btn btn-primary\" (click)=\"confirm()\" [disabled]=\"!valid\">\n        <fa-icon [icon]=\"faSave\" class=\"me-1\"></fa-icon> <span>Confirm</span>\n    </button>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$2.BsModalRef }, { type: i1$2.BsModalService }]; }, propDecorators: { multiple: [{
                type: Input
            }], accept: [{
                type: Input
            }], maxFileSizeInBytes: [{
                type: Input
            }] } });

function readExcelAsync(file) {
    return readXlsxFile(file);
}
function writeExcelAsync(data, options) {
    return writeXlsxFile(data, {
        schema: options.schema,
        fileName: options.fileName
    });
}

function makeColumnSchema(data) {
    if (data.inputType == 'date') {
        // todo: Maybe simplify as a string
        return {
            column: data.name,
            type: Date,
            format: 'dd/mm/yyyy hh:mm AM/PM',
            value: (a) => new Date(a[data.prop])
        };
    }
    else if (data.inputType == 'number') {
        return {
            column: data.name,
            type: Number,
            value: (a) => Number(a[data.prop])
        };
    }
    else if (data.inputType == 'checkbox') {
        return {
            column: data.name,
            type: Boolean,
            value: (a) => safeParseBool(a[data.prop])
        };
    }
    else {
        return {
            column: data.name,
            type: String,
            value: (a) => a[data.prop]
        };
    }
}
// We on purpose extends from the abstract wizard,
// to allow for extensibility in the future.
class ExportDataWizardComponent extends WizardAbstractComponent {
    constructor() {
        super();
        this.faChevronRight = faChevronRight;
        this.faArrowLeft = faArrowLeft;
        this.faArrowRight = faArrowRight;
        this.faSpinner = faSpinner;
        this.faCheck = faCheck;
        this.columns = [];
        this.downloadAsync = (_) => {
            return new Promise(function (resolve, reject) {
                resolve({
                    totalCount: 0,
                    items: []
                });
            });
        };
        // First step: preview
        // Optional second step: configuration 
        // Progress bar
        this.logStream = new ReplaySubject();
        this.confirmed = false;
        this.state = {
            preview: {
                cols: {},
                rows: [],
                totalCount: 0
            }
        };
        this.maxDim = 2;
        this.buildNavigatorCfg();
    }
    ngOnInit() {
        this.loadPreviewAsync();
    }
    // Override
    buildNavigatorCfg() {
        super.buildNavigatorCfg();
        // Specific logic in this class
        // Configure [1] ; options for preview
        this.navigatorCfg.setElement({
            hasPrevStep: false,
            hasNextStep: true,
            hasNextGuard: false,
            visible: true
        }, 1);
        // Configure [1, 1] ; options for progress
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: false,
            hasNextGuard: true,
            visible: true
        }, 1, 1);
        this.stepIndex = 0;
        this.dimIndice = [0, 0];
        this.forwardDimIndice = [1, 0];
        this.navigator = this.navigatorCfg.getElement(0);
        this.forwardNavigator = this.navigatorCfg.getElement(...this.forwardDimIndice);
    }
    // Not override 
    get disablePrevStep() {
        return this.confirmed;
    }
    // Preview step
    async loadPreviewAsync() {
        const ret = await this.downloadAsync({
            pageIndex: 0,
            pageSize: 1
        });
        // No need to continue in this case.
        if (ret.totalCount <= 0) {
            return;
        }
        // Otherwise continue
        const firstRow = ret.items[0];
        // todo: Make it a IRowDatatype 
        this.state.preview.rows = [firstRow];
        this.state.preview.cols = this.columns.reduce((sum, a) => {
            sum[a.prop] = a.name;
            return sum;
        }, {});
        this.state.preview.totalCount = ret.totalCount;
    }
    confirmExport() {
        this.confirmed = true;
        this.exportDataAsync();
    }
    async exportDataAsync() {
        const data = await this.invokeDownloadAsync();
        if (data.length) {
            this.logStream.next({
                type: 'INFO',
                message: 'Start to write an excelsheet file'
            });
            const schema = this.columns.map(a => makeColumnSchema(a));
            await writeExcelAsync(data, {
                schema: schema,
                fileName: 'test'
            });
            this.logStream.next({
                type: 'SUCCESS',
                message: `Excelsheet created`
            });
        }
    }
    // We expect that the underlying upload method is working in a transactional way.
    // I.e., either all the data is uploaded or none of them is uploaded.
    async invokeDownloadAsync() {
        let data = [];
        try {
            let pageSize = 100;
            let startPageIndex = 0;
            let hasMoreData = true;
            while (hasMoreData && (startPageIndex * pageSize < this.state.preview.totalCount)) {
                this.logStream.next({
                    type: 'INFO',
                    message: `Start to retrieve the data from [${startPageIndex * pageSize}]`
                });
                const ret = await this.downloadAsync({
                    pageIndex: startPageIndex,
                    pageSize: pageSize
                });
                hasMoreData = ret.items.length > 0;
                // data
                data.push(...ret.items);
                startPageIndex++;
                this.logStream.next({
                    type: 'SUCCESS',
                    message: `Data retrieved (${data.length / this.state.preview.totalCount * 100}% completed)`
                });
            }
            this.logStream.next({
                type: 'SUCCESS',
                message: `Data retrieval succeeded`
            });
        }
        catch (e) {
            this.logStream.next({
                type: 'ERR',
                message: `Error happened (${e.message})`
            });
            this.logStream.next({
                type: 'ERR',
                message: `Data retrieval failed`
            });
        }
        return data;
    }
}
ExportDataWizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ExportDataWizardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExportDataWizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: ExportDataWizardComponent, selector: "polp-export-data-wizard", inputs: { columns: "columns", downloadAsync: "downloadAsync" }, usesInheritance: true, ngImport: i0, template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the following snippet of the data to be\n        exported, and then continue to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-preview [initData]=\"state.preview.rows\"\n                           [columnNames]=\"state.preview.cols\">\n        </polp-data-preview>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please confirm ...\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"!confirmed; else exportLogs\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"confirmExport()\">\n                Start to export\n            </button>\n        </div>\n        <ng-template #exportLogs>\n            <log-monitor\n                [logStream]=\"logStream\"\n                theme=\"dark\"\n                title=\"Data export logs\"\n                [animated]=\"true\"\n                [icons]=\"true\">\n            </log-monitor>            \n        </ng-template>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n\n", styles: [""], components: [{ type: DataPreviewComponent, selector: "polp-data-preview", inputs: ["initData", "columnNames"] }, { type: i4.LogMonitorComponent, selector: "log-monitor", inputs: ["delay", "history", "theme", "icons", "customClass", "animated", "title", "logStream"] }, { type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ExportDataWizardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-export-data-wizard', template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the following snippet of the data to be\n        exported, and then continue to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-preview [initData]=\"state.preview.rows\"\n                           [columnNames]=\"state.preview.cols\">\n        </polp-data-preview>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please confirm ...\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"!confirmed; else exportLogs\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"confirmExport()\">\n                Start to export\n            </button>\n        </div>\n        <ng-template #exportLogs>\n            <log-monitor\n                [logStream]=\"logStream\"\n                theme=\"dark\"\n                title=\"Data export logs\"\n                [animated]=\"true\"\n                [icons]=\"true\">\n            </log-monitor>            \n        </ng-template>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { columns: [{
                type: Input
            }], downloadAsync: [{
                type: Input
            }] } });

class ExportWizardModalComponent {
    constructor(bsModalRef, bsModalService) {
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.columns = [];
        this.downloadAsync = (_) => {
            return new Promise(function (resolve, reject) {
                resolve({
                    totalCount: 0,
                    items: []
                });
            });
        };
        this.title = 'Export wizard';
    }
    ngOnInit() {
    }
    close() {
        this.bsModalRef.hide();
    }
}
ExportWizardModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ExportWizardModalComponent, deps: [{ token: i1$2.BsModalRef }, { token: i1$2.BsModalService }], target: i0.ɵɵFactoryTarget.Component });
ExportWizardModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: ExportWizardModalComponent, selector: "polp-export-wizard-modal", inputs: { columns: "columns", downloadAsync: "downloadAsync" }, ngImport: i0, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-export-data-wizard [columns]=\"columns\"\n                             [downloadAsync]=\"downloadAsync\">\n    </polp-export-data-wizard>\n</div>\n\n", styles: [""], components: [{ type: ExportDataWizardComponent, selector: "polp-export-data-wizard", inputs: ["columns", "downloadAsync"] }], directives: [{ type: i3$1.polpModalDraggableDirective, selector: "[polpModalDraggable]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ExportWizardModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-export-wizard-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-export-data-wizard [columns]=\"columns\"\n                             [downloadAsync]=\"downloadAsync\">\n    </polp-export-data-wizard>\n</div>\n\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$2.BsModalRef }, { type: i1$2.BsModalService }]; }, propDecorators: { columns: [{
                type: Input
            }], downloadAsync: [{
                type: Input
            }] } });

class ImportDataWizardComponent extends WizardAbstractComponent {
    constructor(_noty) {
        super();
        this._noty = _noty;
        this.faChevronRight = faChevronRight;
        this.faArrowLeft = faArrowLeft;
        this.faArrowRight = faArrowRight;
        this.faSpinner = faSpinner;
        this.faCheck = faCheck;
        this.targetColumns = [];
        this.isMappingsValid = false;
        this.hasImportStarted = false;
        this.importStat = { success: 0, failure: 0 };
        this.state = {
            originalData: [],
            preprocessor: {
                cols: {},
                inputRows: [],
                outputRows: [],
                updated: false
            },
            mappings: [],
            postprocessor: {
                inputRows: [],
                outputRows: [],
                cols: {},
                updated: false
            },
            publication: {
                rows: [],
                cols: {}
            }
        };
        this.maxDim = 4;
        this.buildNavigatorCfg();
    }
    get sourceColumns() {
        const ret = [];
        const obj = this.state.preprocessor.cols;
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                ret.push({
                    id: prop,
                    label: obj[prop]
                });
            }
        }
        return ret;
    }
    ngOnInit() {
        this.loadDataAsync();
    }
    // Override
    buildNavigatorCfg() {
        super.buildNavigatorCfg();
        // Specific logic in this class
        // Configure [1] ; options for preprocessor
        this.navigatorCfg.setElement({
            hasPrevStep: false,
            hasNextStep: true,
            hasNextGuard: false,
            visible: true
        }, 1);
        // Configure [1, 1] ; options for column mapping
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: true,
            hasNextGuard: true,
            visible: true,
            nextStep: () => {
                this.preparePostprecessor();
                this.nextStepInternal();
            },
            prevStep: () => {
                this.state.preprocessor.inputRows = this.state.preprocessor.outputRows;
                this.prevStepInternal();
            }
        }, 1, 1);
        // Configure [1, 1, 1] ; options for postprocessor
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: true,
            hasNextGuard: true,
            nextStep: () => {
                this.preparePublication();
                this.nextStepInternal();
            },
            visible: true
        }, 1, 1, 1);
        // Configure [1, 1, 1, 1] ; options for publication
        this.navigatorCfg.setElement({
            hasPrevStep: true,
            hasNextStep: false,
            hasNextGuard: false,
            visible: true,
            prevStep: () => {
                // todo: Disable prev button
                this.prevStepInternal();
            }
        }, 1, 1, 1, 1);
        this.stepIndex = 0;
        this.dimIndice = [0, 0, 0, 0];
        this.forwardDimIndice = [1, 0, 0, 0];
        this.navigator = this.navigatorCfg.getElement(0);
        this.forwardNavigator = this.navigatorCfg.getElement(...this.forwardDimIndice);
    }
    // Override 
    get disableNextStep() {
        if (this.forwardNavigator.hasNextGuard) {
            if (this.stepIndex == 1 && !this.isMappingsValid) {
                // Disable if mappings are not valid
                return true;
            }
        }
        return false;
    }
    // Not override 
    get disablePrevStep() {
        return this.hasImportStarted;
    }
    startImport() {
        this.hasImportStarted = true;
    }
    async loadDataAsync() {
        // Assume that there are data.
        const rows = await readExcelAsync(this.file);
        if (rows.length <= 0) {
            return;
        }
        this.state.originalData = rows;
        this.preparePreprocessor();
    }
    preparePreprocessor() {
        const rows = this.state.originalData;
        // Assume that the first row is the header
        const columns = rows[0].reduce((sum, b, idx) => {
            const k = 'column' + (idx + 1);
            sum[k] = b;
            return sum;
        }, {});
        this.state.preprocessor.cols = columns;
        const restData = sliceArray(rows, 1, rows.length);
        // Next prepare data
        const elems = restData.map(a => {
            return a.reduce((sum, b, idx) => {
                const k = 'column' + (idx + 1);
                sum[k] = b;
                return sum;
            }, { id: guid() });
        });
        this.state.preprocessor.inputRows = elems;
        this.state.preprocessor.outputRows = elems;
        this.state.preprocessor.updated = true;
    }
    resetPreprocessor() {
        this.preparePreprocessor();
        this._noty.success('Data has been reset successfully!', 'Operation result');
    }
    updatePreprocessor(event) {
        this.state.preprocessor.outputRows = event.rows;
        this.state.preprocessor.updated = true;
    }
    updateMappings(data) {
        this.state.mappings = [...data];
    }
    validateMappings(errors) {
        if (errors) {
            this.isMappingsValid = false;
        }
        else {
            this.isMappingsValid = true;
        }
    }
    preparePostprecessor() {
        // Prepare columns
        const columns = {};
        for (let i = 0; i < this.state.mappings.length; i++) {
            const elem = this.state.mappings[i];
            const source = this.state.preprocessor.cols[elem.sourceId];
            const target = this.targetColumns.find(a => a.id == elem.targetId);
            columns[elem.sourceId] = `${source} => ${target.label}`;
        }
        this.state.postprocessor.cols = columns;
        // If the predecessor has been changed.
        if (this.state.preprocessor.updated) {
            this.state.preprocessor.updated = false;
            this.state.postprocessor.inputRows = this.state.preprocessor.outputRows;
            this.state.postprocessor.outputRows = this.state.postprocessor.inputRows;
            this.state.postprocessor.updated = true;
        }
        else {
            this.state.postprocessor.inputRows = this.state.postprocessor.outputRows;
        }
    }
    updatePostprocessor(event) {
        this.state.postprocessor.outputRows = event.rows;
        this.state.postprocessor.updated = true;
    }
    resetPostprocessor() {
        this.state.preprocessor.updated = false;
        this.state.postprocessor.inputRows = this.state.preprocessor.outputRows;
        this.state.postprocessor.outputRows = this.state.postprocessor.inputRows;
        this.state.postprocessor.updated = true;
        this._noty.success('Data has been reset successfully!', 'Operation result');
    }
    preparePublication() {
        // Make cols
        const cols = {};
        this.state.mappings.forEach(elem => {
            cols[elem.targetId] = this.targetColumns.find(a => a.id == elem.targetId).label;
        });
        this.state.publication.cols = cols;
        this.state.publication.rows =
            this.state.postprocessor.outputRows.map(elem => {
                return this.mapObject(elem);
            });
    }
    mapObject(a) {
        const b = { id: a.id };
        this.state.mappings.forEach(elem => {
            b[elem.targetId] = a[elem.sourceId];
        });
        return b;
    }
    updateImportStat(evt) {
        this.importStat.success = evt.success;
        this.importStat.failure = evt.failure;
    }
}
ImportDataWizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportDataWizardComponent, deps: [{ token: i1.NgxNotyImpl }], target: i0.ɵɵFactoryTarget.Component });
ImportDataWizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: ImportDataWizardComponent, selector: "polp-import-data-wizard", inputs: { file: "file", targetColumns: "targetColumns", uploadAsync: "uploadAsync" }, usesInheritance: true, ngImport: i0, template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.preprocessor.inputRows\"\n                             [columnNames]=\"state.preprocessor.cols\"\n                             (onReset)=\"resetPreprocessor()\"\n                             (dataChange)=\"updatePreprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please define the mappings from source columns to target\n        columns, and then move to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-define-column-mapping [sourceColumns]=\"sourceColumns\"\n                                    [targetColumns]=\"targetColumns\"\n                                    (onValueChanged)=\"updateMappings($event)\"\n                                    (onValidation)=\"validateMappings($event)\"\n                                    [initValue]=\"state.mappings\">\n        </polp-define-column-mapping>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.postprocessor.inputRows\"\n                             [columnNames]=\"state.postprocessor.cols\"\n                             (onReset)=\"resetPostprocessor()\"\n                             (dataChange)=\"updatePostprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, and upload some or all of them.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-publication [columnNames]=\"state.publication.cols\"\n                               [uploadAsync]=\"uploadAsync\"\n                               (onImport)=\"startImport()\"\n                               (afterImport)=\"updateImportStat($event)\"\n                               [initData]=\"state.publication.rows\">\n        </polp-data-publication>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n", styles: [""], components: [{ type: DataProcessorComponent, selector: "polp-data-processor", inputs: ["initData", "columnNames"], outputs: ["dataChange", "onReset"] }, { type: DefineColumnMappingComponent, selector: "polp-define-column-mapping", inputs: ["sourceColumns", "targetColumns", "initValue"] }, { type: DataPublicationComponent, selector: "polp-data-publication", inputs: ["initData", "columnNames", "uploadAsync"], outputs: ["onImport", "afterImport"] }, { type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportDataWizardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-import-data-wizard', template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.preprocessor.inputRows\"\n                             [columnNames]=\"state.preprocessor.cols\"\n                             (onReset)=\"resetPreprocessor()\"\n                             (dataChange)=\"updatePreprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please define the mappings from source columns to target\n        columns, and then move to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-define-column-mapping [sourceColumns]=\"sourceColumns\"\n                                    [targetColumns]=\"targetColumns\"\n                                    (onValueChanged)=\"updateMappings($event)\"\n                                    (onValidation)=\"validateMappings($event)\"\n                                    [initValue]=\"state.mappings\">\n        </polp-define-column-mapping>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.postprocessor.inputRows\"\n                             [columnNames]=\"state.postprocessor.cols\"\n                             (onReset)=\"resetPostprocessor()\"\n                             (dataChange)=\"updatePostprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, and upload some or all of them.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-publication [columnNames]=\"state.publication.cols\"\n                               [uploadAsync]=\"uploadAsync\"\n                               (onImport)=\"startImport()\"\n                               (afterImport)=\"updateImportStat($event)\"\n                               [initData]=\"state.publication.rows\">\n        </polp-data-publication>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.NgxNotyImpl }]; }, propDecorators: { file: [{
                type: Input
            }], targetColumns: [{
                type: Input
            }], uploadAsync: [{
                type: Input
            }] } });

class ImportWizardModalComponent {
    constructor(bsModalRef, bsModalService) {
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.columns = [];
        this.uploadAsync = (data) => {
            return new Promise(function (resolve, reject) {
                resolve({
                    failures: [],
                    errors: []
                });
            });
        };
        this.successCallback = null;
        this.title = 'Import wizard';
    }
    ngOnInit() {
    }
    close() {
        if (this.importDataWizard.importStat.success) {
            this.successCallback && this.successCallback();
        }
        this.bsModalRef.hide();
    }
}
ImportWizardModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportWizardModalComponent, deps: [{ token: i1$2.BsModalRef }, { token: i1$2.BsModalService }], target: i0.ɵɵFactoryTarget.Component });
ImportWizardModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: ImportWizardModalComponent, selector: "polp-import-wizard-modal", inputs: { file: "file", columns: "columns", uploadAsync: "uploadAsync", successCallback: "successCallback" }, viewQueries: [{ propertyName: "importDataWizard", first: true, predicate: ["importDataWizard"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-import-data-wizard #importDataWizard\n                             [file]=\"file\"\n                             [targetColumns]=\"columns\"\n                             [uploadAsync]=\"uploadAsync\">\n    </polp-import-data-wizard>\n</div>\n", styles: [""], components: [{ type: ImportDataWizardComponent, selector: "polp-import-data-wizard", inputs: ["file", "targetColumns", "uploadAsync"] }], directives: [{ type: i3$1.polpModalDraggableDirective, selector: "[polpModalDraggable]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ImportWizardModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-import-wizard-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-import-data-wizard #importDataWizard\n                             [file]=\"file\"\n                             [targetColumns]=\"columns\"\n                             [uploadAsync]=\"uploadAsync\">\n    </polp-import-data-wizard>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1$2.BsModalRef }, { type: i1$2.BsModalService }]; }, propDecorators: { file: [{
                type: Input
            }], columns: [{
                type: Input
            }], uploadAsync: [{
                type: Input
            }], successCallback: [{
                type: Input
            }], importDataWizard: [{
                type: ViewChild,
                args: ['importDataWizard', { static: true }]
            }] } });

class ModalUtilsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showFileDropDialogAsync(input) {
        const modalRef = this._modalService.show(DropFileModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return lastValueFrom(modalRef.content.result);
    }
    showImportDialog(input) {
        this._modalService.show(ImportWizardModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-xl'
        });
    }
    showExportDialog(input) {
        this._modalService.show(ExportWizardModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-xl'
        });
    }
    async selectExportTargetAsync(options) {
        let inputFields = [
            {
                name: 'targetId',
                label: 'Select one',
                value: '',
                category: 'radio',
                options: options,
                validators: {}
            }
        ];
        const alertInfo = `<div class="alert alert-info">
This form contains table questions. 
The response to each table will be exported into a separate spreadsheet. 
Please select one table question or none.
</div>`;
        const initState = {
            title: 'What do you want to export?',
            enableEnter: false,
            hideCloseBtn: true,
            innerBody: alertInfo,
            fields: inputFields,
            hideCancelBtn: false,
            hideConfirmBtn: false
        };
        const modalRef = this._modalService.show(PromptModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            keyboard: false,
            initialState: initState,
            class: 'modal-dialog-centered'
        });
        return lastValueFrom(modalRef.content.result);
    }
}
ModalUtilsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ModalUtilsService, deps: [{ token: i1$2.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable });
ModalUtilsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ModalUtilsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ModalUtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.BsModalService }]; } });

class PolpDataTransportModule {
}
PolpDataTransportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PolpDataTransportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PolpDataTransportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PolpDataTransportModule, declarations: [DropFileModalComponent,
        ImportDataWizardComponent,
        ImportWizardModalComponent,
        DefineColumnMappingComponent,
        DataStagingComponent,
        DataPublicationComponent,
        DataProcessorComponent,
        ExportDataWizardComponent,
        ExportWizardModalComponent,
        DataPreviewComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        PopoverModule,
        CollapseModule,
        NgxDropzoneModule,
        PolpBsComponentsModule,
        PolpDraggableModule,
        FontAwesomeModule,
        NgxDatatableModule,
        PolpwareNgxPipesModule,
        LogMonitorModule], exports: [DropFileModalComponent,
        ImportDataWizardComponent,
        ImportWizardModalComponent,
        DefineColumnMappingComponent,
        DataStagingComponent,
        DataPublicationComponent,
        DataProcessorComponent,
        ExportDataWizardComponent,
        ExportWizardModalComponent,
        DataPreviewComponent] });
PolpDataTransportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PolpDataTransportModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ModalModule,
            PopoverModule,
            CollapseModule,
            NgxDropzoneModule,
            PolpBsComponentsModule,
            PolpDraggableModule,
            FontAwesomeModule,
            NgxDatatableModule,
            PolpwareNgxPipesModule,
            LogMonitorModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: PolpDataTransportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DropFileModalComponent,
                        ImportDataWizardComponent,
                        ImportWizardModalComponent,
                        DefineColumnMappingComponent,
                        DataStagingComponent,
                        DataPublicationComponent,
                        DataProcessorComponent,
                        ExportDataWizardComponent,
                        ExportWizardModalComponent,
                        DataPreviewComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        ModalModule,
                        PopoverModule,
                        CollapseModule,
                        NgxDropzoneModule,
                        PolpBsComponentsModule,
                        PolpDraggableModule,
                        FontAwesomeModule,
                        NgxDatatableModule,
                        PolpwareNgxPipesModule,
                        LogMonitorModule
                    ],
                    exports: [
                        DropFileModalComponent,
                        ImportDataWizardComponent,
                        ImportWizardModalComponent,
                        DefineColumnMappingComponent,
                        DataStagingComponent,
                        DataPublicationComponent,
                        DataProcessorComponent,
                        ExportDataWizardComponent,
                        ExportWizardModalComponent,
                        DataPreviewComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of data-transport
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DataPreviewComponent, DataProcessorComponent, DataPublicationComponent, DataStagingComponent, DefineColumnMappingComponent, DropFileModalComponent, ExportDataWizardComponent, ExportWizardModalComponent, ImportDataWizardComponent, ImportWizardModalComponent, ModalUtilsService, PolpDataTransportModule, readExcelAsync, writeExcelAsync };
//# sourceMappingURL=polpware-data-transport.mjs.map
