import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import BookingsList from "./bookingsList";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


const store = createStore(rootReducer);


function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/list_Of_Bookings" component={BookingsList} exact />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
