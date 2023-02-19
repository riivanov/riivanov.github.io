import { Component, ElementRef, Input } from "@angular/core";
import { Contact } from "src/site/model/contact.interface";
import { ResumeJSONService } from "src/site/services/resume-json.service";

@Component({
  selector: "contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.scss"],
})
export class ContactDetailsComponent {
  @Input() showAll!: boolean;

  get contact(): Contact {
    return this.json.resume.contact;
  }

  get width() {
    return this.el.nativeElement.clientWidth;
  }

  constructor(
    private json: ResumeJSONService,
    private el: ElementRef<HTMLElement>
  ) {}
}
