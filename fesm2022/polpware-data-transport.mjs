import * as i0 from '@angular/core';
import { Component, ViewChild, Input, EventEmitter, Output, Injectable, NgModule } from '@angular/core';
import { NgxDatatablePoweredBase, getInputType, NgxDatatableLocalData, supportOperationsDecorator, sliceArray } from '@polpware/ngx-reactive-table';
import * as i1 from '@swimlane/ngx-datatable';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { __decorate } from 'tslib';
import { faEdit, faTrash, faCheck, faTimes, faPlus, faUndo, faExclamationTriangle, faSearch, faHourglass, faArrowCircleUp, faArrowUp, faSave, faChevronRight, faArrowLeft, faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ReplaySubject, lastValueFrom } from 'rxjs';
import * as i1$1 from '@polpware/ngx-noty';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ngx-bootstrap/popover';
import { PopoverModule } from 'ngx-bootstrap/popover';
import * as i4 from '@polpware/bs-components';
import { ObservableModalAbstractComponent, PromptModalComponent, PolpBsComponentsModule } from '@polpware/bs-components';
import * as i5 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i7 from 'ngx-log-monitor';
import { LogMonitorModule } from 'ngx-log-monitor';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i1$2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2$1 from '@polpware/ngx-logger';
import * as i4$1 from '@polpware/ngx-pipes';
import { PolpwareNgxPipesModule } from '@polpware/ngx-pipes';
import * as i1$3 from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as i3$1 from 'ngx-file-drop';
import { NgxFileDropModule } from 'ngx-file-drop';
import * as i2$2 from '@polpware/modal-directives';
import { PolpDraggableModule } from '@polpware/modal-directives';
import { safeParseBool, guid } from '@polpware/fe-utilities';
import { WizardAbstractComponent } from '@polpware/ngx-wizard';
import readXlsxFile from 'read-excel-file';
import writeXlsxFile from 'write-excel-file';
import { CollapseModule } from 'ngx-bootstrap/collapse';

