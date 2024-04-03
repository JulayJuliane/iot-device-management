import { Component, OnInit } from '@angular/core';
import { Device } from '../device.model';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices: Device[] = [];
  filterTerm: string = '';
  p: number = 1;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices() {
    this.deviceService.getAllDevices().subscribe(devices => {
      this.devices = devices;
    });
  }

  deleteDevice(id: number) {
    if (confirm('Tem certeza que deseja excluir este dispositivo?')) {
      this.deviceService.deleteDevice(id).subscribe(() => {
        // Atualizar a lista de dispositivos após exclusão
        this.loadDevices();
      });
    }
  }

  filterDevices() {
    // Filtrar a lista de dispositivos com base no termo de filtro
    if (this.filterTerm.trim() === '') {
      this.loadDevices(); // Se o filtro estiver vazio, carregar todos os dispositivos
    } else {
      this.devices = this.devices.filter(device =>
        device.manufacturer.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }
  }
}
