import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Query } from './query.schema';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {

    constructor(private queryService: QueryService) {}

    @Get('')
    async getAllQueries() {
        return this.queryService.findAll();
    }

    @Post('')
    async addQuery(@Body() query: Query) {
        return this.queryService.create(query)
    }

    @Get(':id')
    async getQuery(@Param('id') id: string) {
        return this.queryService.findOne(id);
    }

    @Patch(':id')
    async replyTo(@Param('id') id: string, @Body('reply') reply: string) {
        return this.queryService.replyTo(id, reply);
    }

}
