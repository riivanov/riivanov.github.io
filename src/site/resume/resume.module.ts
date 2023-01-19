import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ResumeJSONService } from "./resume-json.service";
import { ContactDetailsComponent } from "./resume-left-pane/contact-skills-container/contact-details/contact-details.component";
import { ContactSkillsContainerComponent } from "./resume-left-pane/contact-skills-container/contact-skills-container.component";
import { SkillListComponent } from "./resume-left-pane/contact-skills-container/skill-list/skill-list.component";
import { ResumeLeftPaneComponent } from "./resume-left-pane/resume-left-pane.component";
import { DurationPipe } from "./resume-main-pane/experience/duration.pipe";
import { ExperienceComponent } from "./resume-main-pane/experience/experience.component";
import { ResumeMainPaneComponent } from "./resume-main-pane/resume-main-pane.component";
import { ResumePageContainerComponent } from "./resume-page-container/resume-page-container.component";
import { ResumePageComponent } from "./resume-page/resume-page.component";
import { ContributionComponent } from './resume-main-pane/experience/contribution/contribution.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ResumeLeftPaneComponent,
    ResumeMainPaneComponent,
    ResumePageComponent,
    AboutComponent,
    ResumePageContainerComponent,
    ContactSkillsContainerComponent,
    ContactDetailsComponent,
    SkillListComponent,
    ExperienceComponent,
    DurationPipe,
    ContributionComponent,
  ],
  providers: [ResumeJSONService, DatePipe],
  exports: [ResumePageContainerComponent],
})
export class ResumeModule {}
