import React from 'react';
import styled from 'styled-components';

const FlowDetails = ({flow}) => (
  <StyleFlow>
    <p>ID: {flow.flowId}</p>
    <p>Name: {flow.flowName}</p>
    <p>Debug: {flow.debug ? <span role="img" aria-label="approve">✅</span> : <span role="img" aria-label="cancel">❌</span>}</p>
    <p>Fast: {flow.priority ? <span role="img" aria-label="approve">✅</span> : <span role="img" aria-label="cancel">❌</span>}</p>
    <p>Script: {flow.data && flow.data.script ? <code>{flow.data.script}</code> : <span role="img" aria-label="cancel">❌</span>} </p>
  </StyleFlow>
)

export default FlowDetails;

const StyleFlow = styled.div`
  background-color: blanchedalmond;
  padding: 20px;
  width: 300px;
  border: 2px solid brown;
  word-wrap: break-word;
`;
