import style from './Home.module.scss';
import TodoList from './TodoList/TodoList';

function Home() {
  return (
    <div className={style.container}>
      <div className={style.container_main}>
        <h1>TODOLIST</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default Home;
