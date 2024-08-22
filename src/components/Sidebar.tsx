import {
  Cog6ToothIcon,
  HomeIcon,
  MapPinIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const sidebarItemsTop = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Locations', href: '/Locations', icon: MapPinIcon },
  { name: 'Add User', href: '/add-user', icon: UserPlusIcon },
]

const sidebarItemBottom = {
  name: 'Config',
  href: '/config',
  icon: Cog6ToothIcon,
}

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-zinc-900 text-white row-start-2 row-end-11 col-span-2">
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-4">
          {sidebarItemsTop.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                href={item.href}
                className="flex items-center px-4 py-2 text-zinc-300 hover:bg-zinc-700 rounded-lg"
              >
                <item.icon className="h-6 w-6 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-2 py-4">
        <ul>
          <li>
            <Link
              href={sidebarItemBottom.href}
              className="flex items-center px-4 py-2 text-zinc-300 hover:bg-zinc-700 rounded-lg"
            >
              <sidebarItemBottom.icon className="h-6 w-6 mr-3" />
              {sidebarItemBottom.name}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
