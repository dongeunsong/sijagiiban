import { addDays, isAfter, isToday, startOfDay, startOfWeek } from 'date-fns';
import { Check } from 'lucide-react';
import { useState } from 'react';
import BottomNavigation from './BottomNavigation';
import ScreenHeader from './ScreenHeader';

const routines = [
  { id: '1', label: '아침 스트레칭', done: true },
  { id: '2', label: '필라테스 1시간', done: false },
  { id: '3', label: '독서 30분', done: false },
];

const DAY_LABELS = ['월', '화', '수', '목', '금', '토', '일'] as const;

function getMockWeeklyAchievements(): boolean[] {
  return [true, true, true, true, true, false, false];
}

function buildWeekDays() {
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const achievements = getMockWeeklyAchievements();
  const today = startOfDay(new Date());

  return DAY_LABELS.map((label, index) => {
    const date = addDays(weekStart, index);
    return {
      label,
      achieved: achievements[index],
      isFuture: isAfter(date, today),
      isToday: isToday(date),
    };
  });
}

export default function HomeScreen() {
  const [items, setItems] = useState(routines);
  const weekDays = buildWeekDays();
  const achievedCount = weekDays.filter((day) => day.achieved).length;
  const weeklyRate = Math.round((achievedCount / 7) * 100);
  const todayRate = Math.round((items.filter((item) => item.done).length / items.length) * 100);

  const toggleRoutine = (id: string) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  return (
    <div className="flex min-h-[852px] w-[393px] flex-col bg-white">
      <ScreenHeader title="시작이 반" subtitle="오늘도 한 걸음" />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-5">
        <section className="space-y-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleRoutine(item.id)}
              className="flex w-full items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-4 text-left shadow-sm"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-md border-2 ${
                  item.done ? 'border-[#1D9E75] bg-[#1D9E75]' : 'border-gray-200 bg-white'
                }`}
              >
                {item.done ? <Check className="h-4 w-4 text-white" strokeWidth={3} /> : null}
              </span>
              <span className={`text-[15px] font-medium ${item.done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
            <p className="text-[12px] text-gray-500">오늘 달성률</p>
            <p className="mt-1 text-[24px] font-bold text-[#1D9E75]">{todayRate}%</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
            <p className="text-[12px] text-gray-500">주간 달성률</p>
            <p className="mt-1 text-[24px] font-bold text-[#1D9E75]">{weeklyRate}%</p>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white px-4 py-4">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-[13px] font-semibold text-gray-900">이번 주 달성 현황</p>
              <p className="mt-0.5 text-[11px] text-gray-500">월~일 루틴 달성 막대 그래프</p>
            </div>
            <div className="text-right">
              <p className="text-[22px] font-bold leading-none text-[#1D9E75]">{weeklyRate}%</p>
              <p className="mt-1 text-[10px] text-gray-400">{achievedCount}/7일</p>
            </div>
          </div>

          <div className="flex items-end justify-between gap-2 h-28" role="img" aria-label="이번 주 요일별 달성 막대 그래프">
            {weekDays.map((day) => {
              const barHeight = day.achieved ? 'h-full' : day.isFuture ? 'h-2' : 'h-3';

              return (
                <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-20 w-full items-end justify-center">
                    <div
                      className={`w-full max-w-6 rounded-t-md transition-all ${barHeight} ${
                        day.achieved
                          ? 'bg-[#1D9E75]'
                          : day.isFuture
                            ? 'bg-gray-100'
                            : 'bg-gray-200'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className={`text-[11px] font-medium ${
                      day.isToday ? 'text-[#1D9E75]' : 'text-gray-400'
                    }`}
                  >
                    {day.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <BottomNavigation activeTab="home" />
    </div>
  );
}
