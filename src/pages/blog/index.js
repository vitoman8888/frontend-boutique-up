import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostList from '../../components/PostList';
import { getPostList } from '../../utils/posts';

const Blog = ({ postList }) => {
    return (
      <>
        <Head>
          <title>Blog // UP Boutique</title>
        </Head>
        <div className='page-wrapper'>
          <Header bgImage={'/images/featured-1.png'} />
          <main>
            <PostList posts={postList} />
          </main>
          <Footer />
        </div>
      </>
    );
  };

export const getStaticProps = () => {
    const postList = getPostList();
    return {
      props: {
        postList,
      },
    };
  };

export default Blog;