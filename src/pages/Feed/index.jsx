import { useEffect } from "react";
import { Container } from "reactstrap";
export default () => {
  useEffect(() => {
    if (
      !window.localStorage.getItem("username") ||
      !window.localStorage.getItem("token")
    ) {
      window.location.href = "/";
    }
  }, []);
  return (
    <Container>
      <h1>Feed</h1>
    </Container>
  );
};
