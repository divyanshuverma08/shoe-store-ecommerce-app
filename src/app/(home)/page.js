import Hero from "@/components/hero/hero";
import styles from "./homePage.module.css";
import Featured from "@/components/featured/featured";
import Categories from "@/components/categories/categories";
import Reviews from "@/components/reviews/reviews";

export const revalidate = 43200

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <Featured />
      <Categories />
      <Reviews />
    </div>
  );
}
