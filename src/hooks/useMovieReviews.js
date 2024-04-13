import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMovieReviews = ({ id }) => {
  return useQuery({
    queryKey: ["movie-reviews", { id }],
    queryFn: () => {
      return api.get(`/movie/${id}/reviews`);
    },
    select: (result) => result.data,
  });
};
