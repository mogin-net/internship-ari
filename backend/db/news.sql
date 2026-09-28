-- CREATE TABLE NEWS
CREATE TABLE public.news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(20) not NULL,
    thumbnail VARCHAR(255),
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE NEWS_BLOCK
CREATE TABLE public.news_blocks (
    id SERIAL PRIMARY KEY,
    news_id INTEGER NOT NULL,
    type VARCHAR(20) NOT NULL,
    content TEXT,
    sort_order INTEGER NOT NULL,
    CONSTRAINT fk_news
        FOREIGN KEY (news_id)
        REFERENCES public.news(id)
        ON DELETE CASCADE
);

-- INSERT KE TABLE NEWS
INSERT INTO public.news
(title, slug, category, thumbnail, published_at)
VALUES
(
    'v9.0 The Light at Dream''s End Update Announcement',
    'honkai-impact-3rd-v9-0-update',
    'Updates',
    'https://fastcdn.hoyoverse.com/content-v2/bh3/165769/ac778b84c82e9c4a7c648e8b649703f0_5018532377800008487.png',
    '2026-08-20'
),
(
    'v8.9 "Lives Flourish Where Feathers Fall" Update Announcement',
    'honkai-impact-3rd-v8-9-update',
    'Updates',
    'https://fastcdn.hoyoverse.com/content-v2/bh3/164954/2ef0a4d7417991d5f95c5402d2b17d77_1732079464732730831.png',
    '2026-06-25'
),
(
    'Visa-exclusive web top-up discounts available now!',
    'honkai-impact-3rd-visa-exclusive-web-top-up-discounts',
    'Info',
    'https://fastcdn.hoyoverse.com/content-v2/bh3/158887/9d249a601248dfbdb568262f7b8c3401_4750343681573915328.png',
    '2025-08-21'
);

-- INSERT KE TABLE NEWS_BLOCKS
-- NEWS 1
INSERT INTO news_blocks
(news_id, type, content, sort_order)
values
(1, 'image',
'https://fastcdn.hoyoverse.com/content-v2/bh3/165769/7e7c064ed049687976dd8dfac1ec70ef_8320450492199103590.png',
1),

(1, 'paragraph',
'Onward, to the next destination. In the infinite future, we will seek out the dream we have always dreamed of.',
2),

(1, 'paragraph',
'Welcome to v9.0 The Light at Dream''s End (AUG 20 ~ OCT 22)!',
3),

(1, 'heading',
'Update Content',
4),

(1, 'subheading',
'★ New AstralOp: Senadina',
5),

(1, 'paragraph',
'Senadina is an AstralOp recommended for Wheel of Destiny teams. Upon entering Stellar Outburst, she can perform synergy attacks to pull nearby enemies and deal Fire DMG to them. After the leader calls in a Phantom to attack, she will perform a special follow-up attack.',
6),

(1, 'paragraph',
'While Wheel of Destiny is active, casting Phantom assist attacks during Stellar Surplus increases the Elemental DMG and Physical DMG enemies take during the next Stellar Outburst. Based on the number of team members with the Harmonized Shadow Star trait, Senadina can increase the Total DMG enemies take. Furthermore, enemies under a status condition will take more corresponding Elemental DMG.',
7),

(1, 'paragraph',
'You can obtain the new AstralOp in the following way:',
8),

(1, 'list',
'AstralOp Supply is open for a limited time. You are guaranteed to pull AstralOp Senadina within 60 drops. Plus, every 10 drops of the first 60 drops grants Equipment Supply Card x2, meaning you can obtain up to Equipment Supply Card x12 this way!',
9),

(1, 'subheading',
'★ New Equipment Recommended for Fenghuang of Vicissitude: Divine Key Vermillion Liuli and Weeping Philosopher Stigma Set',
10),

(1, 'paragraph',
'Fenghuang of Vicissitude''s recommended Divine Key Vermillion Liuli and its PRI-ARM form Vermillion Liuli: Full Burn are available! When equipped by Fenghuang of Vicissitude, it will activate Astral Ring Specialization: Wheel of Destiny and alter some of her moves.',
11),

(1, 'paragraph',
'You can obtain her recommended equipment in the following ways:',
12),

(1, 'list',
'Equipment Supply is open for a limited time. It offers Fenghuang of Vicissitude''s recommended equipment Divine Key "Vermillion Liuli" and "Weeping Philosopher" stigma set at increased drop rates!',
13),

