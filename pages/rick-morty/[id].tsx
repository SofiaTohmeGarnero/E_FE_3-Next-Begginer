import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ICharacter from "../../types/ICharacter";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

/* Usamos getStaticPaths y getStaticProps para renderizar paginas dinámicas del lado del servidor (SSG)*/
export const getStaticPaths: GetStaticPaths = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const data = await response.json();
  const characters: ICharacter[] = await data.results;

  
  const paths = characters.map((character) => ({
    params: { id: String(character.id) },
  }));
  return {
    paths, // [{ params: { id: '1' } }, { params: { id: '2' }}],
    fallback: false // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async(context) =>{
  const {params} = context;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${params?.id}`);
  const data: ICharacter = await res.json();
  console.log(data);
  return {
    props: {
      character: data
    },
    revalidate: 60 
    /* tecnología ISR (incremental static regeneration)
      permite que las paginas generadas estaticamente en tiempo de compilacion puedan ser regeneradas a demanda cada cierto tiempo */
 
  }
}
export interface Props {
  character:ICharacter
}
const Character:NextPage<Props> = ({character}) => {
  /* Usamos useEffect para renderizar rutas (en este caso dinámicas) del lado del cliente *

  const router = useRouter();
  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${router.query.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [character]);
 */
  return (
    <div>
      <Head>
        <title>RandomIn - {character?.name}</title>
        <meta
          name="description"
          content={`Información sobre ${character?.name}`}
        />
      </Head>
      <p>{character?.name}</p>
      <img src={character?.image} alt="avatar" />
      {character?.image && (
        <Image src={character?.image} alt="imagen" width={300} height={300} />
      )}
    </div>
  );
};

export default Character;
