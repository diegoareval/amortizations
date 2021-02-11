import React from 'react'

const Input = ({label, onChange, value, placeholder}) => {
    return (
        <div className="form-group">
        <label for="tiempo">{label}</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          placeholder={placeholder}
        />
      </div>
    )
}

export default Input
