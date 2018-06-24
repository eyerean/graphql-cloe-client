import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FlowDetails from './FlowDetails';

const GetHCFlow = () => (
  <Query
    query={gql`
      {
        flow(flowId: 126) {
          flowId
          flowName
          debug
          priority
          data {
            script
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading... <span role="img" aria-label="pray">🙏</span></p>;
      if (error) return <p>Error <span role="img" aria-label="scream">😱</span></p>;
      const flow = data.flow;
      if (flow){
        return <FlowDetails flow={flow} />;
      }else{
        console.log('data', data);
        return <div>Oops! Check fetched data!</div>
      }
    }}
  </Query>
);

export default GetHCFlow;
