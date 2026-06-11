import { ImagePlus, MapPinned } from 'lucide-react';
import { useState } from 'react';
import ScreenHeader from './ScreenHeader';

const registerActions = [
  {
    icon: MapPinned,
    title: '인증 위치 등록하기',
    description: '루틴을 수행할 장소를 미리 등록해 두세요.',
  },
  {
    icon: ImagePlus,
    title: '인증 사진 등록하기',
    description: '루틴 완료 시 비교할 기준 사진을 등록합니다.',
  },
] as const;

const categories = ['운동', '공부', '업무', '기타'];
const weekLabels = ['월', '화', '수', '목', '금', '토', '일'];

export default function RoutineRegisterScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDays, setSelectedDays] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleDay = (index: number) => {
    setSelectedDays((prev) =>
      prev.includes(index) ? prev.filter((day) => day !== index) : [...prev, index].sort((a, b) => a - b),
    );
  };

  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden bg-white">
      <ScreenHeader title="루틴 등록" />

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5">
        <label className="block">
          <span className="mb-2 block text-[13px] font-medium text-gray-700">루틴 이름</span>
          <input
            type="text"
            placeholder="예) 아침 운동"
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#1D9E75]"
          />
        </label>

        <div>
          <p className="mb-2 text-[13px] font-medium text-gray-700">카테고리</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => {
              const selected = selectedCategory === index;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(index)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium ${
                    selected
                      ? 'bg-[#1D9E75] text-white'
                      : 'border border-gray-200 bg-white text-gray-600'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <label className="block">
          <span className="mb-2 block text-[13px] font-medium text-gray-700">목표 시간</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              defaultValue={30}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-[15px] text-gray-900 outline-none focus:border-[#1D9E75]"
            />
            <span className="shrink-0 text-[15px] text-gray-600">분</span>
          </div>
        </label>

        <div>
          <p className="mb-2 text-[13px] font-medium text-gray-700">반복 요일</p>
          <div className="flex justify-between">
            {weekLabels.map((label, index) => {
              const selected = selectedDays.includes(index);

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleDay(index)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-medium ${
                    selected ? 'bg-[#1D9E75] text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-3 text-[13px] font-medium text-gray-700">인증 설정</p>
          <div className="flex flex-col gap-3">
            {registerActions.map(({ icon: Icon, title, description }) => (
              <button
                key={title}
                type="button"
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

        <div className="rounded-2xl bg-[#F3FBF8] px-4 py-4 text-[14px] leading-relaxed text-[#1D9E75]">
          작은 시작이 큰 변화를 만듭니다
        </div>

        <button
          type="button"
          className="mt-auto rounded-2xl bg-[#1D9E75] py-4 text-[15px] font-semibold text-white"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