(1, 'list',
'Participate in the login event to get Weeping Philosopher Stigma Option x1. Open it to choose one piece from Fenghuang of Vicissitude''s new recommended stigma set.',
14),

(1, 'list',
'Weeping Philosopher stigma set is now craftable. Crafting a stigma requires Source Prism x2 and Ether Fuel x600.',
15),

(1, 'subheading',
'★ Featured Event: Captain''s Wishing Tree Secrets',
16),

(1, 'paragraph',
'Legend tells of a magical Wishing Tree at the Magic Academy that can grant any wish... But why did our wish lead us here?',
17),

(1, 'paragraph',
'Featured event "Captain''s Wishing Tree Secrets" is available. Participate in the event to get Jovial Deception: Shadowdimmer''s new outfit "Vagapunk", Crystals, Dream Come True Emblem, Source Prisms, Honkai Shards, and more!',
18),

(1, 'subheading',
'★ Main Story Part 2 Finale: The Future We Embrace',
19),

(1, 'paragraph',
'Everyone falls asleep beneath the same night, yet no two dreams born beneath it are ever alike. If surprises await at every turn, then what dream is left for Dreamseeker to seek?',
20),

(1, 'paragraph',
'New story chapter "The Future We Embrace" is coming soon. Experience the new chapter to get Dreamseeking Scrapbook, Crystals, Source Prisms, and more.',
21),

(1, 'subheading',
'★ Featured Event Rerun: Flying to Oxia Invitation Contest',
22),

(1, 'paragraph',
'If I ever stand on the field and compete for the championship, I''ll undoubtedly play the most remarkable game of my life, and welcome the fireworks reserved for the victor.',
23),

(1, 'paragraph',
'Featured event "Flying to Oxia Invitation Contest" returns in v9.0. Participate in the event to get Crystals, Sweet Dream Fantasy Outfit Option, Source Prisms, Honkai Shards, and more!',
24),

(1, 'paragraph',
'Open Sweet Dream Fantasy Outfit Option to choose one of the following: Fuzzy Pink Love (outfit), Autumn Shades (outfit), Frankenstein (outfit), 8000 Asterite.',
25),

(1, 'subheading',
'★ Login Event: Wish of First Light',
26),

(1, 'paragraph',
'Login event "Wish of First Light" is coming soon. Log in during the event to get Equipment Supply Card x5, a commemorative letter, and more.',
27),

(1, 'subheading',
'★ Version Event: Interstellar Cabbage Patch',
28),

(1, 'paragraph',
'Event "Interstellar Cabbage Patch" is coming soon. Harvest cabbages in this event to get a 3★ stigma, AE Imaginons, SS Imaginons, and more.',
29),

(1, 'subheading',
'★ Limited-time Top-up Bonuses Event: Starry Wishes',
30),

(1, 'paragraph',
'During the event, reach top-up milestones to get a Weapon Direct Level-Up Coupon, Thousand-Faced Maestro: Cameo! / Reign Solaris Rank-Up Stamps, Source Prisms, Supply Cards, HOHO Vacation Tickets, and more!',
31),

(1, 'subheading',
'★ Hyperion Arsenal',
32),

(1, 'paragraph',
'New weapons: fists "Vermillion Liuli", PRI-ARM fists "Vermillion Liuli: Full Burn".',
33),

(1, 'paragraph',
'New stigmata: "Weeping Philosopher" stigma set.',
34);

--- PART 2
INSERT INTO news_blocks
(news_id, type, content, sort_order)
VALUES

(1, 'heading',
'Game Adjustments & Optimizations',
35),

(1, 'heading',
'☆☆☆☆☆ Battlesuits ☆☆☆☆☆',
36),

(1, 'subheading',
'◆ Wings of Panacea',
37),

(1, 'list',
'Fixed an issue where her passive skill "Faithful to the Eternal Vow" sometimes failed to immediately restore HP for characters on the field after she entered Stellar Outburst.',
38),

(1, 'list',
'Fixed an issue where the duration of HP regeneration from her passive skill "Faithful to the Eternal Vow" glitched.',
39),

(1, 'list',
'Fixed an issue where she was wrongly interrupted when casting SEQ 3 after obtaining QME during Stellar Surplus.',
40),

(1, 'list',
'Fixed an issue where the consumption of QME sometimes glitched during Stellar Surplus.',
41),

(1, 'list',
'Fixed an issue where her models sometimes glitched during certain bridge interactions.',
42),

(1, 'subheading',
'◆ Miss Espionage',
43),

