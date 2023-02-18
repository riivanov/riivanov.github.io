import { ElementRef } from "@angular/core";

export type Contributions = string[];

export interface Location {
  city: string;
  state: string;
}

export interface Duration {
  from: string;
  to: string;
}

export interface Experience {
  company: string;
  logo: string;
  position: {
    title: string;
    duration: Duration;
    location: Location;
  };
  contributions: Contributions;
}

export interface ExperienceWithOverflow {
  experience: ElementRef<HTMLElement>;
  overflow: number;
}
