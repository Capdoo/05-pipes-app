import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop', items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe'
          }
        ]
      },
      {
        label: 'Pipes personalizados', icon: 'pi pi-cog', items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-cog',
              }
            ]
          }
        ]
      },
    ]
  }


}
