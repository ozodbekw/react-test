import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch(url);
      const data = await req.json();
      setData(data);
    };
    getData();
  }, [url]);

  return { data, error, isPending };
}
