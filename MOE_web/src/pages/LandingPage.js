import Header from "../components/Header";
import Welcoming from "../components/Welcoming";
import Products1 from "../components/Products1";
import DataMetrics from "../components/DataMetrics";
import Products from "../components/Products";
import Policy from "../components/Policy";
import Footer from "../components/Footer";
import Game from "../components/Game";
import EyeGather from "../components/EyeG";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start pt-20 px-0 pb-0 box-border text-right text-base text-dimgray-100 font-inter">
      <Header />
      <EyeGather />
      <Welcoming />
      <Game />
      <Products1 />
      <DataMetrics />
      <Products />
      <div className="self-stretch h-[700px] overflow-hidden shrink-0 flex flex-col items-start justify-center pt-[60px] px-[170px] pb-0 box-border relative gap-[60px] z-[5]">
        <div className="w-[600px] absolute !m-[0] top-[590.8px] left-[760px] tracking-[0.01em] leading-[43.51px] flex items-center h-[87px] shrink-0 z-[0]">
          COPYRIGHT © 2024 - MINISTRY OF INTERIOR. ALL RIGHTS RESERVED.
        </div>
        <Policy />
        <div className="w-[400px] !m-[0] absolute top-[232.8px] left-[58px] h-12 flex flex-col items-center justify-start z-[2] text-center text-21xl text-sandybrown font-roboto">
          <b className="w-[520px] absolute !m-[0] top-[0px] left-[-60px] leading-[48px] inline-block z-[0]">
            Contact Us
          </b>
        </div>
        <b className="w-[550px] absolute !m-[0] top-[223.8px] left-[880px] text-[35px] tracking-[2.45px] leading-[78.31px] flex text-darkgoldenrod-200 text-left items-center h-[66.7px] shrink-0 z-[3]">
          Download Mobile Apps
        </b>
        <div className="w-[385.8px] absolute !m-[0] top-[321.8px] left-[895px] h-[137.8px] z-[4]">
          <img
            className="absolute top-[0px] left-[8.7px] w-[81.6px] h-[96.4px]"
            alt=""
            src="/item--link--externallink--svg.svg"
          />
          <img
            className="absolute top-[0px] left-[145.5px] w-[85.2px] h-[99.7px]"
            alt=""
            src="/item--link--externallink--svg1.svg"
          />
          <img
            className="absolute top-[0px] left-[285.8px] w-[95.2px] h-[98.6px]"
            alt=""
            src="/item--link--externallink--svg2.svg"
          />
        </div>
        <div className="w-[209.5px] absolute !m-[0] top-[514.8px] left-[963px] h-[37.3px] z-[5]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-[70.78%] w-[12.17%] top-[21.45%] right-[0%] bottom-[7.77%] left-[87.83%] max-w-full overflow-hidden max-h-full mix-blend-normal"
              alt=""
              src="/group2.svg"
            />
            <img
              className="absolute h-full w-[17.8%] top-[0%] right-[82.2%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="absolute top-[4px] left-[94px] w-[33.2px] h-[33.2px] overflow-hidden"
              alt=""
              src="/instagram-2.svg"
            />
          </div>
        </div>
        <img
          className="w-[236px] absolute !m-[0] top-[479.8px] left-[696px] h-[121px] overflow-hidden shrink-0 object-cover z-[6]"
          alt=""
          src="/link--uaelogopng@2x.png"
        />
        <div className="w-[548px] absolute !m-[0] top-[316.8px] left-[170px] h-[317.6px] z-[7]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
