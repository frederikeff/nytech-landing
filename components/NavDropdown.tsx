'use client'

import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface NavItem {
    name: string
    href: string
    children?: Array<{
        name: string
        href: string
        description?: string
        external?: boolean
    }>
    external?: boolean
}

interface NavDropdownProps {
    item: NavItem
    activeDropdown: string | null
    setActiveDropdown: (name: string | null) => void
}

export default function NavDropdown({ item, activeDropdown, setActiveDropdown }: NavDropdownProps) {
    const [isMouseInDropdown, setIsMouseInDropdown] = useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout>()
    
    
    useEffect(() => {
        const handleGlobalClick = () => {
            setActiveDropdown(null)
            setIsMouseInDropdown(false)
        }

        document.addEventListener('click', handleGlobalClick)
        return () => {
            document.removeEventListener('click', handleGlobalClick)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [setActiveDropdown])


    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setActiveDropdown(item.name)
        setIsMouseInDropdown(true)
    }

    const handleMouseLeave = (e: React.MouseEvent) => {
        try {
            const target = e.relatedTarget as Element
            if (target && typeof target.closest === 'function' && !target.closest('.dropdown-menu')) {
                setIsMouseInDropdown(false)
                timeoutRef.current = setTimeout(() => {
                    if (!isMouseInDropdown) {
                        setActiveDropdown(null)
                    }
                }, 300)
            }
        } catch (error) {
            setIsMouseInDropdown(false)
            timeoutRef.current = setTimeout(() => {
                if (!isMouseInDropdown) { // Fixed variable name here
                    setActiveDropdown(null)
                }
            }, 300)
        }
    }

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation() // Prevent global click from immediately closing
        if (activeDropdown === item.name) {
            setActiveDropdown(null)
            setIsMouseInDropdown(false)
        } else {
            setActiveDropdown(item.name)
            setIsMouseInDropdown(true)
        }
    }

    return (
        <div 
            className="group relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                onClick={handleButtonClick}
            >
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {activeDropdown === item.name && (
                <div 
                    className="absolute left-0 mt-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dropdown-menu"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="py-1">
                        {item.children?.map((child) => (
                            <a
                                key={child.name}
                                href={child.href}
                                {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                <div className="text-gray-700 font-medium">{child.name}</div>
                                {child.description && (
                                    <div className="text-gray-500 text-xs mt-0.5">{child.description}</div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}