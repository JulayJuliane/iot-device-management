import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../device.model';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  deviceId: number = 0;
  device: Device | undefined;


  constructor(private route: ActivatedRoute, private deviceService: DeviceService, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.deviceId = +params.get('id')!;
      console.log('Device ID:', this.deviceId);
      this.loadDeviceDetails();
    });
  }

  loadDeviceDetails() {
    this.deviceService.getDeviceById(this.deviceId).subscribe(device => {
      this.device = device;
    });
  }

  updateDevice() {
    if (this.device) {
      this.deviceService.updateDevice(this.device).subscribe(updatedDevice => {
        // Lógica adicional após a atualização, se necessário
        this.router.navigate(['/devices']); // Redireciona de volta para a lista de dispositivos após a atualização
      });
    }
  }
}
