import Head from "next/head";
import { Container, Content, Field } from "../styles/login.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

interface FormInput {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().max(16).min(8),
});

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    axios.post(
      "https://auth-test-api-techinnover.herokuapp.com/api/v1/user/login",
      data
    ).then((res) => {
      window.localStorage.setItem('data', JSON.stringify(res.data))
    })
    console.log(data)
  };
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
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
            </Field>
            <Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your Password"
              />
            </Field>
            <button type="submit">Sign Up</button>
          </form>
        </Content>
      </Container>
    </div>
  );
};

export default login;
