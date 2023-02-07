



import React from 'react';
import { toast } from 'react-toastify';
import { requestPath } from '../api/requestPath';
import { instance } from '../configs/config';
import { Hooks } from '../hooks';

const getUser = () => instance.get(requestPath.user);

export default function useUser() {
  const [currentUser , setCurrentUser] = React.useState(null);
  const { actions } = Hooks.useLocations();
  const [renderer , setRenderer] = React.useState("work")
  const notifyExit = () => toast("You are exit!");

  React.useEffect(() => {
    const request = getUser();

    request 
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        if(err.response?.status === 401) {
          setCurrentUser(undefined)
        }
      })
  }, [renderer]);

  const logOut = React.useCallback(() => {
    localStorage.clear();
    actions.goToLogin();
    setCurrentUser(undefined);
    notifyExit();
  }, [actions]);

  return {
    currentUser,
    logOut,
    setRenderer
  }
};
