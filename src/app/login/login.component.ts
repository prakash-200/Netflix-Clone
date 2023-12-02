import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private auth:AuthService){}

  loginForm = {email:"",password:""};
  submit = false;
  errorMessage = "";
  loading = false;

  onSubmit(){
    this.submit=true;
    this.loading=true;

    this.auth.login(this.loginForm.email, this.loginForm.password)
    .subscribe({
      next:data=>{
        // store token
        this.auth.storeToken(data.idToken);
        this.auth.accessDashboard();
      },
      error:data=>{
        if(data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage = "Invalid Credentials !!!";
        }
        
      }
    }).add(()=>{
      this.loading = false;
      console.log("login successfully");
    })
  }
}
