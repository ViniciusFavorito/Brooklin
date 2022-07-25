import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../constants";
import { getProducts } from "../../services/products";
import { RootState } from "../../store";
import {
  IProduct,
  setProducts,
} from "../../store/features/products/productsSlice";
import { DivSelect, SelectCategories } from "./styles";

interface ICategories {
  name: string;
  _id: string;
}

export function SelectCategory() {
  const dispatch = useDispatch();
  return (
    <DivSelect>
      <SelectCategories
        placeholder="teste"
        onChange={(event) =>
          getProducts({ categoryId: event.target.value }).then(
            (res: IProduct[]) => {
              dispatch(setProducts(res));
            }
          )
        }
      >
        <option value=""></option>
        {categories.map((categories: ICategories) => (
          <option key={categories._id} value={categories._id}>
            {categories.name}
          </option>
        ))}
      </SelectCategories>
    </DivSelect>
  );
}
