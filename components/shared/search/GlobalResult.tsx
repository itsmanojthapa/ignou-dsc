import React, { useEffect, useState } from "react";
import GlobalFilters from "./GlobalFilters";
import { useSearchParams } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { globalSearch } from "@/lib/actions/general.action";
import { openAtom } from "@/lib/state/atom";
import { useRecoilState } from "recoil";

const GlobalResult = () => {
  const searchParams = useSearchParams();
  const [isLoaing, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  const global = searchParams.get("global");
  const type = searchParams.get("type");

  useEffect(() => {
    const fetchResult = async () => {
      setResult([]);
      setIsLoading(true);
      try {
        // fetch everything everywhere all at once => globalSearch, filter
        const res = await globalSearch({
          query: global,
          type,
        });

        setResult(JSON.parse(res));
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };
    if (global) {
      fetchResult();
    }
  }, [global, type]);

  const renderLink = (type: string, id: string) => {
    switch (type) {
      case "question":
        return `/question/${id}`;

      case "answer":
        return `/question/${id}`;

      case "tag":
        return `/tags/${id}`;

      case "user":
        return `/profile/${id}`;

      default:
        return "/";
    }
  };
  const [, setOpen] = useRecoilState(openAtom);
  return (
    <div className="absolute top-full z-10 mt-3 w-full rounded-xl py-5 ">
      <p className="text-dark400_light900 paragraph-semibold w-full px-5">
        <GlobalFilters />
      </p>
      <div className="my-5 h-[1px] bg-light-700/50 dark:bg-dark-500/50"></div>
      <div className="space-y-5">
        <p className="text-dark400_light900 paragraph-semibold px-5">
          Top Match
        </p>
        {isLoaing ? (
          <div className="flex-center flex-col px-5">
            <ReloadIcon className="my-2 h-10 w-10 animate-spin text-primary-500" />
            <p className="text-dark200_light800 body-regular">
              Browsing the entire database
            </p>
          </div>
        ) : (
          <div className="flex flex-col  gap-2">
            {result.length > 0 ? (
              result.map((item: any, index: number) => (
                <Link
                  href={renderLink(item.type, item.id)}
                  key={item.type + item.id + index}
                  onClick={() => setOpen(false)}
                  className="flex w-full cursor-pointer items-start gap-3 rounded-md px-5 py-2.5 hover:bg-light-700/50 dark:bg-dark-500/50">
                  <Image
                    src={"/assets/icons/tag.svg"}
                    alt="tags"
                    width={18}
                    height={18}
                    className="invert-colors mt-1 object-contain"
                  />
                  <div className="flex flex-col">
                    <p className="body-medium text-dark200_light800 line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-light400_light500 small-medium mt-1 font-bold capitalize">
                      {item.type}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex-center flex-col px-5">
                <p className="text-dark200_light800 body-regular px-5 py-2.5">
                  Opps! No result found !
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalResult;
