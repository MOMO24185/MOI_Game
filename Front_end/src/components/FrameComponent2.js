const FrameComponent2 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[53px] pl-[52px] box-border max-w-full text-center text-18xl-1 text-gray-100 font-sanchez mq800:pl-[26px] mq800:pr-[26px] mq800:box-border">
      <div className="h-[269px] flex-1 bg-gray-300 overflow-hidden flex flex-col items-end justify-start py-[55.6px] px-0 box-border gap-[55.6px] max-w-full z-[1] mq800:gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-center max-w-full shrink-0">
          <div className="w-[1019.8px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[22.3px] max-w-full">
            <div className="w-[482.1px] relative leading-[45px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] max-w-full mq450:text-3xl mq450:leading-[27px] mq800:text-11xl mq800:leading-[36px]">
              Welcome to MOI
            </div>
            <div className="w-[482.1px] relative text-mini-8 leading-[23px] font-roboto text-black inline-block max-w-full">
              Ensuring Safety and Security
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-col items-start justify-start">
              <div className="rounded-[7.42px] bg-black flex flex-col items-center justify-center pt-[11.2px] pb-[11.1px] pr-[56.3px] pl-[56.2px] whitespace-nowrap">
                <div className="relative text-mini-8 leading-[23px] font-medium font-roboto text-white text-left inline-block min-w-[110px]">
                  Explore Services
                </div>
              </div>
            </button>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/vector-200.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