const _c0$3 = ["datatable"];
const _c1$2 = ["titleCell"];
function DataPreviewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const column_r1 = ctx.column;
    i0.ɵɵproperty("innerHTML", column_r1.name, i0.ɵɵsanitizeHtml);
} }
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
    static { this.ɵfac = function DataPreviewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataPreviewComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataPreviewComponent, selectors: [["polp-data-preview"]], viewQuery: function DataPreviewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$3, 7);
            i0.ɵɵviewQuery(_c1$2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datatable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleCellTmpl = _t.first);
        } }, inputs: { initData: "initData", columnNames: "columnNames" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 6, vars: 6, consts: [["datatable", ""], ["titleHeader", ""], [1, "card"], [1, "card-body"], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH"], [1, "fw-bold", "text-wrap", 3, "innerHTML"]], template: function DataPreviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
            i0.ɵɵelement(2, "ngx-datatable", 4, 0);
            i0.ɵɵtemplate(4, DataPreviewComponent_ng_template_4_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("limit", ctx.pageSize)("scrollbarH", true);
        } }, dependencies: [i1.DatatableComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataPreviewComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-preview', standalone: false, template: "<div class=\"card\">\n    <div class=\"card-body\">\n        <ngx-datatable class=\"bootstrap\" #datatable\n                       [rows]=\"rows\"\n                       [columns]=\"columns\"\n                       [columnMode]=\"ColumnMode.force\"\n                       headerHeight=\"auto\"\n                       [footerHeight]=\"50\"\n                       rowHeight=\"auto\"\n                       [limit]=\"pageSize\"\n                       [scrollbarH]=\"true\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], () => [], { initData: [{
            type: Input
        }], columnNames: [{
            type: Input
        }], datatable: [{
            type: ViewChild,
            args: ['datatable', { static: true }]
        }], titleCellTmpl: [{
            type: ViewChild,
            args: ["titleCell ", { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataPreviewComponent, { className: "DataPreviewComponent", filePath: "lib/data-preview/data-preview.component.ts", lineNumber: 11 }); })();

const _c0$2 = ["searchBox"];
const _c1$1 = ["datatable"];
const _c2$1 = ["editActionHeader"];
const _c3$1 = ["editActionCell"];
const _c4$1 = ["inputCell"];
function DataProcessorComponent_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.startAdd()); });
    i0.ɵɵelement(1, "fa-icon", 23);
    i0.ɵɵtext(2, " Add ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r3.selected.length > 0 || ctx_r3.anyEditing);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r3.faPlus);
} }
function DataProcessorComponent_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.rmAsync()); });
    i0.ɵɵelement(1, "fa-icon", 23);
    i0.ɵɵtext(2, " Delete ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r3.selected.length <= 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r3.faTrash);
} }
function DataProcessorComponent_div_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtext(1, " This operation will discard all changes and cannot be undo. Are you sure to continue? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "button", 27);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_ng_template_8_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.isConfirmReset = false); });
    i0.ɵɵelement(4, "fa-icon", 23);
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 28);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_ng_template_8_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(2); ctx_r3.isConfirmReset = false; return i0.ɵɵresetView(ctx_r3.reset()); });
    i0.ɵɵelement(7, "fa-icon", 23);
    i0.ɵɵtext(8, " Confirm ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("icon", ctx_r3.faTimes);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", ctx_r3.faExclamationTriangle);
} }
function DataProcessorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵtemplate(2, DataProcessorComponent_div_2_button_2_Template, 3, 2, "button", 19)(3, DataProcessorComponent_div_2_button_3_Template, 3, 2, "button", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 21)(5, "button", 22);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.isConfirmReset = true); });
    i0.ɵɵelement(6, "fa-icon", 23);
    i0.ɵɵtext(7, " Reset ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, DataProcessorComponent_div_2_ng_template_8_Template, 9, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const confirmResetTmpl_r7 = i0.ɵɵreference(9);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.settings.canCreate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.settings.canDelete);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("popover", confirmResetTmpl_r7)("isOpen", ctx_r3.isConfirmReset)("disabled", ctx_r3.selected.length > 0 || ctx_r3.anyEditing);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r3.faUndo);
} }
function DataProcessorComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 29);
} if (rf & 2) {
    const column_r8 = ctx.column;
    i0.ɵɵproperty("innerHTML", column_r8.name, i0.ɵɵsanitizeHtml);
} }
function DataProcessorComponent_ng_template_14_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 32);
} if (rf & 2) {
    const value_r9 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("innerHTML", value_r9, i0.ɵɵsanitizeHtml);
} }
function DataProcessorComponent_ng_template_14_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 33);
    i0.ɵɵlistener("blur", function DataProcessorComponent_ng_template_14_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r10 = i0.ɵɵnextContext(); const rowIndex_r12 = ctx_r10.rowIndex; const column_r13 = ctx_r10.column; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateValue($event, column_r13.prop, rowIndex_r12)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const column_r13 = ctx_r10.column;
    const value_r9 = ctx_r10.value;
    i0.ɵɵproperty("type", column_r13.inputType)("value", value_r9);
} }
function DataProcessorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataProcessorComponent_ng_template_14_span_0_Template, 1, 1, "span", 30)(1, DataProcessorComponent_ng_template_14_input_1_Template, 1, 2, "input", 31);
} if (rf & 2) {
    const rowIndex_r12 = ctx.rowIndex;
    const column_r13 = ctx.column;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r3.editing[rowIndex_r12 + "-" + column_r13.prop]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.editing[rowIndex_r12 + "-" + column_r13.prop]);
} }
function DataProcessorComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " Actions ");
    i0.ɵɵelementEnd();
} }
function DataProcessorComponent_ng_template_18_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function DataProcessorComponent_ng_template_18_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const rowIndex_r15 = i0.ɵɵnextContext().rowIndex; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.startEdit(rowIndex_r15)); });
    i0.ɵɵelement(1, "fa-icon", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r3.faEdit);
} }
function DataProcessorComponent_ng_template_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function DataProcessorComponent_ng_template_18_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const rowIndex_r15 = i0.ɵɵnextContext().rowIndex; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.confirmEditAsync(rowIndex_r15)); });
    i0.ɵɵelement(1, "fa-icon", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function DataProcessorComponent_ng_template_18_ng_template_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r16); const rowIndex_r15 = i0.ɵɵnextContext().rowIndex; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.cancelEdit(rowIndex_r15)); });
    i0.ɵɵelement(3, "fa-icon", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r3.faCheck);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r3.faTimes);
} }
function DataProcessorComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataProcessorComponent_ng_template_18_button_0_Template, 2, 1, "button", 34)(1, DataProcessorComponent_ng_template_18_ng_template_1_Template, 4, 2, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const rowIndex_r15 = ctx.rowIndex;
    const otherActionTmpl_r17 = i0.ɵɵreference(2);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r3.backup[rowIndex_r15])("ngIfElse", otherActionTmpl_r17);
} }
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
    static { this.ɵfac = function DataProcessorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataProcessorComponent)(i0.ɵɵdirectiveInject(i1$1.NgxNotyImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataProcessorComponent, selectors: [["polp-data-processor"]], viewQuery: function DataProcessorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$2, 7);
            i0.ɵɵviewQuery(_c1$1, 7);
            i0.ɵɵviewQuery(_c2$1, 7);
            i0.ɵɵviewQuery(_c3$1, 7);
            i0.ɵɵviewQuery(_c4$1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchBox = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datatable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editActionHeaderTmpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editActionCellTmpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputCellTmpl = _t.first);
        } }, inputs: { initData: "initData", columnNames: "columnNames" }, outputs: { dataChange: "dataChange", onReset: "onReset" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 20, vars: 16, consts: [["searchBox", ""], ["datatable", ""], ["titleHeader", ""], ["inputCell", ""], ["editActionHeader", ""], ["editActionCell", ""], ["confirmResetTmpl", ""], ["otherActionTmpl", ""], [1, "card"], [1, "card-body"], ["class", "btn-toolbar mb-4", "role", "toolbar", "aria-label", "Operations", 4, "ngIf"], [3, "isCollapsed"], ["title", ""], ["body", "", 1, "container"], ["theme", "dark", "title", "Logs", 3, "logStream", "animated", "icons"], ["formClass", "border rounded my-2 py-4 px-4 bg-light", 3, "onSearch", "debounceTime", "minLength"], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "select", "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH", "selected", "selectionType", "selectAllRowsOnPage"], ["role", "toolbar", "aria-label", "Operations", 1, "btn-toolbar", "mb-4"], ["role", "group", "aria-label", "Update", 1, "btn-group", "me-2"], ["class", "btn btn-success", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-danger", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["role", "group", "aria-label", "Reset", 1, "btn-group", "me-2"], ["role", "button", "triggers", "", "container", "body", "popoverTitle", "Warning", 1, "btn", "btn-warning", 3, "click", "popover", "isOpen", "disabled"], [1, "me-1", 3, "icon"], ["role", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["role", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "alert", "alert-warning"], ["role", "button", 1, "btn", "btn-info", "me-2", 3, "click"], ["role", "button", 1, "btn", "btn-warning", 3, "click"], [1, "fw-bold", "text-wrap", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["autofocus", "", 3, "type", "value", "blur", 4, "ngIf"], [3, "innerHTML"], ["autofocus", "", 3, "blur", "type", "value"], ["class", "btn btn-outline-primary icon-only", "role", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["role", "button", 1, "btn", "btn-outline-primary", "icon-only", 3, "click"], [3, "icon"], ["role", "button", 1, "btn", "btn-outline-warning", "icon-only", 3, "click"]], template: function DataProcessorComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 8)(1, "div", 9);
            i0.ɵɵtemplate(2, DataProcessorComponent_div_2_Template, 10, 6, "div", 10);
            i0.ɵɵelementStart(3, "polp-bs-expandable-card", 11)(4, "span", 12);
            i0.ɵɵtext(5, " Operation logs ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 13);
            i0.ɵɵelement(7, "log-monitor", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "polp-bs-search-box-widget", 15, 0);
            i0.ɵɵlistener("onSearch", function DataProcessorComponent_Template_polp_bs_search_box_widget_onSearch_8_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.kickOffSearch()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "ngx-datatable", 16, 1);
            i0.ɵɵlistener("select", function DataProcessorComponent_Template_ngx_datatable_select_10_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSelect($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, DataProcessorComponent_ng_template_12_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(14, DataProcessorComponent_ng_template_14_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(16, DataProcessorComponent_ng_template_16_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(18, DataProcessorComponent_ng_template_18_Template, 3, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.editable);
            i0.ɵɵadvance();
            i0.ɵɵproperty("isCollapsed", !ctx.showLogs);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("logStream", ctx.logStream)("animated", true)("icons", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("debounceTime", 200)("minLength", 2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("limit", ctx.pageSize)("scrollbarH", true)("selected", ctx.selected)("selectionType", ctx.SelectionType.checkbox)("selectAllRowsOnPage", false);
        } }, dependencies: [i2.NgIf, i3.PopoverDirective, i4.ExpandableCardComponent, i4.SearchBoxWidgetComponent, i5.FaIconComponent, i1.DatatableComponent, i7.LogMonitorComponent], encapsulation: 2 }); }
};
DataProcessorComponent = __decorate([
    supportOperationsDecorator
], DataProcessorComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataProcessorComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-processor', standalone: false, template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\" *ngIf=\"editable\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Update\">\n                <button class=\"btn btn-success\" role=\"button\" *ngIf=\"settings.canCreate\"\n                        (click)=\"startAdd()\" [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>\n                    Add\n                </button>\n                <button class=\"btn btn-danger\" role=\"button\" *ngIf=\"settings.canDelete\"\n                        (click)=\"rmAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faTrash\" class=\"me-1\"></fa-icon>\n                    Delete\n                </button>\n            </div>\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Reset\">\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset = true;\"\n                        [popover]=\"confirmResetTmpl\" triggers=\"\" [isOpen]=\"isConfirmReset\"\n                        container=\"body\" popoverTitle=\"Warning\"\n                        [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faUndo\" class=\"me-1\"></fa-icon>\n                    Reset\n                </button>\n            </div>\n            <ng-template #confirmResetTmpl>\n                <div class=\"alert alert-warning\">\n                    This operation will discard all changes and cannot be undo. Are you sure to continue?\n                </div>\n                <div>\n                    <button class=\"btn btn-info me-2\" role=\"button\" (click)=\"isConfirmReset = false;\">\n                        <fa-icon [icon]=\"faTimes\" class=\"me-1\"></fa-icon>\n                        Cancel\n                    </button>\n                    <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset=false;reset();\">\n                        <fa-icon [icon]=\"faExclamationTriangle\" class=\"me-1\"></fa-icon>\n                        Confirm\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Operation logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"Logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n\n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"false\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #editActionHeader>\n            <span>\n                Actions\n            </span>\n        </ng-template>\n\n        <ng-template #editActionCell let-rowIndex=\"rowIndex\">\n            <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"startEdit(rowIndex)\"\n                    *ngIf=\"!backup[rowIndex]; else otherActionTmpl\">\n                <fa-icon [icon]=\"faEdit\"></fa-icon>\n            </button>\n            <ng-template #otherActionTmpl>\n                <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"confirmEditAsync(rowIndex)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                </button>\n                <button class=\"btn btn-outline-warning icon-only\" role=\"button\" (click)=\"cancelEdit(rowIndex)\">\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\n                </button>\n            </ng-template>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1$1.NgxNotyImpl }], { initData: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataProcessorComponent, { className: "DataProcessorComponent", filePath: "lib/data-processor/data-processor.component.ts", lineNumber: 17 }); })();

const _c0$1 = ["searchBox4DataPub"];
const _c1 = ["datatable"];
const _c2 = ["stateHeader"];
const _c3 = ["stateCell"];
const _c4 = ["titleCell"];
const _c5 = ["inputCell"];
function DataPublicationComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const column_r2 = ctx.column;
    i0.ɵɵproperty("innerHTML", column_r2.name, i0.ɵɵsanitizeHtml);
} }
function DataPublicationComponent_ng_template_24_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 23);
} if (rf & 2) {
    const value_r3 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("innerHTML", value_r3, i0.ɵɵsanitizeHtml);
} }
function DataPublicationComponent_ng_template_24_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 24);
    i0.ɵɵlistener("blur", function DataPublicationComponent_ng_template_24_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(); const rowIndex_r6 = ctx_r4.rowIndex; const column_r7 = ctx_r4.column; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.updateValue($event, column_r7.prop, rowIndex_r6)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const column_r7 = ctx_r4.column;
    const value_r3 = ctx_r4.value;
    i0.ɵɵproperty("type", column_r7.inputType)("value", value_r3);
} }
function DataPublicationComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataPublicationComponent_ng_template_24_span_0_Template, 1, 1, "span", 21)(1, DataPublicationComponent_ng_template_24_input_1_Template, 1, 2, "input", 22);
} if (rf & 2) {
    const rowIndex_r6 = ctx.rowIndex;
    const column_r7 = ctx.column;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r7.editing[rowIndex_r6 + "-" + column_r7.prop]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.editing[rowIndex_r6 + "-" + column_r7.prop]);
} }
function DataPublicationComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1, " State ");
    i0.ɵɵelementEnd();
} }
function DataPublicationComponent_ng_template_28_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵelement(1, "fa-icon", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r7.faHourglass);
} }
function DataPublicationComponent_ng_template_28_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵelement(1, "fa-icon", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r7.faHourglass);
} }
function DataPublicationComponent_ng_template_28_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵelement(1, "fa-icon", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r7.faCheck);
} }
function DataPublicationComponent_ng_template_28_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r7.faTimes);
} }
function DataPublicationComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 26);
    i0.ɵɵtemplate(1, DataPublicationComponent_ng_template_28_span_1_Template, 2, 1, "span", 27)(2, DataPublicationComponent_ng_template_28_span_2_Template, 2, 1, "span", 27)(3, DataPublicationComponent_ng_template_28_span_3_Template, 2, 1, "span", 28)(4, DataPublicationComponent_ng_template_28_span_4_Template, 2, 1, "span", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r9 = ctx.value;
    i0.ɵɵproperty("ngSwitch", value_r9);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "waiting");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "working");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "success");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "failure");
} }
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
    static { this.ɵfac = function DataPublicationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataPublicationComponent)(i0.ɵɵdirectiveInject(i1$1.NgxNotyImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataPublicationComponent, selectors: [["polp-data-publication"]], viewQuery: function DataPublicationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 7);
            i0.ɵɵviewQuery(_c1, 7);
            i0.ɵɵviewQuery(_c2, 7);
            i0.ɵɵviewQuery(_c3, 7);
            i0.ɵɵviewQuery(_c4, 7);
            i0.ɵɵviewQuery(_c5, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchBox = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datatable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stateHeaderTmpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stateCellTmpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleCellTmpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputCellTmpl = _t.first);
        } }, inputs: { initData: "initData", columnNames: "columnNames", uploadAsync: "uploadAsync" }, outputs: { onImport: "onImport", afterImport: "afterImport" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 30, vars: 21, consts: [["searchBox4DataPub", ""], ["datatable", ""], ["titleHeader", ""], ["inputCell", ""], ["stateHeader", ""], ["stateCell", ""], [1, "card"], [1, "card-body"], ["role", "toolbar", "aria-label", "Operations", 1, "btn-toolbar", "mb-4"], ["role", "group", "aria-label", "Upload", 1, "btn-group", "me-2"], ["role", "button", 1, "btn", "btn-success", 3, "click", "disabled"], [1, "me-1", 3, "icon"], ["role", "button", 1, "btn", "btn-info", 3, "click", "disabled"], ["role", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "isCollapsed"], ["title", ""], ["body", "", 1, "container"], ["theme", "dark", "title", "logs", 3, "logStream", "animated", "icons"], ["formClass", "border rounded my-2 py-4 px-4 bg-light", 3, "onSearch", "debounceTime", "minLength"], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "select", "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH", "selected", "selectionType", "selectAllRowsOnPage"], [1, "fw-bold", "text-wrap", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["autofocus", "", 3, "type", "value", "blur", 4, "ngIf"], [3, "innerHTML"], ["autofocus", "", 3, "blur", "type", "value"], [1, "fw-bold", "text-warp"], [3, "ngSwitch"], ["class", "text-info", 4, "ngSwitchCase"], ["class", "text-success", 4, "ngSwitchCase"], ["class", "text-danger", 4, "ngSwitchCase"], [1, "text-info"], [3, "icon"], ["faSpin", "", 3, "icon"], [1, "text-success"], [1, "text-danger"]], template: function DataPublicationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "button", 10);
            i0.ɵɵlistener("click", function DataPublicationComponent_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadSelectedAsync()); });
            i0.ɵɵelement(5, "fa-icon", 11);
            i0.ɵɵtext(6, " Upload selected ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 12);
            i0.ɵɵlistener("click", function DataPublicationComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadAllAsync()); });
            i0.ɵɵelement(8, "fa-icon", 11);
            i0.ɵɵtext(9, " Upload all ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 13);
            i0.ɵɵlistener("click", function DataPublicationComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.uploadAllAsync()); });
            i0.ɵɵelement(11, "fa-icon", 11);
            i0.ɵɵtext(12, " Upload filtered ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "polp-bs-expandable-card", 14)(14, "span", 15);
            i0.ɵɵtext(15, " Data import logs ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 16);
            i0.ɵɵelement(17, "log-monitor", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "polp-bs-search-box-widget", 18, 0);
            i0.ɵɵlistener("onSearch", function DataPublicationComponent_Template_polp_bs_search_box_widget_onSearch_18_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.kickOffSearch()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "ngx-datatable", 19, 1);
            i0.ɵɵlistener("select", function DataPublicationComponent_Template_ngx_datatable_select_20_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSelect($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, DataPublicationComponent_ng_template_22_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(24, DataPublicationComponent_ng_template_24_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(26, DataPublicationComponent_ng_template_26_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(28, DataPublicationComponent_ng_template_28_Template, 5, 5, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.selected.length <= 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", ctx.faArrowUp);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.anyKeyword);
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", ctx.faArrowCircleUp);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.anyKeyword);
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", ctx.faArrowCircleUp);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("isCollapsed", !ctx.showLogs);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("logStream", ctx.logStream)("animated", true)("icons", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("debounceTime", 200)("minLength", 2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("limit", ctx.pageSize)("scrollbarH", true)("selected", ctx.selected)("selectionType", ctx.SelectionType.checkbox)("selectAllRowsOnPage", true);
        } }, dependencies: [i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i4.ExpandableCardComponent, i4.SearchBoxWidgetComponent, i5.FaIconComponent, i1.DatatableComponent, i7.LogMonitorComponent], encapsulation: 2 }); }
};
DataPublicationComponent = __decorate([
    supportOperationsDecorator
], DataPublicationComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataPublicationComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-publication', standalone: false, template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Upload\">\n                <button class=\"btn btn-success\" role=\"button\" (click)=\"uploadSelectedAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faArrowUp\" class=\"me-1\"></fa-icon>\n                    Upload selected\n                </button>\n                <button class=\"btn btn-info\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload all\n                </button>\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"!anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload filtered\n                </button>\n            </div>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Data import logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox4DataPub\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n                    \n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"true\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #stateHeader let-column=\"column\">\n            <span class=\"fw-bold text-warp\">\n                State\n            </span>\n        </ng-template>\n\n        <ng-template #stateCell let-value=\"value\">\n            <ng-container [ngSwitch]=\"value\">\n                <span class=\"text-info\" *ngSwitchCase=\"'waiting'\">\n                    <fa-icon [icon]=\"faHourglass\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-info\" *ngSwitchCase=\"'working'\">\n                    <fa-icon [icon]=\"faHourglass\" faSpin>\n                    </fa-icon>\n                </span>\n                <span class=\"text-success\" *ngSwitchCase=\"'success'\">\n                    <fa-icon [icon]=\"faCheck\" >\n                    </fa-icon>\n                </span>\n                <span class=\"text-danger\" *ngSwitchCase=\"'failure'\">\n                    <fa-icon [icon]=\"faTimes\">\n                    </fa-icon>\n                </span>\n            </ng-container>\n        </ng-template>\n    </div>\n</div>\n\n" }]
    }], () => [{ type: i1$1.NgxNotyImpl }], { initData: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataPublicationComponent, { className: "DataPublicationComponent", filePath: "lib/data-publication/data-publication.component.ts", lineNumber: 21 }); })();

class DataStagingComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = function DataStagingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataStagingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataStagingComponent, selectors: [["polp-data-staging"]], standalone: false, decls: 2, vars: 0, template: function DataStagingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "data-staging works!");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataStagingComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-staging', standalone: false, template: "<p>data-staging works!</p>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataStagingComponent, { className: "DataStagingComponent", filePath: "lib/data-staging/data-staging.component.ts", lineNumber: 9 }); })();

function DefineColumnMappingComponent_div_14_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 12);
    i0.ɵɵelement(1, "span", 8);
    i0.ɵɵpipe(2, "safeDom");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", o_r1.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind2(2, 2, o_r1.label, "html"), i0.ɵɵsanitizeHtml);
} }
function DefineColumnMappingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementContainerStart(1, 7);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3);
    i0.ɵɵelement(5, "div", 8);
    i0.ɵɵpipe(6, "safeDom");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "div", 4);
    i0.ɵɵelementStart(8, "div", 3)(9, "select", 9)(10, "option", 10);
    i0.ɵɵtext(11, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, DefineColumnMappingComponent_div_14_option_12_Template, 3, 5, "option", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroupName", i_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i_r2 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind2(6, 4, ctx_r2.sourceLabel(i_r2), "html"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r2.targetColumns);
} }
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
    static { this.ɵfac = function DefineColumnMappingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DefineColumnMappingComponent)(i0.ɵɵdirectiveInject(i1$2.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2$1.LoggerProviderImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefineColumnMappingComponent, selectors: [["polp-define-column-mapping"]], inputs: { sourceColumns: "sourceColumns", targetColumns: "targetColumns", initValue: "initValue" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 2, consts: [[3, "formGroup"], [1, "form-row", "mb-4"], [1, "col-1"], [1, "col-4"], [1, "col-3"], ["formArrayName", "mappings"], ["class", "form-row mb-4", 4, "ngFor", "ngForOf"], [3, "formGroupName"], [3, "innerHtml"], ["formControlName", "targetId", 1, "form-control", "form-control-sm"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DefineColumnMappingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3, " # ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "b");
            i0.ɵɵtext(6, "Source");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4)(8, "b");
            i0.ɵɵtext(9, "Example");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 3)(11, "b");
            i0.ɵɵtext(12, "Target");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementContainerStart(13, 5);
            i0.ɵɵtemplate(14, DefineColumnMappingComponent_div_14_Template, 13, 7, "div", 6);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngForOf", ctx.mappings.controls);
        } }, dependencies: [i2.NgForOf, i1$2.ɵNgNoValidate, i1$2.NgSelectOption, i1$2.ɵNgSelectMultipleOption, i1$2.SelectControlValueAccessor, i1$2.NgControlStatus, i1$2.NgControlStatusGroup, i1$2.FormGroupDirective, i1$2.FormControlName, i1$2.FormGroupName, i1$2.FormArrayName, i4$1.SafeDomPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefineColumnMappingComponent, [{
        type: Component,
        args: [{ selector: 'polp-define-column-mapping', standalone: false, template: "<form  [formGroup]=\"form\">\n    <!-- Header -->\n    <div class=\"form-row mb-4\">\n        <div class=\"col-1\">\n            #\n        </div>\n        <div class=\"col-4\">\n            <b>Source</b>\n        </div>\n        <div class=\"col-3\">\n            <b>Example</b>\n        </div>\n        <div class=\"col-4\">\n            <b>Target</b>\n        </div>\n    </div>\n    \n    <ng-container formArrayName=\"mappings\">\n        <div class=\"form-row mb-4\" *ngFor=\"let f of mappings.controls; let i=index\">\n            <ng-container [formGroupName]=\"i\">\n                <div class=\"col-1\">\n                    {{i + 1}}\n                </div>\n                <div class=\"col-4\">\n                    <div [innerHtml]=\"sourceLabel(i) | safeDom:'html'\"></div>\n                </div>\n                <div class=\"col-3\">\n                    <!-- Something -->\n                </div>\n                <div class=\"col-4\">\n                    <select class=\"form-control form-control-sm\" formControlName=\"targetId\">\n                        <option value=\"\">...</option>                        \n                        <option *ngFor=\"let o of targetColumns\" [value]=\"o.id\">\n                            <span [innerHtml]=\"o.label | safeDom:'html'\">\n                            </span>\n                        </option>\n                    </select>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>                \n    \n</form>\n" }]
    }], () => [{ type: i1$2.UntypedFormBuilder }, { type: i2$1.LoggerProviderImpl }], { sourceColumns: [{
            type: Input
        }], targetColumns: [{
            type: Input
        }], initValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DefineColumnMappingComponent, { className: "DefineColumnMappingComponent", filePath: "lib/define-column-mapping/define-column-mapping.component.ts", lineNumber: 64 }); })();

function DropFileModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Drop a file ");
} }
function DropFileModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 13);
    i0.ɵɵlistener("click", function DropFileModalComponent_div_8_Template_button_click_3_listener() { const f_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onRemove(f_r2)); });
    i0.ɵɵtext(4, "Remove");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r2.name, " (", f_r2.type, ")");
} }
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
    onSelect(files) {
        for (const droppedFile of files) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry;
                fileEntry.file((file) => {
                    if (!this.maxFileSizeInBytes || (this.maxFileSizeInBytes && file.size < this.maxFileSizeInBytes)) {
                        this.items = [...this.items, file];
                    }
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
            }
        }
        this.valid = this.items.length > 0;
    }
    onRemove(event) {
        this.items = this.items.filter(x => x != event);
        this.valid = this.items.length > 0;
    }
    confirm() {
        this.closeModal(this.items);
    }
    close() {
        this.closeModal(null);
    }
    static { this.ɵfac = function DropFileModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DropFileModalComponent)(i0.ɵɵdirectiveInject(i1$3.BsModalRef), i0.ɵɵdirectiveInject(i1$3.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropFileModalComponent, selectors: [["polp-drop-file-modal"]], inputs: { multiple: "multiple", accept: "accept", maxFileSizeInBytes: "maxFileSizeInBytes" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 6, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "onFileDrop", "multiple", "accept"], ["ngx-file-drop-content-tmp", ""], [1, "file-previews"], ["class", "preview-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "me-1", 3, "icon"], [1, "preview-item"], [3, "click"]], template: function DropFileModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function DropFileModalComponent_Template_button_click_3_listener() { return ctx.close(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3)(5, "ngx-file-drop", 4);
            i0.ɵɵlistener("onFileDrop", function DropFileModalComponent_Template_ngx_file_drop_onFileDrop_5_listener($event) { return ctx.onSelect($event); });
            i0.ɵɵtemplate(6, DropFileModalComponent_ng_template_6_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵtemplate(8, DropFileModalComponent_div_8_Template, 5, 2, "div", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 8)(10, "button", 9);
            i0.ɵɵlistener("click", function DropFileModalComponent_Template_button_click_10_listener() { return ctx.close(); });
            i0.ɵɵtext(11, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 10);
            i0.ɵɵlistener("click", function DropFileModalComponent_Template_button_click_12_listener() { return ctx.confirm(); });
            i0.ɵɵelement(13, "fa-icon", 11);
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "Confirm");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("multiple", ctx.multiple)("accept", ctx.accept);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx.valid);
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", ctx.faSave);
        } }, dependencies: [i2.NgForOf, i3$1.NgxFileDropComponent, i3$1.NgxFileDropContentTemplateDirective, i2$2.polpModalDraggableDirective, i5.FaIconComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropFileModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-drop-file-modal', standalone: false, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ngx-file-drop\n        [multiple]=\"multiple\"\n        [accept]=\"accept\"\n        (onFileDrop)=\"onSelect($event)\">\n        <ng-template ngx-file-drop-content-tmp>\n            Drop a file\n        </ng-template>\n    </ngx-file-drop>\n\n    <div class=\"file-previews\">\n        <div class=\"preview-item\" *ngFor=\"let f of items\">\n            <span>{{ f.name }} ({{ f.type }})</span>\n            <button (click)=\"onRemove(f)\">Remove</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cancel</button>\n    <button class=\"btn btn-primary\" (click)=\"confirm()\" [disabled]=\"!valid\">\n        <fa-icon [icon]=\"faSave\" class=\"me-1\"></fa-icon> <span>Confirm</span>\n    </button>\n</div>\n" }]
    }], () => [{ type: i1$3.BsModalRef }, { type: i1$3.BsModalService }], { multiple: [{
            type: Input
        }], accept: [{
            type: Input
        }], maxFileSizeInBytes: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropFileModalComponent, { className: "DropFileModalComponent", filePath: "lib/drop-file-modal/drop-file-modal.component.ts", lineNumber: 20 }); })();

