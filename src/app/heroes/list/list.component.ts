import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroesName: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];
  public lastDeletedHero: string = '';

  removeLastHero(): void {
    const deletedHero = this.heroesName.pop();
    if (!!deletedHero) {
      this.lastDeletedHero = deletedHero;
    }
  }
}
