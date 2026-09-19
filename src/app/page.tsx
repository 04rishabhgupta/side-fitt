import { platformData } from '../data';
import ShaderShowcase from '@/components/ui/hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, FlaskConical, Briefcase, ShieldCheck, Users, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* SHADER SHOWCASE HERO & HEADER */}
      <ShaderShowcase />

      <main className="bg-white">

        {/* ABOUT SECTION */}
        <section id="about" className="py-12 md:py-24 container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col space-y-4">
            <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase">
              About SIDBI DeepTech
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight max-w-4xl">
              {platformData.about.heading}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl leading-relaxed mt-6">
              {platformData.about.copy}
            </p>
          </div>
        </section>

        {/* EMBEDDED VIDEO/IMAGE PLACEHOLDER */}
        <section className="container mx-auto px-6 max-w-6xl mb-12 md:mb-32">
          <div className="w-full aspect-video md:aspect-[21/9] bg-slate-100 rounded-sm overflow-hidden relative shadow-lg">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Initiative" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer">
              <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xl">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (Alternating Z-Layout) */}
        <section id="how-it-works" className="py-12 md:py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20">
              <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase">
                Program Components
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
                {platformData.howItWorks.heading}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
                {platformData.howItWorks.subheading}
              </p>
            </div>

            <div className="space-y-24 md:space-y-32">
              {platformData.howItWorks.steps.map((step, i) => (
                <div key={step.id} className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 space-y-6">
                    <span className="text-sm font-bold text-orange-500 uppercase tracking-widest border-l-2 border-orange-500 pl-3">
                      Step {step.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                      {step.headline}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed text-lg">
                      {step.body}
                    </p>
                    <div className="pt-4">
                      <a href="#apply" className="inline-block text-cyan-600 font-semibold hover:text-cyan-700 hover:underline underline-offset-4 transition-all">
                        Learn More &rarr;
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden bg-slate-100 shadow-xl border border-slate-200/60">
                      <img src={`https://images.unsplash.com/photo-${i === 0 ? '1553877522-43269d4ea984' : i === 1 ? '1522071820081-009f0129c71c' : i === 2 ? '1460925895917-afdab827c52f' : '1551434678-e076c223a692'}?q=80&w=1200&auto=format&fit=crop`} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-24 text-sm italic text-slate-400 font-light">
              "{platformData.howItWorks.tagline}"
            </div>
          </div>
        </section>

        {/* PLATFORM IMPACT & METRICS (Redesigned White Theme) */}
        <section className="bg-slate-50 py-24 md:py-32 border-y border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Top Figures */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tighter">₹100 Cr</h2>
                <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Envisioned Platform Corpus</p>
              </div>
              <div className="md:text-right">
                <h2 className="text-5xl md:text-6xl font-black text-emerald-600 mb-2 tracking-tighter">Up to ₹2 Cr</h2>
                <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Investment Support Per Startup</p>
              </div>
            </div>

            {/* Offerings Header */}
            <div className="mb-12 max-w-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Key Offerings & Outcomes</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Connect seamlessly with institutional expertise, industry access, and structured acceleration for India's most promising deeptech ventures.
              </p>
            </div>

            {/* Offerings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Milestone-Led Building</h4>
                <p className="text-slate-500 leading-relaxed text-sm">Structured acceleration aligned with technology and commercial milestones to ensure continuous growth.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Technical Validation</h4>
                <p className="text-slate-500 leading-relaxed text-sm">Expert reviews, testing, and validation pathways through dedicated institutional infrastructure.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Industry Pathways</h4>
                <p className="text-slate-500 leading-relaxed text-sm">Customer discovery, pilot design, and support navigating complex corporate procurement cycles.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">IP & Certification</h4>
                <p className="text-slate-500 leading-relaxed text-sm">Guidance on regulatory pathways, defensible technology strategy, and certification processes.</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Founder Leadership</h4>
                <p className="text-slate-500 leading-relaxed text-sm">Mentorship on team building, governance, and scaling organizational capabilities effectively.</p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md shadow-rose-500/20 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Investor Readiness</h4>
                <p className="text-slate-500 leading-relaxed text-sm">Data-room preparedness, investment narrative, and curated follow-on capital access.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOCUS AREAS (Startups/Domains) */}
        <section id="focus" className="py-12 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase">
                Focus Areas
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
                {platformData.focusAreas.heading}
              </h2>
              <p className="text-lg text-slate-600 font-light max-w-3xl">
                {platformData.focusAreas.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformData.focusAreas.areas.map((area) => (
                <Card key={area.id} className="bg-white border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900">{area.domain}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-600 font-light leading-relaxed">{area.details}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ACCELERATION TIMELINE (Horizontal) */}
        <section id="acceleration" className="py-12 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase">
              Program Timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-20">
              {platformData.acceleration.heading}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {platformData.acceleration.timeline.map((item, i) => (
                <div key={i} className="flex flex-col border-t-4 border-cyan-600 pt-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Stage {i + 1}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.stage}</h4>
                  <p className="text-base text-slate-600 font-light mb-6 flex-grow">{item.focus}</p>
                  <div className="mt-auto">
                    <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-sm">
                      Output: {item.output}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL ARCHITECTURE */}
        <section id="mentors" className="py-12 md:py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase">
              Institutional Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              {platformData.mentors.heading}
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-3xl mb-16">
              {platformData.mentors.copy}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {platformData.mentors.list.map((mentor, i) => (
                <div key={i} className="flex flex-col text-left p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    {mentor.org}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{mentor.name}</h4>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    {mentor.role}
                  </p>
                  <div className={`w-12 h-1 mt-8 ${i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-cyan-500' : 'bg-emerald-500'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING / APPLY */}
        <section id="apply" className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-16 justify-between items-center">
            <div className="max-w-xl">
              <span className="text-sm font-bold tracking-widest text-emerald-500 uppercase">
                Join the Cohort
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
                {platformData.closing.startup.heading}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-light mb-10 leading-relaxed">
                {platformData.closing.startup.subhead}
              </p>
              <a href="https://accubate.fitt-iitd.in/ext/form/23719/1/apply" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-sm transition-colors inline-block shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                {platformData.closing.startup.cta}
              </a>
            </div>
            <div className="w-full md:w-1/3 bg-slate-50 p-10 rounded-sm border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{platformData.closing.incubator.heading}</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-8">{platformData.closing.incubator.body}</p>
              <a href="#" className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors uppercase tracking-wider text-sm flex items-center">
                {platformData.closing.incubator.cta}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#041E3A] text-white pt-16 pb-8">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Top Logos & Tagline */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
                <div className="bg-white p-2 rounded-full w-16 h-16 flex items-center justify-center shrink-0">
                  <img src="/logo.png" alt="FITT Logo" className="w-12 h-auto" />
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <img src="/sidbi-logo.png" alt="SIDBI Logo" className="h-12 w-auto bg-white rounded-md p-1 shrink-0" />
                <div className="w-px h-10 bg-white/20"></div>
                <div className="text-xl font-light tracking-widest uppercase">DeepTech Platform</div>
              </div>
              <p className="text-sm text-white/70 font-light max-w-4xl">
                {platformData.footer.tagline}
              </p>
            </div>

            <div className="h-px w-full bg-white/10 mb-12"></div>

            {/* Middle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

              {/* Explore Column */}
              <div className="md:col-span-3">
                <h4 className="text-xs font-bold text-white/50 tracking-widest uppercase mb-6">Explore</h4>
                <ul className="space-y-4">
                  {platformData.footer.exploreLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get in Touch Column */}
              <div className="md:col-span-4">
                <h4 className="text-xs font-bold text-white/50 tracking-widest uppercase mb-6">Get in Touch</h4>

                <div className="space-y-6 text-sm">
                  <div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mb-1">General</div>
                    <a href={`mailto:${platformData.footer.contactInfo.generalEmail}`} className="text-white/80 hover:text-white transition-colors">
                      {platformData.footer.contactInfo.generalEmail}
                    </a>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mb-1">Website</div>
                    <a href={`https://${platformData.footer.contactInfo.website}`} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">
                      {platformData.footer.contactInfo.website}
                    </a>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mb-1">Address</div>
                    <div className="text-white/80 whitespace-pre-line leading-relaxed">
                      {platformData.footer.contactInfo.address}
                    </div>
                  </div>
                  <div className="pt-2">
                    <a href={platformData.footer.contactInfo.actionLink.href} className="text-orange-500 font-semibold hover:text-orange-400 transition-colors text-xs">
                      {platformData.footer.contactInfo.actionLink.text}
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Contacts Column */}
              <div className="md:col-span-5">
                <h4 className="text-xs font-bold text-white/50 tracking-widest uppercase mb-6">Key Contacts</h4>
                <div className="flex flex-col sm:flex-row gap-8">
                  {platformData.footer.keyContacts.map((contact, i) => (
                    <div className="flex items-center gap-4" key={i}>
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                        <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{contact.name}</div>
                        <a href={`mailto:${contact.email}`} className="text-xs text-orange-500 hover:text-orange-400 transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="h-px w-full bg-white/10 mb-8"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs text-white/40 gap-4">
              <div>{platformData.footer.copyright}</div>
              <div>{platformData.footer.partnership}</div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
