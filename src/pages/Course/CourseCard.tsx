import { File, FileArchive, Network, Timer, TimerIcon, User } from 'lucide-react';
import { Link } from 'react-router';

import thumbnail from "@/assets/teacher-1.jpg"

type CourseCardProps = {
  _id: string;
  title: string;
  level: string;
  instructor: { name: string; photo?: string; status?: string };
  duration?: number;       // optional
  price?: number;          // optional
  averageRating?: number;  // optional
  layout: "grid" | "list";
};

export default function CourseCard({_id,averageRating,title,level,instructor,duration,price,layout} : CourseCardProps)  {
  
  return (
    <Link to={`/courses/${_id}`}>
      <div
        className={
          layout === "grid"
            ? "max-w-[290px] w-full bg-white rounded-xl"
            : "max-w-[918px] w-full shadow bg-white rounded-lg flex"
        }
      >
        {layout === "grid" ? (
          <>
            <div className="relative">
              <img
                className="rounded-t-xl w-full h-[181.75px] object-cover"
                src={thumbnail}
                alt={title}
              />
              <p className="absolute top-2 left-2 bg-sky-500 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded">
                {level}
              </p>
            </div>
            <div className="p-4">
              <h1 className="mb-2 md:mb-6 text-lg font-semibold truncate">{title}</h1>
              <div className="text-sm flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <User />
                  <p>{instructor?.name}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <TimerIcon />
                    <p>{duration}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileArchive />
                    <p>{"lecture?"} lectures</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        checked={5 >= 1}
                        readOnly
                      />
                    </div>
                    <h1 className="text-base font-bold">{4}</h1>
                  </div>
                  <h1 className="text-sky-500">{averageRating} TK</h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <img
                className="rounded-l-xl h-[255px] w-[440px] object-cover"
                src={thumbnail}
              />
            </div>
            <div className="p-4 w-full flex flex-col justify-between">
              <div>
                <h1 className="text-lg font-semibold truncate">{title}</h1>
                <div className="flex justify-between w-[200px]">
                  <div className="flex items-center gap-1">
                    <Timer />
                    <p>{duration}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Network />
                    <p>{level}</p>
                  </div>
                </div>
                <div className="flex max-w-[400px] gap-4">
                  <div className="flex gap-2">
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        checked={5 >= 1}
                        readOnly
                      />
                    </div>
                    <h1 className="text-base font-bold">{4}</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <File />
                    <p>{"lectures?"} lectures</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="line-clamp-2">{"description ?"}</h1>
              </div>
              <div className="text-sm flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <User />
                    <p>{instructor?.name}</p>
                  </div>
                  <h1 className="text-sky-500">{price} TK</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
