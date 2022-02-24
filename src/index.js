import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//ReactDOM.render(element, container);
//Отрисовывает элемент React в DOM в предоставленном container 
//и вернёт ссылку на компонент (или возвращает значение null для компонентов без состояния).
//метод возвращает описание того , что вы хотите видеть на экране
