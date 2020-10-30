 
 export interface QueryDto {
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
