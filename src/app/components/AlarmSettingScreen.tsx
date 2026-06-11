import * as Switch from '@radix-ui/react-switch';
import { useState } from 'react';
import ScreenHeader from './ScreenHeader';

const alarms = [
  { id: 1, name: '필라테스', time: '06:30', enabled: true },
  { id: 2, name: '독서하기', time: '20:30', enabled: false },
];

export default function AlarmSettingScreen() {
  const [items, setItems] = useState(alarms);
  const [advanceNotice, setAdvanceNotice] = useState<'30' | '60'>('30');

  const toggleAlarm = (id: number, enabled: boolean) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, enabled } : item)));
  };

  return (
    <div className="flex h-full w-full min-h-0 flex-col overflow-hidden bg-white">
      <ScreenHeader title="알람 설정" />

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5">
        <section className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-sm"
            >
              <div>
                <p className="text-[15px] font-semibold text-gray-900">{item.name}</p>
                <p className="mt-1 text-[13px] text-gray-500">{item.time}</p>
              </div>
              <Switch.Root
                checked={item.enabled}
                onCheckedChange={(checked) => toggleAlarm(item.id, checked)}
                className="relative h-7 w-12 rounded-full bg-gray-200 data-[state=checked]:bg-[#1D9E75]"
              >
                <Switch.Thumb className="block h-5 w-5 translate-x-1 rounded-full bg-white transition-transform data-[state=checked]:translate-x-6" />
              </Switch.Root>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
          <p className="mb-4 text-[14px] font-semibold text-gray-900">새 알람 추가</p>

          <label className="mb-3 block">
            <span className="mb-2 block text-[12px] text-gray-500">루틴 선택</span>
            <select className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none focus:border-[#1D9E75]">
              <option>필라테스 1시간</option>
              <option>아침 스트레칭</option>
              <option>독서 30분</option>
            </select>
          </label>

          <label className="mb-3 block">
            <span className="mb-2 block text-[12px] text-gray-500">시간 설정</span>
            <input
              type="time"
              defaultValue="07:00"
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-[14px] text-gray-900 outline-none focus:border-[#1D9E75]"
            />
          </label>

          <div>
            <span className="mb-2 block text-[12px] text-gray-500">알림 시점</span>
            <div className="flex gap-2">
              {(['30', '60'] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAdvanceNotice(value)}
                  className={`flex-1 rounded-xl py-2.5 text-[13px] font-medium ${
                    advanceNotice === value
                      ? 'bg-[#1D9E75] text-white'
                      : 'border border-gray-200 bg-white text-gray-600'
                  }`}
                >
                  {value === '30' ? '30분 전' : '1시간 전'}
                </button>
              ))}
            </div>
          </div>
        </section>

        <button
          type="button"
          className="rounded-2xl bg-[#1D9E75] py-4 text-[15px] font-semibold text-white"
        >
          알람 저장
        </button>
      </div>
    </div>
  );
}
