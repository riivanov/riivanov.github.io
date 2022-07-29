import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ResumeContainerComponent } from './resume-container/resume-container.component';
import { ResumeLeftPaneComponent } from './resume-left-pane/resume-left-pane.component';
import { ResumeMainPaneComponent } from './resume-main-pane/resume-main-pane.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    ResumeContainerComponent, 
    ResumeLeftPaneComponent, 
    ResumeMainPaneComponent, ResumePageComponent
  ],
  bootstrap:    [ ResumeContainerComponent ]
})
export class ResumeModule { }
