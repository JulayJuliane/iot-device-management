import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';

import { DeviceEditComponent } from './device-edit/device-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/devices', pathMatch: 'full' },
  { path: 'devices', component: DeviceListComponent },
  { path: 'devices/:id', component: DeviceDetailsComponent },

  { path: 'devices/:id/edit', component: DeviceEditComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

