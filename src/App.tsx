import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameSection from './components/GameSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import FindBot from './components/FindBot';

import mondstadtBg from '@/assets/Genshin/map BG/mondstadt.jpg';
import dragonspineBg from '@/assets/Genshin/map BG/dragonspine.jpg';
import windrestPeakBg from '@/assets/Genshin/map BG/windrest peak.webp';
import liyueBg from '@/assets/Genshin/map BG/liyue.webp';
import chasmBg from '@/assets/Genshin/map BG/chasm.jpg';
import chenyuBg from '@/assets/Genshin/map BG/chenyu.avif';
import inazuma20Bg from '@/assets/Genshin/map BG/inazuma.avif';
import inazuma21Bg from '@/assets/Genshin/map BG/inazuma 2.1.jpg';
import inazuma22Bg from '@/assets/Genshin/map BG/inazuma 2.2.jpg';
import enkanomiyaBg from '@/assets/Genshin/map BG/enkanomiya.png';
import sumeru30Bg from '@/assets/Genshin/map BG/sumeru 3.0.jpg';
import sumeru31Bg from '@/assets/Genshin/map BG/sumeru 3.1.jpg';
import sumeru34Bg from '@/assets/Genshin/map BG/sumeru 3.2.webp';
import sumeru36Bg from '@/assets/Genshin/map BG/sumeru 3.6.avif';
import fontaine40Bg from '@/assets/Genshin/map BG/fontaine 4.0.jpg';
import fontaine41Bg from '@/assets/Genshin/map BG/fontaine 4.1.webp';
import fontaine42Bg from '@/assets/Genshin/map BG/fontaine 4.2.webp';
import fontaine46Bg from '@/assets/Genshin/map BG/fontaine 4.6.webp';
import natlan50Bg from '@/assets/Genshin/map BG/natlan 5.0.webp';
import natlan52Bg from '@/assets/Genshin/map BG/natlan 5.2.avif';
import natlan55Bg from '@/assets/Genshin/map BG/natlan 5.5.avif';
import natlan58Bg from '@/assets/Genshin/map BG/natlan 5.8.webp';
import nodkrai60Bg from '@/assets/Genshin/map BG/nodkrai 6.0.png';
import nodkrai61Bg from '@/assets/Genshin/map BG/nodkrai 6.1.webp';
import spiralAbyssBg from '@/assets/Genshin/endgame/spiral abyss.webp';
import imaginariumTheaterBg from '@/assets/Genshin/endgame/imaginarium theater.jpg';
import stygianBg from '@/assets/Genshin/endgame/stygian.webp';
import mats1 from '@/assets/Genshin/materials/mats1.webp';
import mats2 from '@/assets/Genshin/materials/mats2.webp';
import mats3 from '@/assets/Genshin/materials/mats3.webp';
import mats4 from '@/assets/Genshin/materials/mats4.webp';
import fishingImg from '@/assets/Genshin/materials/Fishing.webp';
import characterBuildingImg from '@/assets/Genshin/materials/Character_Building.webp';
import bossDropsImg from '@/assets/Genshin/materials/bossdrops.webp';
import archonQuestsBg from '@/assets/Genshin/quests bg/archon quests.webp';
import vouch1 from '@/assets/vouches/1.jfif';
import vouch2 from '@/assets/vouches/2.jfif';
import vouch3 from '@/assets/vouches/3.jfif';
import vouch4 from '@/assets/vouches/4.jfif';
import vouch5 from '@/assets/vouches/5.jfif';
import vouch6 from '@/assets/vouches/6.jfif';
import vouch7 from '@/assets/vouches/7.jfif';
import vouch8 from '@/assets/vouches/8.jfif';
import genshinIcon from '@/assets/game icons/Genshin Impact.jpg';
import hsrIcon from '@/assets/game icons/HSR.webp';
import wuwaIcon from '@/assets/game icons/Wuwa.webp';
import hsrTrailblazeBg from '@/assets/HSR/quests and events/trailblazer missions.avif';
import hsrEventsBg from '@/assets/HSR/quests and events/events.webp';
import hsrSimUniverseBg from '@/assets/HSR/endgame/simulated universe.jpg';
import hsrMocBg from '@/assets/HSR/endgame/memory of chaos.avif';
import hsrPureFictionBg from '@/assets/HSR/endgame/pure fiction.png';
import hsrApocShadowBg from '@/assets/HSR/endgame/apocalyptic shadow.webp';
import hsrHertaBg from '@/assets/HSR/exploration/herta space station.png';
import hsrJariloBg from '@/assets/HSR/exploration/jarilo.jfif';
import hsrXianzhouBg from '@/assets/HSR/exploration/Xianzhou Luofu.webp';
import hsrPenaconyBg from '@/assets/HSR/exploration/penacony.png';
import hsrAmphoreusBg from '@/assets/HSR/exploration/Amphoreus.avif';
import hsrPlanarcadiaBg from '@/assets/HSR/exploration/planarcadia.webp';
import wuwaMissionBg from '@/assets/WuWa/missions & events/WuWa mission.jpg';
import wuwaEventBg from '@/assets/WuWa/missions & events/WuWa event.avif';
import wuwaCharBuildBg from '@/assets/WuWa/character building/BG.jpg';
import wuwaBlackShoreBg from '@/assets/WuWa/exploration/the black shore.webp';
import wuwaRinascitaBg from '@/assets/WuWa/exploration/rinascita.webp';
import wuwaFrostlandsBg from '@/assets/WuWa/exploration/frostlands surface.jpg';
import wuwaHuanglongBg from '@/assets/WuWa/exploration/huanglong.png';
import wuwaLahaiRoiBg from '@/assets/WuWa/exploration/lahai roi.jpg';
import wuwaDimmrBg from '@/assets/WuWa/exploration/dimmr plains.webp';
import storyQuestsBg from '@/assets/Genshin/quests bg/story quests.webp';
import hangoutQuestBg from '@/assets/Genshin/quests bg/hangout quest.avif';
import worldQuestsBg from '@/assets/Genshin/quests bg/world quests.avif';

