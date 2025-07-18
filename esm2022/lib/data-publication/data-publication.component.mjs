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
    static { this.ɵfac = function DataPublicationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataPublicationComponent)(i0.ɵɵdirectiveInject(i1.NgxNotyImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataPublicationComponent, selectors: [["polp-data-publication"]], viewQuery: function DataPublicationComponent_Query(rf, ctx) { if (rf & 1) {
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
        } }, inputs: { initData: "initData", columnNames: "columnNames", uploadAsync: "uploadAsync" }, outputs: { onImport: "onImport", afterImport: "afterImport" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 30, vars: 21, consts: [["searchBox4DataPub", ""], ["datatable", ""], ["titleHeader", ""], ["inputCell", ""], ["stateHeader", ""], ["stateCell", ""], [1, "card"], [1, "card-body"], ["role", "toolbar", "aria-label", "Operations", 1, "btn-toolbar", "mb-4"], ["role", "group", "aria-label", "Upload", 1, "btn-group", "me-2"], ["role", "button", 1, "btn", "btn-success", 3, "click", "disabled"], [1, "me-1", 3, "icon"], ["role", "button", 1, "btn", "btn-info", 3, "click", "disabled"], ["role", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [3, "isCollapsed"], ["title", ""], ["body", "", 1, "container"], ["theme", "dark", "title", "logs", 3, "logStream", "animated", "icons"], ["formClass", "border rounded my-2 py-4 px-4 bg-light", 3, "onSearch", "debounceTime", "minLength"], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "select", "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH", "selected", "selectionType", "selectAllRowsOnPage"], [1, "fw-bold", "text-wrap", 3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], ["autofocus", "", 3, "type", "value", "blur", 4, "ngIf"], [3, "innerHTML"], ["autofocus", "", 3, "blur", "type", "value"], [1, "fw-bold", "text-warp"], [3, "ngSwitch"], ["class", "text-info", 4, "ngSwitchCase"], ["class", "text-success", 4, "ngSwitchCase"], ["class", "text-danger", 4, "ngSwitchCase"], [1, "text-info"], [3, "icon"], ["faSpin", "", 3, "icon"], [1, "text-success"], [1, "text-danger"]], template: function DataPublicationComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i3.ExpandableCardComponent, i3.SearchBoxWidgetComponent, i4.FaIconComponent, i5.DatatableComponent, i6.LogMonitorComponent] }); }
};
DataPublicationComponent = __decorate([
    supportOperationsDecorator
], DataPublicationComponent);
export { DataPublicationComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataPublicationComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-publication', template: "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"btn-toolbar mb-4\" role=\"toolbar\" aria-label=\"Operations\">\n            <div class=\"btn-group me-2\" role=\"group\" aria-label=\"Upload\">\n                <button class=\"btn btn-success\" role=\"button\" (click)=\"uploadSelectedAsync()\" [disabled]=\"selected.length <= 0\">\n                    <fa-icon [icon]=\"faArrowUp\" class=\"me-1\"></fa-icon>\n                    Upload selected\n                </button>\n                <button class=\"btn btn-info\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload all\n                </button>\n                <button class=\"btn btn-warning\" role=\"button\" (click)=\"uploadAllAsync()\" [disabled]=\"!anyKeyword\">\n                    <fa-icon [icon]=\"faArrowCircleUp\" class=\"me-1\"></fa-icon>\n                    Upload filtered\n                </button>\n            </div>\n        </div>\n\n        <polp-bs-expandable-card [isCollapsed]=\"!showLogs\">\n            <span title>\n                Data import logs\n            </span>\n            <div class=\"container\" body>\n                <log-monitor\n                    [logStream]=\"logStream\"\n                    theme=\"dark\"\n                    title=\"logs\"\n                    [animated]=\"true\"\n                    [icons]=\"true\">\n                </log-monitor>\n            </div>\n        </polp-bs-expandable-card>\n\n        <polp-bs-search-box-widget #searchBox4DataPub\n                                   [debounceTime]=\"200\"\n                                   [minLength]=\"2\"\n                                   formClass=\"border rounded my-2 py-4 px-4 bg-light\"\n                                   (onSearch)=\"kickOffSearch()\">\n        </polp-bs-search-box-widget>\n                    \n        <ngx-datatable #datatable\n            class=\"bootstrap\"\n            [rows]=\"rows\"\n            [columns]=\"columns\"\n            [columnMode]=\"ColumnMode.force\"\n            headerHeight=\"auto\"\n            [footerHeight]=\"50\"\n            rowHeight=\"auto\"\n            [limit]=\"pageSize\"\n            [scrollbarH]=\"true\"\n            [selected]=\"selected\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selectAllRowsOnPage]=\"true\"\n            (select)=\"onSelect($event)\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n\n        <ng-template #inputCell let-rowIndex=\"rowIndex\" let-row=\"row\" let-column=\"column\" let-value=\"value\">\n            <span *ngIf=\"!editing[rowIndex + '-' + column.prop]\" [innerHTML]=\"value\">\n            </span>\n            <input autofocus\n                   *ngIf=\"editing[rowIndex + '-' + column.prop]\"\n                   [type]=\"column.inputType\"\n                   [value]=\"value\"\n                   (blur)=\"updateValue($event, column.prop, rowIndex)\"\n            />            \n        </ng-template>\n\n        <ng-template #stateHeader let-column=\"column\">\n            <span class=\"fw-bold text-warp\">\n                State\n            </span>\n        </ng-template>\n\n        <ng-template #stateCell let-value=\"value\">\n            <ng-container [ngSwitch]=\"value\">\n                <span class=\"text-info\" *ngSwitchCase=\"'waiting'\">\n                    <fa-icon [icon]=\"faHourglass\">\n                    </fa-icon>\n                </span>\n                <span class=\"text-info\" *ngSwitchCase=\"'working'\">\n                    <fa-icon [icon]=\"faHourglass\" faSpin>\n                    </fa-icon>\n                </span>\n                <span class=\"text-success\" *ngSwitchCase=\"'success'\">\n                    <fa-icon [icon]=\"faCheck\" >\n                    </fa-icon>\n                </span>\n                <span class=\"text-danger\" *ngSwitchCase=\"'failure'\">\n                    <fa-icon [icon]=\"faTimes\">\n                    </fa-icon>\n                </span>\n            </ng-container>\n        </ng-template>\n    </div>\n</div>\n\n" }]
    }], () => [{ type: i1.NgxNotyImpl }], { initData: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataPublicationComponent, { className: "DataPublicationComponent", filePath: "lib\\data-publication\\data-publication.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHVibGljYXRpb24vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHVibGljYXRpb24vZGF0YS1wdWJsaWNhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHOUcsT0FBTyxFQUFFLFlBQVksRUFBeUQscUJBQXFCLEVBQUUsVUFBVSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHbEwsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDb0R6QiwwQkFBK0Q7OztJQUExRCw2REFBeUI7OztJQUk5QiwyQkFDTzs7O0lBRDhDLHVEQUFtQjs7OztJQUV4RSxpQ0FLRTtJQURLLGlUQUFRLHVEQUEwQyxLQUFDO0lBSjFELGlCQUtFOzs7OztJQUZLLEFBREEsMENBQXlCLG1CQUNWOzs7SUFIdEIsQUFGQSwyRkFBeUUsZ0ZBT3ZFOzs7OztJQVBLLDBFQUE0QztJQUczQyxjQUEyQztJQUEzQyx5RUFBMkM7OztJQVFuRCxnQ0FBZ0M7SUFDNUIsdUJBQ0o7SUFBQSxpQkFBTzs7O0lBS0gsZ0NBQWtEO0lBQzlDLDhCQUNVO0lBQ2QsaUJBQU87OztJ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QURBLCtCQUFhLHdCQUNNLG9DQUNZLG9CQUVaLHVCQUVELG9CQUNDLDBCQUNFLDZDQUNtQiw2QkFDWjs7O0FEbkMzQix3QkFBd0I7SUFOcEMsMEJBQTBCO0dBTWQsd0JBQXdCLENBbVJwQzs7aUZBblJZLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNJLHVCQUF1Qjs0Q0FPeEIsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBV0ksUUFBUTtrQkFBakIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFjMkMsU0FBUztrQkFBMUQsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFTixTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFSSxlQUFlO2tCQUExRCxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDQyxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tGQXRDaEMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYUFycm93Q2lyY2xlVXAsIGZhQXJyb3dVcCwgZmFDaGVjaywgZmFIb3VyZ2xhc3MsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTmd4Tm90eUltcGwgfSBmcm9tICdAcG9scHdhcmUvbmd4LW5vdHknO1xuaW1wb3J0IHsgZ2V0SW5wdXRUeXBlLCBJUm93RGF0YVR5cGUsIElUYWJsZUNvbHVtblNwZWMsIElUYWJsZURhdGFDaGFuZ2VFdmVudCwgTmd4RGF0YXRhYmxlTG9jYWxEYXRhLCBzbGljZUFycmF5LCBzdXBwb3J0T3BlcmF0aW9uc0RlY29yYXRvciB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtcmVhY3RpdmUtdGFibGUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlQ29tcG9uZW50IH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgTG9nTWVzc2FnZSB9IGZyb20gJ25neC1sb2ctbW9uaXRvcic7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmludGVyZmFjZSBJUHViUm93VHlwZSBleHRlbmRzIElSb3dEYXRhVHlwZSB7XG4gICAgX3N0YXRlOiAnd2FpdGluZycgfCAnd29ya2luZycgfCAnc3VjY2VzcycgfCAnZmFpbHVyZSc7XG59XG5cbkBzdXBwb3J0T3BlcmF0aW9uc0RlY29yYXRvclxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWRhdGEtcHVibGljYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXB1YmxpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRhLXB1YmxpY2F0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhUHVibGljYXRpb25Db21wb25lbnQgZXh0ZW5kcyBOZ3hEYXRhdGFibGVMb2NhbERhdGE8SVB1YlJvd1R5cGU+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpbml0RGF0YTogSVJvd0RhdGFUeXBlW10gPSBbXTtcbiAgICBASW5wdXQoKSBjb2x1bW5OYW1lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIEBJbnB1dCgpIHVwbG9hZEFzeW5jOiAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4gUHJvbWlzZTx7XG4gICAgICAgIGZhaWx1cmVzOiBBcnJheTxJUm93RGF0YVR5cGU+O1xuICAgICAgICBlcnJvcnM6IEFycmF5PHN0cmluZz47XG4gICAgfT4gPSAoZGF0YTogQXJyYXk8SVJvd0RhdGFUeXBlPikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlczogW10sXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQE91dHB1dCgpIG9uSW1wb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIEBPdXRwdXQoKSBhZnRlckltcG9ydCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdWNjZXNzOiBudW1iZXI7IGZhaWx1cmU6IG51bWJlciB9PigpO1xuXG4gICAgZmFDaGVjayA9IGZhQ2hlY2s7XG4gICAgZmFUaW1lcyA9IGZhVGltZXM7XG4gICAgZmFIb3VyZ2xhc3MgPSBmYUhvdXJnbGFzcztcbiAgICBmYUFycm93Q2lyY2xlVXAgPSBmYUFycm93Q2lyY2xlVXA7XG4gICAgZmFBcnJvd1VwID0gZmFBcnJvd1VwO1xuXG4gICAgLy8gVXNlZCB0byBrZWVwIHRoZSBvcmlnaW5hbCByb3dzIFxuICAgIG9yaWdpbmFsUm93czogSVB1YlJvd1R5cGVbXSA9IFtdO1xuXG4gICAgc2hvd0xvZ3MgPSBmYWxzZTtcbiAgICBsb2dTdHJlYW0gPSBuZXcgUmVwbGF5U3ViamVjdDxMb2dNZXNzYWdlPigpO1xuXG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoQm94NERhdGFQdWInLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWFyY2hCb3g6IFNlYXJjaEJveFdpZGdldENvbXBvbmVudDtcblxuICAgIEBWaWV3Q2hpbGQoJ2RhdGF0YWJsZScsIHsgc3RhdGljOiB0cnVlIH0pIGRhdGF0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZChcInN0YXRlSGVhZGVyXCIsIHsgc3RhdGljOiB0cnVlIH0pIHN0YXRlSGVhZGVyVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAVmlld0NoaWxkKFwic3RhdGVDZWxsIFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdGF0ZUNlbGxUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBWaWV3Q2hpbGQoXCJ0aXRsZUNlbGwgXCIsIHsgc3RhdGljOiB0cnVlIH0pIHRpdGxlQ2VsbFRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQFZpZXdDaGlsZChcImlucHV0Q2VsbCBcIiwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRDZWxsVG1wbDogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIHByaXZhdGUgX2ltcG9ydFN0YXQ6IHsgc3VjY2VzczogbnVtYmVyOyBmYWlsdXJlOiBudW1iZXIgfSA9IHsgc3VjY2VzczogMCwgZmFpbHVyZTogMCB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG5vdHk6IE5neE5vdHlJbXBsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFueUtleXdvcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaEJveCA/IHRoaXMuc2VhcmNoQm94LmVmZmVjdGl2ZUtleXdvcmQgOiAnJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHsgcGFnZVNpemU6IDEwLCBjYW5DcmVhdGU6IHRydWUsIGNhbkRlbGV0ZTogdHJ1ZSwgY2FuVXBkYXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5zZXR0aW5ncy5wYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5idWlsZENvbHVtbnMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAvLyBTdGFydHMgYSBuZXcgcm91bmQgb2Ygc2VhcmNoXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBjYXVzZXMgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMga2lja09mZlNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgayA9IHRoaXMuc2VhcmNoQm94LmVmZmVjdGl2ZUtleXdvcmQ7XG4gICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cy5maWx0ZXIoZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wICE9ICdpZCcgJiYgZWxlbS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IGVsZW1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHc6IHN0cmluZyA9IHYudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3LmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMub3JpZ2luYWxSb3dzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRDb2x1bW5zKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5pbml0RGF0YSB8fCB0aGlzLmluaXREYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5TcGVjPiA9IFtdO1xuICAgICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVzaXplYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJDaGVja2JveGFibGU6IHRydWUsXG4gICAgICAgICAgICBjaGVja2JveGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnU3RhdGUnLFxuICAgICAgICAgICAgcHJvcDogJ19zdGF0ZScsXG4gICAgICAgICAgICB3aWR0aDogODAsXG4gICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjYW5BdXRvUmVzaXplOiBmYWxzZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZXNpemVhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiB0aGlzLnN0YXRlSGVhZGVyVG1wbCxcbiAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogdGhpcy5zdGF0ZUNlbGxUbXBsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0Um93ID0gdGhpcy5pbml0RGF0YVswXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmNvbHVtbk5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjOiBJVGFibGVDb2x1bW5TcGVjID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY29sdW1uTmFtZXNbcHJvcF0sXG4gICAgICAgICAgICAgICAgcHJvcDogcHJvcCxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTUwLFxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZ2V0SW5wdXRUeXBlKGZpcnN0Um93W3Byb3BdKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJUZW1wbGF0ZTogdGhpcy50aXRsZUNlbGxUbXBsLFxuICAgICAgICAgICAgICAgIGNlbGxUZW1wbGF0ZTogdGhpcy5pbnB1dENlbGxUbXBsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3MgPSB0aGlzLmluaXREYXRhLm1hcChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgX3N0YXRlOiAnd2FpdGluZycgfSwgYSkgYXMgSVB1YlJvd1R5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cztcbiAgICAgICAgdGhpcy5zZWFyY2hCb3ggJiYgdGhpcy5zZWFyY2hCb3guc2VhcmNoQ29udHJvbCAmJiB0aGlzLnNlYXJjaEJveC5yZXNldEtleXdvcmQoZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgcHVibGlzaChldmVudDogSVRhYmxlRGF0YUNoYW5nZUV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5vcCA9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgLy8gQWRkIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgYXMgSVB1YlJvd1R5cGU7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsUm93cy5wdXNoKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lm9wID09ICd1cGRhdGUnKSB7XG4gICAgICAgICAgICAvLyBBZGQgb3IgZWRpdFxuICAgICAgICAgICAgLy8gV2UgZG8gbm90IG5lZWQgdG8gcHJlc2VydmUgdmFsdWUgc2VtYW50aWNzO1xuICAgICAgICAgICAgLy8gdGhlcmVmb3JlLCB3ZSBjYW4gZG8gaW4tcGxhY2UgZWRpdGluZy5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhIGFzIElQdWJSb3dUeXBlO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm9yaWdpbmFsUm93cy5maW5kSW5kZXgoYSA9PiBhLmlkID09IGRhdGEuaWQpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3Muc3BsaWNlKGluZGV4LCAxLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5vcCA9PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSBhcyBJUHViUm93VHlwZVtdO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFJvd3MgPSB0aGlzLm9yaWdpbmFsUm93cy5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFkYXRhLnNvbWUoYiA9PiBiLmlkID09IGEuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB1cGxvYWRTZWxlY3RlZEFzeW5jKCkge1xuICAgICAgICAvLyBFbWl0IGEgbWVzc2FnZSBcbiAgICAgICAgdGhpcy5vbkltcG9ydC5lbWl0KCk7XG4gICAgICAgIGNvbnN0IHRvZG8gPSB0aGlzLnNlbGVjdGVkLmZpbHRlcihhID0+IGEuX3N0YXRlICE9ICdzdWNjZXNzJyk7XG4gICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgbWVzc2FnZTogYFN0YXJ0IHRvIGltcG9ydCB0aGUgc2VsZWN0ZWQgcmVjb3JkcyAoJHt0b2RvLmxlbmd0aH0pYFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgbm9FcnJvciA9IGF3YWl0IHRoaXMuaW52b2tlVXBsb2FkQXN5bmModG9kbyk7XG5cbiAgICAgICAgaWYgKG5vRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTVUNDRVNTJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHVwbG9hZGVkIHRoZSBzZWxlY3RlZCByZWNvcmRzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93TG9ncyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHdvcmsgZm9yIGZpbHRlciBzZXQgb3IgYWxsLlxuICAgIGFzeW5jIHVwbG9hZEFsbEFzeW5jKCkge1xuICAgICAgICAvLyBFbWl0IGEgbWVzc2FnZSBcbiAgICAgICAgdGhpcy5vbkltcG9ydC5lbWl0KCk7XG4gICAgICAgIC8vIFBhZ2UgYnkgcGFnZVxuICAgICAgICBjb25zdCBpbnRlcm5hbFJvd3MgPSB0aGlzLmRhdGF0YWJsZS5faW50ZXJuYWxSb3dzO1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGludGVybmFsUm93cy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcbiAgICAgICAgbGV0IG5vRXJyb3IgPSB0cnVlO1xuICAgICAgICAvLyBEaXNhYmxlIHNvcnRpbmcgYnV0IHByZXNlcnZlIHRoZSBjdXJyZW50IG9yZGVyXG4gICAgICAgIHRoaXMuZGF0YXRhYmxlLnNvcnRzID0gW107XG4gICAgICAgIHRoaXMuZGF0YXRhYmxlLnJvd3MgPSBpbnRlcm5hbFJvd3M7XG5cbiAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICB0eXBlOiAnSU5GTycsXG4gICAgICAgICAgICBtZXNzYWdlOiBgU3RhcnQgdG8gaW1wb3J0IGFsbCByZWNvcmRzYFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBwSW5kZXggPSAwOyAobm9FcnJvciAmJiBwSW5kZXggPCB0b3RhbFBhZ2VzKTsgcEluZGV4KyspIHtcblxuICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0lORk8nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBJbXBvcnQgJHtwSW5kZXggKyAxfSBwYWdlYFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YXRhYmxlLl9vZmZzZXQgPSBwSW5kZXg7XG4gICAgICAgICAgICAvLyBPbmUgcGFnZSBcbiAgICAgICAgICAgIGxldCB0b2RvID0gc2xpY2VBcnJheShpbnRlcm5hbFJvd3MsIHBJbmRleCAqIHRoaXMucGFnZVNpemUsIChwSW5kZXggKyAxKSAqIHRoaXMucGFnZVNpemUpO1xuICAgICAgICAgICAgdG9kbyA9IHRvZG8uZmlsdGVyKGEgPT4gYS5fc3RhdGUgIT0gJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIG5vRXJyb3IgPSBhd2FpdCB0aGlzLmludm9rZVVwbG9hZEFzeW5jKHRvZG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTVUNDRVNTJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHVwbG9hZGVkIGFsbCByZWNvcmRzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dMb2dzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBXZSBleHBlY3QgdGhhdCB0aGUgdW5kZXJseWluZyB1cGxvYWQgbWV0aG9kIGlzIHdvcmtpbmcgaW4gYSB0cmFuc2FjdGlvbmFsIHdheS5cbiAgICAvLyBJLmUuLCBlaXRoZXIgYWxsIHRoZSBkYXRhIGlzIHVwbG9hZGVkIG9yIG5vbmUgb2YgdGhlbSBpcyB1cGxvYWRlZC5cbiAgICBhc3luYyBpbnZva2VVcGxvYWRBc3luYyhkYXRhOiBBcnJheTxJUHViUm93VHlwZT4pIHtcbiAgICAgICAgbGV0IG5vRXJyb3IgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW0gPT4gZWxlbS5fc3RhdGUgPSAnd29ya2luZycpO1xuICAgICAgICAgICAgLy8gVHJpZ2dlciB2YWx1ZSBzZW1hbnRpY3NcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHN0YXRlIFxuICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCB0aGUgZmlyc3QgcGFnZSBhbmQgdGhlbiBtb3ZlIG9uXG4gICAgICAgICAgICBjb25zdCByZXQgPSBhd2FpdCB0aGlzLnVwbG9hZEFzeW5jKGRhdGEpO1xuICAgICAgICAgICAgLy8gdG9kbzogRXJyb3IgaGFuZGxpbmdcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChlbGVtID0+IGVsZW0uX3N0YXRlID0gJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHJldC5mYWlsdXJlcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHEgPSBkYXRhLmZpbmQoeCA9PiB4LmlkID09IHAuaWQpO1xuICAgICAgICAgICAgICAgIHEgJiYgKHEuX3N0YXRlID0gJ2ZhaWx1cmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gRm9yY2UgdG8gY2hhbmdlICAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG5cbiAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTVUNDRVNTJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgSW1wb3J0ZWQgJHtkYXRhLmxlbmd0aCAtIHJldC5mYWlsdXJlcy5sZW5ndGh9IHJlY29yZHNgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJldC5mYWlsdXJlcyAmJiByZXQuZmFpbHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nU3RyZWFtLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRVJSJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEZhaWxlZCB0byBpbXBvcnQgJHtyZXQuZmFpbHVyZXMubGVuZ3RofSByZWNvcmRzYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmV0LmVycm9ycyAmJiByZXQuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldC5lcnJvcnMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRVJSJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBFcnJvcjogJHtlfWBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2ltcG9ydFN0YXQuc3VjY2VzcyArPSAoZGF0YS5sZW5ndGggLSByZXQuZmFpbHVyZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuX2ltcG9ydFN0YXQuZmFpbHVyZSArPSByZXQuZmFpbHVyZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICB0aGlzLmFmdGVySW1wb3J0LmVtaXQodGhpcy5faW1wb3J0U3RhdCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gSW4gcGxhY2UgZWRpdGluZ1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW0gPT4gZWxlbS5fc3RhdGUgPSAnZmFpbHVyZScpO1xuICAgICAgICAgICAgLy8gRm9yY2UgdG8gY2hhbmdlIFxuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG4gICAgICAgICAgICBub0Vycm9yID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vRXJyb3I7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi10b29sYmFyIG1iLTRcIiByb2xlPVwidG9vbGJhclwiIGFyaWEtbGFiZWw9XCJPcGVyYXRpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIG1lLTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiVXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkU2VsZWN0ZWRBc3luYygpXCIgW2Rpc2FibGVkXT1cInNlbGVjdGVkLmxlbmd0aCA8PSAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQXJyb3dVcFwiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBsb2FkQWxsQXN5bmMoKVwiIFtkaXNhYmxlZF09XCJhbnlLZXl3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQXJyb3dDaXJjbGVVcFwiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGFsbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwbG9hZEFsbEFzeW5jKClcIiBbZGlzYWJsZWRdPVwiIWFueUtleXdvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFBcnJvd0NpcmNsZVVwXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICBVcGxvYWQgZmlsdGVyZWRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cG9scC1icy1leHBhbmRhYmxlLWNhcmQgW2lzQ29sbGFwc2VkXT1cIiFzaG93TG9nc1wiPlxuICAgICAgICAgICAgPHNwYW4gdGl0bGU+XG4gICAgICAgICAgICAgICAgRGF0YSBpbXBvcnQgbG9nc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGJvZHk+XG4gICAgICAgICAgICAgICAgPGxvZy1tb25pdG9yXG4gICAgICAgICAgICAgICAgICAgIFtsb2dTdHJlYW1dPVwibG9nU3RyZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJsb2dzXCJcbiAgICAgICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBbaWNvbnNdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDwvbG9nLW1vbml0b3I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wb2xwLWJzLWV4cGFuZGFibGUtY2FyZD5cblxuICAgICAgICA8cG9scC1icy1zZWFyY2gtYm94LXdpZGdldCAjc2VhcmNoQm94NERhdGFQdWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RlYm91bmNlVGltZV09XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluTGVuZ3RoXT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ2xhc3M9XCJib3JkZXIgcm91bmRlZCBteS0yIHB5LTQgcHgtNCBiZy1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblNlYXJjaCk9XCJraWNrT2ZmU2VhcmNoKClcIj5cbiAgICAgICAgPC9wb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPG5neC1kYXRhdGFibGUgI2RhdGF0YWJsZVxuICAgICAgICAgICAgY2xhc3M9XCJib290c3RyYXBcIlxuICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cIkNvbHVtbk1vZGUuZm9yY2VcIlxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cIjUwXCJcbiAgICAgICAgICAgIHJvd0hlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgW2xpbWl0XT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgIFtzY3JvbGxiYXJIXT1cInRydWVcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgIFtzZWxlY3Rpb25UeXBlXT1cIlNlbGVjdGlvblR5cGUuY2hlY2tib3hcIlxuICAgICAgICAgICAgW3NlbGVjdEFsbFJvd3NPblBhZ2VdPVwidHJ1ZVwiXG4gICAgICAgICAgICAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGVIZWFkZXIgbGV0LWNvbHVtbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImNvbHVtbi5uYW1lXCIgY2xhc3M9XCJmdy1ib2xkIHRleHQtd3JhcFwiPjwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaW5wdXRDZWxsIGxldC1yb3dJbmRleD1cInJvd0luZGV4XCIgbGV0LXJvdz1cInJvd1wiIGxldC1jb2x1bW49XCJjb2x1bW5cIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZWRpdGluZ1tyb3dJbmRleCArICctJyArIGNvbHVtbi5wcm9wXVwiIFtpbm5lckhUTUxdPVwidmFsdWVcIj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dCBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVkaXRpbmdbcm93SW5kZXggKyAnLScgKyBjb2x1bW4ucHJvcF1cIlxuICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImNvbHVtbi5pbnB1dFR5cGVcIlxuICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgKGJsdXIpPVwidXBkYXRlVmFsdWUoJGV2ZW50LCBjb2x1bW4ucHJvcCwgcm93SW5kZXgpXCJcbiAgICAgICAgICAgIC8+ICAgICAgICAgICAgXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzdGF0ZUhlYWRlciBsZXQtY29sdW1uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGQgdGV4dC13YXJwXCI+XG4gICAgICAgICAgICAgICAgU3RhdGVcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3N0YXRlQ2VsbCBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaW5mb1wiICpuZ1N3aXRjaENhc2U9XCInd2FpdGluZydcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFIb3VyZ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaW5mb1wiICpuZ1N3aXRjaENhc2U9XCInd29ya2luZydcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFIb3VyZ2xhc3NcIiBmYVNwaW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIiAqbmdTd2l0Y2hDYXNlPVwiJ3N1Y2Nlc3MnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhQ2hlY2tcIiA+XG4gICAgICAgICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ1N3aXRjaENhc2U9XCInZmFpbHVyZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFUaW1lc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuIl19