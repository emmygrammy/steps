import logo from './logo.svg';
import './App.css';


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
  return (
    <div className="steps">
      <div className="numbers">
      <div> 1</div>
       <div> 2</div>
        <div> 3</div>
        </div>

        <div className='message'> step1: learn react app</div>
       
        <div className='buttons'>
        <button> previous </button>
        <button> next </button>
        </div>

    </div>
  );
}

export default App;
