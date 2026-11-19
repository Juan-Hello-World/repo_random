import type { Movie } from "../types/Movie";


interface MovieCardProps{
    movie: Movie;
    onfavorite: (movieId: number) => void;
    onhistory: (movieId: number) => void;
}



function MovieCard({movie, onfavorite, onhistory}:MovieCardProps){

    return(
        <div className="bg-gray-300 shadow rounded-xl">
            <img 
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-50 object-cover"
            />

            <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold">{movie.title}</h2>

                <p>Director: {movie.director}</p>
                <p>Genero: {movie.genre}</p>
                <p>Anio: {movie.releaseYear}</p>

                <p>{movie.synopsis}</p>

                <button
                    onClick={() => onfavorite(movie.id)}
                    className="bg-red-400 text-white px-3 py-2 rounded mr-2"
                >
                    Favorito
                </button>

                <button 
                    onClick={() => onhistory(movie.id)}
                    className="bg-green-600 text-white px-3 py-2 rounded"
                >
                    Por Ver
                </button>
            </div>
        </div>
    )

}

export default MovieCard;