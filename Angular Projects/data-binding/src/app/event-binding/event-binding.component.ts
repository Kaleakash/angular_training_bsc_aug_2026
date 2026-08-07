import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
msg:string ="";
  fun(): void {
   // alert("Button Clicked");
    this.msg = "Button Clicked";
  }
  passValue(value: string): void {
    this.msg = value;
  }
  passDynamicValue(value: string): void {
    this.msg = value;
  }
}
