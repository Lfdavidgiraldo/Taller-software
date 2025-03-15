import MiHook from "./MiHook";
import "./App.css";
const App = () => {
  const {
    pokemonNumero,
    pokemonNombre,
    pokemonImagen,
    pokemonCarga,
    PokemonHabilidad,
    increaseNumero,
  } = MiHook();
  return (
    <>
       <h1>api de Pokemon</h1>
      <div className="stilo-tarjeta">
     
        <h2>
          {pokemonNumero}: {pokemonNombre}
        </h2>

        {pokemonImagen && (
          <img
            src={pokemonImagen}
            alt={pokemonNombre}
            width="200"
            className="imagen-pokemon"
          />
        )}
      </div>
      
      <h3>Habilidades</h3>
      
        {PokemonHabilidad.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      
<br/>
      <button
        onClick={increaseNumero}
        disabled={pokemonCarga}
        className="stilo-button"
      >
        {pokemonCarga ? "Cargando..." : "Siguiente pokemon"}
      </button>
    </>
  );
};
export default App;
