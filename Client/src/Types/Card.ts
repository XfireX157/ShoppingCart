export interface ICard {
    id?: number,
    name?: string
    price?: number
    img?: string
    category_id?: number
    activeProduct: {
        activeButton: boolean;
    }
}

