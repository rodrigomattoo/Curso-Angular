import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleted: EventEmitter<number> = new EventEmitter();

  @Input()//-> Indicamos a angular que este componente puede recibir una property
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

 onDeleteCharacter(index: number):void{
    //TODO: Emitir el ID del personaje
    this.onDeleted.emit(index);
  }

}
