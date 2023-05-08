export class Restaurant{
    constructor(
        public restaurantName:string,
        public restaurantLocation:string,
        public restaurantCuisine:Array<string>,
        public status:string,
        public rating:number,
        public distance:string,
        public minOrder:string,
        public mealCost:string,
    ){}
}