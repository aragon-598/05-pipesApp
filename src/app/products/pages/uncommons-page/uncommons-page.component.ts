import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  // i18plural
  public clients:string[] = ['Maria','Pedro','Juan','Felipe','Mateo']
  public clientsMap={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift();
  }

  // keyvalue pipe
  public person={
    name: 'Alejandro',
    age:25,
    address:'Santa Ana, El Salvador'
  }

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(value)
    )
  )

  public promiseValue: Promise<string> = new Promise((resolve,reject )=>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })

}
