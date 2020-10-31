 
 export interface GetQueryDto {
    id: string;
    from: string;
    to: string;
    body: string;
    askedOn: number;
    replies:{
        id: string;
        from: string;
        body: string;
        repliedOn: number;
    }[];
}

export interface CreateQueryDto {
    from?: string;
    to: string;
    body: string;
    undisclosed?: boolean
}
