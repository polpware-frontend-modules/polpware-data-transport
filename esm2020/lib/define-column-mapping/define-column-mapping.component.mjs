import { Component, Input } from '@angular/core';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@polpware/ngx-logger";
import * as i3 from "@angular/common";
import * as i4 from "@polpware/ngx-pipes";
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
export class DefineColumnMappingComponent extends DefaultFormBaseComponent {
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
DefineColumnMappingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DefineColumnMappingComponent, deps: [{ token: i1.FormBuilder }, { token: i2.LoggerProviderImpl }], target: i0.ɵɵFactoryTarget.Component });
DefineColumnMappingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: DefineColumnMappingComponent, selector: "polp-define-column-mapping", inputs: { sourceColumns: "sourceColumns", targetColumns: "targetColumns", initValue: "initValue" }, usesInheritance: true, ngImport: i0, template: "<form  [formGroup]=\"form\">\n    <!-- Header -->\n    <div class=\"form-row mb-4\">\n        <div class=\"col-1\">\n            #\n        </div>\n        <div class=\"col-4\">\n            <b>Source</b>\n        </div>\n        <div class=\"col-3\">\n            <b>Example</b>\n        </div>\n        <div class=\"col-4\">\n            <b>Target</b>\n        </div>\n    </div>\n    \n    <ng-container formArrayName=\"mappings\">\n        <div class=\"form-row mb-4\" *ngFor=\"let f of mappings.controls; let i=index\">\n            <ng-container [formGroupName]=\"i\">\n                <div class=\"col-1\">\n                    {{i + 1}}\n                </div>\n                <div class=\"col-4\">\n                    <div [innerHtml]=\"sourceLabel(i) | safeDom:'html'\"></div>\n                </div>\n                <div class=\"col-3\">\n                    <!-- Something -->\n                </div>\n                <div class=\"col-4\">\n                    <select class=\"form-control form-control-sm\" formControlName=\"targetId\">\n                        <option value=\"\">...</option>                        \n                        <option *ngFor=\"let o of targetColumns\" [value]=\"o.id\">\n                            <span [innerHtml]=\"o.label | safeDom:'html'\">\n                            </span>\n                        </option>\n                    </select>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>                \n    \n</form>\n", styles: [""], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }], pipes: { "safeDom": i4.SafeDomPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: DefineColumnMappingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-define-column-mapping', template: "<form  [formGroup]=\"form\">\n    <!-- Header -->\n    <div class=\"form-row mb-4\">\n        <div class=\"col-1\">\n            #\n        </div>\n        <div class=\"col-4\">\n            <b>Source</b>\n        </div>\n        <div class=\"col-3\">\n            <b>Example</b>\n        </div>\n        <div class=\"col-4\">\n            <b>Target</b>\n        </div>\n    </div>\n    \n    <ng-container formArrayName=\"mappings\">\n        <div class=\"form-row mb-4\" *ngFor=\"let f of mappings.controls; let i=index\">\n            <ng-container [formGroupName]=\"i\">\n                <div class=\"col-1\">\n                    {{i + 1}}\n                </div>\n                <div class=\"col-4\">\n                    <div [innerHtml]=\"sourceLabel(i) | safeDom:'html'\"></div>\n                </div>\n                <div class=\"col-3\">\n                    <!-- Something -->\n                </div>\n                <div class=\"col-4\">\n                    <select class=\"form-control form-control-sm\" formControlName=\"targetId\">\n                        <option value=\"\">...</option>                        \n                        <option *ngFor=\"let o of targetColumns\" [value]=\"o.id\">\n                            <span [innerHtml]=\"o.label | safeDom:'html'\">\n                            </span>\n                        </option>\n                    </select>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>                \n    \n</form>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.LoggerProviderImpl }]; }, propDecorators: { sourceColumns: [{
                type: Input
            }], targetColumns: [{
                type: Input
            }], initValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLWNvbHVtbi1tYXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZGVmaW5lLWNvbHVtbi1tYXBwaW5nL2RlZmluZS1jb2x1bW4tbWFwcGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RlZmluZS1jb2x1bW4tbWFwcGluZy9kZWZpbmUtY29sdW1uLW1hcHBpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFJckUsU0FBUyxrQkFBa0IsQ0FBQyxLQUFlO0lBQ3ZDLElBQUksV0FBVyxHQUErQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ25DLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLEtBQUssSUFBSSxXQUFXLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxhQUl6QjtJQUNFLE9BQU8sQ0FBQyxPQUFrQixFQUEyQixFQUFFO1FBQ25ELGlCQUFpQjtRQUNqQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FB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TEM5RHpDLG0vQ0EyQ0E7NEZEbUJhLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDSSw0QkFBNEI7bUlBTzdCLGFBQWE7c0JBQXJCLEtBQUs7Z0JBSUcsYUFBYTtzQkFBckIsS0FBSztnQkFLRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZm9ybS1jb21tb24nO1xuaW1wb3J0IHsgSU5neExvZ2dlciwgTG9nZ2VyUHJvdmlkZXJJbXBsIH0gZnJvbSAnQHBvbHB3YXJlL25neC1sb2dnZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmZ1bmN0aW9uIGZpbmRGaXJzdER1cGxpY2F0ZShhcnJheTogc3RyaW5nW10pIHtcbiAgICB2YXIgdmFsdWVzU29GYXI6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXlbaV07XG4gICAgICAgIGlmICh2YWx1ZSBpbiB2YWx1ZXNTb0Zhcikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1NvRmFyW3ZhbHVlXSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gbWFrZUZvcm1WYWxpZGF0b3IodGFyZ2V0Q29sdW1uczogQXJyYXk8e1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZztcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcbn0+KSB7XG4gICAgcmV0dXJuIChjb250cm9sOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0XG4gICAgICAgIGNvbnN0IG1hcHBpbmdzID0gY29udHJvbC5nZXQoJ21hcHBpbmdzJykgYXMgRm9ybUFycmF5O1xuICAgICAgICBjb25zdCBzdWJzZXQgPSBtYXBwaW5ncy5jb250cm9scy5maWx0ZXIoKHg6IEZvcm1Hcm91cCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHguZ2V0KCd0YXJnZXRJZCcpO1xuICAgICAgICAgICAgcmV0dXJuICEhY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhcmdldElkcyA9IHN1YnNldC5tYXAoKHk6IEZvcm1Hcm91cCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHkuZ2V0KCd0YXJnZXRJZCcpLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaGVjayByZWR1bmRhbmN5XG4gICAgICAgIGNvbnN0IGFueUR1cGxpY2F0ZSA9IGZpbmRGaXJzdER1cGxpY2F0ZSh0YXJnZXRJZHMpO1xuICAgICAgICBpZiAoYW55RHVwbGljYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gdGFyZ2V0Q29sdW1ucy5maW5kKGEgPT4gYS5pZCA9PSBhbnlEdXBsaWNhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGU6IGAke2Rlc2M/LmxhYmVsfSgke2Rlc2M/LmlkfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIHJlcXVpcmVkIGFyZSBpbmNsdWRlZC5cbiAgICAgICAgY29uc3QgYW55TWlzc2luZyA9IHRhcmdldENvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiBhLnJlcXVpcmVkKVxuICAgICAgICAgICAgLmZpbmQoYiA9PiAhdGFyZ2V0SWRzLnNvbWUoYyA9PiBjID09IGIuaWQpKTtcbiAgICAgICAgaWYgKGFueU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWlzc2luZzogYCR7YW55TWlzc2luZy5sYWJlbH0oJHthbnlNaXNzaW5nLmlkfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1kZWZpbmUtY29sdW1uLW1hcHBpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZWZpbmUtY29sdW1uLW1hcHBpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RlZmluZS1jb2x1bW4tbWFwcGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVmaW5lQ29sdW1uTWFwcGluZ0NvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgc291cmNlQ29sdW1uczogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgIH0+ID0gW107XG4gICAgQElucHV0KCkgdGFyZ2V0Q29sdW1uczogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICByZXF1aXJlZDogYm9vbGVhbjtcbiAgICB9PiA9IFtdO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogQXJyYXk8e1xuICAgICAgICBzb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIH0+ID0gW107XG5cbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSByZWFkb25seSBfbG9nZ2VyOiBJTmd4TG9nZ2VyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIGxvZ2dlclByb3ZpZGVyOiBMb2dnZXJQcm92aWRlckltcGwpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXJQcm92aWRlci5sb2dnZXIoJ3BvbHBfZGF0YV90cmFuc3BvcnRfZGVmaW5lX2NvbHVtbl9tYXBwaW5nJyk7XG5cbiAgICB9XG5cbiAgICBnZXQgbWFwcGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KCdtYXBwaW5ncycpIGFzIEZvcm1BcnJheTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gQnVpbGQgZm9ybVxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIG1hcHBpbmdzOiB0aGlzLl9idWlsZGVyLmFycmF5KFtdKVxuICAgICAgICB9LCB7IHZhbGlkYXRvcnM6IFttYWtlRm9ybVZhbGlkYXRvcih0aGlzLnRhcmdldENvbHVtbnMpXSB9KTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiID0gYS5tYXBwaW5ncyBhcyBBcnJheTx7IGNoZWNrZWQ6IGJvb2xlYW47IHNvdXJjZUlkOiBzdHJpbmc7IHRhcmdldElkOiBzdHJpbmcgfT47XG4gICAgICAgICAgICBjb25zdCBjID0gYi5maWx0ZXIoYiA9PiBiLnRhcmdldElkKTtcbiAgICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChjKTtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uLmVtaXQodGhpcy5mb3JtLmVycm9ycyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNvdXJjZUNvbHVtbnMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgICAgICAgLy8gQnVpbGQgbWFwcGluZyBlbnRyaWVzXG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc291cmNlSWQ6IHNvdXJjZS5pZCxcbiAgICAgICAgICAgICAgICB0YXJnZXRJZDogJydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFueU1hcCA9IHRoaXMuaW5pdFZhbHVlLmZpbmQoeCA9PiB4LnNvdXJjZUlkID09IHNvdXJjZS5pZCk7XG4gICAgICAgICAgICBpZiAoYW55TWFwKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLnRhcmdldElkID0gYW55TWFwLnRhcmdldElkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzLnB1c2godGhpcy5fYnVpbGRlci5ncm91cChyZWNvcmQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnIgJiYgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNvdXJjZUxhYmVsKGk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMubWFwcGluZ3MuY29udHJvbHNbaV0udmFsdWUuc291cmNlSWQ7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZUNvbHVtbnMuZmluZChhID0+IGEuaWQgPT0gaWQpLmxhYmVsO1xuICAgIH1cblxufVxuIiwiPGZvcm0gIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDwhLS0gSGVhZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxuICAgICAgICAgICAgI1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICA8Yj5Tb3VyY2U8L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgIDxiPkV4YW1wbGU8L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgIDxiPlRhcmdldDwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPG5nLWNvbnRhaW5lciBmb3JtQXJyYXlOYW1lPVwibWFwcGluZ3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93IG1iLTRcIiAqbmdGb3I9XCJsZXQgZiBvZiBtYXBwaW5ncy5jb250cm9sczsgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cE5hbWVdPVwiaVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2kgKyAxfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cInNvdXJjZUxhYmVsKGkpIHwgc2FmZURvbTonaHRtbCdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTb21ldGhpbmcgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgZm9ybUNvbnRyb2xOYW1lPVwidGFyZ2V0SWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4uLi48L29wdGlvbj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG8gb2YgdGFyZ2V0Q29sdW1uc1wiIFt2YWx1ZV09XCJvLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJvLmxhYmVsIHwgc2FmZURvbTonaHRtbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+ICAgICAgICAgICAgICAgIFxuICAgIFxuPC9mb3JtPlxuIl19