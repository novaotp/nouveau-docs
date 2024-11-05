import { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";

export default function SearchBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <div className={styles.searchButtonContainer}>
      <button
        onClick={() => setIsVisible((old) => !old)}
        className={styles.searchButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </button>
      {isVisible && <SearchView />}
    </div>
  );
}

function SearchView() {
  return <div></div>;
}
