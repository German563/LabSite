import gilAvatar from "./images/people/gil.avif";
import guyAvatar from "./images/people/guy.avif";
import shaiAvatar from "./images/people/shai.avif";
import uviAvatar from "./images/people/yuval1.jpg";
import rovAvatar from "./images/people/Ril-Rov.avif";
import irisvAvatar from "./images/people/iris_edited.avif";
import antonAvatar from "./images/people/anton.avif";
import erezAvatar from "./images/people/erez.avif";
import alhasAvatar from "./images/people/alhassan.avif";
import hermAvatar from "./images/people/herman.avif";
import gershAvatar from "./images/people/gershon.avif";
import natashahAvatar from "./images/people/natasha.avif";
import batiaAvatar from "./images/people/batia.avif";
import felisAvatar from "./images/people/Felis.avif";

const peopleData = [
  {
    _id: "2",
    name: "Guy Raanan",
    title: "Lab Manager",
    about:
      "Main responsibilities: Operation and maintenance of experimental facilities: benthocosm, temperature and acidification microcosms and the tidalcosom. Execution of the subtidal diving surveys. Processing of photoquadrats.",
    education:
      "B.Sc – Marine Biology, Ruppin Academic Center\nM.Sc – Marine Geosciences, University of Haifa",
    avatar: guyAvatar,
  },
  {
    _id: "3",
    name: "Shai Zilberman",
    title: "Lab Technician",
    about:
      "Managing the national intertidal biodiversity monitoring and database along the Israeli coast. Involved in conducting experiments for research concerning climate change, ecosystem functions, and biodiversity community structure for native and invasive organisms, using advanced data-approach research.",
    education:
      "B.Sc – Biology and Earth Sciences, Hebrew University\nM.Sc – Biology, Bar-Ilan University",
    avatar: shaiAvatar,
  },
  {
    _id: "4",
    name: "Yuval Sonego",
    title: "Lab Technician",
    about:
      "’m a research assistant in a marine ecology lab studying canopy-forming brown algae and their role in shaping coastal ecosystems. A significant part of my work  is dedicated to monitoring populations of these habitat-forming species, which create unique marine forest habitats along the Mediterranean coast. I have been investigating their morphology, phenology, reproductive cycles, and ecological functions to better understand their influence on community structure and ecosystem processes in rocky shore environments.",
    education: "B.Sc – Marine Biology, Ruppin Academic Center",
    avatar: uviAvatar,
  },
  {
    _id: "5",
    name: "Ril-ROV",
    title: "Underwater Explorer and Survey Assistant",
    about:
      "Hi, I’m Ril-ROV! As a BlueROV in this incredible lab, I’ve always been captivated by the mysteries of the ocean. From the moment my propellers first spun, I’ve felt a strong connection to the marine world. My main role is to dive into the depths to assist with monitoring efforts and underwater surveys. I help students and technical staff explore and document the wonders of the Israeli rocky shore, tracking changes and gathering critical data on marine ecosystems. Whether it’s recording the presence of alien species or mapping submerged habitats, I’m always ready to lend my high-definition eyes and steady robotic hands to the cause. I’m proud to contribute to this lab’s mission of understanding and protecting the ocean’s delicate balance in the face of climate change. Let’s dive in together! Certified Deep-Dive Technology and Marine Exploration Specialist (manufactured expertise, but impressive nonetheless!)",
    education:
      "Certified Marine Exploration Robotics System (Factory Certification)",
    avatar: rovAvatar,
  },
  {
    _id: "6",
    name: "Iris Preiss ",
    title: "Ph.D. candidate",
    about:
      "The current climate change, the resulting rapid warming of seawater and increase in extreme weather events influence dramatically the composition and functioning of species of intertidal, and subtidal rocky shore communities. Within the context of a large European project, FutureMARES, I will study the vulnerability, resilience and adaption of these ecosystems to warming at local and regional scales, focusing on sea urchins, intertidal gastropods, and algae using ecological and molecular methods. This knowledge would serve as input for advanced ecological models assessing the current and future status of eastern Mediterranean costal ecosystems compared to those in the western Mediterranean and the European Atlantic. The results will be use to inform management and to develop nature-based solutions within the FutureMARES context. Co-supervisor: Prof. Ilana Berman-Frank, Marine Biology, Haifa University.",
    education:
      "B.Sc – Life Sciences, Tel Aviv University\nM.Sc  Life Sciences (Zoology), Tel Aviv University",
    avatar: irisvAvatar,
  },
  {
    _id: "7",
    name: "Anton Kovalev",
    title: "Ph.D. candidate",
    about:
      "My research aims to investigate the cumulative impacts of climate change and anthropogenic pressures on Southeastern Mediterranean intertidal benthic communities. It seeks to understand how combinations of stressors, such as warming, acidification, oil and heavy metal pollution, and invasive species, affect key species within these ecosystems. Additionally, I am interested in the interplay between abiotic and biotic factors influencing the intricate relationships among closely related cryptic species (such as Mytilus spp.), mussel ecophysiology, and metabolic allometry. Co-supervisor: Prof. Smadar Ben Tabou de Leon.",
    education:
      "B.Sc – Invertebrate Zoology, St. Petersburg University\nM.Sc – Invertebrate Zoology, St. Petersburg University",
    avatar: antonAvatar,
  },
  {
    _id: "8",
    name: "Erez Yeruham",
    title: "Ph.D. candidate",
    about:
      "The current climate change, the resulting rapid warming of seawater and increase in extreme weather events influence dramatically the composition and functioning of species of intertidal, and subtidal rocky shore communities. Within the context of a large European project, FutureMARES, I will study the vulnerability, resilience and adaption of these ecosystems to warming at local and regional scales, focusing on sea urchins, intertidal gastropods, and algae using ecological and molecular methods.",
    education:
      "B.Sc – Life Sciences, Tel Aviv University\nM.Sc – Life Sciences (Zoology), Tel Aviv University",
    avatar: erezAvatar,
  },
  {
    _id: "9",
    name: "Alhassan Mukaila",
    title: "M.Sc. candidate",
    about:
      "My previous academic and research experiences have predominantly been in the fields of biotechnology and microbiology. I am eager to explore new avenues for my graduate studies and contribute to research in marine ecology. As part of the ACTNOW project, my research will focus on a multi-parameter approach assessing ecological resilience of Mediterranean intertidal organisms to seasonal and sewage pollution, using ecological, chemical, and molecular methods.",
    education:
      "B.Sc – Biotechnology and Molecular Biology, University for Development Studies",
    avatar: alhasAvatar,
  },
  {
    _id: "10",
    name: "Herman Goldberg",
    title: "M.Sc. candidate",
    about:
      "My research will investigate the impacts of climate change and local stressors on Mediterranean reef species and their community resilience.",
    education: "B.Sc – Environmental Science, IIUEPS",
    avatar: hermAvatar,
  },
  {
    _id: "11",
    name: "Gershon Kalyan",
    title: "M.Sc. candidate",
    about:
      "My research will focus on several algae species resilience to multi-stressors in today's changing sea conditions in different depths and areas.",
    education: "B.Sc – Soil and Water Sciences, Hebrew University",
    avatar: gershAvatar,
  },
  {
    _id: "12",
    name: "Natalia Vasekha",
    title: "Ph.D. candidate",
    about:
      "Her research focuses on comparing structural and functional changes in shallow macrophyte reef communities at two Eastern Mediterranean change hotspots: Israel and Cyprus. She investigates warming and invasion effects using metabolic incubations, trait analysis, and monitoring selected species.",
    avatar: natashahAvatar,
  },
  {
    _id: "13",
    name: "Batia Wolf",
    title: "M.Sc. candidate",
    about:
      "My research will investigate limpets, native species and invasive species. Focus on growth rate and grazing rate in different microhabitats as well as population patterns.",
    avatar: batiaAvatar,
  },
  {
    _id: "14",
    name: "Felister Chepkemoi",
    title: "M.Sc. candidate",
    about:
      "My research focuses on the comparative population ecology, physiology, and resilience of invasive Thylacodes and native Vermetus triquetrus and Dendropoma anguliferum along the eastern Mediterranean coast. I investigate their density distribution, feeding mechanisms, growth rates, life span, and overall population dynamics.",
    education: "B.Sc – Department of Animal Science, Egerton University",
    avatar: felisAvatar,
  },
];

export default peopleData;
