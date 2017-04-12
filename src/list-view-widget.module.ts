import {NgModule} from '@angular/core';
import {FilterPipeModule} from '@adev/filter-pipe';
import {OrderByPipeModule} from '@adev/order-by-pipe';
import {ListViewWidgetComponent} from './list-view-widget.component';


@NgModule({
    declarations: [
        ListViewWidgetComponent
    ],
    imports: [
        FilterPipeModule,
        OrderByPipeModule
    ],
    providers: [

    ],
    exports: [
        ListViewWidgetComponent,

    ]
})

export class ListViewWidgetModule {}
