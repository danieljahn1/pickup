import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Container from './components/container'
import store from './redux/store'



ReactDOM.render(<Provider store={store}>
<BrowserRouter>
    <Container />
</BrowserRouter>
</Provider>, document.getElementById("app"));
