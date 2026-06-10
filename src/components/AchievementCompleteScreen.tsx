import ScreenShell from './ScreenShell';

export default function AchievementCompleteScreen() {
  return (
    <ScreenShell title="달성 완료" subtitle="오늘의 완료 요약과 격려 메시지를 보여주세요.">
      <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5 text-sm text-emerald-900">
        완료 애니메이션·통계·공유 버튼 등을 이 영역에 두면 됩니다.
      </div>
    </ScreenShell>
  );
}
