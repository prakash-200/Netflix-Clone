import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.css']
})
export class MovieSliderComponent implements OnInit, AfterViewInit {
  movies: any[] = [
    {  imageUrl: '../assets/images/action/amigos.jpeg'},
    {  imageUrl: '../assets/images/action/annathe.jpg'},
    {  imageUrl: '../assets/images/action/asura-guru.jfif'},
    {  imageUrl: '../assets/images/action/thunivu.jfif'},
    {  imageUrl: '../assets/images/action/avenger-poster.jpg'},
    {  imageUrl: '../assets/images/action/beast.jfif'},
    {  imageUrl: '../assets/images/action/buffoon.jfif'},
    {  imageUrl: '../assets/images/action/doctor.jfif'},
    {  imageUrl: '../assets/images/action/don.jfif'},
    {   imageUrl: '../assets/images/action/godfather.jfif'},
    {  imageUrl: '../assets/images/action/godse.jfif'},
    {  imageUrl: '../assets/images/action/jagame-thandhiram.jfif'},
    {  imageUrl: '../assets/images/action/kalaga-thalaivan.jpg'},
    {  imageUrl: '../assets/images/action/padavettu.jpg'},
    {  imageUrl: '../assets/images/action/pattathu arasan.jfif'},
    {  imageUrl: '../assets/images/action/rangi.jfif'},
    {  imageUrl: '../assets/images/action/sir.jfif'},
    {  imageUrl: '../assets/images/action/the-ghost.jfif'},
    {  imageUrl: '../assets/images/action/thiruvin-kural.jfif'},
    {  imageUrl: '../assets/images/action/tiranga.jfif'},
    {  imageUrl: '../assets/images/action/major.jfif'},
    // Add more movies as needed
  ];

  advMovies: any[] = [
    {imageUrl:' ../assets/images/adventure/65.jfif'},
    {imageUrl:' ../assets/images/adventure/adipurush.webp'},
    {imageUrl:' ../assets/images/adventure/assasins-creed.jpg'},
    {imageUrl:' ../assets/images/adventure/bahubali2.jfif'},
    {imageUrl:' ../assets/images/adventure/blade.jfif'},
    {imageUrl:' ../assets/images/adventure/cast-away.jfif'},
    {imageUrl:' ../assets/images/adventure/catwoman.jfif'},
    {imageUrl:' ../assets/images/adventure/faster.jpg'},
    {imageUrl:' ../assets/images/adventure/hancock.jpg'},
    {imageUrl:' ../assets/images/adventure/kantara.jfif'},
    {imageUrl:' ../assets/images/adventure/karate-kid2.jfif'},
    {imageUrl:' ../assets/images/adventure/katteri.jfif'},
    {imageUrl:' ../assets/images/adventure/laksha.jfif'},
    {imageUrl:' ../assets/images/adventure/mohenjo-daro.jfif'},
    {imageUrl:' ../assets/images/adventure/MoneyHeist-poster.jpg'},
    {imageUrl:' ../assets/images/adventure/monkey-king.jpg'},
    {imageUrl:' ../assets/images/adventure/paan-singh-tomar.jfif'},
    {imageUrl:' ../assets/images/adventure/priest.jfif'},
    {imageUrl:' ../assets/images/adventure/spiderman-2.jfif'},
    {imageUrl:' ../assets/images/adventure/the-lost-city.jfif'},
    {imageUrl:' ../assets/images/adventure/wanted.jpg'},
  ]

  frdMovies:any [] = [
    {imageUrl:'../assets/images/friendship/american-pie.jfif'},
    {imageUrl:'../assets/images/friendship/billu.jpg'},
    {imageUrl:'../assets/images/friendship/dostana.jpg'},
    {imageUrl:'../assets/images/friendship/hangover.jfif'},
    {imageUrl:'../assets/images/friendship/husharu.jfif'},
    {imageUrl:'../assets/images/friendship/kd.jfif'},
    {imageUrl:'../assets/images/friendship/sex-and-city.jpg'},
    {imageUrl:'../assets/images/friendship/zindagi.jfif'},
    {imageUrl:'../assets/images/friendship/dear-friend.jpg'},
    {imageUrl:'../assets/images/friendship/hangover.jpg'},
    {imageUrl:'../assets/images/friendship/live-is-life.jfif'},
    {imageUrl:'../assets/images/friendship/queen.jfif'},
    {imageUrl:'../assets/images/friendship/student-of-the-year.jpg'},
    {imageUrl:'../assets/images/friendship/ted2.jfif'},
    {imageUrl:'../assets/images/friendship/yeh-jawaani.jpg'},
  ]

