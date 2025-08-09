export const serverData = {
  bio: [
    {
      id: 1,
      name: "Matthias Heim",
      profession: "Master's Student",
      email: "heim.ma@physik.lmu.de",
      location: "Munich",
    },
  ],

  publications: [
    {
      id: 1,
      date: "September 2023",
      link: "https://cloud.lmunity.work/s/RxCtwEoTjmZ3g7Y",
      title:
        "Bachelor's Thesis: Galaxy Cluster Mass Estimation Using Deep Neural Networks on Simulated eROSITA X-Ray Data",
      text: "I examine three different deep convolutional neural networks (CNNs) to see if they are capable of estimating galaxy cluster masses from simulations made for eROSITA’s Final Equatorial Depth Survey (eFEDS).",
      collab:
        "Supervisors: Dr. Sven Krippendorf (LMU/Cambridge), Prof. Jochen Weller (LMU)",
    },
    {
      id: 2,
      date: "February 2025",
      link: "https://arxiv.org/abs/2502.18045",
      title:
        "Near-instantaneous Atmospheric Retrievals and Model Comparison with FASTER",
      text: "We present a new method for near-instantaneous atmospheric retrievals and model comparison with the FASTER algorithm. We demonstrate the method on a simulated dataset of transmission spectra of exoplanets.",
      collab:
        "Authors: Anna Lueber, Konstantin Karchev, Chloe Fisher, Matthias Heim, Roberto Trotta and Kevin Heng",
    },
  ],
  work: [
    {
      id: 2,
      date: "February 2023 - April 2023",
      link: "https://www.deutsches-museum.de/museum/aktuell/pioniere-des-wissens",
      title: "Explainer at Deutsches Museum in Munich",
      text: "For the exhibition about Nobel laureates, I worked at the Deutsches Museum Munich for the Max Planck Institute for Extraterrestrial Physics.",
    },
    {
      id: 1,
      date: "April 2022 - September 2022",
      link: "/pubman",
      title: "Web-App Development for Publication Management",
      text: "I developed a web-app that helped to archive, organize and filter publications.",
    },
    {
      id: 3,
      date: "January 2024 - April 2025",
      link: "https://www2.physik.uni-muenchen.de/lehre/praktika/index.html",
      title: "Supervision of physics students in the bachelor's physics labs",
      text: "I supervise physics students within the bachelor's physics labs at LMU Munich. The labs cover different topics of optics and atom physics.",
    },
  ],
  education: [
    {
      id: 2,
      date: "September 2019 - September 2023",
      title: "Bachelor of Science in Physics at LMU Munich",
      text: "I started my bachelor's in physics in September 2019 and finished it in 2023 with a specialization in astrophysics.",
    },
    {
      id: 1,
      date: "July 2018",
      title:
        "German Abitur (A-levels) at BBS für Technologie und Umwelt in Wittlich",
      text: "Choosing electro-technology, mathematics and english as my main subjects, I finished my Abitur (A-levels) in 2018 ",
    },
    /*     {
      id: 3,
      date: "October 2024 - December 2025",
      title: "Master Thesis in Theoretical Astrophysics of Extrasolar Planets",
      text: "I perform atmospheric retrieval with low resolution transmission spectra obtained by the James-Webb-Space-Telescope. By combining traditional bayesian methods and machine learning, I want to shape the future of atmospheric retrievals in the time of large missions such as ARIEL.",
      collab: "Supervisors: Anna Lueber, Prof. Kevin Heng",
    }, */
    {
      id: 4,
      date: "October 2023 - March 2026",
      title: "Master of Science in Astrophysics at LMU Munich",
      text: "After finishing my Bachelor, I continued my studies at LMU and started a Master in Astrophysics in 2023. I chose a big variety of courses spanning fields from observational methods to cosmology. After visiting a lecture about exoplanets and their atmospheres, I found a big interest in atmoshperic retrievals and started my master's thesis with Prof. Kevin Heng in 2024.",
    },
    {
      id: 5,
      date: "April 2026 - April 2030",
      title: "PhD Thesis in Theoretical Astrophysics of Extrasolar Planets",
      text: "I further develop my Simulation-Based Inference methods to get a generalized framework that can perform atmospheric retrievals on a wide range of exoplanetary atmospheres. Additionally, I work on the theory of phase curves and machine learning techniques for opacities.",
      collab: "Supervisor: Prof. Kevin Heng",
    },
  ],
  portfolioItem: [
    {
      id: 1,
      image: "pubman",
      imagesrc: "pubman.png",
      title: "Pubman",
      text: "Developed to store, filter and export publications and their bibtex code, Pubman is a web application that I developed for the group around Prof. Thomas Kuhr at LMU in 2022.",
      link: "/pubman",
      blanktab: false,
    },
    {
      id: 2,
      image: "tensorflow",
      imagesrc: "cluster.png",
      title: "Machine Learning in Astrophysics",
      text: "I work with machine learning in astrophysics, including Deep CNNs for cosmology and Simulation-Based Inference for exoplanet atmospheres.",
      link: "/ml-cluster/",
    },
    {
      id: 4,
      image: "portfolio",
      imagesrc: "react.png",
      title: "This Website",
      text: "This website was customly made using React and node.js. You can find the source-code at my GitHub page.",
      blanktab: true,
      link: "https://github.com/HiaslHoam/hiaslhoam.github.io",
    },
    {
      id: 3,
      image: "photography",
      imagesrc: "DSC01002.jpg",
      title: "Photography",
      text: "Wanna see what I am up to when not sitting in front of a computer? Check out my photography page.",
      blanktab: true,
      link: "https://hiaslhoam.github.io/photography/",
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
      link: "https://gitlab.physik.lmu.de/LDAP_ag-kuhr/pubman-react/",
    },
    {
      id: 2,
      title: "Machine Learning Techniques in Astrophysics",
      imagesrc: "ml-cluster.png",
      path: "/ml-cluster/",
      text: "For my Bachelor's thesis, I examine three different deep convolutional neural networks (CNNs) to see if they are capable of estimating galaxy cluster masses from simulations made for eROSITA’s Final Equatorial Depth Survey (eFEDS). Building up on a recent ap- proach to infer these masses using a more simple CNN from Krippendorf et al. (2023), I study the differences in architecture, training and accuracy between the deep and the simple models. For that I firstly cover the basics of galaxy cluster X- ray emission and machine learning. Using the three architectures, I am able to get mass estimations that are close to the simple neural network. I provide a pipeline for training and testing more architectures, information on my training process and on how these models could be optimised in future attempts. For my Master's Thesis, I work with Simulation-Based Inference to perform atmospheric retrievals on low resolution transmission spectra obtained by the James-Webb-Space-Telescope. By combining traditional bayesian methods and machine learning, I want to shape the future of atmospheric retrievals in the time of large missions such as ARIEL.",
      stack: [
        { name: "JupyterNotebook", class: "django", color: "bg-teal-400" },
        { name: "Tensorflow", class: "react", color: "bg-orange-400" },
      ],
      code: ["Python", "LaTex", "BibTex"],
      link: "https://cloud.lmunity.work/s/RxCtwEoTjmZ3g7Y",
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
