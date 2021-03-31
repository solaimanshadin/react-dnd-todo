import TaskBoard from './components/TaskBoard';
import AddTodo from './components/AddTodo';
import TaskProvider from './utils/task-context';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {
  return (
    <TaskProvider>
      <AddTodo />
      <DndProvider backend={HTML5Backend}>
        <TaskBoard />
      </DndProvider>
    </TaskProvider>
  );
}

export default App;
