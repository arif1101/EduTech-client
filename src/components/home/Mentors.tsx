import React from "react";
import teacher1 from "@/assets/teacher-1.jpg"
import teacher2 from "@/assets/teacher-2.jpg"

type Mentor = {
  name: string;
  role: string;
  image: string;
};

const mentors: Mentor[] = [
  { name: "Alice Johnson", role: "Frontend Developer", image: teacher1 },
  { name: "Bob Smith", role: "Backend Developer", image: teacher2 },
  { name: "Charlie Brown", role: "Full Stack Developer", image: teacher1 },
  { name: "Diana Prince", role: "UI/UX Designer", image: teacher2 },
];

const Mentors: React.FC = () => {
  return (
    <div className="mt-24 flex flex-col gap-10">
      {/* Section Header */}
      <div className="max-w-2xl text-center mx-auto flex flex-col gap-2">
        <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl">
          Meet the <span className="text-sky-500">Mentors</span>
        </h1>
        <p className="text-base text-stone-600">
          Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc
          non pellentesque ultricies. Donec pretium gravida neque et placerat.
          Aliquam erat volutpat Proin.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="flex flex-wrap justify-center gap-6 p-8 bg-[url(https://lms.factoryze.tech/demo-home-page1/dots.svg)] bg-no-repeat">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="relative w-[259.45px] h-[320px] rounded-2xl shadow-lg overflow-hidden group bg-white">
              {/* Mentor Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-50"
              />

              {/* Overlay & View Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-sky-500 text-white px-6 py-2 rounded-full shadow-lg text-sm font-semibold hover:bg-sky-600">
                  View →
                </button>
              </div>
            </div>

            {/* Mentor Name & Role */}
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-wide">{mentor.name}</h3>
              <p className="text-base font-normal tracking-wide">{mentor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
