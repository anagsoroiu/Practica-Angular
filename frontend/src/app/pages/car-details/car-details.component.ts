import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService, Car } from '../../services/cars.service';
import { CommonModule } from '@angular/common';
import { MileageStatusPipe } from '../../pipes/mileage-status.pipe';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-car-details',
  imports: [CommonModule, MileageStatusPipe, BreadcrumbComponent, DatePipe],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css',
})
export class CarDetailsComponent {
  car: Car | null = null;
  constructor(private route: ActivatedRoute, private carsService: CarsService) 
  {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id') as string;

    if(id){
      this.carsService.getCarById(id).subscribe(car => {
        this.car = car;
      });
    }
  }
}
