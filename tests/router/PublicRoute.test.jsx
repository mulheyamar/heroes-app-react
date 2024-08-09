import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Prueba en <PublicRoute/>', () => { 

    test('Debe de mostrar el children si no está autenticado', () => {
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value ={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect( screen.getByText('Ruta Publica') ).toBeTruthy();
        
     });
    


 })