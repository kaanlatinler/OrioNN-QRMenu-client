"use client";

import ProductCard from "@/components/menu/ProductCard";
import Footer from "@/components/menu/shared/Footer";
import Header from "@/components/menu/shared/Header";
import Loading from "@/components/menu/shared/Loading";
import SubHeader from "@/components/menu/SubHeader";
import { useEffect, useState, use } from "react";
import { getCategoryByTitle } from "@/services/categoryService";
import { useLanguage } from "@/contexts/LanguageContext";
import { getFriendlyErrorMessage } from "@/utils/errorMessages";
import Head from "next/head";

export default function Category({ params }) {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentLanguage, t } = useLanguage();

  // Unwrap params using React.use() for Next.js 15 compatibility
  const unwrappedParams = use(params);
  const slug = decodeURIComponent(unwrappedParams.slug);

  useEffect(() => {
    document.title = `OrioNN QR Menu — ${t("category")}`;
  }, [t]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const response = await getCategoryByTitle(slug, currentLanguage);
        if (response.success) {
          setCategory(response.data);
          const activeProducts =
            response.data.Products?.filter((product) => product.isActive) || [];
          setProducts(activeProducts);
        } else {
          setError(
            response.message ||
              getFriendlyErrorMessage({ message: "notFound" }, currentLanguage)
          );
        }
      } catch (err) {
        setError(getFriendlyErrorMessage(err, currentLanguage));
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchCategoryProducts();
  }, [slug, currentLanguage]);

  return (
    <>
      <Head>
        <title>{`OrioNN QR Menu — ${t("category")}`}</title>
        <meta name="description" content={t("categorySeoDescription")} />
        <meta name="keywords" content="QR Menu, Category, OrioNN, Restaurant" />
        <meta
          property="og:title"
          content={`OrioNN QR Menu — ${t("category")}`}
        />
        <meta property="og:description" content={t("categorySeoDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OrioNN QR Menu" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
                <br />
                <small>Kategori: {category?.title}</small>
                <br />
                <small>
                  Toplam ürün sayısı: {category?.Products?.length || 0}
                </small>
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
    </>
  );
}
