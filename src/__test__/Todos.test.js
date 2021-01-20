import React from 'react';
import { render, action } from '@testing-library/react';
import axios from 'axios';
import Todos from '../Components/Todos';
import { act } from 'react-dom/test-utils';

it('Renders a todo after a succesfull axios call', async() => {
    let component;

    jest
        .spyOn(axios, 'get')
        .mockImplementation(()=> Promise.resolve({ data: [{ id:1, title: 'test title'}]}))

    await act(async() => {
        const { container } = render(<Todos />)
        component = container
    })

    expect(component.textContent).toContain('test title');
})