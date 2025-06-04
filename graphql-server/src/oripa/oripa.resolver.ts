// src/oripa/oripa.resolver.ts
import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { OripaService } from './oripa.service';
import { CreateOripaInput } from './dto/create-oripa.input';
import { Oripa as OripaType } from './dto/oripa.type'; // GraphQL側の型
import { Oripa } from '@prisma/client'; // Prisma Client側の型

@Resolver(() => OripaType)
export class OripaResolver {
  constructor(private readonly oripaService: OripaService) {}

  @Mutation(() => OripaType)
  async createOripa(@Args('input') input: CreateOripaInput): Promise<Oripa> {
    return this.oripaService.create(input);
  }

  @Query(() => [OripaType])
  async getAllOripa(): Promise<Oripa[]> {
    return this.oripaService.findAll();
  }

  @Query(() => OripaType, { nullable: true })
	async getOripaById(@Args('id', { type: () => Int }) id: number): Promise<Oripa | null> {
		return this.oripaService.findById(id);
	}
}
