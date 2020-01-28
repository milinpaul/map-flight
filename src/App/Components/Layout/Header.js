import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
<<<<<<< HEAD
// import Button from '@material-ui/core/Button'
=======
import Button from '@material-ui/core/Button'
>>>>>>> 99ac99a963e67ceb01c28fa9e6e3aae24757d853
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MenuButton = styled(IconButton)`
  margin-right: 16px;
`

const AppName = styled(Typography)`
  flex-grow: 1;
`

const Header = () => {
<<<<<<< HEAD
  const appName = process.env.REACT_APP_APPLICATION_NAME
=======
>>>>>>> 99ac99a963e67ceb01c28fa9e6e3aae24757d853
  return (
    <AppBar position='static'>
      <Toolbar>
        <MenuButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </MenuButton>
<<<<<<< HEAD
        <AppName variant='h6'>{appName}</AppName>
        {/* <Button color='inherit'>Login</Button> */}
=======
        <AppName variant='h6'>React Seed</AppName>
        <Button color='inherit'>Login</Button>
>>>>>>> 99ac99a963e67ceb01c28fa9e6e3aae24757d853
      </Toolbar>
    </AppBar>
  )
}

export default Header
