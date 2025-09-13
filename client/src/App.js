import Dashboard from "scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "scenes/layout";  
import { themeSettings } from "theme";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        {" "}
        <ThemeProvider theme={theme}>
          <CssBaseline />{" "}
          {/* css reset - makes your code have more css defaults automatically*/}
          <Routes>
            <Route element= {<Layout /> }>
              <Route path="/" element={<Navigate to = "/dashboard" replace/> } />  {/*if we go to the default home page, we are goint to be navigating to dashboard route and we are gonna render the dashboard component */}
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
