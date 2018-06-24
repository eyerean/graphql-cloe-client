import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Flow126 = () => (
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
      if (loading) return <p>Loading... <span>🙏</span></p>;
      if (error) return <p>Error <span>😱</span></p>;
      const flow = data.flow;
      console.log('data', data);
      if (flow){
        return (
          <StyleFlow>
            <p>ID: {flow.flowId}</p>
            <p>Name: {flow.flowName}</p>
            <p>Debug: {flow.debug ? <span>✅</span> : <span>❌</span>}</p>
            <p>Script: <code>{flow.data.script}</code></p>
          </StyleFlow>
        );
      }else{
        return <div>oops</div>
      }
    }}
  </Query>
);

export default Flow126;


const StyleFlow = styled.div`
  background-color: blanchedalmond;
  padding: 20px;
  width: 300px;
  border: 2px solid brown;
`;
