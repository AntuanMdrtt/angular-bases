import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() public onDeleteIndex: EventEmitter<string> = new EventEmitter();
  @Input() public characterList: Character[] = [];

  onDeleteCharacter(id: string): void {
    // TODO: Emitir el ID del personaje
    this.onDeleteIndex.emit(id);
  }
}
