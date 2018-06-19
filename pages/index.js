import Link from "next/link";

import Layout, { withLayout } from "../components/Layout";

const Index = () => <p>Hello Next.js</p>;

export default withLayout(<Index />);
