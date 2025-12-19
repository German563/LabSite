import { useState } from "react";

function Publications() {
  const [openYears, setOpenYears] = useState({});

  const toggleYear = (year) => {
    if (year === "Open All") {
      const allOpen = Object.values(openYears).every((val) => val === true);
      const newStates = Object.keys(publications).reduce((acc, key) => {
        if (key !== "Open All") acc[key] = !allOpen;
        return acc;
      }, {});
      setOpenYears(newStates);
    } else {
      setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
    }
  };
  const headingStyle = {
    padding: "0.75rem 1rem",
    fontSize: "1.125rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
    textAlign: "center",
    display: "block",
    margin: "0 auto",
    color:"white"
  };

  const publications = {
    "Open All": [],
    2025: [
      {
        authors:
          "Carlot J, Galobart C, Gómez-Gras D, Santamaría J, Golo R, Sini M, Cebrian E, Gerovasileiou V, Ponti M, Turicchia E, Comeau S, Rilov G, Tamburello L, Pulido Mantas T, Cerrano C, Ledoux JB, Gattuso JP, Ramirez-Calero S, Millán Agudo L, Montefalcone M, Katsanevakis S, Bensoussan N, Garrabou J, Teixidó N",
        year: "2025",
        title:
          "Vulnerability of benthic trait diversity across the Mediterranean Sea following mass mortality events.",
        journal: "Nature Communications",
        note: "In press.",
      },
      {
        authors:
          "Barrett TJ, Li M, Gouhier T, Rilov G, Helmuth B, Choi F, Filin S, Müftü S",
        year: "2025",
        title:
          "Fine-scale surface complexity promotes temperature extremes but reduces the spatial extent of refugia on coastal rocks.",
        journal: "Ecological Modelling",
        note: "501",
        doi: "https://doi.org/10.1016/j.ecolmodel.2024.110969",
      },
    ],
    2024: [
      {
        authors:
          "Noe’ S, Bommarito C, Díaz-Morales DM, Guy-Haim T, Ermak K, Wahl M, Sures, Morov AR, Rilov G",
        year: "2024",
        title:
          "Response of native and invasive grazers to global warming: marine heatwaves vs gradual trends.",
        journal: "Marine Ecology Progress Series",
        doi: "https://doi.org/10.3354/meps14716",
      },
      {
        authors:
          "Manda S, Herut B, Rilov G, Kucera M, Morad R, Abramovich S, Ashckenzi-Polivoda S",
        year: "2024",
        title:
          "A dynamic subtropical coastal hotspot of benthic foraminifera in the Southeastern Mediterranean indicates early-stage tropicalization.",
        journal: "Science of the Total Environment",
        note: "945, 173917",
        doi: "https://doi.org/10.1016/j.scitotenv.2024.173917",
      },
      {
        authors:
          "Chest G, Villarino E, McLean M, Mieszkowska N, Benedetti-Cecchi L, Bulleri F, Ravaglioli C, Borja A, Muxika I, Fernandes-Salvador JA, Ibaibarriaga L, Uriate A, Revilla M, Villate F, Iriarte A, Uriarte I, Zervoudaki S, Carstensen J, Somerfield PJ, Queirós AM, McEvoy A, Auber A, Hidalgo M, Coll M, Garrabou J, Gómez-Gras D, Ramírez F, Margarit N, Lepage M, Dambrine C, Lobry J, Peck M, de la Barra P, van Leeuwen A, Rilov G, Yeruham E, Brind’Amour A, Lindegren M",
        year: "2024",
        title:
          "Cross-basin and cross-taxa patterns of marine community tropicalization and deborealization in warming European seas.",
        journal: "Nature Communication",
        note: "15, 2126",
        doi: "https://doi.org/10.1038/s41467-024-46526-y",
      },
      {
        authors: "Soto, 66 co-authors, G. Rilov, 22 co-authors, PJ Houbrock",
        year: "2024",
        title: "Taming the terminological tempest in invasion science.",
        journal: "Biological reviews",
        doi: "https://doi.org/10.1111/brv.13071",
      },
      {
        authors:
          "Rossi V, Pipitone C, Yates KL, Badalamenti F, D’Anna G, Pita C, Argente-García JE, Alves F, Basta J, Claudet J, Dahl K, Fraschetti S, Giovos I, Mackelworth P, Maniopoulou M, Markantonatou V, Marques M, Noguera-Méndez P, Piwowarczyk J, Raykov V, Rilov G, Rumes B, Said A, Semitiel-García M, Teff-Seker Y, Fernández VT, Goldsborough D",
        year: "2024",
        title:
          "Poor online information on European marine protected areas impairs public participation under the Aarhus Convention.",
        journal: "Marine Policy",
        note: "161: 106012",
        doi: "https://doi.org/10.1016/j.marpol.2024.106012",
      },
      {
        authors:
          "Bommarito C, Noè S, Díaz-Morales MD, Lukić I, Hiebenthal C, Rilov G, Sures B, Guy-Haim T, Wahl M",
        year: "2024",
        title:
          "Co-occurrence of native and invasive macroalgae might be facilitated under global warming.",
        journal: "Science of the Total Environment",
        note: "912, 169087",
        doi: "https://doi.org/10.1016/j.scitotenv.2023.169087",
      },
      {
        authors:
          "Ravaglioli C, De Marchi L, Anselmi S, Dattolo E, Fontanini D, Pretti C, Procaccini, Rilov G, Renzi, Silverman J, Bulleri F",
        year: "2023",
        title:
          "Ocean acidification impairs seagrass performance under thermal stress in shallow and deep water.",
        journal: "Environmental Research",
        note: "241 (2024) 117629",
      },
    ],
    2023: [
      {
        authors: "Rilov G, Canning‑Clode J, Guy‑Haim T",
        year: "2023",
        title:
          "Ecological impacts of invasive ecosystem engineers: a global perspective across terrestrial and aquatic systems.",
        journal: "Functional Ecology",
        doi: "https://doi.org/10.1111/1365-2435.14406",
      },
      {
        authors:
          "Guerchon J, Morov AR, Tagar A, Rubin-Blum M, Tikochinski Y, Berenshtein I, Rilov G, Stern N",
        year: "2023",
        title:
          "Marine top secrets: ichthyoplankton in surface water uncover hidden knowledge on fish diversity and distribution.",
        journal: "Estuarine, Coastal and Shelf Science",
        doi: "https://doi.org/10.1016/j.ecss.2023.108226",
      },
      {
        authors:
          "Díaz‑Morales M, Bommarito C, Knol J, Grabner D, Noè S, Rilov G, Wahl M, Guy-Haim T, Sures B",
        year: "2023",
        title:
          "Parasitism enhances gastropod feeding on invasive and native algae while altering essential energy reserves for organismal homeostasis upon warming.",
        journal: "Science of the Total Environment",
        note: "863 (2023) 160727",
        doi: "https://doi.org/10.1016/j.scitotenv.2022.160727",
      },
      {
        authors: "Nikolaou A, Tsirintanis K, Rilov G, Katsanevakis S",
        year: "2023",
        title:
          "Invasive Fish and Sea Urchins Drive the Status of Canopy Forming Macroalgae in the Eastern Mediterranean.",
        journal: "Biology",
        note: "12(6), 763",
        doi: "https://doi.org/10.3390/biology12060763",
      },
      {
        authors:
          "Verdura J, Rehues L, Mangialajo L, Fraschetti S, Belattmania Z, Bianchelli S, Blanfuné A, Sabour B, Chiarore A, Danovaro R, Fabbrizzi E, Giakoumi1 S, Iveša L, Katsanevakis S, Kytinou E, Nasto I, Nikolaou A, Orfanidis S, Rilov G, Rindi F, Sales M, Sini M, Tamburello L, Thibaut T, Tsirintanis K, Cebrian E",
        year: "2023",
        title:
          "Distribution, health and threats to Mediterranean macroalgal forests: defining the baselines for their conservation and restoration.",
        journal: "Frontiers in Marine Science",
        note: "Volume 10",
        doi: "https://www.frontiersin.org/articles/10.3389/fmars.2023.1258842",
      },
      {
        authors:
          "Katsanevakis S, Olenin S, Puntila-Dodd R, Rilov G, Stæhr PAU, Teixeira H, Tsirintanis K, Birchenough SNR, Jakobsen HH, Knudsen SW, Lanzén A, Mazaris AD, Piraino S, Tidbury HJ",
        year: "2023",
        title:
          "Marine Invasive Alien Species (IAS) in Europe: nine years after the IAS Regulation.",
        journal: "Frontiers in Marine Science",
        note: "Volume 10",
        doi: "https://doi.org/10.3389/fmars.2023.1271755",
      },
      {
        authors:
          "Bommarito C, Díaz-Morales MD, Guy-Haim T, Noè S, Delasalle J, Buchholz B, Khosravi M, Rilov G, Sures B, Wahl M",
        year: "2023",
        title:
          "Warming and parasitism impair the performance of Baltic native and invasive macroalgae and their associated fauna.",
        journal: "Limnology and Oceanography",
        doi: "https://aslopubs.onlinelibrary.wiley.com/doi/10.1002/lno.12390",
      },
      {
        authors:
          "Winters G, Conte C, Beca-Carretero P, Manh Nguyen H, Migliore L, Mulas M, Rilov G, Guy-Haim T, González MJ, Medina I, Golomb D, Kitson-Walters K",
        year: "2023",
        title:
          "Superior growth traits of invaded (Caribbean) versus native (Red Sea) populations of the seagrass Halophila stipulacea.",
        journal: "Biological Invasions",
        note: "25: 2325–2342",
        doi: "https://doi.org/10.1007/s10530-023-03045-z",
      },
    ],
    2022: [
      {
        authors: "Mulas M, Silverman J, Guy-Haim T, Noé S, Rilov G",
        year: "2022",
        title:
          "High climate vulnerability of the Levantine endemic and endangered habitat-forming macroalga, Gongolaria rayssiae: implications for reef carbon.",
        journal: "Frontiers in Marine Science",
        doi: "https://www.frontiersin.org/articles/10.3389/fmars.2022.862332/full",
      },
      {
        authors: "Rilov G, Klein L, Iluz D, Dubinsky Z, Guy-Haim T",
        year: "2022",
        title:
          "Last snail standing? Superior thermal resilience of an alien tropical intertidal gastropod over natives in an ocean-warming hotspot.",
        journal: "Biological Invasions",
        note: "24: 3703–3719",
        doi: "https://doi.org/10.1007/s10530-022-02871-x",
      },
      {
        authors:
          "Garrabou J, Gómez-Gras D, Medrano A, Cerrano C, Ponti M, Schlegel R, Bensoussan N, Turicchia E, Sini M, Gerovasileiou V, Teixido N, Mirasole A, Tamburello L, Cebrian E, Rilov G, and 55 more co-authors",
        year: "2022",
        title:
          "Marine heatwaves drive recurrent mass mortalities in the Mediterranean Sea.",
        journal: "Global Change Biology",
        doi: "https://doi.org/10.1111/gcb.16301",
      },
      {
        authors:
          "Escalas A, Avouac A, Belmaker J, Bouvier T, Cledassous V, Ferraton F, Rieuvilleneuve F, Rilov G, Rovirosa Mulet A, Shapiro-Goldberg D, Villéger S",
        year: "2022",
        title:
          "An invasive herbivorous fish (Siganus rivulatus) influences both benthic and planktonic microbes through defecation and nutrient excretion.",
        journal: "Science of the Total Environment",
        note: "838 (2022) 156207",
        doi: "https://www.sciencedirect.com/science/article/abs/pii/S0048969722033046",
      },
      {
        authors:
          "Cooke RSC, Gearty W, Chapman ASA, Dunic J, Edgar GJ, Lefcheck JS, Rilov G, McClain CR, Stuart-Smith RD, Lyons SK, Bates AE",
        year: "2022",
        title:
          "Anthropogenic disruptions to longstanding patterns of trophic-size structure in vertebrates.",
        journal: "Nature Ecology and Evolution",
        doi: "https://www.nature.com/articles/s41559-022-01726-x",
      },
      {
        authors:
          "Díaz‑Morales DM, Bommarito C, Vajedsamiei J, Grabner D, Rilov G, Wahl M, Sures B",
        year: "2022",
        title:
          "Heat sensitivity of first host and cercariae may restrict parasite transmission in a warming sea.",
        journal: "Scientific Reports",
        note: "12: 1174",
        doi: "https://doi.org/10.1038/s41598-022-05139-5",
      },
      {
        authors: "Mulas M, Silverman J, Rilov G",
        year: "2022",
        title:
          "Biomass calibration of nine dominant native and non-native Levantine seaweeds.",
        journal: "Aquatic Botany",
        note: "178: 103496",
        doi: "https://doi.org/10.1016/j.aquabot.2022.103496",
      },
      {
        authors: "Fraschetti S, 29 co-authors, Rilov G, Borja A",
        year: "2022",
        title:
          "An integrated assessment of the Good Environmental Status of Mediterranean Marine Protected Areas.",
        journal: "Journal of Environmental Management",
        doi: "https://doi.org/10.1016/j.jenvman.2021.114370",
      },
      {
        authors:
          "Hamm T, Barkhau J, Gabriel AL, Gottschalck LL, Greulich M, Houiller D, Kawata U, Tump LN, Leon AS, Vasconcelos P, Yap V, Almeida C, Chase Z, Hurd CL, Lavers JL, Nakaoka M, Rilov G, Thiel M, Wright JT, Lenz M",
        year: "2022",
        title:
          "Plastic and natural inorganic microparticles do not differ in their effects on juvenile mussels (Mytilidae) from different geographic regions.",
        journal: "Science of the Total Environment",
        doi: "https://doi.org/10.1016/j.scitotenv.2021.151740",
      },
    ],
    2021: [
      {
        authors: "Shapiro Goldberg D, Rilov G, Villéger S, Belmaker J",
        year: "2021",
        title:
          "Predation cues lead to reduced foraging of invasive Siganus rivulatus in the Mediterranean",
        journal: "Frontiers in Marine Science",
        doi: "https://doi.org/10.3389/fmars.2021.678848",
      },
      {
        authors: "Rilov G, David N, Guy-Haim T, Arav R, Filin S",
        year: "2021",
        title:
          "Sea level rise can severely reduce biodiversity and community net production on rocky shores.",
        journal: "Science of the Total Environment",
        doi: "https://doi.org/10.1016/j.scitotenv.2021.148377",
      },
      {
        authors: "Sara G, 21 co-Authors, Rilov G, 30 co-Authors, Helmuth B",
        year: "2021",
        title:
          "The Synergistic Impacts of Anthropogenic Stressors and COVID-19 on Aquaculture: A Current Global Perspective.",
        journal: "Reviews in Fisheries Sciences and Aquaculture",
        doi: "https://doi.org/10.1080/23308249.2021.1876633",
      },
      {
        authors: "Livore JP, Mendez MM, Miloslavich P, Rilov G, Bigatti G",
        year: "2021",
        title:
          "Biodiversity monitoring in rocky shores: Challenges of devising a globally applicable and cost-effective protocol.",
        journal: "Ocean and Coastal Management",
        doi: "https://doi.org/10.1016/j.ocecoaman.2021.105548",
      },
      {
        authors:
          "Albano PG, Steger J, Bošnjak M, Dunne B, Guifarro Z, Turapova E, Hua Q, Kaufman DS, Rilov G, Zuschin M",
        year: "2021",
        title: "Native biodiversity collapse in the Eastern Mediterranean.",
        journal: "Proceedings of the Royal Society B",
        doi: "https://doi.org/10.1098/rspb.2020.2469",
      },
      {
        authors:
          "Schäfer S, Monteiro J, Castro N, Gizzi F, Henriques F, Ramalhosa P, Wirtz P, Rilov G, Gestoso I, Canning-Clode J",
        year: "2021",
        title:
          "Lost and found: a new hope for a key habitat type in the marine ecosystem of a subtropical Atlantic Island.",
        journal: "Regional Studies in Marine Science",
        note: "41, 101575",
      },
      {
        authors:
          "Creed JC, Rocha RM, Hoeksema BW, Serrano E, Rilov G, Milazzo M, Miranda RJ, Sánchez JA, Fleury BG, Silva AG",
        year: "2021",
        title:
          "Invasive alien species and their effects on marine animal forests.",
        journal:
          "In: Perspectives on the Marine Animal Forest of the World. Rossi S, Bramanti L (Eds). Springer, Heidelberg, Germany.",
      },
    ],
    2020: [
      {
        authors:
          "Gamliel I, Garbal T, Guy-Haim T, Willette D, Rilov G, Belmaker J",
        year: "2020",
        title:
          "Incorporating physiology into species distribution models moderates the projected impact of warming on Mediterranean marine species.",
        journal: "Ecography",
        note: "Accepted",
      },
      {
        authors:
          "Meneghesso C, Seabra R, Broitman BR, Burrows MT, Chan BKK, Guy-Haim T, Wethey DS, Ribeirh PA, Rilov G, Santos AM, Sousa LL, Fernando PL",
        year: "2020",
        title:
          "Remotely-sensed L4 SST underestimate the thermal fingerprint of coastal upwelling.",
        journal: "Remote Sensing of Environment",
        doi: "https://doi.org/10.1016/j.rse.2019.111588",
      },
      {
        authors: "Peleg O, Guy-Haim T, Yeruham E, Silverman J, Rilov G",
        year: "2020",
        title:
          "Tropicalisation may invert trophic state and carbon budget of shallow temperate rocky reefs.",
        journal: "Journal of Ecology",
        doi: "https://doi.org/10.1111/1365-2745.13329",
      },
      {
        authors: "Albano PG, Azzarone M, Amati B, Bogi C, Sabelli B, Rilov G",
        year: "2020",
        title:
          "Poor diversity or poorly explored? A mesophotic molluscan assemblage shows the degree of undersampling of the Eastern Mediterranean.",
        journal: "Biodiversity and Conservation",
        doi: "https://doi.org/10.1007/s10531-020-02063-w",
      },
      {
        authors:
          "Katsanevakis S, Coll M, Fraschetti S, Giakoumi S, Goldsborough D, Mačić V, Mackelworth PC, Rilov G, Stelzenmüller V, Albano PG, Bates AE, Bevilacqua Stanislao, Gissi E, Hermoso V, Mazaris AD, Pita C, Rossi V, Teff-Seker Y, Yates K",
        year: "2020",
        title:
          "Twelve recommendations for advancing marine conservation in European and contiguous seas.",
        journal: "Frontiers in Marine Sciences",
        doi: "https://www.frontiersin.org/articles/10.3389/fmars.2020.565968/full",
      },
      {
        authors:
          "Gissi E, Manea E, Mazaris AD, Fraschetti S, Almpanidou V, Bevilacqua S, Coll M, Guarnieri Giuseppe, Lloret-Lloret E, Pascual M, Petza Dimitra, Rilov G, Schonwald M, Stelzenmüller V, Katsanevakis S",
        year: "2020",
        title:
          "A review of the combined effects of climate change and other human stressors on the marine environment.",
        journal: "Science of the Total Environment",
        doi: "https://doi.org/10.1016/j.scitotenv.2020.142564",
      },
      {
        authors:
          "Mulas M, Neiva J, Sadogurska SS, Ballesteros E, Serrao EA, Rilov G, Israel A",
        year: "2020",
        title:
          "Genetic affinities and biogeography of putative Levantine-endemic seaweed Treptacantha rayssiae (Ramon) M. Mulas, J. Neiva & Á. Israel, comb. nov. (Phaeophyceae).",
        journal: "Cryptogamie Algologie",
        note: "41(10): 91-103",
      },
      {
        authors: "Rabi C, Rilov G, Morov A, Guy-Haim T",
        year: "2020",
        title:
          "First record of the Red Sea gastropod Nerita sanguinolenta Menke, 1829 (Gastropoda: Cycloneritida: Neritidae) from the Israeli Mediterranean coast.",
        journal: "Bioinvasions Records",
        doi: "https://doi.org/10.3391/bir.2020.9.3.06",
      },
      {
        authors: "Guy-Haim T, Silverman J, Wahl M, Aguirre J, Rilov G",
        year: "2020",
        title:
          "Epiphytes alleviate harmful effects of ocean acidification – The dressed coralline hypothesis.",
        journal: "Marine Environmental Research",
        note: "160, 105093",
        doi: "https://doi.org/10.1016/j.marenvres.2020.105093",
      },
      {
        authors: "Rilov G, Peleg O, Guy-Haim T, Yeruham E",
        year: "2020",
        title:
          "Community dynamics and ecological shifts on Mediterranean vermetid reefs.",
        journal: "Marine Environmental Research",
        doi: "https://doi.org/10.1016/j.marenvres.2020.105045",
      },
      {
        authors:
          "Sisma-Ventura G, Antonioli F, Silenzi S, Devoti S, Montagna P, Chemello R, Gehrels, Dean S, Rilov G, Sivan D",
        year: "2020",
        title:
          "Assessing Vermetid reefs as indicators of past sea-levels in the Mediterranean.",
        journal: "Marine Geology",
        note: "429: 106313",
        doi: "https://doi.org/10.1016/j.margeo.2020.106313",
      },
      {
        authors:
          "Bevilacqua S, Katsanevakis S, Micheli F, Sala E, Rilov G, Sarà G, Abdul Malak D, Abdulla A, Gerovasileiou V, Gissi E, Mazaris AD, Pipitone C, Sini M, Stelzenmüller V, Terlizzi A, Todorova V, Fraschetti S",
        year: "2020",
        title:
          "The status of coastal benthic ecosystems in the Mediterranean Sea: evidence from ecological indicators.",
        journal: "Frontiers in Marine Science",
        doi: "https://doi.org/10.3389/fmars.2020.00475",
      },
      {
        authors:
          "Winters G, Beer S, Willette DA, Viana I, Chiquillo KL, Beca-Carretero P, Villamyor B, Azcarate-Garcia T, Shem-Tov R, Mwabvu B, Migliore L, Rotini A, Oscar MA, Belmaker J, Gamliel I, Alexandre A, Engelen AH, Pocaccini G, Rilov G",
        year: "2020",
        title:
          "The tropical seagrass Halophila stipulacea: reviewing what we know from its native and invasive habitats, alongside identifying knowledge gaps.",
        journal: "Frontiers in Marine Science",
        doi: "https://doi.org/10.3389/fmars.2020.00300",
      },
    ],
    2019: [
      {
        authors:
          "Van der Hal N, Yeruham E, Shukis D, Rilov G, Astrahan P, Angel DL",
        year: "2019",
        title:
          "Uptake and incorporation of PCBs by eastern Mediterranean rabbitfish that consumed microplastics.",
        journal: "Marine Pollution Bulletin",
        doi: "https://doi.org/10.1016/j.marpolbul.2019.110697",
      },
      {
        authors: "Garrabou J and 63 more co-authors including Rilov G",
        year: "2019",
        title:
          "Collaborative Database to Track Mass Mortality Events in the Mediterranean Sea.",
        journal: "Frontiers in Marine Science",
        doi: "https://doi.org/10.3389/fmars.2019.00707",
      },
      {
        authors:
          "Wahl M, Werner F, Buchholz B, Raddatz S, Graiff A, Matthiessen B, Karsten U, Hiebenthal C, Hamer J, Ito M, Guelzow E, Rilov G, Guy-Haim T",
        year: "2019",
        title:
          "Season affects strength and direction of the interactive impacts of ocean warming and biotic stress in a coastal seaweed ecosystem.",
        journal: "Limnology & Oceanography",
        doi: "https://doi.org/10.1002/lno.11350",
      },
      {
        authors: "Yeruham E, Shpigel M, Abelson A, Rilov G",
        year: "2019",
        title:
          "Ocean warming and tropical invaders erode the fitness of a key herbivore.",
        journal: "Ecology",
        doi: "https://doi.org/10.1002/ecy.2925",
      },
      {
        authors:
          "Rilov G, Fraschetti S, Gissi E, Pipitone C, Badalamenti F, Tamburello L, Menini E, Goriup P, Mazaris DA, Garrabou J, Benedetti-Cecchi L, Danovaro R, Loiseau C, Claudet J, Katsanevakis S",
        year: "2019",
        title:
          "A fast-moving target: achieving marine conservation goals under shifting climate and policies.",
        journal: "Ecological Applications",
        doi: "https://doi.org/10.1002/eap.2009",
      },
      {
        authors: "Schäfer S, Monteiro J, Castro N, Rilov G, Canning-Clode J",
        year: "2019",
        title:
          "Cronius ruber (Lamarck, 1818) arrives to Madeira Island: a new indication of the ongoing tropicalization of the northeastern Atlantic.",
        journal: "Marine Biodiversity",
        doi: "https://doi.org/10.1007/s12526-019-00999-z",
      },
      {
        authors:
          "Mazaris A, Kallimanis AS, Gissi E, Pipitone C, Danovoro R, Claudet J, Rilov G, Badalameti F, Stelzenmüller, Thiault, Benedetti-Cecchi L, Goriup P, Katsanevakis S, Fraschetti S",
        year: "2019",
        title: "Threats to marine biodiversity in European protected areas.",
        journal: "Science of The Total Environment",
        doi: "https://doi.org/10.1016/j.scitotenv.2019.04.333",
      },
      {
        authors: "Choi F, Gouhier T, Lima F, Rilov G, Seabra Rui, Helmuth B",
        year: "2019",
        title:
          "Mapping physiology: biophysical mechanisms define scales of climate change impacts.",
        journal: "Conservation Physiology",
        note: "7(1) coz28",
        doi: "https://doi.org/10.1093/conphys/coz028",
      },
      {
        authors:
          "Giakoumi S, Katsanevakis S, Albano PG, Azzurro E, Cardoso AC, Cebrian E, Deidun A, Edelist D, Francour P, Jimenez C, Mačić V, Occhipinti-Ambrogi A, Rilov G, Sghaier YR",
        year: "2019",
        title: "Management priorities for marine invasive species.",
        journal: "Science of the Total Environment",
        doi: "https://doi.org/10.1016/j.scitotenv.2019.06.282",
      },
      {
        authors:
          "Rilov G, Mazaris AD, Stelzenmüller V, Helmuth B, Wahl M, Guy-Haim T, Mieszkowska N, Ledoux JB, Katsanevakis S",
        year: "2019",
        title:
          "Adaptive marine conservation planning in the face of climate change: What can we learn from physiological, ecological and genetic studies?",
        journal: "Global Ecology and Conservation",
        doi: "https://doi.org/10.1016/j.gecco.2019.e00566",
      },
      {
        authors: "Mulas M, Silverman J, Israel A, Golomb D, Rilov G",
        year: "2019",
        title:
          "Marine algal forests in the Levantine Basin: the case of Cystoseira rayssiae along the Israeli coast.",
        journal:
          "Proceedings of the 6th Mediterranean Symposium on Marine Vegetation",
      },
      {
        authors: "Rilov G, Peleg O, Guy-Haim T",
        year: "2019",
        title:
          "The restructuring of Levant reefs by aliens, ocean warming and overfishing: implications to species interactions and ecosystem functions.",
        journal:
          "In: Hawkins S, Bohn K (eds) Interactions in the Marine Benthos – A Regional and Habitat Perspective. Cambridge University Press",
        note: "Chapter 9",
      },
    ],
    2018: [
      {
        authors:
          "Fraschetti, S, Pipitone C, Mazaris AD, Rilov G, Badalamenti F, Bevilacqua S, Claudet J, Carić H, Dahl K, D'Anna G, Daunys D, Frost MT, Gissi E, Göke C, Goriup P, Guarnieri G, Holcer D, Lazar B, Mackelworth P, Manzo S, Martin G, Palialexis A, Panayotova MD, Petza D, Rumes B, Todorova V, Katsanevakis S",
        year: "2018",
        title:
          "Light and shade in marine conservation across European and Contiguous Seas.",
        journal: "Frontiers in Marine Science",
        doi: "https://doi.org/10.3389/fmars.2018.00420",
      },
      {
        authors: "Yeruham E, Abelson A, Rilov G, Ben Ezra D, Shpigel M",
        year: "2018",
        title:
          "Energy budget of cultured Paracentrotus lividus under different temperatures.",
        journal: "Aquaculture",
        note: "501: 7-13",
      },
      {
        authors:
          "Bates AE, Helmuth B, Burrows MT, Duncan MI, Garrabou J, Guy-Haim T, Lima F, Queiros AM, Seabra R, Marsh R, Belmaker J, Bensoussan N, Dong YW, Mazaris AD, Smale DA, Rilov G",
        year: "2018",
        title: "Biologists ignore ocean weather at their peril.",
        journal: "Nature",
        note: "560:299-301",
      },
      {
        authors:
          "Mačić V, Albano PG, Almpanidou V, Claudet J, Corrales X, Essl F, Evagelopoulos A, Giovos I, Jimenez C, Kark S, Marković O, Mazaris AD, Ólafsdóttir GÁ, Panayotova M, Petović S, Rabitsch W, Ramdani M, Rilov G, Tricarico E, Vega Fernández T, Sini M, Trygonis V, Katsanevakis S",
        year: "2018",
        title:
          "Biological Invasions in Conservation Planning: A Global Systematic Review.",
        journal: "Frontiers in Marine Science",
        doi: "https://doi.org/10.3389/fmars.2018.00178",
      },
      {
        authors: "Zamir R, Alpert Pinhas, Rilov G",
        year: "2018",
        title:
          "Increase in weather patterns generating extreme desiccation events: implications to Mediterranean rocky shore ecosystems.",
        journal: "Estuaries and Coasts",
        note: "7: 1868-1884",
      },
      {
        authors: "Barash A, Pickholtz R, Pickholtz E, Blaustein L, Rilov G",
        year: "2018",
        title: "Shark aggregations near power plants: an emerging phenomenon.",
        journal: "Marine Ecology Progress Series",
        note: "Accepted",
      },
      {
        authors:
          "Guy-Haim T, Lyons DA, Kotta J, Ojaveer H, Queirós AM, Chatzinikolaou E, Arvanitidis C, Como S, Magni P, Blight AJ, Orav-Kotta H, Somerfield PJ, P Crowe TP, Rilov G",
        year: "2018",
        title:
          "Effects of invasive ecosystem engineers on marine biodiversity and ecosystem functions – a global review and meta-analysis.",
        journal: "Global Change Biology",
        doi: "https://doi.org/10.1111/gcb.14007",
      },
      {
        authors: "Rilov G, Peleg O, Yeruham E, Garval T, Vichik A, Raveh O",
        year: "2018",
        title:
          "Alien turf: overfishing, overgrazing and invader domination on southeastern Levant reef ecosystems.",
        journal: "Aquatic Conservation: Marine and Freshwater Ecosystems",
        doi: "https://doi.org/10.1002/aqc.2862",
      },
    ],
    2017: [
      {
        authors: "Rilov G, Peleg O, Yeruham E, Garval T, Vichik A, Raveh O",
        year: "2017",
        title:
          "Alien turf: overfishing, overgrazing and invader domination on southeastern Levant reef ecosystems.",
        journal: "Aquatic Conservation: Marine and Freshwater Ecosystems",
        doi: "https://doi.org/10.1002/aqc.2862",
      },
      {
        authors:
          "Stelzenmüller V, Coll M, Mazaris AD, Giakoumi S, Katsanevakis S, Portman ME, Degen R, Mackelworth P, Gimpel A, Albano PG, Almpanidou V, Claudet J, Essl F, Evagelopoulos T, Heymans JJ, Genov T, Kark S, Micheli F, Pennino MG, Rilov G, Rumes B, Steenbeek J, Ojaveer H",
        year: "2017",
        title:
          "A risk-based approach to cumulative effect assessments for marine management.",
        journal: "Science of the Total Environment",
        note: "612:1132-1140",
      },
      {
        authors: "Levy Y, Keren T, Leader N, Weil G, Tchernov D, Rilov G",
        year: "2017",
        title:
          "Spatiotemporal hotspots of habitat use by loggerhead (Caretta caretta) and green (Chelonia mydas) sea turtles in the Levant basin as tools for conservation.",
        journal: "Marine Ecology Progress Series",
        note: "575: 165-179",
      },
    ],
    "1998-2016": [
      {
        authors: "Rilov G.",
        year: 2016,
        title: "Multi-species collapses at the warm edge of a warming sea.",
        journal: "Scientific Reports",
        note: "6, 36897",
        doi: "https://doi.org/10.1038/srep36897",
      },
      {
        authors: "Winters G, Edelist D, Shem-Tov R, Beer S, Rilov G",
        year: 2016,
        title: "Aquatic Conservation: Marine and Freshwater Ecosystems.",
        journal: "Aquatic Conservation: Marine and Freshwater Ecosystems",
        doi: "https://doi.org/10.1002/aqc.2688",
      },
      {
        authors: "Raddatz S, Guy-Haim T, Rilov G, Wahl M",
        year: 2016,
        title:
          "Future warming and acidification effects on anti-fouling and anti-herbivory traits of the brown alga Fucus vesiculosus (Phaeophyceae)",
        journal: "Journal of Phycology",
        doi: "https://doi.org/10.1111/jpy.12473",
      },
      {
        authors: "Hummel H, Rilov G, Peleg O., and more 48 co-authors",
        year: 2016,
        title:
          "Geographic patterns of biodiversity in European coastal marine benthos",
        journal: "Journal of the Marine Biological Association of the UK",
        doi: "https://doi.org/10.1017/S0025315416001119",
      },
      {
        authors: "Kotta J, Rilov G, Peleg O. and 39 more co-authors",
        year: 2016,
        title:
          "Essence of the patterns of cover and richness of intertidal hard bottom communities: a pan-European study",
        journal: "Journal of the Marine Biological Association of the UK",
        doi: "https://doi.org/10.1017/S0025315416001351",
      },
      {
        authors: "Dal Bello M, Rilov G, Peleg O. and 41 more co-authors",
        year: 2016,
        title:
          "Consistent patterns of spatial variability between NE Atlantic and Mediterranean rocky shores",
        journal: "Journal of the Marine Biological Association of the UK",
        doi: "https://doi.org/10.1017/S0025315416001491",
      },
      {
        authors: "Puente A, Rilov G, Peleg O. and 39 more co-authors",
        year: 2016,
        title:
          "The role of physical variables in biodiversity patterns of intertidal macroalgae along European coasts",
        journal: "Journal of the Marine Biological Association of the UK",
        doi: "https://doi.org/10.1017/S0025315416001673",
      },
      {
        authors:
          "Guy-Haim T, Silverman J, Raddatz S, Wahl M, Israel A, Rilov G",
        year: 2016,
        title:
          "The carbon turnover response to thermal stress of a dominant coralline algae on the fast warming Levant coast",
        journal: "Limnology and Oceanography",
        doi: "https://doi.org/10.1002/lno.10279",
      },
      {
        authors: "Yeruham, E., Rilov, G., Shpigel, M. & Abelson, A.",
        year: 2015,
        title:
          "Collapse of the echinoid Paracentrotus lividus populations in the Eastern Mediterranean - result of climate change?",
        journal: "Scientific Reports",
        doi: "https://doi.org/10.1038/srep13479",
      },
      {
        authors:
          "Levy Y, Frid O, Weinberger A, Sade R, Adam Y, Kandanyan U, Berkun V, Perry N, Edelist D, Goren M, Rothman, S, Stern N, Tchernov D, Rilov G",
        year: 2015,
        title: "A small fishery with high impact on Sea Turtle Populations",
        journal: "Zoology of the Middle East",
        note: "61: 300-317",
      },
      {
        authors:
          "Wahl, M., Buchholz, B., Winde, V., Golomb, D. Guy-Haim, T., Müller, J., Rilov, G., Scotti, M., Böttcher, M.E.",
        year: 2015,
        title:
          "A mesocosm concept for the simulation of near-natural shallow underwater climates: The Kiel Outdoor Benthocosms (KOB)",
        journal: "Limnology and Oceanography, Methods",
        doi: "https://doi.org/10.1002/lom3.10055",
      },
      {
        authors:
          "Lyons DA, Arvanitidis C, Blight A, Chatzinikolaou E, Guy-Haim T, Kotta J, Orav-Kotta H, Queirós AM, Rilov G, Somerfield PJ, Crowe T",
        year: 2015,
        title:
          "There are no whole truths in meta-analyses: all their truths are half truths",
        journal: "Global Change Biology",
        note: "20: 2712-2724",
      },
      {
        authors:
          "Stokes, K., Broderick, A., Canbolat, A., Candan, O., Fuller, W., Glen, F., Levy, Y., Rees, A., Rilov, G. & Snape, R.",
        year: 2015,
        title:
          "Migratory corridors and foraging hotspots: critical habitats identified for Mediterranean green turtles",
        journal: "Diversity and Distributions",
        doi: "https://doi.org/10.1111/ddi.12317",
      },
      {
        authors: "Shabtay A, Rilov G, Benayahu Y",
        year: 2015,
        title:
          "The Indo-Pacific oyster Spondylus spinosus Schreibers, 1793 in the Eastern Mediterranean Sea: Reproductive features",
        journal: "Molluscan Research",
        doi: "https://doi.org/10.1080/13235818.2015.1007534",
      },
      {
        authors: "Guy-Haim T, Rilov G, Achituv Y",
        year: 2015,
        title:
          "Different settlement strategies explain intertidal zonation of barnacles in the Eastern Mediterranean",
        journal: "Journal of Experimental Marine Biology and Ecology",
        note: "463: 125-134",
      },
      {
        authors:
          "Levin N, Coll M, Fraschetti S, Gal G, Giakoumi S, Göke C, Heymans JJ, Katsanevakis S, Mazor T, Öztürk B, Rilov R, Gajewski J, Steenbeek J, Kark S",
        year: 2014,
        title:
          "Review of biodiversity data requirements for systematic conservation planning in the Mediterranean Sea",
        journal: "Marine Ecology Progress Series",
        note: "508: 261-281",
      },
      {
        authors: "Rilov G",
        year: 2014,
        title: "Ecological changes in the Israeli Mediterranean coast",
        journal: "Ecology and the Environment",
        note: "5(1): 44-51 (Hebrew)",
      },
      {
        authors:
          "Edelist D, Scheinin A, Sonin O, Shapiro J, Salameh P, Rilov G, Benayahu Y, Schulz D, Zeller D",
        year: 2013,
        title:
          "Israel: Reconstructed estimates of total fisheries removals in the Mediterranean, 1950–2010",
        journal: "Acta Adriatica",
        note: "54(2): 253-246",
      },
      {
        authors: "Edelist D, Rilov G",
        year: 2014,
        title: "Trends in the Israeli Mediterranean fishers",
        journal: "Ecology and the Environment",
        note: "5(1): 90-97 (Hebrew)",
      },
      {
        authors: "Edelist D, Rilov G, Golani D, Carlton JT, Spanier E",
        year: 2013,
        title:
          "Restructuring the Sea: profound shifts in the world's most invaded marine ecosystem",
        journal: "Diversity and Distributions",
        note: "19: 69-77",
      },
      {
        authors: "Shabtay A, Tikochinski Y, Benayahu Y, Rilov G",
        year: 2013,
        title:
          "Preliminary data on the population genetic structure of a highly successful invading oyster suggests its establishment dynamics in the Levant",
        journal: "Marine Biology Research",
        note: "10(4): 407-415",
      },
      {
        authors: "Edelist D, Golani D, Rilov G, Spanier E",
        year: 2012,
        title:
          "The invasive venomous striped eel catfish Plotosus lineatus in the Levant: possible mechanisms facilitating its rapid invasional success",
        journal: "Marine Biology",
        note: "159(2): 283-290",
      },
      {
        authors: "Mienis HK, Rittner O, Rilov G, Almog O",
        year: 2012,
        title:
          "Some additional records of two hardly known Lessepsian migrants among the molluscs from the Mediterranean coast of Israel",
        journal: "Triton",
        note: "26: 1-3",
      },
      {
        authors:
          "Bulleri F, Mant R, Benedetti-Cecchi L, Chatzinikolaou E, Crowe T, Kotta J, Lyons L, Rilov R, Maggi E",
        year: 2012,
        title:
          "The effects of exotic seaweeds on native benthic assemblages: variability between trophic levels and influence of background environmental and biological conditions",
        journal: "Environmental Evidence",
        note: "1:8",
      },
      {
        authors:
          "Rilov G, Mant R, Lyons DA, Bulleri F, Benedetti-Cecchi L, Kotta J, Queiros A, Chatzinikolaou E, Crowe T, Guy-Haim T",
        year: 2012,
        title:
          "How strong is the effect of invasive ecosystem engineers on the distribution patterns of local species, the local and regional biodiversity and ecosystem functions?",
        journal: "Environmental Evidence",
        note: "1:10",
      },
      {
        authors: "Lyons DA, Mant R, Bulleri F, Kotta J, Rilov G, Crowe T",
        year: 2012,
        title:
          "What are the effects of macroalgal blooms on the structure and functioning of marine ecosystems? A Systematic Review Protocol",
        journal: "Environmental Evidence",
        note: "1:7",
      },
      {
        authors:
          "Menge BA, Hacker SD, Lubchenco J, Craig R, Rilov G, Nobel M, Richmond E",
        year: 2011,
        title:
          "Potential impact of climate-related changes on a rocky intertidal ecosystem is buffered by differential responses to recruitment and species interactions",
        journal: "Ecological Monographs",
        note: "81(3): 493–509",
      },
      {
        authors: "Edelist D, Sonin O, Golani D, Rilov G, Spanier E",
        year: 2011,
        title:
          "Spatiotemporal patterns of catch and discards of the Israeli Mediterranean Trawl fishery in the early 1990s: ecological and conservation perspectives",
        journal: "Scientia Marina",
        note: "75(4): 641-652",
      },
      {
        authors: "Simberloff et al.",
        year: 2011,
        title: "Non-natives: 141 scientists object",
        journal: "Nature",
        note: "475(7354): 36",
      },
      {
        authors: "Rilov G, Schiel RD",
        year: 2011,
        title:
          "Community regulation: the relative importance of recruitment and predation intensity in the context of seascape",
        journal: "PLoS ONE",
        note: "6(8): e23958",
      },
      {
        authors: "Rilov G, Trebes H",
        year: 2010,
        title:
          "The impacts of global climate change on marine ecosystems: global state and consequences to the marine environment",
        journal: "Ecology and the Environment",
        note: "1: 57-65 (Hebrew)",
      },
      {
        authors: "Lopez S, Ferreira CE, Coutinho R, Rilov G",
        year: 2010,
        title:
          "Predator-prey interactions in a bioinvasion scenario: differential predation by native predators on two exotic rocky intertidal bivalves",
        journal: "Marine Ecology Progress Series",
        note: "403: 101–112",
      },
      {
        authors:
          "Menge BA, Chan F, Dudas S, Eerkes-Medrano D, Grorud-Colvert K, Heiman K, Hessing-Lewis M, Iles A, Milston-Clements R, Noble M, Page-Albins K, Richmond E, Rilov G, Rose J, Tyburczy J, Vinueza L, Zarnetske P",
        year: 2009,
        title:
          "Terrestrial ecologists ignore aquatic literature: asymmetry in citation breadth in ecological publications and implications for generality and progress in ecology?",
        journal: "Journal of Experimental Marine Biology and Ecology",
        note: "377: 93-100",
      },
      {
        authors:
          "Menge BA, Chan F, Dudas S, Eerkes-Medrano D, Grorud-Colvert K, Heiman K, Hessing-Lewis M, Iles A, Milston-Clements R, Noble M, Page-Albins K, Richmond E, Rilov G, Rose J, Tyburczy J, Vinueza L, Zarnetske P",
        year: 2009,
        title: "Do terrestrial ecologists ignore aquatic literature?",
        journal: "Frontiers in Ecology and the Environment",
        note: "7(4): 182-183",
      },
      {
        authors: "Dudas SE, Rilov G, Tyburczy J, Menge BA",
        year: 2009,
        title:
          "Linking larval abundance with onshore supply and settlement using instantaneous and integrated methods",
        journal: "Marine Ecology Progress Series",
        note: "387: 81–95",
      },
      {
        authors:
          "Rilov G, Dudas S, Menge BA, Grantham B, Lubchenco J, Schiel RD",
        year: 2008,
        title:
          "The surf zone: a semi-permeable barrier to onshore recruitment of invertebrate larvae?",
        journal: "Journal of Experimental Marine Biology and Ecology",
        note: "361: 59-74",
      },
      {
        authors: "Figueira WF, Lyman SJ, Crowder LB, Rilov G",
        year: 2008,
        title:
          "Small-scale demographic variability of the biocolor damselfish, Stegastes partitus, in the Florida Keys USA",
        journal: "Environmental Biology of Fishes",
        note: "81(3): 297-311",
      },
      {
        authors: "Rilov G, Figueira WF, Lyman SJ, Crowder L",
        year: 2007,
        title:
          "Complex habitats may not always benefit prey: Linking visual field, reef fish behavior and distribution",
        journal: "Marine Ecology Progress Series",
        note: "329: 225–238",
      },
      {
        authors: "Rilov G, Schiel RD",
        year: 2006,
        title: "Seascape-dependent subtidal-intertidal trophic linkages",
        journal: "Ecology",
        note: "87(3): 731–744",
      },
      {
        authors: "Rilov G, Schiel RD",
        year: 2006,
        title:
          "Trophic linkages across seascapes: subtidal predators limit effective mussel recruitment in rocky intertidal communities",
        journal: "Marine Ecology Progress Series",
        note: "327: 83-93",
      },
      {
        authors: "Rilov G, Gasith A, Benayahu Y",
        year: 2005,
        title:
          "Effect of disturbance on foraging: whelk activity on wave-exposed rocky shores with minimal tidal range",
        journal: "Marine Biology",
        note: "147: 421–428",
      },
      {
        authors: "Rilov G, Benayahu Y, Gasith A",
        year: 2004,
        title:
          "Prolonged lag in population outbreak of an invasive mussel: a shifting-habitat model",
        journal: "Biological Invasions",
        note: "6(3): 347-364",
      },
      {
        authors: "Rilov G, Benayahu Y, Gasith A",
        year: 2004,
        title:
          "Life on the edge: do biomechanical and behavioral adaptations to wave-exposure correlate with habitat partitioning in predatory whelks?",
        journal: "Marine Ecology Progress Series",
        note: "282: 193-204",
      },
      {
        authors: "Rilov G, Benayahu Y, Gasith A",
        year: 2002,
        title:
          "Effect of an exotic prey on the feeding pattern of a predatory snail",
        journal: "Marine Environmental Research",
        note: "54: 85-98",
      },
      {
        authors: "Rilov G, Benayahu Y",
        year: 2002,
        title:
          "Rehabilitation of coral reef fish communities: The importance of artificial-reef relief to recruitment rates",
        journal: "Bulletin of Marine Science",
        note: "70(1): 185-197",
      },
      {
        authors: "Rilov G, Benayahu Y, Gasith A",
        year: 2001,
        title:
          "Low abundance and skewed population structure of the whelk Stramonita haemastoma along the Israeli Mediterranean coast",
        journal: "Marine Ecology Progress Series",
        note: "218: 189-202",
      },
      {
        authors: "Rilov G, Gasith A, Evans SM, Benayahu Y",
        year: 2000,
        title:
          "Unregulated use of TBT-based anti-fouling paints in Israel (eastern Mediterranean): high contamination and imposex levels in two marine gastropods",
        journal: "Marine Ecology Progress Series",
        note: "192: 229-238",
      },
      {
        authors: "Rilov G, Benayahu Y",
        year: 2000,
        title:
          "Fish assemblage on natural vs. vertical artificial reefs in Eilat (Red Sea): the rehabilitation perspective",
        journal: "Marine Biology",
        note: "136: 931-942",
      },
      {
        authors: "Rilov G, Benayahu Y",
        year: 1998,
        title:
          "Vertical artificial structures as an alternative habitat for coral reef fishes in disturbed environments",
        journal: "Marine Environmental Research",
        note: "45: 431-451",
      },
    ],
  };
  const sortedYears = Object.keys(publications).sort((a, b) => {
    if (a === "Open All") return -1;
    if (b === "Open All") return 1;
    const aVal = a.includes("-") ? parseInt(a.split("-")[0]) : parseInt(a);
    const bVal = b.includes("-") ? parseInt(b.split("-")[0]) : parseInt(b);
    return bVal - aVal;
  });

  return (
    <div className="space-y-6">
      {sortedYears.map((year) => (
        <div key={year} className="border rounded-xl overflow-hidden shadow-md">
          <h2 style={headingStyle} onClick={() => toggleYear(year)}>
            {year}
          </h2>
          {year !== "Open All" && openYears[year] && (
            <ul className="list-disc list-inside space-y-3 px-6 py-4 bg-white">
              {publications[year].map((pub, index) => (
                <li key={index}>
                  {pub.authors} ({pub.year}). <i>{pub.title}</i>{" "}
                  <b>{pub.journal}</b>
                  {pub.note ? `, ${pub.note}` : ""}
                  {pub.doi && (
                    <>
                      {pub.note ? "." : ""}{" "}
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {pub.doi}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Publications;
