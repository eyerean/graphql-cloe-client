import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import GetHCFlow from './GetHCFlow';
import GetFlow from './GetFlow';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div style={{margin: 15}}>
      <h2>CloE GraphQL client <span role="img" aria-label="rocket">🚀</span></h2>
      <p>This should be the flow with ID 126:</p>
      <GetHCFlow/>
      <GetFlow/>
    </div>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

