import React from "react";

function Home() {
  return (
    <div>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return { props };
}
export default Home;
