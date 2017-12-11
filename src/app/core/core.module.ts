import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { CoreRoutingModule } from "../core/core-routing.module";

import { HeaderComponent } from "../core/header/header.component";
import { HomeComponent } from "../core/home/home.component";

import { TutorialModule } from "../tutorial/tutorial.module";
import { VisualizeModule } from "../visualize/visualize.module";
import { InformationModule } from "../information/information.module";

import { BlockChainService } from "../services/blockchain.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        CoreRoutingModule,
        TutorialModule,
        VisualizeModule,
        InformationModule,
    ],
    exports: [
        
    ],
    providers: [
        BlockChainService
    ]
})
export class CoreModule {} 
