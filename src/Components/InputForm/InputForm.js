// import { useEffect, useState } from 'react';
// import { useDebounce } from 'use-debounce';
// import axiosAPI from '../../API/API';
// import debounce from 'lodash.debounce';

const InputForm = ({ onSubmit, getValue, setValue }) => {
  // const [value, setValue] = useState('');

  // const handleValue = e => {
  //   setValue(e.target.value);
  // };

  // getValue(value);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axiosAPI(value);
  // };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Enter name</label>
        <input
          id="name"
          placeholder="Enter name"
          name="pictures"
          value={setValue}
          onChange={getValue}
        ></input>
        <button type="submit">Найти</button>
      </form>
    </div>
  );
};

export default InputForm;
