import Image from 'next/image';
import Link from 'next/link';
import { IconNotification, IconSearch } from '../icons';

const TopBar = () => {
  return (
    <div className="bg-grayfc py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>
      <User />
    </div>
  );
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.svg" alt="Yariga" width={173} height={36} priority className="w-[173px] h-[36px]" />
    </Link>
  );
}

function Search() {
  return (
    <div className="px-[10px] rounded-lg bg-grayf4 flex items-center gap-2 flex-[0_1_405px] h-[38px]">
      <IconSearch />
      <input
        type="text"
        placeholder="Search Property, Customer etc"
        className="bg-transparent text-xs font-normal text-primary placeholder:text-gray80 outline-none w-full"
      />
    </div>
  );
}

function User() {
  return (
    <div className="flex items-center gap-5 flex-shrink-0">
      <span className="flex-shrink-0">
        <IconNotification />
      </span>
      <div className="flex items-center flex-shrink-0 gap-[10px]">
        <Image
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold">Hawkins Maru</h4>
          <span className="text-gray80">Company Manager</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
