import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'rafael';

  public nameUpper: string = 'RAFAEL';

  public fullName: string = 'rAfAeL sAnTIaGO';

  public customDate: Date = new Date();

}
