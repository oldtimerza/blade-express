import Layout from "../Layout";

export function withLayout(components, banner) {
  return props => {
    return (
      <Layout {...props} banner={banner}>
        {components}
      </Layout>
    );
  };
}
