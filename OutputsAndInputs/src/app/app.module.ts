import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentToChildParentComponent } from './ParentToChild/ParentToChild-parent-component/parent-to-child-parent-component'
import { ParentToChildChildComponent } from './ParentToChild/ParentToChild-child-component/parent-to-child-child-component';
import { ChildToParentParentComponent } from './ChildToParent/child-to-parent-parent/child-to-parent-parent.component';
import { ChildToParentChildComponent } from './ChildToParent/child-to-parent-child/child-to-parent-child.component';
import { ReflectChangeComponent } from './UsingServices/reflect-change/reflect-change.component';
import { InitiateChangeComponent } from './UsingServices/initiate-change/initiate-change.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentToChildParentComponent,
    ParentToChildChildComponent,
    ChildToParentParentComponent,
    ChildToParentChildComponent,
    ReflectChangeComponent,
    InitiateChangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
