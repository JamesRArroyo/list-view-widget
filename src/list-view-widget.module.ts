import {NgModule} from '@angular/core';
import {FilterPipeModule} from '@adev/filter-pipe';
import {OrderByPipeModule} from '@adev/order-by-pipe';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

import {ListViewWidgetComponent} from './list-view-widget.component';


@NgModule({
    declarations: [
        ListViewWidgetComponent
    ],
    imports: [
        FilterPipeModule,
        OrderByPipeModule,
        BrowserModule,
        FormsModule,
        MaterialModule,
    ],
    providers: [

    ],
    exports: [
        ListViewWidgetComponent,

    ]
})

export class ListViewWidgetModule {}
