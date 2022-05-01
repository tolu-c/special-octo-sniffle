import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

export default function ProductDetailPage(props) {
  // console.log(props);
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data
}

export async function getStaticProps(context) {
  const { params } = context;
  // console.log(context);

  const productId = params.id;
  const data = await getData()

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData()

  const ids = data.products.map((product) => product.id)
  // console.log(ids);
  const pathWithParams = ids.map((id) => ({ params: { id: id } }))
  // console.log(pathWithParams);

  return {
    paths: pathWithParams,
    fallback: false,
  };
}
