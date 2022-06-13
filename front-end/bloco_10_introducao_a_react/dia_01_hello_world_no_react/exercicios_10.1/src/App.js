import './App.css';
import Header from './Header';
import React from 'react';
import Content  from './Content';
import Footer from './Footer';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// const tarefas = ['levar na escola', 'tomar café', 'fazer os exercícios da trybe' ];

// function App() {
//   return (
//   <>
//       <Header />
//     <div className="App">
//      { tarefas.map((tarefa) => Task(tarefa)) };
//     </div>
//     </>
//   );
// }

class App extends React.Component {
  render () {
    return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
    )
  }
}

export default App;
