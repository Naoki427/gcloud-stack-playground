// src/oripa/dto/oripa.type.ts

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { OripaType } from '../entities/oripa-type.enum';

@ObjectType()
export class Oripa {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => OripaType)
  type: OripaType;

  @Field()
  createdAt: Date;
}
