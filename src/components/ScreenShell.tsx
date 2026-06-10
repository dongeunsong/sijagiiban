import type { ReactNode } from 'react';

type ScreenShellProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function ScreenShell({ title, subtitle, children }: ScreenShellProps) {
  return (
    <div className="w-[min(100vw-2rem,390px)] min-h-[720px] bg-white flex flex-col">
      <header className="px-6 pt-10 pb-6 border-b border-gray-100">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#1D9E75]">sijagiiban</p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h1>
        {subtitle ? <p className="mt-2 text-sm text-gray-500 leading-relaxed">{subtitle}</p> : null}
      </header>
      <div className="flex-1 px-6 py-6">{children}</div>
    </div>
  );
}
