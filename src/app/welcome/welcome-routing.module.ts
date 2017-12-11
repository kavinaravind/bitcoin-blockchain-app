import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

const welcomeRoutes: Routes = [
    { path: 'welcome', component: WelcomeScreenComponent },
    { path: 'getting-started', component: GettingStartedComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(welcomeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class WelcomeRoutingModule { }
