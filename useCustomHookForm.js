import { useState, useEffect } from "react";

export const useCustomHookForm = (props = {}) => {
  const [formvalue, SetFormvalue] = useState(props);

  const reset = () => {
    SetFormvalue(props);
  };

  const handleInputChange = ({ target }) => {
    console.log(target.name);

    SetFormvalue({
      ...formvalue,
      [target.name]: target.value,
    });
  };

  return [formvalue, handleInputChange, reset];
};
