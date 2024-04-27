import platforms from "../data/platforms";
// import useData from "./useData";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platforms, error: null });

export default usePlatforms;
