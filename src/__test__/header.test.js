import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Components/Header';

it('does not show dropdown on first render', () => {
    const { queryByTestId } =render(<Header />);
    const dropdown = queryByTestId('dropdown');

    expect(dropdown).not.toBeTruthy();
})

it('shows dropdown after hamburger is clicked', () => {
    const {container, getByTestId } =render(<Header />);
    const hamburger = getByTestId('hamburger-button');

    fireEvent.click(hamburger);
    expect(container.textContent).toContain('Dropdown menu')
})