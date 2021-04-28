import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  if (!category) {
    throw TypeError("The category parameter must be a non-empty string.");
  }

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      // setTimeout(() => {
      setState({
        data: imgs,
        loading: false,
      });
      // }, 3 * 1000);
    });
  }, []);

  return state;
};
