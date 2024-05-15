const Header = () => {
  return (
    <div className="w-[1443px] !m-[0] absolute top-[1px] left-[calc(50%_-_720px)] shadow-[0px_0px_6px_rgba(0,_0,_0,_0.12)] bg-white h-[79px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-5 box-border z-[0] text-left text-sm text-gray-200 font-roboto">
      <div className="w-[253.8px] relative h-[50px]">
        <img
          className="absolute top-[2.5px] left-[0px] w-[187.3px] h-[45px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[205px] w-[48.8px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/link--gsr5png@2x.png"
        />
      </div>
      <div className="w-[200px] rounded-md box-border flex flex-row items-center justify-end p-2 gap-[4px] border-[1px] border-solid border-gray-500">
        <div className="flex-1 relative leading-[20px]">Search in site</div>
        <img className="w-5 relative h-5" alt="" src="/icsearch.svg" />
      </div>
      <div className="w-[464px] bg-white flex flex-row items-center justify-center gap-[40px] text-3xs text-darkslategray">
        <div className="flex-1 relative h-2.5">
          <b className="absolute top-[0px] left-[0px] tracking-[0.01em] leading-[9.33px] uppercase flex items-center w-[95px] h-2.5">
            Our Services
          </b>
        </div>
        <b className="w-[70px] relative tracking-[0.01em] leading-[9.33px] uppercase flex items-center h-2.5 shrink-0">
          Contact Us
        </b>
        <img
          className="w-[16.7px] relative h-[16.7px]"
          alt=""
          src="/vector.svg"
        />
        <div className="w-[34.7px] relative box-border h-3.5 text-xs text-darkgoldenrod-100 font-inter border-r-[0.7px] border-solid border-darkgray">
          <div className="absolute top-[0px] left-[-8.7px] tracking-[0.01em] leading-[14px] flex items-center w-[52px] h-3.5">
            Sign in
          </div>
        </div>
        <div className="w-[20.1px] relative tracking-[0.01em] leading-[9.33px] font-inter text-center flex items-center justify-center h-[9.3px] shrink-0">
          عربي
        </div>
        <div className="w-[27.6px] relative h-[13.7px]">
          <div className="absolute top-[0px] left-[0px] rounded-[2.67px] bg-darkslategray w-[27.6px] h-[2.7px]" />
          <div className="absolute top-[5.5px] left-[0px] rounded-[2.67px] bg-darkslategray w-[27.6px] h-[2.7px]" />
          <div className="absolute top-[11px] left-[0px] rounded-[2.67px] bg-darkslategray w-[27.6px] h-[2.7px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
