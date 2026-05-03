import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import theme from './Theme';
import ContentPane from './Components/ContentPane';
import { CssBaseline } from '@mui/material';
import HomePage from './Components/HomePage';
import ProjectsPage from './Components/ProjectsPage';
import LifeList from './Components/LifeList';
import ConsumptionPage from './Components/ConsumptionPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-wrapper">
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ContentPane />}>
              <Route index element={<HomePage />} />
              <Route path="consumption" element={<ConsumptionPage />} />
              <Route path="life-list" element={<LifeList />} />
              <Route path="projects" element={<ProjectsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
