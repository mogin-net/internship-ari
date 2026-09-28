-- CREATE TABLE CHARACTERS
CREATE TABLE public.characters (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    birthday VARCHAR(50),
    birthplace VARCHAR(50),
    fraction VARCHAR(25),
    height FLOAT,
    weight FLOAT,
    image VARCHAR(255) NOT NULL,
    description TEXT
);
ALTER TABLE public.characters
ALTER COLUMN image SET NOT NULL;

-- CREATE TABLE BATTLESUITS
CREATE TABLE public.battlesuits (
    id SERIAL PRIMARY KEY,
    character_id INTEGER NOT NULL,
    name VARCHAR(200) NOT NULL,
    icon VARCHAR(500),
    image VARCHAR(500),

    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
        REFERENCES public.characters(id)
        ON DELETE CASCADE
);

-- INSERT KE KARAKTER TABLE CHARACTERS
insert into public.characters (first_name, last_name, birthday, birthplace, fraction, height, weight, image, description)
values 
	('Kiana', 'Kaslana', 'December 7', 'Schicksal HQ, Lab eA-401-435', 'Schicksal', 163, 49, 'Kiana.webp', 'Kiana Kaslana is the daughter of Cecilia Schariac and Siegfried Kaslana. She is currently enrolled at St. Freya High School to train as a Valkyrie alongside Raiden Mei and Bronya Zaychik. Though no matter where she goes, Kiana always manages to find trouble...'),
	('Mei', 'Raiden', 'April 13', 'Nagazora City, Honshu, Japan', 'Schicksal', 172, 50, 'Mei.webp', 'Raiden Mei is the beautiful and demure daughter of the prominent Raiden Ryoma. Combined with her mastery of Bushido and Itto-ryu, this makes her a true incarnation of silk hiding steel. She attends St. Freya Academy alongside Kiana and Bronya. Although she holds tremendous power within her, she refuses to use it... except when dire circumstances bring it forth.'),
	('Bronya', 'Zaychick', 'August 18', 'Siberia', 'Schicksal', 147, 40, 'Bronya.jpg', 'Bronya Zaychik (Russian: Броня Зайчик; full name: Bronya Alexeievna Zaychik) was a Russian orphan who was raised as a child soldier. She was sent to St. Freya High School in order to spy on Schicksal. During the events she befriended Kiana Kaslana and Raiden Mei.'),
	('Fu Hua', null, 'February 9', 'China', 'Schicksal', 165, 53, 'Hua.jpg', 'Fu Hua is a survivor of the Previous Era and one of the legendary MANTIS warriors who fought against the Honkai to the very end. Immortal and battle-hardened, she now serves as the strict yet caring class monitor of St. Freya High.'),
	('Elysia', null, 'November 11', 'Vladivostok 51', 'MOTH', 163, 54.8, 'Elysia.webp', 'Elysia was the second Flame-Chaser, and the very creator of the group. She was a member of the MOTHs and a very present figure in the Previous Era, helping humanity to fight Herrschers and the Honkai until the bitter end. In the Current Era, Elysia''s simulation is responsible for managing the Elysian Realm in the headquarters of World Serpent, guiding most of the successors sent by the organization in their quest to find the truth about the Previous Era.'),
	('Seele', 'Vollerei', 'October 18', 'Estonia', 'Anti-Entropy', 149, 42, 'Seele.webp', 'Seele Vollerei is a timid orphan raised alongside Bronya Zaychik, who sacrificed herself in the X-10 Experiment to protect her friend, only to be trapped alone in the Sea of Quanta. Despite her fragile appearance, she carries a fierce resolve to protect those she loves, eventually growing into a mature, dependable Valkyrie whom even her closest friends look up to.'),
	('Himeko', 'Murata', 'June 11', 'Far East', 'Schicksal', 167, 65, 'Himeko.webp', 'Himeko is the sharp-tongued yet warmhearted commander of the Valkyries at St. Freya High, guiding Kiana, Mei, and Bronya both in the classroom and on the battlefield. Despite her reckless, hard-drinking exterior, she carries a deep sense of duty and quietly worries over the fate of the students she''s come to love as family.');

