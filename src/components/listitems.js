import { MainContext } from "../utils/main-context";
import { useContext } from "react";
import {
  GridList,
  GridListTile,
  Paper,
  Typography,
  IconButton,
  Checkbox,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import DoneIcon from "@material-ui/icons/Done";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import EditIcon from "@material-ui/icons/Edit";
import Link from 'next/link';
import InfoIcon from '@material-ui/icons/Info';

const ListItems = () => {
  const {
    todos,
    markComplete,
    useStyles,
    markImportant,
    openDialog,
    openEdit,
  } = useContext(MainContext);
  const classes = useStyles();

  return (
    <GridList cols={1} spacing={16} cellHeight="auto">
      {todos.length > 0
        ? todos.map((todo) => (
            
            <GridListTile cols={1} rows={1} key={todo.id}>
              <Paper
                elevation={3}
                className={`${classes.box} ${
                  todo.important ? classes.important : ""
                } ${todo.completed ? classes.complete : ""}`}
              >
                <Grid container alignItems="center" justify="space-between">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Link href={`/todos/${todo.id}/details`}>
                      <IconButton
                        >
                          <InfoIcon />
                        </IconButton>
                        </Link>
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon />}
                          checkedIcon={<DoneIcon />}
                          onChange={() => markComplete(todo.id)}
                        />
                        <Checkbox
                          icon={<StarOutlineIcon />}
                          checkedIcon={<StarIcon />}
                          onChange={() => markImportant(todo.id)}
                        />
                        <IconButton
                          aria-label="edit"
                          onClick={() => openEdit(todo.task)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <Typography>{todo.task}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <IconButton
                      aria-label="delete"
                      onClick={() => openDialog(todo.id)}
                    >
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Typography style={{ textAlign: "center" }}>
                  {todo.createdAt.toLocaleString()}
                </Typography>
              </Paper>
              
            </GridListTile>
            
          ))
        : ""}
    </GridList>
  );
};

export default ListItems;
