import { Component, Input } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "ngx-file-drop";
import * as i4 from "@polpware/modal-directives";
import * as i5 from "@fortawesome/angular-fontawesome";
function DropFileModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Drop a file ");
} }
function DropFileModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 13);
    i0.ɵɵlistener("click", function DropFileModalComponent_div_8_Template_button_click_3_listener() { const f_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onRemove(f_r2)); });
    i0.ɵɵtext(4, "Remove");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r2.name, " (", f_r2.type, ")");
} }
export class DropFileModalComponent extends ObservableModalAbstractComponent {
    constructor(bsModalRef, bsModalService) {
        super();
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.faSave = faSave;
        this.items = [];
        this.valid = false;
        this.title = 'Select a file';
        this.multiple = false;
        this.accept = '*';
        this.maxFileSizeInBytes = undefined;
    }
    ngOnInit() {
    }
    onSelect(files) {
        for (const droppedFile of files) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry;
                fileEntry.file((file) => {
                    if (!this.maxFileSizeInBytes || (this.maxFileSizeInBytes && file.size < this.maxFileSizeInBytes)) {
                        this.items = [...this.items, file];
                    }
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
            }
        }
        this.valid = this.items.length > 0;
    }
    onRemove(event) {
        this.items = this.items.filter(x => x != event);
        this.valid = this.items.length > 0;
    }
    confirm() {
        this.closeModal(this.items);
    }
    close() {
        this.closeModal(null);
    }
    static { this.ɵfac = function DropFileModalComponent_Factory(t) { return new (t || DropFileModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropFileModalComponent, selectors: [["polp-drop-file-modal"]], inputs: { multiple: "multiple", accept: "accept", maxFileSizeInBytes: "maxFileSizeInBytes" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 6, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "onFileDrop", "multiple", "accept"], ["ngx-file-drop-content-tmp", ""], [1, "file-previews"], ["class", "preview-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "me-1", 3, "icon"], [1, "preview-item"], [3, "click"]], template: function DropFileModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function DropFileModalComponent_Template_button_click_3_listener() { return ctx.close(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3)(5, "ngx-file-drop", 4);
            i0.ɵɵlistener("onFileDrop", function DropFileModalComponent_Template_ngx_file_drop_onFileDrop_5_listener($event) { return ctx.onSelect($event); });
            i0.ɵɵtemplate(6, DropFileModalComponent_ng_template_6_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵtemplate(8, DropFileModalComponent_div_8_Template, 5, 2, "div", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 8)(10, "button", 9);
            i0.ɵɵlistener("click", function DropFileModalComponent_Template_button_click_10_listener() { return ctx.close(); });
            i0.ɵɵtext(11, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 10);
            i0.ɵɵlistener("click", function DropFileModalComponent_Template_button_click_12_listener() { return ctx.confirm(); });
            i0.ɵɵelement(13, "fa-icon", 11);
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "Confirm");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("multiple", ctx.multiple)("accept", ctx.accept);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx.valid);
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", ctx.faSave);
        } }, dependencies: [i2.NgForOf, i3.NgxFileDropComponent, i3.NgxFileDropContentTemplateDirective, i4.polpModalDraggableDirective, i5.FaIconComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropFileModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-drop-file-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ngx-file-drop\n        [multiple]=\"multiple\"\n        [accept]=\"accept\"\n        (onFileDrop)=\"onSelect($event)\">\n        <ng-template ngx-file-drop-content-tmp>\n            Drop a file\n        </ng-template>\n    </ngx-file-drop>\n\n    <div class=\"file-previews\">\n        <div class=\"preview-item\" *ngFor=\"let f of items\">\n            <span>{{ f.name }} ({{ f.type }})</span>\n            <button (click)=\"onRemove(f)\">Remove</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cancel</button>\n    <button class=\"btn btn-primary\" (click)=\"confirm()\" [disabled]=\"!valid\">\n        <fa-icon [icon]=\"faSave\" class=\"me-1\"></fa-icon> <span>Confirm</span>\n    </button>\n</div>\n" }]
    }], () => [{ type: i1.BsModalRef }, { type: i1.BsModalService }], { multiple: [{
            type: Input
        }], accept: [{
            type: Input
        }], maxFileSizeInBytes: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropFileModalComponent, { className: "DropFileModalComponent", filePath: "lib\\drop-file-modal\\drop-file-modal.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1maWxlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZHJvcC1maWxlLW1vZGFsL2Ryb3AtZmlsZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2Ryb3AtZmlsZS1tb2RhbC9kcm9wLWZpbGUtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7OztJQ1EvQyw2QkFDSjs7OztJQUtJLEFBREosK0JBQWtELFdBQ3hDO0lBQUEsWUFBMkI7SUFBQSxpQkFBTztJQUN4QyxrQ0FBOEI7SUFBdEIseU1BQVMscUJBQVcsS0FBQztJQUFDLHNCQUFNO0lBQ3hDLEFBRHdDLGlCQUFTLEVBQzNDOzs7SUFGSSxlQUEyQjtJQUEzQiwwREFBMkI7O0FEQzdDLE1BQU0sT0FBTyxzQkFDVCxTQUFRLGdDQUFxRDtJQWdCN0QsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFFakQsS0FBSyxFQUFFLENBQUM7UUFIUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWZyRCxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWhCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixVQUFLLEdBQUcsZUFBZSxDQUFDO1FBR3hCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUVyQix1QkFBa0IsR0FBVyxTQUFTLENBQUM7SUFPdkMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQXlCO1FBQzlCLEtBQUssTUFBTSxXQUFXLElBQUksS0FBSyxFQUFFLENBQUM7WUFDOUIsZ0JBQWdCO1lBQ2hCLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDL0IsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQWdDLENBQUM7Z0JBQy9ELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7d0JBQy9GLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO2lCQUFNLENBQUM7Z0JBQ0oseUVBQXlFO1lBQzdFLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzt1RkF4RFEsc0JBQXNCO29FQUF0QixzQkFBc0I7WUNqQi9CLEFBREosOEJBQTZDLFlBQ2pCO1lBQUEsWUFBUztZQUFBLGlCQUFLO1lBQ3RDLGlDQUE2RTtZQUFsQixtR0FBUyxXQUFPLElBQUM7WUFFaEYsQUFESSxpQkFBUyxFQUNQO1lBRUYsQUFESiw4QkFBd0IsdUJBSWdCO1lBQWhDLDBIQUFjLG9CQUFnQixJQUFDO1lBQy9CLHVGQUF1QztZQUczQyxpQkFBZ0I7WUFFaEIsOEJBQTJCO1lBQ3ZCLHVFQUFrRDtZQUsxRCxBQURJLGlCQUFNLEVBQ0o7WUFHRixBQURKLDhCQUEwQixpQkFDNEM7WUFBbEIsb0dBQVMsV0FBTyxJQUFDO1lBQUMsdUJBQU07WUFBQSxpQkFBUztZQUNqRixtQ0FBd0U7WUFBeEMsb0dBQVMsYUFBUyxJQUFDO1lBQy9DLCtCQUFnRDtZQUFDLDZCQUFNO1lBQUEsd0JBQU87WUFFdEUsQUFESSxBQURrRSxpQkFBTyxFQUNoRSxFQUNQOztZQTNCc0IsZUFBUztZQUFULCtCQUFTO1lBTTdCLGVBQXFCO1lBQ3JCLEFBREEsdUNBQXFCLHNCQUNKO1lBUXVCLGVBQVE7WUFBUixtQ0FBUTtZQVNBLGVBQW1CO1lBQW5CLHFDQUFtQjtZQUMxRCxjQUFlO1lBQWYsaUNBQWU7OztpRkRSbkIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0ksc0JBQXNCO3dFQWVoQyxRQUFRO2tCQURQLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixrQkFBa0I7a0JBRGpCLEtBQUs7O2tGQWRHLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgZmFTYXZlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IE5neEZpbGVEcm9wRW50cnkgfSBmcm9tICduZ3gtZmlsZS1kcm9wJztcblxuLy8gdG9kbzogQ29uZmlndXJhdGlvbiBcbmV4cG9ydCBpbnRlcmZhY2UgSU1vZGFsSW5wdXQge1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICBhY2NlcHQ/OiBzdHJpbmc7XG4gICAgbWF4RmlsZVNpemVJbkJ5dGVzPzogbnVtYmVyOyAvLyBieWV0c1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZHJvcC1maWxlLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcC1maWxlLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wLWZpbGUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3BGaWxlTW9kYWxDb21wb25lbnRcbiAgICBleHRlbmRzIE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50PElNb2RhbElucHV0LCBGaWxlW10+XG4gICAgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZmFTYXZlID0gZmFTYXZlO1xuXG4gICAgaXRlbXM6IEZpbGVbXSA9IFtdO1xuICAgIHZhbGlkOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGl0bGUgPSAnU2VsZWN0IGEgZmlsZSc7XG5cbiAgICBASW5wdXQoKVxuICAgIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KClcbiAgICBhY2NlcHQ6IHN0cmluZyA9ICcqJztcbiAgICBASW5wdXQoKVxuICAgIG1heEZpbGVTaXplSW5CeXRlczogbnVtYmVyID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25TZWxlY3QoZmlsZXM6IE5neEZpbGVEcm9wRW50cnlbXSkge1xuICAgICAgICBmb3IgKGNvbnN0IGRyb3BwZWRGaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgICAvLyBJcyBpdCBhIGZpbGU/XG4gICAgICAgICAgICBpZiAoZHJvcHBlZEZpbGUuZmlsZUVudHJ5LmlzRmlsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVFbnRyeSA9IGRyb3BwZWRGaWxlLmZpbGVFbnRyeSBhcyBGaWxlU3lzdGVtRmlsZUVudHJ5O1xuICAgICAgICAgICAgICAgIGZpbGVFbnRyeS5maWxlKChmaWxlOiBGaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXhGaWxlU2l6ZUluQnl0ZXMgfHwgKHRoaXMubWF4RmlsZVNpemVJbkJ5dGVzICYmIGZpbGUuc2l6ZSA8IHRoaXMubWF4RmlsZVNpemVJbkJ5dGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFsuLi50aGlzLml0ZW1zLCBmaWxlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJdCB3YXMgYSBkaXJlY3RvcnkgKGVtcHR5IGRpcmVjdG9yaWVzIGFyZSBhZGRlZCwgb3RoZXJ3aXNlIG9ubHkgZmlsZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbGlkID0gdGhpcy5pdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlKGV2ZW50OiBGaWxlKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcih4ID0+IHggIT0gZXZlbnQpO1xuICAgICAgICB0aGlzLnZhbGlkID0gdGhpcy5pdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiIHBvbHBNb2RhbERyYWdnYWJsZT5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7dGl0bGV9fTwvaDQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxuZ3gtZmlsZS1kcm9wXG4gICAgICAgIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgIFthY2NlcHRdPVwiYWNjZXB0XCJcbiAgICAgICAgKG9uRmlsZURyb3ApPVwib25TZWxlY3QoJGV2ZW50KVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgbmd4LWZpbGUtZHJvcC1jb250ZW50LXRtcD5cbiAgICAgICAgICAgIERyb3AgYSBmaWxlXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZ3gtZmlsZS1kcm9wPlxuXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtcHJldmlld3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctaXRlbVwiICpuZ0Zvcj1cImxldCBmIG9mIGl0ZW1zXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBmLm5hbWUgfX0gKHt7IGYudHlwZSB9fSk8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblJlbW92ZShmKVwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjbG9zZSgpXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJjb25maXJtKClcIiBbZGlzYWJsZWRdPVwiIXZhbGlkXCI+XG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhU2F2ZVwiIGNsYXNzPVwibWUtMVwiPjwvZmEtaWNvbj4gPHNwYW4+Q29uZmlybTwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19