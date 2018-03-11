import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Container from './components/container'
import store from './redux/store/index'



ReactDOM.render(<Provider store={store}>
    <Container />
</Provider>, document.getElementById("app"));
