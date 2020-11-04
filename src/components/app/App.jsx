import React from 'react';
import { Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Switch>

        </Switch>
      </Provider>
    </>
  )
}
