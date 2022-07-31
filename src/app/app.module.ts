import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResumeLeftPaneComponent } from './resume/resume-left-pane/resume-left-pane.component';
import { ResumeMainPaneComponent } from './resume/resume-main-pane/resume-main-pane.component';
import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume/resume-page/resume-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    ResumeLeftPaneComponent, 
    ResumeMainPaneComponent, 
    ResumePageComponent, 
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
