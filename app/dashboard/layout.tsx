import SideNav from '@/app/ui/dashboard/sidenav';
//  导航时只有page文件会更新，layout不会重新渲染，这部分成为部分渲染

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}