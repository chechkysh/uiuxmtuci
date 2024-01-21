import { useQuery, useQueryClient } from "@tanstack/react-query";

import { filmsPopularQuery } from "@/lib/api";

export const useFilmsPopular = (currentPage: string, pageSize: string) => {
  const queryClient = useQueryClient();

  const {
    data: filmList,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getFilmsPopular", currentPage, pageSize],
    queryFn: () => filmsPopularQuery(currentPage, pageSize),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

  const updateFilmsPopular= () => {
    return queryClient.invalidateQueries({ queryKey: ["getFilmsPopular"] });
  };

  return {
    filmList,
    updateFilmsPopular,
    isSuccess,
    isLoading,
    isError,
  };
};
