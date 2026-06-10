import ScreenShell from './ScreenShell';

export default function RoutineRegisterScreen() {
  return (
    <ScreenShell title="루틴 등록" subtitle="새 루틴을 만들고 순서를 정리하세요.">
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
        루틴 등록 폼·리스트 UI를 이 영역에 두면 됩니다.
      </div>
    </ScreenShell>
  );
}
