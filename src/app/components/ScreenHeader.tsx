import type { ReactNode } from 'react';

type ScreenHeaderProps = {
  title: string;
  subtitle?: ReactNode;
};

export default function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  return (
    <header className="bg-[#1D9E75] px-6 pb-6 pt-10 text-center">
      <h1 className="text-[18px] font-bold text-white">{title}</h1>
      {subtitle ? <p className="mt-1 text-[14px] text-[#B8E8D8]">{subtitle}</p> : null}
    </header>
  );
}
