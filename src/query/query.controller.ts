import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { QueryService } from './query.service';
import { QueryDto } from 'dto/query.dto';
import { Query } from './query.schema';

@Controller('query')
export class QueryController {

    constructor(private queryService: QueryService) {}

    @Get('')
    async getAllQueries(): Promise<QueryDto[]> {
        const queries = await this.queryService.findAll();
        return queries.map(this.toQueryDto);
    }

    @Post('')
    async addQuery(@Body('from') from: string,
                   @Body('body') body: string,
                   @Body('to') to: string): Promise<QueryDto> {
        return this.queryService.create({
            from, body,
            to: Array.isArray(to) ? to : [to]
        }).then(this.toQueryDto);
    }

    @Get(':id')
    async getQuery(@Param('id') id: string): Promise<QueryDto> {
        return this.queryService.findOne(id).then(this.toQueryDto);
    }

    @Patch(':id')
    async replyTo(@Param('id') id: string,
                  @Body('from') from: string,
                  @Body('body') reply: string): Promise<QueryDto> {
        return this.queryService.replyTo(id, from, reply).then(this.toQueryDto);
    }

    private toQueryDto = (query: Query): QueryDto => ({
        id: query._id.toHexString(),
        from: query.from,
        to: query.to[0],
        body: query.body,
        askedOn: query.askedOn.getTime(),
        replies: query.replies.map(reply => ({
            id: reply._id.toHexString(),
            from: reply.from,
            body: reply.body,
            repliedOn: reply.repliedOn.getTime()
        }))
    })

}
