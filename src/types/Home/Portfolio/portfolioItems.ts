interface IObj {
    logo: string
    tags: {
        label: string
    }[]
    heading: string
    descriptions: {
        label: string
        description: string
    }[]
    cta: string
    link: string
    cover: string
}

export interface IPortfolioItem {
    content: IObj
}

export interface IPortfolioItems {
    content: IObj[]
}