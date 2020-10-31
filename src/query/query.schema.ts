import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class QueryReply {
    _id?: Types.ObjectId;

    @Prop({ required: true })
    from: string;

    @Prop({ required: true })
    body: string;

    @Prop({ required: true })
    repliedOn: Date;
}

const QueryReplySchema = SchemaFactory.createForClass(QueryReply);

@Schema()
export class Query {
    _id?: Types.ObjectId;

    @Prop({ index: true })
    from?: string;

    @Prop({ default: false })
    undisclosed?: boolean;

    @Prop({ type: [String], required: true, index: true })
    to: string[];

    @Prop({ required: true })
    body: string;

    @Prop({ required: true })
    askedOn?: Date;

    @Prop({ type: [QueryReplySchema], required: true, default: [] })
    replies?: QueryReply[];
}

export type QueryDocument = Query & Document;

export const QuerySchema = SchemaFactory.createForClass(Query);
