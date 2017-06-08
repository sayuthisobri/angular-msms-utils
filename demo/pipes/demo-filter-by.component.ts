/**
 * @author:msms
 * 04-Jun-17
 */
import { Component } from "@angular/core";
@Component({
  selector: 'demoFilterBy',
  template: `
    <pre>... someList | filterBy:fn ...</pre>
    <table class="table table-bordered">
      <tr>
        <th>Original</th>
        <th>Function/Object</th>
        <th>Result</th>
      </tr>
      <tr *ngFor="let o of demo">
        <td>
          <pre>{{o.object | json}}</pre>
        </td>
        <td>
          <pre>{{o.fnDesc}}</pre>
        </td>
        <td>
          <pre>{{o.object | filterBy:o.fn | json}}</pre>
        </td>
      </tr>
    </table>
  `
})
export class DemoFilterByComponent {
  demo: IMapByDemo[] = [{
    object: [{a: 123, b: 'test', c: 89}, {a: 325, b: 'xoxo', c: 69}],
    fn: {
      a: true,
      c: true
    },
    fnDesc: `{
  a: true,
  b: false,
  c: true
}`
  }, {
    object: {a: 123, b: 'test', c: 89},
    fn: {
      b: true,
      c: true
    },
    fnDesc: `{
  b: true,
  c: true
}`
  }, {
    object: [1, 4, 6, 7, 9, 33],
    fn: num => num % 2 == 0,
    fnDesc: `num => num % 2 == 0`
  }, {
    object: [1.2, 4.7, 6, 7, 9, 33],
    fn: num => num > 5,
    fnDesc: `num => num > 5`
  }];
}


export interface IMapByDemo {
  object: any | any[];
  fn: ((any) => any) | any;
  fnDesc: string;
}
