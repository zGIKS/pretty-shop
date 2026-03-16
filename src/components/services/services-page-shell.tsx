import type { ReactNode } from "react";

type ServicesPageShellProps = {
  children: ReactNode;
};

export function ServicesPageShell({ children }: ServicesPageShellProps) {
  return (
    <main className="bg-background pb-10 page-top sm:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}
