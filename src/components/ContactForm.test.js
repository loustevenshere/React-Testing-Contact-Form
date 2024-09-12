import React from 'react';
import ContactForm from './ContactForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Contact form renders', async ()=> {
    render(<ContactForm/>)


    // Query for all inputs
    const firstName = screen.getByLabelText(/first name/i);

    // const lastName = screen.getByLabelText(/last name/i);
    // const email = screen.getByLabelText(/email/i);
    // const message = screen.getByLabelText(/message/i);
    // const submitBtn = screen.getByRole(/button/i);

    // expect(firstName).toBeInTheDocument();
    // expect(lastName).toBeInTheDocument();
    // expect(email).toBeInTheDocument();
    // expect(message).toBeInTheDocument();
    // expect(submitBtn).toBeInTheDocument();

    //type into all inputs
    userEvent.type(firstName, 'Lou');
    userEvent.type(screen.getByLabelText(/last name/i), 'John');
    userEvent.type(screen.getByLabelText(/email/i), 'lou@lou.com')
    userEvent.type(screen.getByRole(/button/i), 'yo yall good?');

    // Check to see if typing works
    expect(firstName).toHaveValue('Lou')

    // click submit
    userEvent.click(screen.getByRole('button'));

    // query for JSON text
    // Everything below await is waiting for await function to complete and then 
    // they fire, so everything after clicking the button happens here
    const JSONText = await screen.findByTestId('json-text');

    expect(JSONText).toBeInTheDocument();

    const nameError = screen.queryByText(/minlength/i);
    expect(nameError).toBeNull();

});