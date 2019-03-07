import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipecomponentComponent } from './pipecomponent/pipecomponent.component';
import { PipePipe } from './pipe.pipe';
import { PureipePipe } from './pureipe.pipe';
import { ImpurepipePipe } from './impurepipe.pipe';
import { FormsModule }   from '@angular/forms';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PipecomponentComponent,
    PipePipe,
    PureipePipe,
    ImpurepipePipe,
    ParentcomponentComponent,
    ChildcomponentComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
