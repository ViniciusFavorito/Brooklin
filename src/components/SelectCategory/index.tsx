import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../constants";
import { getProducts } from "../../services/products";
import {
  IProduct,
  setProducts,
} from "../../store/features/products/productsSlice";
import { DivSelect, OptionCategories, SelectCategories } from "./styles";

interface ICategories {
  name: string;
  _id: string;
}

export function SelectCategory() {
  const dispatch = useDispatch();
  return (
    <DivSelect>
      <SelectCategories
        onChange={(event) =>
          getProducts({ categoryId: event.target.value }).then(
            (res: IProduct[]) => {
              dispatch(setProducts(res));
            }
          )
        }
      >
        <OptionCategories value="">Todos as categorias</OptionCategories>
        {categories.map((categories: ICategories) => (
          <OptionCategories key={categories._id} value={categories._id}>
            {categories.name}
          </OptionCategories>
        ))}
      </SelectCategories>
    </DivSelect>
  );
}
