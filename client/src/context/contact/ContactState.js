import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: uuid(),
        name: 'Ayomide Peters',
        phone: '111-222-3333',
        email: 'peters@gmail.com',
        address: 'Maryland, Lagos, Nigeria',
        dob: '11/29/79',
        anniversary: '6th March',
        royalBrocadeTops: [
          {
            id: uuid(),
            name: 'Mr Peters',
            back: '17.5',
            chest: '40',
            length: '32.5 / 31',
            roundSleeve: '32.5 / 31',
            sleeveLength: '32.5 / 31',
            shortSleeveLength: '32.5 / 31',
            stomach: '32.5 / 31',
            neck: '32.5 / 31',
            cuffWrist: '32.5 / 31',
            threeFourSleeve: '32.5 / 31',
            threeFourRoundSleeve: '32.5 / 31',
          },
        ],
        trousers: [
          {
            id: uuid(),
            name: 'Mr Peters',
            waist: '17.5',
            chest: '40',
            lap: '32.5 / 31',
            length: '32.5 / 31',
            knee: '32.5 / 31',
            flap: '32.5 / 31',
            hip: '32.5 / 31',
            lowerlimb: '32.5 / 31',
            mouthankle: '32.5 / 31',
          },
        ],
        caps: [
          {
            id: uuid(),
            name: 'Mr Peters',
            cap: '12',
          },
        ],
      },
      {
        id: uuid(),
        name: 'Oyeleke John',
        phone: '333-444-5555',
        address: 'Maitama, Abuja, Nigeria',
        dob: '10/9/97',
        anniversary: '12th May',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  // Delete Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
