import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommons-page',
  templateUrl: './uncommons-page.component.html',
  styleUrls: ['./uncommons-page.component.css']
})
export class UncommonsPageComponent {

  // i18nselect
  public name:string = 'Fernando'
  public gender:'Male' | 'Female' = 'Male';
  public invitationMap={
    'Male':'invitarlo',
    'Female':'invitarla'
  }

  changeClient(){
    this.name = 'Melissa'
    this.gender = 'Female'
  }

}
