import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Query, QuerySchema } from './query.schema';
import { QueryService } from './query.service';
import { QueryController } from './query.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Query.name, schema: QuerySchema }])
    ],
    providers: [QueryService],
    controllers: [QueryController]
})
export class QueryModule {}
