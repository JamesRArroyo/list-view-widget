import {
    Component, OnInit, ViewChild, ViewContainerRef, ComponentRef,
    ComponentFactoryResolver, Compiler, ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-list-view-widget',
    templateUrl: 'list-view-widget.component.html',
    styleUrls: ['list-view-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})

export class ListViewWidgetComponent implements OnInit {

    public title: string;
    queryString: string;
    viewModelArray: any = [];
    primaryField: string;
    listIcons: any;
    canCreateNewItem = true;
    activeRecord: any;
    viewModelKey: string;
    modifications: any = [];
    type: any;
    cmpRef: ComponentRef<any>;
    @ViewChild('target', {read: ViewContainerRef}) target;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler, private cdRef: ChangeDetectorRef) {

    }

    // Assigns the title of the list.
    setTitle(title: string) {
        this.title = title;
    }

    // Assigns the data array to be listed.
    setListArray(viewModelArray: any, pField: string, icons: any) {
        this.viewModelArray = viewModelArray;
        this.primaryField = pField;
        this.listIcons = icons;
    }

    // Assigns the component to be used when an item in the list is selected.
    setViewComponent<T>(component: T, viewModelKey: string) {
        this.type = component;
        this.viewModelKey = viewModelKey;
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory);
    }

    // Destroys then recreates component
    reBuildDynamicComponent() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory);

        this.runModifyObjects();
    }

    // Adds modification to the modificaiton array
    modifyObject(objName: string, key: string, value: string) {
        this.modifications.push({objName, key, value});

        this.runModifyObjects();
    }

    // runs all modifications in the modificiation array
    runModifyObjects() {
        this.modifications.forEach(modification => {
            this.cmpRef.instance[modification.objName][modification.key] = modification.value;
        });
    }

    // Sets a record active.
    setActiveRecord(record) {
        this.reBuildDynamicComponent();
        this.activeRecord = record;
        this.cmpRef.instance[this.viewModelKey] = this.activeRecord;
    }

    newRecord() {
        this.reBuildDynamicComponent();

        // Create copy of viewModelArray
        let tmpArray = [];
        this.viewModelArray.forEach(item =>{
            tmpArray.push(item);
        })

        // Append new array with new blank obj
        const newPosition = tmpArray.length;
        tmpArray.push(this.cmpRef.instance[this.viewModelKey]);

        // Re-assign viewModelArray to trigger pipe changes.
        this.viewModelArray = tmpArray;

        this.activeRecord = this.viewModelArray[newPosition];
    }

    disableCreateNew() {
        this.canCreateNewItem = false;
    }

    // Deselects the active record.
    clearActive() {
    }

    ngOnInit() {
    }

}
