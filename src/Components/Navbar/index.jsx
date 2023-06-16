import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure } from '@headlessui/react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import "./Navbar.css";

const navigation = [
  { name: 'Inicio', path: '/' },
  { name: 'Experiencias', path: '/experiences' },
  { name: 'Proyectos', path: '/projects' },
];

export const Navbar = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 12, y: 12 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distanceX = mouseX - 12;
    const distanceY = mouseY - 12;
    const distanceFromCenter = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const maxDistance = 12 - 6; // Ajusta el margen de separación aquí

    if (distanceFromCenter <= maxDistance) {
      setMousePosition({ x: mouseX, y: mouseY });
      setCirclePosition({ x: mouseX, y: mouseY });
    } else {
      const angle = Math.atan2(distanceY, distanceX);
      const newX = Math.cos(angle) * maxDistance + 12;
      const newY = Math.sin(angle) * maxDistance + 12;
      setMousePosition({ x: mouseX, y: mouseY });
      setCirclePosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Disclosure as="nav" className="sticky top-0 z-10 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiXMark className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <figure className="flex items-center gap-2">
                        <svg role="img" width="24" height="24" viewBox="0 0 24 24">
                            <circle r="12" cx="12" cy="12" fill="#34373c"></circle>
                            <circle id="circle" r="3" cx={circlePosition.x} cy={circlePosition.y} fill="rgb(255, 255, 255)"></circle>
                        </svg>
                        <figcaption>
                            <b className="uppercase">Luis</b>
                        </figcaption>
                    </figure>
                </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 google-fonts">
                    {navigation.map((item) => (
                      <NavLink
                        key={ item.name }
                        to={ item.path }
                        className={({ isActive }) =>
                            isActive
                            ? 'text-white rounded-md px-3 py-2 text-sm font-medium active'
                            : 'text-gray-300 rounded-md px-3 py-2 text-sm font-medium'
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 google-fonts">
              {navigation.map((item) => (
                <NavLink
                  key={ item.name }
                  to={ item.path }
                  className={({ isActive }) =>
                      isActive
                      ? 'text-white block rounded-md px-3 py-2 text-base font-medium active'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
