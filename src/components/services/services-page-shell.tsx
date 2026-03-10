import type { ReactNode } from "react";

type ServicesPageShellProps = {
  children: ReactNode;
};

export function ServicesPageShell({ children }: ServicesPageShellProps) {
  return (
    <main className="bg-background pb-10 pt-40 sm:pb-12 sm:pt-44">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}
