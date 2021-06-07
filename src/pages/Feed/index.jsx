import { useEffect, useContext } from "react";
import { AppContext } from "../../store/Store";
import { get_posts } from "../../services";
import { Container, Row, Col } from "reactstrap";
import WritePublication from "../../components/WritePublication";
import Publications from "../../components/Publications";
import styles from "./styles.module.css";

export default () => {
  const { publications, setPublications } = useContext(AppContext);

  const getPublication = async () => {
    const response = await get_posts();
    setPublications(response.data);
  };
  useEffect(() => {
    if (
      !window.localStorage.getItem("username") ||
      !window.localStorage.getItem("token")
    ) {
      window.location.href = "/";
    } else {
      getPublication(setPublications);
    }
  }, []);
  return (
    <Container className="pt-5">
      <Row>
        <Col sm={12} md={6}>
          <WritePublication />
        </Col>

        <Col className={styles.publications_col} sm={12} md={6}>
          {publications.length > 0 &&
            publications.map(({ content, authorId }, index) => (
              <Publications key={index} title={content} id={authorId} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};
