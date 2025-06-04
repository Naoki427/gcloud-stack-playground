// src/oripa/dto/create-oripa.input.ts

import { InputType, Field } from '@nestjs/graphql';
import { OripaType } from '../entities/oripa-type.enum';

@InputType()
export class CreateOripaInput {
  @Field()
  name: string;

  @Field(() => OripaType)
  type: OripaType;
}
