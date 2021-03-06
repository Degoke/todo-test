import {
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { MainContext } from "../utils/main-context";
import { useContext } from "react";

const AllDialogs = () => {
  const {
    openAdd,
    closeDialog,
    deleteTodo,
    confirm,
    current,
    edit,
    editTodo,
    handleChange,
    deleteAll,
    deleteAllTodos,
  } = useContext(MainContext);

  return (
    <>
      <Snackbar
        open={openAdd}
        autoHideDuration={6000}
        onClose={closeDialog}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert severity="success" onClose={closeDialog} variant="filled">
          Task Added!
        </Alert>
      </Snackbar>
      <Dialog open={confirm} onClose={closeDialog}>
        <DialogTitle>Delete Task?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete this task?
          </DialogContentText>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                deleteTodo(current);
              }}
              color="secondary"
              autoFocus
            >
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Dialog open={edit} onClose={closeDialog} maxWidth="md" fullWidth>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Edit"
            fullWidth
            required
            defaultValue={current}
            onChange={handleChange}
          />
          <DialogActions>
            <Button onClick={closeDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={editTodo} color="primary" autoFocus>
              Edit
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Dialog open={deleteAll} onClose={closeDialog}>
        <DialogTitle>Delete All Tasks?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to permanently delete ALL Tasks?
          </DialogContentText>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={deleteAllTodos} color="secondary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDialogs;
