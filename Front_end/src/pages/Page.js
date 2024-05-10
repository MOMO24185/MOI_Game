import TopBar from "../components/TopBar";
import FrameComponent2 from "../components/FrameComponent2";
import Products1 from "../components/Products1";
import DataMetrics from "../components/DataMetrics";
import Products from "../components/Products";
import Form from "../components/Form";
import FrameComponent from "../components/FrameComponent";

const Page = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[161.5px] box-border gap-[93px] leading-[normal] tracking-[normal] mq450:gap-[23px] mq800:gap-[46px]">
      <TopBar />
      <img
        className="w-[1440.5px] h-[362.1px] absolute !m-[0] top-[80px] right-[-0.3px] object-cover"
        alt=""
        src="/eb030322@2x.png"
      />
      <main className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[68.5px] box-border max-w-full mq1125:pb-5 mq1125:box-border mq1350:pb-[29px] mq1350:box-border">
        <FrameComponent2 />
        <Products1 />
        <DataMetrics />
        <Products />
        <Form />
      </main>
      <FrameComponent />
    </div>
  );
};

export default Page;
