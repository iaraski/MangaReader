import { Box, Button, ButtonGroup, TextField, useTheme } from '@mui/material';
import { useState } from 'react';

export default function Login() {
  const theme = useTheme();
  const [btnText, setBtnText] = useState<'Войти' | 'Зарегестрироваться'>('Войти');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        marginTop: 15,
        marginInline: 'auto',
        borderRadius: 2,
        width: '40%',
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <ButtonGroup sx={{ backgroundColor: theme.palette.text.primary, marginTop: 2 }}>
          <Button
            sx={{
              paddingInline: 8,
              backgroundColor:
                btnText === 'Войти' ? theme.palette.background.default : theme.palette.text.primary,
            }}
            onClick={() => {
              setBtnText('Войти');
            }}
          >
            Вход
          </Button>
          <Button
            sx={{
              paddingInline: 8,
              backgroundColor:
                btnText === 'Зарегестрироваться'
                  ? theme.palette.background.default
                  : theme.palette.text.primary,
            }}
            onClick={() => {
              setBtnText('Зарегестрироваться');
            }}
          >
            Регистрация
          </Button>
        </ButtonGroup>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            textAlign: 'start',
            gap: 2,
            padding: 3,
          }}
        >
          <TextField label={'Логин'} variant='standard' placeholder='Введите почту или никнейм' />
          <TextField
            label={'Пароль'}
            variant='standard'
            placeholder='Введите пароль'
            type='password'
          />
        </Box>
        <Button sx={{ backgroundColor: theme.palette.text.primary, width: '40%' }}>
          {btnText}
        </Button>
      </Box>
    </Box>
  );
}
