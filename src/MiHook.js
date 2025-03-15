import { useState, useEffect } from "react";

const MiHook = () => {
  //logica de estado y fetch
  const [pokemonNumero, setpokemonNumero] = useState(1);
  const [pokemonNombre, setpokemonNombre] = useState("");
  const [pokemonImagen, setpokemonImagen] = useState("");
  const [PokemonHabilidad, setPokemonHabilidad] = useState([]);
  const [pokemonCarga, setpokemonCarga] = useState(false);
  //para incrementar el id, por lo tanto me imprime el pokemon con ese id
  function increaseNumero() {
    setpokemonNumero(pokemonNumero + 1);
    console.log("valor antes del nuevo render" + pokemonNumero);
  }
  //obtengo el nombre dle pokemon llamando a la api
  useEffect(() => {
    console.log("valor al actualizar el estado:" + pokemonNumero);
    //aqui se llama al api
    //esto es un ejemplo de promesas
    //fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumero}/`)
    // .then((result) => result.json())
    //.then((data) => setpokemonNombre(data.name)) //lo puedo utlizar segun lo que necesito
    searchPokemon(pokemonNumero);
  }, [pokemonNumero]);
  //esto es con una funcion async
  let searchPokemon = async (pokemonNumero) => {
    setpokemonCarga(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumero}/`
    );
    const data = await response.json();
    setpokemonNombre(data.name);
    setpokemonImagen(data.sprites.other["official-artwork"].front_default);
    setPokemonHabilidad(data.abilities.map((abil) => abil.ability.name));

    setpokemonCarga(false);
  };

  return {
    pokemonNumero,
    pokemonNombre,
    pokemonImagen,
    pokemonCarga,
    PokemonHabilidad,
    increaseNumero,
  };
};
export default MiHook;
