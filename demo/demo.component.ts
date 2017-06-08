import { Component } from "@angular/core";

@Component({
  selector: 'msms-demo-app',
  template: `
    <div class="container-fluid panel panel-default">
      <div class="panel-body">
        <ul class="list-group">
          <li class="list-group-item"><a href="#orderByPipe">OrderBy Pipe</a></li>
          <li class="list-group-item"><a href="#mapByPipe">MapBy Pipe</a></li>
          <li class="list-group-item"><a href="#filterByPipe">FilterBy Pipe</a></li>
        </ul>
        <hr/>
        <h3 id="orderByPipe">OrderBy Pipe</h3>
        <demoOrderBy></demoOrderBy>
        <h3 id="mapByPipe">MapBy Pipe</h3>
        <demoMappedBy></demoMappedBy>
        <h3 id="filterByPipe">FilterBy Pipe</h3>
        <demoFilterBy></demoFilterBy>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class DemoComponent {
}
