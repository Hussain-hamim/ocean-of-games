import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { Platform } from "./useGames";
import { FetchResponse } from "./useData";
// import useData from "./useData";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// const usePlatforms = () => ({ data: platforms, error: null });

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => {
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
