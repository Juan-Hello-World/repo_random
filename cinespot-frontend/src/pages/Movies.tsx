import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import { categoryService } from "../services/categoryService";
import { favoriteService } from "../services/favoriteService";
import MovieCard from "../components/MovieCard";


function Movies(){

    const {categoryId} = useParams();
    const {user} = useAuth();


    const [movies, setMovies] = useState<Movie[]>([]);
    const [ loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");


    useEffect(()=>{
        async function loadMovies(){
            if(!categoryId){
                setLoading(false);
                return;
            }

            try{
                setLoading(true);
                const data = await categoryService.getMovies(
                    Number(categoryId)
                );
                setMovies(data);
            }
            catch (err){
                console.error(err);
                setMessage("No se pudieron cargar las peliculas");
            }
            finally{
                setLoading(false);
            }
        }
        loadMovies();
    }, [categoryId]);


    async function addFavorites(movieId:number) {
        if (!user) return;

        try{
            await favoriteService.addFavorite({
                userId: user.id,
                movieId
            });
            setMessage("Pelicula agregar a favoritos");
        }catch(err){
            console.error(err);
            setMessage("No se puede agregar a favoritos")
        }
    }

    // funccion para historial




    if (loading) return <p className="p-8 text-blue-500">Cargando Peliculas...</p>


    return(
        <div>
            <h1>Peliculas disponibles</h1>

            {message && <p className="mb-4">{message}</p>}

            <div>
                {/* {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onfavorite={addFavorites}
                        // onhistory={addHistory}
                    />
                ))} */}
            </div>


        </div>
    )


}


export default Movies;