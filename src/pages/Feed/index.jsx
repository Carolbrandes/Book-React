import { useEffect, useState } from "react";
import { get_posts } from "../../services";
import { Container, Row, Col } from "reactstrap";
import WritePublication from "../../components/WritePublication";
import Publications from "../../components/Publications"
import styles from "./styles.module.css"


export default () => {
  const [publications, setPublications] = useState([]);

  const getPublication = async () => {
    const response = await get_posts();
    setPublications(response.data)
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

        <Col className={styles.publications_col} sm={12} md={6}>
          {publications.length > 0 && publications.map(({content}, index) => <Publications key={index} title={content} />)}
        </Col>
      </Row>
    </Container>
  );
};
