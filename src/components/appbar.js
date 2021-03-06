import {
  AppBar,
  Grid,
  Typography,
  Switch,
  IconButton,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useContext } from "react";
import { ModeContext } from "../../pages/_app";
import { MainContext } from "../utils/main-context";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';

const Bar = () => {
  const { dark, setDark } = useContext(ModeContext);
  const { useStyles, openDeleteAll } = useContext(MainContext);
  const classes = useStyles();
  const router = useRouter();

  return (
    <AppBar color="primary" position="sticky" className={classes.bar}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" align="left">
            TODOS
          </Typography>
        </Grid>
        <Grid item>
          <Switch
            size="medium"
            icon={<Brightness4Icon />}
            checkedIcon={<Brightness7Icon />}
            onChange={() => setDark(!dark)}
          ></Switch>
          {router.pathname === '/' ? (
            <IconButton onClick={openDeleteAll}>
            <ClearIcon />
          </IconButton>
          ) : (
            <IconButton onClick={() => router.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          )}
          
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Bar;
