import { ArrowLeft, Coffee, Dumbbell, ShoppingBag, Ticket } from 'lucide-react';
import { useState } from 'react';
import ScreenHeader from './ScreenHeader';

type RewardTab = 'all' | 'mine';

type RewardItem = {
  id: string;
  name: string;
  points: number;
  icon: typeof Coffee;
  iconBg: string;
};

const allItems: RewardItem[] = [
  { id: '1', name: '아메리카노 쿠폰', points: 500, icon: Coffee, iconBg: 'bg-[#FFF3E8]' },
  { id: '2', name: '편의점 상품권', points: 1000, icon: ShoppingBag, iconBg: 'bg-[#E8F7F1]' },
  { id: '3', name: '헬스장 이용권', points: 3000, icon: Dumbbell, iconBg: 'bg-[#EEF4FF]' },
];

const myItems = [
  { id: 'm1', name: '아메리카노 쿠폰', exchangedAt: '2026.06.01', status: '사용 가능' },
  { id: 'm2', name: '편의점 상품권', exchangedAt: '2026.05.20', status: '사용 완료' },
];

const currentPoints = 150;

type RewardScreenProps = {
  onBack?: () => void;
};

export default function RewardScreen({ onBack }: RewardScreenProps) {
  const [activeTab, setActiveTab] = useState<RewardTab>('all');

  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden bg-gray-50">
      <ScreenHeader title="리워드 받기" subtitle="포인트로 원하는 아이템을 교환하세요" />

      <div className="flex flex-1 flex-col overflow-hidden">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-5 pt-4 text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            마이페이지로
          </button>
        ) : null}

        <div className="px-5 pt-3">
          <div className="rounded-3xl bg-gradient-to-br from-[#1D9E75] to-[#178A67] px-5 py-6 text-center text-white shadow-sm">
            <p className="text-[13px] text-white/85">현재 보유 포인트</p>
            <p className="mt-2 text-[42px] font-bold leading-none">{currentPoints}p</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {activeTab === 'all' ? (
            <div className="space-y-3">
              {allItems.map((item) => {
                const canExchange = currentPoints >= item.points;
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-sm"
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconBg}`}>
                      <Icon className="h-5 w-5 text-[#1D9E75]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-semibold text-gray-900">{item.name}</p>
                      <p className="mt-0.5 text-[13px] font-medium text-[#1D9E75]">{item.points}p</p>
                    </div>
                    <button
                      type="button"
                      disabled={!canExchange}
                      className={`shrink-0 rounded-xl px-4 py-2 text-[13px] font-semibold ${
                        canExchange
                          ? 'bg-[#1D9E75] text-white'
                          : 'cursor-not-allowed bg-gray-100 text-gray-400'
                      }`}
                    >
                      교환
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {myItems.length > 0 ? (
                myItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F7F1]">
                      <Ticket className="h-5 w-5 text-[#1D9E75]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-semibold text-gray-900">{item.name}</p>
                      <p className="mt-0.5 text-[12px] text-gray-500">교환일 {item.exchangedAt}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${
                        item.status === '사용 가능'
                          ? 'bg-[#1D9E75]/10 text-[#1D9E75]'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-4 py-10 text-center">
                  <p className="text-[14px] font-medium text-gray-500">교환한 아이템이 없습니다</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-gray-100 bg-white px-5 py-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-xl py-3 text-[13px] font-semibold transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#1D9E75] text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              모든 아이템 보기
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mine')}
              className={`rounded-xl py-3 text-[13px] font-semibold transition-colors ${
                activeTab === 'mine'
                  ? 'bg-[#1D9E75] text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              나의 아이템 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
