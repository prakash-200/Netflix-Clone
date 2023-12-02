import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router:Router,private http:HttpClient ) {  }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }

  canAccess(){
    if(!this.isAuthenticated()){
      this.router.navigate(['/login']);
    }
  }

  
  accessDashboard(){
    if(this.isAuthenticated()){
      this.router.navigate(['/dashboard']);
    }
  }

  register(name: string, email: string, password: string){
    // send data to api 
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBWLMTwhV6KmXE2XjKc9Tl4G3KFmdAu5w',
    {name,email,password}
    );
  }

  storeToken(token: string){
    sessionStorage.setItem('token',token);
  }

  login(email: string, password: string){
    return this.http
    .post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBWLMTwhV6KmXE2XjKc9Tl4G3KFmdAu5w',
    {email,password}
    )
  }

}
