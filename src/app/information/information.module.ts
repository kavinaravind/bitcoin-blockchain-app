import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { InformationComponent } from "./information.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { ExamplesComponent } from "./examples/examples.component";
import { HowItWorksComponent } from "./howitworks/howitworks.component";
import { OverviewComponent } from "./overview/overview.component";

import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
        InformationComponent,
        IntroductionComponent,
        ExamplesComponent,
        HowItWorksComponent,
        OverviewComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        FormsModule,
    ]
})
export class InformationModule {}