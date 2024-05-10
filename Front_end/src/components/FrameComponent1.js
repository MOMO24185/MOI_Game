import { useMemo } from "react";

const FrameComponent1 = ({
  group849,
  opinions,
  propWidth,
  propGap,
  propHeight,
}) => {
  const brushBrushStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  const groupIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="w-[208.2px] flex flex-col items-start justify-start gap-[26.5px] text-center text-14xl-3 text-dimgray font-inter"
      style={brushBrushStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-[34px]">
        <img
          className="h-[145.5px] flex-1 relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
          loading="lazy"
          alt=""
          src={group849}
          style={groupIconStyle}
        />
      </div>
      <div className="self-stretch relative tracking-[0.01em] leading-[17.7px] uppercase shrink-0 [debug_commit:1de1738] mq450:text-xl mq450:leading-[11px] mq800:text-8xl mq800:leading-[14px]">
        {opinions}
      </div>
    </div>
  );
};

export default FrameComponent1;
