import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  { path: 'one-way-bind', component: OneWayBindComponent },
  { path: 'event-bind', component: EventBindComponent },
  { path: 'two-way-bind', component: TwoWayBindComponent },
]


@NgModule({
  declarations: [
    OneWayBindComponent,
    EventBindComponent,
    TwoWayBindComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class BindExamplesModule { }
