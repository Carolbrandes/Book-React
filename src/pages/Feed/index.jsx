import { useEffect, useState } from "react";
import { get_posts } from "../../services";
import { Container, Row, Col } from "reactstrap";
import WritePublication from "../../components/WritePublication";
export default () => {
  const [publications, setPublications] = useState([]);

  const getPublication = async () => {
    const response = await get_posts();
    console.log(response);
  };
  useEffect(() => {
    if (
      !window.localStorage.getItem("username") ||
      !window.localStorage.getItem("token")
    ) {
      window.location.href = "/";
    } else {
      getPublication();
    }
  }, []);
  return (
    <Container className="pt-5">
      <Row>
        <Col sm={12} md={6}>
          <WritePublication />
        </Col>

        <Col sm={12} md={6}></Col>
      </Row>
    </Container>
  );
};
