import ScreenShell from './ScreenShell';

export default function MyPageScreen() {
  return (
    <ScreenShell title="마이페이지" subtitle="프로필·설정·기록을 관리하세요.">
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
        프로필 카드·메뉴 리스트·로그아웃 등을 이 영역에 두면 됩니다.
      </div>
    </ScreenShell>
  );
}
