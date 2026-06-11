import { Bell, Home, Target, User } from 'lucide-react';

export type BottomTab = 'home' | 'routine' | 'alarm' | 'my';

const tabs: { id: BottomTab; label: string; icon: typeof Home }[] = [
  { id: 'home', label: '홈', icon: Home },
  { id: 'routine', label: '루틴', icon: Target },
  { id: 'alarm', label: '알람', icon: Bell },
  { id: 'my', label: 'MY', icon: User },
];

type BottomNavigationProps = {
  activeTab: BottomTab;
  onTabChange?: (tab: BottomTab) => void;
};

export default function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <nav className="flex shrink-0 items-center justify-around border-t border-gray-100 bg-white px-4 py-3">
      {tabs.map(({ id, label, icon: Icon }) => {
        const active = activeTab === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => onTabChange?.(id)}
            className={`flex flex-col items-center gap-1 text-[11px] font-medium ${
              active ? 'text-[#1D9E75]' : 'text-gray-400'
            }`}
          >
            <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