(1, 'paragraph',
'Fixed an issue with her weapon skill "True Illusion" where Replicate Ultimate wrongly canceled Stellar Outburst after the skill ended while Wheel of Destiny was inactive.',
44),

(1, 'subheading',
'◆ Hi♪ Love Elf♥',
45),

(1, 'paragraph',
'Fixed an issue where, when her QTE "Elegant, Like a Circling Song" was disabled, Love''s Expanse sometimes failed to normally display after activating Grail of Infinitude and entering Stellar Outburst.',
46),

(1, 'subheading',
'◆ Fenghuang of Vicissitude',
47),

(1, 'list',
'Improved the time-related effects of Combo ATK, Joint ATK, and Enhanced Joint ATK in the combo skill "Awaiting Dawn in the Long Night".',
48),

(1, 'list',
'Improved the time-related effects of Parry ATK in the evasion skill "The Light From Fiery Plumes Remains".',
49),

(1, 'list',
'Fixed the skill description of her passive skill "To Support Toppling Mountains": added "The character can also recover HP and SP when casting Enhanced Joint ATK." This is only a text correction and does not affect the actual skill effects.',
50),

(1, 'subheading',
'◆ Silverwing: N-EX',
51),

(1, 'paragraph',
'Fixed an issue on iOS devices that, when she was equipped with Blue Thunder Shuttle EX19 or Blue Thunder Shuttle: Protocol One, the cut-scene of her casting Ultimate "Critical Overload" sometimes glitched.',
52);

INSERT INTO news_blocks
(news_id, type, content, sort_order)
VALUES

-- =========================
-- WEAPONS
-- =========================

(1, 'heading',
'☆☆☆☆☆ Weapons ☆☆☆☆☆',
53),

(1, 'subheading',
'◆ Banquet Rose & Banquet Rose: Faux Crown',
54),

(1, 'list',
'Adjusted Banquet Rose''s weapon skill "Raucous Manor": the CD of "When equipped by Mad Pleasure: Shadowbringer, after her Ultimate lands, Time-frozen Domain will take effect" is now 14s instead of 15s.',
55),

(1, 'list',
'Adjusted Banquet Rose: Faux Crown''s weapon skill "Falling Banquet Hall": the CD of "When equipped by Mad Pleasure: Shadowbringer, after her Ultimate lands, Time-frozen Domain will take effect" is now 14s instead of 15s.',
56),


-- =========================
-- GAMEPLAY
-- =========================

(1, 'heading',
'☆☆☆☆☆ Gameplay ☆☆☆☆☆',
57),

(1, 'subheading',
'◆ Main Story Part 1',
58),

(1, 'paragraph',
'Fixed the item drops in Chapter XIII "ARC Nocturne" Stage EX3 "Oneiric Arc".',
59),

(1, 'subheading',
'◆ Chronicles',
60),

(1, 'list',
'Fixed an issue where obstructions sometimes occurred in Chapter Chiyou after deploying Silverwing: N-EX in stage Barrage.',
61),

(1, 'list',
'Adjusted the objective of Challenge Mode 1-2 in Kallen Fantasy VII.',
62),

(1, 'subheading',
'◆ Memorial Arena',
63),

(1, 'list',
'New SSS boss: Herrscher of the Rimestar.',
64),

(1, 'list',
'Fixed an issue where, when Wings of Panacea or Silverwing: N-EX is deployed, the model of SSS-rank boss Valrahal sometimes wrongly disappeared during phase transition.',
65),

(1, 'list',
'Fixed an issue where model of the enemy Masked Fool Sampo sometimes jittered.',
66),

(1, 'subheading',
'◆ Superstring Dimension',
67),

(1, 'list',
'New stage: Disillusionment: Perilous, featuring Parvati as the boss.',
68),

(1, 'list',
'New stage: Disillusionment: Perilous, featuring Mysterious Ninja as the boss.',
69),

(1, 'list',
'New stage: Disillusionment: Perilous, featuring Meteroid: Epernay as the boss.',
70),

(1, 'list',
'New stage: Disillusionment: Perilous, featuring Sahā: Assaka as the boss.',
71),

(1, 'list',
'New stage: Inferno: Perilous, featuring Masked Fool Sampo as the boss.',
72),

(1, 'list',
'Fixed an issue where the Physical Resist (H) of boss Herrscher of the Void in Fuel: Perilous didn''t take effect.',
73),

