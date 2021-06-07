import { useEffect, useContext } from "react";
import { AppContext } from "../../store/Store";
import { get_posts } from "../../services";
import { getPublication } from "../../utils";
import { Container, Row, Col } from "reactstrap";
import WritePublication from "../../components/WritePublication";
import Publications from "../../components/Publications";
import styles from "./styles.module.css";

export default () => {
  const { publications, setPublications } = useContext(AppContext);

  useEffect(() => {
    if (
      !window.localStorage.getItem("username") ||
      !window.localStorage.getItem("token")
    ) {
      window.location.href = "/";
    } else {
      getPublication(get_posts, setPublications);
    }
  }, []);
  return (
    <Container className="pt-3 pt-md-5">
      <Row className="justify-content-md-between">
        <Col xs={12} md={5}>
          <WritePublication />
        </Col>

        <Col className={styles.publications_col} xs={12} md={5}>
          {publications.length > 0 &&
            publications.map(({ content }, index) => (
              <Publications key={index} title={content} id={index} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};
