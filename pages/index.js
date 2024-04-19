import Image from "next/image";
import { Inter } from "next/font/google";
import Ecommerce from "./ecommerce";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Ecommerce/>
    </>
  );
}
