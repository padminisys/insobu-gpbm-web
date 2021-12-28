import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';
import LoginForm from './loginForm';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <LoginForm />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
