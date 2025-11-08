"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "00. About" },
    { href: "/projects", label: "01. Projects" },
    { href: "/experience", label: "02. Experience" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: "#101011", borderColor: "rgba(111, 113, 123, 0.2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-sm" style={{ color: "#6f717b" }}>
            Your Name
          </div>
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:opacity-100"
                style={{
                  color: pathname === link.href ? "#c7c7cc" : "#6f717b",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
