import { Component, Input, ViewChild } from '@angular/core';
import { getInputType, NgxDatatablePoweredBase } from '@polpware/ngx-reactive-table';
import * as i0 from "@angular/core";
import * as i1 from "@swimlane/ngx-datatable";
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
}
DataPreviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DataPreviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DataPreviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DataPreviewComponent, selector: "polp-data-preview", inputs: { initData: "initData", columnNames: "columnNames" }, viewQueries: [{ propertyName: "datatable", first: true, predicate: ["datatable"], descendants: true, static: true }, { propertyName: "titleCellTmpl", first: true, predicate: ["titleCell "], descendants: true, static: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"card\">\n    <div class=\"card-body\">\n        <ngx-datatable class=\"bootstrap\" #datatable\n                       [rows]=\"rows\"\n                       [columns]=\"columns\"\n                       [columnMode]=\"ColumnMode.force\"\n                       headerHeight=\"auto\"\n                       [footerHeight]=\"50\"\n                       rowHeight=\"auto\"\n                       [limit]=\"pageSize\"\n                       [scrollbarH]=\"true\">\n        </ngx-datatable>\n\n        <ng-template #titleHeader let-column=\"column\">\n            <div [innerHTML]=\"column.name\" class=\"fw-bold text-wrap\"></div>\n        </ng-template>\n    </div>\n</div>\n", styles: [""], components: [{ type: i1.DatatableComponent, selector: "ngx-datatable", inputs: ["targetMarkerTemplate", "rows", "groupRowsBy", "groupedRows", "columns", "selected", "scrollbarV", "scrollbarH", "rowHeight", "columnMode", "headerHeight", "footerHeight", "externalPaging", "externalSorting", "limit", "count", "offset", "loadingIndicator", "selectionType", "reorderable", "swapColumns", "sortType", "sorts", "cssClasses", "messages", "rowClass", "selectCheck", "displayCheck", "groupExpansionDefault", "trackByProp", "selectAllRowsOnPage", "virtualization", "treeFromRelation", "treeToRelation", "summaryRow", "summaryHeight", "summaryPosition", "rowIdentity"], outputs: ["scroll", "activate", "select", "sort", "page", "reorder", "resize", "tableContextmenu", "treeAction"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZGF0YS1wcmV2aWV3L2RhdGEtcHJldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RhdGEtcHJldmlldy9kYXRhLXByZXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsWUFBWSxFQUFrQyx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFRckgsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHVCQUFxQztJQVUzRTtRQUNJLEtBQUssRUFBRSxDQUFDO1FBUkgsYUFBUSxHQUFtQixFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBOEIsRUFBRSxDQUFDO0lBUXJELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxZQUFZO1FBRVIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdDLE9BQU87U0FDVjtRQUVELE1BQU0sT0FBTyxHQUE0QixFQUFFLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDL0IsTUFBTSxDQUFDLEdBQXFCO2dCQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDckMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQzs7a0hBbERRLG9CQUFvQjtzR0FBcEIsb0JBQW9CLHFZQ1RqQyxvckJBa0JBOzRGRFRhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDSSxtQkFBbUI7MEVBT3BCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFb0MsU0FBUztzQkFBbEQsU0FBUzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVHLGFBQWE7c0JBQXZELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRJbnB1dFR5cGUsIElSb3dEYXRhVHlwZSwgSVRhYmxlQ29sdW1uU3BlYywgTmd4RGF0YXRhYmxlUG93ZXJlZEJhc2UgfSBmcm9tICdAcG9scHdhcmUvbmd4LXJlYWN0aXZlLXRhYmxlJztcbmltcG9ydCB7IERhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWRhdGEtcHJldmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtcHJldmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF0YS1wcmV2aWV3LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhUHJldmlld0NvbXBvbmVudCBleHRlbmRzIE5neERhdGF0YWJsZVBvd2VyZWRCYXNlPElSb3dEYXRhVHlwZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGluaXREYXRhOiBJUm93RGF0YVR5cGVbXSA9IFtdO1xuICAgIEBJbnB1dCgpIGNvbHVtbk5hbWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgICBAVmlld0NoaWxkKCdkYXRhdGFibGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkYXRhdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudDtcblxuICAgIEBWaWV3Q2hpbGQoXCJ0aXRsZUNlbGwgXCIsIHsgc3RhdGljOiB0cnVlIH0pIHRpdGxlQ2VsbFRtcGw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MsIHsgcGFnZVNpemU6IDEwLCBlZGl0YWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMuc2V0dGluZ3MucGFnZVNpemU7XG5cbiAgICAgICAgdGhpcy5idWlsZENvbHVtbnMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmluaXREYXRhICYmICFjaGFuZ2VzLmluaXREYXRhLmZpcnN0Q2hhbmdlICYmIGNoYW5nZXMuaW5pdERhdGEuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkQ29sdW1ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRDb2x1bW5zKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5pbml0RGF0YSB8fCB0aGlzLmluaXREYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5TcGVjPiA9IFtdO1xuICAgICAgICBjb25zdCBmaXJzdFJvdyA9IHRoaXMuaW5pdERhdGFbMF07XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5jb2x1bW5OYW1lcykge1xuICAgICAgICAgICAgY29uc3QgYzogSVRhYmxlQ29sdW1uU3BlYyA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNvbHVtbk5hbWVzW3Byb3BdLFxuICAgICAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGdldElucHV0VHlwZShmaXJzdFJvd1twcm9wXSksXG4gICAgICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6IHRoaXMudGl0bGVDZWxsVG1wbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMuaW5pdERhdGE7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxuZ3gtZGF0YXRhYmxlIGNsYXNzPVwiYm9vdHN0cmFwXCIgI2RhdGF0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cIkNvbHVtbk1vZGUuZm9yY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHJvd0hlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICBbbGltaXRdPVwicGFnZVNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICBbc2Nyb2xsYmFySF09XCJ0cnVlXCI+XG4gICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlSGVhZGVyIGxldC1jb2x1bW49XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJjb2x1bW4ubmFtZVwiIGNsYXNzPVwiZnctYm9sZCB0ZXh0LXdyYXBcIj48L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19