import { Component } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent {
msg:string ="Show";
flag:boolean = false;

skillSet:string[] = ["Angular", "React", "Vue", "NodeJs", "JavaScript"];

addSkill(skill:string):void {
  this.skillSet.push(skill);
}

toggle():void {
  if(this.flag == true){
    this.flag = false;
    this.msg = "Show";
  } else {
    this.flag = true;
    this.msg = "Hide";
  }
}

}
