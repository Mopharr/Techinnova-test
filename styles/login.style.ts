import styled from "styled-components";

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Noto+Serif&family=Nunito:wght@200&family=Open+Sans:wght@300&family=Overpass:wght@300&display=swap');
  background: #f5f5f5;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const Content = styled.div`
  width: 700px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 53px;
    letter-spacing: -0.05em;
    color: #101828;
    margin-bottom: 1em;
  }
  button {
    width: 528px;
    height: 57px;
    background: #7d5fff;
    border: none;
    outline: none;
    border-radius: 6px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 528px;

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #667085;
    margin-bottom: 1em;
  }
  input {
    width: 100%;
    height: 52px;
    background: #ffffff;
    border: 1px solid #eaeced;
    border-radius: 7px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #8d94a4;
    margin-bottom: 2em;
    padding: 0 0.5em;
    outline: none;
  }
  input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #8d94a4;
  }
  select {
    width: 100%;
    outline: none;
    height: 52px;
    background: #ffffff;
    border: 1px solid #eaeced;
    border-radius: 7px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #8d94a4;
    margin-bottom: 2em;
    padding: 0 0.5em;
  }
`;


