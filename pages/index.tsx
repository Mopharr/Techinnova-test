import Head from "next/head";
import {
  Container,
  Content,
  Field,
  Message,
  Errorr,
} from "../styles/login.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { GrFormCheckmark } from "react-icons/gr";
import { BiErrorCircle } from "react-icons/bi";

interface FormInput {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().max(16).min(8),
});

const login = () => {
  const [loading, setLoading] = useState(false);
  const timer: any = useRef();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 3000);

    axios
      .post(
        "https://auth-test-api-techinnover.herokuapp.com/api/v1/user/login",
        data
      )
      .then((res: any) => {
       document.cookie =
         `ID=${res.data._id}; expires=Thu, 22 Dec 2022 12:00:00 UTC;` 
        setSuccess(true);
        timer.current = window.setTimeout(() => {
          setSuccess(false);
        },4000);
        setErr(false);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setErr(true);
        timer.current = window.setTimeout(() => {
          setErr(false);
        }, 4000);
      });
  };
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {success ? (
          <Message>
            <p>
              {" "}
              <GrFormCheckmark /> login was successful
            </p>
          </Message>
        ) : null}

        {err ? (
          <Errorr className={success ? "none" : "show"}>
            <p>
              <BiErrorCircle />
              login failed
            </p>
          </Errorr>
        ) : null}

        <Content>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field>
              <label htmlFor="title">Email Address</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email address"
              />
              <p>{errors.email?.message}</p>
            </Field>
            <Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your Password"
              />
              <p>{errors.password?.message}</p>
            </Field>
            <button type="submit">
              {" "}
              {loading ? (
                <CircularProgress size={30} sx={{ color: "white" }} />
              ) : (
                "Sign In"
              )}
            </button>
            <a href="/signup">Sign Up</a>
          </form>
        </Content>
      </Container>
    </div>
  );
};

export default login;
