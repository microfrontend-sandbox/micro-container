import React, { FC } from 'react';
import { useHistory, withRouter } from "react-router-dom";

const HeaderUI:FC = ({ children}) => {
  const { goBack, location } = useHistory();
  return <>
    <h1 className="App-header">
      <div className="Header-back">
        {location.pathname !== '/' && <a title="Go Back" onClick={() => goBack()}>&lt;- Back</a>}
      </div>
      <div className="title">{children}</div>
    </h1>
  </>
};

export const Header = withRouter(HeaderUI);