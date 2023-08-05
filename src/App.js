import Gallery from './components/basic-components/Gallery';
import TodoList from './components/basic-components/TodoList';
import TeacherList from './components/basic-components/TeacherList';
import SculptureList from './components/basic-components/SculptureList';

function App() {
  return (
    <div className="App">
      <SculptureList/>  
      <Gallery/>
      <TodoList/>
      <TeacherList/>
    </div>
  );
}

export default App;
