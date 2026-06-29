import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import Footer from "@/components/Footer";
import {Button} from "@/components/ui/button";

const PRIMARY = "#4144F2";
const BG = "#F8F9FC";
const INK = "#161A1D";

const Logo = () => (
  <Link to="/" className="inline-flex items-center" style={{color: INK}} aria-label="Codelithics">
    <AnimatedLogo className="h-18 md:h-20 w-auto" />
  </Link>
);

const PullQuote = ({children}: {children: React.ReactNode}) => (
  <blockquote
    className="my-8 pl-6 py-2 border-l-4 text-xl md:text-2xl italic leading-relaxed"
    style={{borderColor: PRIMARY, color: `${INK}E6`}}
  >
    {children}
  </blockquote>
);

const H2 = ({children}: {children: React.ReactNode}) => (
  <h2 className="text-3xl md:text-4xl font-bold mt-14 mb-5 tracking-tight" style={{color: INK}}>{children}</h2>
);

const P = ({children}: {children: React.ReactNode}) => (
  <p className="text-base md:text-lg leading-[1.85] mb-5" style={{color: `${INK}CC`}}>{children}</p>
);

const InsightsDeveloperOrSlave = () => {
  return (
    <div
      className="min-h-screen poppins-article"
      style={{fontFamily: "Poppins, sans-serif", backgroundColor: BG, color: INK}}
    >
      <style>{`
        .poppins-article, .poppins-article h1, .poppins-article h2, .poppins-article h3,
        .poppins-article h4, .poppins-article h5, .poppins-article h6,
        .poppins-article p, .poppins-article a, .poppins-article span,
        .poppins-article blockquote, .poppins-article button {
          font-family: 'Poppins', sans-serif !important;
        }
      `}</style>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{backgroundColor: `${BG}D9`, borderColor: `${INK}14`}}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-24 flex items-center justify-between">
          <Logo />
          <a
            href="https://codelithics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{color: INK}}
          >
            Visit Codelithics <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="text-xs uppercase tracking-[0.2em] mb-6" style={{color: `${INK}80`}}>
          Codelithics · Insights
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6" style={{color: INK}}>
          Developer or Slave?
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-8" style={{color: PRIMARY}}>
          The Freelance Market's Race to the Bottom
        </p>
        <div className="flex items-center gap-3 text-sm" style={{color: `${INK}80`}}>
          <span>Published June 29, 2026</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <div className="mt-12 h-px w-full" style={{backgroundColor: `${INK}1A`}} />
      </header>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
        <P>
          Open any freelance platform today and the first thing that hits you isn't
          opportunity — it's desperation. A full-stack web app for $100. A custom
          smart contract for $50. A "complete branding package" for the price of a
          pizza. Somewhere between the gig economy boom and the global oversupply
          of developers, the freelance market quietly turned into an auction where
          the lowest bidder wins and everyone — clients included — eventually
          loses.
        </P>

        <PullQuote>
          The race to the bottom isn't a market correction. It's a slow erosion of
          craft, dignity, and the future of independent engineering.
        </PullQuote>

        <H2>The $100 Job Problem</H2>
        <P>
          A serious web application takes weeks. A production-grade smart contract
          needs auditing, testing, and a developer who actually understands the
          EVM. Yet job boards are flooded with listings offering $100 — sometimes
          less — for work that should command thousands. Clients see the cheap
          bids and assume that's the "real" price. Developers see the cheap
          listings and assume that's the "real" market. Both sides anchor to a
          number that has nothing to do with the value of the work.
        </P>
        <P>
          The result is a feedback loop: under-priced listings attract under-skilled
          freelancers, who deliver under-built products, which trains clients to
          expect even less for even cheaper. The $100 job isn't an outlier
          anymore — it's the benchmark.
        </P>

        <H2>How Underbidding Destroys Market Rates</H2>
        <P>
          Underbidding feels like a personal strategy — "I'll take less now to win
          the gig" — but in aggregate it's a structural attack on every developer
          working in the same category. When thousands of freelancers compete by
          shaving a few dollars off each proposal, the ceiling drops for everyone.
          Senior engineers get priced out. Mid-level developers are forced to bid
          like juniors. Juniors bid like interns. Interns work for free, hoping
          for "exposure."
        </P>
        <P>
          Platforms quietly benefit from this. Lower prices mean more transactions,
          more fees, and a larger pool of dependent workers. The incentives aren't
          aligned with the people writing the code — they're aligned with the
          marketplace skimming the top.
        </P>

        <PullQuote>
          You are not competing with other developers. You are competing with a
          system designed to make your labor interchangeable.
        </PullQuote>

        <H2>Why Quality Suffers</H2>
        <P>
          At $100 a project, nobody has time to think. There is no architecture
          review, no testing strategy, no security pass, no documentation. The
          developer ships whatever runs. The client gets something that works
          today and breaks next month. The next freelancer inherits a mess they
          can't fix for $100 either, so they rewrite it badly. The cycle
          continues.
        </P>
        <P>
          Quality is a function of time, expertise, and incentive. Strip all three
          and you don't get "affordable software" — you get technical debt sold by
          the kilo. The clients who chase the cheapest bid almost always end up
          paying two or three times more to rebuild what they bought.
        </P>

        <H2>How Developers Can Escape the Race</H2>
        <P>
          The way out of the race is not running faster. It's stepping off the
          track. A few principles that consistently work:
        </P>
        <P>
          <strong style={{color: INK}}>Specialize aggressively.</strong> Generalists
          compete on price. Specialists compete on outcomes. A "React developer"
          is one of a million. A "developer who ships secure ERC-4626 vaults" is
          one of a few hundred. Specialization is the fastest way to leave the
          auction.
        </P>
        <P>
          <strong style={{color: INK}}>Sell results, not hours.</strong> Hourly
          rates invite negotiation downward. Outcomes — "I will ship X in Y weeks
          for Z" — invite negotiation around scope, which is where real value
          lives.
        </P>
        <P>
          <strong style={{color: INK}}>Build a body of work.</strong> A serious
          portfolio, a couple of public repositories, a few case studies — these
          do more for your pricing power than a thousand polished proposals on a
          marketplace.
        </P>
        <P>
          <strong style={{color: INK}}>Leave the platforms eventually.</strong>{" "}
          Marketplaces are useful for early traction, but every long-term
          developer career is built on direct relationships, referrals, and
          inbound demand. The freelancers who escape the race are the ones who
          stop renting their audience.
        </P>

        <PullQuote>
          You are not a slave to the market rate. You are the market rate — for
          the kind of work only you can do.
        </PullQuote>

        <P>
          The freelance race to the bottom will not end on its own. Platforms
          won't fix it. Clients won't fix it. The only people who can break the
          cycle are the developers who refuse to participate in it — by raising
          their standards, narrowing their focus, and remembering that writing
          software is still a craft, not a commodity.
        </P>
      </article>

      {/* Footer CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-[1100px] mx-auto relative overflow-hidden rounded-3xl border border-[#161A1D]/10 bg-white p-10 md:p-16 text-center shadow-[0_20px_60px_-20px_rgba(22,26,29,0.1)]">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#4144F2]/15 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#057FFC]/15 rounded-full blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{color: INK}}>
              Building in Web3 or AI?
            </h2>
            <p className="text-[#161A1D]/70 max-w-xl mx-auto mb-8">
              Codelithics partners with founders and teams shipping at the edge
              of crypto and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#4144F2] to-[#057FFC] hover:opacity-90 text-white px-8"
              >
                <Link to="/#contact">
                  Work With Codelithics <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#161A1D]/20 bg-transparent text-[#161A1D] hover:bg-[#161A1D]/5 hover:text-[#161A1D] px-8"
              >
                <Link to="/#projects">Explore Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsDeveloperOrSlave;