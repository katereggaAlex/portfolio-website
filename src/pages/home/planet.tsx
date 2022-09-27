import "../../styles/planet.css";

export default function Planet() {
  return (
    <div className="p-6 flex flex-col justify-center items-center flex-grow">
      <div className="">
        <img
          className="rounded-full transition-grow h-40 w-40"
          src="../../../public/images/profile.jpeg"
        />
      </div>
    </div>
  );
}
