import { useContext } from "react";
import { AppContext } from "../../store/Store";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import { Container, Row, Col, Button } from "reactstrap";

export default () => {
  const { setSignUp, setSignIn, setForgetPassword } = useContext(AppContext);

  const handleSignUp = () => {
    setSignUp(true);
    setForgetPassword(false);
    setSignIn(false);
  };

  const handleSignIn = () => {
    setSignUp(false);
    setForgetPassword(false);
    setSignIn(true);
  };

  const handleSignOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  return (
    <header className={styles.menu}>
      <nav className="py-2">
        <Container>
          <Row className="justify-content-md-between align-items-center">
            <Col
              className="mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start"
              xs={12}
              md={5}
            >
              <h1>
                <img src={logo} alt="Segware Book" />
              </h1>
            </Col>

            {!window.localStorage.getItem("username") ? (
              <Col
                className="d-flex justify-content-center justify-content-md-start pb-3 pb-md-0"
                xs={12}
                md={4}
              >
                <Button onClick={handleSignUp} className="me-3" color="primary">
                  Cadastrar
                </Button>
                <Button onClick={handleSignIn} color="secondary">
                  Entrar
                </Button>
              </Col>
            ) : (
              <Col
                className="d-flex align-items-center justify-content-center justify-content-md-start pb-3 pb-md-0"
                xs={12}
                md={4}
              >
                <span className="me-3">
                  Olá, {window.localStorage.getItem("username")}
                </span>
                <Button
                  onClick={handleSignOut}
                  className="me-3"
                  color="primary"
                >
                  Sair
                </Button>
              </Col>
            )}
          </Row>
        </Container>
      </nav>
    </header>
  );
};
