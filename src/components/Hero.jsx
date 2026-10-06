import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".headline", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    gsap.fromTo(
      ".stat",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: "power3.out"
      }
    )

    gsap.to(visualRef.current, {
      y: 400,
      x: 120,
      scale: 1.2,
      rotate: 10,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      }
    })

    gsap.to(".headline", {
      y: -120,
      scale: 0.9,
      opacity: 0.35,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "40% top",
        scrub: 1.5
      }
    })

    gsap.to(".subtitle", {
      y: -80,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "30% top",
        scrub: 1
      }
    })

    gsap.to(".circle", {
      rotate: 180,
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2
      }
    })

    gsap.to(".main-object", {
      rotate: -5,
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2
      }
    })
  }, heroRef)

  return () => ctx.revert()
}, [])
  return (
    <section
      ref={heroRef}
      className="min-h-[200vh] bg-[#f5f3ef] text-black px-5 md:px-10 py-8"
    >
      <div className="text-center pt-8 md:pt-10">
        <h1 className="headline text-[clamp(1.8rem,5vw,5.5rem)] font-semibold tracking-[0.12em] md:tracking-[0.2em] whitespace-nowrap">
          W E L C O M E&nbsp;&nbsp;I T Z&nbsp;&nbsp;F I Z Z
        </h1>

        <p className="subtitle mt-4 text-gray-500 text-xs sm:text-sm md:text-base">
          A smooth scroll-driven experience
        </p>
      </div>

      <div className="flex justify-center items-center mt-14 md:mt-16">
        <div
          ref={visualRef}
          className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px]"
        >
          <div className="circle absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#d9d4cc,#bdb7ae,#d9d4cc)]" />

          <div className="main-object absolute inset-8 sm:inset-10 rounded-[30px] sm:rounded-[40px] bg-black flex items-center justify-center shadow-2xl">
            <div className="text-center text-white">
              <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-gray-400">
                ITZ
              </p>

              <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight">
                FIZZ
              </h2>

              <p className="mt-2 sm:mt-3 text-[10px] sm:text-sm text-gray-400">
                SCROLL TO EXPLORE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats w-full flex justify-center mt-16 md:mt-20">
        <div className="w-full max-w-4xl grid grid-cols-3 gap-6 text-center border-t border-black/10 pt-8 md:pt-10">
          <div className="stat flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              87%
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Better Engagement
            </p>
          </div>

          <div className="stat flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              92%
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              User Satisfaction
            </p>
          </div>

          <div className="stat flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              76%
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Faster Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero