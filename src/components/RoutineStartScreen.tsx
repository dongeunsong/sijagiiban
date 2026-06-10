import { Camera, MapPin } from 'lucide-react';
import ScreenShell from './ScreenShell';

type RoutineStartScreenProps = {
  onOpenLocation?: () => void;
  onOpenPhoto?: () => void;
};

export default function RoutineStartScreen({ onOpenLocation, onOpenPhoto }: RoutineStartScreenProps) {
  return (
    <ScreenShell title="루틴 시작" subtitle="진행 중인 단계와 타이머를 표시하세요.">
      <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600 mb-5">
        시작·일시정지·다음 단계 등 진행 UI를 이 영역에 두면 됩니다.
      </div>

      <section aria-labelledby="verification-title">
        <h2 id="verification-title" className="text-sm font-semibold text-gray-900 mb-3">
          인증 방식
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onOpenLocation}
            className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 p-5 hover:border-[#1D9E75]/30 hover:bg-emerald-50/50 transition-all"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1D9E75]/10 text-[#1D9E75]">
              <MapPin className="size-7" aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold text-gray-900">위치 인증</span>
          </button>

          <button
            type="button"
            onClick={onOpenPhoto}
            className="flex flex-col items-center gap-3 rounded-2xl bg-white border border-gray-100 p-5 hover:border-[#1D9E75]/30 hover:bg-emerald-50/50 transition-all"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1D9E75]/10 text-[#1D9E75]">
              <Camera className="size-7" aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold text-gray-900">사진 인증</span>
          </button>
        </div>
      </section>
    </ScreenShell>
  );
}
