import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor="find">
        Find contacts by name
      </Label>
      <Input
        type="text"
        id="find"
        onChange={e => dispatch(filterContact(e.target.value.toLowerCase()))}
      />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;