    import React, { useState } from 'react';

    function Dropdown() {
      const [selectedValue, setSelectedValue] = useState('');

      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

      return (
        <div className="dropdown-container">
            <span className="dropdown-label">Ordenar por:</span>
            <select className="custom-select" defaultValue="relevantes">
                <option value="relevantes">mais relevantes</option>
                <option value="menor">menor preço</option>
                <option value="maior">maior preço</option>
            </select>
        </div>

      );
    }

    export default Dropdown;