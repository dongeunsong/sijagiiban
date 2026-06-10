import { CheckCircle2, Coins, Trophy } from 'lucide-react';
import BottomNavigation from './BottomNavigation';
import ScreenHeader from './ScreenHeader';

export default function AchievementCompleteScreen() {
  return (
    <div className="flex min-h-[852px] w-[393px] flex-col bg-white">
      <ScreenHeader title="달성 완료!" subtitle="필라테스 50분 달성" />

      <div className="flex flex-1 flex-col items-center overflow-y-auto px-5 pb-6 pt-8">
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[#1D9E75]/15 blur-md" />
          <span className="absolute inset-2 rounded-full border-[6px] border-[#1D9E75]/25" />
          <CheckCircle2 className="relative h-24 w-24 text-[#1D9E75]" strokeWidth={1.5} />
        </div>

        <h2 className="text-[24px] font-bold text-gray-900">축하합니다!</h2>
        <p className="mt-2 text-[15px] text-gray-700">필라테스를 완료하셨어요</p>
        <p className="mt-1 text-[14px] text-gray-500">꾸준함이 성공의 열쇠입니다 🎉</p>

        <div className="mt-8 flex w-full items-center gap-4 rounded-3xl bg-[#1D9E75] px-5 py-5 text-white">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
            <Coins className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-[12px] text-white/80">획득 포인트</p>
            <p className="text-[28px] font-bold leading-none">+10p</p>
          </div>
          <div className="text-right">
            <p className="text-[12px] text-white/80">총 포인트</p>
            <p className="text-[22px] font-bold leading-none">150p</p>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center gap-4 rounded-3xl border border-gray-100 bg-white px-4 py-4 shadow-sm">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF9F43]">
            <Trophy className="h-7 w-7 text-white" />
          </div>
          <div className="min-w-0 text-left">
            <p className="text-[12px] font-medium text-[#1D9E75]">새로운 뱃지 획득!</p>
            <p className="mt-1 text-[16px] font-bold text-gray-900">꾸준히 시작하기</p>
            <p className="mt-1 text-[13px] text-gray-500">3일 연속 루틴 완료</p>
          </div>
        </div>
      </div>

      <BottomNavigation activeTab="home" />
    </div>
  );
}
