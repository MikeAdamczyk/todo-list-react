import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import SingleTaskPage from "./features/tasks/SingleTaskPage/index";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styledNavLink";
import { StyledNavigation, StyledItem } from "./styledNavigation";

export default () => (
  <HashRouter>
    <nav>
      <StyledNavigation>
        <StyledItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledItem>
      </StyledNavigation>
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