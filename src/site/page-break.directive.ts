import {
  ChangeDetectorRef,
  Directive,
  HostListener,
  Input,
  QueryList,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { ExperienceComponent } from "./resume/experience/experience.component";

@Directive({
  selector: "[pageBreak]",
})
export class PageBreakDirective {
  #gridRowIndex = null as unknown as number;
  // #cmps = null as unknown as QueryList<ExperienceComponent>;
  addedPageBreak = false;

  @Input() set pageBreak(val: QueryList<ExperienceComponent>) {
    // this.vcr.clear();
    // if (!this.addedPageBreak) {
    // val?.map((expc) => {
    //   const view = this.vcr.createEmbeddedView(expc.tmpl);
    //   // this.vcr.insert(view);
    //   // });
    //   this.addedPageBreak = true;
    // });
    // this.cdr.detectChanges();
  }
  constructor(
    private vcr: ViewContainerRef,
    private tm: TemplateRef<any>,
    private cdr: ChangeDetectorRef
  ) {
    // console.log("DIRECTIVE");
    const view = vcr.createEmbeddedView(tm);
    // vcr.createComponent(null).
    // vcr.insert(view);
    //   .pipe(tap((val) => console.log(val)))
    // .subscribe((ev) => console.log(ev));
    // console.log(this.exp.onTmplInit);
    // this.exp.onTmplInit.next(null as unknown as TemplateRef<any>);
  }

  @HostListener("onTmplInit", ["$event"])
  onTmplInit(ev: any) {
    // console.log("asdfasdfa");
    // console.log(ev);
  }
  ngAfterViewInit() {
    // console.log(this.exp.tmpl);
    //   // console.log(this.exp.tmpl);
    // this.exp.onTmplInit.subscribe((ev) => console.log(ev));
  }
  // ngAfterContentInit() {
  // console.log(this.exps);
  // this.exp.onTmplInit.subscribe((tmpl) => console.log(tmpl));
  // console.log(this.exp.tmpl);
  //   // this.cdr.detectChanges();
  //   // setTimeout(() => console.log(this.exp.tmpl), 0);
  // }
}
