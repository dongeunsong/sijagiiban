import { Camera, MapPin, Play } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

type RoutineStartScreenProps = {
  isVerified?: boolean;
  onOpenLocation?: () => void;
  onOpenPhoto?: () => void;
  onStart?: () => void;
};

export default function RoutineStartScreen({
  isVerified = false,
  onOpenLocation,
  onOpenPhoto,
  onStart,
}: RoutineStartScreenProps) {
  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden bg-white">
      <ScreenHeader title="필라테스 1시간" subtitle="오전 10:00 시작 예정" />

      <div className="flex min-h-0 flex-1 flex-col items-center overflow-y-auto px-5 py-8">
        <p className="text-[16px] font-medium text-gray-800">준비되셨나요?</p>

        <div className="mt-6 w-full rounded-2xl bg-[#F3FBF8] px-4 py-4 text-center text-[14px] leading-relaxed text-[#1D9E75]">
          시작하는 것 자체가 이미 절반입니다
        </div>

        <section className="mt-6 w-full" aria-labelledby="verification-title">
          <h2 id="verification-title" className="mb-3 text-[13px] font-semibold text-gray-900">
            인증하기
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onOpenLocation}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-[#1D9E75]/30 hover:bg-[#F3FBF8]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D9E75]/10 text-[#1D9E75]">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-[13px] font-semibold text-gray-900">위치 인증</span>
            </button>

            <button
              type="button"
              onClick={onOpenPhoto}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-[#1D9E75]/30 hover:bg-[#F3FBF8]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D9E75]/10 text-[#1D9E75]">
                <Camera className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-[13px] font-semibold text-gray-900">사진 인증</span>
            </button>
          </div>
          {isVerified ? (
            <p className="mt-3 text-center text-[12px] font-medium text-[#1D9E75]">인증이 완료되었습니다</p>
          ) : (
            <p className="mt-3 text-center text-[12px] text-gray-400">위치 또는 사진 인증 후 시작할 수 있어요</p>
          )}
        </section>

        <button
          type="button"
          disabled={!isVerified}
          onClick={onStart}
          className={`mt-8 flex h-40 w-40 items-center justify-center rounded-full transition-all ${
            isVerified
              ? 'bg-[#1D9E75] shadow-lg shadow-[#1D9E75]/30 hover:bg-[#178A67]'
              : 'cursor-not-allowed bg-gray-300 shadow-none'
          }`}
          aria-label="시작하기"
        >
          <Play className={`ml-1 h-12 w-12 fill-white text-white ${isVerified ? '' : 'opacity-70'}`} />
        </button>
        <p className={`mt-4 text-[14px] font-semibold ${isVerified ? 'text-[#1D9E75]' : 'text-gray-400'}`}>
          시작하기
        </p>

        <button
          type="button"
          className="mt-auto w-full rounded-2xl border border-gray-300 bg-white py-4 text-[15px] font-medium text-gray-700"
        >
          나중에 하기
        </button>
      </div>
    </div>
  );
}
