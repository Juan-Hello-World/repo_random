import { useEffect, useState } from "react";
import type { Category } from "../types/Category";
import { categoryService } from "../services/categoryService";
import CategoryCard from "../components/CategoryCard";


function Cateogries(){

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(()=>{
        async function loadCategories() {

            try{
                const data=await categoryService.getCategories();
                setCategories(data);
            }
            catch (err){
                console.error(err);
                setError("Error al cargar las categorias")
            }
            finally{
                setLoading(false);
            }
        }
        loadCategories();
    }, []);

    if (loading) return <p className="p-8 text-blue-700">Cargando ...</p>
    if (error) return <p className="p-8 text-red-600">{error}</p>

    return(
        <div className="p-8 bg-gray-300 min-h-screen">
            <h1 className="text-2xl font-bold">Categorias de peliculas</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map(category => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cateogries;