import { DivBody, DivContent } from "../styles/BodyStyled";
import { useEffect, useState } from "react";
import { ProductsItem } from "../components/ProductItem";
import { Navbar } from "../components/Navbar";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  IProduct,
  setProducts,
} from "../store/features/products/productsSlice";
import { SelectCategory } from "../components/SelectCategory";
import { getProducts } from "../services/products";
import { DivSkeleton } from "../components/ProductItem/styles";

export function Home() {
  const products = useSelector((state: RootState) => state.products.data);
  const dispatch = useDispatch();
  console.log({ products });
  useEffect(() => {
    getProducts().then((res: IProduct[]) => {
      dispatch(setProducts(res));
    });
  }, []);
  return (
    <>
      <Navbar />
      <SelectCategory />
      <DivBody>
        <DivContent>
          {products.length > 0 ? (
            <>
              {products.map((product: IProduct) => (
                <ProductsItem key={product.id} {...product} />
              ))}
            </>
          ) : (
            <>
              {Array(8)
                .fill(1)
                .map((key: number, index: number) => (
                  <DivSkeleton key={key + index}>
                    <SkeletonTheme
                      width={"180px"}
                      baseColor="#c4c1c1"
                      highlightColor="#9a9696"
                    >
                      <Skeleton width="100%" height={150} style={{}} />
                      <Skeleton
                        width="100%"
                        height={38}
                        style={{ marginTop: "12px" }}
                      />
                      <Skeleton
                        width="100%"
                        height={25}
                        style={{ marginTop: "8px" }}
                      />
                      <Skeleton
                        width="100%"
                        height={31}
                        style={{ marginTop: "12px" }}
                      />
                    </SkeletonTheme>
                  </DivSkeleton>
                ))}
            </>
          )}
        </DivContent>
      </DivBody>
      <Footer />
    </>
  );
}
