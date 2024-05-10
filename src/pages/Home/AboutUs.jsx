import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl mt-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="rounded-lg shadow-2xl w-3/4" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl right-5 -bottom-10 absolute border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="font-bold text-red-600 text-2xl">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-orange-500 text-white mt-8">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
