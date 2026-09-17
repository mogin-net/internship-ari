import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-black/70 backdrop-blur-xl border-t border-white/10">
            {/* Decorative line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-amber-500/50" />
            <div className="mx-auto w-full max-w-screen-xl px-6 py-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a
                            href="https://honkaiimpact3.hoyoverse.com/global/en-us/home"
                            className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <img
                                src="https://fastcdn.hoyoverse.com/mi18n/bh3_global/m20230317hy14h0glc0/upload/152066f03d3a6e570f1c559167089853_8449278023143135971.png"
                                alt="Honkai Impact 3rd Logo"
                                className="h-9 w-auto"
                            />
                        </a>
                        <p className="mt-4 max-w-xs text-[9px] leading-relaxed uppercase tracking-[0.18em] text-white/25">
                            An archive and information project of Honkai Impact 3rd.
                        </p>
                    </div>

                    {/* Official Social Media */}
                    <div>
                        <h2 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                            Official Social Media
                        </h2>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://x.com/HonkaiImpact3rd"
                                    className="text-[10px] uppercase tracking-[0.12em] text-white/45 hover:text-amber-500 transition-colors"
                                >
                                    X / Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/global.honkaiimpact/"
                                    className="text-[10px] uppercase tracking-[0.12em] text-white/45 hover:text-amber-500 transition-colors"
                                >
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow */}
                    <div>
                        <h2 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                            Follow Us
                        </h2>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCko6H6LokKM__B03i5_vBQQ"
                                    className="text-[10px] uppercase tracking-[0.12em] text-white/45 hover:text-amber-500 transition-colors"
                                >
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.com/invite/hi3"
                                    className="text-[10px] uppercase tracking-[0.12em] text-white/45 hover:text-amber-500 transition-colors"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Legal */}
                    <div>
                        <h2 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                            Legal
                        </h2>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://honkaiimpact3.hoyoverse.com/asia/en-us/privacy"
                                    className="text-[10px] uppercase tracking-[0.12em] text-white/45 hover:text-amber-500 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://honkaiimpact3.hoyoverse.com/asia/en-us/terms"
                                    className="text-[10px] uppercase tracking-[0.12em] text-white/45 hover:text-amber-500 transition-colors"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                        © 2023 Honkai Impact 3rd Project™. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;