import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import SingleTaskPage from "./features/tasks/SingleTaskPage/index";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styledNavLink";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <SingleTaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);