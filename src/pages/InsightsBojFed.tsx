import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Link2,
  TrendingUp,
  TrendingDown,
  Bitcoin,
  LineChart,
  Globe,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Mail,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/article-boj-fed.jpg";

const PUBLISHED_DATE = "June 14, 2026";

const scenarios = [
  {
    n: "01",
    title: "BOJ Hikes + Hawkish Fed",
    tone: "bear",
    summary:
      "The tightest liquidity scenario. Both central banks pull capital out of risk assets at the same time.",
    effects: {
      Bitcoin: "Likely short-term selloff as leverage unwinds.",
      Altcoins: "Sharper drawdowns; high-beta names hit hardest.",
      "Tech Stocks": "Pressure on growth multiples and AI names.",
      Sentiment: "Risk-off across global markets.",
    },
  },
  {
    n: "02",
    title: "BOJ Hikes + Neutral Fed",
    tone: "neutral",
    summary:
      "Mixed signals. Yen strengthens, but the Fed avoids tightening the screws further.",
    effects: {
      Bitcoin: "Choppy range; volatility spikes around announcements.",
      Altcoins: "Rotation into majors; weaker tokens consolidate.",
      "Tech Stocks": "Selective; large caps outperform small caps.",
      Sentiment: "Cautious, wait-and-see positioning.",
    },
  },
  {
    n: "03",
    title: "No BOJ Surprise + Dovish Fed",
    tone: "bull",
    summary:
      "The most constructive setup. Liquidity stays intact and risk appetite returns.",
    effects: {
      Bitcoin: "Bid returns; potential breakout above local highs.",
      Altcoins: "Beta trade activates; meaningful rotation possible.",
      "Tech Stocks": "AI and growth lead the move higher.",
      Sentiment: "Risk-on; capital flows back into innovation.",
    },
  },
];

const related = [
  {
    tag: "Macro",
    title: "The Liquidity Cycle Every Web3 Founder Should Understand",
    read: "6 min",
  },
  {
    tag: "DeFi",
    title: "Stablecoin Flows as a Leading Indicator for Onchain Activity",
    read: "4 min",
  },
  {
    tag: "AI",
    title: "Why AI Infrastructure Spending Mirrors the 2021 Crypto Buildout",
    read: "7 min",
  },
];

