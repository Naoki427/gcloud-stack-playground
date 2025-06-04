import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Oripa } from '@prisma/client';

@Injectable()
export class OripaService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.OripaCreateInput): Promise<Oripa> {
    return this.prisma.oripa.create({ data });
  }

  findAll(): Promise<Oripa[]> {
    return this.prisma.oripa.findMany();
  }

  findById(id: number): Promise<Oripa | null> {
    return this.prisma.oripa.findUnique({ where: { id } });
  }
}
