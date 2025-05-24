export const TimerItem = ({
  value,
  label,
  prevValue,
}: {
  value: string;
  label: string;
  prevValue: string;
}) => (
  <div className="timer-item flex flex-col items-center">
    <div className="relative sm:h-14 h-6 w-16 overflow-hidden font-bold">
      <span
        className={`absolute left-1/2 -translate-x-1/2 black bg-gradient-to-t from-[#F38835] to-[#F1700D] text-transparent bg-clip-text sm:text-5xl text-xl leading-none transition-all duration-300 ${
          prevValue !== value ? " opacity-0" : " opacity-100"
        }`}
      >
        {prevValue}
      </span>
      <span
        className={`absolute left-1/2 -translate-x-1/2 black bg-gradient-to-t from-[#F38835] to-[#F1700D] text-transparent bg-clip-text  sm:text-5xl text-xl leading-none transition-all duration-300 ${
          prevValue !== value ? "opacity-100" : "opacity-0"
        }`}
      >
        {value}
      </span>
    </div>
    <div className="label normal sm:text-lg text-base text-[#FAD8DB]">
      {label}
    </div>
  </div>
);
