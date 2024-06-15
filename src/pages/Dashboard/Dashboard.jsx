import React, { Suspense, lazy } from "react";
import Flex from "../../component/Components/Flex/Flex";
import Loading from "../../component/Components/Loading/Loading";
const MainDashboard = lazy(() =>
  import("../../component/DashboardComponent/MainDashboard/MainDashboard")
);
const Dashboard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full h-full pt-6">
        {/* header content */}
        <Flex justify="between" className="border-b-[0.5px] border-[#888]">
          <h1 className="text-[1.25rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold">
            Dashboard
          </h1>
        </Flex>
        <MainDashboard />
      </div>
    </Suspense>
  );
};
export default Dashboard;
