import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StreamCreate from "./pages/StreamCreate";
import StreamList from "./pages/StreamsList";
import StreamEdit from "./pages/StreamEdit";
import StreamShow from "./pages/StreamShow";
import StreamDelete from "./pages/StreamDelete";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="*" render={() => <div>Page Not Found!</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
