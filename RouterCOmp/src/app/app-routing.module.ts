import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employe/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employe/list-employees/list-employees.component';
import { DetailCOmponentComponent } from './detail-component/detail-component.component';

const routes: Routes = [
  {path:'list',component:ListEmployeesComponent},
  {path:'create/:id',component:CreateEmployeeComponent},
  {path:'detail/:id',component:DetailCOmponentComponent },
  {path:'', redirectTo:'/list',pathMatch:'full'},
  {path:'lazy',loadChildren:'./lazy/lazyAngular.module#LazyModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
