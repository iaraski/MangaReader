import { Box } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TitleCard from '../../../entities/manga/ui/Title-card';
import { fakeMangaData } from '../../../shared/lib/fakeMangaData';

export default function MangaList() {
  return (
    <Box sx={{ width: '100%', px: 2, paddingBottom: 2 }}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={5}
        spaceBetween={25}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1500: { slidesPerView: 6 },
        }}
      >
        {fakeMangaData.map((manga) => (
          <SwiperSlide key={manga.id}>
            <TitleCard
              coverUrl={manga.coverUrl}
              title={manga.title}
              genres={manga.genres}
              rating={manga.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
