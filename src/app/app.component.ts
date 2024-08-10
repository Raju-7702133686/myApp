import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  public userForm: FormGroup= new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9_-]{3,16}$')])

  })

  submit(){
    console.log(this.userForm.value);
  }

}
