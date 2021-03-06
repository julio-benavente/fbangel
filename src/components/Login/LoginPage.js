import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Styles
import {
  Login,
  ImageSide,
  Image,
  LoginFormSide,
  LoginForm,
  Submit,
  InputWrapper,
  FormTitle,
  HomeLink,
} from "../../styles/LoginPageStyles";

// Assets
import { ReactComponent as LoginImage } from "../../assets/svgs/mobile-login.svg";
import { ReactComponent as Arrow } from "../../assets/svgs/arrow.svg";
import { ReactComponent as User } from "../../assets/svgs/user.svg";
import { ReactComponent as Lock } from "../../assets/svgs/lock.svg";

const LoginPage = () => {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  useEffect(() => {
    const navbar = document.querySelector(".Navbar");
    const footer = document.querySelector(".Footer");

    navbar.classList.add("display-none");
    footer.classList.add("display-none");
  }, []);

  const email = useWatch({ control, name: "email" });
  const password = useWatch({ control, name: "password" });

  const { push } = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    push("/dashboard");
  };

  return (
    <Login>
      <HomeLink to="/">
        <Arrow />
        <p>Inicio</p>
      </HomeLink>
      <ImageSide>
        <Image>
          <LoginImage />
        </Image>
      </ImageSide>
      <LoginFormSide>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Login</FormTitle>
          <InputWrapper>
            <input
              type="text"
              className={`${email && "typed"} ${errors.email && "error"}`}
              {...register("email", {
                required: {
                  value: true,
                  message: "Por favor, llenar este campo",
                },
                validate: {
                  min: (v) => (v.length < 6 ? "Mínimo 6 caracteres" : true),
                },
              })}
            />
            <User />
            <label>Email</label>
            <p className="error">{errors.email && errors.email.message}</p>
          </InputWrapper>

          <InputWrapper>
            <input
              type="password"
              className={`${password && "typed"} ${errors.password && "error"}`}
              {...register("password", {
                required: {
                  value: true,
                  message: "Por favor, llenar este campo",
                },
                validate: {
                  min: (v) => (v.length < 6 ? "Mínimo 6 caracteres" : true),
                },
              })}
            />
            <Lock />
            <label>Password</label>
            <p className="error">
              {errors.password && errors.password.message}
            </p>
          </InputWrapper>
          <a href="/#/login">¿No recuerdas tu contraseña? Haz click aquí</a>
          <a href="/#/login">Reenviar email de confirmación</a>
          <Submit>Log in</Submit>
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </LoginForm>
      </LoginFormSide>
    </Login>
  );
};

export default LoginPage;
