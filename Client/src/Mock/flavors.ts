interface IProducts {
    id:  React.Key | number | undefined
    name: string
}

export const Flavors: IProducts[] = [
    {
        id: 1,
        name: "Hambúrguer",
    },

    {
        id: 2,
        name:  "Drink",
    },
    {
        id: 3,
        name:  "Juice",

    },
    {
        id: 4,
        name: "Sugar",
    },
]