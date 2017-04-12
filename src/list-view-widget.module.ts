import {NgModule} from '@angular/core';
import {FilterPipeModule} from '@adev/filter-pipe';
import {ListViewWidgetComponent} from './list-view-widget.component';


@NgModule({
    declarations: [
        ListViewWidgetComponent
    ],
    imports: [
        FilterPipeModule
    ],
    providers: [

    ],
    exports: [
        ListViewWidgetComponent,

    ]
})

export class ListViewWidgetModule {}
