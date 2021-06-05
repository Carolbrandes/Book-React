import { post_message } from "../../services";
import { FormGroup, Input, Button, Col } from "reactstrap";
import styles from "./styles.module.css";
import { useState } from "react";

export default () => {
  const [post, setPost] = useState("");
  const handlePost = async () =>
    await post_message(
      { content: post },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
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
