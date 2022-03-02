import "./App.css";
import PersonList from "./components/PersonList";
import PostAdd from "./components/PostAdd";
import PostDelete from "./components/PostDelete";
import PostUpdate from "./components/PostUpdate";
function App() {
  return (
    <div className="App">
      <PersonList />
      <PostAdd />
      <PostDelete />
      <PostUpdate />
    </div>
  );
}

export default App;
