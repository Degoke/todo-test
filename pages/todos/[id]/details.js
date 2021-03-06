import Bar from "../../../src/components/appbar";
import { useRouter } from "next/router";
import { Paper, Typography, Container, Grid } from "@material-ui/core";
import { useEffect, useContext, useState } from "react";
import { MainContext } from "../../../src/utils/main-context";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [todo, setTodo] = useState();
  const { todos, useStyles } = useContext(MainContext);

  useEffect(() => {
    if (todos.length > 0) {
      setTodo(todos.filter((todo) => {
        return String(todo.id) === id
        }
      ));
    }
  }, [id]);

  useEffect(() => {
      console.log(todo)
  })

  const classes = useStyles();

  return (
    <>
      <Bar />
      <Container maxWidth="xs">
        <Typography variant="h4" className={classes.form}>Todo Details</Typography>

        {todo && typeof todo[0] === "object" ? (
          <Paper elevation={3} className={classes.button}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography>Task:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{todo[0].task}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography>Date Created:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      {todo[0].createdAt.toLocaleString()}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography>Status:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      {todo[0].completed ? "Completed" : "Ongoing"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justify="space-between">
                  <Grid item>
                    <Typography>A Priority:</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{todo[0].important ? "Yes" : "No"}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Typography>Oops Task does not exist!</Typography>
        )}
      </Container>
    </>
  );
};

export default Details;
