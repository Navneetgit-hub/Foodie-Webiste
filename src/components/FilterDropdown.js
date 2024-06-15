import React, { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const FilterDropdown = ({data, onFilterChange}) => {
  const [selectedOptions, setsetectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const options = ['Top Rated', '4.2⭐'];

  // onFilterChange(data)
  const handleFilterChange = (selectedOption) => {
    if(selectedOptions.includes(selectedOption)){
      onFilterChange(selectedOptions)
    } else {
      setsetectedOptions([...selectedOptions, selectedOption]);
      onFilterChange([...selectedOptions, selectedOption])
    }
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleRemoveFilter = (filter) => {
    if(selectedOptions.includes(filter)){
      const updatedValues = selectedOptions.filter((option)=> option!==filter)
      setsetectedOptions(updatedValues);
      onFilterChange(updatedValues)
    }
  }


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex m-2 mb-0 text-white">
        <div className="bg-rose-500 w-11 rounded-md p-1 cursor-pointer" onClick={toggleDropdown}>
          <AiOutlineBars style={{ fontSize: '35px' }}/>
        </div>

        <div className="flex">
          {selectedOptions.map((filter, index) => (
            <div key={index} className="flex bg-rose-500 rounded-lg items-center mx-2 px-2 justify-between">
              <span>{filter}</span>
              <span className="close-icon" onClick={() => handleRemoveFilter(filter)}><AiOutlineClose style={{cursor: 'pointer', alignItems: 'center', justifyContent: 'center '}}/></span>
            </div>
          ))}
        </div>
      </div>
      <div className='w-52 m-2 text-white'>
        {isDropdownOpen && (
          <div className="bg-rose-500 rounded-lg">
            {options.map((option, index) => (
              <div key={index} className="hover:bg-rose-800 p-3 rounded-lg" onClick={() => handleFilterChange(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterDropdown;
