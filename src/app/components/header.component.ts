import {Component, Input} from '@angular/core';


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
 @Input() appTitle: string ="Header title";
 @Input("bgcolor") backgroundColor:string;
}