// Placeholder Data
const genshinCategories = [
  {
    categoryName: "Account Maintenance (Per Month)",
    navLabel: "Maintenance",
    services: [
      { 
        name: "Basic", 
        price: "Php 350.00 | $ 7.00", 
        description: [
          "4/4 Commissions",
          "200 Resin Burn [aka Character Build]",
          "Expedition Dispatch",
          "To Temper Thyself and Journey Far"
        ]
      },
      { 
        name: "Standard", 
        price: "Php 600.00 | $ 12.00", 
        description: [
          "Basic Maintenance Inclusions",
          "Weekly BP Missions (Trounce Domain, Teapot Claim & Purchase, Transient Resin Burn, Cook 20, Forge 20)",
          "Minor Events",
          "To Temper Thyself and Journey Far"
        ]
      },
      { 
        name: "Advanced", 
        price: "Php 850.00 | $ 17.00", 
        description: [
          "Basic Maintenance Inclusions",
          "Standard Maintenance Inclusions",
          "1 Flagship Event"
        ]
      },
      { 
        name: "Premium", 
        price: "Php 1,200.00 | $ 24.00", 
        description: [
          "Basic Maintenance Inclusions",
          "Standard Maintenance Inclusions",
          "Advanced Maintenance Inclusions",
          "Spiral Abyss",
          "Imaginarium Theater",
          "Stygian Onslaught [1200 Dire Prestige]"
        ]
      },
    ]
  },
  {
    categoryName: "Quests",
    services: [
      { 
        name: "Archon Quests & Interludes",
        price: "Depends on quest",
        description: "Complete acts of Archon quests and Interlude chapters. Click to expand for prices.",
        backgroundImage: archonQuestsBg,
        subItems: [
          { name: "Prologue / Mondstadt", isHeader: true },
          { name: "Act I: The Outlander Who Caught the Wind", price: "Php 35.00 | $0.70" },
          { name: "Act II: For a Tomorrow Without Tears", price: "Php 35.00 | $0.70" },
          { name: "Act III: Song of the Dragon and Freedom", price: "Php 35.00 | $0.70" },
          
          { name: "Chapter I / Liyue", isHeader: true },
          { name: "Act I: Of the Land Amidst Monoliths", price: "Php 40.00 | $0.80" },
          { name: "Act II: Farewell, Archaic Lord", price: "Php 80.00 | $1.60" },
          { name: "Act III: A New Star Approaches", price: "Php 80.00 | $1.60" },
          { name: "Act IV - Prelude: Bough Keeper: Dainsleif", price: "Php 40.00 | $0.80" },
          { name: "Act IV: We Will Be Reunited", price: "Php 40.00 | $0.80" },

          { name: "Chapter II / Inazuma", isHeader: true },
          { name: "Prologue: Autumn Winds, Scarlet Leaves", price: "Php 40.00 | $0.80" },
          { name: "Act I: The Immovable God and the Eternal Euthymia", price: "Php 80.00 | $1.60" },
          { name: "Act II: Stillness, the Sublimation of Shadow", price: "Php 40.00 | $0.80" },
          { name: "Act III: Omnipresence Over Mortals", price: "Php 80.00 | $1.60" },
          { name: "Act IV: Requiem of the Echoing Depths", price: "Php 40.00 | $0.80" },

          { name: "Chapter III / Sumeru", isHeader: true },
          { name: "Act I: Through Mists of Smoke and Forests Dark", price: "Php 60.00 | $1.20" },
          { name: "Act II: The Morn a Thousand Roses Brings", price: "Php 90.00 | $1.80" },
          { name: "Act III: Dreams, Emptiness, Deception", price: "Php 60.00 | $1.20" },
          { name: "Act IV: King Deshret and the Three Magi", price: "Php 60.00 | $1.20" },
          { name: "Act V: Akasha Pulses, the Kalpa Flame Rises", price: "Php 90.00 | $1.80" },
          { name: "Act VI: Caribert", price: "Php 60.00 | $1.20" },

          { name: "Chapter IV / Fontaine", isHeader: true },
          { name: "Act I: Prelude of Blancheur and Noirceur", price: "Php 70.00 | $1.40" },
          { name: "Act II: As Light Rain Falls Without Reason", price: "Php 70.00 | $1.40" },
          { name: "Act III: To the Stars Shining in the Depths", price: "Php 70.00 | $1.40" },
          { name: "Act IV: Cataclysm's Quickening", price: "Php 70.00 | $1.40" },
          { name: "Act V: Masquerade of the Guilty", price: "Php 150.00 | $3.00" },
          { name: "Act VI: Bedtime Story", price: "Php 60.00 | $1.20" },

          { name: "Chapter V / Natlan", isHeader: true },
          { name: "Act I: Flowers Resplendent on the Sun-Scorched", price: "Php 75.00 | $1.50" },
          { name: "Act II: Black Stone Under a White Stone", price: "Php 95.00 | $1.90" },
          { name: "Act III: Beyond the Smoke and Mirrors", price: "Php 60.00 | $1.20" },
          { name: "Act IV: The Rainbow Destined to Burn", price: "Php 110.00 | $2.20" },
          { name: "Interlude: All Fires Fuel the Flame", price: "Php 60.00 | $1.20" },
          { name: "Act V: Incandescent Ode of Resurrection", price: "Php 120.00 | $2.40" },
          { name: "Act VI: A Space and Time for You", price: "Php 80.00 | $1.60" },

          { name: "Chapter VI / Snezhnaya", isHeader: true },
          { name: "Prelude: The Journey Home", price: "Php 80.00 | $1.60" },
          { name: "Act I: A Dance of Snowy Tides and Hoarfrost", price: "Php 135.00 | $2.70" },
          { name: "Act II: Elegy of Dust and Lamplight", price: "Php 125.00 | $2.50" },
          { name: "Act III: A Nation That Doesn't Exist", price: "Php 125.00 | $2.50" },
          { name: "Act IV: An Elegy for Faded Moonlight", price: "Php 125.00 | $2.50" },
          { name: "Act V: A Nocturne of the Far North", price: "Php 125.00 | $2.50" },
          { name: "Act VI: Melting Moonlight in the Morning Mist", price: "Php 125.00 | $2.50" },
          { name: "Act VII: A Traveler on a Winter's Night", price: "Php 135.00 | $2.70" },
          { name: "Act VIII: True Moon", price: "Php 135.00 | $2.70" },
          { name: "Act IX: As All Falls to Emptiness", price: "Php 125.00 | $2.50" },
          { name: "Act X: Truth Amongst the Pages of Purana", price: "Php 135.00 | $2.70" },

          { name: "Interlude Chapters", isHeader: true },
          { name: "Act I: The Crane Returns on the Wind", price: "Php 50.00 | $1.00" },
          { name: "Act II: Perilous Trail", price: "Php 60.00 | $1.20" },
          { name: "Act III: Inversion of Genesis", price: "Php 60.00 | $1.20" },
          { name: "Act IV: Paralogism", price: "Php 80.00 | $1.60" }
        ]
      },
      { 
        name: "Story Quests",
        price: "Depends on quest",
        description: "Complete character story quests. Click to expand for specific character prices.",
        backgroundImage: storyQuestsBg,
        subItems: [
          { name: "Alhaitham", price: "Php 65.00 | $1.30" },
          { name: "Arlecchino", price: "Php 70.00 | $1.40" },
          { name: "Ayato", price: "Php 65.00 | $1.30" },
          { name: "Baizhu", price: "Php 65.00 | $1.30" },
          { name: "Chasca [2 Acts]", price: "Php 100.00 | $2.00" },
          { name: "Citlali [3 Acts]", price: "Php 100.00 | $2.00" },
          { name: "Cyno", price: "Php 65.00 | $1.30" },
          { name: "Dehya", price: "Php 65.00 | $1.30" },
          { name: "Durin", price: "Php 100.00 | $2.00" },
          { name: "Escoffier", price: "Php 80.00 | $1.60" },
          { name: "Furina", price: "Php 65.00 | $1.30" },
          { name: "Itto", price: "Php 65.00 | $1.30" },
          { name: "Kazuha", price: "Php 65.00 | $1.30" },
          { name: "Kinich [3 Acts]", price: "Php 100.00 | $2.00" },
          { name: "Linnea", price: "Php 80.00 | $1.60" },
          { name: "Lohen", price: "Php 65.00 | $1.30" },
          { name: "Lyney", price: "Php 65.00 | $1.30" },
          { name: "Mualani [3 Acts]", price: "Php 100.00 | $2.00" },
          { name: "Nahida I", price: "Php 65.00 | $1.30" },
          { name: "Nahida II", price: "Php 70.00 | $1.40" },
          { name: "Navia", price: "Php 65.00 | $1.30" },
          { name: "Neuvillette", price: "Php 65.00 | $1.30" },
          { name: "Nicole", price: "Php 120.00 | $2.40" },
          { name: "Nilou", price: "Php 65.00 | $1.30" },
          { name: "Raiden II", price: "Php 70.00 | $1.40" },
          { name: "Razor", price: "Php 70.00 | $1.40" },
          { name: "Shenhe", price: "Php 70.00 | $1.40" },
          { name: "Skirk", price: "Php 80.00 | $1.60" },
          { name: "Varesa [3 Acts]", price: "Php 100.00 | $2.00" },
          { name: "Varka", price: "Php 80.00 | $1.60" },
          { name: "Wanderer", price: "Php 70.00 | $1.40" },
          { name: "Wriothesley", price: "Php 65.00 | $1.30" },
          { name: "Xilonen [3 Acts]", price: "Php 100.00 | $2.00" },
          { name: "Yae Miko", price: "Php 65.00 | $1.30" },
          { name: "Yelan", price: "Php 65.00 | $1.30" },
          { name: "Zhongli II", price: "Php 70.00 | $1.40" }
        ]
      },
      { 
        name: "Hangouts & Chronicles",
        price: "Depends on quest",
        description: "Complete Hangout events and Tribal Chronicles. Click to expand for prices.",
        backgroundImage: hangoutQuestBg,
        subItems: [
          { name: "Hangout (per ending)", price: "Php 10.00 | $0.20" },
          { name: "Tribal Chronicle Act 1", price: "Php 20.00 | $0.40" },
          { name: "Tribal Chronicle Act 2", price: "Php 20.00 | $0.40" },
          { name: "Tribal Chronicle Act 3", price: "Php 65.00 | $1.30" },
          { name: "Selenic Chronicles I", price: "Php 50.00 | $1.00" },
          { name: "Selenic Chronicles II", price: "Php 50.00 | $1.00" },
          { name: "Selenic Chronicles III", price: "Php 50.00 | $1.00" }
        ]
      },
      { name: "World Quest Chains", price: "Depends on quest", description: "Complete long world quest chains (e.g., Aranara, Golden Slumber).", backgroundImage: worldQuestsBg }
    ]
  },
  {
    categoryName: "Exploration",
    categoryDescription: "Prices are based on bundle prices. Any changes or progress will be taken into consideration during the consultation process.",
    services: [
      { 
        name: "Mondstadt 100%",
        price: "Php 1,000.00 | $20.00",
        description: "Full exploration, all anemoculi, chests, and puzzles. Click to expand for individual area prices.",
        backgroundImage: mondstadtBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Time and Wind", price: "Php 80.00 | $1.70" },
          { name: "Brightcrown Mountains", price: "Php 150.00 | $3.20" },
          { name: "Galesong Hill", price: "Php 150.00 | $3.20" },
          { name: "Starfell Valley", price: "Php 150.00 | $3.20" },
          { name: "Windwail Highland", price: "Php 150.00 | $3.20" },
          
          { name: "Area Collectibles", isHeader: true },
          { name: "Anemoculus Hunt [65]", price: "Php 100.00 | $2.10" },

          { name: "Area Quests", isHeader: true },
          { name: "Archon Quest [Act I to III]", price: "Php 75.00 | $1.60" },
          { name: "Break the Sword Cemetery Seal", price: "Php 50.00 | $1.10" }
        ]
      },
      {
        name: "Dragonspine 100%",
        price: "Php 400.00 | $8.00",
        description: "Full exploration of Dragonspine. Click to expand for individual task prices.",
        backgroundImage: dragonspineBg,
        subItems: [
          { name: "Area Collectibles", isHeader: true },
          { name: "Crimson Agate Hunt [80]", price: "Php 150.00 | $3.00" },
          { name: "Crimson Wish until Lvl 12", price: "Php 50.00 | $1.00" },
          
          { name: "Area Quests", isHeader: true },
          { name: "In the Mountains", price: "Php 75.00 | $1.50" },
          { name: "A Land Entombed", price: "Php 50.00 | $1.00" },
          { name: "Dragonspine's Glacial Secret", price: "free dialogue | free dialogue" },
          { name: "Low Temperature Warning", price: "free dialogue | free dialogue" },
          { name: "The Festering Fang", price: "Php 25.00 | $0.50" },
          { name: "Lost in the Snow", price: "Php 30.00 | $0.60" },
          { name: "Ragged Records", price: "Php 15.00 | $0.30" },
          { name: "The Great Mountain Survey I & II", price: "Php 80.00 | $1.60" },
          { name: "Dragonspine's Last Trio", price: "Php 20.00 | $0.40" }
        ]
      },
      {
        name: "Windrest Peak + Temple of Space 100%",
        price: "Php 1,000.00 | $20.00",
        description: "Full exploration of Windrest Peak and Temple of Space. Click to expand for details.",
        backgroundImage: windrestPeakBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "100% Windrest Peak", price: "Php 150.00 | $3.00" },
          { name: "100% Temple of Space", price: "Php 400.00 | $8.00" },
          
          { name: "Area Collectibles", isHeader: true },
          { name: "Memory Factor/Mnemonic Cluster [30]", price: "Php 150.00 | $3.00" },
          
          { name: "Area Quests", isHeader: true },
          { name: "A Long Day in the Mountains Quest Series", price: "Php 250.00 | $5.00" },
          { name: "Forest Boar Pauses for the Bloom", price: "Php 30.00 | $0.60" },
          { name: "Winds Beneath the Tower of Silence 40", price: "Php 40.00 | $0.80" },
          { name: "Submerged Dragon, Soaring Phoenix", price: "Php 30.00 | $0.60" },
          { name: "Linnea SQ", price: "Php 80.00 | $1.60" }
        ]
      },
      {
        name: "Liyue 100%",
        price: "Php 1,300.00 | $26.00",
        description: "Full exploration of Liyue. Click to expand for individual task prices.",
        backgroundImage: liyueBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Bishui Plains", price: "Php 250.00 | $5.30" },
          { name: "Lisha", price: "Php 250.00 | $5.30" },
          { name: "Minlin", price: "Php 300.00 | $6.30" },
          { name: "Qiongji Estuary", price: "Php 250.00 | $5.30" },
          { name: "Sea of Clouds", price: "Php 250.00 | $5.30" },
          
          { name: "Area Collectibles", isHeader: true },
          { name: "Geoculus Hunt [131]", price: "Php 250.00 | $5.30" },
          
          { name: "Area Quests", isHeader: true },
          { name: "Nine Pillars of Peace", price: "Php 50.00 | $1.10" },
          { name: "Chi of Yore", price: "Php 80.00 | $1.70" },
          { name: "Hereafter Quest Series [3]", price: "Php 40.00 | $0.80" },
          { name: "The Yaksha's Wish", price: "Php 30.00 | $0.60" },
          { name: "Trails in Tianqiu", price: "Php 50.00 | $1.10" },
          { name: "Snapshots", price: "Php 10.00 | $0.20" },
          { name: "A Teapot to Call Home Series [2]", price: "Php 30.00 | $0.60" }
        ]
      },
      {
        name: "Chasm & Underground Mines 100%",
        price: "Php 1,100.00 | $22.00",
        description: "Full exploration of The Chasm. Click to expand for individual task prices.",
        backgroundImage: chasmBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Chasm Surface", price: "Php 250.00 | $5.30" },
          { name: "Chasm Underground", price: "Php 350.00 | $7.40" },
          
          { name: "Area Collectibles", isHeader: true },
          { name: "Lumenspar Hunt [80]", price: "Php 150.00 | $3.20" },

          { name: "Area Quests", isHeader: true },
          { name: "Chasm Delvers", price: "Php 200.00 | $4.20" },
          { name: "A Cliff-Side Hero's Past", price: "Php 30.00 | $0.60" },
          { name: "A Company Vanishing Into the Deep", price: "Php 30.00 | $0.60" },
          { name: "Dimming Mushroom's Call for Help", price: "Php 40.00 | $0.80" },
          { name: "Hydrological Investigation in The Chasm", price: "Php 15.00 | $0.30" },
          { name: "Lost in a Foreign Land [3]", price: "Php 60.00 | $1.30" },
          { name: "Millennial Mountains", price: "Php 40.00 | $0.80" },
          { name: "Mycological Investigation in The Chasm", price: "Php 15.00 | $0.30" },
          { name: "Paleontological Investigation in The Chasm", price: "Php 15.00 | $0.30" },
          { name: "Stolen, by the Rightful Owner", price: "Php 30.00 | $0.60" },
          { name: "The Chasm's Bounty", price: "Php 30.00 | $0.60" },
          { name: "The Missing Miner", price: "Php 30.00 | $0.60" },
          { name: "Undetected Infiltration", price: "Php 30.00 | $0.60" },
          { name: "Valor's Afterglow [3]", price: "Php 80.00 | $1.70" }
        ]
      },
      {
        name: "Chenyu Vale 100%",
        price: "Php 1,100.00 | $22.00",
        description: "Full exploration of Chenyu Vale. Click to expand for individual task prices.",
        backgroundImage: chenyuBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Upper Vale", price: "Php 300.00 | $6.30" },
          { name: "Southern Mountain", price: "Php 300.00 | $6.30" },
          { name: "Mt. Laixin", price: "Php 100.00 | $2.10" },
          
          { name: "Area Collectibles", isHeader: true },
          { name: "Spirit Carp Hunt [50]", price: "Php 150.00 | $3.20" },
          
          { name: "Area Quests", isHeader: true },
          { name: "A Wangshan Walk to Remember", price: "Php 60.00 | $1.30" },
          { name: "Chenyu's Blessings of Sunken Jade", price: "Php 200.00 | $4.20" },
          { name: "Scrolls and Sword Manuals of Guhua", price: "Php 40.00 | $0.80" },
          { name: "Shrouded Vale, Hidden Hero", price: "Php 55.00 | $1.20" },
          { name: "Silently the Butterfly Crosses the Valley", price: "Php 80.00 | $1.70" },
          { name: "The Cloud-Padded Path to the Chiwang Repose", price: "Php 15.00 | $0.30" },
          { name: "Threefold Expectations", price: "Php 80.00 | $1.70" },
          { name: "Chilli Con Cloudy", price: "Php 30.00 | $0.60" },
          { name: "Our Chenyu Vale Trek", price: "Php 30.00 | $0.60" },
          { name: "The Dealing Sands", price: "Php 30.00 | $0.60" },
          { name: "The Roaming Abode", price: "Php 30.00 | $0.60" }
        ]
      },
      {
        name: "Inazuma 2.0 100%",
        price: "Php 1,475.00 | $29.50",
        description: "Full exploration of Inazuma 2.0 (358 chests). Click to expand for individual task prices.",
        backgroundImage: inazuma20Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "100% Narukami", price: "Php 250.00 | $5.00" },
          { name: "100% Kannazuka", price: "Php 250.00 | $5.00" },
          { name: "100% Yashiori", price: "Php 250.00 | $5.00" },

          { name: "Area Collectibles", isHeader: true },
          { name: "2.0 Electroculus Hunt [95]", price: "Php 200.00 | $4.00" },

          { name: "Area Quests", isHeader: true },
          { name: "Sacred Sakura Cleansing Ritual", price: "Php 180.00 | $3.60" },
          { name: "Tatara Tales (7 days)", price: "Php 100.00 | $2.00" },
          { name: "Orobashi's Legacy", price: "Php 120.00 | $2.40" },
          { name: "Gazing Three Thousand Miles Away", price: "Php 30.00 | $0.60" },
          { name: "Chouji's Travels (12 crystal marrow, needs reset)", price: "Php 15.00 | $0.30" },
          { name: "Iwakura Art's Downfall", price: "Php 15.00 | $0.30" },
          { name: "Sakura Arborism", price: "Php 50.00 | $1.00" },
          { name: "Treatment on the Island (12 naku weed)", price: "Php 15.00 | $0.30" }
        ]
      },
      {
        name: "Inazuma 2.1 100%",
        subtitle: "Watatsumi & Seirai Island",
        price: "Php 1,130.00 | $22.60",
        description: "Full exploration of Inazuma 2.1 (204 chests). Click to expand for individual task prices.",
        backgroundImage: inazuma21Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Watatsumi", price: "Php 300.00 | $6.00" },
          { name: "Seirai", price: "Php 300.00 | $6.00" },

          { name: "Area Collectibles", isHeader: true },
          { name: "2.1 Electroculus Hunt [56]", price: "Php 110.00 | $2.20" },

          { name: "Area Quests", isHeader: true },
          { name: "The Moon-bathed Deep", price: "Php 150.00 | $3.00" },
          { name: "Seirai Stormchasers", price: "Php 150.00 | $3.00" },
          { name: "Relics of Seirai", price: "Php 35.00 | $0.70" },
          { name: "The Cat's Affection", price: "Php 20.00 | $0.40" },
          { name: "Divine Plant of the Depths", price: "Php 15.00 | $0.30" },
          { name: "Komaki's Spiritherb Fortune", price: "Php 50.00 | $1.00" }
        ]
      },
      {
        name: "Inazuma 2.2 100%",
        subtitle: "Tsurumi Island",
        price: "Php 700.00 | $14.00",
        description: "Full exploration of Inazuma 2.2 (169 chests). Click to expand for individual task prices.",
        backgroundImage: inazuma22Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Tsurumi", price: "Php 300.00 | $6.00" },

          { name: "Area Collectibles", isHeader: true },
          { name: "2.2 Electroculus Hunt [30]", price: "Php 70.00 | $1.40" },

          { name: "Area Quests", isHeader: true },
          { name: "Through the Mists [4 days]", price: "Php 180.00 | $3.60" },
          { name: "Boatman's Tasks [Ghosts]", price: "Php 150.00 | $3.00" }
        ]
      },
      {
        name: "Enkanomiya 100%",
        price: "Php 1,210.00 | $24.20",
        description: "Full exploration of Enkanomiya (185 chests). Click to expand for individual task prices.",
        backgroundImage: enkanomiyaBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Enkanomiya (w key sigils)", price: "Php 500.00 | $10.00" },

          { name: "Area Collectibles", isHeader: true },
          { name: "Key Sigil Hunt [59]", price: "Php 150.00 | $3.00" },

          { name: "Area Quests", isHeader: true },
          { name: "The Still Water's Flow (unlocks enka)", price: "Php 30.00 | $0.60" },
          { name: "Collection of Dragons & Snakes* (subquests included, 5 books)", price: "Php 120.00 | $2.40" },
          { name: "Erebos' Secret", price: "Php 100.00 | $2.00" },
          { name: "From Dusk to Dawn in Byakuyakoku", price: "Php 150.00 | $3.00" },
          { name: "Antigonus* (before sun and moon)", price: "Php 40.00 | $0.80" },
          { name: "Date's Challenge* (hydrological studies in byakuyakoku)", price: "Php 30.00 | $0.60" },
          { name: "Tricolor File* (bathysmal vishap experimental records)", price: "Php 30.00 | $0.60" },
          { name: "Hyperion's Dirge (need key sigils)", price: "Php 60.00 | $1.20" }
        ]
      },
      {
        name: "Sumeru 3.0 100%",
        price: "Php 2,000.00 | $40.00",
        description: "Full exploration of Sumeru 3.0 (rainforest). Bundle price. Click to expand for individual task prices.",
        backgroundImage: sumeru30Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Ardravi Valley (w oculi, 2-3 days)", price: "Php 250.00 | $5.30" },
          { name: "Ashavan Realm (w oculi, 2-3 days)", price: "Php 300.00 | $6.30" },
          { name: "Avidya Forest (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },
          { name: "Lokapala Jungle (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },
          { name: "Lost Nursery (w oculi, 2-3 days)", price: "Php 35.00 | $0.70" },
          { name: "Vanarana (w oculi, 2-3 days)", price: "Php 100.00 | $2.10" },
          { name: "Vissudha Field (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },

          { name: "Area Collectibles", isHeader: true },
          { name: "3.0 Dendroculus Hunt [110]", price: "Php 220.00 | $4.60" },
          { name: "76 Aranara", price: "Php 200.00 | $4.20" },

          { name: "Area Quests", isHeader: true },
          { name: "Aranyaka Quest", price: "Php 600.00 | $12.60" },
          { name: "Legends of the Stone Lock* (Php 100 if 16 seals + quest)", price: "Php 30.00 | $0.60" },
          { name: "16 Stone Pillar Seals* (Php 100 if 16 seals + quest)", price: "Php 80.00 | $1.70" },
          { name: "Aranyaka Forest Journal (chapters 2, 3, 4 and 5)", price: "Php 150.00 | $3.20" },
          { name: "Static Views 1 & 2 (for 76 Aranara ito)", price: "Php 50.00 | $1.10" },
          { name: "Foolish Fatuus (w 8 strange devices)", price: "Php 150.00 | $3.20" }
        ]
      },
      {
        name: "Sumeru 3.1 100%",
        subtitle: "Sumeru Desert",
        price: "Php 1,000.00 | $20.00",
        description: "Full exploration of Sumeru 3.1 (Great Red Sand). Bundle price. Click to expand for individual task prices.",
        backgroundImage: sumeru31Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Hypostyle Desert (w oculi, 2-3 days)", price: "Php 300.00 | $6.30" },
          { name: "Land of Lower Setekh (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },
          { name: "Land of Upper Setekh (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },

          { name: "Area Collectibles", isHeader: true },
          { name: "3.1 Dendroculus Hunt [70]", price: "Php 150.00 | $3.20" },

          { name: "Area Quests", isHeader: true },
          { name: "Golden Slumber", price: "Php 200.00 | $4.20" },
          { name: "Old Notes & New Friends – Dual Evidence, Soheil's Wish (Invisible Barrier, Hidden Mercenaries, and Desert's Remembrance)", price: "Php 250.00 | $5.30" },
          { name: "Afratu's Dilemma", price: "Php 60.00 | $1.30" }
        ]
      },
      {
        name: "Sumeru 3.4 100%",
        subtitle: "Desert of Hadramaveth",
        price: "Php 900.00 | $18.00",
        description: "Full exploration of Sumeru 3.4 (Desert of Hadramaveth). Bundle price. Click to expand for individual task prices.",
        backgroundImage: sumeru34Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Hadramaveth (w oculi, 3-5 days)", price: "Php 500.00 | $10.50" },

          { name: "Area Collectibles", isHeader: true },
          { name: "3.4 Dendroculus Hunt [55]", price: "Php 150.00 | $3.20" },

          { name: "Area Quests", isHeader: true },
          { name: "Dirge of Bilqis*", price: "Php 250.00 | $5.30" },
          { name: "Rejoice With Me, for What Was Lost Is Now Found", price: "Php 30.00 | $0.60" },
          { name: "Falcon Quests [3]*", price: "Php 100.00 | $2.10" },
          { name: "Apocalypse Lost* – Chessboard of Safhe Shatranj (need dirge & falcon)", price: "Php 35.00 | $0.70" },
          { name: "Her Foes Rage Like Great Waters...", price: "Php 60.00 | $1.30" }
        ]
      },
      {
        name: "Sumeru 3.6 100%",
        subtitle: "Gavireh Lajavard & Realm of Farakhkert",
        price: "Php 1,000.00 | $20.00",
        description: "Full exploration of Sumeru 3.6. Bundle price. Click to expand for individual task prices.",
        backgroundImage: sumeru36Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Gavireh Lajavard (w oculi, plumes, 2-3 days)", price: "Php 250.00 | $5.30" },
          { name: "Realm of Farakhkert (w oculi, plumes, 2-3 days)", price: "Php 250.00 | $5.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "3.6 Dendroculus Hunt [36]", price: "Php 80.00 | $1.70" },
          { name: "Plumes of Purifying Light [36]", price: "Php 180.00 | $3.80" },

          { name: "Area Quests", isHeader: true },
          { name: "Khvarena of Good & Evil", price: "Php 300.00 | $6.30" },
          { name: "Pale Fire", price: "Php 50.00 | $1.10" },
          { name: "An Artist Adrift", price: "Php 45.00 | $0.90" },
          { name: "Lightcall Resonance", price: "Php 60.00 | $1.30" },
          { name: "Monumental Study", price: "Php 80.00 | $1.70" },
          { name: "Heart of Amrita (unlocks plume offering)" }
        ]
      },
      {
        name: "Fontaine 4.0 100%",
        price: "Php 1,375.00 | $29.00",
        description: "Full exploration of Fontaine 4.0. Click to expand for individual task prices.",
        backgroundImage: fontaine40Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Belleau Region (w oculi, 2-3 days)", price: "Php 150.00 | $3.20" },
          { name: "Beryl Region (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },
          { name: "Court of Fontaine (w oculi, 2-3 days)", price: "Php 300.00 | $6.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "4.0 Hydroculus Hunt [85]", price: "Php 200.00 | $4.20" },

          { name: "Area Quests", isHeader: true },
          { name: "Ancient Colors", price: "Php 200.00 | $4.20" },
          { name: "Ann of the Narzissenkreuz", price: "Php 200.00 | $4.20" },
          { name: "Aqueous Tidemarks", price: "Php 50.00 | $1.10" },
          { name: "A Fontanian Message", price: "Php 15.00 | $0.30" },
          { name: "Book of Esoteric Revelations", price: "Php 60.00 | $1.30" }
        ]
      },
      {
        name: "Fontaine 4.1 100%",
        subtitle: "Liffey Region & FRIKEE",
        price: "Php 1,240.00 | $26.30",
        description: "Full exploration of Fontaine 4.1. Click to expand for individual task prices.",
        backgroundImage: fontaine41Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "FRIKEE Region (w oculi, 2-3 days)", price: "Php 250.00 | $5.30" },
          { name: "Liffey Region (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },

          { name: "Area Collectibles", isHeader: true },
          { name: "4.1 Hydroculus Hunt [85]", price: "Php 180.00 | $3.80" },

          { name: "Area Quests", isHeader: true },
          { name: "Unfinished Comedy (ask client for remaining quests)", price: "Php 200.00 | $4.20" },
          { name: "Fontaine Research Institute Chronicles", price: "Php 150.00 | $3.20" },
          { name: "Treacherous Light of the Depths", price: "Php 50.00 | $1.10" },
          { name: "Road to the Singularity", price: "Php 60.00 | $1.30" },
          { name: "In Search of Lost Time [4]", price: "Php 150.00 | $3.20" }
        ]
      },
      {
        name: "Fontaine 4.2 100%",
        subtitle: "Morte Region & Erinnyes Forest",
        price: "Php 1,230.00 | $26.00",
        description: "Full exploration of Fontaine 4.2. Click to expand for individual task prices.",
        backgroundImage: fontaine42Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Erinnyes Forest (w oculi, 2-3 days)", price: "Php 200.00 | $4.20" },
          { name: "Morte Region (w oculi, 2-3 days)", price: "Php 250.00 | $5.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "4.2 Hydroculus Hunt [66]", price: "Php 180.00 | $3.80" },

          { name: "Area Quests", isHeader: true },
          { name: "In the Wake of Narcissus", price: "Php 300.00 | $6.30" },
          { name: "The Wild Fairy of Erinnyes", price: "Php 150.00 | $3.20" },
          { name: "Questioning Melusine and Answering Machine", price: "Php 150.00 | $3.20" },
          { name: "Initial Facts" }
        ]
      },
      {
        name: "Fontaine 4.6 100%",
        subtitle: "Nostoi Region & Sea of Bygone Eras",
        price: "Php 850.00 | $17.90",
        description: "Full exploration of Fontaine 4.6. Click to expand for individual task prices.",
        backgroundImage: fontaine46Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Nostoi Region (w oculi, 1-2 days)", price: "Php 100.00 | $2.10" },
          { name: "Sea of Bygone Eras (w oculi, 2-3 days)", price: "Php 300.00 | $6.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "4.6 Hydroculus Hunt [55]", price: "Php 150.00 | $3.20" },
          { name: "Ancient Autoharmonic Music Box (all six musical scores)", price: "Php 30.00 | $0.60" },

          { name: "Area Quests", isHeader: true },
          { name: "Canticles of Harmony", price: "Php 250.00 | $5.30" },
          { name: "For Yesterday and Tomorrow", price: "Php 10.00 | $0.20" },
          { name: "Latecoming Homecoming", price: "Php 10.00 | $0.20" }
        ]
      },
      {
        name: "Natlan 5.0 100%",
        price: "Php 1,300.00 | $26.00",
        description: "Full exploration of Natlan 5.0. Bundle price. Click to expand for individual task prices.",
        backgroundImage: natlan50Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Basin of Unnumbered Flames", price: "Php 300.00 | $6.30" },
          { name: "Coatepec Mountain", price: "Php 300.00 | $6.30" },
          { name: "Tequemecan Valley", price: "Php 300.00 | $6.30" },
          { name: "Toyac Springs", price: "Php 300.00 | $6.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "5.0 Pyroculus [108]", price: "Php 250.00 | $5.30" },

          { name: "Area Quests", isHeader: true },
          { name: "Lost in the Woods (name for saurian!)", price: "Php 20.00 | $0.40" },
          { name: "Shadows of the Mountains", price: "Php 100.00 | $2.10" },
          { name: "Tale of Dreams Plucked From Fire", price: "Php 50.00 | $1.10" },
          { name: "Between Pledge and Forgettance", price: "Php 100.00 | $2.10" },
          { name: "To the Night, What is the Night's", price: "Php 30.00 | $0.60" },
          { name: "Ripe For Trouble", price: "Php 40.00 | $0.80" },
          { name: "Stride on Rainbows, Split the Waves", price: "Php 50.00 | $1.10" },
          { name: "In the Footsteps of the Chosen of Dragons", price: "Php 100.00 | $2.10" },
          { name: "To Wish Upon a Star", price: "Php 20.00 | $0.40" },
          { name: "The Case of the Crafting Bench", price: "Php 30.00 | $0.60" }
        ]
      },
      {
        name: "Natlan 5.2 100%",
        price: "Php 1,150.00 | $23.00",
        description: "Full exploration of Natlan 5.2. Bundle price. Click to expand for individual task prices.",
        backgroundImage: natlan52Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Quahuacan Cliff", price: "Php 250.00 | $5.30" },
          { name: "Tezcatepetonco Range", price: "Php 250.00 | $5.30" },
          { name: "Ochkanatlan", price: "Php 300.00 | $6.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "5.2 Pyroculus [54]", price: "Php 135.00 | $2.80" },

          { name: "Area Quests", isHeader: true },
          { name: "Lost Traveler in the Ashen Realm Quest Chain", price: "Php 300.00 | $6.30" },
          { name: "Open Your Heart to Me", price: "Php 30.00 | $1.10" },
          { name: "The Mystery of Tecoloapan Beach", price: "Php 75.00 | $1.60" },
          { name: "Twisted Extension", price: "Php 30.00 | $0.60" },
          { name: "Every Aspect of a Warrior & Prerequisites", price: "Php 30.00 | $0.60" },
          { name: "From One Case to Another Quest Chain", price: "Php 40.00 | $0.80" },
          { name: "Magnifico", price: "Php 15.00 | $0.30" },
          { name: "In the Footsteps of the Chosen of Dragons", price: "Php 60.00 | $1.30" },
          { name: "Mictian Tribal Chronicles [1 & 2] (Acts 1 & 2 only)", price: "Php 60.00 | $1.30" }
        ]
      },
      {
        name: "Natlan 5.5 100%",
        subtitle: "Atocpan & Ancient Sacred Mountain",
        price: "Php 900.00 | $18.00",
        description: "Full exploration of Natlan 5.5. Bundle price. Click to expand for individual task prices.",
        backgroundImage: natlan55Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Ancient Sacred Mountain", price: "Php 300.00 | $6.30" },
          { name: "Atocpan", price: "Php 300.00 | $6.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "5.5 Pyroculus [60]", price: "Php 150.00 | $3.20" },

          { name: "Area Quests", isHeader: true },
          { name: "The Way Into the Mountain", price: "Php 30.00 | $0.60" },
          { name: "Path to the Flaming Peaks", price: "Php 15.00 | $0.30" },
          { name: "Chronicler of the Crumbling City Quest Chain", price: "Php 200.00 | $4.20" },
          { name: "A Finale Emberforged Quest Chain", price: "Php 300.00 | $6.30" },
          { name: "The Attack of the... Purple Tepetlsaurus", price: "Php 10.00 | $0.20" },
          { name: "Sing, Ho, For the Greatness of Fat! (after a few hrs / server reset)", price: "Php 20.00 | $0.40" },
          { name: "In the Footsteps of the Chosen of Dragons (confirm with client yung last wq)", price: "Php 60.00 | $1.30" }
        ]
      },
      {
        name: "Natlan 5.8 100%",
        subtitle: "Easybreeze Holiday Resort",
        price: "Php 800.00 | $16.00",
        description: "Full exploration of Natlan 5.8. Bundle price. Click to expand for individual task prices.",
        backgroundImage: natlan58Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Sunspray Summer Resort [4 Acts]", price: "Php 300.00 | $6.30" },
          { name: "Easybreeze Holiday Resort (169 chest count)", price: "Php 350.00 | $7.40" },

          { name: "Area Collectibles", isHeader: true },
          { name: "5.8 Pyroculus [49]", price: "Php 120.00 | $2.50" },

          { name: "Area Quests", isHeader: true },
          { name: "All Good Reunions Follow a Search (available after server reset)", price: "Php 15.00 | $0.30" },
          { name: "Disappeared Dolls", price: "Php 10.00 | $0.20" },
          { name: "Dreamy Paititi", price: "Php 35.00 | $0.70" },
          { name: "Encounters Always Happen on a Holiday", price: "Php 15.00 | $0.30" },
          { name: "Shine On, Pipiban Idol!", price: "Php 15.00 | $0.30" },
          { name: "Strange Encounter of the Tete Isle Kind", price: "Php 15.00 | $0.30" },
          { name: "The Last Survivor of Tenochtiztoc", price: "Php 60.00 | $1.30" },
          { name: "Traces of Chroma", price: "Php 30.00 | $0.60" }
        ]
      },
      {
        name: "Nod Krai 6.0 100%",
        price: "Php 1,300.00 | $26.00",
        description: "Full exploration of Nod Krai 6.0 (299 chests). Bundle price. Click to expand for individual task prices.",
        backgroundImage: nodkrai60Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Hiisi Island", price: "Php 300.00 | $6.30" },
          { name: "Lempo Isle", price: "Php 400.00 | $8.40" },
          { name: "Paha Isle", price: "Php 300.00 | $6.30" },

          { name: "Area Collectibles", isHeader: true },
          { name: "6.0 Lunoculus [112]", price: "Php 250.00 | $5.30" },

          { name: "Area Quests", isHeader: true },
          { name: "Polkka Beneath the Moon's Oracle", price: "Php 200.00 | $4.20" },
          { name: "East of the Moon, West of the Sun", price: "Php 180.00 | $3.80" },
          { name: "Colors of Emptiness", price: "Php 40.00 | $0.80" },
          { name: "Team Rigor, or Team Intuition", price: "Php 50.00 | $1.10" },
          { name: "Priorities First [1 TP]", price: "Php 40.00 | $0.80" },
          { name: "The Chef's Tale [3-day Quest] (recipe: speranza & flagship)", price: "Php 30.00 | $0.60" },
          { name: "Frostmoon Enclave Meeting Point Quests", price: "Php 0.00 | $0.00" },
          { name: "Final Night Cemetery Meeting Point Quests", price: "Php 0.00 | $0.00" },
          { name: "Clink-Clank Krumkake Craftshop Meeting Point Quests", price: "Php 0.00 | $0.00" },
          { name: "Drifting Towards a Promised Sky", price: "Php 40.00 | $0.80" },
          { name: "The Stress of Changing Careers", price: "Php 35.00 | $0.70" },
          { name: "Friends of Molleyvalley", price: "Php 50.00 | $1.10" },
          { name: "The Power of Research", price: "Php 35.00 | $0.70" },
          { name: "The Bell of Mourning Echoes", price: "Php 35.00 | $0.70" },
          { name: "The Flagship Bounty Chests", price: "Php 0.00 | $0.00" }
        ]
      },
      {
        name: "Nod Krai 6.1 100%",
        price: "Php 1,000.00 | $20.00",
        description: "Full exploration of Nod Krai 6.1 (221 chests). Bundle price. Click to expand for individual task prices.",
        backgroundImage: nodkrai61Bg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Map: Voidsea Outlook", price: "Php 350.00 | $7.40" },
          { name: "Map: Wavechaser Plain", price: "Php 350.00 | $7.40" },
          { name: "Map: Ashveil Peak", price: "Php 350.00 | $7.40" },

          { name: "Area Collectibles", isHeader: true },
          { name: "Special Item: 6.3 Lunoculus (80)", price: "Php 200.00 | $4.20" },

          { name: "Area Quests", isHeader: true },
          { name: "AQ: Act VII: A Traveler on a Winter's Night", price: "Php 125.00 | $2.60" },
          { name: "AQ: Act VIII: True Moon", price: "Php 125.00 | $2.60" },
          { name: "WQ: A Gift From the Sea Spirits (Neuvillette Skin)", price: "Php 30.00 | $0.60" },
          { name: "WQ: Prelude to the Night Vigil / Nightingale's Song Quest Series", price: "Php 80.00 | $1.70" },
          { name: "WQ: Doruud's Long Poem Quest Chain [1 TP]", price: "Php 80.00 | $1.70" },
          { name: "WQ: A Star Out of Time Quest Chain", price: "Php 40.00 | $0.80" },
          { name: "WQ: Return to Sender", price: "Php 60.00 | $1.30" },
          { name: "WQ: The Raven's Legacy", price: "Php 50.00 | $1.10" },
          { name: "WQ: To Turn Each Sin Against the Sinner", price: "Php 50.00 | $1.10" },
          { name: "WQ: Echoes of a Forsaken Song", price: "Php 60.00 | $1.30" },
          { name: "WQ: Reverberation of Heroic Spirits", price: "Php 35.00 | $0.70" },
          { name: "MP: The Moonlit Watcher", price: "Php 35.00 | $0.70" },
          { name: "MP: Witch's Lodge", price: "Php 35.00 | $0.70" },
          { name: "MP: On This Intoxicating Night", price: "Php 35.00 | $0.70" },

          { name: "Events", isHeader: true },
          { name: "A Lanternlit Ode to the Silver Moon", price: "Php 250.00 | $5.30" },
          { name: "Moonlit Patrol Exercise", price: "Php 90.00 | $1.90" },
          { name: "Shutterflash Memory Hunt", price: "Php 90.00 | $1.90" }
        ]
      },
    ]
  },
  {
    categoryName: "Material Farming & Character Building",
    navLabel: "Materials & Building",
    services: [],
    images: [mats1, mats2, mats3, mats4, bossDropsImg, fishingImg, characterBuildingImg]
  },
  {
    categoryName: "Endgame Content",
    navLabel: "Endgame",
    categoryDescription: "Results may vary depending on your character roster and builds.",
    services: [
      {
        name: "Spiral Abyss",
        price: "Php 15.00+ | $0.30+",
        description: "Abyss Corridor & Abyssal Moon Spire. Click to expand for per-floor prices.",
        backgroundImage: spiralAbyssBg,
        subItems: [
          { name: "Abyss Corridor", isHeader: true },
          { name: "Floors 1-5", price: "Php 15.00/flr | $0.30/flr" },
          { name: "Floors 6-8", price: "Php 20.00/flr | $0.40/flr" },

          { name: "Abyssal Moon Spire", isHeader: true },
          { name: "Floor 9", price: "Php 40.00 | $0.80" },
          { name: "Floor 10", price: "Php 60.00 | $1.20" },
          { name: "Floor 11", price: "Php 80.00 | $1.60" },
          { name: "Floor 12", price: "Php 120.00 | $2.40" },
          { name: "Floor 9 to 12 (Full Clear)", price: "Php 250.00 | $5.00" }
        ]
      },
      {
        name: "Imaginarium Theater",
        price: "Php 100.00+ | $2.00+",
        description: "Priced by difficulty. Click to expand for prices.",
        backgroundImage: imaginariumTheaterBg,
        subItems: [
          { name: "Easy", price: "Php 100.00 | $2.00" },
          { name: "Normal", price: "Php 150.00 | $3.00" },
          { name: "Hard", price: "Php 200.00 | $4.00" },
          { name: "Visionary", price: "Php 250.00 | $5.00" },
          { name: "Lunar", price: "Php 300.00 | $6.00" }
        ]
      },
      {
        name: "Stygian Onslaught",
        price: "Php 80.00+ | $1.60+",
        description: "Priced by difficulty. Click to expand for prices.",
        backgroundImage: stygianBg,
        subItems: [
          { name: "Hard", price: "Php 80.00 | $1.60" },
          { name: "Menacing", price: "Php 240.00 | $4.80" },
          { name: "Fearless", price: "Php 300.00 | $6.00" }
        ]
      },
    ]
  }
];

