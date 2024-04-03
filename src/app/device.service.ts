
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'URL_DA_API_DE_DISPOSITIVOS';

  constructor(private http: HttpClient) { }

  getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.apiUrl}/device`);
  }

  getDeviceById(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/device/${id}`);
  }

  updateDevice(device: Device): Observable<Device> {
    return this.http.put<Device>(`${this.apiUrl}/device/${device.id}`, device);
  }

  deleteDevice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/device/${id}`);
  }
}
