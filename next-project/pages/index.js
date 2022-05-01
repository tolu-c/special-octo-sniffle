import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function Home(props) {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("re-generating...");

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 60,
    // notFound: true
    // redirect:
  };
}
export default Home;