(1, 'list',
'Fixed an issue where the model of enemy Masked Fool Sampo sometimes jittered.',
74),

(1, 'subheading',
'◆ Elysian Realm',
75),

(1, 'list',
'Added special adjustments and exclusive signets to Fenghuang of Vicissitude when she is equipped with Divine Key Vermillion Liuli or PRI-ARM Vermillion Liuli: Full Burn.',
76),

(1, 'list',
'Added enemy Parvati to Floor 17 of Deep Sequence.',
77),

(1, 'list',
'Updated the stage effects and buff effects of Deep Sequence.',
78),


-- =========================
-- BATTLE PASS
-- =========================

(1, 'heading',
'☆☆☆☆☆ Battle Pass ☆☆☆☆☆',
79),

(1, 'paragraph',
'Added the following purchasable items to v9.0 BP Materials (Knight BP/Paladin BP required):',
80),

(1, 'paragraph',
'[Character Card & Rank-Up Stamp] Reign Solaris Character Card / Rank-Up Stamps, Reign Solaris Rank-Up Stamps',
81),

(1, 'paragraph',
'[Weapon] Valorous Effulgence',
82),

(1, 'paragraph',
'Added the following purchasable items to Reserve Works:',
83),

(1, 'paragraph',
'[Character Card & Rank-Up Stamp] Fenghuang of Vicissitude Character Card / Rank-Up Stamps, Fenghuang of Vicissitude Rank-Up Stamps',
84),

(1, 'paragraph',
'[Weapon] Torch of Eons, Anchor of the Voyage',
85),

(1, 'paragraph',
'[Stigma] Flavors of Time stigma set, Passionate Dedication stigma set',
86),

(1, 'list',
'Unlock Paladin BP to get A Dream in the Stars Ribbon.',
87),

(1, 'list',
'Updated the battlesuit fragment rewards in Knight BP and Paladin BP to Reign Solaris Fragments.',
88),

(1, 'list',
'Unlock Knight BP/Paladin BP to receive Terminal Aide 0017''s new outfit "404: Overheat Alert".',
89),


-- =========================
-- RETURNEE SUPPORT
-- =========================

(1, 'heading',
'☆☆☆☆☆ Returnee Support ☆☆☆☆☆',
90),

(1, 'paragraph',
'New battlesuits obtainable in Valkyrie Reinforcements:',
91),

(1, 'paragraph',
'Target battlesuits: Thousand-Faced Maestro: Cameo! (S-rank), Valkyrie Pledge (A-rank)',
92),

(1, 'paragraph',
'Other battlesuits: Valkyrie Ranger (A-rank), Valkyrie Triumph (A-rank), Valkyrie Accipiter (A-rank)',
93),

(1, 'paragraph',
'New equipment obtainable in Equipment Reinforcements:',
94),

(1, 'paragraph',
'4★ weapon: drive core Volatile Sparkler',
95),

(1, 'paragraph',
'4★ stigmata: Inimitable Stage Director stigma set',
96),


-- =========================
-- SHOP
-- =========================

(1, 'heading',
'☆☆☆☆☆ Shop ☆☆☆☆☆',
97),

(1, 'subheading',
'◆ Dawei''s Villa',
98),

(1, 'paragraph',
'Added the weapon Vermillion Liuli.',
99),

(1, 'subheading',
'◆ Exchange House',
100),

(1, 'paragraph',
'Added weapon Key of Limpidity, weapon Key of Anonymity, stigma set In the Name of Origin, and stigma set In the Name of Finality.',
101),

(1, 'subheading',
'◆ Supply Shop',
102),

(1, 'paragraph',
'Added Jovial Deception: Shadowdimmer Rank-Up Stamps.',
103),

(1, 'subheading',
'◆ Elysian Shop',
104),

(1, 'paragraph',
'Added Lone Destruction: Shadowchaser Rank-Up Stamps. They will be unlocked after clearing Deep Sequence on Inferno or higher difficulty.',
105),


-- =========================
-- SYSTEM
-- =========================

(1, 'heading',
'☆☆☆☆☆ System ☆☆☆☆☆',
106),

(1, 'subheading',
'◆ Foundry',
107),

(1, 'paragraph',
'You can now craft G4 stigma set Cecilia: Youth and Prism stigma set Heraclitus directly.',
108),

(1, 'subheading',
'◆ Bridge Interactions',
109),

(1, 'paragraph',
'Added interactive animations and voice lines for Senadina.',
110),

(1, 'subheading',
'◆ Other',
111),

