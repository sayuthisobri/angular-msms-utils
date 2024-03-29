/**
 * @author:msms
 * 04-Jun-17
 */
import { Pipe, PipeTransform } from "@angular/core";
import { isArray, isFunction, isObject } from "util";
@Pipe({
  name: 'mapBy',
  pure: false
})
export class MapByPipe implements PipeTransform {
  transform(value: any, fn: (o: any) => any): any {
    if (!isFunction(fn))return value;
    if (isArray(value)) {
      return value.map(fn);
    }
    if (isObject(value)) value = Object.assign({}, value);
    return fn(value);
  }
}
