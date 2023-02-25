import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import ColorSchemeToggle from './ColorSchemeToggle';
import MuiLogo from './MuiLogo';

export default function FirstSidebar() {
  return (
    <Sheet
      className="FirstSidebar"
      variant="soft"
      color="primary"
      invertedColors
      sx={{
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--FirstSidebar-width)',
        top: 0,
        p: 1.5,
        py: 3,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--FirstSidebar-width': '68px',
          },
        }}
      />
      <MuiLogo />
      <List
        sx={{
          mt: 'auto',
          flexGrow: 0,
          '--List-item-radius': '8px',
          '--List-gap': '8px',
        }}
      >
      <ColorSchemeToggle/>
      </List>
      <Divider />
        <IconButton variant="plain" sx={{ ml: 'auto' }}>
        <i data-feather="log-out" />
        </IconButton>    
      </Sheet>
  );
}