function readExcelAsync(file) {
    return readXlsxFile(file);
}
function writeExcelAsync(data, options) {
    return writeXlsxFile(data, {
        schema: options.schema,
        fileName: options.fileName
    });
}

function ExportDataWizardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the following snippet of the data to be exported, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵelement(6, "polp-data-preview", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r0.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r0.state.preview.rows)("columnNames", ctx_r0.state.preview.cols);
} }
function ExportDataWizardComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 12);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_div_1_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.confirmExport()); });
    i0.ɵɵtext(2, " Start to export ");
    i0.ɵɵelementEnd()();
} }
function ExportDataWizardComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "log-monitor", 13);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("logStream", ctx_r0.logStream)("animated", true)("icons", true);
} }
function ExportDataWizardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please confirm ... ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵtemplate(6, ExportDataWizardComponent_div_1_div_6_Template, 3, 0, "div", 11)(7, ExportDataWizardComponent_div_1_ng_template_7_Template, 1, 3, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const exportLogs_r3 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r0.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.confirmed)("ngIfElse", exportLogs_r3);
} }
function ExportDataWizardComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.prevStep()); });
    i0.ɵɵelement(1, "fa-icon", 15);
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.disablePrevStep);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r0.faArrowLeft);
} }
function ExportDataWizardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function ExportDataWizardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.nextStep()); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelement(2, "fa-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.disableNextStep);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r0.faArrowRight);
} }
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
    static { this.ɵfac = function ExportDataWizardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExportDataWizardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExportDataWizardComponent, selectors: [["polp-export-data-wizard"]], inputs: { columns: "columns", downloadAsync: "downloadAsync" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 4, consts: [["exportLogs", ""], ["class", "card", 4, "ngIf"], [1, "d-flex", "mt-4", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "disabled", "click", 4, "ngIf"], [1, "me-auto"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "card"], [1, "card-header", "h6"], [1, "badge", "rounded-pill", "bg-dark", "me-1"], [1, "card-body"], [3, "initData", "columnNames"], [4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], ["theme", "dark", "title", "Data export logs", 3, "logStream", "animated", "icons"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function ExportDataWizardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ExportDataWizardComponent_div_0_Template, 7, 3, "div", 1)(1, ExportDataWizardComponent_div_1_Template, 9, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, ExportDataWizardComponent_button_3_Template, 3, 2, "button", 3);
            i0.ɵɵelement(4, "span", 4);
            i0.ɵɵtemplate(5, ExportDataWizardComponent_button_5_Template, 3, 2, "button", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible(0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasPrevStep);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasNextStep);
        } }, dependencies: [i2.NgIf, i5.FaIconComponent, i7.LogMonitorComponent, DataPreviewComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportDataWizardComponent, [{
        type: Component,
        args: [{ selector: 'polp-export-data-wizard', standalone: false, template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the following snippet of the data to be\n        exported, and then continue to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-preview [initData]=\"state.preview.rows\"\n                           [columnNames]=\"state.preview.cols\">\n        </polp-data-preview>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please confirm ...\n    </div>\n    <div class=\"card-body\">\n        <div *ngIf=\"!confirmed; else exportLogs\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"confirmExport()\">\n                Start to export\n            </button>\n        </div>\n        <ng-template #exportLogs>\n            <log-monitor\n                [logStream]=\"logStream\"\n                theme=\"dark\"\n                title=\"Data export logs\"\n                [animated]=\"true\"\n                [icons]=\"true\">\n            </log-monitor>            \n        </ng-template>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n\n" }]
    }], () => [], { columns: [{
            type: Input
        }], downloadAsync: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExportDataWizardComponent, { className: "ExportDataWizardComponent", filePath: "lib/export-data-wizard/export-data-wizard.component.ts", lineNumber: 60 }); })();

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
    static { this.ɵfac = function ExportWizardModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExportWizardModalComponent)(i0.ɵɵdirectiveInject(i1$3.BsModalRef), i0.ɵɵdirectiveInject(i1$3.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExportWizardModalComponent, selectors: [["polp-export-wizard-modal"]], inputs: { columns: "columns", downloadAsync: "downloadAsync" }, standalone: false, decls: 6, vars: 3, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "columns", "downloadAsync"]], template: function ExportWizardModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function ExportWizardModalComponent_Template_button_click_3_listener() { return ctx.close(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "polp-export-data-wizard", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("columns", ctx.columns)("downloadAsync", ctx.downloadAsync);
        } }, dependencies: [i2$2.polpModalDraggableDirective, ExportDataWizardComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportWizardModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-export-wizard-modal', standalone: false, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-export-data-wizard [columns]=\"columns\"\n                             [downloadAsync]=\"downloadAsync\">\n    </polp-export-data-wizard>\n</div>\n\n" }]
    }], () => [{ type: i1$3.BsModalRef }, { type: i1$3.BsModalService }], { columns: [{
            type: Input
        }], downloadAsync: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExportWizardModalComponent, { className: "ExportWizardModalComponent", filePath: "lib/export-wizard-modal/export-wizard-modal.component.ts", lineNumber: 20 }); })();

function ImportDataWizardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, make changes, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-processor", 9);
    i0.ɵɵlistener("onReset", function ImportDataWizardComponent_div_0_Template_polp_data_processor_onReset_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetPreprocessor()); })("dataChange", function ImportDataWizardComponent_div_0_Template_polp_data_processor_dataChange_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreprocessor($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r1.state.preprocessor.inputRows)("columnNames", ctx_r1.state.preprocessor.cols);
} }
function ImportDataWizardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please define the mappings from source columns to target columns, and then move to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-define-column-mapping", 10);
    i0.ɵɵlistener("onValueChanged", function ImportDataWizardComponent_div_1_Template_polp_define_column_mapping_onValueChanged_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateMappings($event)); })("onValidation", function ImportDataWizardComponent_div_1_Template_polp_define_column_mapping_onValidation_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.validateMappings($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("sourceColumns", ctx_r1.sourceColumns)("targetColumns", ctx_r1.targetColumns)("initValue", ctx_r1.state.mappings);
} }
function ImportDataWizardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, make changes, and then continue to the next step. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-processor", 9);
    i0.ɵɵlistener("onReset", function ImportDataWizardComponent_div_2_Template_polp_data_processor_onReset_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetPostprocessor()); })("dataChange", function ImportDataWizardComponent_div_2_Template_polp_data_processor_dataChange_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePostprocessor($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("initData", ctx_r1.state.postprocessor.inputRows)("columnNames", ctx_r1.state.postprocessor.cols);
} }
function ImportDataWizardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Please review the data below, and upload some or all of them. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "polp-data-publication", 11);
    i0.ɵɵlistener("onImport", function ImportDataWizardComponent_div_3_Template_polp_data_publication_onImport_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.startImport()); })("afterImport", function ImportDataWizardComponent_div_3_Template_polp_data_publication_afterImport_6_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateImportStat($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Step ", ctx_r1.stepIndex + 1, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("columnNames", ctx_r1.state.publication.cols)("uploadAsync", ctx_r1.uploadAsync)("initData", ctx_r1.state.publication.rows);
} }
function ImportDataWizardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function ImportDataWizardComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.prevStep()); });
    i0.ɵɵelement(1, "fa-icon", 13);
    i0.ɵɵtext(2, " Previous ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.disablePrevStep);
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r1.faArrowLeft);
} }
function ImportDataWizardComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ImportDataWizardComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nextStep()); });
    i0.ɵɵtext(1, " Next ");
    i0.ɵɵelement(2, "fa-icon", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.disableNextStep);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r1.faArrowRight);
} }
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
    static { this.ɵfac = function ImportDataWizardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImportDataWizardComponent)(i0.ɵɵdirectiveInject(i1$1.NgxNotyImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportDataWizardComponent, selectors: [["polp-import-data-wizard"]], inputs: { file: "file", targetColumns: "targetColumns", uploadAsync: "uploadAsync" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 6, consts: [["class", "card", 4, "ngIf"], [1, "d-flex", "mt-4", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "disabled", "click", 4, "ngIf"], [1, "me-auto"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "card"], [1, "card-header", "h6"], [1, "badge", "rounded-pill", "bg-dark", "me-1"], [1, "card-body"], [3, "onReset", "dataChange", "initData", "columnNames"], [3, "onValueChanged", "onValidation", "sourceColumns", "targetColumns", "initValue"], [3, "onImport", "afterImport", "columnNames", "uploadAsync", "initData"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "icon"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function ImportDataWizardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ImportDataWizardComponent_div_0_Template, 7, 3, "div", 0)(1, ImportDataWizardComponent_div_1_Template, 7, 4, "div", 0)(2, ImportDataWizardComponent_div_2_Template, 7, 3, "div", 0)(3, ImportDataWizardComponent_div_3_Template, 7, 4, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵtemplate(5, ImportDataWizardComponent_button_5_Template, 3, 2, "button", 2);
            i0.ɵɵelement(6, "span", 3);
            i0.ɵɵtemplate(7, ImportDataWizardComponent_button_7_Template, 3, 2, "button", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible(0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1, 1));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visible(1, 1, 1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasPrevStep);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasNextStep);
        } }, dependencies: [i2.NgIf, i5.FaIconComponent, DefineColumnMappingComponent, DataPublicationComponent, DataProcessorComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportDataWizardComponent, [{
        type: Component,
        args: [{ selector: 'polp-import-data-wizard', standalone: false, template: "<div class=\"card\" *ngIf=\"visible(0)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.preprocessor.inputRows\"\n                             [columnNames]=\"state.preprocessor.cols\"\n                             (onReset)=\"resetPreprocessor()\"\n                             (dataChange)=\"updatePreprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please define the mappings from source columns to target\n        columns, and then move to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-define-column-mapping [sourceColumns]=\"sourceColumns\"\n                                    [targetColumns]=\"targetColumns\"\n                                    (onValueChanged)=\"updateMappings($event)\"\n                                    (onValidation)=\"validateMappings($event)\"\n                                    [initValue]=\"state.mappings\">\n        </polp-define-column-mapping>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, make changes, and then continue\n        to the next step.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-processor [initData]=\"state.postprocessor.inputRows\"\n                             [columnNames]=\"state.postprocessor.cols\"\n                             (onReset)=\"resetPostprocessor()\"\n                             (dataChange)=\"updatePostprocessor($event)\">\n        </polp-data-processor>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"visible(1, 1, 1)\">\n    <div class=\"card-header h6\">\n        <span class=\"badge rounded-pill bg-dark me-1\">Step {{stepIndex + 1}}</span>\n        Please review the data below, and upload some or all of them.\n    </div>\n    <div class=\"card-body\">\n        <polp-data-publication [columnNames]=\"state.publication.cols\"\n                               [uploadAsync]=\"uploadAsync\"\n                               (onImport)=\"startImport()\"\n                               (afterImport)=\"updateImportStat($event)\"\n                               [initData]=\"state.publication.rows\">\n        </polp-data-publication>\n    </div>\n</div>\n\n<!-- Navigation -->\n<div class=\"d-flex mt-4 mb-4\">\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"disablePrevStep\"\n            *ngIf=\"hasPrevStep\" (click)=\"prevStep()\">\n        <fa-icon [icon]=\"faArrowLeft\"></fa-icon>\n        Previous\n    </button>\n    <span class=\"me-auto\"></span>    \n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disableNextStep\"\n            *ngIf=\"hasNextStep\" (click)=\"nextStep()\">\n        Next\n        <fa-icon [icon]=\"faArrowRight\"></fa-icon>                \n    </button>            \n</div>    \n" }]
    }], () => [{ type: i1$1.NgxNotyImpl }], { file: [{
            type: Input
        }], targetColumns: [{
            type: Input
        }], uploadAsync: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImportDataWizardComponent, { className: "ImportDataWizardComponent", filePath: "lib/import-data-wizard/import-data-wizard.component.ts", lineNumber: 40 }); })();

const _c0 = ["importDataWizard"];
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
    static { this.ɵfac = function ImportWizardModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImportWizardModalComponent)(i0.ɵɵdirectiveInject(i1$3.BsModalRef), i0.ɵɵdirectiveInject(i1$3.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImportWizardModalComponent, selectors: [["polp-import-wizard-modal"]], viewQuery: function ImportWizardModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.importDataWizard = _t.first);
        } }, inputs: { file: "file", columns: "columns", uploadAsync: "uploadAsync", successCallback: "successCallback" }, standalone: false, decls: 7, vars: 4, consts: [["importDataWizard", ""], ["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "file", "targetColumns", "uploadAsync"]], template: function ImportWizardModalComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "h4", 2);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function ImportWizardModalComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.close()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelement(5, "polp-import-data-wizard", 5, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("file", ctx.file)("targetColumns", ctx.columns)("uploadAsync", ctx.uploadAsync);
        } }, dependencies: [i2$2.polpModalDraggableDirective, ImportDataWizardComponent], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImportWizardModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-import-wizard-modal', standalone: false, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <polp-import-data-wizard #importDataWizard\n                             [file]=\"file\"\n                             [targetColumns]=\"columns\"\n                             [uploadAsync]=\"uploadAsync\">\n    </polp-import-data-wizard>\n</div>\n" }]
    }], () => [{ type: i1$3.BsModalRef }, { type: i1$3.BsModalService }], { file: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImportWizardModalComponent, { className: "ImportWizardModalComponent", filePath: "lib/import-wizard-modal/import-wizard-modal.component.ts", lineNumber: 26 }); })();

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
            ignoreBackdropClick: true, /* so that we can capture the close event */
            keyboard: false, /* So that we can capture the close event. */
            initialState: initState,
            class: 'modal-dialog-centered'
        });
        return lastValueFrom(modalRef.content.result);
    }
    static { this.ɵfac = function ModalUtilsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModalUtilsService)(i0.ɵɵinject(i1$3.BsModalService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalUtilsService, factory: ModalUtilsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1$3.BsModalService }], null); })();

class PolpDataTransportModule {
    static { this.ɵfac = function PolpDataTransportModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PolpDataTransportModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolpDataTransportModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ModalModule,
            PopoverModule,
            CollapseModule,
            NgxFileDropModule,
            PolpBsComponentsModule,
            PolpDraggableModule,
            FontAwesomeModule,
            NgxDatatableModule,
            PolpwareNgxPipesModule,
            LogMonitorModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpDataTransportModule, [{
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
                    NgxFileDropModule,
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpDataTransportModule, { declarations: [DropFileModalComponent,
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
        NgxFileDropModule,
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
        DataPreviewComponent] }); })();

/*
 * Public API Surface of data-transport
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DataPreviewComponent, DataProcessorComponent, DataPublicationComponent, DataStagingComponent, DefineColumnMappingComponent, DropFileModalComponent, ExportDataWizardComponent, ExportWizardModalComponent, ImportDataWizardComponent, ImportWizardModalComponent, ModalUtilsService, PolpDataTransportModule, readExcelAsync, writeExcelAsync };
//# sourceMappingURL=polpware-data-transport.mjs.map
