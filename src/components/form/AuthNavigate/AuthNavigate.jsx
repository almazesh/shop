


import React from 'react';
import { Link } from 'react-router-dom';

import "./AuthNavigate.scss";

export default function AuthNavigate({location}) {
  return (
    <Link 
      className="authNavigate_link"
      to={location === "Register" ? "/auth/login" : "/auth/register"}
    >
      {
        location === "Register"
          ? "Already have an account?"
          : "You don't have an account?"
      }
    </Link>
  )
};
