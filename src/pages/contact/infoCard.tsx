import capitalize from "../../utils/capitalize";

export default function InfoCard({
  personalInfo,
}: {
  personalInfo: [string, string][];
}) {
  const brackets: string[] = ["{", "}"];
  return (
    <div className="flex flex-col sm:ml-10 shadow-xl w-full bg-white  rounded-xl transition-grow">
      <div className="flex flex-row p-3 justify-start">
        <div className="rounded-full shadow w-4 h-4 mr-2 bg-red-400"></div>
        <div className="rounded-full shadow w-4 h-4 mr-2 bg-orange-400"></div>
        <div className="rounded-full shadow w-4 h-4 bg-green-400"></div>
      </div>
      <hr className="bg-black mt-1" />
      <div className="text-cyan-700 p-6 font-bold">
        <text>{brackets[0]}</text>
        <ul className="ml-4">
          {personalInfo.map((value, key) => (
            <li key={key} className="mb-2">
              {`"${capitalize(value[0])}"`}: &emsp;
              {value[1].includes("http") ? (
                <a className="hover:underline" target="_blank" href={value[1]}>
                  "{value[1]}"
                </a>
              ) : (
                `"${value[1]}"`
              )}
            </li>
          ))}
        </ul>
        <text>{brackets[1]}</text>
      </div>
    </div>
  );
}
