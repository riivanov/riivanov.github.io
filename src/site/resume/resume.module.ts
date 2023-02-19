import { CommonModule, DatePipe } from "@angular/common";
import { InjectionToken, NgModule } from "@angular/core";
import { PageBreakDirective } from "../page-break.directive";
import { AboutComponent } from "./about/about.component";
import { ContactDetailsComponent } from "./contact-skills-container/contact-details/contact-details.component";
import { ContactSkillsContainerComponent } from "./contact-skills-container/contact-skills-container.component";
import { SkillListComponent } from "./contact-skills-container/skill-list/skill-list.component";
import { ContributionListComponent } from "./experience/contribution-list/contribution-list.component";
import { ContributionComponent } from "./experience/contribution-list/contribution/contribution.component";
import { DurationPipe } from "./experience/duration.pipe";
import { ExperienceComponent } from "./experience/experience.component";
import { PageContainerComponent } from "./resume-page/page-container/page-container.component";
import { ResumePageComponent } from "./resume-page/resume-page.component";

export const WINDOW = new InjectionToken("WindowToken");

@NgModule({
  imports: [CommonModule],
  declarations: [
    ResumePageComponent,
    AboutComponent,
    ContactSkillsContainerComponent,
    ContactDetailsComponent,
    SkillListComponent,
    ExperienceComponent,
    DurationPipe,
    ContributionListComponent,
    ContributionComponent,
    PageContainerComponent,
    PageBreakDirective,
  ],
  providers: [DatePipe, { provide: WINDOW, useValue: window }],
  exports: [ResumePageComponent],
})
export class ResumeModule {}
