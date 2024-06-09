import React, { Suspense, useMemo, useState } from "react";
import { IoIosWarning } from "react-icons/io";
import { TbRestore } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import Button from "../../component/Components/Button/Button";
import Loading from "../../component/Components/Loading/Loading";
const MainTrash = React.lazy(() =>
  import("../../component/TrashComponent/MainTrash/MainTrash")
);
const Trash = () => {
  const [numberTrash, setNumberTrash] = useState(null);
  const isMemo = useMemo(() => setNumberTrash, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full min-w-[100%] py-6">
        <div className="min-w-full ">
          {/* content web */}
          <div className="flex-1  w-full h-full">
            {/* header content */}
            <h1 className="text-[1.25rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold border-b-[0.5px] border-[#888]">
              Trash
              <span className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] text-blue">
                ({numberTrash})
              </span>
            </h1>
            <div className="w-[100%] h-[100%] flex items-center justify-between pt-4">
              <div>
                <h5 className="py-4 text-[1.2rem]">
                  Below are the files and data you deleted
                </h5>
              </div>
              {/* button */}
              <div>
                <Button
                  justify="center"
                  className="button__blue   text-white mb-8 h-[32px] w-[120px] md:h-auto md:w-auto"
                >
                  <TbRestore />
                  Restore All
                </Button>
                <Button
                  justify="center"
                  className="bg-[#FF6048] text-white h-[32px] w-[120px] md:h-auto md:w-auto"
                >
                  <MdDeleteForever className="text-[1.2rem]" />
                  Delete All
                </Button>
              </div>
            </div>
            {/* main */}
            <h6 className="py-4 flex items-center justify-start">
              <IoIosWarning className="text-red" />
              <span className="text-red mr-[2px]">Note:</span>
              that all files and data will be automatically deleted after 30
              days
            </h6>
            <MainTrash setNumberTrash={isMemo} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Trash;
