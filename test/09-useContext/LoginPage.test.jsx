import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en el LoginPage', () => {


    test('Debe mostrar el copmonente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText("pre");
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('Debe llamar el setUset cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user:null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText("pre");
        const button = screen.getByRole('button');
        fireEvent.click( button );
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith( { id: 123, name: 'Lucas', email: 'lucas@google.com' } );
        
    });

});