export interface Restaurant {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  rating: number;
  status: string;
  avg_meal_cost: number;
  min_order_cost: number;
  deliveryTimeInMins: number;
  food_types: string;
  openTime: string;
  closeTime: string;
  image: string;
  breakfastAvailable: boolean;
}

export interface RestaurantMenu {
  
     id: string,
     name: string,
     price: number,
     dishType:string
     rating: number,
     description: string,
     veg: boolean,
     breakfast:boolean
     image: string,
     isAdded:boolean
 
}
export interface ApiResponse {
  statusCode: number;
  message?: string;
  secretCode?: string;
  data?: Array<any>;
}
