import { Routes } from '@angular/router';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Dashboard Import
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent, // Login page
  },
  {
    path: 'register',
    component: RegistrationComponent, // Register page
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    canActivate: [AuthGuard], // Protect route
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
    canActivate: [AuthGuard], // Protect route
  },
  {
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuard], // Protect route
  },
];
