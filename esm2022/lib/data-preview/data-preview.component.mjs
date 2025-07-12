import { Component, Input, ViewChild } from '@angular/core';
import { getInputType, NgxDatatablePoweredBase } from '@polpware/ngx-reactive-table';
import * as i0 from "@angular/core";
import * as i1 from "@swimlane/ngx-datatable";
const _c0 = ["datatable"];
const _c1 = ["titleCell"];
function DataPreviewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const column_r3 = ctx.column;
    i0.ɵɵproperty("innerHTML", column_r3.name, i0.ɵɵsanitizeHtml);
} }
export class DataPreviewComponent extends NgxDatatablePoweredBase {
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
    static { this.ɵfac = function DataPreviewComponent_Factory(t) { return new (t || DataPreviewComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataPreviewComponent, selectors: [["polp-data-preview"]], viewQuery: function DataPreviewComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datatable = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleCellTmpl = _t.first);
        } }, inputs: { initData: "initData", columnNames: "columnNames" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 6, vars: 6, consts: [[1, "card"], [1, "card-body"], ["headerHeight", "auto", "rowHeight", "auto", 1, "bootstrap", 3, "rows", "columns", "columnMode", "footerHeight", "limit", "scrollbarH"], ["datatable", ""], ["titleHeader", ""], [1, "fw-bold", "text-wrap", 3, "innerHTML"]], template: function DataPreviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "ngx-datatable", 2, 3);
            i0.ɵɵtemplate(4, DataPreviewComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rows", ctx.rows)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("limit", ctx.pageSize)("scrollbarH", true);
        } }, dependencies: [i1.DatatableComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataPreviewComponent, [{
        type: Component,
        args: [{ selector: 'polp-data-preview', template: "<div class=\"card\">\n    <div class=\"card-body\">\n        <ngx-datatable class=\"bootstrap\" #datatable\n                       [rows]=\"rows\"\n                       [columns]=\"columns\"\n                       [columnMode]=\"ColumnMode.force\"\n                       headerHeight=\"auto\"\n                       [footerHeight]=\"50\"\n                       rowHeight=\"auto\"\n                       [limit]=\"pageSize\"\n                       [scrollbarH]=\"true\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], function () { return []; }, { initData: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZGF0YS1wcmV2aWV3L2RhdGEtcHJldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHJldmlldy9kYXRhLXByZXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsWUFBWSxFQUFrQyx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7SUNhekcseUJBQStEOzs7SUFBMUQsNkRBQXlCOztBREwxQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsdUJBQXFDO0lBVTNFO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFSSCxhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUE4QixFQUFFLENBQUM7SUFRckQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDcEYsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFFUixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDN0MsT0FBTztTQUNWO1FBRUQsTUFBTSxPQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMvQixNQUFNLENBQUMsR0FBcUI7Z0JBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDNUIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLGNBQWMsRUFBRSxJQUFJLENBQUMsYUFBYTthQUNyQyxDQUFDO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO3FGQWxEUSxvQkFBb0I7b0VBQXBCLG9CQUFvQjs7Ozs7Ozs7WUNUakMsOEJBQWtCLGFBQUE7WUFFVixzQ0FTZ0I7WUFFaEIsc0hBRWM7WUFDbEIsaUJBQU0sRUFBQTs7WUFiYSxlQUFhO1lBQWIsK0JBQWEsd0JBQUEsb0NBQUEsb0JBQUEsdUJBQUEsb0JBQUE7Ozt1RkRNdkIsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0ksbUJBQW1CO3NDQU9wQixRQUFRO2tCQUFoQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVvQyxTQUFTO2tCQUFsRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFRyxhQUFhO2tCQUF2RCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0SW5wdXRUeXBlLCBJUm93RGF0YVR5cGUsIElUYWJsZUNvbHVtblNwZWMsIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1yZWFjdGl2ZS10YWJsZSc7XG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1kYXRhLXByZXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGEtcHJldmlldy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBOZ3hEYXRhdGFibGVQb3dlcmVkQmFzZTxJUm93RGF0YVR5cGU+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBpbml0RGF0YTogSVJvd0RhdGFUeXBlW10gPSBbXTtcbiAgICBASW5wdXQoKSBjb2x1bW5OYW1lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gICAgQFZpZXdDaGlsZCgnZGF0YXRhYmxlJywgeyBzdGF0aWM6IHRydWUgfSkgZGF0YXRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKFwidGl0bGVDZWxsIFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSB0aXRsZUNlbGxUbXBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCB7IHBhZ2VTaXplOiAxMCwgZWRpdGFibGU6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLnNldHRpbmdzLnBhZ2VTaXplO1xuXG4gICAgICAgIHRoaXMuYnVpbGRDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5pbml0RGF0YSAmJiAhY2hhbmdlcy5pbml0RGF0YS5maXJzdENoYW5nZSAmJiBjaGFuZ2VzLmluaXREYXRhLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZENvbHVtbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkQ29sdW1ucygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuaW5pdERhdGEgfHwgdGhpcy5pbml0RGF0YS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uU3BlYz4gPSBbXTtcbiAgICAgICAgY29uc3QgZmlyc3RSb3cgPSB0aGlzLmluaXREYXRhWzBdO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuY29sdW1uTmFtZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGM6IElUYWJsZUNvbHVtblNwZWMgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5jb2x1bW5OYW1lc1twcm9wXSxcbiAgICAgICAgICAgICAgICBwcm9wOiBwcm9wLFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBnZXRJbnB1dFR5cGUoZmlyc3RSb3dbcHJvcF0pLFxuICAgICAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiB0aGlzLnRpdGxlQ2VsbFRtcGxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goYyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLmluaXREYXRhO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8bmd4LWRhdGF0YWJsZSBjbGFzcz1cImJvb3RzdHJhcFwiICNkYXRhdGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XCJDb2x1bW5Nb2RlLmZvcmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICByb3dIZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2xpbWl0XT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3Njcm9sbGJhckhdPVwidHJ1ZVwiPlxuICAgICAgICA8L25neC1kYXRhdGFibGU+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZUhlYWRlciBsZXQtY29sdW1uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwiY29sdW1uLm5hbWVcIiBjbGFzcz1cImZ3LWJvbGQgdGV4dC13cmFwXCI+PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==