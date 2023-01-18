import { Grid, GridItem } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import CategoryCard from "../../../components/CategoryCard";
import { categoryList } from "../../../utils/data";

const CategorySection = ({ mt = "60px" }) => {
  return (
    <Grid
      templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
      columnGap={["10px", "10px", "10px", "30px"]}
      rowGap={["100px"]}
      w="100%"
      mt={mt}
    >
      {categoryList.map((item) => (
        <GridItem colSpan={1} key={nanoid()}>
          <CategoryCard {...item} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CategorySection;
