import { useQuery, useQueryClient } from "@tanstack/react-query";

import { filmsUpcomingQuery } from "@/lib/api";

export const useFilmsUpcoming = () => {
  const queryClient = useQueryClient();

  const {
    data: filmList,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getFilmsUpcoming"],
    queryFn: () => filmsUpcomingQuery(),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

  const updateFilmsUpcoming= () => {
    return queryClient.invalidateQueries({ queryKey: ["getFilmsUpcoming"] });
  };

  return {
    filmList,
    updateFilmsUpcoming,
    isSuccess,
    isLoading,
    isError,
  };
};
