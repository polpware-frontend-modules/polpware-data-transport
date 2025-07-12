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
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r15.startAdd()); });
    i0.ɵɵelement(1, "fa-icon", 21);
    i0.ɵɵtext(2, " Add ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r11.selected.length > 0 || ctx_r11.anyEditing);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r11.faPlus);
} }
function DataProcessorComponent_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.rmAsync()); });
    i0.ɵɵelement(1, "fa-icon", 21);
    i0.ɵɵtext(2, " Delete ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r12.selected.length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r12.faTrash);
} }
function DataProcessorComponent_div_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1, " This operation will discard all changes and cannot be undo. Are you sure to continue? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "button", 26);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_ng_template_8_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.isConfirmReset = false); });
    i0.ɵɵelement(4, "fa-icon", 21);
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 27);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_ng_template_8_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(2); ctx_r21.isConfirmReset = false; return i0.ɵɵresetView(ctx_r21.reset()); });
    i0.ɵɵelement(7, "fa-icon", 21);
    i0.ɵɵtext(8, " Confirm ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("icon", ctx_r14.faTimes);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", ctx_r14.faExclamationTriangle);
} }
function DataProcessorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16);
    i0.ɵɵtemplate(2, DataProcessorComponent_div_2_button_2_Template, 3, 2, "button", 17);
    i0.ɵɵtemplate(3, DataProcessorComponent_div_2_button_3_Template, 3, 2, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 19)(5, "button", 20);
    i0.ɵɵlistener("click", function DataProcessorComponent_div_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.isConfirmReset = true); });
    i0.ɵɵelement(6, "fa-icon", 21);
    i0.ɵɵtext(7, " Reset ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, DataProcessorComponent_div_2_ng_template_8_Template, 9, 2, "ng-template", null, 22, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r13 = i0.ɵɵreference(9);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.settings.canCreate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.settings.canDelete);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("popover", _r13)("isOpen", ctx_r0.isConfirmReset)("disabled", ctx_r0.selected.length > 0 || ctx_r0.anyEditing);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r0.faUndo);
} }
function DataProcessorComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 28);
} if (rf & 2) {
    const column_r24 = ctx.column;
    i0.ɵɵproperty("innerHTML", column_r24.name, i0.ɵɵsanitizeHtml);
} }
function DataProcessorComponent_ng_template_14_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 31);
} if (rf & 2) {
    const value_r28 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("innerHTML", value_r28, i0.ɵɵsanitizeHtml);
} }
function DataProcessorComponent_ng_template_14_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 32);
    i0.ɵɵlistener("blur", function DataProcessorComponent_ng_template_14_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); const column_r27 = ctx_r33.column; const rowIndex_r25 = ctx_r33.rowIndex; const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.updateValue($event, column_r27.prop, rowIndex_r25)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext();
    const column_r27 = ctx_r35.column;
    const value_r28 = ctx_r35.value;
    i0.ɵɵproperty("type", column_r27.inputType)("value", value_r28);
} }
function DataProcessorComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataProcessorComponent_ng_template_14_span_0_Template, 1, 1, "span", 29);
    i0.ɵɵtemplate(1, DataProcessorComponent_ng_template_14_input_1_Template, 1, 2, "input", 30);
} if (rf & 2) {
    const rowIndex_r25 = ctx.rowIndex;
    const column_r27 = ctx.column;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r6.editing[rowIndex_r25 + "-" + column_r27.prop]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.editing[rowIndex_r25 + "-" + column_r27.prop]);
} }
function DataProcessorComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, " Actions ");
    i0.ɵɵelementEnd();
} }
function DataProcessorComponent_ng_template_18_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function DataProcessorComponent_ng_template_18_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); const rowIndex_r36 = i0.ɵɵnextContext().rowIndex; const ctx_r40 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r40.startEdit(rowIndex_r36)); });
    i0.ɵɵelement(1, "fa-icon", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r37.faEdit);
} }
function DataProcessorComponent_ng_template_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function DataProcessorComponent_ng_template_18_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const rowIndex_r36 = i0.ɵɵnextContext().rowIndex; const ctx_r43 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r43.confirmEditAsync(rowIndex_r36)); });
    i0.ɵɵelement(1, "fa-icon", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function DataProcessorComponent_ng_template_18_ng_template_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r45); const rowIndex_r36 = i0.ɵɵnextContext().rowIndex; const ctx_r46 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r46.cancelEdit(rowIndex_r36)); });
    i0.ɵɵelement(3, "fa-icon", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r39.faCheck);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r39.faTimes);
} }
function DataProcessorComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataProcessorComponent_ng_template_18_button_0_Template, 2, 1, "button", 33);
    i0.ɵɵtemplate(1, DataProcessorComponent_ng_template_18_ng_template_1_Template, 4, 2, "ng-template", null, 34, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const rowIndex_r36 = ctx.rowIndex;
    const _r38 = i0.ɵɵreference(2);
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r10.backup[rowIndex_r36])("ngIfElse", _r38);
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
};
DataProcessorComponent.ɵfac = function DataProcessorComponent_Factory(t) { return new (t || DataProcessorComponent)(i0.ɵɵdirectiveInject(i1.NgxNotyImpl)); };
DataProcessorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataProcessorComponent, selectors: [["polp-data-processor"]], viewQuery: function DataProcessorComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, inputs: { initData: "initData", columnNames: "columnNames" }, outputs: { dataChange: "dataChange", onReset: "onReset" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 20, vars: 16, consts: [[1, "card"], [1, "card-body"], ["class", "btn-toolbar mb-4", "role", "toolbar", "aria-label", "Operations", 4, "ngIf"], [3, "isCollapsed"], ["title", ""], ["body", "", 1, "container"], ["theme", "dark", "title", "Logs", 3, "logStream", "animated", "icons"], ["formClass", "border rounded my-2 py-4 px-4 bg-light", 3, "debounceTime", "minLength", "onSearch"], ["searchBox", ""], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH", "selected", "selectionType", "selectAllRowsOnPage", "select"], ["datatable", ""], ["titleHeader", ""], ["inputCell", ""], ["editActionHeader", ""], ["editActionCell", ""], ["role", "toolbar", "aria-label", "Operations", 1, "btn-toolbar", "mb-4"], ["role", "group", "aria-label", "Update", 1, "btn-group", "me-2"], ["class", "btn btn-success", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-danger", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["role", "group", "aria-label", "Reset", 1, "btn-group", "me-2"], ["role", "button", "triggers", "", "container", "body", "popoverTitle", "Warning", 1, "btn", "btn-warning", 3, "popover", "isOpen", "disabled", "click"], [1, "me-1", 3, "icon"], ["confirmResetTmpl", ""], ["role", "button", 1, "btn", "btn-success", 3, "disabled", "click"], ["role", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "alert", "alert-warning"], ["role", "button", 1, "btn", "btn-info", "me-2", 3, "click"], ["role", "button", 1, "btn", "btn-warning", 3, "click"], [1, "fw-bold", "text-wrap", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["autofocus", "", 3, "type", "value", "blur", 4, "ngIf"], [3, "innerHTML"], ["autofocus", "", 3, "type", "value", "blur"], ["class", "btn btn-outline-primary icon-only", "role", "button", 3, "click", 4, "ngIf", "ngIfElse"], ["otherActionTmpl", ""], ["role", "button", 1, "btn", "btn-outline-primary", "icon-only", 3, "click"], [3, "icon"], ["role", "button", 1, "btn", "btn-outline-warning", "icon-only", 3, "click"]], template: function DataProcessorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, DataProcessorComponent_div_2_Template, 10, 6, "div", 2);
        i0.ɵɵelementStart(3, "polp-bs-expandable-card", 3)(4, "span", 4);
        i0.ɵɵtext(5, " Operation logs ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelement(7, "log-monitor", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "polp-bs-search-box-widget", 7, 8);
        i0.ɵɵlistener("onSearch", function DataProcessorComponent_Template_polp_bs_search_box_widget_onSearch_8_listener() { return ctx.kickOffSearch(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "ngx-datatable", 9, 10);
        i0.ɵɵlistener("select", function DataProcessorComponent_Template_ngx_datatable_select_10_listener($event) { return ctx.onSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, DataProcessorComponent_ng_template_12_Template, 1, 1, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, DataProcessorComponent_ng_template_14_Template, 2, 2, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(16, DataProcessorComponent_ng_template_16_Template, 2, 0, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(18, DataProcessorComponent_ng_template_18_Template, 3, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.editable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("isCollapsed", !ctx.showLogs);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("logStream", ctx.logStream)("animated", true)("icons", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("debounceTime", 200)("minLength", 2);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("limit", ctx.pageSize)("scrollbarH", true)("selected", ctx.selected)("selectionType", ctx.SelectionType.checkbox)("selectAllRowsOnPage", false);
    } }, dependencies: [i2.NgIf, i3.PopoverDirective, i4.ExpandableCardComponent, i4.SearchBoxWidgetComponent, i5.FaIconComponent, i6.DatatableComponent, i7.LogMonitorComponent] });
DataProcessorComponent = __decorate([
    supportOperationsDecorator
], DataProcessorComponent);
export { DataProcessorComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataProcessorComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-processor', template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\" *ngIf=\"editable\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Update\">\n                <button class=\"btn btn-success\" role=\"button\" *ngIf=\"settings.canCreate\"\n                        (click)=\"startAdd()\" [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-1\"></fa-icon>\n                    Add\n                </button>\n                <button class=\"btn btn-danger\" role=\"button\" *ngIf=\"settings.canDelete\"\n                        (click)=\"rmAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faTrash\" class=\"me-1\"></fa-icon>\n                    Delete\n                </button>\n            </div>\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Reset\">\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset = true;\"\n                        [popover]=\"confirmResetTmpl\" triggers=\"\" [isOpen]=\"isConfirmReset\"\n                        container=\"body\" popoverTitle=\"Warning\"\n                        [disabled]=\"selected.length > 0 || anyEditing\">\n                    <fa-icon [icon]=\"faUndo\" class=\"me-1\"></fa-icon>\n                    Reset\n                </button>\n            </div>\n            <ng-template #confirmResetTmpl>\n                <div class=\"alert alert-warning\">\n                    This operation will discard all changes and cannot be undo. Are you sure to continue?\n                </div>\n                <div>\n                    <button class=\"btn btn-info me-2\" role=\"button\" (click)=\"isConfirmReset = false;\">\n                        <fa-icon [icon]=\"faTimes\" class=\"me-1\"></fa-icon>\n                        Cancel\n                    </button>\n                    <button class=\"btn btn-warning\" role=\"button\" (click)=\"isConfirmReset=false;reset();\">\n                        <fa-icon [icon]=\"faExclamationTriangle\" class=\"me-1\"></fa-icon>\n                        Confirm\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Operation logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"Logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n\n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"false\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #editActionHeader>\n            <span>\n                Actions\n            </span>\n        </ng-template>\n\n        <ng-template #editActionCell let-rowIndex=\"rowIndex\">\n            <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"startEdit(rowIndex)\"\n                    *ngIf=\"!backup[rowIndex]; else otherActionTmpl\">\n                <fa-icon [icon]=\"faEdit\"></fa-icon>\n            </button>\n            <ng-template #otherActionTmpl>\n                <button class=\"btn btn-outline-primary icon-only\" role=\"button\" (click)=\"confirmEditAsync(rowIndex)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                </button>\n                <button class=\"btn btn-outline-warning icon-only\" role=\"button\" (click)=\"cancelEdit(rowIndex)\">\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\n                </button>\n            </ng-template>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.NgxNotyImpl }]; }, { initData: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcm9jZXNzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvZGF0YS10cmFuc3BvcnQvc3JjL2xpYi9kYXRhLXByb2Nlc3Nvci9kYXRhLXByb2Nlc3Nvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHJvY2Vzc29yL2RhdGEtcHJvY2Vzc29yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBOEIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd2SSxPQUFPLEVBQUUsWUFBWSxFQUF5RCxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RLLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGckIsa0NBQzRFO0lBQXBFLCtLQUFTLGVBQUEsa0JBQVUsQ0FBQSxJQUFDO0lBQ3hCLDhCQUFnRDtJQUNoRCxxQkFDSjtJQUFBLGlCQUFTOzs7SUFIb0IsNEVBQThDO0lBQzlELGVBQWU7SUFBZixxQ0FBZTs7OztJQUc1QixrQ0FDOEQ7SUFBdEQsK0tBQVMsZUFBQSxpQkFBUyxDQUFBLElBQUM7SUFDdkIsOEJBQWlEO0lBQ2pELHdCQUNKO0lBQUEsaUJBQVM7OztJQUhtQix1REFBaUM7SUFDaEQsZUFBZ0I7SUFBaEIsc0NBQWdCOzs7O0lBYzdCLCtCQUFpQztJQUM3Qix1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QTBCO0dBTWQsc0JBQXNCLENBc0xsQztTQXRMWSxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNJLHFCQUFxQjs4REFPdEIsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTTtZQUVtQyxTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFUyxvQkFBb0I7a0JBQXBFLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ0Msa0JBQWtCO2tCQUFqRSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNILGFBQWE7a0JBQXZELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUNoZWNrLCBmYUVkaXQsIGZhRXhjbGFtYXRpb25UcmlhbmdsZSwgZmFQbHVzLCBmYVNlYXJjaCwgZmFUaW1lcywgZmFUcmFzaCwgZmFVbmRvIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IFNlYXJjaEJveFdpZGdldENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9icy1jb21wb25lbnRzJztcbmltcG9ydCB7IE5neE5vdHlJbXBsIH0gZnJvbSAnQHBvbHB3YXJlL25neC1ub3R5JztcbmltcG9ydCB7IGdldElucHV0VHlwZSwgSVJvd0RhdGFUeXBlLCBJVGFibGVDb2x1bW5TcGVjLCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIE5neERhdGF0YWJsZUxvY2FsRGF0YSwgc3VwcG9ydE9wZXJhdGlvbnNEZWNvcmF0b3IgfSBmcm9tICdAcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IExvZ01lc3NhZ2UgfSBmcm9tICduZ3gtbG9nLW1vbml0b3InO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5Ac3VwcG9ydE9wZXJhdGlvbnNEZWNvcmF0b3JcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1kYXRhLXByb2Nlc3NvcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtcHJvY2Vzc29yLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRhLXByb2Nlc3Nvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVByb2Nlc3NvckNvbXBvbmVudCBleHRlbmRzIE5neERhdGF0YWJsZUxvY2FsRGF0YTxJUm93RGF0YVR5cGU+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGluaXREYXRhOiBJUm93RGF0YVR5cGVbXSA9IFtdO1xuICAgIEBJbnB1dCgpIGNvbHVtbk5hbWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgQE91dHB1dCgpIGRhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElUYWJsZURhdGFDaGFuZ2VFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgb25SZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaEJveCcsIHsgc3RhdGljOiB0cnVlIH0pIHNlYXJjaEJveDogU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoJ2RhdGF0YWJsZScsIHsgc3RhdGljOiB0cnVlIH0pIGRhdGF0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZChcImVkaXRBY3Rpb25IZWFkZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgZWRpdEFjdGlvbkhlYWRlclRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQFZpZXdDaGlsZChcImVkaXRBY3Rpb25DZWxsIFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlZGl0QWN0aW9uQ2VsbFRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQFZpZXdDaGlsZChcImlucHV0Q2VsbCBcIiwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRDZWxsVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIC8vIFN1cHBvcnQgb3BlcmF0aW9ucyBvdmVyIGRhdGFcbiAgICBmYUVkaXQgPSBmYUVkaXQ7XG4gICAgZmFUcmFzaCA9IGZhVHJhc2g7XG4gICAgZmFDaGVjayA9IGZhQ2hlY2s7XG4gICAgZmFUaW1lcyA9IGZhVGltZXM7XG4gICAgZmFQbHVzID0gZmFQbHVzO1xuICAgIGZhVW5kbyA9IGZhVW5kbztcbiAgICBmYUV4Y2xhbWF0aW9uVHJpYW5nbGUgPSBmYUV4Y2xhbWF0aW9uVHJpYW5nbGU7XG4gICAgZmFTZWFyY2ggPSBmYVNlYXJjaDtcblxuICAgIGlzQ29uZmlybVJlc2V0ID0gZmFsc2U7XG4gICAgLy8gVXNlZCB0byBrZWVwIHRoZSBvcmlnaW5hbCByb3dzIFxuICAgIG9yaWdpbmFsUm93czogSVJvd0RhdGFUeXBlW10gPSBbXTtcblxuICAgIHNob3dMb2dzID0gZmFsc2U7XG4gICAgbG9nU3RyZWFtID0gbmV3IFJlcGxheVN1YmplY3Q8TG9nTWVzc2FnZT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBub3R5OiBOZ3hOb3R5SW1wbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBlZGl0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MgPyAodGhpcy5zZXR0aW5ncy5jYW5DcmVhdGUgfHwgdGhpcy5zZXR0aW5ncy5jYW5EZWxldGUgfHwgdGhpcy5zZXR0aW5ncy5jYW5VcGRhdGUpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7IHBhZ2VTaXplOiAxMCwgY2FuQ3JlYXRlOiB0cnVlLCBjYW5VcGRhdGU6IHRydWUsIGNhbkRlbGV0ZTogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMuc2V0dGluZ3MucGFnZVNpemU7XG5cbiAgICAgICAgdGhpcy5idWlsZENvbHVtbnMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmluaXREYXRhICYmICFjaGFuZ2VzLmluaXREYXRhLmZpcnN0Q2hhbmdlICYmIGNoYW5nZXMuaW5pdERhdGEuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkQ29sdW1ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLy8gU3RhcnRzIGEgbmV3IHJvdW5kIG9mIHNlYXJjaFxuICAgIC8vXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gY2F1c2VzIG5ldyBuZXR3b3JrIHJlcXVlc3QuXG4gICAgcHVibGljIGtpY2tPZmZTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IGsgPSB0aGlzLnNlYXJjaEJveC5lZmZlY3RpdmVLZXl3b3JkO1xuICAgICAgICBpZiAoaykge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5vcmlnaW5hbFJvd3MuZmlsdGVyKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCAhPSAnaWQnICYmIGVsZW0uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBlbGVtW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3OiBzdHJpbmcgPSB2LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAody5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYnVpbGRDb2x1bW5zKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5pbml0RGF0YSB8fCB0aGlzLmluaXREYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5TcGVjPiA9IFtdO1xuICAgICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVzaXplYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJDaGVja2JveGFibGU6IHRydWUsXG4gICAgICAgICAgICBjaGVja2JveGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnQWN0aW9ucycsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVzaXplYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJUZW1wbGF0ZTogdGhpcy5lZGl0QWN0aW9uSGVhZGVyVG1wbCxcbiAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogdGhpcy5lZGl0QWN0aW9uQ2VsbFRtcGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RSb3cgPSB0aGlzLmluaXREYXRhWzBdO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuY29sdW1uTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGM6IElUYWJsZUNvbHVtblNwZWMgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5jb2x1bW5OYW1lc1twcm9wXSxcbiAgICAgICAgICAgICAgICBwcm9wOiBwcm9wLFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBnZXRJbnB1dFR5cGUoZmlyc3RSb3dbcHJvcF0pLFxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogdGhpcy5pbnB1dENlbGxUbXBsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3MgPSBbLi4udGhpcy5pbml0RGF0YV07XG4gICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLmluaXREYXRhXTtcbiAgICAgICAgdGhpcy5zZWFyY2hCb3ggJiYgdGhpcy5zZWFyY2hCb3guc2VhcmNoQ29udHJvbCAmJiB0aGlzLnNlYXJjaEJveC5yZXNldEtleXdvcmQoZmFsc2UpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLm9uUmVzZXQuZW1pdCgpO1xuXG4gICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgbWVzc2FnZTogYHJlc2V0IHJlY29yZChzKWBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2hvd0xvZ3MgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgcHVibGlzaChldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5vcCA9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgLy8gQWRkIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgSVJvd0RhdGFUeXBlO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3MucHVzaChkYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBDcmVhdGVkIGEgbmV3IHJlY29yZGBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zaG93TG9ncyA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5vcCA9PSAndXBkYXRlJykge1xuICAgICAgICAgICAgLy8gQWRkIG9yIGVkaXRcbiAgICAgICAgICAgIC8vIFdlIGRvIG5vdCBuZWVkIHRvIHByZXNlcnZlIHZhbHVlIHNlbWFudGljcztcbiAgICAgICAgICAgIC8vIHRoZXJlZm9yZSwgd2UgY2FuIGRvIGluLXBsYWNlIGVkaXRpbmcuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyBJUm93RGF0YVR5cGU7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMub3JpZ2luYWxSb3dzLmZpbmRJbmRleChhID0+IGEuaWQgPT0gZGF0YS5pZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsUm93cy5zcGxpY2UoaW5kZXgsIDEsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBVcGRhdGVkIGEgcmVjb3JkYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvZ3MgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lm9wID09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIGFzIElSb3dEYXRhVHlwZVtdO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFkYXRhLnNvbWUoYiA9PiBiLmlkID09IGEuaWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJTkZPJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgcmVtb3ZlZCAke2RhdGEubGVuZ3RofSByZWNvcmQocylgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvZ3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGlmeSBjbGllbnQgXG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7IHJvd3M6IHRoaXMub3JpZ2luYWxSb3dzIH0pKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvb2xiYXIgbWItNFwiIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIk9wZXJhdGlvbnNcIiAqbmdJZj1cImVkaXRhYmxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1lLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiVXBkYXRlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cInNldHRpbmdzLmNhbkNyZWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic3RhcnRBZGQoKVwiIFtkaXNhYmxlZF09XCJzZWxlY3RlZC5sZW5ndGggPiAwIHx8IGFueUVkaXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFQbHVzXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCJzZXR0aW5ncy5jYW5EZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInJtQXN5bmMoKVwiIFtkaXNhYmxlZF09XCJzZWxlY3RlZC5sZW5ndGggPD0gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVRyYXNoXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtZS0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlJlc2V0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwiaXNDb25maXJtUmVzZXQgPSB0cnVlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcG9wb3Zlcl09XCJjb25maXJtUmVzZXRUbXBsXCIgdHJpZ2dlcnM9XCJcIiBbaXNPcGVuXT1cImlzQ29uZmlybVJlc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIiBwb3BvdmVyVGl0bGU9XCJXYXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJzZWxlY3RlZC5sZW5ndGggPiAwIHx8IGFueUVkaXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFVbmRvXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NvbmZpcm1SZXNldFRtcGw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBvcGVyYXRpb24gd2lsbCBkaXNjYXJkIGFsbCBjaGFuZ2VzIGFuZCBjYW5ub3QgYmUgdW5kby4gQXJlIHlvdSBzdXJlIHRvIGNvbnRpbnVlP1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm8gbWUtMlwiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwiaXNDb25maXJtUmVzZXQgPSBmYWxzZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhVGltZXNcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImlzQ29uZmlybVJlc2V0PWZhbHNlO3Jlc2V0KCk7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUV4Y2xhbWF0aW9uVHJpYW5nbGVcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvbHAtYnMtZXhwYW5kYWJsZS1jYXJkIFtpc0NvbGxhcHNlZF09XCIhc2hvd0xvZ3NcIj5cbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPlxuICAgICAgICAgICAgICAgIE9wZXJhdGlvbiBsb2dzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgYm9keT5cbiAgICAgICAgICAgICAgICA8bG9nLW1vbml0b3JcbiAgICAgICAgICAgICAgICAgICAgW2xvZ1N0cmVhbV09XCJsb2dTdHJlYW1cIlxuICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ3NcIlxuICAgICAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtpY29uc109XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPC9sb2ctbW9uaXRvcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvbHAtYnMtZXhwYW5kYWJsZS1jYXJkPlxuXG4gICAgICAgIDxwb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0ICNzZWFyY2hCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RlYm91bmNlVGltZV09XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluTGVuZ3RoXT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ2xhc3M9XCJib3JkZXIgcm91bmRlZCBteS0yIHB5LTQgcHgtNCBiZy1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblNlYXJjaCk9XCJraWNrT2ZmU2VhcmNoKClcIj5cbiAgICAgICAgPC9wb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0PlxuXG4gICAgICAgIDxuZ3gtZGF0YXRhYmxlICNkYXRhdGFibGVcbiAgICAgICAgICAgIGNsYXNzPVwiYm9vdHN0cmFwXCJcbiAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICBbY29sdW1uTW9kZV09XCJDb2x1bW5Nb2RlLmZvcmNlXCJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XCI1MFwiXG4gICAgICAgICAgICByb3dIZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgIFtsaW1pdF09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICBbc2Nyb2xsYmFySF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICBbc2VsZWN0aW9uVHlwZV09XCJTZWxlY3Rpb25UeXBlLmNoZWNrYm94XCJcbiAgICAgICAgICAgIFtzZWxlY3RBbGxSb3dzT25QYWdlXT1cImZhbHNlXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiPlxuICAgICAgICA8L25neC1kYXRhdGFibGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZUhlYWRlciBsZXQtY29sdW1uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwiY29sdW1uLm5hbWVcIiBjbGFzcz1cImZ3LWJvbGQgdGV4dC13cmFwXCI+PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNpbnB1dENlbGwgbGV0LXJvd0luZGV4PVwicm93SW5kZXhcIiBsZXQtcm93PVwicm93XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiIGxldC12YWx1ZT1cInZhbHVlXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgY29sdW1uLnByb3BdXCIgW2lubmVySFRNTF09XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWRpdGluZ1tyb3dJbmRleCArICctJyArIGNvbHVtbi5wcm9wXVwiXG4gICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY29sdW1uLmlucHV0VHlwZVwiXG4gICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsIGNvbHVtbi5wcm9wLCByb3dJbmRleClcIlxuICAgICAgICAgICAgLz4gICAgICAgICAgICBcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI2VkaXRBY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBBY3Rpb25zXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNlZGl0QWN0aW9uQ2VsbCBsZXQtcm93SW5kZXg9XCJyb3dJbmRleFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGljb24tb25seVwiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwic3RhcnRFZGl0KHJvd0luZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWJhY2t1cFtyb3dJbmRleF07IGVsc2Ugb3RoZXJBY3Rpb25UbXBsXCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFFZGl0XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI290aGVyQWN0aW9uVG1wbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgaWNvbi1vbmx5XCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJjb25maXJtRWRpdEFzeW5jKHJvd0luZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUNoZWNrXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZyBpY29uLW9ubHlcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbEVkaXQocm93SW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhVGltZXNcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=