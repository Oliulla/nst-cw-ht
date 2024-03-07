import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Test {
  @Prop()
  test: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
