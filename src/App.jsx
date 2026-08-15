import React from "react";
import Counter from "./challenges/01-counter/Counter";
import TodoList from "./challenges/02-todo/TodoList";
import SearchTable from "./challenges/03-searchTable/SearchTable";
import PasswordToggle from "./challenges/04-passwordToggle/PasswordToggle";
import Accordion from "./challenges/05-accordion/Accordion";
import Tabs from "./challenges/06-tabs/Tabs";
const App = () => {
  return (
    <>
      <h1>React Coding Challenge</h1>
      <hr />
      <Counter />
      <hr />
      <TodoList />
      <hr />
      <SearchTable />
      <hr />
      <PasswordToggle />
      <hr />
      <Accordion />
      <hr />
      <Tabs />
      <hr />
    </>
  );
};

export default App;
