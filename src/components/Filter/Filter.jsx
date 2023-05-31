import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact  } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    dispatch(filterContact(value));
  };

  return (
    <>
      <Label htmlFor="find">Find contacts by name</Label>
      <Input
        type="text"
        id="find"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
