## Synopsis

An Angular 2 Component that displays a vertical list of objects with a detailed view using a custom dynamic component.

## Motivation

I found myself in multiple situations where I needed to display a list of items with a detailed view when selected. In many cases this detailed view was already written so to avoid duplicate code the detailed view creates a dynamic component on the fly.

## Installation

```npm install git+https://github.com/JamesRArroyo/list-view-widget```

## Code Example

The following example sets up a basic list of users with a user component dynamically created to its right. 

```typescript

import {Component, OnInit, ViewChild} from '@angular/core';
import {ListViewWidgetComponent} from '@abox/object-list-with-dynamic-detail';
import {UserComponent} from '../../user/client/user.component';

// Be sure to add the ListViewWidgetModule as an import in your module (the SampleModule in this case)

// Sample Component

@Component({
    selector: 'app-sample',
    template: `
            <app-list-view-widget #users></app-list-view-widget>
        `,
    styleUrls: [],
    providers: []
})

export class SampleComponent implements OnInit {

    // Create a view child for dynamic component
    @ViewChild('users') UsersListViewWidget: ListViewWidgetComponent;


    constructor(private userService: UserService) {
    }

    ngOnInit() {
        const users = [
            {'displayName': 'John Doe', 'firstName': 'John', 'lastName': 'Doe'},
            {'displayName': 'James Bond', 'firstName': 'James', 'lastName': 'Bond'},
            {'displayName': 'Bill Gates', 'firstName': 'Bill', 'lastName': 'Gates'}
        ]

        /*Setup UsersListViewWidget*/

        // Define the item array to list, what fields to show in the list and a material design icon to show
        this.UsersListViewWidget.setListArray([], 'displayName', ['person']);

        // Define what component should be created dynamically and the variable to bind the selected value in the list to inside of the dynamic component.
        this.UsersListViewWidget.setViewComponent(UserComponent, 'user');
    }


}
```

## License

The MIT License (MIT)

Copyright (c) 2017 Jimmy Arroyo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.