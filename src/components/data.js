
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
  // {
  //   _id: "1",
  //   name: "Prof. Gil Rilov",
  //   title: "Senior Researcher, Head of Lab",
  //   about:
  //     "Gil Rilov is a Senior Researcher at Israel Oceanographic & Limnological Research (IOLR), and Associate Professor in the University of Haifa. Gil is a marine community ecologist and conservation biologist working mostly on coastal benthic ecosystems. He studies how coastal marine biodiversity, mostly that of rocky reefs, is and will be affected by climate change, bioinvasions and overfishing, using both monitoring and field and lab experiments. He also investigates how global and local stressors lead to the alteration of ecosystem functions and services, and studies the effectiveness of nature-based solutions.",
  //   avatar: gilAvatar,
  // },
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
    about: "My research aims to investigate the cumulative impacts of climate change and anthropogenic pressures on Southeastern Mediterranean intertidal benthic communities. It seeks to understand how combinations of stressors, such as warming, acidification, oil and heavy metal pollution, and invasive species, affect key species within these ecosystems. Additionally, I am interested in the interplay between abiotic and biotic factors influencing the intricate relationships among closely related cryptic species (such as Mytilus spp.), mussel ecophysiology, and metabolic allometry. Co-supervisor: Prof. Smadar Ben Tabou de Leon, Marine Biology Department, Haifa University B.Sc. – Department of Invertebrate Zoology, St. Petersburg University M.Sc. – Department of Invertebrate Zoology, St. Petersburg University",
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
      "My previous academic and research experiences have predominantly been in the fields of biotechnology and microbiology, I am eager to explore new avenues for my graduate studies and contribute to research in marine ecology. I find investigating the impact of climate change and local stressors on marine biodiversity to be an incredibly fascinating area of research. As part of the ACTNOW project, a European initiative aimed at understanding and predicting the effects of multiple drivers on marine biodiversity, my research will focus on conducting a multi-parameter approach study. This study will assess the ecological resilience of Mediterranean intertidal organisms, specifically mussels and topshells, to seasonal and sewage pollution. This interdisciplinary research will employ ecological, chemical, and molecular methods. The outcome of this work aims to provide evidence-based management strategies for mitigating the impacts of sewage pollution on Mediterranean intertidal ecosystems, safeguarding the health and resilience of these environments and the organisms within them. BSc. - Biotechnology and Molecular Biology, University for Development Studies",
    avatar: alhasAvatar,
  },
  {
    _id: "10",
    name: "Herman Goldberg",
    title: "M.Sc. candidate",
    about:
      "My research will investigate the impacts of climate change and local stressors on Mediterranean reef species and their community resilience. B.Sc- Environmental science, IIUEPS",
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
      "Natalia Vasekha is a PhD student in Gil Rilov’s marine community ecology lab. Her research focuses on comparing structural and functional changes in shallow macrophyte reef communities at two Eastern Mediterranean change hotspots: Israel and Cyprus. Using in-situ metabolic incubations, trait-based analysis, and monitoring of selected native and introduced species, she investigates the combined effects of warming and species invasions, and examines the roles and interactions of key reef species.",
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