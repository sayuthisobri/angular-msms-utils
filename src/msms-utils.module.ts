import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { MapByPipe } from "./pipes/map-by.pipe";

@NgModule({
  declarations: [
    OrderByPipe,
    MapByPipe
  ],
  imports: [CommonModule, FormsModule],
  exports: [OrderByPipe, MapByPipe]
})
export class MsmsUtilsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MsmsUtilsModule
    };
  }

}
