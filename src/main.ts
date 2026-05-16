import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
<<<<<<< HEAD
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'zone.js' })
  .catch(err => console.error(err));
=======
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'zone.js' })
    .catch(err => console.error(err));
    
>>>>>>> 60d3a3fdbc1d84564d77ba326470f31391c17f76
