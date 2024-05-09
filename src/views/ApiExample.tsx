import { useEffect, useState } from "react";
import { myQuery } from "../components/functions/appClient";

interface Character {
  name: string,
  id: number,
  species: string
}

interface Error {
  message: string,

}

function ApiExample() {
  const [character, setCharacter] = useState<number>();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [characterData, setCharacterData] = useState<Character | null>(null);

  // funcion que se ejecute en cualquier momento del programa, por eso asyn
  const searchPersona = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();// Esto de aqui es porque al hacer un evento de submit en un form, te refresca la pagina, esto es para que no pase eso, tambien pueden usar inputs sin forms, pero no esta cool
    setLoading(true);
    try {
      // fetch para la info
      const res = await myQuery.get(`/${character}`);
      //Como esta dentro de un try, si no agarra aqui, nos mandara directamente al error
      setSuccess(true);
      setError(null);
      // Asignamos mi mi respuesta a mi valor, en especifico, si yo imprimo mi componente ahorita, lo vamos a ver vacio, para eso ocupariamos usar un useffect component
      setCharacterData(res.data);
    } catch (e) {
      setError(e as Error);
      console.error(e)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (success) {
      console.log(characterData);
    }
  }, [characterData])

  // Cuando succes pasa a verdadero, carga esto, y error, y loading
  if (success) {
    return (
      <div className="content">
        <h1>{characterData?.id}</h1>
        <h2>{characterData?.name}</h2>
        <h3>{characterData?.species}</h3>
      </div>
    )
  }
  if (loading) {
    return <div>Cargando...</div>
  }
  if (error) {
    return (
      <>
        <div className="content">
          <header>
            {error.message}
          </header>
        </div>
      </>
    )
  }


  // Esto se carga primero ya que mis demas componentes arriba estan asignados de tal manera que no cargaran
  return (
    <>
      <form id="characterForm" onSubmit={(e) => searchPersona(e)}>
        <label htmlFor="characterInput">
          Escibe el personaje de Rick & Morty que quieras buscar
        </label>
        <input
          id="characterInput"
          required
          placeholder="Ejemplo: 200"
          onChange={(e) => setCharacter(Number(e.target.value))}
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}

export default ApiExample;