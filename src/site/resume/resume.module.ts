import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ResumeLeftPaneComponent } from "./resume-left-pane/resume-left-pane.component";
import { ResumeMainPaneComponent } from "./resume-main-pane/resume-main-pane.component";
import { ResumePageComponent } from "./resume-page/resume-page.component";
import { ResumePageContainerComponent } from "./resume-page-container/resume-page-container.component";
import { ContactSkillsContainerComponent } from "./resume-left-pane/contact-skills-container/contact-skills-container.component";
import { ContactDetailsComponent } from "./resume-left-pane/contact-skills-container/contact-details/contact-details.component";
import { SkillListComponent } from "./resume-left-pane/contact-skills-container/skill-list/skill-list.component";
import { ResumeJSONService } from "./resume-json.service";

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
  ],
  providers: [ResumeJSONService],
  exports: [ResumePageContainerComponent],
})
export class ResumeModule {}
