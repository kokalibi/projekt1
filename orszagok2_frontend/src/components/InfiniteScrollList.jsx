import React, { useState, useRef, useCallback } from 'react';

const InfiniteScrollList = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => i + 1)); // 10 elemű tömb
  const [page, setPage] = useState(1);

  // Az utolsó elem referenciája
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      // Az observer paraméterei
      const options = {
        root: null, // a viewport
        rootMargin: '0px', // plusz margó hozzáadása a root területhez
        threshold: 0.9, // akkor aktiválódik, ha az elem 50%-ban a viewportban van
      };

      // Betölti a következő oldalt
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
          setItems((prevItems) => [
            ...prevItems,
            ...Array.from({ length: 10 }, (_, i) => i + 1 + prevItems.length),
          ]);
        }
      }, options);

      if (node) observer.current.observe(node);
    },
    []
  );

  return (
    <div>
      {items.map((item, index) => {
        if (items.length === index + 1) {
          return (
            <div ref={lastItemRef} key={item} style={{ height: '100px', border: '1px solid black', backgroundColor: 'green' }}>
              Item - Utolsó {item}
            </div>
          );
        } else {
          return (
            <div key={item} style={{ height: '100px', border: '1px solid black' }}>
              Item {item}
            </div>
          );
        }
      })}
    </div>
  );
};

export default InfiniteScrollList;
