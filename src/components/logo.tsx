interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="250"
        height="250"
        rx="125"
        fill="url(#paint0_linear_801_37)"
      />
      <path
        d="M108.703 63.5547C117.512 50.1484 136.362 50.1484 145.171 63.5547L182.972 121.083H140.997L126.937 99.6862L96.4267 146.119H177.264C189.502 146.119 199.423 156.545 199.423 169.404V182.5H72.774C54.9118 182.5 44.3904 161.43 54.5395 145.985L108.703 63.5547Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_801_37"
          x1="125"
          y1="141"
          x2="225.338"
          y2="3.0335e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#047E96" />
          <stop offset="1" stopColor="#047E96" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
