import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { CreateComponent } from './create/create.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [StockComponent, CreateComponent],
  imports: [CommonModule, StockRoutingModule, ReactiveFormsModule, WidgetModule],
})
export class StockModule {}
