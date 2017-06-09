/**
 * @author:msms
 * 04-Jun-17
 */
import { Pipe, PipeTransform } from "@angular/core";
import { isArray, isFunction, isObject } from "util";
@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {
  transform(value: any, fn: ((o: any) => any) | any): any {

    if (isFunction(fn)) {
      if (isArray(value)) return value.filter(fn);
    }
    if (isObject(fn)) {
      const map = (o) => {
        let o1 = {};
        for (let key in fn) {
          if (fn.hasOwnProperty(key) && fn[key] && o.hasOwnProperty(key)) {
            o1[key] = o[key];
          }
        }
        return o1;
      };
      if (isArray(value)) return value.map(map);
      if (isObject(value)) return map(value);
    }
    return value;
  }
}
