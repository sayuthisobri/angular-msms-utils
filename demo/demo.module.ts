import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MsmsUtilsModule } from "../src";
import { DemoComponent } from "./demo.component";
import { DemoOrderByComponent } from "./pipes/demo-order-by.component";
import { DemoMappedByComponent } from "./pipes/demo-mapped-by.component";
import { DemoFilterByComponent } from "./pipes/demo-filter-by.component";

@NgModule({
  declarations: [DemoComponent, DemoOrderByComponent, DemoMappedByComponent, DemoFilterByComponent],
  imports: [BrowserModule, MsmsUtilsModule],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
