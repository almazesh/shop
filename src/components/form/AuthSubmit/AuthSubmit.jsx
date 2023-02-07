



import React from 'react';

import cls from "./AuthSubmit.module.scss";

export default function AuthSubmit({location}) {
  return (
    <div className={cls.authSubmit_center}>
      <button type='submit' className={cls.authSubmit}>
        {location}
      </button>
    </div>
  )
}
