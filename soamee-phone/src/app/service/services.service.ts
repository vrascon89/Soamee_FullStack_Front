import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../interfaces/phone.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl: string;

  constructor( private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
  }

  //lsitado de todos los teléfonos a través del metodo getAllPhones

  getAllPhones():Promise<Phone[]>{
    return this.httpClient.get<Phone[]>(`${this.baseUrl}/phones`).toPromise();
  }

  // metodo para recoger el ID del teléfono
  getByIdPhone(id:number):Promise<Phone>{
    return this.httpClient.get<Phone>(`${this.baseUrl}/phone/${id}`).toPromise();
  }

  //crear un nuevo telefono a través del formulario

  createPhone(newPhone:Phone){
    return this.httpClient.post<Phone>(`${this.baseUrl}/phone`, newPhone).toPromise();
  }


  updatePhone(id:number, value:string) {
    return this.httpClient.put(`${this.baseUrl}/phone/${id}`, value).toPromise();
  }





}
