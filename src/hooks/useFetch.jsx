import { useEffect, useState } from 'react';

const cache = {}; 

const useFetch = (url) => {
  const [data, setData] = useState(cache[url] || null); 
  const [loading, setLoading] = useState(!cache[url]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (cache[url]) {
        setData(cache[url]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if (isMounted) {
          cache[url] = result; // Almacena los datos en caché
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Evita actualizar el estado si el componente se desmonta
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;