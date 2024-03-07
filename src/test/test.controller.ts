import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from 'src/schemas/Test.schema';

@Controller('test')
export class TestController {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  @Get()
  getTest() {
    return 'test passed';
  }

  @Post()
  postTest(@Body() createTest: Test) {
    const newTest = new this.testModel({ createTest });
    return newTest.save();
  }
}
