import { Link } from "react-router-dom";
import type { Category } from "../types/Category";


interface PropsCategory{
    category: Category
}


function CategoryCard({category} : PropsCategory){

    return(
        <div>
            <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-50 object-cover"
            />

            <div>
                <h2 className="text-xl font-bold">{category.name}</h2>
                <p>{category.description}</p>
                <p className="text-gray-400">{category.movieCount} peliculas</p>

                <Link to={`/movies/${category.id}`} className="bg-blue-400 text-white px-4 py-2 rounded">
                    Ver Peliculas
                </Link>
            </div>


        </div>
    )

}

export default CategoryCard