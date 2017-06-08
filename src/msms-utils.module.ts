import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { MapByPipe } from "./pipes/map-by.pipe";
import { FilterByPipe } from "./pipes/filter-by.pipe";
@NgModule({
  declarations: [
    OrderByPipe, MapByPipe, FilterByPipe
  ],
  imports: [CommonModule, FormsModule],
  exports: [OrderByPipe, MapByPipe, FilterByPipe]
})
export class MsmsUtilsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MsmsUtilsModule
    };
  }

}
