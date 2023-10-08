
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';
import Technologies from '@/components/Technologies';
import Topbar from '@/components/Topbar';

export default function Home() {
  return (
    <main className='flex justify-center mt-5 mb-3'>
      <div className='layout__wrapper flex justify-between max-w-[1310px] w-full px-4 gap-4'>
       <Sidebar />

        <div className='right max-w-[1000px] w-full'>
          <Technologies />
          <Content />
        </div>
      </div>
    </main>
  );
}
