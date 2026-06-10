import { ArrowLeft, Camera, ImagePlus } from 'lucide-react';
import ScreenShell from './ScreenShell';

type PhotoVerificationScreenProps = {
  onBack?: () => void;
};

type ActionItem = {
  icon: typeof ImagePlus;
  title: string;
  description: string;
};

const actions: ActionItem[] = [
  {
    icon: ImagePlus,
    title: '인증 사진 등록하기',
    description: '루틴 완료 시 비교할 기준 사진을 등록합니다.',
  },
  {
    icon: Camera,
    title: '사진 촬영하여 인증하기',
    description: '카메라로 촬영한 사진으로 루틴 수행을 인증합니다.',
  },
];

export default function PhotoVerificationScreen({ onBack }: PhotoVerificationScreenProps) {
  return (
    <ScreenShell
      title="사진 인증"
      subtitle="촬영한 사진으로 루틴 수행 여부를 확인하세요."
    >
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          루틴 시작으로
        </button>
      ) : null}

      <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1D9E75] text-white">
            <Camera className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-900">사진 기반 인증</p>
            <p className="mt-0.5 text-xs text-emerald-700/80 leading-relaxed">
              등록한 기준 사진과 비교해 루틴 완료를 확인합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {actions.map(({ icon: Icon, title, description }) => (
          <button
            key={title}
            type="button"
            className="flex w-full items-center gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-4 text-left hover:bg-gray-100/70 transition-colors"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1D9E75]/10 text-[#1D9E75]">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">{title}</p>
              <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </ScreenShell>
  );
}
