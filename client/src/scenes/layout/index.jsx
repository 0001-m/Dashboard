import React, {useState} from 'react'
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";  {/*allows us to have template layouts */}

const Layout = () => {
    //Box from material ui allows you to pass properties as if they're css properties
  return <Box width="100%" height ="100%">
    <Box>
        <Navbar />
        <Outlet />
    </Box>
  </Box>
};

export default Layout
