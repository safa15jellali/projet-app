import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToEditProfil(){
    this.router.navigate(['edit-profil']);
  }
 
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  gotomenu(){
    this.router.navigate(['menu']);
  }
  calsms(){
    this.router.navigate(['smscall']);
  }
}
