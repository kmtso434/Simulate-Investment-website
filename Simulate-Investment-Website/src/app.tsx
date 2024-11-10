import type { Component } from 'solid-js';
import { css } from '../styled-system/css';
import logo from './logo.svg';
import { Button } from './components/ui/button';

const App: Component = () => {
  return (
    <div>
      <div class={css({ fontSize: "2xl", fontWeight: 'bold' })}>Hello 🐼!</div>
      <Button>sdf</Button> 
    </div>
  );
};

export default App;
