import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href={"/"} prefetch={false}>
        Hello
      </Link>
      <Link href={"/henry"} prefetch={false}>
        Henry
      </Link>
    </nav>
  );
}
