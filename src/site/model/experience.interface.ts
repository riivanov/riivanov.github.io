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
  position: {
    title: string;
    duration: Duration;
    location: Location;
  };
  contributions: string[];
}
