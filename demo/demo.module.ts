import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsmsUtilsModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, MsmsUtilsModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}