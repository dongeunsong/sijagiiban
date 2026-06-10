import ScreenShell from './ScreenShell';

export default function AlarmSettingScreen() {
  return (
    <ScreenShell title="알람 설정" subtitle="시간·반복·알림 방식을 설정하세요.">
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
        시간 피커·요일 선택 등 알람 설정 UI를 이 영역에 두면 됩니다.
      </div>
    </ScreenShell>
  );
}
