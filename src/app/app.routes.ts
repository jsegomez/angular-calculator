import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'calculadora',
        loadComponent: () => import('@/calculator/views/calculator-view/calculator-view.component')
    },
    {
        path: '**',
        redirectTo: 'calculadora'
    }
];
