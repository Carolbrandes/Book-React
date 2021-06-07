import { useEffect, useState } from "react";
import Form from "../../components/Form";
import { Col } from "reactstrap";
import { sign_up_func, sign_in_func } from "../../services";
import styles from "./styles.module.css";
import Message from "../../components/Message";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerSucess, setRegisterSucess] = useState(false);
  const [loginInsucess, setLoginInsucess] = useState(false);
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const handleSignUp = async () => {
    try {
      const response = await sign_up_func({ username, password });

      if (response.status === 200) {
        setRegisterSucess(true);
        setTimeout(() => {
          handleSignIn({ username, password });
        }, 2000);
      }
    } catch (error) {
      if (error.response.status === 422) {
        setPasswordInvalid(true);
      }

      if (error.response.status === 500) {
        setUsernameInvalid(true);
      }
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await sign_in_func({ username, password });

      if (response.status === 200) {
        window.localStorage.setItem("token", response.data);
        window.localStorage.setItem("username", username);
        window.location.href = "/feed";
      }
    } catch (error) {
      if (error.response.status === 401) {
        setLoginInsucess(true);
      }
    }
  };

  useEffect(() => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("username")
    ) {
      window.location.href = "/feed";
    }
  }, []);

  return (
    <>
      <Col className={styles.form_wrapper} md={6}>
        <Form
          value1={username}
          setValue1={setUsername}
          value2={password}
          setValue2={setPassword}
          function1={handleSignUp}
          function2={handleSignIn}
          validateValue1={usernameInvalid}
          validateValue2={passwordInvalid}
        />
      </Col>

      {registerSucess && (
        <Col className={styles.alert_wrapper} md={4}>
          <Message className="text-center" color="success">
            Usuário Cadastrado com sucesso!
          </Message>
        </Col>
      )}

      {loginInsucess && (
        <Col className={styles.alert_wrapper} md={4}>
          <Message className="text-center" color="danger">
            Usuário ou senha incorretos!
          </Message>
        </Col>
      )}
    </>
  );
};
