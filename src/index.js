import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/bootstrap.css';
import './styles/app.css';
//import './styles/font-awesome.min.css';
import './styles/common.css';
import './styles/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {loadCustomerData} from "./actions/customerDataActions"

require('./favicon.ico');
const store = configureStore();

render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>
    </MuiThemeProvider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
};
//render(<div>Hello World</div>, document.getElementById('app'));
