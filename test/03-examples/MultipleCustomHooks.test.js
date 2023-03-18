import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");


describe("Prueba en el < MultipleCustomHook /> ", () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });
    
    test("de mostrar el componente por defecto", () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        // screen.debug();
        expect(screen.getByText("Buscando tu Pokemon..."));
        expect(screen.getByText("Pokemon - Api"));

        const nextButton = screen.getByRole("button", { name: "Siguiente" });
        expect(nextButton.disabled).toBeTruthy;
    });

    test("Debe mostrar una Pokemón", () => {
        
       
        useFetch.mockReturnValue({
            data : {
                id: 123, 
                name: 'Pikachu', 
                types: [
                        {                        
                        slot:1,
                        type: {
                                name:'Electrico',
                                url:'www.pokemon.com/pikachu.png'
                              }
                        }],
                },
            isLoading: false,
            hasError: null,
        });
        
        
        render(<MultipleCustomHooks />);
        
        const nextButton = screen.getByRole("button", { name: "Siguiente" });
        const imgUrl = screen.getByRole("img", { name: "Card image cap" });

        expect( screen.getByText('Pikachu') ).toBeTruthy;
        expect( screen.getByText('Electrico') ).toBeTruthy;     
        expect( nextButton.disabled ).toBeFalsy();
        expect( imgUrl.src ).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png");
    });

    test('Debe llamar a la funcion de incrementar', () => {
        useFetch.mockReturnValue({
            data : {
                id: 123, 
                name: 'Pikachu', 
                types: [
                        {                        
                        slot:1,
                        type: {
                                name:'Electrico',
                                url:'www.pokemon.com/pikachu.png'
                              }
                        }],
                },
            isLoading: false,
            hasError: null,
            
        });

        
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole("button", { name: "Siguiente" });
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    })

//
});
