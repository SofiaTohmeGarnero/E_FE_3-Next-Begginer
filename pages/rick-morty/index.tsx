import type { GetStaticProps, NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ICharacter from "../../types/ICharacter";

interface Props {
  characters: ICharacter[];
}
const RickMorty: NextPage<Props> = ({ characters }) => {
  return (
    <div>
      <Head>
        <title>RandomIn - Rick and Morty Characters</title>
        <meta
          name="description"
          content="Listado de personajes de Rick and Morty"
        />
      </Head>
      <h2>Rick and Morty Characters</h2>
      <ul>
        {characters?.map((character: ICharacter) => {
          return (
            <li key={character.id}>
              <Link href={`/rick-morty/${character.id}`}>{character.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      characters: data.results,
    },
  };
};

export default RickMorty;
