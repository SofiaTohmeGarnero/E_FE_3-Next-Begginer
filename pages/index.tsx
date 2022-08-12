import type { GetStaticProps, NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ICharacter from "../types/ICharacter";

interface Props {
  users: any;
}

const Home: NextPage<Props> = ({ users }) => {
  console.log(users);
  return (
    <main className={styles.container}>
      <Head>
        <title>RandomIn</title>
        <meta name="description" content="Listado de usuarios" />
      </Head>
      <h1>
        Random<span>In</span>
      </h1>
      <p>
        Aqui podrás encontrar los últimos usuarios que se han unido a la red
      </p>
      <ul>
        {users.map((user: any) => {
          return (
            <li key={`${user.id.value}-${user.login.username}`}>
              <img src={user.picture.thumbnail} alt="profile" />
              {/* <Image src={user.picture.thumbnail} alt="profile" width={100} height={100}/> */}
              <span>
                {user.name.first} {user.name.first}
              </span>
              <span>{user.login.username}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "https://randomuser.me/api/?results=10";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      users: data.results,
    },
  };
};

/* interface Props {
  characters: ICharacter[];
}
const Home: NextPage<Props> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters?.map((character: ICharacter) => {
          return <li key={character.id}><Link href={`/character/${character.id}`}>{character.name}</Link></li>;
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
} 

export default Home;
*/
