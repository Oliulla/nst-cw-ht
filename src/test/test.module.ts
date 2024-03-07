import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestController } from './test.controller';
import { TestSchema } from 'src/schemas/Test.schema';
import { Test } from '@nestjs/testing';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Test.name,
        schema: TestSchema,
      },
    ]),
  ],
  providers: [],
  controllers: [TestController],
})
export class TestModule {}
