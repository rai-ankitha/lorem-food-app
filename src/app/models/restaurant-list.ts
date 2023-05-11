export interface Restaurant{
   
    id:number,
    name:string,
    address:string,
    city:string,
    state:string,
    country:string,
    rating:number,
         status:string,
        
         openTime:string,
         closeTime:string,
         image:string,
         breakfastAvailable:boolean
   
}

export class RestaurantDetails{
    constructor(
        public foodName:string,
        public foodCost:number,
        public status:string,
        public isBestSeller:boolean,
        public description:string,
        public isVeg:boolean,
        public isAdded:boolean
    ){}
}
export interface ApiResponse{
   
        statusCode:number,
       message?:string,
       secretCode?:string,
       data?:Array<any>
   
}