import { Validators } from '@angular/forms';

export interface Device {
  id: number;
  identifier: string;
  description: string;
  manufacturer: string;
  url: string;
  commands: CommandDescription[];
}

export interface CommandDescription {
  operation: string;
  description: string;
  command: Command;
}

export interface Command {
  command: string;
  parameters: Parameter[];
}

export interface Parameter {
  name: string;
  description: string;
}

export const deviceValidators = {
  identifier: [Validators.required],
  description: [],
  manufacturer: [],
  url: [Validators.pattern(/^https?:\/\//)]
};
