import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {

    const url200 = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    //const url400 = "https://asdasdasdasdasd";
    const [auth, setAuth] = useState<boolean | undefined>()
    
    const fnAuth = async () => {
        await fetch(url200)
            .then(response => setAuth(true))
            .catch(error => setAuth(false))
    }
    useEffect(() => {
        const data = async () => {
            await fnAuth();
        }
        data()
    }, []);

    if (auth === undefined) {
        return <div>Loading....</div>
    } else {
        return auth ? children : <Navigate to="/login" />;
    }
}

export default PrivateRoute;