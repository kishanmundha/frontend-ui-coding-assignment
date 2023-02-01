import { data } from '@app/data/data';

export const AboutUsSection = () => {
  return (
    <section id="about" className="container-md mx-auto mt-40">
      <div className="flex items-center gap-8">
        <div className="flex-3">
          <img src="/images/items/image3.png" alt="" />
        </div>
        <div className="flex flex-4 flex-col gap-8">
          <h3 className="text-2xl font-medium text-center">About</h3>
          <div className="flex flex-col gap-4 text-gray-500">
            {data.about.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <a className="text-gray-500 hover:underline" href="/#">
            View more →
          </a>
        </div>
      </div>
    </section>
  );
};
