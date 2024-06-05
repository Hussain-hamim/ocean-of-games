import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const one = data?.results[0];
  return one ? (
    <video src={one.data[480]} poster={one.preview} controls />
  ) : null;
};

export default GameTrailer;
