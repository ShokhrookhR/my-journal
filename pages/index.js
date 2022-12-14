import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '../components/Layout/MainLayout';
import { Post } from '../components/Post/Post';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SH-Journal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="grid gap-5">
          {[...new Array(3)].map((post, i) => (
            <Post key={i} />
          ))}
        </div>
      </MainLayout>
    </div>
  );
}