(1, 'paragraph',
'Fixed an issue where skill button VFX sometimes glitched on devices with certain resolutions.',
112);

-- NEWS 2
INSERT INTO public.news_blocks (
    news_id,
    type,
    content,
    sort_order
)
VALUES
(2, 'image', 'https://fastcdn.hoyoverse.com/content-v2/bh3/164954/1aef6165e4e5cfc8032ce95a6a0e4111_1606160195676140372.png', 1),

(2, 'paragraph', '"As long as I am here, life''s final chapter won''t be written so carelessly."', 2),

(2, 'paragraph', 'Welcome to v8.9: Lives Flourish Where Feathers Fall (JUN 25 ~ AUG 20)!', 3),

(2, 'heading', 'Update Content', 4),

(2, 'subheading', '★ New S-rank SD-type Battlesuit: Wings of Panacea', 5),

(2, 'paragraph', 'Wings of Panacea is an SD-type Lightning DMG dealer and scythe user. The girl returning from the sea has now grown into a dependable senior, spreading her wings to protect all living beings.', 6),

(2, 'paragraph', 'Wings of Panacea can slash with her scythe swiftly and decisively for 3 sequences, which is more effective against SD- and QUA-type enemies. She can increase her team''s Astral Ring Intensity recovery rate, and when Astral Ring Specialization: World Star is active, her team can enter Stellar Surplus to deal more DMG. As a support, she can also increase her teammates'' Elemental Breach or Physical Breach.', 7),

(2, 'paragraph', '*You can obtain the new battlesuit and her recommended equipment in the following ways:', 8),

