import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/interfaces/phone.interface';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  arrPhones: Phone[]; // variable arrPhones donde vamos a introducir los Arrays de todos los teléfonos de la bbdd


  constructor(private serviceservice : ServicesService) {

  }

  async ngOnInit():Promise <void>{
    const phones = await this.serviceservice.getAllPhones();
    this.arrPhones = phones;
  }

}
