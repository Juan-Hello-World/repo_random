

export interface Movie{
    id: number;
    title: string;
    director: string;
    genre: string;
    releaseYear: number;
    synopsis: string;
    imageUrl: string;
    categoryId: number;
    categoryName: string;
}


export type WatchStatus =
| "POR_VER"
| "VIENDO"
| "VISTA";

export interface HistoryMovie {
    id:number;
    userId: number;
    movie: Movie;
    status: WatchStatus;
}

export interface HistoryRequest{
    userId: number;
    movieId: number;
    status: WatchStatus
}
