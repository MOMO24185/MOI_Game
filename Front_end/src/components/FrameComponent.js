const FrameComponent = () => {
  return (
    <footer className="flex flex-row items-start justify-start py-0 pr-[52px] pl-[52.5px] box-border max-w-full text-left text-3xl text-black font-inter mq800:pl-[26px] mq800:pr-[26px] mq800:box-border">
      <div className="flex flex-row items-start justify-start gap-[60px] max-w-full mq800:gap-[30px] mq1350:flex-wrap">
        <div className="w-[340px] flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 relative tracking-[0.01em] leading-[44px] inline-block max-w-full mq450:text-lg mq450:leading-[35px]">{`Terms & Conditions`}</div>
          </div>
          <div className="w-[216px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
            <div className="flex-1 relative tracking-[0.01em] leading-[44px] mq450:text-lg mq450:leading-[35px]">
              Site Map
            </div>
          </div>
          <div className="w-[265px] relative tracking-[0.01em] leading-[44px] flex items-center mq450:text-lg mq450:leading-[35px]">
            Disclaimer
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 relative tracking-[0.01em] leading-[44px] inline-block max-w-full mq450:text-lg mq450:leading-[35px]">
              Email for Employees
            </div>
          </div>
        </div>
        <div className="w-[429px] flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8.5px] max-w-full">
            <div className="w-[234px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
              <div className="flex-1 relative tracking-[0.01em] leading-[46px] mq450:text-lg mq450:leading-[35px]">
                <span>Privacy</span>
                <span className="text-8xl-4">{` `}</span>
                <span>Policy</span>
              </div>
            </div>
            <div className="w-[386px] relative tracking-[0.01em] leading-[43.51px] flex items-center max-w-full mq450:text-lg mq450:leading-[35px]">
              Government Charter
            </div>
            <div className="self-stretch relative tracking-[0.01em] leading-[43.51px] mq450:text-lg mq450:leading-[35px]">
              <p className="m-0">Information security and</p>
              <p className="m-0">safety policy</p>
            </div>
          </div>
        </div>
        <div className="w-[446px] flex flex-col items-start justify-start pt-[59px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="w-[335px] relative tracking-[0.01em] leading-[44px] flex items-center max-w-full mq450:text-lg mq450:leading-[35px]">
              Accessbility Policy
            </div>
            <div className="self-stretch relative tracking-[0.01em] leading-[44px] z-[1] mq450:text-lg mq450:leading-[35px]">{`Abbreviations & Glossary`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
