import React, { useRef } from 'react';
import { FC, useEffect } from "react";
import { History, LocationState } from 'history';
import { CSSTransition } from 'react-transition-group';

import './MicroFrontend.scss';

export interface MicroProps {
  name: string;
  host: string;
  history: History<LocationState>;
}

export const MicroFrontend: FC<MicroProps> = ({
  history,
  name ,
  host
}) => {
  const nodeRef = useRef(null)

  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(response => response.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}/${manifest.files['main.js']}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
      });

    return () => (window as any)[`unmount${name}`](`${name}-container`);
  });

  const renderMicroFrontend = () => {
    (window as any)[`render${name}`](`${name}-container`, history);
  };

  return <CSSTransition
    nodeRef={nodeRef}
    in={true}
    appear={true}
    classNames="micro"
    addEndListener={() => {}}>
      <main ref={nodeRef} id={`${name}-container`}/>
  </CSSTransition>;
};