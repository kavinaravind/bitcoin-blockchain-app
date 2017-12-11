import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TutorialComponent } from "app/tutorial/tutorial.component";

@NgModule({
    declarations: [
        TutorialComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TutorialModule {}