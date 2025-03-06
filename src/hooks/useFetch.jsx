import { useEffect, useReducer, useState } from "react";

const initialState = {
  data: null,
  isPending: false,
  error: null,
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DATA":
      return { ...state, data: payload, isPending: false, error: null };
    case "ISPENDING":
      return { ...state, isPending: true };
    case "ERROR":
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};

export function useFetch(url) {
  //   const [data, setData] = useState(null);
  //   const [isPending, setIsPending] = useState(false);
  //   const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(changeState, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "ISPENDING", payload: true });
      try {
        const req = await fetch(url);
        console.log(req);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        dispatch({ type: "DATA", payload: data });
      } catch (err) {
        dispatch({ type: "ERROR", payload: err.message });
        console.log(err.message);
      } finally {
        dispatch({ type: "ISPENDING", payload: false });
      }
    };
    fetchData();
  }, [url]);

  return state;
}
