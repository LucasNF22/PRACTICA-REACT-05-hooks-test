import { getByAltText, render, screen } from '@testing-library/react'

import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'

describe('Prueba en el < MultipleCustomHook /> ', () => {

    test('de mostrar el componente por defecto', () => {

      render( <MultipleCustomHooks /> );
      screen.debug();
      expect( getByText( 'Buscando tu Pokemon...' ) )


    })

})
