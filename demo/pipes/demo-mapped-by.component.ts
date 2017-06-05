/**
 * @author:msms
 * 04-Jun-17
 */
import { Component } from "@angular/core";
@Component({
  selector: 'demoMappedBy',
  template: `
    <pre>... someList | mapBy:fn ...</pre>
    <table class="table table-bordered">
      <tr>
        <th>Original</th>
        <th>Function</th>
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
          <pre>{{o.object | mapBy:o.fn | json}}</pre>
        </td>
      </tr>
    </table>
  `
})
export class DemoMappedByComponent {
  demo: IMapByDemo[] = [{
    object: {a: 123, b: 'test'},
    fn: o => {
      o['a']++;
      o['c'] = 'new prop';
      return o;
    },
    fnDesc: `o => {
      o['a']++;
      o['c'] = 'new prop';
      return o;
    }`
  }, {
    object: [1, 4, 6, 7, 9, 33],
    fn: num => num * 2,
    fnDesc: `num => num * 2`
  }, {
    object: [1.2, 4.7, 6, 7, 9, 33],
    fn: num => 'RM ' + (parseFloat(num).toFixed(2)),
    fnDesc: `num => 'RM ' + (parseFloat(num).toFixed(2))`
  }];
}


export interface IMapByDemo {
  object: any | any[];
  fn: (any) => any;
  fnDesc: string;
}
