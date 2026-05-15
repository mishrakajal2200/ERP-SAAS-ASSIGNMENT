// src/hooks/useFetch.js

import { useState, useEffect } from "react";

const useFetch = (apiCall) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCall()
      .then((res) => setData(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};

export default useFetch;