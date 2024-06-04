import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Finly</h1>
      <Image
        src="/finly.png"
        alt="Finly"
        width={500}
        height={500}
      />
    </div>
  );
}
