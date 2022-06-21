import { makeAutoObservable } from 'mobx';
import { BoardDto } from './dto';

export class BoardModel {
  id: string;
  title: string;
  author: string;

  constructor(item: BoardDto) {
    const { ITEM_ID, ITEM_TITLE, ITEM_AUTHOR } = item;
    this.id = ITEM_ID;
    this.title = ITEM_TITLE;
    this.author = ITEM_AUTHOR;

    makeAutoObservable(this);
  }
}
