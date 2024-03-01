import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components"
 
export const Home = () => {

  useTitle("Home");

  const products = [
    { "id" : 1001, "name" : "Sony Wh-Ch124 Bluetooth Headset", "price" : 149, "image" : "/assets/image/1001.png" },
    { "id" : 1002, "name" : "boAt Rockerz 450", "price" : 89, "image" : "/assets/image/1002.png" },
    { "id" : 1003, "name" : "JBL Tune 760NC", "price" : 179, "image" : "/assets/image/1003.png" },
    { "id" : 1004, "name" : "LogiTech H111 Wired", "price" : 129, "image" : "/assets/image/1004.png" },
    { "id" : 1005, "name" : "Apple Airpods Max Bluetooth Headset", "price" : 79, "image" : "/assets/image/1005.png" },
    { "id" : 1006, "name" : "Zebronics Zeb-Thunder Wired Dimensity", "price" : 79, "image" : "/assets/image/1006.png" }
  ];

  return (
    <main>
      <section className="products">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </section>
    </main>
  )
}
