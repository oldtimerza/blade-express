import Layout from "../Layout";

const withLayout = (components, banner) => props => {
  return (
    <Layout {...props} banner={banner}>
      {components}
    </Layout>
  );
};

export { withLayout };
