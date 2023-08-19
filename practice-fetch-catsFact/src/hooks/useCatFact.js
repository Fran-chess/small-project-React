import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";


export const useCatFact = () => {
    const [fact, setFact] = useState();
  
    const refreshFact = () => {
      getRandomFact(setFact).then((newFact) => setFact(newFact));
    };
    // effect para recuperar los fact al cargar la pág.
    useEffect(refreshFact, []);
    return { fact, refreshFact };
  };