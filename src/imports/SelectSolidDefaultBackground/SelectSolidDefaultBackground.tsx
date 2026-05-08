import svgPaths from "./svg-5gl3shpz2c";

function Field() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Svenska_Spel_Plan_Pro:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[16px] text-[rgba(0,0,0,0.7)] text-ellipsis whitespace-nowrap">Placeholder</p>
          <div className="relative shrink-0 size-[16px]" data-name="menu-down">
            <div className="absolute inset-[22.79%_0]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.70787">
                <path d={svgPaths.p21285800} fill="var(--fill-0, #1B1918)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(40,3,1,0.32)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Menu() {
  return <div className="h-0 shrink-0 w-full" data-name="Menu" />;
}

function MenuField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Menu + field">
      <Field />
      <Menu />
    </div>
  );
}

export default function SelectSolidDefaultBackground() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative size-full" data-name="Select/Solid/Default/Background">
      <p className="font-['Svenska_Spel_Plan_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1918] text-[14px] w-full z-[3]">Label</p>
      <MenuField />
    </div>
  );
}