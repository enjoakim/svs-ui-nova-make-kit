import InteractiveCalendar from './InteractiveCalendar';

export default function Calendar() {
  return (
    <div className="relative size-full" data-name="Calendar">
      <div className="absolute bg-white content-stretch flex items-start left-0 max-w-[284px] min-w-[284px] p-[16px] rounded-[4px] top-[67px] w-[284px]" data-name=".Calendar">
        <div aria-hidden="true" className="absolute border border-[rgba(40,3,1,0.16)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <InteractiveCalendar variant="default" />
      </div>
      <div className="absolute bg-white content-stretch flex items-start left-[321px] max-w-[284px] min-w-[284px] p-[16px] rounded-[4px] top-[67px] w-[284px]" data-name=".Calendar">
        <div aria-hidden="true" className="absolute border border-[rgba(40,3,1,0.16)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <InteractiveCalendar variant="range" />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Svenska_Spel_Plan_Pro',sans-serif] justify-center leading-[0] left-[130px] not-italic text-[12px] text-[rgba(0,0,0,0.7)] text-center top-[8px] whitespace-nowrap">
        <p className="leading-[16px]">Default</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Svenska_Spel_Plan_Pro',sans-serif] justify-center leading-[0] left-[451.5px] not-italic text-[12px] text-[rgba(0,0,0,0.7)] text-center top-[8px] whitespace-nowrap">
        <p className="leading-[16px]">Range</p>
      </div>
    </div>
  );
}