import { Injectable } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  movies = [
    // action file images
    { id:1, name:'avengef END GAME', imageUrl:'assets/images/action/avenger-poster.jpg'},
    { id:2, name:'annathe', imageUrl:'assets/images/action/annathe.jpg'},
    { id:3, name:'amigos', imageUrl:'assets/images/action/amigos.jpeg'},
    { id:4, name:'asura guru', imageUrl:'assets/images/action/asura-guru.jfif'},
    { id:5, name:'beast', imageUrl:'assets/images/action/beast.jfif'},
    { id:6, name:'buffoon', imageUrl:'assets/images/action/buffoon.jfif'},
    { id:7, name:'doctor', imageUrl:'assets/images/action/doctor.jfif'},
    { id:8, name:'don', imageUrl:'assets/images/action/don.jfif'},
    { id:9, name:'godfather', imageUrl:'assets/images/action/godfather.jfif'},
    { id:10, name:'godes', imageUrl:'assets/images/action/godse.jfif'},
    { id:11, name:'jagame thandhiram', imageUrl:'assets/images/action/jagame-thandhiram.jfif'},
    { id:12, name:'kazhaga thalaivan', imageUrl:'assets/images/action/kalaga-thalaivan.jpg'},
    { id:13, name:'major', imageUrl:'assets/images/action/major.jfif'},
    { id:14, name:'padavettu', imageUrl:'assets/images/action/padavettu.jpg'},
    { id:15, name:'pattathu arasan', imageUrl:'assets/images/action/pattathu arasan.jfif'},
    { id:16, name:'rangi', imageUrl:'assets/images/action/rangi.jfif'},
    { id:17, name:'sir', imageUrl:'assets/images/action/sir.jfif'},
    { id:18, name:'the ghost', imageUrl:'assets/images/action/the-ghost.jfif'},
    { id:19, name:'thiruvin kural', imageUrl:'assets/images/action/thiruvin-kural.jfif'},
    { id:20, name:'thunivu', imageUrl:'assets/images/action/thunivu.jfif'},
    { id:21, name:'tiranga', imageUrl:'assets/images/action/tiranga.jfif'},

    // adventure file images
    { id:22, name:'65', imageUrl:'assets/images/adventure/65.jfif'},
    { id:23, name:'adipurush', imageUrl:'assets/images/adventure/adipurush.webp'},
    { id:24, name:'assasins creed', imageUrl:'assets/images/adventure/assasins-creed.jpg'},
    { id:25, name:'bahubali2', imageUrl:'assets/images/adventure/bahubali2.jfif'},
    { id:26, name:'blade', imageUrl:'assets/images/adventure/blade.jfif'},
    { id:27, name:'cast-away', imageUrl:'assets/images/adventure/cast-away.jfif'},
    { id:28, name:'catwoman', imageUrl:'assets/images/adventure/catwoman.jfif'},
    { id:29, name:'faster', imageUrl:'assets/images/adventure/faster.jpg'},
    { id:30, name:'hancock', imageUrl:'assets/images/adventure/hancock.jpg'},
    { id:31, name:'kantara', imageUrl:'assets/images/adventure/kantara.jfif'},
    { id:32, name:'karate kid2', imageUrl:'assets/images/adventure/karate-kid2.jfif'},
    { id:33, name:'katteri', imageUrl:'assets/images/adventure/katteri.jfif'},
    { id:34, name:'lakshya', imageUrl:'assets/images/adventure/laksha.jfif'},
    { id:35, name:'mohenjo daro', imageUrl:'assets/images/adventure/mohenjo-daro.jfif'},
    { id:36, name:'monkey king', imageUrl:'assets/images/adventure/monkey-king.jpg'},
    { id:37, name:'paan singh tomar', imageUrl:'assets/images/adventure/paan-singh-tomar.jfif'},
    { id:38, name:'priest', imageUrl:'assets/images/adventure/priest.jfif'},
    { id:39, name:'spiderman2', imageUrl:'assets/images/adventure/spiderman-2.jfif'},
    { id:40, name:'the lost city', imageUrl:'assets/images/adventure/the-lost-city.jfif'},
    { id:41, name:'wanted', imageUrl:'assets/images/adventure/wanted.jpg'},
    { id:42, name:'money heist', imageUrl:'assets/images/adventure/MoneyHeist-poster.jpg'},
    
    // friendship file images
    { id:43, name:'american pie', imageUrl:'assets/images/friendship/american-pie.jfif'},
    { id:44, name:'billu', imageUrl:'assets/images/friendship/billu.jpg'},
    { id:45, name:'dostana', imageUrl:'assets/images/friendship/dostana.jpg'},
    { id:46, name:'hangover', imageUrl:'assets/images/friendship/hangover.jfif'},
    { id:47, name:'husharu', imageUrl:'assets/images/friendship/husharu.jfif'},
    { id:48, name:'kd', imageUrl:'assets/images/friendship/kd.jfif'},
    { id:49, name:'sex and the city', imageUrl:'assets/images/friendship/sex-and-city.jpg'},
    { id:50, name:'zindagi', imageUrl:'assets/images/friendship/zindagi.jfif'},
    
    // popular file images
    { id:51, name:'18 pages', imageUrl:'assets/images/popular/18-pages.jpg'},
    { id:52, name:'arjuna', imageUrl:'assets/images/popular/arjuna.jpg'},
    { id:53, name:'bhola shankar', imageUrl:'assets/images/popular/bhola-shankar.jfif'},
    { id:54, name:'bro', imageUrl:'assets/images/popular/bro.jpg'},
    { id:55, name:'jaane jaan', imageUrl:'assets/images/popular/jaane-jaan.jfif'},
    { id:56, name:'jersey', imageUrl:'assets/images/popular/jersey.jpg'},
    { id:57, name:'kurup', imageUrl:'assets/images/popular/kurup.jpg'},
    { id:58, name:'love again', imageUrl:'assets/images/popular/love-again.jpg'},
    { id:59, name:'maamannan', imageUrl:'assets/images/popular/maamannan.jpg'},
    { id:60, name:'ramabanam', imageUrl:'assets/images/popular/ramabanam.jfif'},
    { id:61, name:'rangabali', imageUrl:'assets/images/popular/rangabali.jpg'},
    { id:62, name:'rdx', imageUrl:'assets/images/popular/rdx.jfif'},
    { id:63, name:'rrr', imageUrl:'assets/images/popular/rrr.jfif'},
    { id:64, name:'shyam singha roy', imageUrl:'assets/images/popular/shyam-singha-roy.jpg'},
    { id:65, name:'takkar', imageUrl:'assets/images/popular/takkar.jfif'},
    
    // romance file images
    { id:66, name:'90ml', imageUrl:'assets/images/romance/90ml.jpg'},
    { id:67, name:'365days', imageUrl:'assets/images/romance/365days.jfif'},
    { id:68, name:'after ever happy', imageUrl:'assets/images/romance/after-ever-happy.jfif'},
    { id:69, name:'dear zindagi', imageUrl:'assets/images/romance/dear-zindagi.jfif'},
    { id:70, name:'dil se', imageUrl:'assets/images/romance/dil-se.jfif'},
    { id:71, name:'fifty shades freed', imageUrl:'assets/images/romance/fifty-shades-freed.jfif'},
    { id:72, name:'fifty shades of grey', imageUrl:'assets/images/romance/fifty-shades-of-grey.jfif'},
    { id:73, name:'forensic', imageUrl:'assets/images/romance/forensic.jfif'},
    { id:74, name:'gatta kusthi', imageUrl:'assets/images/romance/gatta-kasthi.jpg'},
    { id:75, name:'haseen dillruba', imageUrl:'assets/images/romance/haseen-dillruba.jfif'},
    { id:76, name:'hey sinamika', imageUrl:'assets/images/romance/hey-sinamika.jpg'},
    { id:77, name:'love-today', imageUrl:'assets/images/romance/love-today.jpg'},
    { id:78, name:'lust stories2', imageUrl:'assets/images/romance/lust-stories2.jfif'},
    { id:79, name:'nitham oru vaanam', imageUrl:'assets/images/romance/nitham-oru-vanam.jfif'},
    { id:80, name:'ok jaanu', imageUrl:'assets/images/romance/ok-jaanu.jfif'},
    { id:81, name:'raadhe shyam', imageUrl:'assets/images/romance/raadhe-shyam.jfif'},
    { id:82, name:'tamasha', imageUrl:'assets/images/romance/tamasha.jfif'},
    { id:83, name:'uppena', imageUrl:'assets/images/romance/uppena.jfif'},
    { id:84, name:'virata parvam', imageUrl:'assets/images/romance/virata-parvam.jpg'},
    { id:85, name:'zero', imageUrl:'assets/images/romance/zero.jpg'},
    { id:86, name:'barfi', imageUrl:'assets/images/romance/barfi.jfif'},
    
    // thriller file images
    { id:87, name:'afwaah', imageUrl:'assets/images/thriller/afwaah.jfif'},
    { id:88, name:'badla', imageUrl:'assets/images/thriller/badla.jfif'},
    { id:89, name:'dobaraa', imageUrl:'assets/images/thriller/dobaraa.jfif'},
    { id:90, name:'game', imageUrl:'assets/images/thriller/game.jfif'},
    { id:91, name:'guilty', imageUrl:'assets/images/thriller/guilty.jpg'},
    { id:92, name:'hit', imageUrl:'assets/images/thriller/hit.jfif'},
    { id:93, name:'irul', imageUrl:'assets/images/thriller/irul.jfif'},
    { id:94, name:'ittefaq', imageUrl:'assets/images/thriller/ittefaq.jfif'},
    { id:95, name:'red', imageUrl:'assets/images/thriller/red.jfif'},
    { id:96, name:'scream', imageUrl:'assets/images/thriller/scream.jfif'},
    { id:97, name:'tulaash', imageUrl:'assets/images/thriller/tulaash.jfif'},
    { id:98, name:'run', imageUrl:'assets/images/thriller/run.jfif'},
  ];

    searchMovie(query: string){
      return this.movies.filter(movie =>
        movie.name.toLowerCase().includes(query.toLowerCase()));
    }
  
}
