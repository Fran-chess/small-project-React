import { useEffect, useState } from "react";
import { getImageUrl } from "../services/facts";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({fact}) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    getImageUrl(fact, setImageUrl);
  }, [fact]);
  return { imageUrl: imageUrl ? `${CAT_PREFIX_IMAGE_URL}${imageUrl}` : "" };

}
