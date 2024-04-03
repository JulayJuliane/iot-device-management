import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'URL_DA_API';

  constructor(private http: HttpClient) { }

  getAllDevices(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/device`);
  }

  getDeviceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/device/${id}`);
  }

  createDevice(deviceData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/device`, deviceData);
  }

  updateDevice(id: number, deviceData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/device/${id}`, deviceData);
  }

  deleteDevice(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/device/${id}`);
  }
}
