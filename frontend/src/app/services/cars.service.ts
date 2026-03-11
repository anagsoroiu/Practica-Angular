import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Car {
  id: string,
  brand: string,
  model: string,
  total: number,
}

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  getCars(): Observable<Car[]> {
    const token = localStorage.getItem('auth-token') ?? '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Car[]>(`${this.apiUrl}/cars`, { headers });
  }

  getCarById(id: string): Observable<Car> {
    const token = localStorage.getItem('auth-token') ?? '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Car>(`${this.apiUrl}/cars/${id}`, { headers });
  }

  createCar(data: any): Observable<Car> {
    const token = localStorage.getItem('auth-token') ?? '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<Car>(`${this.apiUrl}/cars`, data, { headers });
  }

  updateCar(id: string, data: any): Observable<Car> {
    const token = localStorage.getItem('auth-token') ?? '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.put<Car>(`${this.apiUrl}/cars/${id}`, data, { headers });
  }

  deleteCar(id: string): Observable<void> {
    const token = localStorage.getItem('auth-token') ?? '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete<void>(`${this.apiUrl}/cars/${id}`, { headers });
  }
}
