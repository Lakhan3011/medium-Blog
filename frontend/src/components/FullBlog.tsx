import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBLog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-28 w-full pt-12 max-w-screen-2xl">
          <div className="col-span-8 bg-sky-500">
            <div className="text-5xl font-extrabold pt-2">{blog.title}</div>
            <div className="text-slate-500">Posted on May 1, 2024</div>
            <div className="pt-4">{blog.content}</div>
          </div>

          <div className="col-span-4 bg-red-300">
            <div className="text-lg"> Author</div>

            <div className="flex mt-5">
              <div className="pr-4 flex justify-center flex-col">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {" "}
                  {blog.author.name || "Anonymous"}
                </div>
                <div className=" text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
