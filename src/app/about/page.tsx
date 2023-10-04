import Image from "next/image";

function About() {
  return (
    <div>
      <div className="w-full">
        <Image
          src="/img/about.jpg"
          height={100}
          width={100}
          alt="about"
          className="w-full"
          objectFit="cover"
          sizes="100vw"
        />
      </div>
      <div className="mt-3 block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="flex">
          <h1 className="text-2xl font-bold">About</h1>
          <p className="ml-auto text-sm text-neutral-500">
            {new Date().getFullYear()}
          </p>
        </div>
        <div className="mt-3 text-neutral-500 dark:text-neutral-400 flex gap-5">
          <div className="w-1/2 ">
            <Image
              src="/img/coffie.jpg"
              height={100}
              width={100}
              alt="coffie"
              className="w-full rounded"
              objectFit="cover"
              sizes="100vw"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Hi, I'm Rahul
            </h1>
            <p className="text-lg">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm a full stack developer with a passion for building beautiful
              and functional web applications.
            </p>
            <p className="text-lg">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm currently working on a project to build a new website for a
              local business.
            </p>
            <p className="text-lg">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm also a freelance developer, and I'm looking forward to working 
              on a project with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
