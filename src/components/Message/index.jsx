import { Alert } from "reactstrap";

export default ({ color, children, className }) => (
  <Alert className={className} color={color}>
    {children}
  </Alert>
);
