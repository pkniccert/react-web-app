import { CAlert } from "@coreui/react";


const Alert = ({ props }) => (
    <CAlert color={props.color}>
        {props.message}
    </CAlert>
);

export default Alert;