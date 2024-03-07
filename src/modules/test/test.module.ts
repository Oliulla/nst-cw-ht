import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestController } from './test.controller';
import { TestGroup, TestSchema } from 'src/schemas/Test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TestGroup.name,
        schema: TestSchema,
      },
    ]),
  ],
  providers: [],
  controllers: [TestController],
})
export class TestModule {}
