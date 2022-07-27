import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ResumeModule } from './resume/resume.module';

platformBrowserDynamic().bootstrapModule(ResumeModule).then(ref => {}).catch(err => console.error(err));