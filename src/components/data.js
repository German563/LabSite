
import gilAvatar from "./images/people/gil.avif";
import guyAvatar from "./images/people/guy.avif";
import shaiAvatar from "./images/people/shai.avif";
import uviAvatar from "./images/people/yuval.avif";
import rovAvatar from "./images/people/Ril-Rov.avif";
import irisvAvatar from "./images/people/iris_edited.avif";
import antonAvatar from "./images/people/anton.avif";
import erezAvatar from "./images/people/erez.avif";
import alhasAvatar from "./images/people/alhassan.avif";
import hermAvatar from "./images/people/herman.avif";
import gershAvatar from "./images/people/gershon.avif";
import natashahAvatar from "./images/people/natasha.avif";
import batiaAvatar from "./images/people/batia.avif";
const peopleData = [
  {
    _id: "1",
    name: "Prof. Gil Rilov",
    title: "Senior Researcher, Head of Lab",
    about:
      "My research explores the patterns, dynamics, and processes that shape marine communities, especially rocky shores and subtidal reefs. I am interested in the structure of communities and what affects their diversity, including larval recruitment, species interactions (predator-prey, competition, facilitation), overfishing, bioinvasions, climate change. I also study how marine communities function and what ecosystem services they provide. I am investigating nature-based solutions designed to protect these fascinating communities, their functions, and services (including Blue Carbon) through, for example, marine protected areas. So far, I have been fortunate to conduct research on the shores of Israel (Mediterranean and Red Sea), the USA, New Zealand, Brazil, Chile, South Africa, Crete, Cyprus, and Italy (Ischia). I have worked on rocky shores, subtidal reefs, coral reefs, and seagrass. I am also a Professor in the Marine Biology Department at the Leon H. Charney School of Marine Sciences at the University of Haifa. I teach a marine ecology course there.",
    avatar: gilAvatar,
  },
  {
    _id: "2",
    name: "Guy Raanan",
    title: "Lab Manager",
    about:
      "Main responsibilities: Operation and maintenance of experimental facilities:  benthocosm, temperature and acidification microcosms and the tidalcosom.  Execution of the subtidal diving surveys. Processing of photoquadrats. B.Sc- Marine Biology, Ruppin Academic Center.M.Sc- Analysis of Late Cretaceous Tsunami event deposits, The Dr. Moses Strauss Department of Marine Geosciences, University of Haifa.   ",
    avatar: guyAvatar,
  },
  {
    _id: "3",
    name: "Shai Zilberman",
    title: "Lab Technician",
    about:
      "Managing the national intertidal biodiversity monitoring and database along the Israeli coast. involved in conducting experiments for research concerning climate change, ecosystem functions, and biodiversity community structure for native and invasive organisms , all while gaining a better understanding of the Mediterranean rocky reef ecosystem by utilizing advanced data approach research. B.Sc - Biology and Earth Sciences ,Hebrew University M.Sc- Biology, Bar-Ilan University",
    avatar: shaiAvatar,
  },
  {
    _id: "4",
    name: "Yuval Sonego",
    title: "Lab Technician",
    about:
      "Since I was child I always had a great love and curiosity for the mysteries of the ocean. Here in the lab I'll be focusing  on the canopy forming algae Gongolaria, and the interactions between the various ecological communities. B.Sc- Marine Biology, Ruppin Academic Center.",
    avatar: uviAvatar,
  },
  {
    _id: "5",
    name: "Ril-ROV",
    title: "Underwater Explorer and Survey Assistant",
    about:
      "Hi, I’m Ril-ROV! As a BlueROV in this incredible lab, I’ve always been captivated by the mysteries of the ocean. From the moment my propellers first spun, I’ve felt a strong connection to the marine world.My main role is to dive into the depths to assist with monitoring efforts and underwater surveys. I help students and technical staff explore and document the wonders of the Israeli rocky shore, tracking changes and gathering critical data on marine ecosystems. Whether it’s recording the presence of alien species or mapping submerged habitats, I’m always ready to lend my high-definition eyes and steady robotic hands to the cause.I’m proud to contribute to this lab’s mission of understanding and protecting the ocean’s delicate balance in the face of climate change. Let’s dive in together! Certified Deep-Dive Technology and Marine Exploration Specialist (manufactured expertise, but impressive nonetheless!)",
    avatar: rovAvatar,
  },
  {
    _id: "6",
    name: "Iris Preiss ",
    title: "Ph.D. candidate",
    about:
      "The current climate change, the resulting rapid warming of seawater and increase in extreme weather events influence dramatically the composition and functioning of species of intertidal, and subtidal rocky shore communities. Within the context of a large European project, FutureMARES, I will study the vulnerability, resilience and adaption of these ecosystems to warming at local and regional scales, focusing on sea urchins, intertidal gastropods, and algae using ecological and molecular methods. This knowledge would serve as input for advanced ecological models assessing the current and future status of eastern Mediterranean costal ecosystems compared to those in the western Mediterranean and the European Atlantic. The results will be use to inform management and to develop nature-based solutions within the FutureMARES context.Co-supervisor: Prof. Ilana Berman-Frank, Marine Biology, Haifa University B.Sc. – Life Sciences, Tel Aviv University  M.Sc. - Life Sciences, Zoology, Tel Aviv University",
    avatar: irisvAvatar,
  },
  {
    _id: "7",
    name: "Anton Kovalev",
    title: "Ph.D. candidate",
    about:
      "My PhD project deals with the physiological mechanisms behind range distribution shifts of herbivorous fish, as a result of climate change.Co-supervisor Dr. Daniel Chernov (University of Haifa) B.Sc- Marine Biology , Ruppin Academic Center. M.Sc- Zoology, Tel Aviv University.",
    avatar: antonAvatar,
  },
  {
    _id: "8",
    name: "Erez Yeruham",
    title: "Ph.D. candidate",
    about:
      "The current climate change, the resulting rapid warming of seawater and increase in extreme weather events influence dramatically the composition and functioning of species of intertidal, and subtidal rocky shore communities. Within the context of a large European project, FutureMARES, I will study the vulnerability, resilience and adaption of these ecosystems to warming at local and regional scales, focusing on sea urchins, intertidal gastropods, and algae using ecological and molecular methods. This knowledge would serve as input for advanced ecological models assessing the current and future status of eastern Mediterranean costal ecosystems compared to those in the western Mediterranean and the European Atlantic. The results will be use to inform management and to develop nature-based solutions within the FutureMARES context.Co-supervisor: Prof. Ilana Berman-Frank, Marine Biology, Haifa University B.Sc. – Life Sciences, Tel Aviv University  M.Sc. - Life Sciences, Zoology, Tel Aviv University",
    avatar: erezAvatar,
  },
  {
    _id: "9",
    name: "Alhassan Mukaila",
    title: "M.Sc. candidate",
    about:
      "My research will investigate the impacts of climate change and local stressors on Mediterranean reef species and their community resilience. B.Sc- Environmental science, IIUEPS",
    avatar: alhasAvatar,
  },
  {
    _id: "10",
    name: "Herman Goldberg",
    title: "M.Sc. candidate",
    about:
      "The current climate change, the resulting rapid warming of seawater and increase in extreme weather events influence dramatically the composition and functioning of species of intertidal, and subtidal rocky shore communities. Within the context of a large European project, FutureMARES, I will study the vulnerability, resilience and adaption of these ecosystems to warming at local and regional scales, focusing on sea urchins, intertidal gastropods, and algae using ecological and molecular methods. This knowledge would serve as input for advanced ecological models assessing the current and future status of eastern Mediterranean costal ecosystems compared to those in the western Mediterranean and the European Atlantic. The results will be use to inform management and to develop nature-based solutions within the FutureMARES context.Co-supervisor: Prof. Ilana Berman-Frank, Marine Biology, Haifa University B.Sc. – Life Sciences, Tel Aviv University  M.Sc. - Life Sciences, Zoology, Tel Aviv University",
    avatar: hermAvatar,
  },
  {
    _id: "11",
    name: "Gershon Kalyan",
    title: "M.Sc. candidate",
    about:
      "My research will focus on several algae species resilience to multi-stressors in today's changing sea conditions in different depths and areas. B.Sc- Soil and Water Sciences , the Hebrew University",
    avatar: gershAvatar,
  },
  {
    _id: "12",
    name: "Natalia Vasekha",
    title: "Ph.D. candidate",
    about:
      "I have always had a great wish to explore the diverse life of the oceans. I am particularly interested in studying species interactions and food webs, which are crucial to understanding the overall picture of marine ecosystems. My research will focus on the effects of the tropicalization of Levant reefs on food web structure, functional diversity and ecosystem functions in Israel and Cyprus. The aim is to compare communities structure and assess the cumulative impacts of environmental changes on reef systems, including regional invasions. Co-supervisor: Prof. Smadar Ben Tabou de Leon, Marine Biology Department, Haifa University B.Sc. – Department of Biogeography, Lomonosov Moscow State University M.Sc. – Department of Biogeography, Lomonosov Moscow State University",
    avatar: natashahAvatar,
  },
  {
    _id: "13",
    name: "Batia wolf",
    title: "M.Sc. candidate",
    about:
      "My research will investigate Limpets, Native species and invasive species. Focus on growth rate and grazing rate in different micro habitat as well as the population patterns.",
    avatar: batiaAvatar,
  },
];

export default peopleData;