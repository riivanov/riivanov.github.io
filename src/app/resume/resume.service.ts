import * as resume from "./resume.json"
import { Injectable } from '@angular/core';
import { Resume } from "./resume.interface";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  public get resume(): Resume {
    return resume;
  }

  constructor() { }
}
