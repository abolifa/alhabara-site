"use client";
import dynamic from "next/dynamic";

const NoSSR = dynamic(async () => (props: any) => props.children, {
  ssr: false,
});

export default NoSSR;
