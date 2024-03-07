import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';

export type TestDocument = TestGroup & Document;

@Schema({ timestamps: true, collection: 'testGroup' })
export class TestGroup {
  @Prop()
  title: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const TestSchema = SchemaFactory.createForClass(TestGroup);
