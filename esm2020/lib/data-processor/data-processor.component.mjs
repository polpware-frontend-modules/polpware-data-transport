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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcm9jZXNzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvZGF0YS10cmFuc3BvcnQvc3JjL2xpYi9kYXRhLXByb2Nlc3Nvci9kYXRhLXByb2Nlc3Nvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHJvY2Vzc29yL2RhdGEtcHJvY2Vzc29yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBOEIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd2SSxPQUFPLEVBQUUsWUFBWSxFQUF5RCxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RLLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGckIsa0NBQzRFO0lBQXBFLCtLQUFTLGVBQUEsa0JBQVUsQ0FBQSxJQUFDO0lBQ3hCLDhCQUFnRDtJQUNoRCxxQkFDSjtJQUFBLGlCQUFTOzs7SUFIb0IsNEVBQThDO0lBQzlELGVBQWU7SUFBZixxQ0FBZTs7OztJQUc1QixrQ0FDOEQ7SUFBdEQsK0tBQVMsZUFBQSxpQkFBUyxDQUFBLElBQUM7SUFDdkIsOEJBQWlEO0lBQ2pELHdCQUNKO0lBQUEsaUJBQVM7OztJQUhtQix1REFBaUM7SUFDaEQsZUFBZ0I7SUFBaEIsc0NBQWdCOzs7O0lBYzdCLCtCQUFpQztJQUM3Qix1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MEI7R0FNZCxzQkFBc0IsQ0FzTGxDO1NBdExZLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0kscUJBQXFCOzhEQU90QixRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBRW1DLFNBQVM7a0JBQWxELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNFLFNBQVM7a0JBQWxELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVTLG9CQUFvQjtrQkFBcEUsU0FBUzttQkFBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDQyxrQkFBa0I7a0JBQWpFLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ0gsYUFBYTtrQkFBdkQsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhQ2hlY2ssIGZhRWRpdCwgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLCBmYVBsdXMsIGZhU2VhcmNoLCBmYVRpbWVzLCBmYVRyYXNoLCBmYVVuZG8gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTmd4Tm90eUltcGwgfSBmcm9tICdAcG9scHdhcmUvbmd4LW5vdHknO1xuaW1wb3J0IHsgZ2V0SW5wdXRUeXBlLCBJUm93RGF0YVR5cGUsIElUYWJsZUNvbHVtblNwZWMsIElUYWJsZURhdGFDaGFuZ2VFdmVudCwgTmd4RGF0YXRhYmxlTG9jYWxEYXRhLCBzdXBwb3J0T3BlcmF0aW9uc0RlY29yYXRvciB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgTG9nTWVzc2FnZSB9IGZyb20gJ25neC1sb2ctbW9uaXRvcic7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBzdXBwb3J0T3BlcmF0aW9uc0RlY29yYXRvclxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWRhdGEtcHJvY2Vzc29yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1wcm9jZXNzb3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGEtcHJvY2Vzc29yLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhUHJvY2Vzc29yQ29tcG9uZW50IGV4dGVuZHMgTmd4RGF0YXRhYmxlTG9jYWxEYXRhPElSb3dEYXRhVHlwZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW5pdERhdGE6IElSb3dEYXRhVHlwZVtdID0gW107XG4gICAgQElucHV0KCkgY29sdW1uTmFtZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBAT3V0cHV0KCkgZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVRhYmxlRGF0YUNoYW5nZUV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBvblJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoQm94JywgeyBzdGF0aWM6IHRydWUgfSkgc2VhcmNoQm94OiBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgnZGF0YXRhYmxlJywgeyBzdGF0aWM6IHRydWUgfSkgZGF0YXRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKFwiZWRpdEFjdGlvbkhlYWRlclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBlZGl0QWN0aW9uSGVhZGVyVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAVmlld0NoaWxkKFwiZWRpdEFjdGlvbkNlbGwgXCIsIHsgc3RhdGljOiB0cnVlIH0pIGVkaXRBY3Rpb25DZWxsVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAVmlld0NoaWxkKFwiaW5wdXRDZWxsIFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dENlbGxUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgLy8gU3VwcG9ydCBvcGVyYXRpb25zIG92ZXIgZGF0YVxuICAgIGZhRWRpdCA9IGZhRWRpdDtcbiAgICBmYVRyYXNoID0gZmFUcmFzaDtcbiAgICBmYUNoZWNrID0gZmFDaGVjaztcbiAgICBmYVRpbWVzID0gZmFUaW1lcztcbiAgICBmYVBsdXMgPSBmYVBsdXM7XG4gICAgZmFVbmRvID0gZmFVbmRvO1xuICAgIGZhRXhjbGFtYXRpb25UcmlhbmdsZSA9IGZhRXhjbGFtYXRpb25UcmlhbmdsZTtcbiAgICBmYVNlYXJjaCA9IGZhU2VhcmNoO1xuXG4gICAgaXNDb25maXJtUmVzZXQgPSBmYWxzZTtcbiAgICAvLyBVc2VkIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHJvd3MgXG4gICAgb3JpZ2luYWxSb3dzOiBJUm93RGF0YVR5cGVbXSA9IFtdO1xuXG4gICAgc2hvd0xvZ3MgPSBmYWxzZTtcbiAgICBsb2dTdHJlYW0gPSBuZXcgUmVwbGF5U3ViamVjdDxMb2dNZXNzYWdlPigpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG5vdHk6IE5neE5vdHlJbXBsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGVkaXRhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncyA/ICh0aGlzLnNldHRpbmdzLmNhbkNyZWF0ZSB8fCB0aGlzLnNldHRpbmdzLmNhbkRlbGV0ZSB8fCB0aGlzLnNldHRpbmdzLmNhblVwZGF0ZSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHsgcGFnZVNpemU6IDEwLCBjYW5DcmVhdGU6IHRydWUsIGNhblVwZGF0ZTogdHJ1ZSwgY2FuRGVsZXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5zZXR0aW5ncy5wYWdlU2l6ZTtcblxuICAgICAgICB0aGlzLmJ1aWxkQ29sdW1ucygpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaW5pdERhdGEgJiYgIWNoYW5nZXMuaW5pdERhdGEuZmlyc3RDaGFuZ2UgJiYgY2hhbmdlcy5pbml0RGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRDb2x1bW5zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvLyBTdGFydHMgYSBuZXcgcm91bmQgb2Ygc2VhcmNoXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBjYXVzZXMgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMga2lja09mZlNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgayA9IHRoaXMuc2VhcmNoQm94LmVmZmVjdGl2ZUtleXdvcmQ7XG4gICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cy5maWx0ZXIoZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wICE9ICdpZCcgJiYgZWxlbS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IGVsZW1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHc6IHN0cmluZyA9IHYudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3LmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMub3JpZ2luYWxSb3dzO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBidWlsZENvbHVtbnMoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmluaXREYXRhIHx8IHRoaXMuaW5pdERhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtblNwZWM+ID0gW107XG4gICAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjYW5BdXRvUmVzaXplOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlckNoZWNrYm94YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoZWNrYm94YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICdBY3Rpb25zJyxcbiAgICAgICAgICAgIHdpZHRoOiAxMjAsXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjYW5BdXRvUmVzaXplOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiB0aGlzLmVkaXRBY3Rpb25IZWFkZXJUbXBsLFxuICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiB0aGlzLmVkaXRBY3Rpb25DZWxsVG1wbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmaXJzdFJvdyA9IHRoaXMuaW5pdERhdGFbMF07XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5jb2x1bW5OYW1lcykge1xuICAgICAgICAgICAgY29uc3QgYzogSVRhYmxlQ29sdW1uU3BlYyA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNvbHVtbk5hbWVzW3Byb3BdLFxuICAgICAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGdldElucHV0VHlwZShmaXJzdFJvd1twcm9wXSksXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiB0aGlzLmlucHV0Q2VsbFRtcGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goYyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUm93cyA9IFsuLi50aGlzLmluaXREYXRhXTtcbiAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMuaW5pdERhdGFdO1xuICAgICAgICB0aGlzLnNlYXJjaEJveCAmJiB0aGlzLnNlYXJjaEJveC5zZWFyY2hDb250cm9sICYmIHRoaXMuc2VhcmNoQm94LnJlc2V0S2V5d29yZChmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMub25SZXNldC5lbWl0KCk7XG5cbiAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICBtZXNzYWdlOiBgcmVzZXQgcmVjb3JkKHMpYFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zaG93TG9ncyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBwdWJsaXNoKGV2ZW50OiBJVGFibGVEYXRhQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm9wID09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICAvLyBBZGQgXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyBJUm93RGF0YVR5cGU7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsUm93cy5wdXNoKGRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYENyZWF0ZWQgYSBuZXcgcmVjb3JkYFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2dzID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lm9wID09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgICAvLyBBZGQgb3IgZWRpdFxuICAgICAgICAgICAgLy8gV2UgZG8gbm90IG5lZWQgdG8gcHJlc2VydmUgdmFsdWUgc2VtYW50aWNzO1xuICAgICAgICAgICAgLy8gdGhlcmVmb3JlLCB3ZSBjYW4gZG8gaW4tcGxhY2UgZWRpdGluZy5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIGFzIElSb3dEYXRhVHlwZTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcmlnaW5hbFJvd3MuZmluZEluZGV4KGEgPT4gYS5pZCA9PSBkYXRhLmlkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxSb3dzLnNwbGljZShpbmRleCwgMSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdJTkZPJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFVwZGF0ZWQgYSByZWNvcmRgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TG9ncyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQub3AgPT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgSVJvd0RhdGFUeXBlW107XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsUm93cyA9IHRoaXMub3JpZ2luYWxSb3dzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWRhdGEuc29tZShiID0+IGIuaWQgPT0gYS5pZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGByZW1vdmVkICR7ZGF0YS5sZW5ndGh9IHJlY29yZChzKWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zaG93TG9ncyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90aWZ5IGNsaWVudCBcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQoT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQsIHsgcm93czogdGhpcy5vcmlnaW5hbFJvd3MgfSkpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhciBtYi00XCIgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiT3BlcmF0aW9uc1wiICpuZ0lmPVwiZWRpdGFibGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbWUtMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJVcGRhdGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwic2V0dGluZ3MuY2FuQ3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzdGFydEFkZCgpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCA+IDAgfHwgYW55RWRpdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVBsdXNcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cInNldHRpbmdzLmNhbkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicm1Bc3luYygpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCA8PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhVHJhc2hcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1lLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiUmVzZXRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJpc0NvbmZpcm1SZXNldCA9IHRydWU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwb3BvdmVyXT1cImNvbmZpcm1SZXNldFRtcGxcIiB0cmlnZ2Vycz1cIlwiIFtpc09wZW5dPVwiaXNDb25maXJtUmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyPVwiYm9keVwiIHBvcG92ZXJUaXRsZT1cIldhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCA+IDAgfHwgYW55RWRpdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVVuZG9cIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29uZmlybVJlc2V0VG1wbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBUaGlzIG9wZXJhdGlvbiB3aWxsIGRpc2NhcmQgYWxsIGNoYW5nZXMgYW5kIGNhbm5vdCBiZSB1bmRvLiBBcmUgeW91IHN1cmUgdG8gY29udGludWU/XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mbyBtZS0yXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJpc0NvbmZpcm1SZXNldCA9IGZhbHNlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFUaW1lc1wiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwiaXNDb25maXJtUmVzZXQ9ZmFsc2U7cmVzZXQoKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhRXhjbGFtYXRpb25UcmlhbmdsZVwiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cG9scC1icy1leHBhbmRhYmxlLWNhcmQgW2lzQ29sbGFwc2VkXT1cIiFzaG93TG9nc1wiPlxuICAgICAgICAgICAgPHNwYW4gdGl0bGU+XG4gICAgICAgICAgICAgICAgT3BlcmF0aW9uIGxvZ3NcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBib2R5PlxuICAgICAgICAgICAgICAgIDxsb2ctbW9uaXRvclxuICAgICAgICAgICAgICAgICAgICBbbG9nU3RyZWFtXT1cImxvZ1N0cmVhbVwiXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9nc1wiXG4gICAgICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2ljb25zXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8L2xvZy1tb25pdG9yPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9scC1icy1leHBhbmRhYmxlLWNhcmQ+XG5cbiAgICAgICAgPHBvbHAtYnMtc2VhcmNoLWJveC13aWRnZXQgI3NlYXJjaEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVib3VuY2VUaW1lXT1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW5MZW5ndGhdPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1DbGFzcz1cImJvcmRlciByb3VuZGVkIG15LTIgcHktNCBweC00IGJnLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uU2VhcmNoKT1cImtpY2tPZmZTZWFyY2goKVwiPlxuICAgICAgICA8L3BvbHAtYnMtc2VhcmNoLWJveC13aWRnZXQ+XG5cbiAgICAgICAgPG5neC1kYXRhdGFibGUgI2RhdGF0YWJsZVxuICAgICAgICAgICAgY2xhc3M9XCJib290c3RyYXBcIlxuICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cIkNvbHVtbk1vZGUuZm9yY2VcIlxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cIjUwXCJcbiAgICAgICAgICAgIHJvd0hlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgW2xpbWl0XT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgIFtzY3JvbGxiYXJIXT1cInRydWVcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgIFtzZWxlY3Rpb25UeXBlXT1cIlNlbGVjdGlvblR5cGUuY2hlY2tib3hcIlxuICAgICAgICAgICAgW3NlbGVjdEFsbFJvd3NPblBhZ2VdPVwiZmFsc2VcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCI+XG4gICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlSGVhZGVyIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJjb2x1bW4ubmFtZVwiIGNsYXNzPVwiZnctYm9sZCB0ZXh0LXdyYXBcIj48L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI2lucHV0Q2VsbCBsZXQtcm93SW5kZXg9XCJyb3dJbmRleFwiIGxldC1yb3c9XCJyb3dcIiBsZXQtY29sdW1uPVwiY29sdW1uXCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBjb2x1bW4ucHJvcF1cIiBbaW5uZXJIVE1MXT1cInZhbHVlXCI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgY29sdW1uLnByb3BdXCJcbiAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJjb2x1bW4uaW5wdXRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIChibHVyKT1cInVwZGF0ZVZhbHVlKCRldmVudCwgY29sdW1uLnByb3AsIHJvd0luZGV4KVwiXG4gICAgICAgICAgICAvPiAgICAgICAgICAgIFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZWRpdEFjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIEFjdGlvbnNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI2VkaXRBY3Rpb25DZWxsIGxldC1yb3dJbmRleD1cInJvd0luZGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgaWNvbi1vbmx5XCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJzdGFydEVkaXQocm93SW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhYmFja3VwW3Jvd0luZGV4XTsgZWxzZSBvdGhlckFjdGlvblRtcGxcIj5cbiAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUVkaXRcIj48L2ZhLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjb3RoZXJBY3Rpb25UbXBsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBpY29uLW9ubHlcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNvbmZpcm1FZGl0QXN5bmMocm93SW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQ2hlY2tcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nIGljb24tb25seVwiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2FuY2VsRWRpdChyb3dJbmRleClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFUaW1lc1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==