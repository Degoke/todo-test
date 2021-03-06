import { TextField, IconButton, Grid, Snackbar } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { MainContext } from "../utils/main-context";
import { useContext } from "react";

const AddTodo = () => {
  const { handleChange, handleSubmit, useStyles } = useContext(MainContext);
  const classes = useStyles();
  return (
    <form method="POST" onSubmit={handleSubmit} className={classes.form}>
      <Grid container justify="center">
        <Grid item md={10}>
          <TextField
            label="Add Todo"
            fullWidth={true}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item md={2}>
          <IconButton
            aria-label="add"
            type="submit"
            color="primary"
            className={classes.button}
          >
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
