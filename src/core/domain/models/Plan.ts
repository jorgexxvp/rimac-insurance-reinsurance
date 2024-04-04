// SCHEMA

export interface IPlan {
    name: string
    price: number
    description: string[]
    age: number
}

//REQUEST

//RESPONSE

export interface IPlanResponse {
    list: IPlan[]
}
