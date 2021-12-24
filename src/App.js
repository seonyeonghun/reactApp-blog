import logo from './logo.svg';
import './App.css';

function App() {
  let title = 'REACT BLOG'
  function test(){
    return 100
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>{ title }</div>
        <div>{ test() }</div>
      </div>
    </div>
  );
}

export default App;
