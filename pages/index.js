import AddTodo from "../src/components/addtodo.js";
import Bar from "../src/components/appbar.js";
import Container from "@material-ui/core/Container";
import ListItems from "../src/components/listitems";
import AllDialogs from "../src/components/dialogs.js";

const HomePage = () => {
  return (
    <>
      <Bar />
      <Container maxWidth="md">
        <AddTodo />
        <ListItems />
      </Container>
      <AllDialogs />
    </>
  );
};

export default HomePage;
