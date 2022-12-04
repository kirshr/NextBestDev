import Image from "next/image";
function DeveloperCard({
  fullName,
  avatar,
  jobTitle,
  experience,
  availability,
}) {
  const variants = {
    available:
      "bg-lime-400 rounded-md px-3 py-1 text-sm text-lime-800 text-center font-semibold",
    unavailable:
      "bg-red-400 rounded-md px-3 py-1 text-sm text-red-800 text-center font-semibold",
  };
  return (
    <div className="py-10 px-4 border border-amber-300 rounded-md shadow-lg lg:w-[300px] m-10 sm:w-[calc(50%_-_0.5rem)]">
      <header className="flex flex-col items-center">
        <Image src={avatar} width={128} height={128} className="rounded-full" />
        <h2 className="text-cyan-50 font-semibold text-2xl">{fullName}</h2>
      </header>
      <dl className="mt-4">
        <dt className="text-amber-300 text-xl ">Job Title</dt>
        <dd className="text-cyan-50 ">{jobTitle}</dd>
        <dt className="text-amber-300 text-xl ">Experience</dt>
        <dd className="text-cyan-50 ">{experience} years of experience</dd>
        <dt className="text-amber-300 text-xl ">Availability</dt>
        <dd
          className={`${
            availability ? variants.available : variants.unavailable
          }`}
        >
          {availability ? "Available" : "Not Available"}
        </dd>
      </dl>
    </div>
  );
}
export default DeveloperCard;
