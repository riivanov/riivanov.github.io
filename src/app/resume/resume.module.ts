import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ResumeLeftPaneComponent } from './resume-left-pane/resume-left-pane.component';
import { ResumeMainPaneComponent } from './resume-main-pane/resume-main-pane.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResumeLeftPaneComponent, 
    ResumeMainPaneComponent, 
    ResumePageComponent, 
    AboutComponent
  ],
  exports: [ ResumePageComponent ]
})
export class ResumeModule { }