  popMovies:any [] = [
    {imageUrl:'../assets/images/popular/18-pages.jpg'},
    {imageUrl:'../assets/images/popular/arjuna.jpg'},
    {imageUrl:'../assets/images/popular/bhola-shankar.jfif'},
    {imageUrl:'../assets/images/popular/bro.jpg'},
    {imageUrl:'../assets/images/popular/jaane-jaan.jfif'},
    {imageUrl:'../assets/images/popular/jersey.jpg'},
    {imageUrl:'../assets/images/popular/kurup.jpg'},
    {imageUrl:'../assets/images/popular/love-again.jpg'},
    {imageUrl:'../assets/images/popular/maamannan.jpg'},
    {imageUrl:'../assets/images/popular/ramabanam.jfif'},
    {imageUrl:'../assets/images/popular/rangabali.jpg'},
    {imageUrl:'../assets/images/popular/rdx.jfif'},
    {imageUrl:'../assets/images/popular/rrr.jfif'},
    {imageUrl:'../assets/images/popular/shyam-singha-roy.jpg'},
    {imageUrl:'../assets/images/popular/takkar.jfif'},
  ]

  romMovies:any [] = [
    {imageUrl:'../assets/images/romance/90ml.jpg'},
    {imageUrl:'../assets/images/romance/365days.jfif'},
    {imageUrl:'../assets/images/romance/after-ever-happy.jfif'},
    {imageUrl:'../assets/images/romance/barfi.jfif'},
    {imageUrl:'../assets/images/romance/dear-zindagi.jfif'},
    {imageUrl:'../assets/images/romance/dil-se.jfif'},
    {imageUrl:'../assets/images/romance/fifty-shades-freed.jfif'},
    {imageUrl:'../assets/images/romance/fifty-shades-of-grey.jfif'},
    {imageUrl:'../assets/images/romance/forensic.jfif'},
    {imageUrl:'../assets/images/romance/gatta-kasthi.jpg'},
    {imageUrl:'../assets/images/romance/haseen-dillruba.jfif'},
    {imageUrl:'../assets/images/romance/hey-sinamika.jpg'},
    {imageUrl:'../assets/images/romance/love-today.jpg'},
    {imageUrl:'../assets/images/romance/lust-stories2.jfif'},
    {imageUrl:'../assets/images/romance/nitham-oru-vanam.jfif'},
    {imageUrl:'../assets/images/romance/ok-jaanu.jfif'},
    {imageUrl:'../assets/images/romance/raadhe-shyam.jfif'},
    {imageUrl:'../assets/images/romance/tamasha.jfif'},
    {imageUrl:'../assets/images/romance/uppena.jfif'},
    {imageUrl:'../assets/images/romance/virata-parvam.jpg'},
    {imageUrl:'../assets/images/romance/zero.jpg'},
  ]

  thrlMovies:any[] = [
    {imageUrl:'../assets/images/thriller/afwaah.jfif'},
    {imageUrl:'../assets/images/thriller/badla.jfif'},
    {imageUrl:'../assets/images/thriller/dobaraa.jfif'},
    {imageUrl:'../assets/images/thriller/game.jfif'},
    {imageUrl:'../assets/images/thriller/guilty.jpg'},
    {imageUrl:'../assets/images/thriller/hit.jfif'},
    {imageUrl:'../assets/images/thriller/irul.jfif'},
    {imageUrl:'../assets/images/thriller/ittefaq.jfif'},
    {imageUrl:'../assets/images/thriller/red.jfif'},
    {imageUrl:'../assets/images/thriller/run.jfif'},
    {imageUrl:'../assets/images/thriller/scream.jfif'},
    {imageUrl:'../assets/images/thriller/tulaash.jfif'},
  ]


  private hammer: HammerManager | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initHammer();
  }

  private initHammer(): void {
    this.hammer = new Hammer(this.elementRef.nativeElement);
    this.hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    this.hammer.on('swipeleft', () => this.scrollMovies(-1));
    this.hammer.on('swiperight', () => this.scrollMovies(1));
  }

  private scrollMovies(direction: number): void {
    const container = this.elementRef.nativeElement.querySelector('.movie-slider');
    container.scrollLeft += direction * container.offsetWidth;
  }
}

