import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
    name : 'orderByPipe',
    pure: false
})
// Sorts a list of objects by an objects key
export class OrderByPipe implements PipeTransform {
    public transform(values, key: string) {
        const x = _.sortBy(values, key);
        return x;
    }
}