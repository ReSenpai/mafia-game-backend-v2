import { ICivilian } from 'src/shared/interfaces/characters/civilian.interface';
import { Character } from './character.entity';

export class Civilian extends Character implements ICivilian {
  public _isPeaceful: true = true;

  constructor(private readonly _id: string) {
    super(_id);
  }
}
