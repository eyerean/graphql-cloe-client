import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import FlowDetails from './FlowDetails';

const getFlowQuery = gql`
  query getFlow($flowId: Int!) {
    flow(flowId: $flowId) {
      flowId
      flowName
      debug
      priority
      data {
        script
      }
    }
  }
`

class GetFlow extends React.Component {
  state = {
    flowId: 0,
    flow: null
  };  

  handleInputChange = e => {
    this.setState({ flowId: e.target.value });
  };

  handleButtonClick = async (client) => {
    const { data } = await client.query({
      query: getFlowQuery,
      variables: { flowId: this.state.flowId }
    });

    const flow = data.flow;
    this.setState({flow});
  };

  render(){
    const {flowId, flow} = this.state;
    return (
      <div>
      <ApolloConsumer>
      {client => (
        <p>Select a flow to fetch: {` `}
          <input type="number" value={flowId} onChange={this.handleInputChange}/>
          <button onClick={() => this.handleButtonClick(client)}>Go</button>
        </p>
        )}
      </ApolloConsumer>
      
      {flow && <FlowDetails flow={flow} />}
      </div>
    );
  }
};

export default GetFlow;
