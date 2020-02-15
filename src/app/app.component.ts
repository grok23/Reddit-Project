import { Component } from '@angular/core';
import { Article } from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 5),
      new Article('Google', 'http://google.ie', 11),
      new Article('JSON', 'https://www.json.org/json-en.html', 12),  //interestingly, due to the "or 10" votes used in the constructor, setting a base of zero votes here causes a jump to 10 votes
      new Article('DuckDuckGo', 'https://duckduckgo.com/', 16),
      new Article('Pi-Hole', 'https://pi-hole.net/', 25)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = ' ';
    link.value = ' ';
    console.log(`Adding Article Title${title.value} : and Adding Article Link ${link.value}: `);
    return false;
  }
}
