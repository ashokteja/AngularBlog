import { Component, OnInit, } from '@angular/core';
import {User} from '../shared/user.model';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 user:User;
 angForm: FormGroup;
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(){

    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      phone: ['', Validators.required ],
    });
     
  }

 

}
