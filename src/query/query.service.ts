import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Query, QueryDocument } from './query.schema';

@Injectable()
export class QueryService {

    constructor(@InjectModel(Query.name) private queryModel: Model<QueryDocument>) {}

    async create(query: Query): Promise<Query> {
        const createdQuery = new this.queryModel(query);
        createdQuery.askedOn = new Date();
        return createdQuery.save();
    }

    async findOne(id: string): Promise<Query> {
        return this.queryModel.findById(id).exec();
    }

    async findAll(): Promise<Query[]> {
        return this.queryModel.find().exec();
    }

    async replyTo(id: string, reply: string): Promise<Query> {
        const update: Partial<Query> = { reply, repliedOn: new Date() };
        return this.queryModel.findByIdAndUpdate(id, update, { new: true }).exec();
    }

}
