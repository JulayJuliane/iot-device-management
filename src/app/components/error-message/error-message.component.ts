// error-message.component.ts
import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from '../../services/error-message.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['../error-message/error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  errorMessage: string = '';

  constructor(private errorMessageService: ErrorMessageService) { }

  ngOnInit(): void {
    this.errorMessageService.errorMessage$.subscribe(message => {
      this.errorMessage = message;
    });
  }
}
