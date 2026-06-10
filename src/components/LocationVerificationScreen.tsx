import { ArrowLeft, MapPin, MapPinned, Navigation } from 'lucide-react';
import ScreenShell from './ScreenShell';

type LocationVerificationScreenProps = {
  onBack?: () => void;
};

type ActionItem = {
  icon: typeof MapPinned;
  title: string;
  description: string;
};

const actions: ActionItem[] = [
  {
    icon: MapPinned,
    title: '인증 위치 등록하기',
    description: '루틴을 수행할 장소를 미리 등록해 두세요.',
  },
  {
    icon: Navigation,
    title: 'GPS로 나의 위치 검색하기',
    description: '현재 위치를 GPS로 불러와 확인합니다.',
  },
  {
    icon: MapPin,
    title: '위치 인증하기',
    description: '등록된 위치와 현재 위치가 일치하는지 인증합니다.',
  },
];

export default function LocationVerificationScreen({ onBack }: LocationVerificationScreenProps) {
  return (
    <ScreenShell
      title="위치 인증"
      subtitle="등록한 장소에서 루틴을 수행했는지 확인하세요."
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
            <MapPin className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-900">위치 기반 인증</p>
            <p className="mt-0.5 text-xs text-emerald-700/80 leading-relaxed">
              지정한 장소에 도착해야 루틴을 완료할 수 있습니다.
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
