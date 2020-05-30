import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactAddComponent } from './contact/contact-add/contact-add.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';


const routes: Routes = [
  { path: 'contacts', component: ContactComponent, children: [
    { path: 'add', component: ContactAddComponent },
    { path: ':id', component: ContactDetailsComponent },
    { path: ':id/edit', component: ContactEditComponent }
  ]},
  { path: '',   redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
