
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { Menu } from '../../interfaces/menu.interface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {

  menuList!: Observable<Menu[]>;
  public a: number = 5;

  constructor(public media: MediaObserver,
    private menuService: MenuService) { }



  ngOnInit(): void {
    if (this.a >= 5){
      this.menuList = this.menuService.getList<Menu>("assets/menu.json");
    } else {
      this.menuList = this.menuService.getList<Menu>("assets/menua.json");
    }
    // retorna roles de usuario
    // admin
    // lista = [''lista ibien chevere]
    // usuario base
    // otralista = [''lista ibien chevere]
  }

}
