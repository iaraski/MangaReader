import MoonIcon from '@mui/icons-material/NightlightRound';
import SunnyIcon from '@mui/icons-material/Sunny';
import { Box, Button, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useThemeStore } from '../../../shared/model/themeStore';

export default function Navbar() {
  const { mode, toggle } = useThemeStore();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingInline: 4,
        paddingTop: 3,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <NavLink to='/' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          MangaReader
        </NavLink>
        <NavLink
          to='/Catalog'
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
        >
          Каталог
        </NavLink>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <NavLink to='/Publish'>
          <Button
            variant='outlined'
            sx={{ backgroundColor: theme.palette.text.primary, paddingInline: 4 }}
          >
            Добавить тайтл
          </Button>
        </NavLink>
        <NavLink to='/Login'>
          <Button>Вход</Button>
        </NavLink>
        <Button sx={{ '&:focus': { outline: 'none', border: 'none' } }} onClick={() => toggle()}>
          {mode === 'dark' ? <SunnyIcon /> : <MoonIcon />}
        </Button>
      </Box>
    </Box>
  );
}
