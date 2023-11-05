import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputSignatureComponent } from './input-signature/input-signature.component';  

const routes: Routes = [
  { path: 'input-signature', component: InputSignatureComponent },	
  { path: '', pathMatch: 'full', redirectTo: 'input-signature' } // Default route to LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
