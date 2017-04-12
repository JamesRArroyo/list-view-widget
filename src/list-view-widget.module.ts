import {NgModule} from '@angular/core';
import {FilterPipe} from '@adev/filter-pipe';
import {OrderByPipe} from '@adev/order-by-pipe';
import {ListViewWidgetComponent} from './list-view-widget.component';


@NgModule({
    declarations: [
        ListViewWidgetComponent
    ],
    imports: [
        FilterPipe,
        OrderByPipe
    ],
    providers: [

    ],
    exports: [
        ListViewWidgetComponent,

    ]
})

export class ListViewWidgetModule {}
