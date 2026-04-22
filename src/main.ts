import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Asegúrate que esta ruta sea correcta

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
