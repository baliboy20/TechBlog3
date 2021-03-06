import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatDrawer) private smenu: MatDrawer;
  title = 'app';
  isOpen= false;

  constructor(private rtr: Router) {}
  toggle() {
    console.log('helloadsf', this.smenu);
 this.smenu.toggle();
  }

  routeTo(path: string | string[]){
      console.log('route to', path, this.rtr.routerState);
      if(!Array.isArray(path)) {
          path = [path];
      }
      // console.log('path', path);
    this.rtr.navigate(path);
  }
}
//