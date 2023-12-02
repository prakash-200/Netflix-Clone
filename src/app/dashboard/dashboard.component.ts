import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchTerm:string = '';
  movies: any[] = [];

  constructor( private moviesService:MoviesService,private auth:AuthService){}

  ngOnInit(): void {
    this.auth.canAccess();
  }

  search(){
    if(this.searchTerm.trim() === ''){
      this.movies = [];
      console.log('no output');
    }
    else{
      this.movies = this.moviesService.searchMovie(this.searchTerm);
      console.log('results from services');
    }
  }

  logout(){
    //remove token 
    sessionStorage.removeItem('token');
    this.auth.canAccess();
  }

}