// Shared across all games — same client testimonials everywhere.
const clientReviews = [
  { image: vouch1 },
  { image: vouch2 },
  { image: vouch3 },
  { image: vouch4 },
  { image: vouch5 },
  { image: vouch6 },
  { image: vouch7 },
  { image: vouch8 },
];

const hsrCategories = [
  {
    categoryName: "Account Maintenance (Per Month)",
    navLabel: "Maintenance",
    services: [
      {
        name: "Basic",
        price: "Php 350.00 | $7.00",
        description: [
          "Daily Training Points [500]",
          "Trailblaze Power Burn [aka Character Build]",
          "Assignment Dispatch",
          "Echo of War",
          "SU/DU Weekly Pts"
        ]
      },
      {
        name: "Standard",
        price: "Php 600.00 | $12.00",
        description: [
          "Basic Maintenance Inclusions",
          "Apocalyptic Shadow",
          "Pure Fiction",
          "Minor Events"
        ]
      },
      {
        name: "Advanced",
        price: "Php 850.00 | $17.00",
        description: [
          "Basic Maintenance Inclusions",
          "Standard Maintenance Inclusions",
          "1 Flagship Event"
        ]
      },
      {
        name: "Premium",
        price: "Php 1,200.00 | $24.00",
        description: [
          "Basic Maintenance Inclusions",
          "Standard Maintenance Inclusions",
          "Advanced Maintenance Inclusions",
          "Memory of Chaos"
        ]
      }
    ]
  },
  {
    categoryName: "Trailblaze Missions & Events",
    navLabel: "Missions & Events",
    services: [
      {
        name: "Trailblaze Missions",
        price: "Depends on quest",
        description: "Main story missions across all planets. Click to expand for individual prices.",
        backgroundImage: hsrTrailblazeBg,
        subItems: [
          { name: "Herta Space Station", isHeader: true },
          { name: "Today Is Yesterday's Tomorrow", price: "Php 85.00 | $1.70" },
          { name: "Crown of the Mundane and Divine (Continuance)", price: "Php 100.00 | $2.00" },

          { name: "Jarilo-VI", isHeader: true },
          { name: "In the Withering Wintry Night", price: "Php 110.00 | $2.20" },
          { name: "In the Sweltering Morning Sun", price: "Php 110.00 | $2.20" },
          { name: "Jolted Wake From a Winter Dream (Continuance)", price: "Php 100.00 | $2.00" },

          { name: "Xianzhou Luofu", isHeader: true },
          { name: "Windswept Wanderlust", price: "Php 150.00 | $3.00" },
          { name: "Topclouded Towerthrust", price: "Php 120.00 | $2.40" },
          { name: "A Foxian Tale of the Haunted (Continuance)", price: "Php 250.00 | $5.00" },
          { name: "Finest Duel Under the Pristine Blue Part I (Continuance)", price: "Php 160.00 | $3.20" },
          { name: "Finest Duel Under the Pristine Blue Part II (Continuance)", price: "Php 160.00 | $3.20" },

          { name: "Penacony", isHeader: true },
          { name: "The Sound and the Fury", price: "Php 190.00 | $3.80" },
          { name: "Cat Among Pigeons", price: "Php 250.00 | $5.00" },
          { name: "In Our Time", price: "Php 280.00 | $5.60" },
          { name: "Farewell, Penacony", price: "Php 75.00 | $1.50" },
          { name: "Banana Outrage: Battles Without Ninja and Humanity (Continuance)", price: "Php 150.00 | $3.00" },
          { name: "A New Venture on the Eighth Dawn", price: "Php 80.00 | $1.60" },
          { name: "Sweet Dreams and the Holy Grail (Continuance)", price: "Php 200.00 | $4.00" },
          { name: "Memories are Prelude to Dreams", price: "Php 200.00 | $4.00" },

          { name: "Amphoreus", isHeader: true },
          { name: "Heroic Saga of Flame-Chase", price: "Php 300.00 | $6.00" },
          { name: "Light Slips the Gate, Shadow Greets the Throne", price: "Php 300.00 | $6.00" },
          { name: "Through the Petals in the Land of Repose", price: "Php 300.00 | $6.00" },
          { name: "The Fall at Dawn's Rise", price: "Php 300.00 | $6.00" },
          { name: "For the Sun is Set to Die", price: "Php 300.00 | $6.00" },
          { name: "Before Their Deaths", price: "Php 250.00 | $5.00" },
          { name: "Back to the Earth in Evernight", price: "Php 150.00 | $3.00" },
          { name: "As Tomorrow Became Yesterday", price: "Php 250.00 | $5.00" },

          { name: "Planarcadia", isHeader: true },
          { name: "Welcome to Arcadia", price: "Php 250.00 | $5.00" },
          { name: "Unraveled for Daybreak", price: "Php 300.00 | $6.00" },
          { name: "So Laughed the Masses", price: "Php 150.00 | $3.00" }
        ]
      },
      {
        name: "Events",
        price: "Depends on Event",
        description: "Past & current limited-time events. Click to expand for individual prices.",
        backgroundImage: hsrEventsBg,
        subItems: [
          { name: "Boulder Town Super League", price: "Php 120.00 | $2.40" },
          { name: "Everwinter City Museum", price: "Php 250.00 | $5.00" },
          { name: "Tales of the Fantastic", price: "Php 100.00 | $2.00" },
          { name: "Aurum Alley's Hustle and Bustle", price: "Php 300.00 | $6.00" },
          { name: "Aetherium Wars", price: "Php 240.00 | $4.80" },
          { name: "A Foxian Tale of the Haunted", price: "Php 350.00 | $7.00" },
          { name: "Boulder Town Martial Exhibition", price: "Php 120.00 | $2.40" },
          { name: "Critter Pick", price: "Php 150.00 | $3.00" },
          { name: "Hanu's Prison Break", price: "Php 180.00 | $3.60" },
          { name: "Vignettes in a Cup", price: "Php 200.00 | $4.00" },
          { name: "Clockie: Dreamjoy Memoir", price: "Php 250.00 | $5.00" },
          { name: "Origami Bird Clash", price: "Php 240.00 | $4.80" },
          { name: "Saga of Primaveral Blade", price: "Php 300.00 | $6.00" },
          { name: "Luminary Wardance", price: "Php 320.00 | $6.40" },
          { name: "Festive Revelry", price: "Php 120.00 | $2.40" },
          { name: "Sound Hunt Ninjutsu Inscription", price: "Php 280.00 | $5.60" },
          { name: "Cosmic Home Decor Guide", price: "Php 200.00 | $4.00" },
          { name: "Hypogeum Enigma", price: "Php 200.00 | $4.00" },
          { name: "The Awooo Firm", price: "Php 200.00 | $4.00" },
          { name: "Seal Slammers", price: "Php 250.00 | $5.00" },
          { name: "Galactic Baseballer: Demon King", price: "Php 250.00 | $5.00" },
          { name: "Origami Bird Clash: Official Edition", price: "Php 200.00 | $4.00" },
          { name: "Fate/stay night", price: "Php 250.00 | $5.00" },
          { name: "The Chrysos Maze Grand Restaurant", price: "Php 280.00 | $5.60" },
          { name: "Nice Weather For Dromases", price: "Php 200.00 | $4.00" },
          { name: "Snack Dash", price: "Php 200.00 | $4.00" },
          { name: "Chrysos Awoo Championship", price: "Php 200.00 | $4.00" },
          { name: "Remnants of Twilight", price: "Php 150.00 | $3.00" },
          { name: "Cosmicon, Roll On!", price: "Php 300.00 | $6.00" },
          { name: "Wispae War Saga", price: "Php 160.00 | $3.20" },
          { name: "Cosmicon, Roll On Again!", price: "Php 200.00 | $4.00" }
        ]
      }
    ]
  },
  {
    categoryName: "Endgame",
    navLabel: "Endgame",
    categoryDescription: "Results may vary depending on your character roster and builds.",
    services: [
      {
        name: "Simulated Universe",
        price: "Php 1,200.00+ | $24.00+",
        description: "Swarm Disaster, Gold and Gears, Unknowable Domain & more. Click to expand.",
        backgroundImage: hsrSimUniverseBg,
        subItems: [
          { name: "Swarm Disaster", price: "Php 1,200.00 | $24.00" },
          { name: "Gold and Gears (conundrum not included)", price: "Php 1,400.00 | $28.00" },
          { name: "Unknowable Domain (mausoleum not included)", price: "Php 1,200.00 | $24.00" },
          { name: "Divergent Universe (per level)", price: "Php 25.00 | $0.50" },
          { name: "Currency Wars (per level)", price: "Php 25.00 | $0.50" }
        ]
      },
      {
        name: "Memory of Chaos",
        price: "Php 120.00+ | $2.40+",
        description: "Priced by stage range. Click to expand.",
        backgroundImage: hsrMocBg,
        subItems: [
          { name: "Stages 1-8", price: "Php 120.00 | $2.40" },
          { name: "Stages 9-12", price: "Php 120.00 | $2.40" }
        ]
      },
      {
        name: "Pure Fiction",
        price: "Php 50.00+ | $1.00+",
        description: "Priced by stage range. Click to expand.",
        backgroundImage: hsrPureFictionBg,
        subItems: [
          { name: "Stages 1 and 2", price: "Php 100.00 | $2.00" },
          { name: "Stage 3 or 4", price: "Php 50.00 | $1.00" }
        ]
      },
      {
        name: "Apocalyptic Shadow",
        price: "Php 50.00+ | $1.00+",
        description: "Priced by stage range. Click to expand.",
        backgroundImage: hsrApocShadowBg,
        subItems: [
          { name: "Stages 1 and 2", price: "Php 100.00 | $2.00" },
          { name: "Stage 3 or 4", price: "Php 50.00 | $1.00" }
        ]
      }
    ]
  },
  {
    categoryName: "Exploration",
    navLabel: "Exploration",
    categoryDescription: "Prices are based on bundle prices. Any changes or progress will be taken into consideration during the consultation process.",
    services: [
      {
        name: "Herta Space Station 100%",
        price: "Php 135.00 | $2.70",
        description: "Full exploration of Herta Space Station. Click to expand for per-area prices.",
        backgroundImage: hsrHertaBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Base Zone", price: "Php 27.00 | $0.54" },
          { name: "Storage Zone", price: "Php 45.00 | $0.90" },
          { name: "Supply Zone (+4 w/ quest)", price: "Php 24.00 | $0.48" },
          { name: "Seclusion Zone", price: "Php 39.00 | $0.78" }
        ]
      },
      {
        name: "Jarilo-VI 100%",
        price: "Php 324.00 | $6.48",
        description: "Full exploration of Jarilo-VI. Click to expand for per-area prices.",
        backgroundImage: hsrJariloBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Administrative District", price: "Php 30.00 | $0.60" },
          { name: "Outlying Snow Plains", price: "Php 9.00 | $0.18" },
          { name: "Backwater Pass", price: "Php 39.00 | $0.78" },
          { name: "Silvermane Guard Restricted Zone", price: "Php 36.00 | $0.72" },
          { name: "Corridor of Fading Echoes", price: "Php 36.00 | $0.72" },
          { name: "Everwinter Hill", price: "Php 15.00 | $0.30" },
          { name: "Boulder Town", price: "Php 21.00 | $0.42" },
          { name: "Great Mine (+6 w/ quest)", price: "Php 42.00 | $0.84" },
          { name: "Rivet Town", price: "Php 36.00 | $0.72" },
          { name: "Robot Settlement", price: "Php 30.00 | $0.60" },
          { name: "Pillars of Creation", price: "Php 15.00 | $0.30" },
          { name: "Old Weapon Testing Ground", price: "Php 15.00 | $0.30" }
        ]
      },
      {
        name: "Xianzhou Luofu 100%",
        price: "Php 750.00 | $15.00",
        description: "Full exploration of the Xianzhou Luofu. Click to expand for per-area prices.",
        backgroundImage: hsrXianzhouBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Central Starskiff Haven", price: "Php 39.00 | $0.78" },
          { name: "Cloudford", price: "Php 81.00 | $1.62" },
          { name: "Stargazer Navalia", price: "Php 69.00 | $1.38" },
          { name: "Exalting Sanctum", price: "Php 21.00 | $0.42" },
          { name: "Divination Commission", price: "Php 90.00 | $1.80" },
          { name: "Artisanship Commission", price: "Php 90.00 | $1.80" },
          { name: "Alchemy Commission", price: "Php 69.00 | $1.38" },
          { name: "Scalegorge Waterscape", price: "Php 54.00 | $1.08" },
          { name: "Aurum Alley", price: "Php 21.00 | $0.42" },
          { name: "Fyxestroll Garden", price: "Php 51.00 | $1.02" },
          { name: "Shackling Prison (+6 hexanexus remake)", price: "Php 96.00 | $1.92" },
          { name: "Skysplitter (+15 seeking savant quest)", price: "Php 69.00 | $1.38" }
        ]
      },
      {
        name: "Penacony 100%",
        price: "Php 1,700.00 | $34.00",
        description: "Full exploration of Penacony. Click to expand for per-area prices.",
        backgroundImage: hsrPenaconyBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "The Reverie (Reality)", price: "Php 64.00 | $1.28" },
          { name: "Golden Hour", price: "Php 148.00 | $2.96" },
          { name: "Dream's Edge", price: "Php 144.00 | $2.88" },
          { name: "A Child's Dream", price: "Php 104.00 | $2.08" },
          { name: "The Reverie (Dreamscape)", price: "Php 192.00 | $3.84" },
          { name: "Dewlight Pavilion", price: "Php 184.00 | $3.68" },
          { name: "Clock Studios Theme Park", price: "Php 152.00 | $3.04" },
          { name: "Dreamflux Reef", price: "Php 88.00 | $1.76" },
          { name: "SoulGlad Scorchsand Audition Venue", price: "Php 176.00 | $3.52" },
          { name: "Penacony Grand Theater", price: "Php 212.00 | $4.24" },
          { name: "Radiant Feldspar", price: "Php 96.00 | $1.92" },
          { name: "Paperfold University", price: "Php 72.00 | $1.44" },
          { name: "Dream of Gnawing Oak", price: "Php 68.00 | $1.36" }
        ]
      },
      {
        name: "Amphoreus 100%",
        price: "Php 2,848.00 | $56.96",
        description: "Full exploration of Amphoreus. Click to expand for per-area prices.",
        backgroundImage: hsrAmphoreusBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "\"Eternal Holy City\" Okhema", price: "Php 188.00 | $3.76" },
          { name: "\"Strife Ruins\" Castrum Kremnos", price: "Php 156.00 | $3.12" },
          { name: "\"Abyss of Fate\" Janusopolis", price: "Php 136.00 | $2.72" },
          { name: "\"Bloodbathed Battlefront\" Castrum Kremnos", price: "Php 164.00 | $3.28" },
          { name: "\"Murmuring Woods\" Grove of Epiphany", price: "Php 140.00 | $2.80" },
          { name: "\"Sanctum of Prophecy\" Janusopolis (+9 for Januz Maze)", price: "Php 188.00 | $3.76" },
          { name: "\"Demigod Council\" Dawncloud", price: "Php 88.00 | $1.76" },
          { name: "\"Dragonbone City\" Styxia (+9 for Chirping Secret Treasure)", price: "Php 188.00 | $3.76" },
          { name: "\"Fortress of Dome\" Eye of Twilight", price: "Php 144.00 | $2.88" },
          { name: "\"Cloudedge Bastion Ruins\" Eye of Twilight", price: "Php 208.00 | $4.16" },
          { name: "\"Lightless Chapel\" Dawncloud", price: "Php 96.00 | $1.92" },
          { name: "\"Fallen Twilight City\" Okhema", price: "Php 172.00 | $3.44" },
          { name: "\"Strife Ruins\" Castrum Kremnos (II)", price: "Php 156.00 | $3.12" },
          { name: "Aedes Elysiae", price: "Php 92.00 | $1.84" },
          { name: "\"Warbling Shores\" Styxia", price: "Php 188.00 | $3.76" },
          { name: "\"Radiant Scarwood\" Grove of Epiphany", price: "Php 140.00 | $2.80" },
          { name: "\"Universal Matrix\" Great Tomb of the Nameless Titan", price: "Php 96.00 | $1.92" },
          { name: "\"Nightmare's Echo\" Great Tomb of the Nameless Titan", price: "Php 84.00 | $1.68" },
          { name: "\"Memortis Shore\" Ruins of Time", price: "Php 184.00 | $3.68" },
          { name: "Beyond Time: An Eternal Page", price: "Php 32.00 | $0.64" },
          { name: "Vortex of Genesis", price: "Php 8.00 | $0.16" }
        ]
      },
      {
        name: "Planarcadia 100%",
        price: "Php 1,200.00 | $24.00",
        description: "Full exploration of Planarcadia. Click to expand for per-area prices.",
        backgroundImage: hsrPlanarcadiaBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Duomension City", price: "Php 168.00 | $3.36" },
          { name: "Graphia Academy", price: "Php 180.00 | $3.60" },
          { name: "Dovebrook District", price: "Php 160.00 | $3.20" },
          { name: "World's End Tavern", price: "Php 148.00 | $2.96" },
          { name: "Phantasmoon Courtyard", price: "Php 8.00 | $0.16" },
          { name: "Pearluxe Tower", price: "Php 96.00 | $1.92" },
          { name: "Lookout Cloud Station", price: "Php 152.00 | $3.04" },
          { name: "Seafeld City", price: "Php 144.00 | $2.88" },
          { name: "Seafeld TV Tower", price: "Php 144.00 | $2.88" }
        ]
      }
    ]
  }
];

