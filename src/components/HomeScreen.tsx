import { addDays, isAfter, isToday, startOfDay, startOfWeek } from 'date-fns';
import ScreenShell from './ScreenShell';

const DAY_LABELS = ['월', '화', '수', '목', '금', '토', '일'] as const;

// TODO: 실제 루틴 달성 기록과 연동
function getMockWeeklyAchievements(): boolean[] {
  return [true, true, false, true, true, false, false];
}

type WeekDay = {
  label: (typeof DAY_LABELS)[number];
  achieved: boolean;
  isFuture: boolean;
  isToday: boolean;
};

function buildWeekDays(): WeekDay[] {
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
  const weekDays = buildWeekDays();
  const achievedCount = weekDays.filter((day) => day.achieved).length;
  const weeklyRate = Math.round((achievedCount / 7) * 100);

  return (
    <ScreenShell
      title="홈"
      subtitle="오늘의 루틴과 진행 상황을 한눈에 확인하세요."
    >
      <section
        aria-labelledby="weekly-achievement-title"
        className="rounded-2xl bg-gray-50 border border-gray-100 p-5"
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 id="weekly-achievement-title" className="text-sm font-semibold text-gray-900">
              주간 달성률
            </h2>
            <p className="mt-1 text-xs text-gray-500">이번 주 월~일 루틴 달성 현황</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-3xl font-bold leading-none text-[#1D9E75]">{weeklyRate}%</p>
            <p className="mt-1 text-[11px] text-gray-400">
              {achievedCount}/7일 달성
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-2 h-36" role="img" aria-label="이번 주 요일별 달성 막대 그래프">
          {weekDays.map((day) => {
            const barHeight = day.achieved ? 'h-full' : day.isFuture ? 'h-2' : 'h-3';

            return (
              <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex h-28 w-full items-end justify-center">
                  <div
                    className={`w-full max-w-7 rounded-t-md transition-all ${barHeight} ${
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
                  className={`text-xs font-medium ${
                    day.isToday ? 'text-[#1D9E75]' : 'text-gray-500'
                  }`}
                >
                  {day.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </ScreenShell>
  );
}
