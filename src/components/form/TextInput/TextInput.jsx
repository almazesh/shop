import React from "react";

import cls from "./TextInput.module.scss";

export const TextInput = React.forwardRef(({
  type="",
  placeholder="",
  ...rest
}, ref) => (
  <input 
    type={type}
    placeholder={placeholder}
    {...rest}
    ref={ref}
    className={cls.text_input}
  />
));