(2, 'list', 'Wings of Panacea Battlesuit Supply opens. The featured S-rank battlesuit Wings of Panacea is guaranteed within 90 drops with 50% off the first 10x drops.
Equipment Supply opens. Recommended for Wings of Panacea: scythe Dawn-Caressed Bloom and Ever-Healing Flower stigma set drop rates UP!
Feathers of Rejuvenation login event begins. Log in for 7 days to obtain Ever-Healing Flower Stigma Option x1, Crystals, and more. Open the Stigma Option to choose a piece from the titular stigma set.
The Ever-Healing Flower stigma set is craftable. Crafting a stigma requires Source Prism x2 and Ether Fuel x600.', 9),

(2, 'subheading', '★ Main Story Part 2 Chapter XIII: A Rose in a Curtsy', 10),

(2, 'paragraph', 'Cherish the beauty that blooms for only a fleeting instant, and those enchanted by its light, even as dusk slips quietly into the night, and time bids its farewell.', 11),

(2, 'paragraph', 'Main Story Part 2 Chapter XIII: A Rose in a Curtsy is released. Experience the story to get Crystals, Source Prisms, AE Imaginon, and more.', 12),

(2, 'subheading', '★ Featured Event: Maximum Speed: Delivery Dash', 13),

(2, 'paragraph', 'A long-awaited holiday, considerate friends, a beautiful garden city — it should have been the perfect escape... Wait, why''s someone who''s supposed to be working overtime here?', 14),

(2, 'paragraph', 'The featured event "Maximum Speed: Delivery Dash" begins. Control different characters and fight your way through side-scrolling stages! Play the event to get Mad Pleasure: Shadowbringer''s new outfit "Pact Absolute", Altruistic Plumes Emblem, Crystals, Source Prisms, and more.', 15),

(2, 'subheading', '★ Version Event Rerun: Snazzy Cards Championship', 16),

(2, 'paragraph', 'Snazzy Cards Championship begins! Collect and upgrade Snazzy Cards in the event to build the strongest deck. Play the event to get Crystals, Source Prisms, Honkai Shards, Clear Morning''s Whispers Outfit Option, and more!', 17),

(2, 'paragraph', '*Open Clear Morning''s Whispers Outfit Option to choose one from the following: On Fair Clouds, Spectral Raven, Valkyrie Dawn, 8,000 Asterite.', 18),

(2, 'subheading', '★ Special Event Shop: Iridescent Bazaar', 19),

(2, 'paragraph', 'During v8.9, the event shop "Iridescent Bazaar" is open. Pull in various Supplies or purchase themed bundles to obtain the event token "Rainbow Song of the Sea". Use "Rainbow Song of the Sea" in the shop to purchase Planar Armament: Warped Spacetime''s outfit "Summer Tactical Gear", AstralOp "Serapeum", Divine Key Option, Synergy Cards, Equipment Supply Cards, and more.', 20),

(2, 'subheading', '★ Special Outfit Shop: Summer Style', 21),

(2, 'paragraph', 'The event "Summer Style" begins. Use Crystals to purchase Miss Pink♪, Seaside Vibes, and other rare outfits from the Outfit Shop at a discounted price for a limited time. Other summer outfits, including Roseate Summer and Star-Speckled Blue, also make a temporary return and are sold for Crystals.', 22),

(2, 'subheading', '★ Hyperion Arsenal', 23),

(2, 'paragraph', 'New Weapons: scythe Dawn-Caressed Bloom; PRI-ARM scythe Dawn-Caressed Bloom: Feathers of Revival', 24),

(2, 'paragraph', 'New Stigmata: Ever-Healing Flower stigma set', 25),

(2, 'heading', 'Game Adjustments & Optimizations', 26);

--- PART 2
INSERT INTO public.news_blocks (
    news_id,
    type,
    content,
    sort_order
)
VALUES

-- =========================================================
-- BATTLE SUITS
-- =========================================================

(2, 'heading', '☆☆☆☆☆ Battlesuits ☆☆☆☆☆', 27),

(2, 'subheading', '◆ Silverwing: N-EX', 28),

(2, 'list', 'Unlocked the Astral Ring sub-skill Azure Origin that becomes available when she is equipped with Blue Thunder Shuttle EX19 or Blue Thunder Shuttle: Protocol One.
Fixed an issue where, when she is equipped with Blue Thunder Shuttle EX19 or Blue Thunder Shuttle: Protocol One, casting Mirage Impact by consuming the last 1 point of QME during Stellar Outburst was not considered a Resonance Attack.
Fixed an issue where, when she is equipped with Blue Thunder Shuttle EX19 or Blue Thunder Shuttle: Protocol One, switching teammates after casting Mirage Impact may glitch the camera.
Fixed an issue where, when she is equipped with Blue Thunder Shuttle EX19 or Blue Thunder Shuttle: Protocol One and Law of Ascension is active, QTE avatar VFX sometimes glitched when the leader''s Heavenly Link could be triggered.
Corrected the description of the Astral Ring skill Truth, Flickering in the Palm: After casting Mirage Impact, enemies on the field take more Ice DMG (independent) during the next Ultimate. The trigger condition for removing this effect has been adjusted from "Entering or exiting Stellar Outburst" to "Silverwing: N-EX exiting the field, or entering or exiting Stellar Outburst". This is only a text correction and does not affect the actual effects.
Fixed an issue where her shoulder model sometimes glitched.
Edited the description of the skill Wings of Exceedance. This is only a text correction and does not affect the actual effects.', 29),

(2, 'subheading', '◆ Xentinel · Dawnbearing Crescent', 30),

(2, 'list', 'Adjusted the effect of the passive skill sub-skill Everlasting Path by adding the description "Kiana can also trigger this effect during Augmented Ascension."
Fixed an issue where, when Law of Ascension is active, the trigger counter for the passive skill sub-skill Everlasting Path might not refresh normally after exiting Stellar Outburst.
Fixed an issue on the Valkyrie screen where her eye animations sometimes glitched.
Fixed an issue in Part 2''s Open World where she could repeatedly cast Combo ATK in mid-air.', 31),

(2, 'subheading', '◆ Ba-Dum! Fiery Wishing Star', 32),

(2, 'paragraph', 'Fixed an issue where her model sometimes glitched during bridge interactions in the outfit Wintery Wishes.', 33),

(2, 'subheading', '◆ Lone Planetfarer', 34),

(2, 'paragraph', 'Optimized the definition of Abyssal Energy.', 35),


-- =========================================================
-- STIGMATA
-- =========================================================

(2, 'heading', '☆☆☆☆☆ Stigmata ☆☆☆☆☆', 36),

(2, 'subheading', '◆ Bronya: Backup (B)', 37),

(2, 'paragraph', 'Corrected its skill tags. This is only a text correction and does not affect the actual effects.', 38),


-- =========================================================
-- ASTRALOPS
-- =========================================================

(2, 'heading', '☆☆☆☆☆ AstralOps ☆☆☆☆☆', 39),

(2, 'subheading', '◆ Bailu Youyun', 40),

(2, 'paragraph', 'Added a toggle for the Synergy Attack Understanding and Applying Complex Theories.', 41),

(2, 'subheading', '◆ Serapeum', 42),

(2, 'list', 'Adjusted the effect of the recharge skill A Heart for Lya: When Wheel of Destiny is active, Phantom''s support attacks restore 14 Astral Ring Intensity. This can trigger up to 2 times per Stellar Outburst. Added the new effect "This can trigger up to 1 time per Stellar Surplus." When World Star is active, the character performing Resonance Attack recovers 4.5 Astral Ring Intensity. This can trigger up to 5 times per Stellar Outburst. Added the new effect "This can trigger up to 1 time per Stellar Surplus".
Fixed an issue where the recharge skill A Heart for Lya took effect outside Stellar Outburst.', 43),


-- =========================================================
-- GAMEPLAY
-- =========================================================

(2, 'heading', '☆☆☆☆☆ Gameplay ☆☆☆☆☆', 44),

(2, 'subheading', '◆ Superstring Dimension', 45),

(2, 'list', 'Added the stage Purgatory: Perilous, featuring Tonatiuh: Sunshade as the boss.
Added the stage Resonance: Perilous, featuring Meteoroid: Paros as the boss.
Added the stage Resonance: Perilous, featuring Couatl: Revenant as the boss.
Added the stage Purgatory: Perilous, featuring Vita: Sea''s Depths as the boss.
Added the stage Purgatory: Perilous, featuring Meteoroid: Paros as the boss.
Fixed an issue in Superstring Dimension where the boss Alien Guard - Supplement was sometimes unable to attack and destroy crystals after being affected by control debuffs during phase change.
Fixed an issue in Superstring Dimension where the boss Couatl: Revenant sometimes repeatedly recovered Superposed stacks during phase change.
Fixed an issue in Superstring Dimension where, when Silverwing: N-EX was on the field fighting the boss Meteoroid: Paros, she sometimes could not pick up Shade Spears when Meteoroid: Paros was changing phase.
Fixed an issue in Superstring Dimension where the boss Husk - Nihilius in Frosthelm: Perilous sometimes remained invincible during Phase 2.
Fixed an issue in the stage Bloodbane: Perilous (boss: Bygone Deliverance) where the timer sometimes glitched.', 46),

(2, 'subheading', '◆ Memorial Arena', 47),

(2, 'paragraph', 'Added the SSS boss: Alien Guard - Supplement.', 48),

(2, 'subheading', '◆ Elysian Realm', 49),

(2, 'list', 'Added the unlockable battlesuit Wings of Panacea.
Added the boss Alien Guard - Supplement to Floor 17 of Deep Sequence.
Updated the stage effects and buff effects of Deep Sequence.', 50),


-- =========================================================
-- BATTLE PASS
-- =========================================================

(2, 'heading', '☆☆☆☆☆ Battle Pass ☆☆☆☆☆', 51),

(2, 'list', 'Added the following purchasable items to v8.9 BP Materials (Knight BP/Paladin BP required):

[Character Card/Rank-Up Stamp] Lone Planetfarer Character Card/Rank-Up Stamps, Lone Planetfarer Rank-Up Stamps

[Weapon] Skyveil Feathers

Added the following purchasable items to Reserve Works:

[Character Card/Rank-Up Stamp] Lunar Vow: Crimson Love Character Card/Rank-Up Stamps, Lunar Vow: Crimson Love Rank-Up Stamps

[Weapons] Bloodied Casket, Infinite Intimidator

[Stigmata] Darkness Illuminated stigma set, City-State Epic stigma set

Unlock Paladin BP to get Whispers of the Sea Ribbon.

Updated the battlesuit fragment rewards in Knight BP and Paladin BP to Lone Planetfarer Fragments.

Unlock Knight BP/Paladin BP to obtain BP Robevyom v8.9. Open it to choose one from the following: Dreamy Melody (outfit), Everdream (outfit), Indelible Memories (outfit), Sandy Coast (outfit), 8,000 Asterite.', 52),


-- =========================================================
-- RETURNEE SUPPORT
-- =========================================================

(2, 'heading', '☆☆☆☆☆ Returnee Support ☆☆☆☆☆', 53),

(2, 'subheading', '1. New battlesuits obtainable in Valkyrie Reinforcements', 54),

(2, 'list', 'Target battlesuits: Reign Solaris (S-rank), Stalker: Phantom Iron (A-rank)
Other battlesuits: Valkyrie Triumph (A-rank), Arctic Kriegsmesser (A-rank), Valkyrie Ranger (A-rank)', 55),

(2, 'subheading', '2. New equipment obtainable in Equipment Reinforcements', 56),

(2, 'list', '4★ Weapon: javelin Valorous Effulgence
4★ Stigmata: Illuminating the Universe stigma set', 57),


-- =========================================================
-- SHOP
-- =========================================================

(2, 'heading', '☆☆☆☆☆ Shop ☆☆☆☆☆', 58),

(2, 'subheading', '◆ Dawei''s Villa', 59),

(2, 'paragraph', 'Added the weapon Dawn-Caressed Bloom.', 60),

(2, 'subheading', '◆ Exchange House', 61),

(2, 'paragraph', 'Added the weapon Rudder in Dream, weapon Key of Ascension, Idol Transformation stigma set, and In the Name of Truth stigma set.', 62),

(2, 'subheading', '◆ Supply Shop', 63),

(2, 'paragraph', 'Added Lone Destruction: Shadowchaser Rank-Up Stamps.', 64),

(2, 'subheading', '◆ Elysian Shop', 65),

(2, 'paragraph', 'Lone Destruction: Shadowchaser Rank-Up Stamps will be unlocked after clearing Deep Sequence on Shroud or higher difficulty with Lone Destruction: Shadowchaser.', 66),


-- =========================================================
-- SYSTEM
-- =========================================================

(2, 'heading', '☆☆☆☆☆ System ☆☆☆☆☆', 67),

(2, 'subheading', '◆ Foundry', 68),

(2, 'paragraph', 'You can now craft the G4 stigma set As You Wish, Prism Stigma set Ever-Healing Flower, and PRI-ARM Dawn-Caressed Bloom: Feathers of Revival.', 69),

(2, 'subheading', '◆ Bridge Interactions', 70),

(2, 'paragraph', 'Added interactive animations and voice lines for Wings of Panacea.', 71),

(2, 'subheading', '◆ Achievements', 72),

(2, 'paragraph', 'Added an achievement for obtaining Wings of Panacea.', 73),

(2, 'subheading', '◆ Dorm', 74),

(2, 'paragraph', 'Wings of Panacea can now move into the Dorm. Added interactions and events for her.', 75),

(2, 'subheading', '◆ Others', 76),

(2, 'list', 'Added AstralOp avatars.
Fixed an issue in Dilemma Dreamland 1-4 Caladbolg in Chronicles where Project Bunny''s model sometimes glitched.
Fixed an issue in Chapter XI: Deep End of the Sea where stage objectives and stage effect descriptions were missing on the EX stage info screen.
Improved certain texts in story CGs, dialogues, and subtitles in Main Story Part 2 Chapter XII.
Fixed an issue where crashes occurred on devices running iOS 27 Developer Beta when launching the game.', 77);

-- NEWS 3
-- INSERT KE TABLE NEWS_BLOCKS
INSERT INTO public.news_blocks (
    news_id,
    type,
    content,
    sort_order
)
VALUES

-- VISA-EXCLUSIVE WEB TOP-UP DISCOUNTS

(3, 'image',
'https://fastcdn.hoyoverse.com/content-v2/bh3/158887/c4835d74393ac849bfc2b29dd0c77174_8301045792709743499.png',
1),

(3, 'paragraph',
'Join the event to get 20% off your top-up right away!',
2),

(3, 'link',
'Go Now|https://sdk.hoyoverse.com/payment/hk3os/index.html#/',
3),

(3, 'heading',
'Event Time',
4),

(3, 'paragraph',
'18:00, AUG 21, 2025 ~ 12:00, SEP 3, 2025 (UTC+8)',
5),

(3, 'heading',
'Required Level:',
6),

(3, 'paragraph',
'10 or higher',
7),

(3, 'heading',
'Event Rules:',
8),

(3, 'paragraph',
'After the v8.4 update, a special top-up discount event will be available for Visa payment in the Honkai Impact 3rd Web Top-Up Center. Captains paying with Visa can instantly enjoy 20% off their top-ups.',
9),

(3, 'paragraph',
'Captains can enjoy discounted prices when paying with a Visa card in the Honkai Impact 3rd Web Top-Up Center.',
10),

(3, 'list',
'Top-Up Center discounts do not apply to any taxes or handling fees.
Other top-up channels do not participate in this event. Please refer to the Top-Up Center section on the official website for the payment channels available in different regions.
Top-Up Center discounts only apply to top-ups in Honkai Impact 3rd, not other HoYoverse products.
Currently, the Web Top-Up Center does not support Steam accounts.',
11);