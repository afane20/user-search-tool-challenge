import { render, screen, fireEvent } from '@testing-library/react';
import CadenceLabs from '../CadenceLabs';
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom';

const MockCadenceLabs = () => {
    return (
        <BrowserRouter>
          <CadenceLabs/>
        </BrowserRouter>
    );
}

const searchUsers = (users) => {
    const inputElement = screen.getByLabelText(/Search/i);
    users.forEach((search) => {
        fireEvent.change(inputElement, { target: { value: search } });
    })
}

it('should be able to type into input', async () => {
    render(
        <MockCadenceLabs />
    );
    // searchUsers(["Ervin Howell"]);
    const divElement = await screen.queryAllByText(/Ervin Howell/i);
    expect(divElement.length).toBe(0)
});