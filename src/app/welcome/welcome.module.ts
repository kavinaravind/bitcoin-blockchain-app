import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

@NgModule({
  imports: [
        CommonModule,
        WelcomeRoutingModule
  ],
    declarations: [WelcomeScreenComponent, GettingStartedComponent]
})
export class WelcomeModule { }
