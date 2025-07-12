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
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 13);
    i0.ɵɵlistener("click", function DropFileModalComponent_div_8_Template_button_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const f_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onRemove(f_r2)); });
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
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropFileModalComponent, selectors: [["polp-drop-file-modal"]], inputs: { multiple: "multiple", accept: "accept", maxFileSizeInBytes: "maxFileSizeInBytes" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 6, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "multiple", "accept", "onFileDrop"], ["ngx-file-drop-content-tmp", ""], [1, "file-previews"], ["class", "preview-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "me-1", 3, "icon"], [1, "preview-item"], [3, "click"]], template: function DropFileModalComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("icon", ctx.faSave);
        } }, dependencies: [i2.NgForOf, i3.NgxFileDropComponent, i3.NgxFileDropContentTemplateDirective, i4.polpModalDraggableDirective, i5.FaIconComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropFileModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-drop-file-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"close()\">\n    </button>\n</div>\n<div class=\"modal-body\">\n    <ngx-file-drop\n        [multiple]=\"multiple\"\n        [accept]=\"accept\"\n        (onFileDrop)=\"onSelect($event)\">\n        <ng-template ngx-file-drop-content-tmp>\n            Drop a file\n        </ng-template>\n    </ngx-file-drop>\n\n    <div class=\"file-previews\">\n        <div class=\"preview-item\" *ngFor=\"let f of items\">\n            <span>{{ f.name }} ({{ f.type }})</span>\n            <button (click)=\"onRemove(f)\">Remove</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cancel</button>\n    <button class=\"btn btn-primary\" (click)=\"confirm()\" [disabled]=\"!valid\">\n        <fa-icon [icon]=\"faSave\" class=\"me-1\"></fa-icon> <span>Confirm</span>\n    </button>\n</div>\n" }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, { multiple: [{
            type: Input
        }], accept: [{
            type: Input
        }], maxFileSizeInBytes: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1maWxlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2RhdGEtdHJhbnNwb3J0L3NyYy9saWIvZHJvcC1maWxlLW1vZGFsL2Ryb3AtZmlsZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9kYXRhLXRyYW5zcG9ydC9zcmMvbGliL2Ryb3AtZmlsZS1tb2RhbC9kcm9wLWZpbGUtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7OztJQ1EvQyw2QkFDSjs7OztJQUlBLCtCQUFrRCxXQUFBO0lBQ3hDLFlBQTJCO0lBQUEsaUJBQU87SUFDeEMsa0NBQThCO0lBQXRCLDJOQUFTLGVBQUEscUJBQVcsQ0FBQSxJQUFDO0lBQUMsc0JBQU07SUFBQSxpQkFBUyxFQUFBOzs7SUFEdkMsZUFBMkI7SUFBM0IsMERBQTJCOztBREM3QyxNQUFNLE9BQU8sc0JBQ1QsU0FBUSxnQ0FBcUQ7SUFnQjdELFlBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBRWpELEtBQUssRUFBRSxDQUFDO1FBSFEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmckQsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUVoQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsVUFBSyxHQUFHLGVBQWUsQ0FBQztRQUd4QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFFckIsdUJBQWtCLEdBQVcsU0FBUyxDQUFDO0lBT3ZDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUF5QjtRQUM5QixLQUFLLE1BQU0sV0FBVyxJQUFJLEtBQUssRUFBRTtZQUM3QixnQkFBZ0I7WUFDaEIsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQWdDLENBQUM7Z0JBQy9ELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO3dCQUM5RixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUN0QztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILHlFQUF5RTthQUM1RTtTQUNKO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzt1RkF4RFEsc0JBQXNCO29FQUF0QixzQkFBc0I7WUNsQm5DLDhCQUE2QyxZQUFBO1lBQ2pCLFlBQVM7WUFBQSxpQkFBSztZQUN0QyxpQ0FBNkU7WUFBbEIsbUdBQVMsV0FBTyxJQUFDO1lBQzVFLGlCQUFTLEVBQUE7WUFFYiw4QkFBd0IsdUJBQUE7WUFJaEIsMEhBQWMsb0JBQWdCLElBQUM7WUFDL0IsdUZBRWM7WUFDbEIsaUJBQWdCO1lBRWhCLDhCQUEyQjtZQUN2Qix1RUFHTTtZQUNWLGlCQUFNLEVBQUE7WUFHViw4QkFBMEIsaUJBQUE7WUFDMEIsb0dBQVMsV0FBTyxJQUFDO1lBQUMsdUJBQU07WUFBQSxpQkFBUztZQUNqRixtQ0FBd0U7WUFBeEMsb0dBQVMsYUFBUyxJQUFDO1lBQy9DLCtCQUFnRDtZQUFDLDZCQUFNO1lBQUEsd0JBQU87WUFBQSxpQkFBTyxFQUFBLEVBQUE7O1lBekJqRCxlQUFTO1lBQVQsK0JBQVM7WUFNN0IsZUFBcUI7WUFBckIsdUNBQXFCLHNCQUFBO1lBU21CLGVBQVE7WUFBUixtQ0FBUTtZQVNBLGVBQW1CO1lBQW5CLHFDQUFtQjtZQUMxRCxlQUFlO1lBQWYsaUNBQWU7Ozt1RkRSbkIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0ksc0JBQXNCOzBGQWVoQyxRQUFRO2tCQURQLEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixrQkFBa0I7a0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IGZhU2F2ZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBOZ3hGaWxlRHJvcEVudHJ5IH0gZnJvbSAnbmd4LWZpbGUtZHJvcCc7XG5cbi8vIHRvZG86IENvbmZpZ3VyYXRpb24gXG5leHBvcnQgaW50ZXJmYWNlIElNb2RhbElucHV0IHtcbiAgICBtdWx0aXBsZT86IGJvb2xlYW47XG4gICAgYWNjZXB0Pzogc3RyaW5nO1xuICAgIG1heEZpbGVTaXplSW5CeXRlcz86IG51bWJlcjsgLy8gYnlldHNcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWRyb3AtZmlsZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3AtZmlsZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZHJvcC1maWxlLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRmlsZU1vZGFsQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJTW9kYWxJbnB1dCwgRmlsZVtdPlxuICAgIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZhU2F2ZSA9IGZhU2F2ZTtcblxuICAgIGl0ZW1zOiBGaWxlW10gPSBbXTtcbiAgICB2YWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHRpdGxlID0gJ1NlbGVjdCBhIGZpbGUnO1xuXG4gICAgQElucHV0KClcbiAgICBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpXG4gICAgYWNjZXB0OiBzdHJpbmcgPSAnKic7XG4gICAgQElucHV0KClcbiAgICBtYXhGaWxlU2l6ZUluQnl0ZXM6IG51bWJlciA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG9uU2VsZWN0KGZpbGVzOiBOZ3hGaWxlRHJvcEVudHJ5W10pIHtcbiAgICAgICAgZm9yIChjb25zdCBkcm9wcGVkRmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgLy8gSXMgaXQgYSBmaWxlP1xuICAgICAgICAgICAgaWYgKGRyb3BwZWRGaWxlLmZpbGVFbnRyeS5pc0ZpbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRW50cnkgPSBkcm9wcGVkRmlsZS5maWxlRW50cnkgYXMgRmlsZVN5c3RlbUZpbGVFbnRyeTtcbiAgICAgICAgICAgICAgICBmaWxlRW50cnkuZmlsZSgoZmlsZTogRmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWF4RmlsZVNpemVJbkJ5dGVzIHx8ICh0aGlzLm1heEZpbGVTaXplSW5CeXRlcyAmJiBmaWxlLnNpemUgPCB0aGlzLm1heEZpbGVTaXplSW5CeXRlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbLi4udGhpcy5pdGVtcywgZmlsZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSXQgd2FzIGEgZGlyZWN0b3J5IChlbXB0eSBkaXJlY3RvcmllcyBhcmUgYWRkZWQsIG90aGVyd2lzZSBvbmx5IGZpbGVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWxpZCA9IHRoaXMuaXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBvblJlbW92ZShldmVudDogRmlsZSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoeCA9PiB4ICE9IGV2ZW50KTtcbiAgICAgICAgdGhpcy52YWxpZCA9IHRoaXMuaXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbChudWxsKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBwb2xwTW9kYWxEcmFnZ2FibGU+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8bmd4LWZpbGUtZHJvcFxuICAgICAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuICAgICAgICBbYWNjZXB0XT1cImFjY2VwdFwiXG4gICAgICAgIChvbkZpbGVEcm9wKT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIG5neC1maWxlLWRyb3AtY29udGVudC10bXA+XG4gICAgICAgICAgICBEcm9wIGEgZmlsZVxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmd4LWZpbGUtZHJvcD5cblxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXdzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWl0ZW1cIiAqbmdGb3I9XCJsZXQgZiBvZiBpdGVtc1wiPlxuICAgICAgICAgICAgPHNwYW4+e3sgZi5uYW1lIH19ICh7eyBmLnR5cGUgfX0pPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25SZW1vdmUoZilcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2UoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiY29uZmlybSgpXCIgW2Rpc2FibGVkXT1cIiF2YWxpZFwiPlxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVNhdmVcIiBjbGFzcz1cIm1lLTFcIj48L2ZhLWljb24+IDxzcGFuPkNvbmZpcm08L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==