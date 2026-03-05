import { Box, Button, Typography, useTheme } from '@mui/material';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TitleCard from '../../../entities/manga/ui/Title-card';
import { fakeMangaData } from '../../../shared/lib/fakeMangaData';
import { useThemeStore } from '../../../shared/model/themeStore';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MainHero() {
  const theme = useTheme();
  const themeStore = useThemeStore();
  const mode = themeStore.mode;

  const gradient =
    mode === 'dark'
      ? 'linear-gradient(190deg, rgba(45,45,46,1) 0%, rgba(20,20,38,1) 53%, rgba(16,51,59,1) 100%)'
      : 'linear-gradient(190deg, rgba(235,235,237,1) 0%, rgba(191,191,201,1) 35%, rgba(216,229,232,1) 100%)';

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        alignItems: 'center',
        width: '95%',
        margin: '2rem auto',
        height: { xs: 'auto', md: '80vh' },
        borderRadius: 2,
        overflow: 'hidden',
        background: gradient,
        transition: 'background 0.5s ease', // плавный переход при смене темы
      }}
    >
      <Box sx={{ width: '60%' }}>
        <Typography variant='h3' fontWeight={700} gutterBottom>
          Добро пожаловать в MangaReader
        </Typography>

        <Typography variant='body1' color={theme.palette.text.secondary} gutterBottom>
          Читай мангу, отслеживай рейтинги и находи новые истории каждый день!
        </Typography>

        <Button variant='contained' color='primary'>
          Начать читать
        </Button>
      </Box>

      {/* Swiper */}
      <Box sx={{ width: '30%', overflow: 'hidden', minWidth: 0 }}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={16}
          navigation
          pagination={{ clickable: true }}
          style={{
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          {fakeMangaData.map((manga) => (
            <SwiperSlide key={manga.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <TitleCard coverUrl={manga.coverUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
