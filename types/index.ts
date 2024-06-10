export enum CardCategory {
    Daily = "daily",
    Game = "games",
    Movie = "movies"
}

export interface Card {
    id: number,
    date: string,
    title: string,
    linkImgThumbnail: string,
    description: string,
    linkImgContent: string,
    textContent: string,
    category: CardCategory,
    imgReference: string
}
