import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { faArrowCircleUp, faArrowUp, faCheck, faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { getInputType, NgxDatatableLocalData, sliceArray, supportOperationsDecorator } from '@polpware/ngx-reactive-table';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-noty";
import * as i2 from "@angular/common";
import * as i3 from "@polpware/bs-components";
import * as i4 from "@fortawesome/angular-fontawesome";
import * as i5 from "@swimlane/ngx-datatable";
import * as i6 from "ngx-log-monitor";
const _c0 = ["searchBox4DataPub"];
const _c1 = ["datatable"];
const _c2 = ["stateHeader"];
const _c3 = ["stateCell"];
const _c4 = ["titleCell"];
const _c5 = ["inputCell"];
function DataPublicationComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const column_r10 = ctx.column;
    i0.ɵɵproperty("innerHTML", column_r10.name, i0.ɵɵsanitizeHtml);
} }
function DataPublicationComponent_ng_template_24_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 23);
} if (rf & 2) {
    const value_r14 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("innerHTML", value_r14, i0.ɵɵsanitizeHtml);
} }
function DataPublicationComponent_ng_template_24_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 24);
    i0.ɵɵlistener("blur", function DataPublicationComponent_ng_template_24_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); const column_r13 = ctx_r19.column; const rowIndex_r11 = ctx_r19.rowIndex; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.updateValue($event, column_r13.prop, rowIndex_r11)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext();
    const column_r13 = ctx_r21.column;
    const value_r14 = ctx_r21.value;
    i0.ɵɵproperty("type", column_r13.inputType)("value", value_r14);
} }
function DataPublicationComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataPublicationComponent_ng_template_24_span_0_Template, 1, 1, "span", 21);
    i0.ɵɵtemplate(1, DataPublicationComponent_ng_template_24_input_1_Template, 1, 2, "input", 22);
} if (rf & 2) {
    const rowIndex_r11 = ctx.rowIndex;
    const column_r13 = ctx.column;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r5.editing[rowIndex_r11 + "-" + column_r13.prop]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.editing[rowIndex_r11 + "-" + column_r13.prop]);
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
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r24.faHourglass);
} }
function DataPublicationComponent_ng_template_28_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵelement(1, "fa-icon", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r25.faHourglass)("spin", true);
} }
function DataPublicationComponent_ng_template_28_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵelement(1, "fa-icon", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r26.faCheck);
} }
function DataPublicationComponent_ng_template_28_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "fa-icon", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r27.faTimes);
} }
function DataPublicationComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 26);
    i0.ɵɵtemplate(1, DataPublicationComponent_ng_template_28_span_1_Template, 2, 1, "span", 27);
    i0.ɵɵtemplate(2, DataPublicationComponent_ng_template_28_span_2_Template, 2, 2, "span", 27);
    i0.ɵɵtemplate(3, DataPublicationComponent_ng_template_28_span_3_Template, 2, 1, "span", 28);
    i0.ɵɵtemplate(4, DataPublicationComponent_ng_template_28_span_4_Template, 2, 1, "span", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r23 = ctx.value;
    i0.ɵɵproperty("ngSwitch", value_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "waiting");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "working");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "success");
    i0.ɵɵadvance(1);
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
};
DataPublicationComponent.ɵfac = function DataPublicationComponent_Factory(t) { return new (t || DataPublicationComponent)(i0.ɵɵdirectiveInject(i1.NgxNotyImpl)); };
DataPublicationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataPublicationComponent, selectors: [["polp-data-publication"]], viewQuery: function DataPublicationComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
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
    } }, inputs: { initData: "initData", columnNames: "columnNames", uploadAsync: "uploadAsync" }, outputs: { onImport: "onImport", afterImport: "afterImport" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 30, vars: 21, consts: [[1, "card"], [1, "card-body"], ["role", "toolbar", "aria-label", "Operations", 1, "btn-toolbar", "mb-4"], ["role", "group", "aria-label", "Upload", 1, "btn-group", "me-2"], ["role", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "me-1", 3, "icon"], ["role", "button", 1, "btn", "btn-info", 3, "disabled", "click"], ["role", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], [3, "isCollapsed"], ["title", ""], ["body", "", 1, "container"], ["theme", "dark", "title", "logs", 3, "logStream", "animated", "icons"], ["formClass", "border rounded my-2 py-4 px-4 bg-light", 3, "debounceTime", "minLength", "onSearch"], ["searchBox4DataPub", ""], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH", "selected", "selectionType", "selectAllRowsOnPage", "select"], ["datatable", ""], ["titleHeader", ""], ["inputCell", ""], ["stateHeader", ""], ["stateCell", ""], [1, "fw-bold", "text-wrap", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["autofocus", "", 3, "type", "value", "blur", 4, "ngIf"], [3, "innerHTML"], ["autofocus", "", 3, "type", "value", "blur"], [1, "fw-bold", "text-warp"], [3, "ngSwitch"], ["class", "text-info", 4, "ngSwitchCase"], ["class", "text-success", 4, "ngSwitchCase"], ["class", "text-danger", 4, "ngSwitchCase"], [1, "text-info"], [3, "icon"], [3, "icon", "spin"], [1, "text-success"], [1, "text-danger"]], template: function DataPublicationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
        i0.ɵɵlistener("click", function DataPublicationComponent_Template_button_click_4_listener() { return ctx.uploadSelectedAsync(); });
        i0.ɵɵelement(5, "fa-icon", 5);
        i0.ɵɵtext(6, " Upload selected ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function DataPublicationComponent_Template_button_click_7_listener() { return ctx.uploadAllAsync(); });
        i0.ɵɵelement(8, "fa-icon", 5);
        i0.ɵɵtext(9, " Upload all ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 7);
        i0.ɵɵlistener("click", function DataPublicationComponent_Template_button_click_10_listener() { return ctx.uploadAllAsync(); });
        i0.ɵɵelement(11, "fa-icon", 5);
        i0.ɵɵtext(12, " Upload filtered ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "polp-bs-expandable-card", 8)(14, "span", 9);
        i0.ɵɵtext(15, " Data import logs ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 10);
        i0.ɵɵelement(17, "log-monitor", 11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "polp-bs-search-box-widget", 12, 13);
        i0.ɵɵlistener("onSearch", function DataPublicationComponent_Template_polp_bs_search_box_widget_onSearch_18_listener() { return ctx.kickOffSearch(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "ngx-datatable", 14, 15);
        i0.ɵɵlistener("select", function DataPublicationComponent_Template_ngx_datatable_select_20_listener($event) { return ctx.onSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(22, DataPublicationComponent_ng_template_22_Template, 1, 1, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(24, DataPublicationComponent_ng_template_24_Template, 2, 2, "ng-template", null, 17, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(26, DataPublicationComponent_ng_template_26_Template, 2, 0, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(28, DataPublicationComponent_ng_template_28_Template, 5, 5, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.selected.length <= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx.faArrowUp);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.anyKeyword);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx.faArrowCircleUp);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.anyKeyword);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx.faArrowCircleUp);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("isCollapsed", !ctx.showLogs);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("logStream", ctx.logStream)("animated", true)("icons", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("debounceTime", 200)("minLength", 2);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("limit", ctx.pageSize)("scrollbarH", true)("selected", ctx.selected)("selectionType", ctx.SelectionType.checkbox)("selectAllRowsOnPage", true);
    } }, dependencies: [i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i3.ExpandableCardComponent, i3.SearchBoxWidgetComponent, i4.FaIconComponent, i5.DatatableComponent, i6.LogMonitorComponent] });
DataPublicationComponent = __decorate([
    supportOperationsDecorator
], DataPublicationComponent);
export { DataPublicationComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataPublicationComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-publication', template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Upload\">\n                <button class=\"btn btn-success\" role=\"button\" (click)=\"uploadSelectedAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faArrowUp\" class=\"me-1\"></fa-icon>\n                    Upload selected\n                </button>\n                <button class=\"btn btn-info\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload all\n                </button>\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"!anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload filtered\n                </button>\n            </div>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Data import logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox4DataPub\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n                    \n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"true\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #stateHeader let-column=\"column\">\n            <span class=\"fw-bold text-warp\">\n                State\n            </span>\n        </ng-template>\n\n        <ng-template #stateCell let-value=\"value\">\n            <ng-container [ngSwitch]=\"value\">\n                <span class=\"text-info\" *ngSwitchCase=\"'waiting'\">\n                    <fa-icon [icon]=\"faHourglass\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-info\" *ngSwitchCase=\"'working'\">\n                    <fa-icon [icon]=\"faHourglass\" [spin]=\"true\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-success\" *ngSwitchCase=\"'success'\">\n                    <fa-icon [icon]=\"faCheck\" >\n                    </fa-icon>\n                </span>\n                <span class=\"text-danger\" *ngSwitchCase=\"'failure'\">\n                    <fa-icon [icon]=\"faTimes\">\n                    </fa-icon>\n                </span>\n            </ng-container>\n        </ng-template>\n    </div>\n</div>\n\n" }]
    }], function () { return [{ type: i1.NgxNotyImpl }]; }, { initData: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHVibGljYXRpb24vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHVibGljYXRpb24vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHOUcsT0FBTyxFQUFFLFlBQVksRUFBeUQscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHbEwsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDb0R6QiwwQkFBK0Q7OztJQUExRCw4REFBeUI7OztJQUk5QiwyQkFDTzs7O0lBRDhDLHdEQUFtQjs7OztJQUV4RSxpQ0FLRTtJQURLLHlTQUFRLGVBQUEsMERBQTBDLENBQUEsSUFBQztJQUoxRCxpQkFLRTs7Ozs7SUFISywyQ0FBeUIsb0JBQUE7OztJQUpoQywyRkFDTztJQUNQLDZGQUtFOzs7OztJQVBLLDRFQUE0QztJQUczQyxlQUEyQztJQUEzQywyRUFBMkM7OztJQVFuRCxnQ0FBZ0M7SUFDNUIsdUJBQ0o7SUFBQSxpQkFBTzs7O0lBS0gsZ0NBQWtEO0lBQzlDLDhCQUNVO0lBQ2QsaUJBQU87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MUQsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFTixTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFSSxlQUFlO2tCQUExRCxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDQyxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhQXJyb3dDaXJjbGVVcCwgZmFBcnJvd1VwLCBmYUNoZWNrLCBmYUhvdXJnbGFzcywgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOZ3hOb3R5SW1wbCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtbm90eSc7XG5pbXBvcnQgeyBnZXRJbnB1dFR5cGUsIElSb3dEYXRhVHlwZSwgSVRhYmxlQ29sdW1uU3BlYywgSVRhYmxlRGF0YUNoYW5nZUV2ZW50LCBOZ3hEYXRhdGFibGVMb2NhbERhdGEsIHNsaWNlQXJyYXksIHN1cHBvcnRPcGVyYXRpb25zRGVjb3JhdG9yIH0gZnJvbSAnQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5pbXBvcnQgeyBMb2dNZXNzYWdlIH0gZnJvbSAnbmd4LWxvZy1tb25pdG9yJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIElQdWJSb3dUeXBlIGV4dGVuZHMgSVJvd0RhdGFUeXBlIHtcbiAgICBfc3RhdGU6ICd3YWl0aW5nJyB8ICd3b3JraW5nJyB8ICdzdWNjZXNzJyB8ICdmYWlsdXJlJztcbn1cblxuQHN1cHBvcnRPcGVyYXRpb25zRGVjb3JhdG9yXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZGF0YS1wdWJsaWNhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtcHVibGljYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGEtcHVibGljYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFQdWJsaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIE5neERhdGF0YWJsZUxvY2FsRGF0YTxJUHViUm93VHlwZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGluaXREYXRhOiBJUm93RGF0YVR5cGVbXSA9IFtdO1xuICAgIEBJbnB1dCgpIGNvbHVtbk5hbWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgQElucHV0KCkgdXBsb2FkQXN5bmM6IChkYXRhOiBBcnJheTxJUm93RGF0YVR5cGU+KSA9PiBQcm9taXNlPHtcbiAgICAgICAgZmFpbHVyZXM6IEFycmF5PElSb3dEYXRhVHlwZT47XG4gICAgICAgIGVycm9yczogQXJyYXk8c3RyaW5nPjtcbiAgICB9PiA9IChkYXRhOiBBcnJheTxJUm93RGF0YVR5cGU+KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGZhaWx1cmVzOiBbXSxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBAT3V0cHV0KCkgb25JbXBvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgQE91dHB1dCgpIGFmdGVySW1wb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN1Y2Nlc3M6IG51bWJlcjsgZmFpbHVyZTogbnVtYmVyIH0+KCk7XG5cbiAgICBmYUNoZWNrID0gZmFDaGVjaztcbiAgICBmYVRpbWVzID0gZmFUaW1lcztcbiAgICBmYUhvdXJnbGFzcyA9IGZhSG91cmdsYXNzO1xuICAgIGZhQXJyb3dDaXJjbGVVcCA9IGZhQXJyb3dDaXJjbGVVcDtcbiAgICBmYUFycm93VXAgPSBmYUFycm93VXA7XG5cbiAgICAvLyBVc2VkIHRvIGtlZXAgdGhlIG9yaWdpbmFsIHJvd3MgXG4gICAgb3JpZ2luYWxSb3dzOiBJUHViUm93VHlwZVtdID0gW107XG5cbiAgICBzaG93TG9ncyA9IGZhbHNlO1xuICAgIGxvZ1N0cmVhbSA9IG5ldyBSZXBsYXlTdWJqZWN0PExvZ01lc3NhZ2U+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdzZWFyY2hCb3g0RGF0YVB1YicsIHsgc3RhdGljOiB0cnVlIH0pIHNlYXJjaEJveDogU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnZGF0YXRhYmxlJywgeyBzdGF0aWM6IHRydWUgfSkgZGF0YXRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKFwic3RhdGVIZWFkZXJcIiwgeyBzdGF0aWM6IHRydWUgfSkgc3RhdGVIZWFkZXJUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBWaWV3Q2hpbGQoXCJzdGF0ZUNlbGwgXCIsIHsgc3RhdGljOiB0cnVlIH0pIHN0YXRlQ2VsbFRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQFZpZXdDaGlsZChcInRpdGxlQ2VsbCBcIiwgeyBzdGF0aWM6IHRydWUgfSkgdGl0bGVDZWxsVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAVmlld0NoaWxkKFwiaW5wdXRDZWxsIFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dENlbGxUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgcHJpdmF0ZSBfaW1wb3J0U3RhdDogeyBzdWNjZXNzOiBudW1iZXI7IGZhaWx1cmU6IG51bWJlciB9ID0geyBzdWNjZXNzOiAwLCBmYWlsdXJlOiAwIH07XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbm90eTogTmd4Tm90eUltcGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYW55S2V5d29yZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoQm94ID8gdGhpcy5zZWFyY2hCb3guZWZmZWN0aXZlS2V5d29yZCA6ICcnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncywgeyBwYWdlU2l6ZTogMTAsIGNhbkNyZWF0ZTogdHJ1ZSwgY2FuRGVsZXRlOiB0cnVlLCBjYW5VcGRhdGU6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLnNldHRpbmdzLnBhZ2VTaXplO1xuICAgICAgICB0aGlzLmJ1aWxkQ29sdW1ucygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8vIFN0YXJ0cyBhIG5ldyByb3VuZCBvZiBzZWFyY2hcbiAgICAvL1xuICAgIC8vIFRoaXMgb3BlcmF0aW9uIGNhdXNlcyBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBraWNrT2ZmU2VhcmNoKCkge1xuICAgICAgICBjb25zdCBrID0gdGhpcy5zZWFyY2hCb3guZWZmZWN0aXZlS2V5d29yZDtcbiAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMub3JpZ2luYWxSb3dzLmZpbHRlcihlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgIT0gJ2lkJyAmJiBlbGVtLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gZWxlbVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgdzogc3RyaW5nID0gdi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcuaW5jbHVkZXMoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5vcmlnaW5hbFJvd3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWlsZENvbHVtbnMoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmluaXREYXRhIHx8IHRoaXMuaW5pdERhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtblNwZWM+ID0gW107XG4gICAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjYW5BdXRvUmVzaXplOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlckNoZWNrYm94YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoZWNrYm94YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICdTdGF0ZScsXG4gICAgICAgICAgICBwcm9wOiAnX3N0YXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiA4MCxcbiAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkF1dG9SZXNpemU6IGZhbHNlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6IHRoaXMuc3RhdGVIZWFkZXJUbXBsLFxuICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiB0aGlzLnN0YXRlQ2VsbFRtcGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmlyc3RSb3cgPSB0aGlzLmluaXREYXRhWzBdO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuY29sdW1uTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGM6IElUYWJsZUNvbHVtblNwZWMgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5jb2x1bW5OYW1lc1twcm9wXSxcbiAgICAgICAgICAgICAgICBwcm9wOiBwcm9wLFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBnZXRJbnB1dFR5cGUoZmlyc3RSb3dbcHJvcF0pLFxuICAgICAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiB0aGlzLnRpdGxlQ2VsbFRtcGwsXG4gICAgICAgICAgICAgICAgY2VsbFRlbXBsYXRlOiB0aGlzLmlucHV0Q2VsbFRtcGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goYyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUm93cyA9IHRoaXMuaW5pdERhdGEubWFwKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBfc3RhdGU6ICd3YWl0aW5nJyB9LCBhKSBhcyBJUHViUm93VHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMub3JpZ2luYWxSb3dzO1xuICAgICAgICB0aGlzLnNlYXJjaEJveCAmJiB0aGlzLnNlYXJjaEJveC5zZWFyY2hDb250cm9sICYmIHRoaXMuc2VhcmNoQm94LnJlc2V0S2V5d29yZChmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBwdWJsaXNoKGV2ZW50OiBJVGFibGVEYXRhQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm9wID09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICAvLyBBZGQgXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyBJUHViUm93VHlwZTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxSb3dzLnB1c2goZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQub3AgPT0gJ3VwZGF0ZScpIHtcbiAgICAgICAgICAgIC8vIEFkZCBvciBlZGl0XG4gICAgICAgICAgICAvLyBXZSBkbyBub3QgbmVlZCB0byBwcmVzZXJ2ZSB2YWx1ZSBzZW1hbnRpY3M7XG4gICAgICAgICAgICAvLyB0aGVyZWZvcmUsIHdlIGNhbiBkbyBpbi1wbGFjZSBlZGl0aW5nLlxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgSVB1YlJvd1R5cGU7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMub3JpZ2luYWxSb3dzLmZpbmRJbmRleChhID0+IGEuaWQgPT0gZGF0YS5pZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsUm93cy5zcGxpY2UoaW5kZXgsIDEsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lm9wID09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIGFzIElQdWJSb3dUeXBlW107XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsUm93cyA9IHRoaXMub3JpZ2luYWxSb3dzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWRhdGEuc29tZShiID0+IGIuaWQgPT0gYS5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHVwbG9hZFNlbGVjdGVkQXN5bmMoKSB7XG4gICAgICAgIC8vIEVtaXQgYSBtZXNzYWdlIFxuICAgICAgICB0aGlzLm9uSW1wb3J0LmVtaXQoKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IHRoaXMuc2VsZWN0ZWQuZmlsdGVyKGEgPT4gYS5fc3RhdGUgIT0gJ3N1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICBtZXNzYWdlOiBgU3RhcnQgdG8gaW1wb3J0IHRoZSBzZWxlY3RlZCByZWNvcmRzICgke3RvZG8ubGVuZ3RofSlgXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBub0Vycm9yID0gYXdhaXQgdGhpcy5pbnZva2VVcGxvYWRBc3luYyh0b2RvKTtcblxuICAgICAgICBpZiAobm9FcnJvcikge1xuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgdXBsb2FkZWQgdGhlIHNlbGVjdGVkIHJlY29yZHMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dMb2dzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgd29yayBmb3IgZmlsdGVyIHNldCBvciBhbGwuXG4gICAgYXN5bmMgdXBsb2FkQWxsQXN5bmMoKSB7XG4gICAgICAgIC8vIEVtaXQgYSBtZXNzYWdlIFxuICAgICAgICB0aGlzLm9uSW1wb3J0LmVtaXQoKTtcbiAgICAgICAgLy8gUGFnZSBieSBwYWdlXG4gICAgICAgIGNvbnN0IGludGVybmFsUm93cyA9IHRoaXMuZGF0YXRhYmxlLl9pbnRlcm5hbFJvd3M7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoaW50ZXJuYWxSb3dzLmxlbmd0aCAvIHRoaXMucGFnZVNpemUpO1xuICAgICAgICBsZXQgbm9FcnJvciA9IHRydWU7XG4gICAgICAgIC8vIERpc2FibGUgc29ydGluZyBidXQgcHJlc2VydmUgdGhlIGN1cnJlbnQgb3JkZXJcbiAgICAgICAgdGhpcy5kYXRhdGFibGUuc29ydHMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhdGFibGUucm93cyA9IGludGVybmFsUm93cztcblxuICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIHR5cGU6ICdJTkZPJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdGFydCB0byBpbXBvcnQgYWxsIHJlY29yZHNgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IHBJbmRleCA9IDA7IChub0Vycm9yICYmIHBJbmRleCA8IHRvdGFsUGFnZXMpOyBwSW5kZXgrKykge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEltcG9ydCAke3BJbmRleCArIDF9IHBhZ2VgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhdGFibGUuX29mZnNldCA9IHBJbmRleDtcbiAgICAgICAgICAgIC8vIE9uZSBwYWdlIFxuICAgICAgICAgICAgbGV0IHRvZG8gPSBzbGljZUFycmF5KGludGVybmFsUm93cywgcEluZGV4ICogdGhpcy5wYWdlU2l6ZSwgKHBJbmRleCArIDEpICogdGhpcy5wYWdlU2l6ZSk7XG4gICAgICAgICAgICB0b2RvID0gdG9kby5maWx0ZXIoYSA9PiBhLl9zdGF0ZSAhPSAnc3VjY2VzcycpO1xuICAgICAgICAgICAgbm9FcnJvciA9IGF3YWl0IHRoaXMuaW52b2tlVXBsb2FkQXN5bmModG9kbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9FcnJvcikge1xuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgdXBsb2FkZWQgYWxsIHJlY29yZHMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd0xvZ3MgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFdlIGV4cGVjdCB0aGF0IHRoZSB1bmRlcmx5aW5nIHVwbG9hZCBtZXRob2QgaXMgd29ya2luZyBpbiBhIHRyYW5zYWN0aW9uYWwgd2F5LlxuICAgIC8vIEkuZS4sIGVpdGhlciBhbGwgdGhlIGRhdGEgaXMgdXBsb2FkZWQgb3Igbm9uZSBvZiB0aGVtIGlzIHVwbG9hZGVkLlxuICAgIGFzeW5jIGludm9rZVVwbG9hZEFzeW5jKGRhdGE6IEFycmF5PElQdWJSb3dUeXBlPikge1xuICAgICAgICBsZXQgbm9FcnJvciA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZWxlbSA9PiBlbGVtLl9zdGF0ZSA9ICd3b3JraW5nJyk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHZhbHVlIHNlbWFudGljc1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGUgXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIHRoZSBmaXJzdCBwYWdlIGFuZCB0aGVuIG1vdmUgb25cbiAgICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMudXBsb2FkQXN5bmMoZGF0YSk7XG4gICAgICAgICAgICAvLyB0b2RvOiBFcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW0gPT4gZWxlbS5fc3RhdGUgPSAnc3VjY2VzcycpO1xuICAgICAgICAgICAgcmV0LmZhaWx1cmVzLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcSA9IGRhdGEuZmluZCh4ID0+IHguaWQgPT0gcC5pZCk7XG4gICAgICAgICAgICAgICAgcSAmJiAocS5fc3RhdGUgPSAnZmFpbHVyZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBGb3JjZSB0byBjaGFuZ2UgICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzXTtcblxuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBJbXBvcnRlZCAke2RhdGEubGVuZ3RoIC0gcmV0LmZhaWx1cmVzLmxlbmd0aH0gcmVjb3Jkc2BcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmV0LmZhaWx1cmVzICYmIHJldC5mYWlsdXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBub0Vycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdFUlInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIGltcG9ydCAke3JldC5mYWlsdXJlcy5sZW5ndGh9IHJlY29yZHNgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXQuZXJyb3JzICYmIHJldC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0LmVycm9ycy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdFUlInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEVycm9yOiAke2V9YFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faW1wb3J0U3RhdC5zdWNjZXNzICs9IChkYXRhLmxlbmd0aCAtIHJldC5mYWlsdXJlcy5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5faW1wb3J0U3RhdC5mYWlsdXJlICs9IHJldC5mYWlsdXJlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJJbXBvcnQuZW1pdCh0aGlzLl9pbXBvcnRTdGF0KTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBJbiBwbGFjZSBlZGl0aW5nXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZWxlbSA9PiBlbGVtLl9zdGF0ZSA9ICdmYWlsdXJlJyk7XG4gICAgICAgICAgICAvLyBGb3JjZSB0byBjaGFuZ2UgXG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzXTtcbiAgICAgICAgICAgIG5vRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9FcnJvcjtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvb2xiYXIgbWItNFwiIHJvbGU9XCJ0b29sYmFyXCIgYXJpYS1sYWJlbD1cIk9wZXJhdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgbWUtMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJVcGxvYWRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWRTZWxlY3RlZEFzeW5jKClcIiBbZGlzYWJsZWRdPVwic2VsZWN0ZWQubGVuZ3RoIDw9IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFBcnJvd1VwXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICBVcGxvYWQgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWRBbGxBc3luYygpXCIgW2Rpc2FibGVkXT1cImFueUtleXdvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFBcnJvd0NpcmNsZVVwXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICBVcGxvYWQgYWxsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkQWxsQXN5bmMoKVwiIFtkaXNhYmxlZF09XCIhYW55S2V5d29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93Q2lyY2xlVXBcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZCBmaWx0ZXJlZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb2xwLWJzLWV4cGFuZGFibGUtY2FyZCBbaXNDb2xsYXBzZWRdPVwiIXNob3dMb2dzXCI+XG4gICAgICAgICAgICA8c3BhbiB0aXRsZT5cbiAgICAgICAgICAgICAgICBEYXRhIGltcG9ydCBsb2dzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgYm9keT5cbiAgICAgICAgICAgICAgICA8bG9nLW1vbml0b3JcbiAgICAgICAgICAgICAgICAgICAgW2xvZ1N0cmVhbV09XCJsb2dTdHJlYW1cIlxuICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImxvZ3NcIlxuICAgICAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtpY29uc109XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPC9sb2ctbW9uaXRvcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvbHAtYnMtZXhwYW5kYWJsZS1jYXJkPlxuXG4gICAgICAgIDxwb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0ICNzZWFyY2hCb3g0RGF0YVB1YlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVib3VuY2VUaW1lXT1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW5MZW5ndGhdPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1DbGFzcz1cImJvcmRlciByb3VuZGVkIG15LTIgcHktNCBweC00IGJnLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uU2VhcmNoKT1cImtpY2tPZmZTZWFyY2goKVwiPlxuICAgICAgICA8L3BvbHAtYnMtc2VhcmNoLWJveC13aWRnZXQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICA8bmd4LWRhdGF0YWJsZSAjZGF0YXRhYmxlXG4gICAgICAgICAgICBjbGFzcz1cImJvb3RzdHJhcFwiXG4gICAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVwiQ29sdW1uTW9kZS5mb3JjZVwiXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiNTBcIlxuICAgICAgICAgICAgcm93SGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBbbGltaXRdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgW3Njcm9sbGJhckhdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgW3NlbGVjdGlvblR5cGVdPVwiU2VsZWN0aW9uVHlwZS5jaGVja2JveFwiXG4gICAgICAgICAgICBbc2VsZWN0QWxsUm93c09uUGFnZV09XCJ0cnVlXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoJGV2ZW50KVwiPlxuICAgICAgICA8L25neC1kYXRhdGFibGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZUhlYWRlciBsZXQtY29sdW1uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwiY29sdW1uLm5hbWVcIiBjbGFzcz1cImZ3LWJvbGQgdGV4dC13cmFwXCI+PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNpbnB1dENlbGwgbGV0LXJvd0luZGV4PVwicm93SW5kZXhcIiBsZXQtcm93PVwicm93XCIgbGV0LWNvbHVtbj1cImNvbHVtblwiIGxldC12YWx1ZT1cInZhbHVlXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgY29sdW1uLnByb3BdXCIgW2lubmVySFRNTF09XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWRpdGluZ1tyb3dJbmRleCArICctJyArIGNvbHVtbi5wcm9wXVwiXG4gICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY29sdW1uLmlucHV0VHlwZVwiXG4gICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsIGNvbHVtbi5wcm9wLCByb3dJbmRleClcIlxuICAgICAgICAgICAgLz4gICAgICAgICAgICBcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3N0YXRlSGVhZGVyIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZCB0ZXh0LXdhcnBcIj5cbiAgICAgICAgICAgICAgICBTdGF0ZVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc3RhdGVDZWxsIGxldC12YWx1ZT1cInZhbHVlXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1pbmZvXCIgKm5nU3dpdGNoQ2FzZT1cIid3YWl0aW5nJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUhvdXJnbGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1pbmZvXCIgKm5nU3dpdGNoQ2FzZT1cIid3b3JraW5nJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUhvdXJnbGFzc1wiIFtzcGluXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFDaGVja1wiID5cbiAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgKm5nU3dpdGNoQ2FzZT1cIidmYWlsdXJlJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVRpbWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG4iXX0=