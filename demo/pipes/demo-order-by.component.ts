/**
 * @author:msms
 * 04-Jun-17
 */
import { Component } from "@angular/core";
@Component({
  selector: 'demoOrderBy',
  template: `
    <pre>... someList | orderBy:expression:[isOverwrite] ...</pre>
    <table class="table table-bordered">
      <tr>
        <th>Original</th>
        <th>Expression</th>
        <th>Result</th>
      </tr>
      <tr *ngFor="let o of demo">
        <td>
          <pre>{{o.list | json}}</pre>
        </td>
        <td>
          <pre>{{o.expression}}</pre>
        </td>
        <td>
          <pre>{{o.list | orderBy:o.expression | json}}</pre>
        </td>
      </tr>
    </table>
  `
})
export class DemoOrderByComponent {

  list: number[] = [11, 100, 40, 5];
  list1: any[] = [{a: {b: 11}}, {a: {b: 3}}, {a: {b: 40}}, {a: {b: 0}}];
  demo: IOrderByDemo[] = [{
    list: this.list,
    expression: '+'
  }, {
    list: this.list,
    expression: '-'
  }, {
    list: this.list1,
    expression: 'a.b'
  }, {
    list: this.list1,
    expression: '-a.b'
  }];
}


export interface IOrderByDemo {
  list: any[];
  expression: string;
  isClone?: boolean;
  isReverse?: boolean;
}
