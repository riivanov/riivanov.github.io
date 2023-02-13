import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { ResumeModule } from "./resume/resume.module";
import { SiteComponent } from "./site.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ResumeModule],
  declarations: [SiteComponent],
  bootstrap: [SiteComponent],
})
export class SiteModule {}
