import React from 'react';
import { Editable, createReactPage } from '@react-page/core';
import { SlateEditable } from '@react-page/plugins-slate';
import '@react-page/core/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';

// Initialize React Page
const ReactPage = createReactPage();

function ReactPpage() {
  return (
    <div>
      <h1>Welcome to React Page</h1>
      <Editable editor={ReactPage} plugins={[SlateEditable]}>
        <SlateEditable />
      </Editable>
    </div>
  );
}

export default ReactPpage;
