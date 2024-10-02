// import { useState } from 'react';
// import { Box, styled , useMediaQuery } from '@mui/material';
// import './App.css';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SideBar from './Components/SideBar';
// import MainFrame from './Components/MainFrame';
// import sideBarOnTop from './Components/sideBarOnTop';

// const ComponentWrapper = styled(Box)({
//   display: 'flex',
//   justifyContent:'center',
//   gap:'20px'
//   // justifyContent: 'space-evenly!important', 
// });




// function App() {

//   const isSmallScreen = useMediaQuery('(max-width:820px)');

//   return (
//     <ComponentWrapper >
//       {isSmallScreen : <sideBarOnTop />  ? <SideBar />}
      
//       <MainFrame />
//     </ComponentWrapper>
//   );
// }

// export default App;

import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';
import SideBar from './Components/SideBar';
import MainFrame from './Components/MainFrame';
import SideBarOnTop from './Components/SideBarOnTop';
import { Margin } from '@mui/icons-material';

const ComponentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  maxWidth:'100%',
  '@media (max-width: 945px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
 
});


function App() {
  const isSmallScreen = useMediaQuery('(max-width:945px)');

  return (
    <ComponentWrapper>
      {isSmallScreen ? <SideBarOnTop /> : <SideBar />}
      <MainFrame />
    </ComponentWrapper>
  );
}

export default App;
