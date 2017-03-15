import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { TestComponent } from '../src/test.component';
import { MsmsUtilsModule } from '../src';

describe('msms-hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [MsmsUtilsModule.forRoot()]});
  });

  it('should contains msms', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.contains('msms');
  });

});
