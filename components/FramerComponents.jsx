import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22px] box-border gap-[15px] max-w-full text-left text-base-5 text-gray-1200 font-inter ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
        <header className="w-[886px] flex flex-row items-start justify-start py-0 px-[66px] box-border max-w-full text-left text-xs-5 text-darkslategray-700 font-inter mq900:pl-[33px] mq900:pr-[33px] mq900:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[78px] whitespace-nowrap z-[2]">
                Career Paths
              </a>
            </div>
            <nav className="m-0 w-[195px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border mq700:w-0 mq900:hidden">
              <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-4xs-5 text-dimgray-700 font-inter mq700:hidden">
                <div className="w-[34px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[2]">
                    Exams
                  </a>
                </div>
                <a className="[text-decoration:none] w-[43px] relative text-darkslategray-600 flex items-center shrink-0 whitespace-nowrap z-[2]">
                  Fields of
                </a>
                <a className="[text-decoration:none] w-[53px] relative text-darkslategray-400 flex items-center shrink-0 z-[2]">
                  Opportuniti
                </a>
              </nav>
            </nav>
            <div className="w-10 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border text-4xs-5 text-darkslategray-400">
              <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[2]">
                Colleges
              </a>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-col items-start justify-start pt-8 px-11 pb-[19px] box-border gap-[15px] bg-[url('/groups@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] mq700:pl-[22px] mq700:pr-[22px] mq700:box-border">
          <img
            className="w-[906px] h-[109px] relative object-cover hidden max-w-full"
            alt=""
            src="/background@2x.png"
          />
          <a className="[text-decoration:none] w-[127px] relative text-[inherit] flex items-center whitespace-nowrap z-[1]">
            Explore Options
          </a>
          <div className="w-[484px] flex flex-row items-start justify-start gap-[6.7px] max-w-full text-6xs text-gray-200">
            <div className="flex flex-row items-start justify-start pt-1 px-[15px] pb-[7px] bg-[url('/frame-7@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-center text-4xs">
              <img
                className="h-[22px] w-[41px] relative object-cover hidden"
                alt=""
                src="/background@2x.png"
              />
              <div className="relative inline-block min-w-[11px] whitespace-nowrap z-[2]">
                All
              </div>
            </div>
            <div className="w-[75px] flex flex-row items-start justify-start pt-1 pb-[7px] pr-[25px] pl-[26px] box-border bg-[url('/frame-6@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-center text-gray-300">
              <img
                className="h-[22px] w-[75px] relative object-cover hidden"
                alt=""
                src="/background@2x.png"
              />
              <a className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[24px] z-[2]">
                Fields
              </a>
            </div>
            <div className="w-[53px] flex flex-row items-start justify-start pt-[5px] px-[13px] pb-[7px] box-border bg-[url('/frame-5@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-silver">
              <img
                className="h-[22px] w-[53px] relative object-cover hidden"
                alt=""
                src="/background@2x.png"
              />
              <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[2]">
                Exams
              </a>
            </div>
            <div className="w-[52px] flex flex-row items-start justify-start pt-[5px] pb-[9px] pr-0.5 pl-0 box-border bg-[url('/frame-4@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-6xs-5 text-darkgray-200">
              <img
                className="h-[22px] w-[52px] relative object-cover hidden"
                alt=""
                src="/background@2x.png"
              />
              <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[2]">
                Opportunities
              </a>
            </div>
            <button
              className="h-[22px] flex-1 z-[1]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#aaa",
                fontSize: "6.5",
                background: "#000",
                border: "#1c1c1c solid 1px",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#000" },
                height: 22,
              }}
            >
              Colleges
            </button>
            <button className="cursor-pointer [border:none] pt-[5px] px-[18px] pb-[9px] bg-[transparent] w-[74px] flex flex-row items-start justify-start box-border bg-[url('/frame-2@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
              <img
                className="h-[22px] w-[74px] relative object-cover hidden"
                alt=""
                src="/background@2x.png"
              />
              <a className="[text-decoration:none] flex-1 relative text-6xs-5 font-inter text-darkgray-300 text-left z-[2]">
                Pathways
              </a>
            </button>
            <div className="w-[52px] flex flex-row items-start justify-start pt-[5px] px-1.5 pb-[7px] box-border bg-[url('/frame-1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-darkgray-100">
              <img
                className="h-[22px] w-[52px] relative object-cover hidden"
                alt=""
                src="/background@2x.png"
              />
              <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[2]">
                Decisions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-11 text-sm-5 text-gray-400">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[62px] z-[2]">
          Discover
        </a>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
