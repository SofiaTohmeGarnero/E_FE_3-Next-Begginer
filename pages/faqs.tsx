import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  faqs: any;
}

const Faqs: NextPage<Props> = ({ faqs }) => {
  return (
    <>
      <Head>
        <title>RandomIn - Preguntas Frecuentes</title>
        <meta name="description" content="Preguntas frecuentes" />
      </Head>
      <h2>Preguntas Frecuentes</h2>
      {faqs.map((faq: any) => {
        return (
          <li key={faq.id}>
            <h5>{faq.title}</h5>
            <p>{faq.description}</p>
          </li>
        );
      })}
    </>
  );
};
export default Faqs;

export const getStaticProps: GetStaticProps = async () => {
  const url =
    "https://my-json-server.typicode.com/DH-Esp-Frontend/ctd-fe3-s2-c6-integracion-terminado/db";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      faqs: data.faqs,
    },
  };
};
