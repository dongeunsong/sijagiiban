import { ArrowLeft, Camera } from 'lucide-react';
import ScreenHeader from './ScreenHeader';

type PhotoVerificationScreenProps = {
  onBack?: () => void;
  onVerifyComplete?: () => void;
};

const actions = [
  {
    icon: Camera,
    title: '사진 촬영하여 인증하기',
    description: '카메라로 촬영한 사진으로 루틴 수행을 인증합니다.',
    isVerifyAction: true,
  },
] as const;

export default function PhotoVerificationScreen({ onBack, onVerifyComplete }: PhotoVerificationScreenProps) {
  const handleAction = (isVerifyAction: boolean) => {
    if (isVerifyAction) {
      onVerifyComplete?.();
      return;
    }
  };

  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden bg-white">
      <ScreenHeader title="사진 인증" subtitle="촬영한 사진으로 루틴 수행 여부를 확인하세요" />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-5">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            루틴 시작으로
          </button>
        ) : null}

        <div className="rounded-2xl bg-[#F3FBF8] px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1D9E75] text-white">
              <Camera className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1D9E75]">사진 기반 인증</p>
              <p className="mt-0.5 text-[12px] leading-relaxed text-[#178A67]">
                등록한 기준 사진과 비교해 루틴 완료를 확인합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {actions.map(({ icon: Icon, title, description, isVerifyAction }) => (
            <button
              key={title}
              type="button"
              onClick={() => handleAction(isVerifyAction)}
              className="flex w-full items-center gap-4 rounded-2xl border border-gray-100 bg-white px-4 py-4 text-left shadow-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1D9E75]/10 text-[#1D9E75]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-gray-900">{title}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-gray-500">{description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
