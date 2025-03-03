import './App.css';
import HelloWorld from "./components/HelloWorld";
import SecondComponent from "./components/SecondComponent";
import ListPosts from "./components/ListPosts";
import ListNotes from "./components/ListNotes";
import CreateNote from "./components/CreateNote";
import DetailNote from "./components/DetailNote";

function App() {

    return (
        <div className="App">
            <ListNotes />
            <CreateNote />
        </div>
      );
}

export default App;
