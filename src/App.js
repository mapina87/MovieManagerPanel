import React from 'react';
import styled from "styled-components";
import MovieManagerPanel from './components/MovieManagerPanel/'

const Marco = styled.div`
  position: absolute;
  width: 700px;
  height: 600px;
  top: 50%;
  left: 50%;
  margin-top: -300px;
  margin-left: -400px;
  padding: 0.5em;
`;

function App() {
  return (
    /*<Marco> */
      <MovieManagerPanel/>
    /*</Marco>*/
  );
}

export default App;
