// Angular native module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Angular material modules
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

// Other 3rd party modules
import { KonvaModule } from 'ng2-konva';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefectListComponent } from './component/defect-list/defect-list.component';
import { DefectCanvasComponent } from './component/defect-canvas/defect-canvas.component';
import { DefectControllerComponent } from './component/defect-controller/defect-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    DefectListComponent,
    DefectCanvasComponent,
    DefectControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    KonvaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
