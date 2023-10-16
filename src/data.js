export const serverData = {
  bio: [
    {
      id: 1,
      name: "Matthias Heim",
      profession: "Physicist",
      email: "heim.ma@physik.lmu.de",
      location: "Munich",
    },
  ],

  publications: [
    {
      id: 1,
      date: "September 2023",
      title:
        "Bachelor's Thesis: Galaxy Cluster Mass Estimation Using Deep Neural Networks on Simulated eROSITA X-Ray Data",
      text: "I examine three different deep convolutional neural networks (CNNs) to see if they are capable of estimating galaxy cluster masses from simulations made for eROSITA’s Final Equatorial Depth Survey (eFEDS).",
    },
  ],
  work: [
    {
      id: 1,
      date: "February 2023 - April 2023",
      title: "Explainer at Deutsches Museum in Munich",
      text: "For the exhibition about Nobel laureates, I worked at the Deutsches Museum Munich for the Max Planck Institute for Extraterrestrial Physics.",
    },
    {
      id: 2,
      date: "April 2022 - September 2022",
      title: "Web-App development for publication management",
      text: "I developed a web-app that helped to archive, organize and filter publications.",
    },
  ],
  education: [
    {
      id: 1,
      date: "September 2019 - September 2023",
      title: "Bachelor of Science in Physics at LMU Munich",
      text: "I started my bachelor's in physics in September 2019 and finished it in 2023 with a specialization in astrophysics.",
    },
    {
      id: 2,
      date: "July 2018",
      title:
        "German Abitur (A-levels) at BBS für Technologie und Umwelt in Wittlich",
      text: "Chosing electro-technology, mathematics and english as my main subjects, I finished my Abitur (A-levels) in 2018 ",
    },
  ],
  portfolioItem: [
    {
      id: 1,
      image: "pubman",
      imagesrc: "pubman.png",
      title: "Pubman",
      text: "Developed to store, filter and export publications and their bibtex code. You can find a live demo version with the button below.",
      link: "/pubman",
      blanktab: false,
    },
    {
      id: 2,
      image: "tensorflow",
      imagesrc: "cluster.png",
      title: "Machine Learning in Astrophysics",
      text: "I developed a pipeline to test different deep learning neural networks for eROSITA's eFEDS simulation galaxy cluster estimation. ",
      link: "/ml-cluster/",
    },
    {
      id: 3,
      image: "blog",
      imagesrc: "blog.png",
      title: "Möchtegern-Astronaut (Science Blog)",
      text: "I'm very interested in science journalism. I write about current astronomy topics in German on my blog Möchtegern-Astronaut.",
      link: "https://moechtegern-astronaut.de",
      blanktab: true,
    },
    {
      id: 4,
      image: "portfolio",
      imagesrc: "react.png",
      title: "This Website",
      text: "This website was customly made using React and node.js. You can find the source-code at my GitHub page.",
      blanktab: true,
      link: "https://github.com/HiaslHoam/",
    },
  ],
  portfolioPages: [
    {
      id: 1,
      title: "Pubman",
      imagesrc: "pubmanDetail.png",
      path: "/pubman/",
      text: "Pubman is a web application that allows you to store, access and filter publications. It is possible to upload different publication types like articles, PhDs, Master and Bachelor Thesis. You can save a file link to the publication and easily access bibtex code. It was developed for the group around Prof. Thomas Kuhr at LMU in 2022.",
      stack: [
        { name: "Django", class: "django", color: "bg-yellow-400" },
        { name: "React", class: "react", color: "bg-green-400" },
        { name: "Docker", class: "docker", color: "bg-blue-500" },
      ],
      code: ["Python", "JavaScript", "HTML", "CSS", "BibTex"],
    },
    {
      id: 2,
      title: "Mass Estimation of Galaxy Clusters using Deep Neural Networks",
      imagesrc: "ml-cluster.png",
      path: "/ml-cluster/",
      text: "I examine three different deep convolutional neural networks (CNNs) to see if they are capable of estimating galaxy cluster masses from simulations made for eROSITA’s Final Equatorial Depth Survey (eFEDS). Building up on a recent ap- proach to infer these masses using a more simple CNN from Krippendorf et al. (2023), I study the differences in architecture, training and accuracy between the deep and the simple models. For that I firstly cover the basics of galaxy cluster X- ray emission and machine learning. Using the three architectures, I am able to get mass estimations that are close to the simple neural network. I provide a pipeline for training and testing more architectures, information on my training process and on how these models could be optimised in future attempts.",
      stack: [
        { name: "JupyterNotebook", class: "django", color: "bg-teal-400" },
        { name: "Tensorflow", class: "react", color: "bg-orange-400" },
      ],
      code: ["Python", "LaTex", "BibTex"],
    },
  ],
  developementSkills: [
    { id: 1, name: "Django", class: "django", color: "#E3A008" },
    { id: 2, name: "React", class: "react", color: "#30C48D" },
    { id: 3, name: "Docker", class: "docker", color: "#3E82F8" },
    { id: 4, name: "node.js", class: "node", color: "#f7473d" },
    { id: 5, name: "Tensorflow", class: "tensorflow", color: "#FF7400" },
    { id: 6, name: "JupyterNotebook", class: "jupyter", color: "#1434e8" },
  ],
};
