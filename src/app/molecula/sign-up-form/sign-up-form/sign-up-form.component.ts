import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {

  user = {
    name: '',
    email: '',
    password: ''
  }
  confirm : boolean = true; 

  onSubmit(signupForm: NgForm) {

    this.user = signupForm.value;

    console.log('Form submitted:', this.user);
    
    signupForm.reset();
  }


  logEmail(mor: any){
    console.log(mor);
    
  }

  checkForPasswords(pass:string, conf:string){
    return this.confirm = pass === conf;
  }
}