const InsightsBojFed = () => {
  useEffect(() => {
    document.title = "Could Japan Trigger the Next Crypto Selloff? | Codelithics Insights";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#06060B] text-white selection:bg-[#6C50FE]/40">
      <Navigation />

      {/* Hero */}
      <article>
        <header className="relative pt-32 pb-12 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A18] via-[#06060B] to-[#06060B]" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6C50FE]/20 rounded-full blur-[120px]" />
            <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-[#057FFC]/15 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-[800px] mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Codelithics
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6C50FE]/40 bg-[#6C50FE]/10 text-xs uppercase tracking-widest text-[#A99CFF] mb-6">
                <Tag className="w-3 h-3" /> Market Insights
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
                Could Japan Trigger the Next{" "}
                <span className="bg-gradient-to-r from-[#6C50FE] to-[#057FFC] bg-clip-text text-transparent">
                  Crypto Selloff?
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                Why June 16–17 Could Be a Critical Week for Global Liquidity.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60 pb-8 border-b border-white/10">
                <span className="inline-flex items-center gap-2">
                  <User className="w-4 h-4 text-[#6C50FE]" /> Codelithics Research
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#6C50FE]" /> {PUBLISHED_DATE}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#6C50FE]" /> 5 min read
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured image */}
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-[1100px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-30px_rgba(108,80,254,0.5)]"
          >
            <img
              src={heroImage}
              alt="Japanese yen and Bitcoin against trading charts representing global liquidity"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Body + Sidebar */}
        <div className="px-4 mt-16 mb-24">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,800px)_1fr] gap-12">
            {/* Main content */}
            <div className="max-w-[800px] w-full">
              <Section title="1. Introduction" id="intro">
                <p>
                  Crypto markets rarely move because of crypto alone. This week, two
                  central bank meetings — the <strong>Bank of Japan</strong> and the{" "}
                  <strong>US Federal Reserve</strong> — could shape risk appetite
                  across every asset class, from Bitcoin to AI equities.
                </p>
                <p>
                  This is not just a crypto story. It is a{" "}
                  <em>liquidity story</em>. And liquidity is the oxygen of every
                  speculative market on earth.
                </p>
              </Section>

              <Section title="2. Why the Bank of Japan Matters" id="boj">
                <p>
                  The Bank of Japan (BOJ) is Japan's central bank and one of the
                  most influential institutions in global finance. For decades it
                  has kept interest rates near zero, effectively flooding the world
                  with cheap capital.
                </p>
                <p>
                  When the BOJ hikes rates, that cheap capital becomes more
                  expensive — and the global trades built on top of it begin to
                  unwind.
                </p>

                <InsightCard
                  icon={<Lightbulb className="w-5 h-5" />}
                  title="Why this matters"
                >
                  Japanese monetary policy is a hidden lever on global risk assets.
                  Even a small surprise from the BOJ can ripple into US equities,
                  emerging markets, and crypto within hours.
                </InsightCard>
              </Section>

              <Section title="3. Understanding the Yen Carry Trade" id="carry">
                <p>
                  The "yen carry trade" is one of the largest unspoken trades in
                  modern finance. The mechanic is simple:
                </p>

                <div className="my-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F0F1F] to-[#0A0A18] p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    <CarryStep
                      step="01"
                      title="Borrow Yen"
                      desc="Institutions borrow Japanese yen at near-zero interest rates."
                    />
                    <CarryArrow />
                    <CarryStep
                      step="02"
                      title="Convert & Deploy"
                      desc="They convert into USD and buy higher-yielding assets: tech stocks, bonds, crypto."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch mt-4">
                    <CarryStep
                      step="03"
                      title="Earn the Spread"
                      desc="Profit from the gap between cheap yen funding and richer returns abroad."
                    />
                    <CarryArrow />
                    <CarryStep
                      step="!"
                      title="BOJ Hikes"
                      desc="Funding costs rise, the trade unwinds, and global liquidity tightens."
                      warn
                    />
                  </div>
                </div>

                <p>
                  When the BOJ raises rates, this trade becomes less profitable.
                  Capital flows back to Japan, and risk assets — including crypto —
                  often feel it first.
                </p>
              </Section>

              <Section title="4. Why the Federal Reserve Matters" id="fed">
                <p>
                  At the same time, the US Federal Reserve will deliver its own
                  policy decision. Markets are watching three signals closely:
                </p>
                <ul>
                  <li>Strong US jobs data hinting at a resilient economy</li>
                  <li>Inflation that is sticky in services and shelter</li>
                  <li>The tone of the Fed's communication — hawkish or dovish</li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <ComparisonCard
                    tone="bear"
                    icon={<TrendingDown className="w-5 h-5" />}
                    title="Hawkish Fed"
                    points={[
                      "Higher yields across the curve",
                      "Stronger US dollar (DXY up)",
                      "Pressure on crypto and growth stocks",
                    ]}
                  />
                  <ComparisonCard
                    tone="bull"
                    icon={<TrendingUp className="w-5 h-5" />}
                    title="Dovish Fed"
                    points={[
                      "Improved risk appetite",
                      "Better global liquidity conditions",
                      "Tailwind for Bitcoin and AI equities",
                    ]}
                  />
                </div>
              </Section>

              <Section title="5. Potential Market Scenarios" id="scenarios">
                <p>
                  Combining both meetings produces three realistic scenarios. None
                  is a forecast — they are frameworks for thinking about risk.
                </p>

                <div className="space-y-4 mt-8">
                  {scenarios.map((s) => (
                    <ScenarioCard key={s.n} {...s} />
                  ))}
                </div>
              </Section>

              <Section title="6. What Web3 Builders Should Watch" id="builders">
                <p>
                  If you are a founder, developer, or investor in Web3 or AI, macro
                  events are not background noise — they are your funding
                  environment.
                </p>
                <ul>
                  <li>
                    <strong>Liquidity drives adoption.</strong> Bull markets bring
                    users, attention, and capital to new protocols.
                  </li>
                  <li>
                    <strong>Macro affects startups.</strong> Venture funding cycles
                    track risk appetite more than they track product quality.
                  </li>
                  <li>
                    <strong>Markets are part of the stack.</strong> Understanding
                    liquidity is as important as understanding Solidity.
                  </li>
                </ul>
              </Section>

              <Section title="7. Conclusion" id="conclusion">
                <p>
                  The BOJ and the Fed will not single-handedly decide the future of
                  crypto. But over the coming days, their decisions will shape
                  short-term liquidity — and therefore short-term price action —
                  across nearly every risk asset.
                </p>
                <blockquote className="not-prose my-8 border-l-4 border-[#6C50FE] bg-gradient-to-r from-[#6C50FE]/10 to-transparent rounded-r-xl p-6 text-lg md:text-xl text-white/90 italic leading-relaxed">
                  "The next few days may not determine the future of crypto, but
                  they could determine the market's direction in the short term.
                  For Web3 builders, understanding liquidity is just as important
                  as understanding code."
                </blockquote>
              </Section>

              {/* Inline share */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm text-white/60">
                  Published by <span className="text-white">Codelithics Research</span>
                </div>
                <ShareRow />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 self-start space-y-6">
              <SidebarCard title="Share this article" icon={<Share2 className="w-4 h-4" />}>
                <ShareRow />
              </SidebarCard>

              <SidebarCard title="Related insights" icon={<LineChart className="w-4 h-4" />}>
                <ul className="space-y-4">
                  {related.map((r) => (
                    <li key={r.title} className="group cursor-pointer">
                      <div className="text-[10px] uppercase tracking-widest text-[#A99CFF] mb-1">
                        {r.tag} · {r.read}
                      </div>
                      <div className="text-sm text-white/85 group-hover:text-white leading-snug">
                        {r.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </SidebarCard>

              <SidebarCard
                title="Codelithics Newsletter"
                icon={<Mail className="w-4 h-4" />}
                accent
              >
                <p className="text-sm text-white/70 mb-4">
                  Weekly insights on Web3, AI, and the markets that move them.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-2"
                >
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#0A0A18] border border-white/10 focus:border-[#6C50FE] outline-none text-sm placeholder:text-white/40"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#6C50FE] to-[#057FFC] hover:opacity-90 text-white"
                  >
                    Subscribe
                  </Button>
                </form>
              </SidebarCard>

              <SidebarCard title="Recent articles" icon={<Globe className="w-4 h-4" />}>
                <ul className="space-y-3 text-sm">
                  <li className="text-white/80 hover:text-white cursor-pointer">
                    Bitcoin ETF Flows: What the Last 30 Days Tell Us
                  </li>
                  <li className="text-white/80 hover:text-white cursor-pointer">
                    The Quiet Rise of Onchain AI Agents
                  </li>
                  <li className="text-white/80 hover:text-white cursor-pointer">
                    Why Stablecoin Velocity Is the New M2
                  </li>
                </ul>
              </SidebarCard>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="px-4 pb-24">
          <div className="max-w-[1100px] mx-auto relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F0F1F] via-[#0A0A18] to-[#0A0A18] p-10 md:p-16 text-center">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#6C50FE]/30 rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#057FFC]/25 rounded-full blur-[120px]" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Building in Web3 or AI?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Codelithics partners with founders and teams shipping at the edge
                of crypto and intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#6C50FE] to-[#057FFC] hover:opacity-90 text-white px-8"
                >
                  <Link to="/#contact">
                    Work With Codelithics <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8"
                >
                  <Link to="/#projects">Explore Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

/* -------------------- Subcomponents -------------------- */

const Section = ({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="mt-12 first:mt-0 scroll-mt-28">
    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5 text-white">
      {title}
    </h2>
    <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/75 prose-p:leading-[1.8] prose-li:text-white/75 prose-strong:text-white prose-em:text-white/90 prose-a:text-[#A99CFF]">
      {children}
    </div>
  </section>
);

const InsightCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="not-prose my-8 rounded-2xl border border-[#6C50FE]/30 bg-gradient-to-br from-[#6C50FE]/10 to-[#057FFC]/5 p-6">
    <div className="flex items-center gap-2 text-[#A99CFF] text-xs uppercase tracking-widest mb-2">
      {icon} {title}
    </div>
    <div className="text-white/85 leading-relaxed">{children}</div>
  </div>
);

const CarryStep = ({
  step,
  title,
  desc,
  warn,
}: {
  step: string;
  title: string;
  desc: string;
  warn?: boolean;
}) => (
  <div
    className={`rounded-xl border p-4 h-full ${
      warn
        ? "border-amber-500/30 bg-amber-500/5"
        : "border-white/10 bg-white/[0.03]"
    }`}
  >
    <div
      className={`text-xs font-mono mb-2 ${
        warn ? "text-amber-400" : "text-[#A99CFF]"
      }`}
    >
      {warn ? (
        <span className="inline-flex items-center gap-1">
          <AlertTriangle className="w-3 h-3" /> RISK
        </span>
      ) : (
        `STEP ${step}`
      )}
    </div>
    <div className="font-heading font-semibold text-white mb-1">{title}</div>
    <div className="text-sm text-white/65 leading-relaxed">{desc}</div>
  </div>
);

const CarryArrow = () => (
  <div className="hidden md:flex items-center justify-center">
    <ArrowRight className="w-6 h-6 text-[#6C50FE]" />
  </div>
);

const ComparisonCard = ({
  tone,
  icon,
  title,
  points,
}: {
  tone: "bull" | "bear";
  icon: React.ReactNode;
  title: string;
  points: string[];
}) => {
  const isBull = tone === "bull";
  return (
    <div
      className={`rounded-2xl border p-6 ${
        isBull
          ? "border-emerald-500/25 bg-emerald-500/[0.04]"
          : "border-rose-500/25 bg-rose-500/[0.04]"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs uppercase tracking-widest mb-3 ${
          isBull
            ? "bg-emerald-500/15 text-emerald-300"
            : "bg-rose-500/15 text-rose-300"
        }`}
      >
        {icon} {title}
      </div>
      <ul className="space-y-2 text-white/80 text-sm">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <CheckCircle2
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                isBull ? "text-emerald-400" : "text-rose-400"
              }`}
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ScenarioCard = ({
  n,
  title,
  summary,
  effects,
  tone,
}: {
  n: string;
  title: string;
  summary: string;
  effects: Record<string, string>;
  tone: "bull" | "bear" | "neutral";
}) => {
  const accent =
    tone === "bull"
      ? "from-emerald-500/15 to-transparent border-emerald-500/25"
      : tone === "bear"
      ? "from-rose-500/15 to-transparent border-rose-500/25"
      : "from-[#6C50FE]/15 to-transparent border-[#6C50FE]/25";
  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br ${accent} bg-[#0A0A18] p-6`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="text-xs font-mono text-white/50 mb-1">
            SCENARIO {n}
          </div>
          <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
        </div>
        <Bitcoin className="w-5 h-5 text-white/40 flex-shrink-0" />
      </div>
      <p className="text-white/70 text-sm mb-5 leading-relaxed">{summary}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(effects).map(([k, v]) => (
          <div
            key={k}
            className="rounded-lg border border-white/10 bg-white/[0.02] p-3"
          >
            <div className="text-[10px] uppercase tracking-widest text-[#A99CFF] mb-1">
              {k}
            </div>
            <div className="text-sm text-white/80 leading-snug">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SidebarCard = ({
  title,
  icon,
  children,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  accent?: boolean;
}) => (
  <div
    className={`rounded-2xl border p-5 ${
      accent
        ? "border-[#6C50FE]/30 bg-gradient-to-br from-[#6C50FE]/10 to-[#057FFC]/5"
        : "border-white/10 bg-[#0A0A18]"
    }`}
  >
    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A99CFF] mb-4">
      {icon} {title}
    </div>
    {children}
  </div>
);

const ShareRow = () => (
  <div className="flex items-center gap-2">
    {[
      { Icon: Twitter, label: "Share on Twitter" },
      { Icon: Linkedin, label: "Share on LinkedIn" },
      { Icon: Link2, label: "Copy link" },
    ].map(({ Icon, label }) => (
      <button
        key={label}
        aria-label={label}
        onClick={() => {
          if (label === "Copy link") {
            navigator.clipboard?.writeText(window.location.href);
          }
        }}
        className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-[#6C50FE]/40 flex items-center justify-center text-white/70 hover:text-white transition-colors"
      >
        <Icon className="w-4 h-4" />
      </button>
    ))}
  </div>
);

export default InsightsBojFed;