export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-brand-black pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 w-full h-full glass pointer-events-none -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to Level Up?</h2>
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Contact us today to book your pilot service. Our support team is available 24/7 to answer any questions and help you customize your order.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 mb-20">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/GenshinPilots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page"
            className="group flex items-center gap-4"
          >
            <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <i className="fi fi-brands-facebook text-2xl text-[#1877F2] flex items-center justify-center"></i>
            </span>
            <span className="text-sm md:text-base text-white/70 group-hover:text-white transition-colors">facebook.com/GenshinPilots</span>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/MwKZGwdAN4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord Server"
            className="group flex items-center gap-4"
          >
            <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <i className="fi fi-brands-discord text-2xl text-[#5865F2] flex items-center justify-center"></i>
            </span>
            <span className="text-sm md:text-base text-white/70 group-hover:text-white transition-colors">discord.gg/MwKZGwdAN4</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-lg tracking-widest text-white uppercase">MACIE <span className="text-brand-pink">&</span> CO.</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} MACIE & CO. ALL RIGHTS RESERVED. <br className="md:hidden" />
              Not affiliated with HoYoverse or Kuro Games.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
