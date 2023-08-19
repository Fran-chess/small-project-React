const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};

export const getImageUrl = async (fact, setImageUrl) => {
  if (!fact) return;
  const threeFirstWords = fact.split(" ", 3).join(" ");
  const CAT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`;

  fetch(CAT_IMAGE_URL)
  .then((res) => res.json())
  .then((response) => {
    const { url } = response;
    setImageUrl(url);
  })
  .catch((error) => {
    console.error("Error fetching cat image:", error);
  });
};
