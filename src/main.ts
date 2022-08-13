import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SiteModule } from './site/site.module';

platformBrowserDynamic().bootstrapModule(SiteModule).then(ref => {}).catch(err => console.error(err));