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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHVibGljYXRpb24vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHVibGljYXRpb24vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHOUcsT0FBTyxFQUFFLFlBQVksRUFBeUQscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHbEwsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDb0R6QiwwQkFBK0Q7OztJQUExRCw4REFBeUI7OztJQUk5QiwyQkFDTzs7O0lBRDhDLHdEQUFtQjs7OztJQUV4RSxpQ0FLRTtJQURLLHlTQUFRLGVBQUEsMERBQTBDLENBQUEsSUFBQztJQUoxRCxpQkFLRTs7Ozs7SUFISywyQ0FBeUIsb0JBQUE7OztJQUpoQywyRkFDTztJQUNQLDZGQUtFOzs7OztJQVBLLDRFQUE0QztJQUczQyxlQUEyQztJQUEzQywyRUFBMkM7OztJQVFuRCxnQ0FBZ0M7SUFDNUIsdUJBQ0o7SUFBQSxpQkFBTzs7O0lBS0gsZ0NBQWtEO0lBQzlDLDhCQUNVO0lBQ2QsaUJBQU87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RCxTQUFTO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVOLFNBQVM7a0JBQWxELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUVJLGVBQWU7a0JBQTFELFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNDLGFBQWE7a0JBQXZELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNFLGFBQWE7a0JBQXZELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNFLGFBQWE7a0JBQXZELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFBcnJvd0NpcmNsZVVwLCBmYUFycm93VXAsIGZhQ2hlY2ssIGZhSG91cmdsYXNzLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IFNlYXJjaEJveFdpZGdldENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9icy1jb21wb25lbnRzJztcbmltcG9ydCB7IE5neE5vdHlJbXBsIH0gZnJvbSAnQHBvbHB3YXJlL25neC1ub3R5JztcbmltcG9ydCB7IGdldElucHV0VHlwZSwgSVJvd0RhdGFUeXBlLCBJVGFibGVDb2x1bW5TcGVjLCBJVGFibGVEYXRhQ2hhbmdlRXZlbnQsIE5neERhdGF0YWJsZUxvY2FsRGF0YSwgc2xpY2VBcnJheSwgc3VwcG9ydE9wZXJhdGlvbnNEZWNvcmF0b3IgfSBmcm9tICdAcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcbmltcG9ydCB7IExvZ01lc3NhZ2UgfSBmcm9tICduZ3gtbG9nLW1vbml0b3InO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgSVB1YlJvd1R5cGUgZXh0ZW5kcyBJUm93RGF0YVR5cGUge1xuICAgIF9zdGF0ZTogJ3dhaXRpbmcnIHwgJ3dvcmtpbmcnIHwgJ3N1Y2Nlc3MnIHwgJ2ZhaWx1cmUnO1xufVxuXG5Ac3VwcG9ydE9wZXJhdGlvbnNEZWNvcmF0b3JcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1kYXRhLXB1YmxpY2F0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVB1YmxpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgTmd4RGF0YXRhYmxlTG9jYWxEYXRhPElQdWJSb3dUeXBlPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaW5pdERhdGE6IElSb3dEYXRhVHlwZVtdID0gW107XG4gICAgQElucHV0KCkgY29sdW1uTmFtZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBASW5wdXQoKSB1cGxvYWRBc3luYzogKGRhdGE6IEFycmF5PElSb3dEYXRhVHlwZT4pID0+IFByb21pc2U8e1xuICAgICAgICBmYWlsdXJlczogQXJyYXk8SVJvd0RhdGFUeXBlPjtcbiAgICAgICAgZXJyb3JzOiBBcnJheTxzdHJpbmc+O1xuICAgIH0+ID0gKGRhdGE6IEFycmF5PElSb3dEYXRhVHlwZT4pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgZmFpbHVyZXM6IFtdLFxuICAgICAgICAgICAgICAgIGVycm9yczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEBPdXRwdXQoKSBvbkltcG9ydCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJJbXBvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3VjY2VzczogbnVtYmVyOyBmYWlsdXJlOiBudW1iZXIgfT4oKTtcblxuICAgIGZhQ2hlY2sgPSBmYUNoZWNrO1xuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuICAgIGZhSG91cmdsYXNzID0gZmFIb3VyZ2xhc3M7XG4gICAgZmFBcnJvd0NpcmNsZVVwID0gZmFBcnJvd0NpcmNsZVVwO1xuICAgIGZhQXJyb3dVcCA9IGZhQXJyb3dVcDtcblxuICAgIC8vIFVzZWQgdG8ga2VlcCB0aGUgb3JpZ2luYWwgcm93cyBcbiAgICBvcmlnaW5hbFJvd3M6IElQdWJSb3dUeXBlW10gPSBbXTtcblxuICAgIHNob3dMb2dzID0gZmFsc2U7XG4gICAgbG9nU3RyZWFtID0gbmV3IFJlcGxheVN1YmplY3Q8TG9nTWVzc2FnZT4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaEJveDREYXRhUHViJywgeyBzdGF0aWM6IHRydWUgfSkgc2VhcmNoQm94OiBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdkYXRhdGFibGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkYXRhdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcblxuICAgIEBWaWV3Q2hpbGQoXCJzdGF0ZUhlYWRlclwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdGF0ZUhlYWRlclRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQFZpZXdDaGlsZChcInN0YXRlQ2VsbCBcIiwgeyBzdGF0aWM6IHRydWUgfSkgc3RhdGVDZWxsVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAVmlld0NoaWxkKFwidGl0bGVDZWxsIFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSB0aXRsZUNlbGxUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBWaWV3Q2hpbGQoXCJpbnB1dENlbGwgXCIsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0Q2VsbFRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBwcml2YXRlIF9pbXBvcnRTdGF0OiB7IHN1Y2Nlc3M6IG51bWJlcjsgZmFpbHVyZTogbnVtYmVyIH0gPSB7IHN1Y2Nlc3M6IDAsIGZhaWx1cmU6IDAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBub3R5OiBOZ3hOb3R5SW1wbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbnlLZXl3b3JkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hCb3ggPyB0aGlzLnNlYXJjaEJveC5lZmZlY3RpdmVLZXl3b3JkIDogJyc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7IHBhZ2VTaXplOiAxMCwgY2FuQ3JlYXRlOiB0cnVlLCBjYW5EZWxldGU6IHRydWUsIGNhblVwZGF0ZTogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMuc2V0dGluZ3MucGFnZVNpemU7XG4gICAgICAgIHRoaXMuYnVpbGRDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLy8gU3RhcnRzIGEgbmV3IHJvdW5kIG9mIHNlYXJjaFxuICAgIC8vXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gY2F1c2VzIG5ldyBuZXR3b3JrIHJlcXVlc3QuXG4gICAgcHVibGljIGtpY2tPZmZTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IGsgPSB0aGlzLnNlYXJjaEJveC5lZmZlY3RpdmVLZXl3b3JkO1xuICAgICAgICBpZiAoaykge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5vcmlnaW5hbFJvd3MuZmlsdGVyKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCAhPSAnaWQnICYmIGVsZW0uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBlbGVtW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3OiBzdHJpbmcgPSB2LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAody5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkQ29sdW1ucygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuaW5pdERhdGEgfHwgdGhpcy5pbml0RGF0YS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uU3BlYz4gPSBbXTtcbiAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbkF1dG9SZXNpemU6IGZhbHNlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc2l6ZWFibGU6IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVyQ2hlY2tib3hhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2hlY2tib3hhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ1N0YXRlJyxcbiAgICAgICAgICAgIHByb3A6ICdfc3RhdGUnLFxuICAgICAgICAgICAgd2lkdGg6IDgwLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVzaXplYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJUZW1wbGF0ZTogdGhpcy5zdGF0ZUhlYWRlclRtcGwsXG4gICAgICAgICAgICBjZWxsVGVtcGxhdGU6IHRoaXMuc3RhdGVDZWxsVG1wbFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmaXJzdFJvdyA9IHRoaXMuaW5pdERhdGFbMF07XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5jb2x1bW5OYW1lcykge1xuICAgICAgICAgICAgY29uc3QgYzogSVRhYmxlQ29sdW1uU3BlYyA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNvbHVtbk5hbWVzW3Byb3BdLFxuICAgICAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGdldElucHV0VHlwZShmaXJzdFJvd1twcm9wXSksXG4gICAgICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6IHRoaXMudGl0bGVDZWxsVG1wbCxcbiAgICAgICAgICAgICAgICBjZWxsVGVtcGxhdGU6IHRoaXMuaW5wdXRDZWxsVG1wbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICAgIHRoaXMub3JpZ2luYWxSb3dzID0gdGhpcy5pbml0RGF0YS5tYXAoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IF9zdGF0ZTogJ3dhaXRpbmcnIH0sIGEpIGFzIElQdWJSb3dUeXBlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5vcmlnaW5hbFJvd3M7XG4gICAgICAgIHRoaXMuc2VhcmNoQm94ICYmIHRoaXMuc2VhcmNoQm94LnNlYXJjaENvbnRyb2wgJiYgdGhpcy5zZWFyY2hCb3gucmVzZXRLZXl3b3JkKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHB1Ymxpc2goZXZlbnQ6IElUYWJsZURhdGFDaGFuZ2VFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQub3AgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICAgIC8vIEFkZCBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIGFzIElQdWJSb3dUeXBlO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3MucHVzaChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5vcCA9PSAndXBkYXRlJykge1xuICAgICAgICAgICAgLy8gQWRkIG9yIGVkaXRcbiAgICAgICAgICAgIC8vIFdlIGRvIG5vdCBuZWVkIHRvIHByZXNlcnZlIHZhbHVlIHNlbWFudGljcztcbiAgICAgICAgICAgIC8vIHRoZXJlZm9yZSwgd2UgY2FuIGRvIGluLXBsYWNlIGVkaXRpbmcuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyBJUHViUm93VHlwZTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcmlnaW5hbFJvd3MuZmluZEluZGV4KGEgPT4gYS5pZCA9PSBkYXRhLmlkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxSb3dzLnNwbGljZShpbmRleCwgMSwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQub3AgPT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgSVB1YlJvd1R5cGVbXTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxSb3dzID0gdGhpcy5vcmlnaW5hbFJvd3MuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhZGF0YS5zb21lKGIgPT4gYi5pZCA9PSBhLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgdXBsb2FkU2VsZWN0ZWRBc3luYygpIHtcbiAgICAgICAgLy8gRW1pdCBhIG1lc3NhZ2UgXG4gICAgICAgIHRoaXMub25JbXBvcnQuZW1pdCgpO1xuICAgICAgICBjb25zdCB0b2RvID0gdGhpcy5zZWxlY3RlZC5maWx0ZXIoYSA9PiBhLl9zdGF0ZSAhPSAnc3VjY2VzcycpO1xuICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgIHR5cGU6ICdJTkZPJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBTdGFydCB0byBpbXBvcnQgdGhlIHNlbGVjdGVkIHJlY29yZHMgKCR7dG9kby5sZW5ndGh9KWBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5vRXJyb3IgPSBhd2FpdCB0aGlzLmludm9rZVVwbG9hZEFzeW5jKHRvZG8pO1xuXG4gICAgICAgIGlmIChub0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU1VDQ0VTUycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSB1cGxvYWRlZCB0aGUgc2VsZWN0ZWQgcmVjb3JkcydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0xvZ3MgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCB3b3JrIGZvciBmaWx0ZXIgc2V0IG9yIGFsbC5cbiAgICBhc3luYyB1cGxvYWRBbGxBc3luYygpIHtcbiAgICAgICAgLy8gRW1pdCBhIG1lc3NhZ2UgXG4gICAgICAgIHRoaXMub25JbXBvcnQuZW1pdCgpO1xuICAgICAgICAvLyBQYWdlIGJ5IHBhZ2VcbiAgICAgICAgY29uc3QgaW50ZXJuYWxSb3dzID0gdGhpcy5kYXRhdGFibGUuX2ludGVybmFsUm93cztcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChpbnRlcm5hbFJvd3MubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgICAgIGxldCBub0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgLy8gRGlzYWJsZSBzb3J0aW5nIGJ1dCBwcmVzZXJ2ZSB0aGUgY3VycmVudCBvcmRlclxuICAgICAgICB0aGlzLmRhdGF0YWJsZS5zb3J0cyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGF0YWJsZS5yb3dzID0gaW50ZXJuYWxSb3dzO1xuXG4gICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgbWVzc2FnZTogYFN0YXJ0IHRvIGltcG9ydCBhbGwgcmVjb3Jkc2BcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgcEluZGV4ID0gMDsgKG5vRXJyb3IgJiYgcEluZGV4IDwgdG90YWxQYWdlcyk7IHBJbmRleCsrKSB7XG5cbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJTkZPJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgSW1wb3J0ICR7cEluZGV4ICsgMX0gcGFnZWBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGF0YWJsZS5fb2Zmc2V0ID0gcEluZGV4O1xuICAgICAgICAgICAgLy8gT25lIHBhZ2UgXG4gICAgICAgICAgICBsZXQgdG9kbyA9IHNsaWNlQXJyYXkoaW50ZXJuYWxSb3dzLCBwSW5kZXggKiB0aGlzLnBhZ2VTaXplLCAocEluZGV4ICsgMSkgKiB0aGlzLnBhZ2VTaXplKTtcbiAgICAgICAgICAgIHRvZG8gPSB0b2RvLmZpbHRlcihhID0+IGEuX3N0YXRlICE9ICdzdWNjZXNzJyk7XG4gICAgICAgICAgICBub0Vycm9yID0gYXdhaXQgdGhpcy5pbnZva2VVcGxvYWRBc3luYyh0b2RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU1VDQ0VTUycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSB1cGxvYWRlZCBhbGwgcmVjb3JkcydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93TG9ncyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gV2UgZXhwZWN0IHRoYXQgdGhlIHVuZGVybHlpbmcgdXBsb2FkIG1ldGhvZCBpcyB3b3JraW5nIGluIGEgdHJhbnNhY3Rpb25hbCB3YXkuXG4gICAgLy8gSS5lLiwgZWl0aGVyIGFsbCB0aGUgZGF0YSBpcyB1cGxvYWRlZCBvciBub25lIG9mIHRoZW0gaXMgdXBsb2FkZWQuXG4gICAgYXN5bmMgaW52b2tlVXBsb2FkQXN5bmMoZGF0YTogQXJyYXk8SVB1YlJvd1R5cGU+KSB7XG4gICAgICAgIGxldCBub0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChlbGVtID0+IGVsZW0uX3N0YXRlID0gJ3dvcmtpbmcnKTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdmFsdWUgc2VtYW50aWNzXG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzXTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZSBcbiAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggdGhlIGZpcnN0IHBhZ2UgYW5kIHRoZW4gbW92ZSBvblxuICAgICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy51cGxvYWRBc3luYyhkYXRhKTtcbiAgICAgICAgICAgIC8vIHRvZG86IEVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZWxlbSA9PiBlbGVtLl9zdGF0ZSA9ICdzdWNjZXNzJyk7XG4gICAgICAgICAgICByZXQuZmFpbHVyZXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBxID0gZGF0YS5maW5kKHggPT4geC5pZCA9PSBwLmlkKTtcbiAgICAgICAgICAgICAgICBxICYmIChxLl9zdGF0ZSA9ICdmYWlsdXJlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEZvcmNlIHRvIGNoYW5nZSAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuXG4gICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU1VDQ0VTUycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEltcG9ydGVkICR7ZGF0YS5sZW5ndGggLSByZXQuZmFpbHVyZXMubGVuZ3RofSByZWNvcmRzYFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXQuZmFpbHVyZXMgJiYgcmV0LmZhaWx1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0VSUicsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gaW1wb3J0ICR7cmV0LmZhaWx1cmVzLmxlbmd0aH0gcmVjb3Jkc2BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJldC5lcnJvcnMgJiYgcmV0LmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXQuZXJyb3JzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0VSUicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRXJyb3I6ICR7ZX1gXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9pbXBvcnRTdGF0LnN1Y2Nlc3MgKz0gKGRhdGEubGVuZ3RoIC0gcmV0LmZhaWx1cmVzLmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLl9pbXBvcnRTdGF0LmZhaWx1cmUgKz0gcmV0LmZhaWx1cmVzLmxlbmd0aDtcblxuICAgICAgICAgICAgdGhpcy5hZnRlckltcG9ydC5lbWl0KHRoaXMuX2ltcG9ydFN0YXQpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIEluIHBsYWNlIGVkaXRpbmdcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChlbGVtID0+IGVsZW0uX3N0YXRlID0gJ2ZhaWx1cmUnKTtcbiAgICAgICAgICAgIC8vIEZvcmNlIHRvIGNoYW5nZSBcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuICAgICAgICAgICAgbm9FcnJvciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub0Vycm9yO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhciBtYi00XCIgcm9sZT1cInRvb2xiYXJcIiBhcmlhLWxhYmVsPVwiT3BlcmF0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBtZS0yXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIlVwbG9hZFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZFNlbGVjdGVkQXN5bmMoKVwiIFtkaXNhYmxlZF09XCJzZWxlY3RlZC5sZW5ndGggPD0gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93VXBcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZCBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZEFsbEFzeW5jKClcIiBbZGlzYWJsZWRdPVwiYW55S2V5d29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUFycm93Q2lyY2xlVXBcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZCBhbGxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWRBbGxBc3luYygpXCIgW2Rpc2FibGVkXT1cIiFhbnlLZXl3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQXJyb3dDaXJjbGVVcFwiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGZpbHRlcmVkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvbHAtYnMtZXhwYW5kYWJsZS1jYXJkIFtpc0NvbGxhcHNlZF09XCIhc2hvd0xvZ3NcIj5cbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPlxuICAgICAgICAgICAgICAgIERhdGEgaW1wb3J0IGxvZ3NcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBib2R5PlxuICAgICAgICAgICAgICAgIDxsb2ctbW9uaXRvclxuICAgICAgICAgICAgICAgICAgICBbbG9nU3RyZWFtXT1cImxvZ1N0cmVhbVwiXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwibG9nc1wiXG4gICAgICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2ljb25zXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8L2xvZy1tb25pdG9yPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9scC1icy1leHBhbmRhYmxlLWNhcmQ+XG5cbiAgICAgICAgPHBvbHAtYnMtc2VhcmNoLWJveC13aWRnZXQgI3NlYXJjaEJveDREYXRhUHViXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWJvdW5jZVRpbWVdPVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbkxlbmd0aF09XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNsYXNzPVwiYm9yZGVyIHJvdW5kZWQgbXktMiBweS00IHB4LTQgYmctbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25TZWFyY2gpPVwia2lja09mZlNlYXJjaCgpXCI+XG4gICAgICAgIDwvcG9scC1icy1zZWFyY2gtYm94LXdpZGdldD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDxuZ3gtZGF0YXRhYmxlICNkYXRhdGFibGVcbiAgICAgICAgICAgIGNsYXNzPVwiYm9vdHN0cmFwXCJcbiAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICBbY29sdW1uTW9kZV09XCJDb2x1bW5Nb2RlLmZvcmNlXCJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XCI1MFwiXG4gICAgICAgICAgICByb3dIZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgIFtsaW1pdF09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICBbc2Nyb2xsYmFySF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICBbc2VsZWN0aW9uVHlwZV09XCJTZWxlY3Rpb25UeXBlLmNoZWNrYm94XCJcbiAgICAgICAgICAgIFtzZWxlY3RBbGxSb3dzT25QYWdlXT1cInRydWVcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCI+XG4gICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlSGVhZGVyIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJjb2x1bW4ubmFtZVwiIGNsYXNzPVwiZnctYm9sZCB0ZXh0LXdyYXBcIj48L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI2lucHV0Q2VsbCBsZXQtcm93SW5kZXg9XCJyb3dJbmRleFwiIGxldC1yb3c9XCJyb3dcIiBsZXQtY29sdW1uPVwiY29sdW1uXCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBjb2x1bW4ucHJvcF1cIiBbaW5uZXJIVE1MXT1cInZhbHVlXCI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgY29sdW1uLnByb3BdXCJcbiAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJjb2x1bW4uaW5wdXRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgIChibHVyKT1cInVwZGF0ZVZhbHVlKCRldmVudCwgY29sdW1uLnByb3AsIHJvd0luZGV4KVwiXG4gICAgICAgICAgICAvPiAgICAgICAgICAgIFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc3RhdGVIZWFkZXIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkIHRleHQtd2FycFwiPlxuICAgICAgICAgICAgICAgIFN0YXRlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzdGF0ZUNlbGwgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm9cIiAqbmdTd2l0Y2hDYXNlPVwiJ3dhaXRpbmcnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhSG91cmdsYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm9cIiAqbmdTd2l0Y2hDYXNlPVwiJ3dvcmtpbmcnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhSG91cmdsYXNzXCIgW3NwaW5dPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCIgKm5nU3dpdGNoQ2FzZT1cIidzdWNjZXNzJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUNoZWNrXCIgPlxuICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIiAqbmdTd2l0Y2hDYXNlPVwiJ2ZhaWx1cmUnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhVGltZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==