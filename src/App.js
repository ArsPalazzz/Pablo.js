import './App.css';
import Chess from './Chess';

function App() {
  const myTime = new Date().toLocaleDateString();

  const znach = [{
    stock_name: "EFX",
    company_name: "Equifax Inc",
    price: 163.55,
    currency: "USD",
    change: "+9.03"
}, {
    stock_name: "IRM",
    company_name: "Iron Mountain Inc",
    price: 33.21,
    currency: "USD",
    change: "+1.42"
}, {
    stock_name: "NTAP",
    company_name: "NetApp Inc",
    price: 54.81,
    currency: "USD",
    change: "-6.01"
}, {
    stock_name: "CTL",
    company_name: "Centurylink Inc",
    price: 13.79,
    currency: "USD",
    change: "-1.37"
}]
const red = {'color' : 'red'};
const green = {'color' : 'green'};
  return (
    
    <div className="App">
    <h2> Current date is - {myTime}</h2>
    <br></br>
    <table className='table'>
      <tr>{znach.map(parametr=><td>{parametr.stock_name}</td>)}
      </tr>
      <tr>{znach.map(parametr=><td>{parametr.company_name}</td>)}
      </tr>
      <tr>{znach.map(parametr=><td>{parametr.price}</td>)}
      </tr>
      <tr>{znach.map(parametr=><td>{parametr.currency}</td>)}
      </tr>
      <tr>{znach.map(parametr=><td style={parametr.change > 0 ? green : red}>{parametr.change}</td>)}
      </tr>
    </table>
    <div>{Chess}</div>
    </div>
);
}

export default App;

//Метод .map () создает массив, вызывая определенную функцию для каждого элемента родительского массива.