-- INSERT KE TABLE BATTLESUITS
-- Kiana
INSERT INTO public.battlesuits
(character_id, name, icon, image)
VALUES
    (
        1,
        'White Comet',
        'WhiteCometIcon.webp',
        'WhiteComet.webp'
    ),
    (
        1,
        'Valkyrie Ranger',
        'ValkyrieRangerIcon.webp',
        'ValkyrieRanger.webp'
    ),
    (
        1,
        'Divine Prayer',
        'DivinePrayerIcon.webp',
        'DivinePrayer.webp'
    ),
    (
        1,
        'Knight Moonbeam',
        'KnightMoonbeamIcon.webp',
        'KnightMoonbeam.webp'
    ),
    (
        1,
        'Herrscher of the Void',
        'HerrscheroftheVoidIcon.webp',
        'HerrscheroftheVoid.webp'
    ),
    (
        1,
        'Void Drifter',
        'VoidDrifterIcon.webp',
        'VoidDrifter.webp'
    ),
    (
        1,
        'Herrscher of Flamescion',
        'HerrscherofFlamescionIcon.webp',
        'HerrscherofFlamescion.webp'
    ),
    (
        1,
        'Herrscher of Finality',
        'HerrscherofFinalityIcon.webp',
        'HerrscherofFinality.webp'
    ),
    (
        1,
        'Ba-Dum! Fiery Wishing Star',
        'BaDumIcon.webp',
        'BaDum.webp'
    );

--- Mei
INSERT INTO public.battlesuits
(character_id, name, icon, image)
VALUES
    (
        2,
        'Crimson Impulse',
        'CrimsonImpulseIcon.webp',
        'CrimsonImpulse.webp'
    ),
    (
        2,
        'Shadow Dash',
        'ShadowDashIcon.webp',
        'ShadowDash.webp'
    ),
    (
        2,
        'Valkyrie Bladestrike',
        'ValkyrieBladestrikeIcon.webp',
        'ValkyrieBladestrike.webp'
    ),
    (
        2,
        'Lightning Empress',
        'LightningEmpressIcon.webp',
        'LightningEmpress.webp'
    ),
    (
        2,
        'Striker Fulminata',
        'StrikerFulminataIcon.webp',
        'StrikerFulminata.webp'
    ),
    (
        2,
        'Herrscher of Thunder',
        'HerrscherofThunderIcon.webp',
        'HerrscherofThunder.webp'
    ),
    (
        2,
        'Danzai Spectramancer',
        'DanzaiSpectramancerIcon.webp',
        'DanzaiSpectramancer.webp'
    ),
    (
        2,
        'Herrscher of Origin',
        'HerrscherofOriginIcon.webp',
        'HerrscherofOrigin.webp'
    ),
    (
        2,
        'Xentinel · Dawnbearing Crescent',
        'XentinelIcon.webp',
        'Xentinel.webp'
    );

--- Bronya
INSERT INTO public.battlesuits
(character_id, name, icon, image)
VALUES
    (
        3,
        'Valkyrie Chariot',
        'ValkyrieChariotIcon.webp',
        'ValkyrieChariot.webp'
    ),
    (
        3,
        'Yamabuki Armor',
        'YamabukiArmorIcon.webp',
        'YamabukiArmor.webp'
    ),
    (
        3,
        'Snowy Sniper',
        'SnowySniperIcon.webp',
        'SnowySniper.webp'
    ),
    (
        3,
        'Wolf''s Dawn',
        'WolfsDawnIcon.webp',
        'WolfsDawn.webp'
    ),
    (
        3,
        'Black Nucleus',
        'BlackNucleusIcon.webp',
        'BlackNucleus.webp'
    ),
    (
        3,
        'Dimension Breaker',
        'DimensionBreakerIcon.webp',
        'DimensionBreaker.webp'
    ),
    (
        3,
        'Herrscher of Reason',
        'HerrscherofReasonIcon.webp',
        'HerrscherofReason.webp'
    ),
    (
        3,
        'Drive Kometa',
        'DriveKometaIcon.webp',
        'DriveKometa.webp'
    ),
    (
        3,
        'Haxxor Bunny',
        'HaxxorBunnyIcon.webp',
        'HaxxorBunny.webp'
    ),
    (
        3,
        'Silverwing: N-EX',
        'SilverwingIcon.webp',
        '/assets/img/battlesuits/bronya/Silverwing.webp'
    ),
    (
        3,
        'Herrscher of Truth',
        'HerrscherofTruthIcon.webp',
        'HerrscherofTruth.webp'
    );

