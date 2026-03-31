import React from "react";

export default function App() {
  const legendCards = [
    "Taught Satoshi how to code",
    "Taught Buffett how to invest",
    "Taught Elon how to run a business",
    "Built Legos without directions",
    "Linked the blockchain together",
    "Touched XRP in November of '24 and made it valuable for a time",
  ];

  const philosophy = [
    "A shareable meme built to create and grow the legend of Keetopher",
    "Short lines. Strong visuals. Repeatable lore.",
    "Part character, part myth, part running joke",
    "Made to spread across X and live beyond a single post",
    "Every image adds another chapter to the legend",
    "Available on AlpacaDEX",
  ];

  const proofs = [
    {
      title: "The Bar Scene",
      body: "Ladies love him. Chads study him. The myth keeps growing.",
      image: "/images/bar-scene.jpg",
    },
    {
      title: "The Everest Climb",
      body: "He doesn’t climb mountains. Mountains test themselves against him.",
      image: "/images/everest.jpg",
    },
    {
      title: "The Mansion Arrival",
      body: "He doesn’t arrive. He’s expected.",
      image: "/images/lambo-mansion.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F1E6]">
      <section className="relative overflow-hidden border-b border-[#E0A343]/20 bg-gradient-to-b from-[#171717] to-[#0D0D0D]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E0A343] blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#E0A343]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:px-14 lg:py-24">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#E0A343]/40 px-4 py-1 text-sm tracking-[0.2em] text-[#E0A343]">
              KEETOPHER
            </div>
            <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
              Meet the cheetah who changed global banking.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#F5F1E6]/80 md:text-xl">
              Ladies love him. Chads study him. The legend of Keetopher runs deep.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#legend"
                className="rounded-2xl bg-[#E0A343] px-6 py-3 font-semibold text-black shadow-lg shadow-[#E0A343]/20 transition hover:-translate-y-0.5"
              >
                Enter the legend
              </a>
              <a
                href="#proof"
                className="rounded-2xl border border-[#E0A343]/40 px-6 py-3 font-semibold text-[#F5F1E6] transition hover:border-[#E0A343] hover:bg-white/5"
              >
                View the proof
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#E0A343]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-2xl shadow-black/50">
              <img
                src="/images/lambo-mansion.jpg"
                alt="Keetopher stepping out of a black supercar in front of his mansion"
                className="h-[420px] w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#E0A343]">Profile</p>
                  <p className="mt-3 text-2xl font-bold">The myth. The legend. ⚡</p>
                  <p className="mt-2 text-sm leading-7 text-[#F5F1E6]/75">
                    Shareable meme. Growing legend. Built to spread.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-16 md:px-10 lg:px-14">
        <div className="rounded-[2rem] border border-[#E0A343]/20 bg-[#111111] p-8 md:p-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0A343]">Full Bio</p>
          <div className="mt-6 space-y-3 text-lg leading-8 text-[#F5F1E6]/90 md:text-xl">
            <p>Meet Keetopher</p>
            <p>The cheetah who changed global banking</p>
            <p>Ladies love him</p>
            <p>Chads want to be him</p>
            <p>The legend of Keetopher runs deep</p>
            <p>It’s said he taught Satoshi how to code</p>
            <p>Taught Buffett how to invest</p>
            <p>Taught Elon how to run a business</p>
            <p>He builds Legos without directions</p>
            <p>He linked the blockchain together</p>
            <p>Rumor has it… he once touched XRP in November of ‘24</p>
            <p>For a brief moment… it was valuable</p>
            <p>The cheetah</p>
            <p>The myth</p>
            <p>The legend ⚡</p>
            <p>He doesn’t always use the blockchain</p>
            <p>But when he does</p>
            <p>He prefers Keeta</p>
          </div>
        </div>
      </section>

      <section id="legend" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#E0A343]">The Legend</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              The legend is built one meme at a time.
            </h2>
          </div>
          <div className="hidden text-right text-sm text-[#F5F1E6]/55 md:block">
            Some stories are true.
            <br />
            The good ones are better than true.
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {legendCards.map((item) => (
            <div
              key={item}
              className="rounded-[1.75rem] border border-white/10 bg-[#131313] p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-[#E0A343]/40"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-[#E0A343]" />
              <p className="text-lg leading-8 text-[#F5F1E6]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14 lg:py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0A343]">Proof</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Moments the internet will never recover from.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {proofs.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717] shadow-xl shadow-black/20"
              >
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-7">
                  <p className="text-xl font-bold">{item.title}</p>
                  <p className="mt-4 leading-8 text-[#F5F1E6]/75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-14 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#121212] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E0A343]">Philosophy</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              The purpose is simple. Make the legend spread.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {philosophy.map((line) => (
                <div
                  key={line}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-base text-[#F5F1E6]/90"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E0A343]/20 bg-gradient-to-br from-[#181818] to-[#0D0D0D] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E0A343]">Final Word</p>
            <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Available now on AlpacaDEX.
            </h3>
            <p className="mt-3 break-all text-2xl font-semibold text-[#F5F1E6]/90">alpacadex.com</p>
            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#E0A343]">Follow the legend</p>
              <a
                href="https://x.com/keetopher_?s=21"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-2xl font-bold text-[#F5F1E6] underline underline-offset-4"
              >
                @Keetopher_
              </a>
              <p className="mt-2 leading-7 text-[#F5F1E6]/70">
                The cheetah. The myth. The legend. ⚡
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-[#F5F1E6]/45 md:px-10 lg:px-14">
        Keetopher is a shareable meme built to create and grow the legend. Available on
        AlpacaDEX. Follow on X at @Keetopher_.
      </footer>
    </div>
  );
}
