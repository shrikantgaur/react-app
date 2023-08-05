import Gallery from './components/basic-components/Gallery';
import TodoList from './components/basic-components/TodoList';
import TeacherList from './components/basic-components/TeacherList';
import SculptureList from './components/basic-components/SculptureList';
import Form from './components/basic-components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <SculptureList/>  
      <Gallery/>
      <TodoList/>
      <TeacherList/>
    </div>
  );
}

export default App;
