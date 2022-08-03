import styles from "./Categories.module.css";

function CategoryItem({
  category: { description, faClass, iconColor, imageSrc }
}) {
  const iconStyle = { color: iconColor };

  return (
    <li>
      {/* <i style={iconStyle} className={faClass}></i> */}
      <div className={styles.imageWrapper}>
        <img className={styles.categoryImage} src={imageSrc} alt="" />
      </div>
      {description}
    </li>
  );
}

export default CategoryItem;
