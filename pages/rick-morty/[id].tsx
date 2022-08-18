import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ICharacter from "../../types/ICharacter";
import Head from "next/head";

const Character = () => {
  const router = useRouter();
  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${router.query.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [character]);

  return (
    <div>
      <Head>
        <title>RandomIn - {character?.name}</title>
        <meta name="description" content={`Información sobre ${character?.name}`} />
      </Head>
      <p>{character?.name}</p>
      <img src={character?.image} alt="avatar" />
      {character?.image && <Image src={character?.image} alt='imagen' width={300} height={300}/>}
    </div>
  );
};

/* export async function getStaticPaths() {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' }}, { params: { id: '3' }}, { params: { id: '4' }}, { params: { id: '5' } }],
      fallback: false, // can also be true or 'blocking'
    }
  } */

export default Character;
