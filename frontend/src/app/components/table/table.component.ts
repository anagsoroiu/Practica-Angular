import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { CarsService, Car } from '../../services/cars.service';

@Component({
  selector: 'app-table',
  imports: [ButtonDirective, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit{
  cars: Car[] = [];

  constructor(private carsService: CarsService) {}

  //Se ejecuta cuando el componente se cargue
  ngOnInit(): void {
    this.loadCars();
  }

  //Cargamos los datos de los coches
  loadCars() {
    this.carsService.getCars().subscribe({
      next: (data) => {
        this.cars = data;
      },
      error: (err) => {
        console.error('Error cargando coches', err);
      }
    });
  }
}
