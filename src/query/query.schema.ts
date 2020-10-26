import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: {
        createdAt: 'askedOn',
        updatedAt: false
    }
})
export class Query {
    id?: string;

    @Prop({ required: true, index: true })
    from: string;

    @Prop({ required: true, index: true })
    to: string;

    @Prop({ required: true })
    subject: string;

    @Prop({ required: true })
    body: string;

    @Prop({ required: true })
    askedOn?: Date;

    @Prop()
    reply?: string;

    @Prop()
    repliedOn?: Date;
}

export type QueryDocument = Query & Document;

export const QuerySchema = SchemaFactory.createForClass(Query);
