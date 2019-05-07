import { Component, OnInit, } from '@angular/core';
import {User} from '../shared/user.model';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 private user:User;
 public submitted = false;


 signupForm: FormGroup;
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(){
    this.signupForm = new FormGroup({
      firstName:  new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }

  get f() { return this.signupForm.controls; }

  signUp(signupForm){
    this.submitted = true;
    if(signupForm.valid){
      
    }
    this.user = signupForm;
    console.log(signupForm);
  }



 

}
