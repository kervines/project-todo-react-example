import { useEffect, useState } from 'react';
import style from './style.css';

const tarefas = [
  { id: 1, title: 'minha primeira tarefa' },
  { id: 2, title: 'minha segunda tarefa' },
  { id: 3, title: 'minha terceira tarefa' },
  { id: 4, title: 'minha quarta tarefa' },
];

function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const resultadoFinal = await resultado.json();

      return resultadoFinal;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div className="lista">
              <li key={tarefa.id}>
                {tarefa.title}
                {tarefa.completed ? <mark>-Tarefa Concluida</mark> : null}
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
