import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { InformationComponent } from "../information/information.component";
import { TutorialComponent } from "../tutorial/tutorial.component";
import { VisualizeComponent } from "../visualize/visualize.component";
import { IntroductionComponent } from "../information/introduction/introduction.component";
import { OverviewComponent } from "../information/overview/overview.component";
import { HowItWorksComponent } from "app/information/howitworks/howitworks.component";
import { ExamplesComponent } from "app/information/examples/examples.component";

const coreRoutes: Routes = [
    { path: 'home', component: HomeComponent, children: [
        { path: 'information', component: InformationComponent, children: [
            {
                path: 'introduction',
                component: IntroductionComponent
            },
            {
                path: 'examples',
                component: ExamplesComponent
            },
            {
                path: 'howitworks',
                component: HowItWorksComponent
            },
            {
                path: 'overview',
                component: OverviewComponent
            }
        ] },
        { path: 'tutorial', component: TutorialComponent },
        { path: 'visualize', component: VisualizeComponent }
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CoreRoutingModule { }

