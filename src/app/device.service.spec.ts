import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeviceService } from './device.service';

describe('DeviceService', () => {
  let service: DeviceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeviceService]
    });
    service = TestBed.inject(DeviceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all devices', () => {
    const mockDevices = [{ id: 1, identifier: 'device1', description: 'Device 1', manufacturer: 'Manufacturer 1', url: 'http://example.com', commands: [] }];
    service.getAllDevices().subscribe(devices => {
      expect(devices).toEqual(mockDevices);
    });
    const req = httpMock.expectOne('URL_DA_API_DE_DISPOSITIVOS/device');
    expect(req.request.method).toBe('GET');
    req.flush(mockDevices);
  });
});
