function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1918] text-[14px]">First Name</p>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#1b1918] text-[16px] text-ellipsis whitespace-nowrap">Input</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(40,3,1,0.32)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1918] text-[14px]">Username</p>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#1b1918] text-[16px] text-ellipsis whitespace-nowrap">Input</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(40,3,1,0.32)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input/false/Filled/High">
          <Label />
          <Field />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input/false/Filled/High">
          <Label1 />
          <Field1 />
        </div>
      </div>
    </div>
  );
}

export default function Form() {
  return (
    <div className="relative size-full" data-name="Form">
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full" data-name=".Form / Account">
        <Content />
        <div className="h-[64px] relative shrink-0 w-full" data-name=".Card Base / Footer (shadui)">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center relative size-full">
              <div className="bg-[#ed0000] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button 02">
                <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}