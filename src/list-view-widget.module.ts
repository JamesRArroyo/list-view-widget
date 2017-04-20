import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

import {ListViewWidgetComponent} from './list-view-widget.component';
import {OrderByPipe} from './pipes/orderBy.pipe';
import {SearchPipe} from './pipes/search.pipe';


@NgModule({
    declarations: [
        ListViewWidgetComponent,
        SearchPipe,
        OrderByPipe,
    ],
    imports: [
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
