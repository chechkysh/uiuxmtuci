import { useQuery, useQueryClient } from "@tanstack/react-query";

import { filmsTopRatedQuery } from "@/lib/api";

export const useFilmsTopRated = ( pageSize: string) => {
  const queryClient = useQueryClient();

  const {
    data: filmList,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getFilmsTopRated", pageSize],
    queryFn: () => filmsTopRatedQuery(pageSize),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

  const updateFilmsTopRated= () => {
    return queryClient.invalidateQueries({ queryKey: ["getFilmsTopRated"] });
  };

  return {
    filmList,
    updateFilmsTopRated,
    isSuccess,
    isLoading,
    isError,
  };
};
