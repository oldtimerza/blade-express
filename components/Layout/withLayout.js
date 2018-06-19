import Layout from "../Layout";

export function withLayout(components) {
  return props => {
    return <Layout>{components}</Layout>;
  };
}
