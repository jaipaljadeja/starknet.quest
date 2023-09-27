import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

type QuestCategoryProps = {
  category: QuestCategory;
};

const QuestCategory: FunctionComponent<QuestCategoryProps> = ({ category }) => {
  return (
    <Link href={`/categories/${category.name}`}>
      <div className={styles.questCategory}>
        <div className={styles.categoryInfos}>
          <h2 className="text-gray-200">{category.name} Quest</h2>
          <p className="text-gray-200">
            {category.questNumber} quest{category.questNumber > 1 ? "s" : null}
          </p>
        </div>
        <img src={category.img} />
      </div>
    </Link>
  );
};

export default QuestCategory;