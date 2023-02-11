import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResumeJSONService } from "src/site/services/resume-json.service";
import { AboutComponent } from "./about/about.component";
import { ContactDetailsComponent } from "./contact-skills-container/contact-details/contact-details.component";
import { ContactSkillsContainerComponent } from "./contact-skills-container/contact-skills-container.component";
import { SkillListComponent } from "./contact-skills-container/skill-list/skill-list.component";
import { ContributionListComponent } from "./experience/contribution-list/contribution-list.component";
import { ContributionComponent } from "./experience/contribution-list/contribution/contribution.component";
import { DurationPipe } from "./experience/duration.pipe";
import { ExperienceComponent } from "./experience/experience.component";
import { ResumePageComponent } from "./resume-page/resume-page.component";

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
  ],
  providers: [DatePipe],
  exports: [ResumePageComponent],
})
export class ResumeModule {}
