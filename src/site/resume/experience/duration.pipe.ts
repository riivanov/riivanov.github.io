import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { Experience } from "src/site/model/experience.interface";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(exp: Experience): string {
    const dur = exp.position.duration;
    const from = Date.parse(dur.from);
    const to = Date.parse(dur.to);
    const durFrom = this.datePipe.transform(from, `MMM yyyy`);
    const durTo = this.datePipe.transform(to, `MMM yyyy`);
    return `${durFrom} - ${durTo}`;
  }
}
