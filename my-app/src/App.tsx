import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import './index.css';

//export const App: React.FC = () => <WelcomeMessage />;
export class App extends React.Component {
  render() {
    return (
        <>
          <Header />
        </>
    );
  }
}

export default App;
