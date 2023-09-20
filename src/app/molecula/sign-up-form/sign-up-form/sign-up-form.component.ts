import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from 'src/app/validators/password-strength.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  user = {
    username: '',
    email: '',
    password: ''
  }


  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient){
  }

  ngOnInit(){
    this.signUpForm = this.fb.group({
      username: ['', {
        validators: [Validators.required],
        onUpdate: 'blur'
      }],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]],
    })
  }

  get username(){ return this.signUpForm.get('username');}

  get email(){ return this.signUpForm.get('email');}
  get password(){ return this.signUpForm.get('password');}


  submitForm(){
    if(this.signUpForm.invalid){
      console.error('The form is invalida!')
    }
    const user = this.signUpForm.value;
    this.http.post('https://equivalenceua.github.io/Equivalence/api/users/sign-up', user)
      .subscribe({
        next: response=>{
          console.log('User signed up successfully:', response);
        },
        error: error => {
          console.error('Error signing up:', error);
        },
        complete: () => {
          console.log('User signed up successfully.');
        }
      });
  }

}
