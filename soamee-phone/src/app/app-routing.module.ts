import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormPhoneComponent } from "./components/forms/form-phone/form-phone.component";
import { PhoneComponent } from "./components/phone/phone.component";
import { PhonesComponent } from "./components/phones/phones.component";


const routes: Routes = [
  {path:'', pathMatch: 'full', component: PhonesComponent},
  {path:'phones', component:PhonesComponent},
  {path:'phone/:id', component:PhoneComponent},
  {path: 'createPhone', component: FormPhoneComponent },
  {path: '**' ,redirectTo: '/phones'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
