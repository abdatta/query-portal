import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { QueryService } from './query.service';
import { GetQueryDto, CreateQueryDto } from 'dto/query.dto';
import { Query } from './query.schema';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/auth/auth.strategy';

@Controller('query')
export class QueryController {

    constructor(private queryService: QueryService) {}

    @Get('')
    async getAllQueries(): Promise<GetQueryDto[]> {
        const queries = await this.queryService.findAll();
        return queries.map(this.toQueryDto);
    }

    @Post('')
    @UseGuards(JwtAuthGuard({ allowNoAuth: true }))
    async addQuery(@Req() req: { user?: User, body: CreateQueryDto }): Promise<GetQueryDto> {
        return this.queryService.create({
            from: req.user?.username,
            undisclosed: req.body.undisclosed,
            body: req.body.body,
            to: Array.isArray(req.body.to) ? req.body.to : [req.body.to]
        }).then(this.toQueryDto);
    }

    @Get(':id')
    async getQuery(@Param('id') id: string): Promise<GetQueryDto> {
        return this.queryService.findOne(id).then(this.toQueryDto);
    }

    @Patch(':id')
    async replyTo(@Param('id') id: string,
                  @Body('from') from: string,
                  @Body('body') reply: string): Promise<GetQueryDto> {
        return this.queryService.replyTo(id, from, reply).then(this.toQueryDto);
    }

    private toQueryDto = (query: Query): GetQueryDto => ({
        id: query._id.toHexString(),
        from: (query.undisclosed || !query.from) ? 'someone' : query.from,
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
