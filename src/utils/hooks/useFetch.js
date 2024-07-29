import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  }, [url]);

  return { data, loading };
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cand facem call-uri asincrone, exista o posibilitate ca componenta care face call-ul sa fie unmounted (adica scoasa de pe ecran) inainte de a primi raspunsul
    // Am declarat `isMounted` pentru a verifica ca componenta nu este unmounted inainte de a face setari in state
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function care se va rula cand componenta este unmounted
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

const  useFetchDataIPhone = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch(url);
              const result = await response.json();
              setData(result);
          } catch (error) {
              console.error('Error fetching data:', error);
              setData([]);
          } finally {
              setLoading(false);
          }
      }

      fetchData();
  }, [url]);

  return { data, loading };
}

export { useFetch, useFetchData, useFetchDataIPhone }