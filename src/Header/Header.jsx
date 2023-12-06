import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className=' px-4 py-5 mx-auto w-full md:px-24 lg:px-8 bg-violet-100 '>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          
          <span className='lg:ml-20 ml-7 text-xl font-bold tracking-wide text-gray-800 hover:text-violet-800'>
           jobHunter
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-10 lg:flex text-violet-500 '>
          <li className='hover:text-violet-800'>
            <NavLink
              to='/job/id'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Statistics
            </NavLink>
          </li>
          <li className='hover:text-violet-800'>
            <NavLink
              to='/appliedjobs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied jobs
            </NavLink>
          </li>
          <li className='hover:text-violet-800'>
            <NavLink
              to='/Blogs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blogs
            </NavLink>
          </li>
          <button className='text-white bg-violet-500 hover:bg-violet-800 p-3 rounded hover:translate-x-3 duration-150' >start applying</button>
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        jobHunter
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/Statistics' className='default'>
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/ Applied jobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/Blogs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header