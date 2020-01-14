import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatTabsModule} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatTabsModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
