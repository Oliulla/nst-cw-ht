import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestGroup } from 'src/schemas/Test.schema';

@Controller('test')
export class TestController {
  constructor(
    @InjectModel(TestGroup.name) private testModel: Model<TestGroup>,
  ) {}

  @Get()
  getTest() {
    return 'test passed';
  }

  @Post()
  postTest(@Body() createTest: TestGroup) {
    // console.log(createTest);
    const newTest = new this.testModel({ ...createTest });
    return newTest.save();
  }
}
