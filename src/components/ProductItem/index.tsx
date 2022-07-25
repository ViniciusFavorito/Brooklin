import { CgShoppingBag } from "react-icons/cg";
import { IProduct } from "../../store/features/products/productsSlice";

import {
  ButtonBuy,
  DivBuyIcon,
  DivBuyWrite,
  DivCard,
  DivDescription,
  DivImgProduct,
  DivNamePriceProduct,
  DivNameProduct,
  ImgProduct,
} from "./styles";

export const ProductsItem = (product: IProduct) => {
  const { name, shortDescription } = product;
  return (
    <DivCard>
      <DivImgProduct>
        <ImgProduct
          src={product.images[0].asset.url}
          alt={product.images[0].alt}
        ></ImgProduct>
      </DivImgProduct>
      <DivNamePriceProduct>
        <DivNameProduct>{name}</DivNameProduct>
      </DivNamePriceProduct>
      <DivDescription>{shortDescription}</DivDescription>
    </DivCard>
  );
};
