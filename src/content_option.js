const logotext = "AK";
const meta = {
    title: "Aakhil's Portfolio",
    description: "I'm Aakhil Shaik, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm Aakhil Shaik",
    animated: {
        first: "Data Scientist",
        second: "AI/ML Engineer",
        third: "Full Stack Developer",
        fourth: "Data Analyst",
        fifth: "Software Developer",
        sixth: "Business Developement Manager",
    },
    description: "Driven technology enthusiast with a passion for deep-diving into advanced data science, AI, and full-stack development, consistently expanding expertise in uncovering insights from complex data and enhancing digital experiences.",
    your_img_url: "https://i.redd.it/8gi52v3lreb41.jpg",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Hi, I'm Aakhil Shaik — an undergraduate student, researcher, and builder at the convergence of artificial intelligence, neuroscience, and quantum computing. I specialize in crafting intelligent systems that go beyond conventional boundaries - from decoding brainwaves for real-time control to developing hybrid quantum-classical models that spot deepfakes with uncanny accuracy. I'm equally passionate about driving impact beyond the codebase. As the Senior Business Development Manager at AIESEC in Amaravati, I led high-stakes outreach campaigns, secured strategic partnerships, and helped hundreds of students access global exchange opportunities. That journey took me to Sri Lanka, where I worked on-ground as a Business Consultant, integrating data analytics to increase student acceptance into top Japanese universities.Whether it's authoring IEEE papers, engineering BCI-controlled games, or leading youth through global development programs,-I bring depth, initiative, and a multidisciplinary mindset to everything I do.",
};
const worktimeline = [{
        jobtitle: "Business Development Manager",
        where: "AIESEC",
        date: "2023-2025",
    },
    {
        jobtitle: "Outgoing Sector Manager",
        where: "AIESEC",
        date: "2023-2025",
    },
    {
        jobtitle: "Business Consultant",
        where: "Sputnik International Srilanka",
        date: "2024",
    },
];

const skills = [{
        name: "Object Oriented Programming",
    },
    
    {
        name: "Data Structures and Algorithms",
    },
    
    {
        name: "Python",
    },
    
    {
        name: "Web Development",
    },

    {
        name: "Database Management",
    },

    {
        name: "Machine Learning",
    },

    {
        name: "Data Science",
    },

    {
        name: "Solutions Architect",
    },
];

const dataportfolio = [{
        img: "https://5.imimg.com/data5/GLADMIN/VideoImage/2023/7/328516293/XJ/SW/UV/2822194/patient-health-monitoring-system-using-raspberry-pi-iot-500x500.jpg",
        description: "Raspberry Pi Health Diagnosis systems leverage compact computing to monitor vital signs and environmental data revolutionizing remote healthcare.",
        link: "#",
    },
    {
        img: "https://circuitdigest.com/sites/default/files/projectimage_mic/Arduino-Vehicle-Accident-Alert-System-using-GPS-GSM-and-Accelerometer.jpg",
        description: "Arduino Uno-based smart road safety systems offer real-time monitoring of vehicle movements.instantly alerting authorities and providing valuable data for improved road safety measures.",
        link: "#",
    },
    {
        img: "assets/melobeat.jpg",
        description: "Melobeat is a modern, responsive music player web app built for seamless audio playback in the browser. It features a dynamic UI with real-time track progress, intuitive controls, and playlist management. Designed with clean aesthetics and user experience in mind, Melobeat integrates JavaScript-based audio APIs to handle media playback, track switching, and volume control all wrapped in a fluid, mobile-friendly interface.",
        link: "https://github.com/Aakhilsk/Melobeat-music-player",
        style: {
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical"
        }
    },
    {
        img: "assets/BCI.jpg",
        description: "This project explores the fusion of neurosignals (EEG) and muscle signals (EMG) to control a car in a video game environment using a low-cost DIY neuroscience kit from Upside Down Labs. The system maps EEG signals (P300/Motor Imagery) to control speed, while forearm EMG gestures trigger left/right directional movement.Signals are acquired, filtered, and processed in real time using Python and signal processing libraries. The processed outputs are mapped to keyboard inputs using PyAutoGUI, enabling a responsive, mind-and-muscle-controlled interface. The project demonstrates the potential of hybrid BCI systems for accessible neurogaming and hands-free control interfaces.",
        link: "#",
    },
    {
        img: "assets/stock.jpg",
        description: "A machine learning-based web app that I developed that predicts future stock prices using historical market data. Combines time series models like LSTM with a real-time interactive dashboard for visualizing trends, predictions, and technical indicators.",
        link: "https://github.com/Aakhilsk/Stock-Price-Prediction",
    },
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWj_eULm422KjEW5TZze7rbuNKBwvHXlSVzqD6-hpkaQrS3pkhKuqAm_2zk0EfUxCqN4TW8IBrtFypTG_ocLeAMvLaE__d2cO_Y-bhw8NediP4Ey8tLrb49fUzvWRu1GVNoCdmUccvsD9CKI8UrHQbumk8IYvxFZdoME4ZeAuhCwDFmcaPgbT3WbZ6Jl0T/w640-h360/Untitled%20design%20-%202023-10-03T205525.122.jpg",
        description: "A multimodal deepfake detection system that fuses visual (XceptionNet), audio (wav2vec), and quantum-enhanced features using Quantum Kernels and Variational Quantum Circuits (VQC). The model integrates classical and quantum representations through an attention-based fusion mechanism, achieving high accuracy on the FakeAVCeleb dataset.",
        link: "https://github.com/Aakhilsk/Hybrid-Quantum-Deepfake-Detection",
    },
];

const contactConfig = {
    YOUR_EMAIL: "aakhil7864@gmail.com",
    description: "Hit me up for collabs, questions, or just a good tech chat. Looking forward to hearing from you!",
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/Aakhilsk",
    linkedin: "https://www.linkedin.com/in/aakhil-shaik-568016235/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};