import React from 'react';
import PropTypes from 'prop-types';

const AddBooks = (props) => {
  const { categories } = props;

  return (
    <div className="additems">
      <input type="text" name="" id="" />
      <select defaultValue="">
        <option value="" disabled>Category</option>
        {categories.map((option) => (
          <option key={option.id} value={option.categories}>{option.categories}</option>
        ))}
      </select>
    </div>
  );
};

AddBooks.propTypes = { categories: PropTypes.arrayOf(PropTypes.object).isRequired };

export default AddBooks;
