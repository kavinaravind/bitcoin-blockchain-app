import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent {

    constructor(private router: Router) {}

    viewInformation(): void {
        this.router.navigate(['/home/information']);
    }

    viewVisualize(): void {
        this.router.navigate(['/home/visualize']);
    }

    viewTutorial(): void {
        this.router.navigate(['/home/tutorial']);
    }

}
