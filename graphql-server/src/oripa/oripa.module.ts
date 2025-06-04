import { Module } from '@nestjs/common';
import { OripaService } from './oripa.service';
import { OripaResolver } from './oripa.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],  // ← これが重要！！
  providers: [OripaResolver, OripaService],
})
export class OripaModule {}
