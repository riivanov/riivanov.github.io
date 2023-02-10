import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PageService {
  private itemsPerPage = 5;
  private pages: Array<Array<any>> = [];
  private currentPage = 0;

  constructor() {}

  getPages() {
    return this.pages;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  setItems(items: Array<any>) {
    this.pages = [];
    for (let i = 0; i < items.length; i += this.itemsPerPage) {
      this.pages.push(items.slice(i, i + this.itemsPerPage));
    }
  }
}
