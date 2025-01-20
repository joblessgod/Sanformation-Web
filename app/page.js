import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Hello, Boss!</h1>
      {/* <iframe
        className="w-full rounded-sm"
        width="560" height="315"
        src="https://www.youtube.com/embed/VKhfXxQp4nk?si=WVseoY6k4wASS6IC"
        title="LIVE Code Editor | YouTube"
        allowFullScreen
      ></iframe> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VKhfXxQp4nk?si=hkTc-a2YW894UFbP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
}

