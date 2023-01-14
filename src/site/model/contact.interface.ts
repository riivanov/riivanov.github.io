export interface Contact {
  name: {
    first: string;
    last: string;
  };
  about: string;
  location: {
    city: string;
    country: string;
  };
  email: string;
  linked_in: string;
  websites: {
    leia: string;
    chapkinlab: string;
  };
}
