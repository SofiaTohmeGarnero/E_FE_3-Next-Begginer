import type { GetStaticProps, NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {

  /** Usamos el BE de next 
   nunca usar SSG o SSG (se genera el pedido desde el servidor, es decir, dede el BE) con una api de next, porque es como llamar dos veces al BE
  */
  const [users, setUsers] = useState<any | null>(null);

  useEffect(() => {
    const url = "http://localhost:3000/api/randomuser";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) =>{
        console.log(e);
      });
  },[]);

  if (!users) return (<>Cargando...</>);
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
              <Image src={user.picture.thumbnail} alt="profile" width={48} height={48}/>
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

/* llamamos desde FE a una API externa
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
*/

