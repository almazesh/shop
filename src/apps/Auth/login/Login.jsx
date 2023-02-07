


import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authUser } from '../../../api/api';
import Container from '../../../components/Container/Container';
import * as Forms from "../../../components/form";
import { FormsValidate } from '../../../helpers/helpers';
import { Hooks } from '../../../hooks';
import cls from "./Login.module.scss";

const Login = () => {
  const { actions } = Hooks.useLocations();
  const { setRenderer } = Hooks.useUser();
  const notifySign = () => toast("You are logged in!");

  const { 
    register,
    handleSubmit,
    formState: { errors }
   } = useForm({
    mode:"onBlur"
  });

  const handleLogin = (data) => {
    const request = authUser(data);

    request
      .then(res => {
        const data = res.data;
        if(res) {
          setRenderer("Render")

          localStorage.setItem("accessToken", data.access);
          localStorage.setItem("refreshToken", data.refresh);

          actions.goToMain();
          notifySign();
        }
      })
  }

  return (
    <Container>
      <div className={cls.login_point}>
        <h2>Authorize your account and continue your traveling!</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder="Username"
              {...register("username", FormsValidate("Username"))}
            />
            {errors.username && <Forms.ErrorsInput err={errors.username?.message}/>}
          </Forms.Divider>
          <Forms.Divider>
            <Forms.TextInput 
              type="password"
              placeholder="Password"
              {...register("password", FormsValidate("Password"))}
            />
            {errors.password && <Forms.ErrorsInput err={errors.password?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.AuthSubmit location={"Login"}/>
          </Forms.Divider>

          <Forms.Divider>
            <Forms.AuthNavigate location={"Login"}/>
          </Forms.Divider>
        </form>
      </div>
    </Container>
  )
}

export default Login;
