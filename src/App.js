import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
