import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        About Us
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-2/3 px-4 py-2">
          <div className="bg-neutral-200 rounded-md p-6 text-md border border-neutral-900">
            <p>
              PSDM (Protection Services for Displacement and Migration) is a
              non-governmental organization dedicated to providing essential
              protection services for forcibly displaced individuals and
              migrants across Somalia and the East and Horn of Africa. We
              focus on community-driven initiatives, child protection, legal
              advocacy, and responses to gender-based violence, with a mission
              to promote self-reliance and dignity for all.
            </p>
            <p className="mt-4">
              Our work involves collaborating with local authorities,
              humanitarian actors, and affected populations to address the
              challenges posed by forced displacement and climate-induced
              migration, while advocating for policies that safeguard the
              rights and well-being of vulnerable populations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
