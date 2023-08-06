import Gallery from './Gallery';
import TodoList from './TodoList';
import TeacherList from './TeacherList';
import SculptureList from './SculptureList';
import Form from './Form';

function BasicComponents() {
    return (
      <div className="BasicComponents">
        <Form/>
        <SculptureList/>  
        <Gallery/>
        <TodoList/>
        <TeacherList/>
      </div>
    );
  }
  
  export default BasicComponents;