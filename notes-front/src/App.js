import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route exact path="/note/:id" component={NotePage} />
          <Route exact path="/" component={NotesListPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
