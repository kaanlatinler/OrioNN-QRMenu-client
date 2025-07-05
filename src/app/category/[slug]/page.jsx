"use client";

import ProductCard from "@/components/menu/ProductCard";
import Footer from "@/components/menu/shared/Footer";
import Header from "@/components/menu/shared/Header";
import Loading from "@/components/menu/shared/Loading";
import SubHeader from "@/components/menu/SubHeader";
import { useEffect, useState, use } from "react";
import { getCategoryByTitle } from "@/services/categoryService";

export default function Category({ params }) {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Unwrap params using React.use() for Next.js 15 compatibility
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const response = await getCategoryByTitle(slug);
        if (response.success) {
          setCategory(response.data);
          setProducts(response.data.Products || []);
        } else {
          setError(response.message || "Kategori verisi alınamadı");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCategoryProducts();
  }, [slug]);

  return (
    <main className="main-content">
      <Header />
      <div className="container content-inner pb-0">
        <div className="row gx-3 gy-2 justify-content-center">
          <SubHeader title={category?.title || slug} />
          <hr
            className="text-primary w-75 mx-auto"
            style={{ height: "3px", opacity: 1 }}
          />
          {loading ? (
            <div className="text-center my-5">
              <Loading />
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center my-5">{error}</div>
          ) : products.length === 0 ? (
            <div className="alert alert-warning text-center my-5">
              Bu kategoride ürün bulunamadı.
            </div>
          ) : (
            products.map((product) => (
              <div className="col-6" key={product.id}>
                <ProductCard
                  image={
                    product.image || "/assets/images/categories/karisik.jpg"
                  }
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  id={product.id}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
