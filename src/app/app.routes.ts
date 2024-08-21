import { signal } from '@angular/core';
import { Routes } from '@angular/router';
import { SignalComponent } from './signal/signal/signal.component';

export const routes: Routes = [
    {
        path: 'signal',
        component:SignalComponent
    }
];
