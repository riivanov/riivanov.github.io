import { Component } from "@angular/core";
import { Contact } from "src/site/model/contact.interface";
import { ResumeJSONService } from "src/site/services/resume-json.service";

@Component({
  selector: "contact-skills-container",
  templateUrl: "./contact-skills-container.component.html",
  styleUrls: ["./contact-skills-container.component.scss"],
})
export class ContactSkillsContainerComponent {
  public get contact(): Contact {
    return this.json.resume.contact;
  }

  constructor(private json: ResumeJSONService) {}
}
