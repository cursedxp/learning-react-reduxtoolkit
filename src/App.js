import "./App.css";
import Counter from "./features/counter/counter.jsx";
import UserList from "./features/userlist/userList";
function App() {
  return (
    <div className="App">
      <Counter />
      <UserList />
    </div>
  );
}

export default App;
