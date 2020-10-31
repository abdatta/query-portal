import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Query, QueryDocument, QueryReply } from './query.schema';

type CreateQueryParams = Omit<Query, '_id' | 'askedOn' | 'replies'>;

@Injectable()
export class QueryService {

    constructor(@InjectModel(Query.name) private queryModel: Model<QueryDocument>) {}

    async create(query: CreateQueryParams): Promise<Query> {
        const createdQuery = new this.queryModel(query);
        createdQuery.askedOn = new Date();
        return createdQuery.save();
    }

    async findOne(id: string): Promise<Query> {
        return this.queryModel.findById(id).exec();
    }

    async findAll(): Promise<Query[]> {
        return this.queryModel.find().sort({ askedOn: 'desc' }).exec();
    }

    async replyTo(id: string, from: string, body: string): Promise<Query> {
        const reply: QueryReply = { from, body, repliedOn: new Date() };
        return this.queryModel.findByIdAndUpdate(id,
            { $push: { replies: reply } },
            { new: true, runValidators: true }
        ).exec();
    }

}
