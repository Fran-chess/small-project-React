import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";


function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };
  return (
    <>
      <header className="text-white text-center">
        <h1 className="text-3xl uppercase font-bold">Cat Fact</h1>
        {fact && <p className="text-2xl  mt-2 ">{fact}</p>}
      </header>
      <main className="flex flex-col place-items-center mt-3">
        <section className="text-center">
          {imageUrl && (
            <img
              className="h-96 border border-white rounded-md"
              src={imageUrl}
              alt={`Image extracted using the first three words for ${fact}`}
            />
          )}
          <button
            onClick={handleClick}
            className="text-white rounded-md border border-white mt-3 p-1 text-xs font-bold hover:text-indigo-700 hover:border-indigo-700"
          >
            Get new Fact
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
