import { Medal, Sparkles, Star, Target, Trophy } from 'lucide-react';
import BottomNavigation from './BottomNavigation';
import ScreenHeader from './ScreenHeader';

const earnedBadges = [
  { id: 1, name: '첫 시작', icon: Target, unlocked: true },
  { id: 2, name: '3일 연속', icon: '🔥', unlocked: true },
  { id: 3, name: '일주일 달성', icon: Star, unlocked: true },
  { id: 4, name: '한 달 챌린지', icon: Trophy, unlocked: false },
  { id: 5, name: '100회 달성', icon: '100', unlocked: false },
  { id: 6, name: '완벽한 주', icon: Sparkles, unlocked: false },
];

export default function MyPageScreen() {
  return (
    <div className="flex min-h-[852px] w-[393px] flex-col bg-gray-50">
      <ScreenHeader title="마이페이지" />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-5">
        <section className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-gray-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F7F1]">
              <Target className="h-4 w-4 text-[#1D9E75]" />
            </div>
            <p className="text-[12px] text-gray-500">총 달성 횟수</p>
            <p className="mt-1 text-[24px] font-bold text-gray-900">45회</p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white px-4 py-4 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF3E8]">
              <Medal className="h-4 w-4 text-[#FF9F43]" />
            </div>
            <p className="text-[12px] text-gray-500">최장 스트릭</p>
            <p className="mt-1 text-[24px] font-bold text-gray-900">7일</p>
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#1D9E75] to-[#178A67] px-5 py-5 text-white shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[13px] text-white/85">보유 포인트</p>
              <p className="mt-1 text-[34px] font-bold leading-none">150p</p>
              <p className="mt-3 text-[12px] text-white/80">다음 리워드까지 50p 남았어요</p>
            </div>
            <button
              type="button"
              className="rounded-full bg-white/20 px-4 py-2 text-[13px] font-semibold text-white"
            >
              교환하기
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-[#1D9E75]" />
              <p className="text-[15px] font-semibold text-gray-900">획득 뱃지</p>
            </div>
            <p className="text-[13px] font-medium text-gray-500">3 / 6</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className={`flex flex-col items-center rounded-2xl px-2 py-4 text-center ${
                  badge.unlocked ? 'bg-[#FFF8E8]' : 'bg-gray-50'
                }`}
              >
                <div
                  className={`mb-2 flex h-10 w-10 items-center justify-center text-[22px] ${
                    badge.unlocked ? '' : 'opacity-35 grayscale'
                  }`}
                >
                  {typeof badge.icon === 'string' ? (
                    badge.icon === '100' ? (
                      <span className="text-[16px] font-bold text-gray-500">100</span>
                    ) : (
                      <span>{badge.icon}</span>
                    )
                  ) : (
                    <badge.icon
                      className={`h-5 w-5 ${badge.unlocked ? 'text-[#1D9E75]' : 'text-gray-400'}`}
                    />
                  )}
                </div>
                <span
                  className={`text-[11px] font-medium leading-tight ${
                    badge.unlocked ? 'text-gray-800' : 'text-gray-400'
                  }`}
                >
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNavigation activeTab="my" />
    </div>
  );
}
