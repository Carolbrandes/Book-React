import { useContext, useState } from "react";
import { AppContext } from "../../store/Store";

import { Col, FormGroup, Input, Button, FormFeedback } from "reactstrap";
import styles from "./styles.module.css";

export default ({
  value1,
  setValue1,

  value2,
  setValue2,

  function1,
  function2,

  validateValue1,
  validateValue2,
}) => {
  const { signUp } = useContext(AppContext);
  const [errorPassword, setErrorPassword] = useState(false);

  const handlePassword = () => {
    if (value2.length < 3) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  };
  return (
    <div
      className={`${styles.form} p-5 d-flex flex-column align-items-center justify-content-center`}
    >
      <Col className="pb-3" md={7}>
        <FormGroup>
          <Input
            value={value1}
            onInput={({ target }) => setValue1(target.value)}
            type="text"
            name="username"
            placeholder="Usuário"
            invalid={validateValue1}
          />

          {validateValue1 && (
            <FormFeedback>O usuário deve ser único</FormFeedback>
          )}
        </FormGroup>
      </Col>

      <Col className="pb-3" md={7}>
        <FormGroup>
          <Input
            value={value2}
            onInput={({ target }) => setValue2(target.value)}
            type="password"
            name="password"
            placeholder="Senha"
            onBlur={handlePassword}
            invalid={errorPassword || validateValue2}
          />
          {errorPassword ||
            (validateValue2 && (
              <FormFeedback>A senha deve ter mais de 3 caracteres</FormFeedback>
            ))}
        </FormGroup>
      </Col>

      <Col md={6}>
        {signUp ? (
          <Button onClick={function1} className="d-block w-100" color="primary">
            Cadastrar
          </Button>
        ) : (
          <Button
            onClick={function2}
            className="d-block w-100"
            color="secondary"
          >
            Entrar
          </Button>
        )}
      </Col>
    </div>
  );
};
