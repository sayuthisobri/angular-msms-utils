import { Pipe, PipeTransform } from "@angular/core";
import { isArray, isObject, isString } from "util";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any | any[], expression?: any, overwrite?: boolean, reverse?: boolean): any {
    if (isString(expression)) {
      if (expression.indexOf('-') == 0) reverse = true;
      expression = expression.replace(/[-+]/g, '');
    }
    if (!value) return value;
    if (isArray(value))
      return this.sortArray(value, expression, overwrite, reverse);
    if (isObject(value))
      return this.transformObject(value, expression, overwrite, reverse);
    return value;
  }

  /**
   * Sort array
   *
   * @param value
   * @param expression
   * @param overwrite
   * @param reverse
   * @returns {any[]}
   */
  private sortArray(value: any[], expression?: any, overwrite?: boolean, reverse?: boolean): any[] {
    if (!overwrite) value = value.slice(0); //only touch original value if overwrite is set
    let array: any[] = value.sort((a: any, b: any): number => {
      if (!expression) return a > b ? 1 : -1;
      return OrderByPipe.parseValue(a, expression) > OrderByPipe.parseValue(b, expression) ? 1 : -1;
    });
    if (reverse) return array.reverse();
    return array;
  }


  /**
   * Transform Object
   *
   * @param value
   * @param expression
   * @param overwrite
   * @param reverse
   * @returns {any[]}
   */
  private transformObject(value: any | any[], expression?: any, overwrite?: boolean, reverse?: boolean): any {
    let parsedExpression = OrderByPipe.parseExpression(expression);
    let lastPredicate = parsedExpression.pop();
    let oldValue = OrderByPipe.getValue(value, parsedExpression);

    if (!(oldValue instanceof Array)) {
      parsedExpression.push(lastPredicate);
      lastPredicate = null;
      oldValue = OrderByPipe.getValue(value, parsedExpression);
    }

    if (!oldValue) {
      return value;
    }

    const newValue = this.transform(oldValue, lastPredicate, overwrite, reverse);
    OrderByPipe.setValue(value, newValue, parsedExpression);
    return value;
  }

  /**
   * Parse expression, split into items
   * @param expression
   * @returns {string[]}
   */
  private static parseExpression(expression: string): string[] {
    return (expression + '')
      .replace(/\[(\w+)]/g, '.$1')
      .replace(/^\./, '')
      .split('.');
  }

  /**
   * Get value by expression
   *
   * @param object
   * @param expression
   * @returns {any}
   */
  private static getValue(object: any, expression: string[]) {
    expression.forEach(exp => {
      if (!(exp in object))return;
      object = object[exp];
    });

    return object;
  }

  /**
   * Set value by expression
   *
   * @param object
   * @param value
   * @param expression
   */
  private static setValue(object: any, value: any, expression: string[]) {

    let i;
    expression.forEach((exp, index) => {
      object = object[exp];
      i = index + 1;
    });
    if (i) object[expression[i]] = value;
  }

  private static parseValue(obj, is?, value?) {
    if (isString(is))
      return OrderByPipe.parseValue(obj, OrderByPipe.parseExpression(is), value);
    else if (is.length == 1 && value !== undefined)
      return obj[is[0]] = value;
    else if (is.length == 0)
      return obj;
    else
      return OrderByPipe.parseValue(obj[is[0]], is.slice(1), value);
  }
}
