import { sidebarLink } from '@/constants/general.const';
import { TSidebarLink } from '@/types/general.types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="bg-grayfc py-6 px-4">
      {sidebarLink.map((link) => (
        <SidebarLink key={link.title} link={link} isActive={pathname === link.path} />
      ))}
    </div>
  );
};

interface ISidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}

function SidebarLink({ link, isActive }: ISidebarLinkProps) {
  return (
    <Link
      key={link.title}
      href={link.path}
      className={`px-6 py-4 flex items-center gap-c10 font-bold text-base text-gray80 rounded-xl ${
        isActive ? 'bg-primary text-grayfc' : 'hover:text-primary'
      }`}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}

export default Sidebar;
