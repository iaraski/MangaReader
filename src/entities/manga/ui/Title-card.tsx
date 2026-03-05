import StarIcon from '@mui/icons-material/Star';
import { Box, styled, Typography } from '@mui/material';
import { Card } from '../../../shared/components/Card/Card';

const StyledMangaCard = styled(Card)(({ theme }) => ({
  width: 230,
  borderRadius: theme.spacing(2),
  marginBottom: 4,
}));

interface TitleCardProps {
  coverUrl: string;
  title?: string;
  genres?: string[];
  rating?: number;
}

export default function TitleCard({ coverUrl, title, genres, rating }: TitleCardProps) {
  return (
    <StyledMangaCard>
      <Card.Main>
        <Box
          component='img'
          src={coverUrl}
          alt={title}
          sx={{
            width: '100%',
            height: 320,
            objectFit: 'cover',
            borderRadius: 2,
          }}
        />

        <Typography variant='h6' noWrap>
          {title}
        </Typography>
      </Card.Main>

      <Card.Footer>
        <Typography variant='body2' noWrap>
          {genres && genres.join(', ')}
        </Typography>

        <Typography variant='body2' fontSize={16}>
          {rating}
          {rating && <StarIcon fontSize='inherit' color='warning' />}
        </Typography>
      </Card.Footer>
    </StyledMangaCard>
  );
}
