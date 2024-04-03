// device-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../device.model';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {
  deviceId: number = 0;
  device: Device | undefined;

  constructor(private route: ActivatedRoute, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.deviceId = +params.get('id')!;
      console.log('Device ID:', this.deviceId);
      this.loadDeviceDetails();
    });
  }

  loadDeviceDetails() {
    this.deviceService.getDeviceById(this.deviceId).subscribe(
      device => {
        console.log('Device:', device); // Verifica se os detalhes do dispositivo estão sendo recebidos corretamente
        this.device = device;
      },
      error => {
        console.error('Error loading device details:', error); // Loga o erro caso ocorra algum problema
      }
    );
  }
}

