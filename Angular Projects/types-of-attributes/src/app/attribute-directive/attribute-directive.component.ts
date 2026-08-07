import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']

})
export class AttributeDirectiveComponent {
styleValue= {'color': 'blue', 'font-size': '18px'};
f1:boolean = true;
f2:boolean = false;

fun1(): void {
  this.f1 = !this.f1;
  this.f2 = !this.f2;
}
fun2() : void {
this.f1 = !this.f1;
this.f2 = !this.f2;
}

}
