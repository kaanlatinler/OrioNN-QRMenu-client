"use client";
import CategoryCard from "@/components/menu/CategoryCard";
import Footer from "@/components/menu/shared/Footer";
import Header from "@/components/menu/shared/Header";
import Loading from "@/components/menu/shared/Loading";
import SubHeader from "@/components/menu/SubHeader";
import { useEffect, useState } from "react";
import { getActiveCategories } from "@/services/categoryService";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t, currentLanguage } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await getActiveCategories(currentLanguage);
        if (response.success) {
          setCategories(response.data.categories);
        } else {
          setError(response.message || t("error"));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [currentLanguage, t]);

  return (
    <div>
      <main className="main-content">
        <Header />

        <div className="container content-inner pb-0">
          {" "}
          {/* container-fluid yerine container */}
          <div className="row gx-3 gy-2 justify-content-center">
            {" "}
            {/* gx-3 yatay gap, gy-2 dikey gap */}
            <SubHeader title={t("categories").toUpperCase()} />
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
            ) : categories.length === 0 ? (
              <div className="alert alert-warning text-center my-5">
                {t("noDataFound")}
              </div>
            ) : (
              categories.map((category, index) => (
                <div className="col-6" key={category.id || index}>
                  {" "}
                  {/* col-5 ile biraz daha küçük, p-0 padding sıfır */}
                  <CategoryCard
                    image={category.image}
                    title={category.title}
                    description={category.description}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
