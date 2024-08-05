import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
 
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
   const { data,isLoading, error,} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data?.results.map((genres) => (
        <ListItem key={genres.id} paddingY={"6px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genres.image_background)}
            />
            <Button 
             fontWeight={genres.id===selectedGenre?.id ? "bold":"normal"}
              onClick={() => onSelectGenre(genres)}
              fontSize={"large"}
              variant={"link"}
            >
              {genres.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
