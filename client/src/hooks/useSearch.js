import {
  useEffect,
  useState,
} from "react";

import api from "../api/axios";

import useDebounce from "./useDebounce";

const useSearch = () => {
  const [search, setSearch] =
    useState("");

  const [results, setResults] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const debouncedSearch =
    useDebounce(
      search,
      500
    );

  useEffect(() => {
    const fetchResults =
      async () => {
        try {
          if (
            !debouncedSearch.trim()
          ) {
            setResults([]);
            return;
          }

          setLoading(true);

          const res =
            await api.get(
              `/search?q=${debouncedSearch}`
            );

          setResults(
            res.data.data
          );
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchResults();
  }, [debouncedSearch]);

  return {
    search,
    setSearch,
    results,
    loading,
  };
};

export default useSearch;