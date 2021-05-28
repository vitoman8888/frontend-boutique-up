import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className='page-wrapper'>
        <Header bgImage='/images/featured-2.png' />
        <main>
          <h2>About UP Boutique.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur nemo. Numquam, iste. Ducimus, saepe. Nobis recusandae
            eligendi iusto est sequi distinctio error eveniet, unde reiciendis,
            voluptates cumque quas tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur nemo. Numquam, iste. Ducimus, saepe. Nobis recusandae
            eligendi iusto est sequi distinctio error eveniet, unde reiciendis,
            voluptates cumque quas tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            consequatur nemo. Numquam, iste. Ducimus, saepe. Nobis recusandae
            eligendi iusto est sequi distinctio error eveniet, unde reiciendis,
            voluptates cumque quas tempore.
          </p>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
