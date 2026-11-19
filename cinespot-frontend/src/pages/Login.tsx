import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React, { useState } from "react";


function Login(){

    const navigate = useNavigate();
    const {login} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            setError("");
            await login({email, password});
            navigate("/categories");
        }catch (err){
            console.error(err);
            setError("Credenciales incorrectas");
        }
    }

    return(
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-gray-400 p-8 rounded-xl w-96"
            >

                <h1>
                    CineSpot Login
                </h1>

                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full rounded"
                    required
                />

                <input 
                    type="password"
                    placeholder="Contrasenia"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full rounded"
                    required
                />

                {error && <p className="text-red-500">{error}</p>}

                <button className="bg-blue-600 text-white p-2 rounded w-full">
                    Ingresar
                </button>

                <Link to="/register" className="text-green-600">
                    Crear Cuenta
                </Link>



            </form>
        </div>
    )
}

export default Login;