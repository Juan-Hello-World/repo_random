import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";


function Register(){


    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        setError("");

        try{
            setLoading(true);

            await authService.register({
                name, 
                email,
                password
            });
            navigate("/login");
        }
        catch (err){
            console.error(err);
            setError("No se pudo registrar al usuario");
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-gray-400"
            >
                <h1 className="text-2xl font-bold">Registro CineSpot</h1>
                <p>Registarte en nuestra plataforma</p>


                <input
                    placeholder="Nombre"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="border p-2 w-full rounded"
                    required
                />

                <input 
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border p-2 w-full rounded"
                    required
                />

                <input 
                    type="password"
                    placeholder="Contrasenia"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border p-2 w-full rounded"
                    minLength={6}
                    required
                />

                {error && <p className="text-red-500">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-green-600 text-white p-2 rounded w-full"
                >
                    {loading ? "Registrando..." : "Registrarse"}
                </button>

                <Link to="/login" className="text-blue-600">
                Ya tengo cuenta
                </Link>

            </form>
        </div>
    )


}


export default Register;