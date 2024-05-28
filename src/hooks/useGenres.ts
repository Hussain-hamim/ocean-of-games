// import { useQuery } from "@tanstack/react-query";
// import genres from "../data/genres";
// import apiClient from "../services/api-client";
// import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () =>
//   useQuery({
//     queryKey: ["genres"],
//     queryFn: () => {
//       apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);
//     },
//     staleTime: 24 * 60 * 60 * 1000, //24h
//     // initialData: { count: genres.length, results: genres },
//   });

const useGenres = () => ({ data: genres, isLoading: false, error: false });

export default useGenres;
