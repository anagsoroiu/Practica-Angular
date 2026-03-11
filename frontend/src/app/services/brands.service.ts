import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Brand = string;

export type BrandModel = string;

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<string[]> {
    const token = localStorage.getItem('auth-token') ?? '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<string[]>(`${this.apiUrl}/brands`, { headers });
  }

  getModelByBrand(brandId: string): Observable<string[]>{
    const token = localStorage.getItem('auth-token') ?? '';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<string[]>(`${this.apiUrl}/brands/${brandId}/models`, { headers });
  }
}