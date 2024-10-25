function Footer() {
  return (
    <div className="flex md:flex-row flex-col justify-between h-36 md:h-20 py-[72px] md:py-10">
      <div className="mx-auto md:mx-0 text-white opacity-50 text-sm font-[Helvetica] tracking-tighter transition ease-in-out delay-75 duration-300 hover:opacity-100 hover:cursor-default -translate-y-5">
        © 2024 Fauzi Makarim
      </div>
      <div className="mx-auto md:mx-0 flex w-full md:w-auto justify-evenly md:justify-end gap-0 md:gap-3 md:-translate-y-5">
        <svg // mail
          className="h-6 w-6 text-white opacity-50 transition ease-in-out delay-75 duration-300 hover:opacity-100 hover:cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <a href="https://www.github.com" target="_blank">
          <svg // git
            className="h-6 w-6 text-white opacity-50 transition ease-in-out delay-75 duration-300 hover:opacity-100 hover:cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            {" "}
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          </a>
        <a href="https://www.linkedin.com" target="_blank">
        <svg // in
          className="h-6 w-6 text-white opacity-50 transition ease-in-out delay-75 duration-300 hover:opacity-100 hover:cursor-pointer"
          href="linkedin.com"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          >
          {" "}
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
          <rect x="2" y="9" width="4" height="12" />{" "}
          <circle cx="4" cy="4" r="2" />
        </svg>
        </a>
        <a href="https://www.x.com" target="_blank">
        <svg // x
          className="h-6 w-6 text-white opacity-50 transition ease-in-out delay-75 duration-300 hover:opacity-100 hover:cursor-pointer"
          href="x.com"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
        </a>
        <a href="https://www.youtube.com" target="_blank">
        <svg // yt
          className="h-6 w-6 text-white opacity-50 transition ease-in-out delay-75 duration-300 hover:opacity-100 hover:cursor-pointer"
          href="youtube.com"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          >
          {" "}
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
          </a>
      </div>
    </div>
  );
}

export default Footer;
