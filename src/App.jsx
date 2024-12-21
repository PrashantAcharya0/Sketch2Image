// App.jsx
import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Demo from "./Demo";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4db6ac" },
    secondary: { main: "#1e88e5" },
  },
  typography: {
    fontFamily: 'monospace, "Courier New", Courier, monospace',
    h4: {
      fontFamily: 'monospace, "Courier New", Courier, monospace',
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Demo />
    </ThemeProvider>
  );
}

export default App;
