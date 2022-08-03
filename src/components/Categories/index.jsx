import styles from "./Categories.module.css";
import categoriesData from "./categories.json";
import { useState } from "react";
import CategoryItem from "./CategoryItem";

function Categories() {
  const [categories, setCategories] = useState([...categoriesData]);

  const mapCategories = (category) => (
    <CategoryItem key={category.id} category={category} />
  );

  return <ul className={styles.container}>{categories.map(mapCategories)}</ul>;
}

export default Categories;
