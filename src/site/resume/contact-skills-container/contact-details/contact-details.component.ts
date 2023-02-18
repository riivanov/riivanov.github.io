import { Component } from "@angular/core";
import { Contact } from "src/site/model/contact.interface";
import { ResumeJSONService } from "src/site/services/resume-json.service";

@Component({
  selector: "contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.scss"],
})
export class ContactDetailsComponent {
  get contact(): Contact {
    return this.json.resume.contact;
  }

  constructor(private json: ResumeJSONService) {}
}