const wuwaCategories = [
  {
    categoryName: "Account Maintenance (Per Month)",
    navLabel: "Maintenance",
    services: [
      {
        name: "Basic",
        price: "Php 350.00 | $7.00",
        description: [
          "Activity Points [100]",
          "240 Waveplate Burn [aka Character Build]",
          "Daily Mission",
          "3/3 Echoes"
        ]
      },
      {
        name: "Standard",
        price: "Php 600.00 | $12.00",
        description: [
          "Basic Maintenance Inclusions",
          "Weekly BP Tasks: Absorb & Tune Echoes, 2/2 Weekly Challenges, 5/5 Tacet/Forgery & Overlord, Fantasies of the Thousand Gateways",
          "Minor Events"
        ]
      },
      {
        name: "Advanced",
        price: "Php 850.00 | $17.00",
        description: [
          "Basic Maintenance Inclusions",
          "Standard Maintenance Inclusions",
          "Tower of Adversity",
          "Whimpering Wastes"
        ]
      },
      {
        name: "Premium",
        price: "Php 1,200.00 | $24.00",
        description: [
          "Basic Maintenance Inclusions",
          "Standard Maintenance Inclusions",
          "Tower of Adversity",
          "Whimpering Wastes",
          "1 Flagship Event"
        ]
      }
    ]
  },
  {
    categoryName: "Main Quests & Events",
    navLabel: "Quests & Events",
    services: [
      {
        name: "Main Quests",
        price: "Depends on quest",
        description: "Full main story across all regions. Click to expand for individual prices.",
        backgroundImage: wuwaMissionBg,
        subItems: [
          { name: "Huanglong", isHeader: true },
          { name: "Prologue: Utterance of Marvels I", price: "Php 75.00 | $1.50" },
          { name: "Prologue: Utterance of Marvels II", price: "Php 75.00 | $1.50" },
          { name: "Chapter I: First Resonance, Act I", price: "Php 75.00 | $1.50" },
          { name: "Chapter I: Echoing Marche, Act II", price: "Php 75.00 | $1.50" },
          { name: "Chapter I: Ominous Star, Act III", price: "Php 75.00 | $1.50" },
          { name: "Chapter I: Clashing Blades, Act IV", price: "Php 75.00 | $1.50" },
          { name: "Chapter I: Rewinding Raindrops, Act V", price: "Php 75.00 | $1.50" },
          { name: "Chapter I: Grand Warstorm, Act VI", price: "Php 75.00 | $1.50" },
          { name: "Chapter I: A New Companion, Interlude", price: "Php 25.00 | $0.50" },
          { name: "Chapter I: Thaw of Eons, Act VII", price: "Php 180.00 | $3.60" },

          { name: "The Black Shores", isHeader: true },
          { name: "Chapter I: To the Shore's End, Act VIII", price: "Php 150.00 | $3.00" },
          { name: "Chapter II: Stagnant Dawn on Wastelands, Act XII", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: Flowing Starlight in the Iris, Segue", price: "Php 80.00 | $1.60" },

          { name: "Rinascita", isHeader: true },
          { name: "Chapter II: Through the Sea Thou Break, Prologue", price: "Php 25.00 | $0.50" },
          { name: "Chapter II: The Sacred Breeze So Often Breathes, Act I", price: "Php 25.00 | $0.50" },
          { name: "Chapter II: Veils Off in Sun or Shadow, Act II", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: What Yesterday Wept, Today Doth Sing, Act III", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: Old Man and the Whale, Interlude (Whale event included)", price: "Php 350.00 | $7.00" },
          { name: "Chapter II: The Maiden, The Defier, The Death Crier, Act IV", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: Shadow of Glory, Act V", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: Flames of Heart, Act VI", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: Dreamcatchers in the Secret Gardens, Act VII", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: Rust, Sword and the Sun, Segue", price: "Php 80.00 | $1.60" },
          { name: "Chapter II: By Sun's Burning Hand, Act VIII", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: By Moon's Fated Light, Act IX", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: The Bygone Shall Always Return, Act X", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: Dawn Breaks on Dark Tides, Act XI", price: "Php 100.00 | $2.00" },
          { name: "Chapter II: A Stranger in a Strange Land, Segue", price: "Php 80.00 | $1.60" },

          { name: "Roya Frostlands", isHeader: true },
          { name: "Chapter III: When the Unknown Thrums, Prologue", price: "Php 25.00 | $0.50" },
          { name: "Chapter III: What Burns Beneath Frostlands, Act I", price: "Php 100.00 | $2.00" },
          { name: "Chapter III: Ode to the Second Sunrise, Act II", price: "Php 100.00 | $2.00" },
          { name: "Chapter III: The Star That Voyages Far, Act III", price: "Php 100.00 | $2.00" },
          { name: "Chapter III: All That Sunlight Touches, Segue", price: "Php 80.00 | $1.60" },
          { name: "Chapter III: Gold Suspended in Shadows, Act IV", price: "Php 100.00 | $2.00" },
          { name: "Chapter III: Rabbit Reflected in Shades, Segue", price: "Php 80.00 | $1.60" },
          { name: "Chapter III: Wishes in the Bell: Epilogue, Segue", price: "Php 40.00 | $0.80" },
          { name: "Chapter III: Starlights from Yesterdays, Act V", price: "Php 100.00 | $2.00" },
          { name: "Chapter III: Beneath a Melting Night Sky, Segue", price: "Php 80.00 | $1.60" }
        ]
      },
      {
        name: "Events",
        price: "Depends on Event",
        description: "Past & current limited-time events. Click to expand for individual prices.",
        backgroundImage: wuwaEventBg,
        subItems: [
          { name: "All Out! Towards the Peaks of Prestige", price: "Php 300.00 | $6.00" },
          { name: "Banners Never Fall", price: "Php 225.00 | $4.50" },
          { name: "Cube, Cubic n Cubie", price: "Php 280.00 | $5.60" },
          { name: "Dreaming Deep", price: "Php 300.00 | $6.00" },
          { name: "Old Man and the Whale", price: "Php 350.00 | $7.00" },
          { name: "Peaks of Prestige: Rekindled Duel", price: "Php 300.00 | $6.00" },
          { name: "Phantasma Dreamland", price: "Php 260.00 | $5.20" },
          { name: "Soar to the Beat", price: "Php 200.00 | $4.00" },
          { name: "Somnium Labyrinth", price: "Php 250.00 | $5.00" },
          { name: "Stranger Things in Honami", price: "Php 300.00 | $6.00" },
          { name: "Tidal Defense Simulator", price: "Php 300.00 | $6.00" },
          { name: "Where Stars Cascade Down", price: "Php 200.00 | $4.00" },
          { name: "Your Summer Will Never Wither", price: "Php 75.00 | $1.50" }
        ]
      }
    ]
  },
  {
    categoryName: "Character Build",
    navLabel: "Character Build",
    categoryDescription: "Per-level pricing for character ascension and skills.",
    services: [
      {
        name: "Character Build",
        price: "Php 5.00+ | $0.10+",
        description: "Sequence ranks and Forte (skill) levels. Click to expand for prices.",
        backgroundImage: wuwaCharBuildBg,
        subItems: [
          { name: "Sequence Ranks", isHeader: true },
          { name: "Rank 1", price: "Php 5.00 | $0.10" },
          { name: "Rank 2", price: "Php 15.00 | $0.30" },
          { name: "Rank 3", price: "Php 30.00 | $0.60" },
          { name: "Rank 4", price: "Php 40.00 | $0.80" },
          { name: "Rank 5", price: "Php 50.00 | $1.00" },
          { name: "Rank 6", price: "Php 60.00 | $1.20" },

          { name: "Forte (Skill Levels)", isHeader: true },
          { name: "Forte Lvl 2", price: "Php 10.00 | $0.20" },
          { name: "Forte Lvl 3", price: "Php 10.00 | $0.20" },
          { name: "Forte Lvl 4", price: "Php 15.00 | $0.30" },
          { name: "Forte Lvl 5", price: "Php 15.00 | $0.30" },
          { name: "Forte Lvl 6", price: "Php 20.00 | $0.40" },
          { name: "Forte Lvl 7", price: "Php 25.00 | $0.50" },
          { name: "Forte Lvl 8", price: "Php 25.00 | $0.50" },
          { name: "Forte Lvl 9", price: "Php 25.00 | $0.50" },
          { name: "Forte Lvl 10", price: "Php 30.00 | $0.60" }
        ]
      }
    ]
  },
  {
    categoryName: "Exploration",
    navLabel: "Exploration",
    categoryDescription: "Prices are based on bundle prices. Any changes or progress will be taken into consideration during the consultation process.",
    services: [
      {
        name: "Huanglong 100%",
        price: "Php 2,635.00 | $52.70",
        description: "Full exploration of Huanglong. Click to expand for per-area prices.",
        backgroundImage: wuwaHuanglongBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Huanglong Sonance Casket [126]", price: "Php 250.00 | $5.00" },
          { name: "Gorges of Spirits", price: "Php 150.00 | $3.00" },
          { name: "Jinzhou", price: "Php 150.00 | $3.00" },
          { name: "Central Plains", price: "Php 300.00 | $6.00" },
          { name: "Desorock Highland", price: "Php 200.00 | $4.00" },
          { name: "Port City of Guixu", price: "Php 240.00 | $4.80" },
          { name: "Dim Forest", price: "Php 200.00 | $4.00" },
          { name: "Wuming Bay", price: "Php 150.00 | $3.00" },
          { name: "Norfall Barrens", price: "Php 165.00 | $3.30" },
          { name: "Whining Aix's Mire", price: "Php 280.00 | $5.60" },
          { name: "Tiger's Maw", price: "Php 150.00 | $3.00" },
          { name: "Mt. Firmament (Version 1.1)", price: "Php 400.00 | $8.00" }
        ]
      },
      {
        name: "The Black Shores 100%",
        price: "Php 640.00 | $12.80",
        description: "Full exploration of The Black Shores. Click to expand for per-area prices.",
        backgroundImage: wuwaBlackShoreBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Black Shores", price: "Php 200.00 | $4.00" },
          { name: "Tethy's Deep", price: "Php 200.00 | $4.00" },
          { name: "Chronorift Metropolis", price: "Php 240.00 | $4.80" }
        ]
      },
      {
        name: "Rinascita 100%",
        price: "Php 2,960.00 | $59.20",
        description: "Full exploration of Rinascita. Click to expand for per-area prices.",
        backgroundImage: wuwaRinascitaBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Averardo Vault", price: "Php 190.00 | $3.80" },
          { name: "Fagaceae Peninsula", price: "Php 200.00 | $4.00" },
          { name: "Hallowed Reach", price: "Php 150.00 | $3.00" },
          { name: "Nimbus Sanctum", price: "Php 160.00 | $3.20" },
          { name: "Penitent's End", price: "Php 220.00 | $4.40" },
          { name: "Ragunna City", price: "Php 30.00 | $0.60" },
          { name: "Thessaleo Fells", price: "Php 220.00 | $4.40" },
          { name: "Whisperwind Haven", price: "Php 230.00 | $4.60" },
          { name: "Riccioli Islands", price: "Php 100.00 | $2.00" },
          { name: "Vault Underground", price: "Php 100.00 | $2.00" },
          { name: "Avinoleum", price: "Php 230.00 | $4.60" },
          { name: "Beohr Waters", price: "Php 135.00 | $2.70" },
          { name: "Septimont", price: "Php 350.00 | $7.00" },
          { name: "Fabricatorium of the Deep", price: "Php 120.00 | $2.40" },
          { name: "Sanguis Plateau", price: "Php 260.00 | $5.20" },
          { name: "Etching Plains", price: "Php 265.00 | $5.30" }
        ]
      },
      {
        name: "Lahai-Roi 100%",
        price: "Php 840.00 | $16.80",
        description: "Full exploration of Lahai-Roi. Click to expand for per-area prices.",
        backgroundImage: wuwaLahaiRoiBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Startorch Academy", price: "Php 80.00 | $1.60" },
          { name: "Starward Riseway", price: "Php 50.00 | $1.00" },
          { name: "Fangspire Chasm", price: "Php 220.00 | $4.40" },
          { name: "Bjartr Woods", price: "Php 90.00 | $1.80" },
          { name: "Stagnant Run", price: "Php 200.00 | $4.00" },
          { name: "Rebirth Uplands", price: "Php 200.00 | $4.00" }
        ]
      },
      {
        name: "Frostlands Surface 100%",
        price: "Php 840.00 | $16.80",
        description: "Full exploration of the Frostlands Surface. Click to expand for per-area prices.",
        backgroundImage: wuwaFrostlandsBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Mawburrow Desert", price: "Php 50.00 | $1.00" },
          { name: "Giant's Gaze", price: "Php 120.00 | $2.40" },
          { name: "Frostlands Transit Port", price: "Php 90.00 | $1.80" },
          { name: "Mount Gjallar", price: "Php 130.00 | $2.60" },
          { name: "Starblind Crashsite", price: "Php 180.00 | $3.60" },
          { name: "Upphaf Forest Ruins", price: "Php 150.00 | $3.00" },
          { name: "Tidelost Forest", price: "Php 120.00 | $2.40" }
        ]
      },
      {
        name: "Dimmr Plains 100%",
        price: "Php 670.00 | $13.40",
        description: "Full exploration of the Dimmr Plains. Click to expand for per-area prices.",
        backgroundImage: wuwaDimmrBg,
        subItems: [
          { name: "Area Exploration", isHeader: true },
          { name: "Solisia Landing", price: "Php 250.00 | $5.00" },
          { name: "Sealed Fissure", price: "Php 150.00 | $3.00" },
          { name: "Silent Crag", price: "Php 150.00 | $3.00" },
          { name: "Dimmr Deep", price: "Php 120.00 | $2.40" }
        ]
      }
    ]
  }
];