--- Fu Hua
INSERT INTO public.battlesuits
(character_id, name, icon, image)
VALUES
    (
        4,
        'Night Squire',
        'NightSquireIcon.webp',
        'NightSquire.webp'
    ),
    (
        4,
        'Valkyrie Accipiter',
        'ValkyrieAccipiterIcon.webp',
        'ValkyrieAccipiter.webp'
    ),
    (
        4,
        'Shadow Knight',
        'ShadowKnightIcon.webp',
        'ShadowKnight.webp'
    ),
    (
        4,
        'Phoenix',
        'PhoenixIcon.webp',
        'Phoenix.webp'
    ),
    (
        4,
        'Azure Empyrea',
        'AzureEmpyreaIcon.webp',
        'AzureEmpyrea.webp'
    ),
    (
        4,
        'Hawk of the Fog',
        'HawkoftheFogIcon.webp',
        'HawkoftheFog.webp'
    ),
    (
        4,
        'Herrscher of Sentience',
        'HerrscherofSentienceIcon.webp',
        'HerrscherofSentience.webp'
    ),
    (
        4,
        'Fenghuang of Vicissitude',
        'FenghuangofVicissitudeIcon.webp',
        'FenghuangofVicissitude.webp'
    );

--- Elysia
INSERT INTO public.battlesuits
(character_id, name, icon, image)
VALUES
    (
        5,
        'Miss Pink Elf♪',
        'MissPinkElfIcon.webp',
        'MissPinkElf.webp'
    ),
    (
        5,
        'Herrscher of Human - Ego',
        'HerrscherofHumanEgoIcon.webp',
        'HerrscherofHumanEgo.webp'
    ),
    (
        5,
        'Hi♪ Love Elf♥',
        'HiLoveIcon.webp',
        'HiLove.webp'
    );

-- Seele
INSERT INTO public.battlesuits
(character_id, name, icon, image)
VALUES
(
    6,
    'Swallowtail Phantasm',
    'SwallowtailPhantasmIcon.webp',
    'SwallowtailPhantasm.webp'
),
(
    6,
    'Stygian Nymph',
    'StygianNymphIcon.webp',
    'StygianNymph.webp'
),
(
    6,
    'Starchasm Nyx',
    'StarchasmNyxIcon.webp',
    'StarchasmNyx.webp'
),
(
    6,
    'Herrscher of Rebirth',
    'HerrscherofRebirthIcon.webp',
    'HerrscherofRebirth.webp'
),
(
    6,
    'Wings of Panacea',
    'WingsofPanaceaIcon.webp',
    'WingsofPanacea.webp'
);

-- Himeko
INSERT INTO public.battlesuits
(character_id, name, icon, image)
VALUES
(
    7,
    'Battle Storm',
    'BattleStormIcon.webp',
    'BattleStorm.webp'
),
(
    7,
    'Scarlet Fusion',
    'ScarletFusionIcon.webp',
    'ScarletFusion.webp'
),
(
    7,
    'Valkyrie Triumph',
    'ValkyrieTriumphIcon.webp',
    'ValkyrieTriumph.webp'
),
(
    7,
    'Blood Rose',
    'BloodRoseIcon.webp',
    'BloodRose.webp'
),
(
    7,
    'Arctic Kriegsmesser',
    'KriegsmesserIcon.webp',
    'Kriegsmesser.webp'
),
(
    7,
    'Vermilion Knight: Eclipse',
    'VermilionKnightEclipseIcon.webp',
    'VermilionKnightEclipse.webp'
);