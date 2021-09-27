import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from 'src/app/interfaces/phone.interface';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

@Input() phone: Phone;

  constructor(private serviceservice : ServicesService, private activateRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
  }

}
