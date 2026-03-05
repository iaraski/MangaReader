import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { createAppTheme } from '../../shared/config/theme/theme';
import { useThemeStore } from '../../shared/model/themeStore';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeStore((state) => state.mode);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
