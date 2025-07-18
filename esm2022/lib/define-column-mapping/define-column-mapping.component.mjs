import { Component, Input } from '@angular/core';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@polpware/ngx-logger";
import * as i3 from "@angular/common";
import * as i4 from "@polpware/ngx-pipes";
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
    static { this.ɵfac = function DefineColumnMappingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DefineColumnMappingComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2.LoggerProviderImpl)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefineColumnMappingComponent, selectors: [["polp-define-column-mapping"]], inputs: { sourceColumns: "sourceColumns", targetColumns: "targetColumns", initValue: "initValue" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 2, consts: [[3, "formGroup"], [1, "form-row", "mb-4"], [1, "col-1"], [1, "col-4"], [1, "col-3"], ["formArrayName", "mappings"], ["class", "form-row mb-4", 4, "ngFor", "ngForOf"], [3, "formGroupName"], [3, "innerHtml"], ["formControlName", "targetId", 1, "form-control", "form-control-sm"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DefineColumnMappingComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i3.NgForOf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i4.SafeDomPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefineColumnMappingComponent, [{
        type: Component,
        args: [{ selector: 'polp-define-column-mapping', template: "<form  [formGroup]=\"form\">\n    <!-- Header -->\n    <div class=\"form-row mb-4\">\n        <div class=\"col-1\">\n            #\n        </div>\n        <div class=\"col-4\">\n            <b>Source</b>\n        </div>\n        <div class=\"col-3\">\n            <b>Example</b>\n        </div>\n        <div class=\"col-4\">\n            <b>Target</b>\n        </div>\n    </div>\n    \n    <ng-container formArrayName=\"mappings\">\n        <div class=\"form-row mb-4\" *ngFor=\"let f of mappings.controls; let i=index\">\n            <ng-container [formGroupName]=\"i\">\n                <div class=\"col-1\">\n                    {{i + 1}}\n                </div>\n                <div class=\"col-4\">\n                    <div [innerHtml]=\"sourceLabel(i) | safeDom:'html'\"></div>\n                </div>\n                <div class=\"col-3\">\n                    <!-- Something -->\n                </div>\n                <div class=\"col-4\">\n                    <select class=\"form-control form-control-sm\" formControlName=\"targetId\">\n                        <option value=\"\">...</option>                        \n                        <option *ngFor=\"let o of targetColumns\" [value]=\"o.id\">\n                            <span [innerHtml]=\"o.label | safeDom:'html'\">\n                            </span>\n                        </option>\n                    </select>\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>                \n    \n</form>\n" }]
    }], () => [{ type: i1.UntypedFormBuilder }, { type: i2.LoggerProviderImpl }], { sourceColumns: [{
            type: Input
        }], targetColumns: [{
            type: Input
        }], initValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DefineColumnMappingComponent, { className: "DefineColumnMappingComponent", filePath: "lib\\define-column-mapping\\define-column-mapping.component.ts", lineNumber: 63 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLWNvbHVtbi1tYXBwaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZGVmaW5lLWNvbHVtbi1tYXBwaW5nL2RlZmluZS1jb2x1bW4tbWFwcGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2RlZmluZS1jb2x1bW4tbWFwcGluZy9kZWZpbmUtY29sdW1uLW1hcHBpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0lDOEI3QyxrQ0FBdUQ7SUFDbkQsMEJBQ087O0lBQ1gsaUJBQVM7OztJQUgrQiwrQkFBYztJQUM1QyxjQUFzQztJQUF0Qyx1RkFBc0M7OztJQWZoRSw4QkFBNEU7SUFDeEUsZ0NBQWtDO0lBQzlCLDhCQUFtQjtJQUNmLFlBQ0o7SUFBQSxpQkFBTTtJQUNOLDhCQUFtQjtJQUNmLHlCQUF5RDs7SUFDN0QsaUJBQU07SUFDTix5QkFFTTtJQUdFLEFBREosQUFESiw4QkFBbUIsZ0JBQ3lELGtCQUNuRDtJQUFBLG9CQUFHO0lBQUEsaUJBQVM7SUFDN0IsNkZBQXVEO0lBSy9ELEFBREksaUJBQVMsRUFDUDs7SUFFZCxpQkFBTTs7OztJQXBCWSxjQUFtQjtJQUFuQixvQ0FBbUI7SUFFekIsZUFDSjtJQURJLHlDQUNKO0lBRVMsZUFBNkM7SUFBN0MscUdBQTZDO0lBUXhCLGVBQWdCO0lBQWhCLDhDQUFnQjs7QUQxQjlELFNBQVMsa0JBQWtCLENBQUMsS0FBZTtJQUN2QyxJQUFJLFdBQVcsR0FBK0IsTUFBTSxDQUFD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bXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1BcnJheSwgVW50eXBlZEZvcm1CdWlsZGVyLCBVbnR5cGVkRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBJTmd4TG9nZ2VyLCBMb2dnZXJQcm92aWRlckltcGwgfSBmcm9tICdAcG9scHdhcmUvbmd4LWxvZ2dlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZnVuY3Rpb24gZmluZEZpcnN0RHVwbGljYXRlKGFycmF5OiBzdHJpbmdbXSkge1xuICAgIHZhciB2YWx1ZXNTb0ZhcjogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcnJheVtpXTtcbiAgICAgICAgaWYgKHZhbHVlIGluIHZhbHVlc1NvRmFyKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzU29GYXJbdmFsdWVdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybVZhbGlkYXRvcih0YXJnZXRDb2x1bW5zOiBBcnJheTx7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICAgIHJlcXVpcmVkOiBib29sZWFuO1xufT4pIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IFVudHlwZWRGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0XG4gICAgICAgIGNvbnN0IG1hcHBpbmdzID0gY29udHJvbC5nZXQoJ21hcHBpbmdzJykgYXMgVW50eXBlZEZvcm1BcnJheTtcbiAgICAgICAgY29uc3Qgc3Vic2V0ID0gbWFwcGluZ3MuY29udHJvbHMuZmlsdGVyKCh4OiBVbnR5cGVkRm9ybUdyb3VwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0geC5nZXQoJ3RhcmdldElkJyk7XG4gICAgICAgICAgICByZXR1cm4gISFjaGVja2VkLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWRzID0gc3Vic2V0Lm1hcCgoeTogVW50eXBlZEZvcm1Hcm91cCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHkuZ2V0KCd0YXJnZXRJZCcpLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaGVjayByZWR1bmRhbmN5XG4gICAgICAgIGNvbnN0IGFueUR1cGxpY2F0ZSA9IGZpbmRGaXJzdER1cGxpY2F0ZSh0YXJnZXRJZHMpO1xuICAgICAgICBpZiAoYW55RHVwbGljYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gdGFyZ2V0Q29sdW1ucy5maW5kKGEgPT4gYS5pZCA9PSBhbnlEdXBsaWNhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGU6IGAke2Rlc2M/LmxhYmVsfSgke2Rlc2M/LmlkfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIHJlcXVpcmVkIGFyZSBpbmNsdWRlZC5cbiAgICAgICAgY29uc3QgYW55TWlzc2luZyA9IHRhcmdldENvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiBhLnJlcXVpcmVkKVxuICAgICAgICAgICAgLmZpbmQoYiA9PiAhdGFyZ2V0SWRzLnNvbWUoYyA9PiBjID09IGIuaWQpKTtcbiAgICAgICAgaWYgKGFueU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWlzc2luZzogYCR7YW55TWlzc2luZy5sYWJlbH0oJHthbnlNaXNzaW5nLmlkfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1kZWZpbmUtY29sdW1uLW1hcHBpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZWZpbmUtY29sdW1uLW1hcHBpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RlZmluZS1jb2x1bW4tbWFwcGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVmaW5lQ29sdW1uTWFwcGluZ0NvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgc291cmNlQ29sdW1uczogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgIH0+ID0gW107XG4gICAgQElucHV0KCkgdGFyZ2V0Q29sdW1uczogQXJyYXk8e1xuICAgICAgICBsYWJlbDogc3RyaW5nO1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICByZXF1aXJlZDogYm9vbGVhbjtcbiAgICB9PiA9IFtdO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogQXJyYXk8e1xuICAgICAgICBzb3VyY2VJZDogc3RyaW5nO1xuICAgICAgICB0YXJnZXRJZDogc3RyaW5nO1xuICAgIH0+ID0gW107XG5cbiAgICBmb3JtOiBVbnR5cGVkRm9ybUdyb3VwO1xuXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xvZ2dlcjogSU5neExvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2J1aWxkZXI6IFVudHlwZWRGb3JtQnVpbGRlcixcbiAgICAgICAgbG9nZ2VyUHJvdmlkZXI6IExvZ2dlclByb3ZpZGVySW1wbCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlclByb3ZpZGVyLmxvZ2dlcigncG9scF9kYXRhX3RyYW5zcG9ydF9kZWZpbmVfY29sdW1uX21hcHBpbmcnKTtcblxuICAgIH1cblxuICAgIGdldCBtYXBwaW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoJ21hcHBpbmdzJykgYXMgVW50eXBlZEZvcm1BcnJheTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gQnVpbGQgZm9ybVxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIG1hcHBpbmdzOiB0aGlzLl9idWlsZGVyLmFycmF5KFtdKVxuICAgICAgICB9LCB7IHZhbGlkYXRvcnM6IFttYWtlRm9ybVZhbGlkYXRvcih0aGlzLnRhcmdldENvbHVtbnMpXSB9KTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiID0gYS5tYXBwaW5ncyBhcyBBcnJheTx7IGNoZWNrZWQ6IGJvb2xlYW47IHNvdXJjZUlkOiBzdHJpbmc7IHRhcmdldElkOiBzdHJpbmcgfT47XG4gICAgICAgICAgICBjb25zdCBjID0gYi5maWx0ZXIoYiA9PiBiLnRhcmdldElkKTtcbiAgICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQuZW1pdChjKTtcbiAgICAgICAgICAgIHRoaXMub25WYWxpZGF0aW9uLmVtaXQodGhpcy5mb3JtLmVycm9ycyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNvdXJjZUNvbHVtbnMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgICAgICAgLy8gQnVpbGQgbWFwcGluZyBlbnRyaWVzXG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc291cmNlSWQ6IHNvdXJjZS5pZCxcbiAgICAgICAgICAgICAgICB0YXJnZXRJZDogJydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFueU1hcCA9IHRoaXMuaW5pdFZhbHVlLmZpbmQoeCA9PiB4LnNvdXJjZUlkID09IHNvdXJjZS5pZCk7XG4gICAgICAgICAgICBpZiAoYW55TWFwKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLnRhcmdldElkID0gYW55TWFwLnRhcmdldElkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1hcHBpbmdzLnB1c2godGhpcy5fYnVpbGRlci5ncm91cChyZWNvcmQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnIgJiYgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNvdXJjZUxhYmVsKGk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMubWFwcGluZ3MuY29udHJvbHNbaV0udmFsdWUuc291cmNlSWQ7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZUNvbHVtbnMuZmluZChhID0+IGEuaWQgPT0gaWQpLmxhYmVsO1xuICAgIH1cblxufVxuIiwiPGZvcm0gIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDwhLS0gSGVhZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxuICAgICAgICAgICAgI1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICA8Yj5Tb3VyY2U8L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgIDxiPkV4YW1wbGU8L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgIDxiPlRhcmdldDwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPG5nLWNvbnRhaW5lciBmb3JtQXJyYXlOYW1lPVwibWFwcGluZ3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93IG1iLTRcIiAqbmdGb3I9XCJsZXQgZiBvZiBtYXBwaW5ncy5jb250cm9sczsgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW2Zvcm1Hcm91cE5hbWVdPVwiaVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2kgKyAxfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cInNvdXJjZUxhYmVsKGkpIHwgc2FmZURvbTonaHRtbCdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTb21ldGhpbmcgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgZm9ybUNvbnRyb2xOYW1lPVwidGFyZ2V0SWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4uLi48L29wdGlvbj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG8gb2YgdGFyZ2V0Q29sdW1uc1wiIFt2YWx1ZV09XCJvLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJvLmxhYmVsIHwgc2FmZURvbTonaHRtbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+ICAgICAgICAgICAgICAgIFxuICAgIFxuPC9mb3JtPlxuIl19