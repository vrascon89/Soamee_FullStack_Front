import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Phone } from 'src/app/interfaces/phone.interface';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.css']
})
export class FormPhoneComponent implements OnInit {

  formulario : FormGroup;
  arrPhone : Phone[];

  constructor(private service: ServicesService, private router : Router) {

    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      manufacturer: new FormControl(),
      description: new FormControl(),
      color: new FormControl(),
      price: new FormControl(),
      imageFileName: new FormControl(),
      screen: new FormControl(),
      processor: new FormControl(),
      ram: new FormControl(),
    })
  }

  ngOnInit(): void {

  }
 async onSubmit(){
    const newPhone = await this.service.createPhone(this.formulario.value);
    if(newPhone){
      this.formulario.value;
      this.router.navigate(['/phones']);
    }
  }

}
