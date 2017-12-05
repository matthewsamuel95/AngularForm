import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';

const routes: Routes = [
  { path: '',     component: ReactiveFormComponent  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
     ReactiveFormComponent
  ];
}

