import React from "react"
import './App.css';

function App() {

  const [todo, settodo] = React.useState("")
  const [store, setstore] = React.useState([])
  const [editId, seteditId] = React.useState(0)
  console.log(editId);
  console.log(store);
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editId) {
      const editTodo = store.find((f) => f.id === editId)
      const updatedTodos = store.map((t) => t.id === editTodo.id ? (t = { id: t.id, todo }) :
        { id: t.id, todo: t.todo })
        setstore(updatedTodos)
        seteditId(0)
        settodo("")
        return;
    }

    // const copystore = [...store]
    // setstore(copystore.push(todo))

    setstore([{ id: `${todo}-${Date.now()}`, todo }, ...store])
    settodo("")
  }

  const handleDelete = (id) => {
    let data = store.filter((val) => val.id !== id)
    setstore(data)
  }
  const handleEdit = (id) => {
    const edit = store.find((t) => t.id === id)
    settodo(edit.todo)
    seteditId(id)

  }
  return (
    <div className="App">
      <div className="container">
        <h4>Todo List App</h4>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => settodo(e.target.value)} className="input" />
          <button className="go" >{editId ? "Edit" : "Go"}</button>
        </form>
        <ul className="allTodo">
          {
            store.map((val) => {
              return (
                <li className="listTodo" ><span key={val.id}>
                  {val.todo}</span>
                  <button className="go" onClick={() => handleEdit(val.id)}>Edit</button>
                  <button className="go" onClick={() => handleDelete(val.id)}>Delete</button></li>
              )
            })
          }



        </ul>
      </div>
    </div>
  );
}

export default App;
