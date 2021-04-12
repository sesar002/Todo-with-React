import React from 'react';
import { Route, Switch } from 'react-router';
import { filters, routs } from './constants';
import TodoMain from './TodoMain'


export default function App(){


  return(
    <div>
      <Switch>
        <Route path={routs.ALL}>
          <TodoMain filter={filters.ALL} />
        </Route>
        <Route path={routs.COMPLETED}>
          <TodoMain filter={filters.COMPLETED} />
        </Route>
        <Route path={routs.NOT_COMPLETED}>
          <TodoMain filter={filters.NOT_COMPLETED} />
        </Route>
        <Route exact path='/'>
          <TodoMain filter={filters.ALL} />
        </Route>
      </Switch>
    </div>
  )
}