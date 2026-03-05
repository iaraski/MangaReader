export interface Manga {
  id: number;
  title: string;
  coverUrl: string;
  author: string;
  genres: string[];
  description: string;
  rating: number;
  isCompleted: boolean;
}

export const fakeMangaData: Manga[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=22642d4985863f98741d76a58fe89bc1ab29c697-16336042-images-thumbs&n=13', // временная картинка
    author: 'Hajime Isayama',
    genres: ['Action', 'Drama', 'Fantasy'],
    description: 'Epic battle between humans and titans in a dark world.',
    rating: 4.9,
    isCompleted: false,
  },
  {
    id: 2,
    title: 'My Hero Academy',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=789e214ab93093a90bfad04e000e48dac364b64c-11042380-images-thumbs&n=13',
    author: 'Kohei Horikoshi',
    genres: ['Action', 'School', 'Comedy'],
    description: 'A young hero discovers his powers in a world full of heroes.',
    rating: 4.7,
    isCompleted: true,
  },
  {
    id: 3,
    title: 'One Piece',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=c428f98c9a19bfe9927cb69c1fa86917167bdf78-6579542-images-thumbs&n=13',
    author: 'Eiichiro Oda',
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    description: 'A crew of pirates seeks the ultimate treasure.',
    rating: 4.8,
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Attack on Titan',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=22642d4985863f98741d76a58fe89bc1ab29c697-16336042-images-thumbs&n=13', // временная картинка
    author: 'Hajime Isayama',
    genres: ['Action', 'Drama', 'Fantasy'],
    description: 'Epic battle between humans and titans in a dark world.',
    rating: 4.9,
    isCompleted: false,
  },
  {
    id: 5,
    title: 'My Hero Academy',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=789e214ab93093a90bfad04e000e48dac364b64c-11042380-images-thumbs&n=13',
    author: 'Kohei Horikoshi',
    genres: ['Action', 'School', 'Comedy'],
    description: 'A young hero discovers his powers in a world full of heroes.',
    rating: 4.7,
    isCompleted: true,
  },
  {
    id: 6,
    title: 'One Piece',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=c428f98c9a19bfe9927cb69c1fa86917167bdf78-6579542-images-thumbs&n=13',
    author: 'Eiichiro Oda',
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    description: 'A crew of pirates seeks the ultimate treasure.',
    rating: 4.8,
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Attack on Titan',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=22642d4985863f98741d76a58fe89bc1ab29c697-16336042-images-thumbs&n=13', // временная картинка
    author: 'Hajime Isayama',
    genres: ['Action', 'Drama', 'Fantasy'],
    description: 'Epic battle between humans and titans in a dark world.',
    rating: 4.9,
    isCompleted: false,
  },
  {
    id: 8,
    title: 'My Hero Academy',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=789e214ab93093a90bfad04e000e48dac364b64c-11042380-images-thumbs&n=13',
    author: 'Kohei Horikoshi',
    genres: ['Action', 'School', 'Comedy'],
    description: 'A young hero discovers his powers in a world full of heroes.',
    rating: 4.7,
    isCompleted: true,
  },
  {
    id: 9,
    title: 'One Piece',
    coverUrl:
      'https://avatars.mds.yandex.net/i?id=c428f98c9a19bfe9927cb69c1fa86917167bdf78-6579542-images-thumbs&n=13',
    author: 'Eiichiro Oda',
    genres: ['Adventure', 'Comedy', 'Fantasy'],
    description: 'A crew of pirates seeks the ultimate treasure.',
    rating: 4.8,
    isCompleted: false,
  },
];
