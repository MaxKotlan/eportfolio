/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2 } from '@angular/core';
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sorted = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
    };
    /**
     * @param {?} headElement
     * @return {?}
     */
    MdbTableSortDirective.prototype.trimWhiteSigns = /**
     * @param {?} headElement
     * @return {?}
     */
    function (headElement) {
        return headElement.replace(/ /g, '');
    };
    /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    MdbTableSortDirective.prototype.moveArrayItem = /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            /** @type {?} */
            var k = newIndex - arr.length;
            while ((k--) + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MdbTableSortDirective.prototype.sortDataBy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        key = key.split('.');
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'ascending');
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
                return _this.sorted ? 1 : -1;
            }
            else if (a > b) {
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'descending');
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column ascending");
                return _this.sorted ? -1 : 1;
            }
            else if (a == null || b == null) {
                return 1;
            }
            else {
                return 0;
            }
        }));
        this.sorted = !this.sorted;
    };
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
    };
    MdbTableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableSort]'
                },] }
    ];
    /** @nocollapse */
    MdbTableSortDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbTableSortDirective.propDecorators = {
        dataSource: [{ type: Input, args: ['mdbTableSort',] }],
        sortBy: [{ type: Input }],
        sortEnd: [{ type: Output }],
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
if (false) {
    /** @type {?} */
    MdbTableSortDirective.prototype.sorted;
    /** @type {?} */
    MdbTableSortDirective.prototype.dataSource;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortBy;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortEnd;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWxIO0lBV0UsK0JBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVAvRCxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRVMsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUd6QyxZQUFPLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7SUFFRCxDQUFDOzs7O0lBRTVDLHVDQUFPOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLFdBQWdCO1FBQzdCLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7OztJQUVNLDZDQUFhOzs7Ozs7SUFBcEIsVUFBcUIsR0FBUSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDL0QsT0FBTyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ3hCO1FBQ0QsT0FB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LEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFKNkQsVUFBVTtnQkFBRSxTQUFTOzs7NkJBUWhGLEtBQUssU0FBQyxjQUFjO3lCQUNwQixLQUFLOzBCQUVMLE1BQU07MEJBSU4sWUFBWSxTQUFDLE9BQU87O0lBMER2Qiw0QkFBQztDQUFBLEFBdkVELElBdUVDO1NBcEVZLHFCQUFxQjs7O0lBQ2hDLHVDQUFjOztJQUVkLDJDQUFtRDs7SUFDbkQsdUNBQXdCOztJQUV4Qix3Q0FBbUU7Ozs7O0lBRXZELG1DQUFzQjs7Ozs7SUFBRSx5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlU29ydF0nXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlU29ydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNvcnRlZCA9IHRydWU7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzb3J0RW5kOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuc29ydERhdGFCeSh0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkpKTtcbiAgICB0aGlzLnNvcnRFbmQuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xuICB9XG5cbiAgdHJpbVdoaXRlU2lnbnMoaGVhZEVsZW1lbnQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGhlYWRFbGVtZW50LnJlcGxhY2UoLyAvZywgJycpO1xuICB9XG5cbiAgcHVibGljIG1vdmVBcnJheUl0ZW0oYXJyOiBhbnksIG9sZEluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpIHtcbiAgICB3aGlsZSAob2xkSW5kZXggPCAwKSB7XG4gICAgICBvbGRJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgbGV0IGsgPSBuZXdJbmRleCAtIGFyci5sZW5ndGg7XG4gICAgICB3aGlsZSAoKGstLSkgKyAxKSB7XG4gICAgICAgIGFyci5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBhcnIuc3BsaWNlKG5ld0luZGV4LCAwLCBhcnIuc3BsaWNlKG9sZEluZGV4LCAxKVswXSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHNvcnREYXRhQnkoa2V5OiBzdHJpbmcgfCBhbnkpIHtcbiAgICBrZXkgPSBrZXkuc3BsaXQoJy4nKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBrZXkubGVuZ3RoKSB7XG4gICAgICAgIGEgPSBhW2tleVtpXV07XG4gICAgICAgIGIgPSBiW2tleVtpXV07XG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtc29ydCcsICdhc2NlbmRpbmcnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1sYWJlbCcsIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGRlc2NlbmRpbmdgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLXNvcnQnLCAnZGVzY2VuZGluZycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWxhYmVsJywgYCR7a2V5fTogYWN0aXZhdGUgdG8gc29ydCBjb2x1bW4gYXNjZW5kaW5nYCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZCA/IC0xIDogMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc29ydGVkID0gIXRoaXMuc29ydGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy50cmltV2hpdGVTaWducyh0aGlzLnNvcnRCeS50b1N0cmluZygpKS5zcGxpdCgnLicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtbGFiZWwnLCBgJHtrZXl9OiBhY3RpdmF0ZSB0byBzb3J0IGNvbHVtbiBkZXNjZW5kaW5nYCk7XG4gIH1cbn1cbiJdfQ==