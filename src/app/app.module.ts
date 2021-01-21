import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentCustomComponent } from './component-custom/component-custom.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { ComponentEComponent } from './component-e/component-e.component';
import { ComponentFComponent } from './component-f/component-f.component';
import { ComponentGComponent } from './component-g/component-g.component';
import { ComponentHComponent } from './component-h/component-h.component';
import { ComponentIComponent } from './component-i/component-i.component';
import { ComponentJComponent } from './component-j/component-j.component';
import { ComponentKComponent } from './component-k/component-k.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentCustomComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentDComponent,
    ComponentEComponent,
    ComponentFComponent,
    ComponentGComponent,
    ComponentHComponent,
    ComponentIComponent,
    ComponentJComponent,
    ComponentKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
