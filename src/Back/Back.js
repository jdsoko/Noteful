import React from 'react';
import { withRouter } from "react-router-dom";
import './Back.css'

const Back = ({ history }) => (
    <button className="back" onClick={history.goBack}>Back</button>
  );
  
  export default withRouter(Back);