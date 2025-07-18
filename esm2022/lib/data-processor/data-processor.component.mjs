import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { faCheck, faEdit, faExclamationTriangle, faPlus, faSearch, faTimes, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { getInputType, NgxDatatableLocalData, supportOperationsDecorator } from '@polpware/ngx-reactive-table';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-noty";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/popover";
import * as i4 from "@polpware/bs-components";
import * as i5 from "@fortawesome/angular-fontawesome";
import * as i6 from "@swimlane/ngx-datatable";
import * as i7 from "ngx-log-monitor";
const _c0 = ["searchBox"];
const _c1 = ["datatable"];
const _c2 = ["editActionHeader"];
const _c3 = ["editActionCell"];
const _c4 = ["inputCell"];
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
    static { this.ɵfac = function DataProcessorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataProcessorComponent)(i0.ɵɵdirectiveInject(i1.NgxNotyImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataProcessorComponent, selectors: [["polp-data-processor"]], viewQuery: function DataProcessorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
            i0.ɵɵviewQuery(_c2, 7);
            i0.ɵɵviewQuery(_c3, 7);
            i0.ɵɵviewQuery(_c4, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchBox = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datatable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editActionHeaderTmpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editActionCellTmpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputCellTmpl = _t.first);
        } }, inputs: { initData: "initData", columnNames: "columnNames" }, outputs: { dataChange: "dataChange", onReset: "onReset" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 20, vars: 16, consts: [["searchBox", ""], ["datatable", ""], ["titleHeader", ""], ["inputCell", ""], ["editActionHeader", ""], ["editActionCell", ""], ["confirmResetTmpl", ""], ["otherActionTmpl", ""], [1, "card"], [1, "card-body"], ["class", "btn-toolbar mb-4", "role", "toolbar", "aria-label", "Operations", 4, "ngIf"], [3, "isCollapsed"], ["title", ""], ["body", "", 1, "container"], ["theme", "dark", "title", "Logs", 3, "logStream", "animated", "icons"], ["formClass", "border rounded my-2 py-4 px-4 bg-light", 3, "onSearch", "debounceTime", "minLength"], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "select", "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH", "selected", "selectionType", "selectAllRowsOnPage"], ["role", "toolbar", "aria-label", "Operations", 1, "btn-toolbar", "mb-4"], ["role", "group", "aria-label", "Update", 1, "btn-group", "me-2"], ["class", "btn btn-success", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-danger", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["role", "group", "aria-label", "Reset", 1, "btn-group", "me-2"], ["role", "button", "triggers", "", "container", "body", "popoverTitle", "Warning", 1, "btn", "btn-warning", 3, "click", "popover", "isOpen", "disabled"], [1, "me-1", 3, "icon"], ["role", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["role", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "alert", "alert-warning"], ["role", "button", 1, "btn", "btn-info", "me-2", 3, "click"], ["role", "button", 1, "btn", "btn-warning", 3, "click"], [1, "fw-bold", "text-wrap", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["autofocus", "", 3, "type", "value", "blur", 4, "ngIf"], [3, "innerHTML"], ["autofocus", "", 3, "blur", "type", "value"], ["class", "btn btn-outline-primary icon-only", "role", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["role", "button", 1, "btn", "btn-outline-primary", "icon-only", 3, "click"], [3, "icon"], ["role", "button", 1, "btn", "btn-outline-warning", "icon-only", 3, "click"]], template: function DataProcessorComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.NgIf, i3.PopoverDirective, i4.ExpandableCardComponent, i4.SearchBoxWidgetComponent, i5.FaIconComponent, i6.DatatableComponent, i7.LogMonitorComponent] }); }
};
DataProcessorComponent = __decorate([
    supportOperationsDecorator
], DataProcessorComponent);
export { DataProcessorComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataProcessorComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-processor', template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\" *ngIf=\"editable\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Update\">\n                <button class=\"btn btn-success\" role=\"button\" *ngIf=\"settings.canCreate\"\n                        (click)=\"startAdd()\" [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>\n                    Add\n                </button>\n                <button class=\"btn btn-danger\" role=\"button\" *ngIf=\"settings.canDelete\"\n                        (click)=\"rmAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faTrash\" class=\"me-1\"></fa-icon>\n                    Delete\n                </button>\n            </div>\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Reset\">\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset = true;\"\n                        [popover]=\"confirmResetTmpl\" triggers=\"\" [isOpen]=\"isConfirmReset\"\n                        container=\"body\" popoverTitle=\"Warning\"\n                        [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faUndo\" class=\"me-1\"></fa-icon>\n                    Reset\n                </button>\n            </div>\n            <ng-template #confirmResetTmpl>\n                <div class=\"alert alert-warning\">\n                    This operation will discard all changes and cannot be undo. Are you sure to continue?\n                </div>\n                <div>\n                    <button class=\"btn btn-info me-2\" role=\"button\" (click)=\"isConfirmReset = false;\">\n                        <fa-icon [icon]=\"faTimes\" class=\"me-1\"></fa-icon>\n                        Cancel\n                    </button>\n                    <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset=false;reset();\">\n                        <fa-icon [icon]=\"faExclamationTriangle\" class=\"me-1\"></fa-icon>\n                        Confirm\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Operation logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"Logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n\n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"false\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #editActionHeader>\n            <span>\n                Actions\n            </span>\n        </ng-template>\n\n        <ng-template #editActionCell let-rowIndex=\"rowIndex\">\n            <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"startEdit(rowIndex)\"\n                    *ngIf=\"!backup[rowIndex]; else otherActionTmpl\">\n                <fa-icon [icon]=\"faEdit\"></fa-icon>\n            </button>\n            <ng-template #otherActionTmpl>\n                <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"confirmEditAsync(rowIndex)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                </button>\n                <button class=\"btn btn-outline-warning icon-only\" role=\"button\" (click)=\"cancelEdit(rowIndex)\">\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\n                </button>\n            </ng-template>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.NgxNotyImpl }], { initData: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataProcessorComponent, { className: "DataProcessorComponent", filePath: "lib\\data-processor\\data-processor.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcm9jZXNzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvZGF0YS10cmFuc3BvcnQvc3JjL2xpYi9kYXRhLXByb2Nlc3Nvci9kYXRhLXByb2Nlc3Nvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHJvY2Vzc29yL2RhdGEtcHJvY2Vzc29yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBOEIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd2SSxPQUFPLEVBQUUsWUFBWSxFQUF5RCxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RLLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGckIsa0NBQzRFO0lBQXBFLDRMQUFTLGlCQUFVLEtBQUM7SUFDeEIsOEJBQWdEO0lBQ2hELHFCQUNKO0lBQUEsaUJBQVM7OztJQUhvQiwwRUFBOEM7SUFDOUQsY0FBZTtJQUFmLG9DQUFlOzs7O0lBRzVCLGtDQUM4RDtJQUF0RCw0TEFBUyxnQkFBUyxLQUFDO0lBQ3ZCLDhCQUFpRDtJQUNqRCx3QkFDSjtJQUFBLGlCQUFTOzs7SUFIbUIsc0RBQWlDO0lBQ2hELGNBQWdCO0lBQWhCLHFDQUFnQjs7OztJQWM3QiwrQkFBaUM7SUFDN0IsdUdBQ0o7SUFBQSxpQkFBTTtJQUVG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ZUFBdUI7WUFJdkIsQUFEQSxBQUhBLHlDQUF1QixrQkFHTixlQUNIO1lBTUMsY0FBb0I7WUFDcEIsQUFEQSxrQ0FBb0IsZ0JBQ0w7WUFPdEMsZUFBYTtZQVViLEFBREEsQUFEQSxBQURBLEFBREEsQUFGQSxBQUZBLEFBREEsQUFEQSwrQkFBYSx3QkFDTSxvQ0FDWSxvQkFFWix1QkFFRCxvQkFDQywwQkFDRSw2Q0FDbUIsOEJBQ1g7OztBRDdENUIsc0JBQXNCO0lBTmxDLDBCQUEwQjtHQU1kLHNCQUFzQixDQXNMbEM7O2lGQXRMWSxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxxQkFBcUI7NENBT3RCLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0ksVUFBVTtrQkFBbkIsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFFbUMsU0FBUztrQkFBbEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ0UsU0FBUztrQkFBbEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBRVMsb0JBQW9CO2tCQUFwRSxTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNDLGtCQUFrQjtrQkFBakUsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDSCxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tGQWJoQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFDaGVjaywgZmFFZGl0LCBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUsIGZhUGx1cywgZmFTZWFyY2gsIGZhVGltZXMsIGZhVHJhc2gsIGZhVW5kbyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOZ3hOb3R5SW1wbCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XG5pbXBvcnQgeyBnZXRJbnB1dFR5cGUsIElSb3dEYXRhVHlwZSwgSVRhYmxlQ29sdW1uU3BlYywgSVRhYmxlRGF0YUNoYW5nZUV2ZW50LCBOZ3hEYXRhdGFibGVMb2NhbERhdGEsIHN1cHBvcnRPcGVyYXRpb25zRGVjb3JhdG9yIH0gZnJvbSAnQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBMb2dNZXNzYWdlIH0gZnJvbSAnbmd4LWxvZy1tb25pdG9yJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQHN1cHBvcnRPcGVyYXRpb25zRGVjb3JhdG9yXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZGF0YS1wcm9jZXNzb3InLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXByb2Nlc3Nvci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0YS1wcm9jZXNzb3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFQcm9jZXNzb3JDb21wb25lbnQgZXh0ZW5kcyBOZ3hEYXRhdGFibGVMb2NhbERhdGE8SVJvd0RhdGFUeXBlPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpbml0RGF0YTogSVJvd0RhdGFUeXBlW10gPSBbXTtcbiAgICBASW5wdXQoKSBjb2x1bW5OYW1lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIEBPdXRwdXQoKSBkYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJVGFibGVEYXRhQ2hhbmdlRXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG9uUmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdzZWFyY2hCb3gnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hCb3g6IFNlYXJjaEJveFdpZGdldENvbXBvbmVudDtcbiAgICBAVmlld0NoaWxkKCdkYXRhdGFibGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkYXRhdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcblxuICAgIEBWaWV3Q2hpbGQoXCJlZGl0QWN0aW9uSGVhZGVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIGVkaXRBY3Rpb25IZWFkZXJUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBWaWV3Q2hpbGQoXCJlZGl0QWN0aW9uQ2VsbCBcIiwgeyBzdGF0aWM6IHRydWUgfSkgZWRpdEFjdGlvbkNlbGxUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBWaWV3Q2hpbGQoXCJpbnB1dENlbGwgXCIsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0Q2VsbFRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICAvLyBTdXBwb3J0IG9wZXJhdGlvbnMgb3ZlciBkYXRhXG4gICAgZmFFZGl0ID0gZmFFZGl0O1xuICAgIGZhVHJhc2ggPSBmYVRyYXNoO1xuICAgIGZhQ2hlY2sgPSBmYUNoZWNrO1xuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuICAgIGZhUGx1cyA9IGZhUGx1cztcbiAgICBmYVVuZG8gPSBmYVVuZG87XG4gICAgZmFFeGNsYW1hdGlvblRyaWFuZ2xlID0gZmFFeGNsYW1hdGlvblRyaWFuZ2xlO1xuICAgIGZhU2VhcmNoID0gZmFTZWFyY2g7XG5cbiAgICBpc0NvbmZpcm1SZXNldCA9IGZhbHNlO1xuICAgIC8vIFVzZWQgdG8ga2VlcCB0aGUgb3JpZ2luYWwgcm93cyBcbiAgICBvcmlnaW5hbFJvd3M6IElSb3dEYXRhVHlwZVtdID0gW107XG5cbiAgICBzaG93TG9ncyA9IGZhbHNlO1xuICAgIGxvZ1N0cmVhbSA9IG5ldyBSZXBsYXlTdWJqZWN0PExvZ01lc3NhZ2U+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbm90eTogTmd4Tm90eUltcGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgZWRpdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzID8gKHRoaXMuc2V0dGluZ3MuY2FuQ3JlYXRlIHx8IHRoaXMuc2V0dGluZ3MuY2FuRGVsZXRlIHx8IHRoaXMuc2V0dGluZ3MuY2FuVXBkYXRlKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncywgeyBwYWdlU2l6ZTogMTAsIGNhbkNyZWF0ZTogdHJ1ZSwgY2FuVXBkYXRlOiB0cnVlLCBjYW5EZWxldGU6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLnNldHRpbmdzLnBhZ2VTaXplO1xuXG4gICAgICAgIHRoaXMuYnVpbGRDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5pbml0RGF0YSAmJiAhY2hhbmdlcy5pbml0RGF0YS5maXJzdENoYW5nZSAmJiBjaGFuZ2VzLmluaXREYXRhLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZENvbHVtbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8vIFN0YXJ0cyBhIG5ldyByb3VuZCBvZiBzZWFyY2hcbiAgICAvL1xuICAgIC8vIFRoaXMgb3BlcmF0aW9uIGNhdXNlcyBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBraWNrT2ZmU2VhcmNoKCkge1xuICAgICAgICBjb25zdCBrID0gdGhpcy5zZWFyY2hCb3guZWZmZWN0aXZlS2V5d29yZDtcbiAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMub3JpZ2luYWxSb3dzLmZpbHRlcihlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgIT0gJ2lkJyAmJiBlbGVtLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gZWxlbVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgdzogc3RyaW5nID0gdi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5vcmlnaW5hbFJvd3M7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJ1aWxkQ29sdW1ucygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuaW5pdERhdGEgfHwgdGhpcy5pbml0RGF0YS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uU3BlYz4gPSBbXTtcbiAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkF1dG9SZXNpemU6IGZhbHNlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVyQ2hlY2tib3hhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2hlY2tib3hhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ0FjdGlvbnMnLFxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkF1dG9SZXNpemU6IGZhbHNlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6IHRoaXMuZWRpdEFjdGlvbkhlYWRlclRtcGwsXG4gICAgICAgICAgICBjZWxsVGVtcGxhdGU6IHRoaXMuZWRpdEFjdGlvbkNlbGxUbXBsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0Um93ID0gdGhpcy5pbml0RGF0YVswXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmNvbHVtbk5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjOiBJVGFibGVDb2x1bW5TcGVjID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY29sdW1uTmFtZXNbcHJvcF0sXG4gICAgICAgICAgICAgICAgcHJvcDogcHJvcCxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTUwLFxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZ2V0SW5wdXRUeXBlKGZpcnN0Um93W3Byb3BdKSxcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IHRoaXMuaW5wdXRDZWxsVG1wbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICAgIHRoaXMub3JpZ2luYWxSb3dzID0gWy4uLnRoaXMuaW5pdERhdGFdO1xuICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5pbml0RGF0YV07XG4gICAgICAgIHRoaXMuc2VhcmNoQm94ICYmIHRoaXMuc2VhcmNoQm94LnNlYXJjaENvbnRyb2wgJiYgdGhpcy5zZWFyY2hCb3gucmVzZXRLZXl3b3JkKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5vblJlc2V0LmVtaXQoKTtcblxuICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIHR5cGU6ICdJTkZPJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGByZXNldCByZWNvcmQocylgXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNob3dMb2dzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHB1Ymxpc2goZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQub3AgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICAgIC8vIEFkZCBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIGFzIElSb3dEYXRhVHlwZTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxSb3dzLnB1c2goZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJTkZPJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgQ3JlYXRlZCBhIG5ldyByZWNvcmRgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvZ3MgPSB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQub3AgPT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgICAgIC8vIEFkZCBvciBlZGl0XG4gICAgICAgICAgICAvLyBXZSBkbyBub3QgbmVlZCB0byBwcmVzZXJ2ZSB2YWx1ZSBzZW1hbnRpY3M7XG4gICAgICAgICAgICAvLyB0aGVyZWZvcmUsIHdlIGNhbiBkbyBpbi1wbGFjZSBlZGl0aW5nLlxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgSVJvd0RhdGFUeXBlO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm9yaWdpbmFsUm93cy5maW5kSW5kZXgoYSA9PiBhLmlkID09IGRhdGEuaWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3Muc3BsaWNlKGluZGV4LCAxLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgVXBkYXRlZCBhIHJlY29yZGBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2dzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5vcCA9PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyBJUm93RGF0YVR5cGVbXTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxSb3dzID0gdGhpcy5vcmlnaW5hbFJvd3MuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhZGF0YS5zb21lKGIgPT4gYi5pZCA9PSBhLmlkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYHJlbW92ZWQgJHtkYXRhLmxlbmd0aH0gcmVjb3JkKHMpYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2dzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RpZnkgY2xpZW50IFxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdChPYmplY3QuYXNzaWduKHt9LCBldmVudCwgeyByb3dzOiB0aGlzLm9yaWdpbmFsUm93cyB9KSk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyIG1iLTRcIiByb2xlPVwidG9vbGJhclwiIGFyaWEtbGFiZWw9XCJPcGVyYXRpb25zXCIgKm5nSWY9XCJlZGl0YWJsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtZS0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlVwZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCJzZXR0aW5ncy5jYW5DcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInN0YXJ0QWRkKClcIiBbZGlzYWJsZWRdPVwic2VsZWN0ZWQubGVuZ3RoID4gMCB8fCBhbnlFZGl0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhUGx1c1wiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwic2V0dGluZ3MuY2FuRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJybUFzeW5jKClcIiBbZGlzYWJsZWRdPVwic2VsZWN0ZWQubGVuZ3RoIDw9IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFUcmFzaFwiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbWUtMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJSZXNldFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImlzQ29uZmlybVJlc2V0ID0gdHJ1ZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BvcG92ZXJdPVwiY29uZmlybVJlc2V0VG1wbFwiIHRyaWdnZXJzPVwiXCIgW2lzT3Blbl09XCJpc0NvbmZpcm1SZXNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCIgcG9wb3ZlclRpdGxlPVwiV2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwic2VsZWN0ZWQubGVuZ3RoID4gMCB8fCBhbnlFZGl0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhVW5kb1wiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjb25maXJtUmVzZXRUbXBsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgb3BlcmF0aW9uIHdpbGwgZGlzY2FyZCBhbGwgY2hhbmdlcyBhbmQgY2Fubm90IGJlIHVuZG8uIEFyZSB5b3Ugc3VyZSB0byBjb250aW51ZT9cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIG1lLTJcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImlzQ29uZmlybVJlc2V0ID0gZmFsc2U7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVRpbWVzXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJpc0NvbmZpcm1SZXNldD1mYWxzZTtyZXNldCgpO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFFeGNsYW1hdGlvblRyaWFuZ2xlXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb2xwLWJzLWV4cGFuZGFibGUtY2FyZCBbaXNDb2xsYXBzZWRdPVwiIXNob3dMb2dzXCI+XG4gICAgICAgICAgICA8c3BhbiB0aXRsZT5cbiAgICAgICAgICAgICAgICBPcGVyYXRpb24gbG9nc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGJvZHk+XG4gICAgICAgICAgICAgICAgPGxvZy1tb25pdG9yXG4gICAgICAgICAgICAgICAgICAgIFtsb2dTdHJlYW1dPVwibG9nU3RyZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb2dzXCJcbiAgICAgICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBbaWNvbnNdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDwvbG9nLW1vbml0b3I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wb2xwLWJzLWV4cGFuZGFibGUtY2FyZD5cblxuICAgICAgICA8cG9scC1icy1zZWFyY2gtYm94LXdpZGdldCAjc2VhcmNoQm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWJvdW5jZVRpbWVdPVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbkxlbmd0aF09XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNsYXNzPVwiYm9yZGVyIHJvdW5kZWQgbXktMiBweS00IHB4LTQgYmctbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25TZWFyY2gpPVwia2lja09mZlNlYXJjaCgpXCI+XG4gICAgICAgIDwvcG9scC1icy1zZWFyY2gtYm94LXdpZGdldD5cblxuICAgICAgICA8bmd4LWRhdGF0YWJsZSAjZGF0YXRhYmxlXG4gICAgICAgICAgICBjbGFzcz1cImJvb3RzdHJhcFwiXG4gICAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVwiQ29sdW1uTW9kZS5mb3JjZVwiXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiNTBcIlxuICAgICAgICAgICAgcm93SGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBbbGltaXRdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgW3Njcm9sbGJhckhdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgW3NlbGVjdGlvblR5cGVdPVwiU2VsZWN0aW9uVHlwZS5jaGVja2JveFwiXG4gICAgICAgICAgICBbc2VsZWN0QWxsUm93c09uUGFnZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGVIZWFkZXIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImNvbHVtbi5uYW1lXCIgY2xhc3M9XCJmdy1ib2xkIHRleHQtd3JhcFwiPjwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaW5wdXRDZWxsIGxldC1yb3dJbmRleD1cInJvd0luZGV4XCIgbGV0LXJvdz1cInJvd1wiIGxldC1jb2x1bW49XCJjb2x1bW5cIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZWRpdGluZ1tyb3dJbmRleCArICctJyArIGNvbHVtbi5wcm9wXVwiIFtpbm5lckhUTUxdPVwidmFsdWVcIj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBjb2x1bW4ucHJvcF1cIlxuICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbHVtbi5pbnB1dFR5cGVcIlxuICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgKGJsdXIpPVwidXBkYXRlVmFsdWUoJGV2ZW50LCBjb2x1bW4ucHJvcCwgcm93SW5kZXgpXCJcbiAgICAgICAgICAgIC8+ICAgICAgICAgICAgXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNlZGl0QWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgQWN0aW9uc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZWRpdEFjdGlvbkNlbGwgbGV0LXJvd0luZGV4PVwicm93SW5kZXhcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBpY29uLW9ubHlcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInN0YXJ0RWRpdChyb3dJbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFiYWNrdXBbcm93SW5kZXhdOyBlbHNlIG90aGVyQWN0aW9uVG1wbFwiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhRWRpdFwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNvdGhlckFjdGlvblRtcGw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGljb24tb25seVwiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwiY29uZmlybUVkaXRBc3luYyhyb3dJbmRleClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFDaGVja1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgaWNvbi1vbmx5XCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJjYW5jZWxFZGl0KHJvd0luZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVRpbWVzXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19