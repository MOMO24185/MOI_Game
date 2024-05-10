const TopBar = () => {
  return (
    <header className="self-stretch shadow-[0px_0px_6px_rgba(0,_0,_0,_0.12)] bg-white overflow-hidden flex flex-row items-start justify-start pt-[14.7px] px-[14.8px] pb-[14.6px] box-border gap-[26.7px] top-[0] z-[99] sticky max-w-full text-left text-3xs-3 text-darkslategray-100 font-roboto">
      <div className="flex flex-col items-start justify-start pt-5 pb-0 pr-[12.6px] pl-0">
        <div className="w-[16.7px] h-2.5 relative">
          <div className="absolute top-[0px] left-[0px] rounded-[2.67px] bg-darkslategray-100 w-[16.7px] h-0.5" />
          <div className="absolute top-[4px] left-[0px] rounded-[2.67px] bg-darkslategray-100 w-[16.7px] h-0.5" />
          <div className="absolute top-[8px] left-[0px] rounded-[2.67px] bg-darkslategray-100 w-[16.7px] h-0.5" />
        </div>
      </div>
      <img
        className="self-stretch w-[187.3px] relative max-h-full object-contain min-h-[51px]"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <img
          className="w-[48.8px] h-[50.7px] relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/link--gsr5png@2x.png"
        />
      </div>
      <div className="w-[77.1px] flex flex-col items-start justify-start pt-[20.6px] pb-0 pr-3 pl-0 box-border">
        <b className="self-stretch relative tracking-[0.01em] leading-[9.33px] uppercase font-bold">
          Our Services
        </b>
      </div>
      <div className="w-12 flex flex-col items-start justify-start pt-[18.3px] pb-0 pr-[13.3px] pl-0 box-border text-xs text-darkgoldenrod-100 font-inter">
        <div className="self-stretch flex flex-row items-start justify-start border-r-[0.7px] border-solid border-darkgray">
          <div className="ml-[-8.599999999999454px] w-[52px] relative tracking-[0.01em] leading-[14px] flex items-center shrink-0 [debug_commit:1de1738] whitespace-nowrap">
            Sign in
          </div>
        </div>
      </div>
      <div className="w-[129.7px] flex flex-col items-start justify-start pt-[20.6px] pb-0 pr-[13.3px] pl-0 box-border mq1350:w-[13.300000000000182px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1350:hidden">
          <b className="w-[56.3px] relative tracking-[0.04px] leading-[9.33px] uppercase flex items-center shrink-0">
            Contact Us
          </b>
          <div className="w-[20.1px] relative tracking-[0.01em] leading-[9.33px] font-inter text-center flex items-center justify-center shrink-0 min-w-[20.1px]">
            عربي
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[17px] pb-0 pr-[13px] pl-0">
        <img
          className="w-[16.7px] h-[16.7px] relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="w-[200px] flex flex-col items-start justify-start pt-[7.3px] px-0 pb-0 box-border">
        <div className="self-stretch rounded-md flex flex-row items-start justify-start py-1.5 px-[7px] gap-[4px] border-[1px] border-solid border-gray-500">
          <input
            className="w-[calc(100%_-_34px)] [border:none] [outline:none] font-roboto text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-gray-200 text-left inline-block min-w-[96px] whitespace-nowrap p-0"
            placeholder="Search in site"
            type="text"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/icsearch.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
