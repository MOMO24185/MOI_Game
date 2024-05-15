const Welcoming = () => {
  return (
    <div className="w-[1440.5px] relative h-[372px] z-[1] text-center text-mini-8 text-gray-100 font-roboto">
      <img
        className="absolute top-[0px] left-[0px] w-[1440.5px] h-[362.1px] object-cover"
        alt=""
        src="/eb030322@2x.png"
      />
      <div className="absolute top-[93px] left-[52.3px] bg-gray-300 w-[1335px] overflow-hidden flex flex-row items-center justify-center py-[55.6px] px-[157.6px] box-border gap-[55.6px]">
        <div className="w-[1019.8px] relative h-[167.8px] z-[0]">
          <div className="absolute top-[0px] left-[0px] w-[1019.8px] flex flex-col items-center justify-start gap-[22.3px]">
            <div className="w-[482.1px] relative text-18xl-1 leading-[55px] font-sanchez inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000]">
              Welcome to MOI
            </div>
            <div className="overflow-hidden flex flex-col items-start justify-start text-left text-white">
              <div className="w-[222.5px] rounded-[7.42px] bg-black flex flex-col items-center justify-center p-[11.1px] box-border">
                <div className="relative leading-[22.25px] font-medium">
                  Explore Services
                </div>
              </div>
            </div>
            <div className="w-[482.1px] relative leading-[22.25px] text-black inline-block">
              Ensuring Safety and Security
            </div>
          </div>
        </div>
        <img
          className="w-full absolute !m-[0] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-200.svg"
        />
      </div>
      <div className="absolute top-[15px] left-[1367.3px] rounded-lg bg-crimson w-[50px] h-[50px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_25px)] left-[0px] rounded-tl-11xl rounded-tr-lg rounded-b-lg bg-crimson w-[154px] h-[50px]">
          <img
            className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_64px)] w-6 h-6"
            alt=""
            src="/svg.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcoming;
