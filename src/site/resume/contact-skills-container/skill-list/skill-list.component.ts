import { Component, Input } from "@angular/core";

@Component({
  selector: "skill-list",
  templateUrl: "./skill-list.component.html",
  styleUrls: ["./skill-list.component.scss"],
})
export class SkillListComponent {
  @Input() width!: number;
}
