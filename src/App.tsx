import React from 'react';
import logo from './assets/logos/wizardry.png';
import Maintenance from './Maintenance';
import styled from 'styled-components';

const SiteLayout = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
background-color: rgba(253, 245, 232, 0.5);
`


function App() {
  return (
    <SiteLayout>
      <Maintenance />
    </SiteLayout>

  );
}

export default App;