export default function App() {
  const [currency, setCurrency] = useState<'PHP' | 'USD'>('PHP');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-black text-brand-offwhite font-sans selection:bg-brand-pink/30 overflow-x-hidden">
        <Navbar currency={currency} setCurrency={setCurrency} />
        
        <main>
          <Hero />

          <AboutUs />

          <div id="services">
            <Routes>
              <Route 
                path="/" 
                element={
                  <GameSection
                    id="genshin-impact"
                    title="Genshin Impact"
                    icon={genshinIcon}
                    categories={genshinCategories}
                    reviews={clientReviews}
                    currency={currency}
                  />
                } 
              />
              <Route 
                path="/honkai-star-rail" 
                element={
                  <GameSection
                    id="honkai-star-rail"
                    title="Honkai: Star Rail"
                    icon={hsrIcon}
                    categories={[hsrCategories[0], hsrCategories[1], hsrCategories[3], hsrCategories[2]]}
                    reviews={clientReviews}
                    currency={currency}
                  />
                } 
              />
              <Route 
                path="/wuthering-waves" 
                element={
                  <GameSection
                    id="wuthering-waves"
                    title="Wuthering Waves"
                    icon={wuwaIcon}
                    categories={[wuwaCategories[0], wuwaCategories[1], wuwaCategories[3], wuwaCategories[2]]}
                    reviews={clientReviews}
                    currency={currency}
                  />
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        <Footer />

        <FindBot
          games={[
            { id: 'genshin-impact', route: '/', title: 'Genshin Impact', icon: genshinIcon, categories: genshinCategories },
            { id: 'honkai-star-rail', route: '/honkai-star-rail', title: 'Honkai: Star Rail', icon: hsrIcon, categories: hsrCategories },
            { id: 'wuthering-waves', route: '/wuthering-waves', title: 'Wuthering Waves', icon: wuwaIcon, categories: wuwaCategories },
          ]}
        />
      </div>
    </BrowserRouter>
  );
}
