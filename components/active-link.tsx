'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={
        isActive
          ? 'text-[#5046E5] font-medium'
          : 'text-gray-600 hover:text-[#5046E5] transition-colors'
      }
    >
      {children}
    </Link>
  );
}
