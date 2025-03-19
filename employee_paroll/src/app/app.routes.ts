import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserFormComponent } from './component/user-form/user-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
    },
    {
        path: 'employees',
        component: DashboardComponent
    },
    {
        path: 'add_employee',
        component: UserFormComponent
    }
];