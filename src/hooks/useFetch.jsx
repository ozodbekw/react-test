import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      const req = await fetch(url);
      try {
        if (!req.ok) {
          throw new Error("Something went wrong!");
        }
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setIsPending(false);
      }
      const data = await req.json();
      setData(data);
    };
    getData();
  }, [url]);

  return { data, error, isPending };
}
