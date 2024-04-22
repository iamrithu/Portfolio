import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface props {
  url: string;
  title: string;
}

const NavLink = ({ props }: { props: props }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-2 ${
        pathName === props.url && "bg-black text-white"
      }`}
      href={props.url}>
      {props.title}
    </Link>
  );
};

export default NavLink;
