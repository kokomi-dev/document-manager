import React, { useState, Suspense, useMemo } from "react";
// overlay
import OverLay from "../../component/Components/OverLay/OverLay";
import Loading from "../../component/Components/Loading/Loading";
// main feed
import SubMainFeed from "../../component/DocumentsComponent/SubMainFeed/SubMainFeed";
const MainFeed = React.lazy(() =>
  import("../../component/DocumentsComponent/MainFeed/MainFeed")
);
const Documents = () => {
  // state
  const [isHidden, setIsHidden] = useState(true);
  const isMemo = useMemo(() => isHidden, []);
  const [layouts, setLayouts] = useState(localStorage.getItem("layout"));
  const [creationTime, setCreationTime] = useState(null);
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full min-w-[100%] pt-6 ">
        {/* content web */}
        <div className="flex-1 w-full h-full">
          {/* header content */}
          <h1 className="text-[1.6rem] font-semibold border-b-[0.5px] border-[#888]">
            Overview
          </h1>
          {/* sub main feed */}
          <SubMainFeed
            setLayouts={setLayouts}
            setCreationTime={setCreationTime}
          />
          {/* main feed */}
          <MainFeed
            setIsHidden={setIsHidden}
            layouts={layouts}
            creationTime={creationTime}
          />
        </div>
      </div>
      {/* OverLay */}
      <OverLay
        isHidden={isMemo}
        onClick={() => {
          setIsHidden(true);
        }}
      />
    </Suspense>
  );
};

export default Documents;
