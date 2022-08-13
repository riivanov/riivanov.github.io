import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SiteComponent } from './site.component';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ResumeModule ],
  declarations: [ SiteComponent ],
  bootstrap:    [ SiteComponent ]
})
export class SiteModule { }
