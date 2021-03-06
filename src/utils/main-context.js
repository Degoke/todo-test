import { useState, useEffect, createContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [value, setValue] = useState();

  const [openAdd, setOpenAdd] = useState(false);

  const [confirm, setConfirm] = useState(false);

  const [current, setCurrent] = useState();

  const [edit, setEdit] = useState(false);

  const [deleteAll, setDeleteAll] = useState(false);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const markComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const markImportant = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [
        {
          id: Math.floor(Math.random() * 9000) + 1,
          task: value,
          completed: false,
          important: false,
          createdAt: new Date(Date.now()),
        },
        ...prevTodos,
      ];
    });
    setOpenAdd(true);
    e.target.reset();
  };

  const closeDialog = () => {
    setConfirm(false);
    setOpenAdd(false);
    setEdit(false);
    setDeleteAll(false);
  };

  const openDialog = (id) => {
    setConfirm(true);
    setCurrent(id);
  };

  const openDeleteAll = () => {
    setDeleteAll(true);
  };

  const openEdit = (task) => {
    setEdit(true);
    setCurrent(task);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
    setCurrent("");
    closeDialog();
  };

  const editTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.task === current ? { ...todo, task: value } : todo
      );
    });
    setOpenAdd(true);
    closeDialog();
    setCurrent("");
  };

  const deleteAllTodos = () => {
    setTodos([]);
    closeDialog();
  };

  const useStyles = makeStyles({
    bar: {
      padding: "1rem 2rem",
    },
    form: {
      margin: "2rem auto",
    },
    box: {
      padding: "1rem 0rem",
      margin: "0.5rem 0rem",
    },
    complete: {
      background: "#4caf50",
    },
    important: {
      background: "#3f51b5",
    },
    button: {
      padding: "2rem",
    },
  });

  return (
    <MainContext.Provider
      value={{
        todos,
        handleChange,
        handleSubmit,
        markComplete,
        deleteTodo,
        useStyles,
        markImportant,
        openAdd,
        confirm,
        closeDialog,
        openDialog,
        current,
        edit,
        openEdit,
        editTodo,
        deleteAll,
        openDeleteAll,
        deleteAllTodos,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
