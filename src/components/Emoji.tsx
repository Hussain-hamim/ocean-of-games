import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  //index signature
  const emojiMap: { [key: number]: object } = {
    3: { children: "🦆", alt: "meh" },
    4: { children: "👍", alt: "recommended" },
    5: { children: "🎯", alt: "exceptional" },
  };

  return <Text {...emojiMap[rating]} opacity="0.8" marginTop={1} />;
};

export default Emoji;
