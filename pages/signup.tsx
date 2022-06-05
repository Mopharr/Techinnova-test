import type { NextPage } from "next";
import Head from "next/head";
import { Container, Content, Field } from "../styles/login.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

interface FormInput {
  email: string;
  password: string;
  fullName: string;
  userType: string;
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(6).max(16),
  fullName: yup.string().required(),
  userType: yup.string().required(),
});

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    axios
      .post(
        "https://auth-test-api-techinnover.herokuapp.com/api/v1/user/create",
        data
      )
      .then((res) => {
        window.localStorage.setItem("data", JSON.stringify(res.data));
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Content>
          <h2>Signup</h2>
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
            <Field>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                {...register("fullName")}
                placeholder="Enter your Full name"
              />
            </Field>
            <Field>
              <label htmlFor="userType">Role</label>
              <select {...register("userType")}>
                <option value="student">Student</option>
                <option value="lecturer">Lecture</option>
              </select>
            </Field>
            <button type="submit">Sign Up</button>
          </form>
        </Content>
      </Container>
    </div>
  );
};

export default Home;
