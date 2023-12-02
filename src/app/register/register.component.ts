import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private auth:AuthService){}

  registerForm = {name:"",email:"",password:""};
  submit = false;
  loading = false;
  errorMessage = "";

  onSubmit(){
    this.submit=true;
    this.loading=true;

    this.auth.register(this.registerForm.name,this.registerForm.email,this.registerForm.password)
    .subscribe({
      next:data=>{
        // store token from respose data
        this.auth.storeToken(data.idToken);
        this.auth.accessDashboard();
      },
      error:data=>{
        if(data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage = "Invalid Email !!!";
        }
        else if(data.error.error.message=="EMAIL_EXISTS"){
          this.errorMessage = "Already Email Exists !!!";
        }
        else{
          this.errorMessage = "Unknown error occured !!!";
        }
      }
    }).add(()=>{
      this.loading = false;
      console.log("registered successfully");
    })
  }
}
