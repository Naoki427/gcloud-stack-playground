// src/oripa/entities/oripa-type.enum.ts

import { registerEnumType } from '@nestjs/graphql';

export enum OripaType {
  POKEMON = 'POKEMON',
  YUGIOH = 'YUGIOH',
  ONEPIECE = 'ONEPIECE',
  MTG = 'MTG',
  DRAGONBALL = 'DRAGONBALL',
}

registerEnumType(OripaType, {
  name: 'OripaType',
});
