import { useQuery } from '@tanstack/react-query';
import { getMangaList } from '../api/getMangaList';

export default function useMangaList() {
  return useQuery({
    queryKey: ['mangaList'],
    queryFn: getMangaList,
  });
}
