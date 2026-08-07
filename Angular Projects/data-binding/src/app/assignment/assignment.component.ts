import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],

})
export class AssignmentComponent {
// Interpolation 

title = "Student Registration Portal";

course = "Java Full Stack";

// Property Binding 
studentImage = "assets/student.png";

buttonDisabled = false;

// Two Way Binding 
studentName = "";

email = "";

gender = "";

// Event Binding 

message = "";

registerStudent(){

  this.message="Registration Successful";

  console.log(this.studentName);

  console.log(this.email);
}

}
