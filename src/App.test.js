import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import ContactForm from './components/ContactForm';
import userEvent from '@testing-library/user-event';

// test('test 1', ()=>{
//     console.log('running our first test')
// });

test('renders App without errors', ()=>{
    render(<App />)
});

//Arrange: render our App component
// test("renders App header", ()=>{
//     render(<App />);
// })

// test('test contact form', () => {
//     render(<ContactForm/>);

//     const firstName = screen.getByLabelText(/First Name/)
//     const lastName = screen.getByLabelText(/last name/i)
    


    //Get our DOM elements
    // const firstNameInput = screen.getByLabelText(/first name/i)
    // const lastNameInput = screen.getByLabelText(/last name/i)
    // const emailInput = screen.getByLabelText(/email/i)

    //Values into input fields
    // userEvent.type(firstName, 'Lou');
    // userEvent.type(lastName, 'Stevens');
    // userEvent.type(email, 'lou@lou.com');
    // userEvent.type(message, 'Don\'t @ me');
// });