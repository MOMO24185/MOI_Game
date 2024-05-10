const DataMetrics = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-[60px] px-0 pb-0 box-border relative gap-[17.5px] min-h-[881px] max-w-full text-center text-21xl text-sandybrown font-roboto mq1125:pt-[39px] mq1125:box-border mq450:pt-[25px] mq450:box-border">
      <div className="w-[1140px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full mq1125:gap-[30px]">
        <div className="flex-1 flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
          <h2 className="m-0 w-[520px] relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[29px] mq800:text-13xl mq800:leading-[38px]">
            News
          </h2>
        </div>
      </div>
      <div className="w-[1153px] h-[501px] flex flex-col items-center justify-center py-0 px-[55px] box-border max-w-full mq1125:pl-[27px] mq1125:pr-[27px] mq1125:box-border mq800:gap-[20px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
      <div className="w-[1045px] relative text-5xl tracking-[0.01em] leading-[24px] font-inter text-black flex items-center max-w-full mq450:text-lgi mq450:leading-[19px]">
        <span className="w-full">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            MOI reviews solutions and initiatives of "zero bureacracy" at
          </p>
          <p className="m-0">police general HQs</p>
        </span>
      </div>
      <img
        className="w-[592.5px] relative max-h-full max-w-full"
        loading="lazy"
        alt=""
        src="/group-844.svg"
      />
      <div className="overflow-hidden flex flex-col items-start justify-start py-0 px-5 text-left text-base text-white">
        <div className="rounded-lg bg-olive flex flex-col items-center justify-center py-3 px-[69px] whitespace-nowrap">
          <div className="relative leading-[24px] font-medium inline-block min-w-[102px]">
            View All News
          </div>
        </div>
      </div>
      <img
        className="w-full h-[0.6px] absolute !m-[0] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/vector-200-1.svg"
      />
    </section>
  );
};

export default DataMetrics;
