const DataMetrics = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[60px] px-[170px] relative gap-[20px] z-[3] text-center text-21xl text-sandybrown font-roboto">
      <div className="self-stretch flex flex-row items-center justify-center z-[0]">
        <div className="flex-1 flex flex-col items-center justify-start">
          <b className="w-[520px] relative leading-[48px] inline-block">NEWS</b>
        </div>
      </div>
      <div className="w-[1153px] h-[501px] flex flex-col items-center justify-center z-[1]">
        <img
          className="w-[1043px] relative h-[501px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
      <div className="w-[1045px] relative text-5xl tracking-[0.01em] leading-[24px] font-inter text-black flex items-center h-12 shrink-0 z-[2]">
        <span className="w-full">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            MOI reviews solutions and initiatives of "zero bureacracy" at
          </p>
          <p className="m-0">police general HQs</p>
        </span>
      </div>
      <img
        className="w-[592.5px] relative h-[36.1px] z-[3]"
        alt=""
        src="/group-844.svg"
      />
      <div className="overflow-hidden flex flex-col items-start justify-start z-[4] text-left text-base text-white">
        <div className="w-60 rounded-lg bg-olive flex flex-col items-center justify-center p-3 box-border">
          <div className="relative leading-[24px] font-medium">
            View All News
          </div>
        </div>
      </div>
      <img
        className="w-full absolute !m-[0] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden max-h-full z-[5]"
        alt=""
        src="/vector-2001.svg"
      />
    </div>
  );
};

export default DataMetrics;
