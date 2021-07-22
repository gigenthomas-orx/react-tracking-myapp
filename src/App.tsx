import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainComponent from "./MainComponent";

import Container from "@material-ui/core/Container";
import {
  createMuiTheme,
  MuiThemeProvider,
  makeStyles
} from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import { useTracking } from "react-tracking";

const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    color: "#fff",
    background: theme.palette.primary.main
  }
}));

const theme = createMuiTheme({});

function SimpleContainer() {
  const classes = useStyles();

  const { Track } = useTracking(
    {},
    {
      dispatch: (d) =>
        (window.dataLayer = window.dataLayer || []).push({
          ...d,
          time: new Date()
        })
    }
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Track>
        <Container maxWidth="sm">
          <Button variant="contained">Default</Button>
          <div>
            <MainComponent />
          </div>
        </Container>
      </Track>
    </MuiThemeProvider>
  );
}

export default SimpleContainer;
