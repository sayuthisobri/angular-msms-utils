import { Component, Input } from '@angular/core';

@Component({
  selector: 'msms-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.style.scss']
})
export class TestComponent {
  @Input('title') title = '';
  name: string = 'msms';

  getName() {
    return this.name + '::' + this.title;
  }
}
