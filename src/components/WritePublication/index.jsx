import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../store/Store";
import { post_message, get_posts } from "../../services";
import { FormGroup, Input, Button, Col } from "reactstrap";
import styles from "./styles.module.css";

export default () => {
  const { setPublications } = useContext(AppContext);
  const [post, setPost] = useState("");

  const handlePost = async () => await post_message({ content: post });

  const getPublication = async () => {
    const response = await get_posts();
    setPublications(response.data);
  };

  useEffect(() => {
    getPublication();
  }, [handlePost]);

  return (
    <div className={`${styles.publication_wrapper} p-5 mt-5`}>
      <FormGroup>
        <Col sm={12}>
          <Input
            value={post}
            onInput={({ target }) => setPost(target.value)}
            type="textarea"
            placeholder="Sua Publicação"
          />
        </Col>
      </FormGroup>

      <Col sm={12} className="d-flex justify-content-end">
        <Button onClick={handlePost} className="mt-3" color="secondary">
          Publicar
        </Button>
      </Col>
    </div>
  );
};
