import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <link href={"/"} prefetch={false}>
        Hello
      </link>
      <link href={"/"} prefetch={false}>
        Henry
      </link>
    </nav>
  );
}
