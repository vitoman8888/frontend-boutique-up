import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckp8ru2hwa3vs01z85bn05tpj/master'
);

export const getProductList = async () => {
    const { products } = await graphcms.request(
        `{
            products(orderBy: createdAt_DESC) {
            productName
            price
            createdAt
            id
            slug
            productImage {
                id
                fileName
                url
                height
                width
                }
            }
        }`
    );

    return products;
};

export const getProductSlugs = async () => {
    const { products } = await graphcms.request(
        `{
            products {
            id
            slug
            }
        }`
    );
  
    return products.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    });
};

export const getProductData = async (productSlug) => {
    const { product } = await graphcms.request(
      `query ProductPageQuery($productSlug: String!){
        product(where: {slug: $productSlug}) {
          productName
          price
          id
          descriptionRich {
            html
          }
          slug
          productImage {
            id
            fileName
            url
            height
            width
          }
        }
      }`,
      {
        productSlug,
      }
    );
  
    return product;
};