import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { SumComponent } from './sum/sum.component';
import { ObservablesComponent } from './observables/observables.component';
import { AppRoutingModule } from './app-routing.module';
import { SumPipeModule } from './pipe/sum.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookTableComponent } from './book-table/book-table.component';
import { AppNotDirective } from './directive/app-not.directive';
import { OnpushComponent } from './onpush/onpush.component';
import { OnpushChildComponent } from './onpush-child/onpush-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildParentComponent,
    SumComponent,
    ObservablesComponent,
    BookTableComponent,
    AppNotDirective,
    OnpushComponent,
    OnpushChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SumPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
