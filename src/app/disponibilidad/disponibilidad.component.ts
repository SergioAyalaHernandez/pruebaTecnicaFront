import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent implements OnInit{
  hotels: any[] = [];

  constructor(private ServicesService: ServicesService) {}

  ngOnInit(): void {
    this.ServicesService.getHotels().subscribe(data => {
      this.hotels = data.hotel;
    });
  }

}
