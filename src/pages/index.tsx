import Head from "next/head";
import Image from "next/image";
import girlCoding from "../../public/images/avatar.svg";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <Image src={girlCoding} alt="Girl coding" />
      </main>
    </>
  );
}

export default Home;
