import { useState } from 'react';
import { Icon } from '../../SvsUiNova/components';

interface CalendarProps {
  variant?: 'default' | 'range';
  onDateSelect?: (date: Date) => void;
  onRangeSelect?: (startDate: Date, endDate: Date) => void;
}

const MONTH_NAMES = [
  'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
];

const DAY_NAMES = ['Må', 'Ti', 'On', 'To', 'Fr', 'Lö', 'Sö'];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export default function InteractiveCalendar({ variant = 'default', onDateSelect, onRangeSelect }: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;

    const clickedDate = new Date(currentYear, currentMonth, day);

    if (variant === 'range') {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(clickedDate);
        setRangeEnd(null);
      } else {
        if (clickedDate < rangeStart) {
          setRangeEnd(rangeStart);
          setRangeStart(clickedDate);
        } else {
          setRangeEnd(clickedDate);
        }
        if (onRangeSelect && rangeStart) {
          onRangeSelect(rangeStart, clickedDate);
        }
      }
    } else {
      setSelectedDate(clickedDate);
      if (onDateSelect) {
        onDateSelect(clickedDate);
      }
    }
  };

  const isToday = (day: number) => {
    return day === today.getDate() &&
           currentMonth === today.getMonth() &&
           currentYear === today.getFullYear();
  };

  const isSelected = (day: number) => {
    if (variant === 'default') {
      return selectedDate?.getDate() === day &&
             selectedDate?.getMonth() === currentMonth &&
             selectedDate?.getFullYear() === currentYear;
    } else {
      const date = new Date(currentYear, currentMonth, day);
      if (rangeStart && rangeEnd) {
        return date >= rangeStart && date <= rangeEnd;
      }
      return rangeStart?.getDate() === day &&
             rangeStart?.getMonth() === currentMonth &&
             rangeStart?.getFullYear() === currentYear;
    }
  };

  const isRangeStart = (day: number) => {
    return rangeStart?.getDate() === day &&
           rangeStart?.getMonth() === currentMonth &&
           rangeStart?.getFullYear() === currentYear;
  };

  const isRangeEnd = (day: number) => {
    return rangeEnd?.getDate() === day &&
           rangeEnd?.getMonth() === currentMonth &&
           rangeEnd?.getFullYear() === currentYear;
  };

  const isInRange = (day: number) => {
    if (!rangeStart) return false;
    const date = new Date(currentYear, currentMonth, day);
    const compareEnd = rangeEnd || hoveredDate;
    if (!compareEnd) return false;
    const start = rangeStart < compareEnd ? rangeStart : compareEnd;
    const end = rangeStart < compareEnd ? compareEnd : rangeStart;
    return date > start && date < end;
  };

  const renderDays = () => {
    const days: JSX.Element[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      days.push(
        <div
          key={`prev-${day}`}
          className="col-auto content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] py-[8px] relative rounded-[9999px] self-start shrink-0 w-[36px] cursor-not-allowed"
        >
          <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">
            {day}
          </p>
        </div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isTodayDate = isToday(day);
      const isSelectedDate = isSelected(day);
      const isStart = isRangeStart(day);
      const isEnd = isRangeEnd(day);
      const inRange = isInRange(day);

      let bgClass = '';
      let textClass = 'text-[#1b1918]';
      let roundedClass = 'rounded-[9999px]';

      if (isSelectedDate && variant === 'default') {
        bgClass = 'bg-[#62001d]';
        textClass = 'text-white';
      } else if (isStart || isEnd) {
        bgClass = 'bg-[#62001d]';
        textClass = 'text-white';
        if (variant === 'range') {
          if (isStart && !isEnd) roundedClass = 'rounded-tl-[9999px] rounded-bl-[9999px]';
          if (isEnd && !isStart) roundedClass = 'rounded-tr-[9999px] rounded-br-[9999px]';
        }
      } else if (inRange || (isSelectedDate && variant === 'range')) {
        bgClass = 'bg-[#efeae7]';
        roundedClass = '';
      }

      days.push(
        <div
          key={`current-${day}`}
          className={`col-auto content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] py-[8px] relative ${roundedClass} self-start shrink-0 w-[36px] cursor-pointer transition-colors hover:bg-[rgba(98,0,29,0.1)] ${bgClass}`}
          onClick={() => handleDateClick(day, true)}
          onMouseEnter={() => variant === 'range' && rangeStart && !rangeEnd && setHoveredDate(new Date(currentYear, currentMonth, day))}
          onMouseLeave={() => variant === 'range' && setHoveredDate(null)}
        >
          <p className={`font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] ${textClass} whitespace-nowrap z-10`}>
            {day}
          </p>
          {isTodayDate && !isSelectedDate && !isStart && !isEnd && (
            <div className="absolute left-0 rounded-[9999px] size-[36px] top-0" data-name="current">
              <div aria-hidden="true" className="absolute border border-[#1b1918] border-solid inset-0 pointer-events-none rounded-[9999px]" />
            </div>
          )}
        </div>
      );
    }

    const totalCells = firstDay + daysInMonth;
    const remainingCells = 42 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="col-auto content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] py-[8px] relative rounded-[9999px] self-start shrink-0 w-[36px] cursor-not-allowed"
        >
          <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">
            {day}
          </p>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <button
          onClick={handlePrevMonth}
          className="bg-transparent content-stretch flex h-[40px] items-center justify-center overflow-clip p-[12px] relative rounded-[4px] shrink-0 hover:bg-[rgba(40,3,1,0.06)] transition-colors cursor-pointer"
          aria-label="Föregående månad"
        >
          <Icon name="menu-left" size={16} className="text-[#1B1918]" />
        </button>
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#1b1918] text-[16px] whitespace-nowrap">
            {MONTH_NAMES[currentMonth]} {currentYear}
          </p>
        </div>
        <button
          onClick={handleNextMonth}
          className="bg-transparent content-stretch flex h-[40px] items-center justify-center overflow-clip p-[12px] relative rounded-[4px] shrink-0 hover:bg-[rgba(40,3,1,0.06)] transition-colors cursor-pointer"
          aria-label="Nästa månad"
        >
          <Icon name="menu-right" size={16} className="text-[#1B1918]" />
        </button>
      </div>

      <div className="gap-y-[8px] grid grid-cols-7 grid-rows-[16px_repeat(6,36px)] h-[236px] relative shrink-0 w-[252px]">
        {DAY_NAMES.map((day, index) => (
          <div
            key={day}
            className={`col-${index + 1} content-stretch flex flex-col items-center justify-center relative rounded-[6px] row-1 self-start shrink-0 w-[36px]`}
          >
            <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] whitespace-nowrap">
              {day}
            </p>
          </div>
        ))}
        {renderDays()}
      </div>

      {variant === 'range' && (
        <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
          <button className="bg-[#ed0000] content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[4px] shrink-0 hover:bg-[#D10011] transition-colors">
            <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              Välj datum
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
