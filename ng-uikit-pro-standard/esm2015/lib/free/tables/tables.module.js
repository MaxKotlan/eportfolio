/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbTableDirective } from './directives/mdb-table.directive';
import { MdbTableSortDirective } from './directives/mdb-table-sort.directive';
import { MdbTableScrollDirective } from './directives/mdb-table-scroll.directive';
import { MdbTableRowDirective } from './directives/mdb-table-row.directive';
import { MdbTableService } from './services/mdb-table.service';
import { MdbTablePaginationComponent } from './components/mdb-table-pagination.component';
export class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MdbTablePaginationComponent,
                    MdbTableRowDirective,
                    MdbTableScrollDirective,
                    MdbTableSortDirective,
                    MdbTableDirective
                ],
                exports: [
                    MdbTablePaginationComponent,
                    MdbTableRowDirective,
                    MdbTableScrollDirective,
                    MdbTableSortDirective,
                    MdbTableDirective
                ],
                entryComponents: [MdbTablePaginationComponent],
                providers: [MdbTableService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy90YWJsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFzQjFGLE1BQU0sT0FBTyxXQUFXOzs7WUFwQnZCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRTtvQkFDViwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLDJCQUEyQjtvQkFDM0Isb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsaUJBQWlCO2lCQUNwQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1kYlRhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi10YWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiVGFibGVTb3J0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi10YWJsZS1zb3J0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tZGItdGFibGUtc2Nyb2xsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tZGItdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21kYi10YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZGItdGFibGUtcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICAgIE1kYlRhYmxlUm93RGlyZWN0aXZlLFxuICAgICAgICBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSxcbiAgICAgICAgTWRiVGFibGVTb3J0RGlyZWN0aXZlLFxuICAgICAgICBNZGJUYWJsZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICAgIE1kYlRhYmxlUm93RGlyZWN0aXZlLFxuICAgICAgICBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSxcbiAgICAgICAgTWRiVGFibGVTb3J0RGlyZWN0aXZlLFxuICAgICAgICBNZGJUYWJsZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtNZGJUYWJsZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XG4iXX0=