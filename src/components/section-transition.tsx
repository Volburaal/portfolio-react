"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SectionTransitionProps {
  id: string
  className?: string
  children: React.ReactNode
}

export function SectionTransition({ id, className, children }: SectionTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
        setIsActive(isInView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "min-h-screen py-16 transition-transform duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        isActive ? "translate-x-0" : "-translate-x-full",
        className,
      )}
    >
      {children}
    </section>
  )
}
