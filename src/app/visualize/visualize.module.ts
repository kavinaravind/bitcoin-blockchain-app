import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { VisualizeComponent } from "./visualize.component";

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;

export function highchartsFactory() {
      const hc = require('highcharts');
      const dd = require('highcharts/modules/drilldown');
      dd(hc);

      return hc;
}

@NgModule({
    declarations: [
        VisualizeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ChartModule
    ],
    providers: [{
        provide: HighchartsStatic,
        useFactory: highchartsFactory
    }]
})
export class VisualizeModule {}