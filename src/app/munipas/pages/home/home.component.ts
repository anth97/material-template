import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation : ViewEncapsulation.None
  
})
export class HomeComponent implements OnInit {


  constructor(public media : MediaObserver) { }
    
  

  ngOnInit(): void {
  }

}
