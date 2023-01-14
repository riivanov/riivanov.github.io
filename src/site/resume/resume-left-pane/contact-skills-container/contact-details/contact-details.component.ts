import { Resume } from "src/site/model/resume.interface";
import { Component } from "@angular/core";
import { ResumeJSONService } from "src/site/resume/resume-json.service";
import { Contact } from "src/site/model/contact.interface";

@Component({
  selector: "contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.scss"],
})
export class ContactDetailsComponent {
  public get contact(): Contact {
    return this.json.resume.contact;
  }

  constructor(private json: ResumeJSONService) {}
}
