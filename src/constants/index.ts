export const DEPARTMENTS = [
  'Artificial Intelligence & Machine Learning',
  'Bioinformatics',
  'Cloud & Distributed Systems',
  'Computer Networks',
  'Computer Science',
  'Computational Neuroscience',
  'Cybersecurity',
  'Data Science & AI',
  'Digital Forensics',
  'Digital Media & Interactive Design',
  'Games Technology',
  'Health Informatics',
  'High-Performance Computing',
  'Human-Computer Interaction',
  'Information Systems',
  'Information Technology',
  'Internet of Things Engineering',
  'Machine Learning Systems',
  'Natural Language Processing',
  'Quantum Computing',
  'Robotics & Autonomous Systems',
  'Software Engineering',
  'UX/UI Design',
  'Accounting & Finance',
  'Aerospace Engineering',
  'Biomedical Sciences',
  'Biosciences',
  'Business & Management',
  'Chemical Engineering',
  'Civil Engineering',
  'Dentistry',
  'Drama & Theatre Arts',
  'Economics',
  'Education',
  'Electrical Engineering',
  'English Literature',
  'Environmental Science',
  'History',
  'Human Resources & Organisational Behaviour',
  'Law',
  'Marketing',
  'Materials Science & Engineering',
  'Mathematics',
  'Mechanical Engineering',
  'Medical Sciences',
  'Modern Languages & Linguistics',
  'Neuroscience',
  'Nursing',
  'Operations & Supply Chain',
  'Optometry',
  'Pharmacy',
  'Philosophy',
  'Physics & Astronomy',
  'Politics & International Relations',
  'Psychology',
  'Public Health',
  'Social Policy',
  'Sociology',
  'Sports Science',
  'Theology & Religion',
  'Urban Planning',
]

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept
}))

export const COURSES = [
  // ============================
  // IT & TECHNOLOGY DEPARTMENTS
  // ============================

  // Artificial Intelligence & Machine Learning (AIML)
  {
    code: 'AIML001',
    name: 'Foundations of Artificial Intelligence',
    department: 'Artificial Intelligence & Machine Learning',
    description: 'An introduction to core AI concepts including search, reasoning, and intelligent agents.',
  },
  {
    code: 'AIML002',
    name: 'Machine Learning Algorithms',
    department: 'Artificial Intelligence & Machine Learning',
    description: 'A study of supervised and unsupervised learning techniques used in modern AI systems.',
  },
  {
    code: 'AIML003',
    name: 'Deep Learning & Neural Networks',
    department: 'Artificial Intelligence & Machine Learning',
    description: 'Explores neural architectures, backpropagation, and deep learning applications.',
  },

  // Bioinformatics (BIOI)
  {
    code: 'BIOI001',
    name: 'Introduction to Bioinformatics',
    department: 'Bioinformatics',
    description: 'Covers computational methods for analysing biological data and genomic sequences.',
  },
  {
    code: 'BIOI002',
    name: 'Computational Genomics',
    department: 'Bioinformatics',
    description: 'Focuses on genome analysis, annotation, and comparative genomics techniques.',
  },
  {
    code: 'BIOI003',
    name: 'Biological Data Mining',
    department: 'Bioinformatics',
    description: 'Applies data mining and machine learning to biological datasets.',
  },

  // Cloud & Distributed Systems (CLDS)
  {
    code: 'CLDS001',
    name: 'Cloud Computing Fundamentals',
    department: 'Cloud & Distributed Systems',
    description: 'Introduces cloud architectures, virtualisation, and distributed computing models.',
  },
  {
    code: 'CLDS002',
    name: 'Distributed Systems Engineering',
    department: 'Cloud & Distributed Systems',
    description: 'Examines distributed algorithms, consensus, and system reliability.',
  },
  {
    code: 'CLDS003',
    name: 'Scalable Cloud Applications',
    department: 'Cloud & Distributed Systems',
    description: 'Focuses on designing and deploying scalable cloud-native applications.',
  },

  // Computer Networks (COMP)
  {
    code: 'COMP001',
    name: 'Computer Networking Principles',
    department: 'Computer Networks',
    description: 'Covers network models, protocols, and communication fundamentals.',
  },
  {
    code: 'COMP002',
    name: 'Network Security & Management',
    department: 'Computer Networks',
    description: 'Explores secure network design, monitoring, and threat mitigation.',
  },
  {
    code: 'COMP003',
    name: 'Advanced Network Architectures',
    department: 'Computer Networks',
    description: 'Studies modern network technologies including SDN and high-performance routing.',
  },

  // Computer Science (COSC)
  {
    code: 'COSC001',
    name: 'Programming & Software Design',
    department: 'Computer Science',
    description: 'Introduces programming principles, software design patterns, and problem-solving.',
  },
  {
    code: 'COSC002',
    name: 'Algorithms & Data Structures',
    department: 'Computer Science',
    description: 'Covers algorithmic thinking, complexity, and core data structures.',
  },
  {
    code: 'COSC003',
    name: 'Operating Systems & Architecture',
    department: 'Computer Science',
    description: 'Explores OS design, memory management, and hardware-software interaction.',
  },

  // Computational Neuroscience (CPNE)
  {
    code: 'CPNE001',
    name: 'Neural Computation',
    department: 'Computational Neuroscience',
    description: 'Examines computational models of neural systems and information processing.',
  },
  {
    code: 'CPNE002',
    name: 'Brain Simulation Techniques',
    department: 'Computational Neuroscience',
    description: 'Covers simulation frameworks for modelling neural circuits.',
  },
  {
    code: 'CPNE003',
    name: 'Cognitive Modelling',
    department: 'Computational Neuroscience',
    description: 'Studies computational models of cognition and behaviour.',
  },

  // Cybersecurity (CYBR)
  {
    code: 'CYBR001',
    name: 'Cybersecurity Fundamentals',
    department: 'Cybersecurity',
    description: 'Introduces security principles, threat landscapes, and defensive strategies.',
  },
  {
    code: 'CYBR002',
    name: 'Ethical Hacking & Penetration Testing',
    department: 'Cybersecurity',
    description: 'Teaches penetration testing methodologies and ethical hacking practices.',
  },
  {
    code: 'CYBR003',
    name: 'Digital Threat Intelligence',
    department: 'Cybersecurity',
    description: 'Focuses on threat analysis, incident response, and cyber forensics.',
  },

  // Data Science & AI (DSAA)
  {
    code: 'DSAA001',
    name: 'Data Analysis & Visualisation',
    department: 'Data Science & AI',
    description: 'Covers statistical analysis, data cleaning, and visualisation techniques.',
  },
  {
    code: 'DSAA002',
    name: 'Applied Machine Learning',
    department: 'Data Science & AI',
    description: 'Applies machine learning techniques to real-world datasets.',
  },
  {
    code: 'DSAA003',
    name: 'Big Data Engineering',
    department: 'Data Science & AI',
    description: 'Explores big data platforms, pipelines, and distributed processing.',
  },

  // Digital Forensics (DIGF)
  {
    code: 'DIGF001',
    name: 'Introduction to Digital Forensics',
    department: 'Digital Forensics',
    description: 'Covers forensic investigation techniques for digital devices.',
  },
  {
    code: 'DIGF002',
    name: 'Forensic Data Recovery',
    department: 'Digital Forensics',
    description: 'Focuses on recovering and analysing digital evidence.',
  },
  {
    code: 'DIGF003',
    name: 'Cybercrime Investigation',
    department: 'Digital Forensics',
    description: 'Examines cybercrime patterns and investigative methodologies.',
  },

  // Digital Media & Interactive Design (DMID)
  {
    code: 'DMID001',
    name: 'Digital Media Production',
    department: 'Digital Media & Interactive Design',
    description: 'Introduces digital content creation and interactive design principles.',
  },
  {
    code: 'DMID002',
    name: 'Interactive Systems Design',
    department: 'Digital Media & Interactive Design',
    description: 'Covers user interaction models and interface design.',
  },
  {
    code: 'DMID003',
    name: 'Creative Coding for Media',
    department: 'Digital Media & Interactive Design',
    description: 'Explores programming techniques for interactive digital experiences.',
  },

  // Games Technology (GAME)
  {
    code: 'GAME001',
    name: 'Game Development Fundamentals',
    department: 'Games Technology',
    description: 'Covers core game development concepts and engines.',
  },
  {
    code: 'GAME002',
    name: '3D Graphics & Simulation',
    department: 'Games Technology',
    description: 'Explores 3D rendering, physics simulation, and animation.',
  },
  {
    code: 'GAME003',
    name: 'Game AI & Behaviour',
    department: 'Games Technology',
    description: 'Studies AI techniques used in modern game design.',
  },

  // Health Informatics (HLTH)
  {
    code: 'HLTH001',
    name: 'Health Information Systems',
    department: 'Health Informatics',
    description: 'Covers digital systems used in healthcare environments.',
  },
  {
    code: 'HLTH002',
    name: 'Clinical Data Management',
    department: 'Health Informatics',
    description: 'Explores the management and analysis of clinical datasets.',
  },
  {
    code: 'HLTH003',
    name: 'Digital Health Technologies',
    department: 'Health Informatics',
    description: 'Examines emerging technologies in digital healthcare.',
  },

  // High-Performance Computing (HPCO)
  {
    code: 'HPCO001',
    name: 'High-Performance Computing Fundamentals',
    department: 'High-Performance Computing',
    description: 'Introduces HPC architectures and parallel programming.',
  },
  {
    code: 'HPCO002',
    name: 'Parallel Algorithms',
    department: 'High-Performance Computing',
    description: 'Covers algorithmic techniques for parallel computation.',
  },
  {
    code: 'HPCO003',
    name: 'Scientific Computing',
    department: 'High-Performance Computing',
    description: 'Applies HPC techniques to scientific and engineering problems.',
  },

  // Human–Computer Interaction (HCI)
  {
    code: 'HCI001',
    name: 'Human-Computer Interaction Principles',
    department: 'Human–Computer Interaction',
    description: 'Explores user-centred design and interaction models.',
  },
  {
    code: 'HCI002',
    name: 'Usability Engineering',
    department: 'Human–Computer Interaction',
    description: 'Covers usability testing, evaluation, and design improvement.',
  },
  {
    code: 'HCI003',
    name: 'Designing Interactive Experiences',
    department: 'Human–Computer Interaction',
    description: 'Focuses on designing engaging and accessible digital experiences.',
  },

  // Information Systems (INFS)
  {
    code: 'INFS001',
    name: 'Information Systems Foundations',
    department: 'Information Systems',
    description: 'Introduces organisational information systems and digital transformation.',
  },
  {
    code: 'INFS002',
    name: 'Enterprise Systems Architecture',
    department: 'Information Systems',
    description: 'Covers enterprise-level system design and integration.',
  },
  {
    code: 'INFS003',
    name: 'Business Information Management',
    department: 'Information Systems',
    description: 'Explores information management strategies in organisations.',
  },

  // Information Technology (ITEC)
  {
    code: 'ITEC001',
    name: 'IT Infrastructure & Support',
    department: 'Information Technology',
    description: 'Covers IT infrastructure, support systems, and service management.',
  },
  {
    code: 'ITEC002',
    name: 'Systems Administration',
    department: 'Information Technology',
    description: 'Explores system configuration, maintenance, and automation.',
  },
  {
    code: 'ITEC003',
    name: 'IT Project Management',
    department: 'Information Technology',
    description: 'Covers project planning, execution, and risk management in IT contexts.',
  },

  // Internet of Things Engineering (IOTE)
  {
    code: 'IOTE001',
    name: 'IoT Systems & Architecture',
    department: 'Internet of Things Engineering',
    description: 'Introduces IoT devices, communication models, and architectures.',
  },
  {
    code: 'IOTE002',
    name: 'Embedded Systems Programming',
    department: 'Internet of Things Engineering',
    description: 'Covers embedded programming for IoT applications.',
  },
  {
    code: 'IOTE003',
    name: 'Smart Devices & Sensors',
    department: 'Internet of Things Engineering',
    description: 'Explores sensor networks and smart device integration.',
  },

  // Machine Learning Systems (MLSY)
  {
    code: 'MLSY001',
    name: 'Machine Learning System Design',
    department: 'Machine Learning Systems',
    description: 'Covers the design and deployment of ML systems at scale.',
  },
  {
    code: 'MLSY002',
    name: 'Model Deployment & MLOps',
    department: 'Machine Learning Systems',
    description: 'Explores MLOps pipelines and production ML workflows.',
  },
  {
    code: 'MLSY003',
    name: 'Automated Machine Learning',
    department: 'Machine Learning Systems',
    description: 'Examines AutoML techniques and automated model optimisation.',
  },

  // Natural Language Processing (NLP)
  {
    code: 'NLP001',
    name: 'Natural Language Processing Fundamentals',
    department: 'Natural Language Processing',
    description: 'Introduces NLP concepts including tokenisation and language modelling.',
  },
  {
    code: 'NLP002',
    name: 'Text Mining & Analysis',
    department: 'Natural Language Processing',
    description: 'Covers text analytics, sentiment analysis, and information extraction.',
  },
  {
    code: 'NLP003',
    name: 'Neural NLP Models',
    department: 'Natural Language Processing',
    description: 'Explores transformer models and neural NLP architectures.',
  },

  // Quantum Computing (QUAN)
  {
    code: 'QUAN001',
    name: 'Introduction to Quantum Computing',
    department: 'Quantum Computing',
    description: 'Covers quantum bits, gates, and fundamental quantum algorithms.',
  },
  {
    code: 'QUAN002',
    name: 'Quantum Algorithms',
    department: 'Quantum Computing',
    description: 'Explores quantum search, optimisation, and simulation algorithms.',
  },
  {
    code: 'QUAN003',
    name: 'Quantum Information Theory',
    department: 'Quantum Computing',
    description: 'Examines quantum information, entanglement, and communication.',
  },

  // Robotics & Autonomous Systems (ROBO)
  {
    code: 'ROBO001',
    name: 'Robotics Fundamentals',
    department: 'Robotics & Autonomous Systems',
    description: 'Introduces robot kinematics, control, and sensing.',
  },
  {
    code: 'ROBO002',
    name: 'Autonomous Navigation',
    department: 'Robotics & Autonomous Systems',
    description: 'Covers localisation, mapping, and autonomous navigation techniques.',
  },
  {
    code: 'ROBO003',
    name: 'Intelligent Robotics',
    department: 'Robotics & Autonomous Systems',
    description: 'Explores AI-driven robotics and autonomous decision-making.',
  },

  // Software Engineering (SOFT)
  {
    code: 'SOFT001',
    name: 'Software Engineering Principles',
    department: 'Software Engineering',
    description: 'Covers software development methodologies and engineering practices.',
  },
  {
    code: 'SOFT002',
    name: 'Software Architecture & Design',
    department: 'Software Engineering',
    description: 'Explores architectural patterns and system design.',
  },
  {
    code: 'SOFT003',
    name: 'Quality Assurance & Testing',
    department: 'Software Engineering',
    description: 'Covers testing strategies, automation, and quality assurance.',
  },

  // UX/UI Design (UXUI)
  {
    code: 'UXUI001',
    name: 'User Experience Design',
    department: 'UX/UI Design',
    description: 'Introduces UX principles, research methods, and design processes.',
  },
  {
    code: 'UXUI002',
    name: 'User Interface Design',
    department: 'UX/UI Design',
    description: 'Covers interface design, layout, and visual communication.',
  },
  {
    code: 'UXUI003',
    name: 'Prototyping & Interaction Design',
    department: 'UX/UI Design',
    description: 'Explores prototyping tools and interactive design workflows.',
  },

  // ============================
  // NON-IT DEPARTMENTS
  // ============================

  // Accounting & Finance (ACFI)
  {
    code: 'ACFI001',
    name: 'Financial Accounting',
    department: 'Accounting & Finance',
    description: 'Introduces financial reporting and accounting principles.',
  },
  {
    code: 'ACFI002',
    name: 'Corporate Finance',
    department: 'Accounting & Finance',
    description: 'Covers financial management, investment, and capital structure.',
  },
  {
    code: 'ACFI003',
    name: 'Management Accounting',
    department: 'Accounting & Finance',
    description: 'Explores budgeting, costing, and performance measurement.',
  },

  // Aerospace Engineering (AERO)
  {
    code: 'AERO001',
    name: 'Aerospace Engineering Fundamentals',
    department: 'Aerospace Engineering',
    description: 'Introduces aerodynamics, propulsion, and aerospace systems.',
  },
  {
    code: 'AERO002',
    name: 'Flight Mechanics',
    department: 'Aerospace Engineering',
    description: 'Covers aircraft stability, control, and flight performance.',
  },
  {
    code: 'AERO003',
    name: 'Aerospace Materials',
    department: 'Aerospace Engineering',
    description: 'Examines materials used in aerospace structures and design.',
  },

  // Biomedical Sciences (BIOM)
  {
    code: 'BIOM001',
    name: 'Cell Biology & Physiology',
    department: 'Biomedical Sciences',
    description: 'Covers cellular structure, function, and physiological processes.',
  },
  {
    code: 'BIOM002',
    name: 'Medical Microbiology',
    department: 'Biomedical Sciences',
    description: 'Explores microorganisms and their role in human disease.',
  },
  {
    code: 'BIOM003',
    name: 'Human Anatomy',
    department: 'Biomedical Sciences',
    description: 'Studies the structure and organisation of the human body.',
  },

  // Biosciences (BIOS)
  {
    code: 'BIOS001',
    name: 'Introduction to Biosciences',
    department: 'Biosciences',
    description: 'Covers fundamental biological concepts and scientific methods.',
  },
  {
    code: 'BIOS002',
    name: 'Ecology & Evolution',
    department: 'Biosciences',
    description: 'Explores ecological systems and evolutionary processes.',
  },
  {
    code: 'BIOS003',
    name: 'Molecular Biology',
    department: 'Biosciences',
    description: 'Examines molecular mechanisms underlying biological function.',
  },

    // Business & Management (BUSM)
  {
    code: 'BUSM001',
    name: 'Principles of Management',
    department: 'Business & Management',
    description: 'Introduces management theory, organisational structures, and leadership practices.',
  },
  {
    code: 'BUSM002',
    name: 'Organisational Behaviour',
    department: 'Business & Management',
    description: 'Explores human behaviour in organisations and its impact on performance.',
  },
  {
    code: 'BUSM003',
    name: 'Strategic Management',
    department: 'Business & Management',
    description: 'Covers strategic analysis, competitive advantage, and long-term planning.',
  },

  // Chemical Engineering (CHEN)
  {
    code: 'CHEN001',
    name: 'Chemical Engineering Principles',
    department: 'Chemical Engineering',
    description: 'Introduces mass balances, energy balances, and core chemical engineering concepts.',
  },
  {
    code: 'CHEN002',
    name: 'Process Engineering & Design',
    department: 'Chemical Engineering',
    description: 'Covers process design, optimisation, and industrial chemical systems.',
  },
  {
    code: 'CHEN003',
    name: 'Reaction Engineering',
    department: 'Chemical Engineering',
    description: 'Explores chemical reaction kinetics and reactor design.',
  },

  // Civil Engineering (CIVL)
  {
    code: 'CIVL001',
    name: 'Structural Analysis',
    department: 'Civil Engineering',
    description: 'Covers structural behaviour, loading, and analysis techniques.',
  },
  {
    code: 'CIVL002',
    name: 'Geotechnical Engineering',
    department: 'Civil Engineering',
    description: 'Explores soil mechanics and foundation engineering.',
  },
  {
    code: 'CIVL003',
    name: 'Transportation Engineering',
    department: 'Civil Engineering',
    description: 'Examines transport systems, planning, and infrastructure design.',
  },

  // Dentistry (DENT)
  {
    code: 'DENT001',
    name: 'Dental Anatomy & Physiology',
    department: 'Dentistry',
    description: 'Covers oral anatomy, tooth structure, and craniofacial development.',
  },
  {
    code: 'DENT002',
    name: 'Clinical Dentistry Techniques',
    department: 'Dentistry',
    description: 'Introduces clinical procedures and patient care in dentistry.',
  },
  {
    code: 'DENT003',
    name: 'Oral Pathology',
    department: 'Dentistry',
    description: 'Explores diseases of the oral cavity and diagnostic methods.',
  },

  // Drama & Theatre Arts (DRAM)
  {
    code: 'DRAM001',
    name: 'Acting & Performance Techniques',
    department: 'Drama & Theatre Arts',
    description: 'Covers acting methods, performance skills, and stage presence.',
  },
  {
    code: 'DRAM002',
    name: 'Theatre Production',
    department: 'Drama & Theatre Arts',
    description: 'Explores directing, stagecraft, and production management.',
  },
  {
    code: 'DRAM003',
    name: 'History of Theatre',
    department: 'Drama & Theatre Arts',
    description: 'Examines the evolution of theatre from classical to contemporary forms.',
  },

  // Economics (ECON)
  {
    code: 'ECON001',
    name: 'Microeconomics',
    department: 'Economics',
    description: 'Introduces consumer behaviour, market structures, and economic decision-making.',
  },
  {
    code: 'ECON002',
    name: 'Macroeconomics',
    department: 'Economics',
    description: 'Covers national income, inflation, unemployment, and fiscal policy.',
  },
  {
    code: 'ECON003',
    name: 'Econometrics',
    department: 'Economics',
    description: 'Explores statistical modelling and data analysis in economics.',
  },

  // Education (EDUC)
  {
    code: 'EDUC001',
    name: 'Foundations of Education',
    department: 'Education',
    description: 'Covers educational theory, learning models, and teaching principles.',
  },
  {
    code: 'EDUC002',
    name: 'Curriculum Design',
    department: 'Education',
    description: 'Explores curriculum planning, assessment, and instructional design.',
  },
  {
    code: 'EDUC003',
    name: 'Inclusive Education',
    department: 'Education',
    description: 'Examines strategies for supporting diverse learners in educational settings.',
  },

  // Electrical Engineering (ELEC)
  {
    code: 'ELEC001',
    name: 'Circuit Analysis',
    department: 'Electrical Engineering',
    description: 'Introduces electrical circuits, components, and analysis techniques.',
  },
  {
    code: 'ELEC002',
    name: 'Power Systems Engineering',
    department: 'Electrical Engineering',
    description: 'Covers power generation, transmission, and distribution.',
  },
  {
    code: 'ELEC003',
    name: 'Electronics & Instrumentation',
    department: 'Electrical Engineering',
    description: 'Explores electronic devices, sensors, and instrumentation systems.',
  },

  // English Literature (ENGL)
  {
    code: 'ENGL001',
    name: 'Introduction to Literary Studies',
    department: 'English Literature',
    description: 'Covers literary analysis, critical theory, and textual interpretation.',
  },
  {
    code: 'ENGL002',
    name: 'Shakespeare & Renaissance Literature',
    department: 'English Literature',
    description: 'Explores major works of Shakespeare and Renaissance writers.',
  },
  {
    code: 'ENGL003',
    name: 'Modern & Contemporary Literature',
    department: 'English Literature',
    description: 'Examines literature from the 20th century to the present.',
  },

  // Environmental Science (ENVS)
  {
    code: 'ENVS001',
    name: 'Environmental Systems',
    department: 'Environmental Science',
    description: 'Introduces ecological systems, biogeochemical cycles, and environmental processes.',
  },
  {
    code: 'ENVS002',
    name: 'Climate Change Science',
    department: 'Environmental Science',
    description: 'Explores climate systems, global warming, and mitigation strategies.',
  },
  {
    code: 'ENVS003',
    name: 'Environmental Impact Assessment',
    department: 'Environmental Science',
    description: 'Covers methods for assessing environmental impacts of development.',
  },

  // History (HIST)
  {
    code: 'HIST001',
    name: 'World History',
    department: 'History',
    description: 'Examines major global historical developments and civilisations.',
  },
  {
    code: 'HIST002',
    name: 'British History',
    department: 'History',
    description: 'Covers key events and themes in British history.',
  },
  {
    code: 'HIST003',
    name: 'Modern European History',
    department: 'History',
    description: 'Explores political, social, and cultural developments in modern Europe.',
  },

  // Human Resources & Organisational Behaviour (HROB)
  {
    code: 'HROB001',
    name: 'Human Resource Management',
    department: 'Human Resources & Organisational Behaviour',
    description: 'Covers recruitment, training, and employee relations.',
  },
  {
    code: 'HROB002',
    name: 'Organisational Psychology',
    department: 'Human Resources & Organisational Behaviour',
    description: 'Explores psychological principles applied to workplace behaviour.',
  },
  {
    code: 'HROB003',
    name: 'Leadership & Change Management',
    department: 'Human Resources & Organisational Behaviour',
    description: 'Examines leadership theories and organisational change processes.',
  },

  // Law (LAWS)
  {
    code: 'LAWS001',
    name: 'Foundations of Law',
    department: 'Law',
    description: 'Introduces legal systems, principles, and case analysis.',
  },
  {
    code: 'LAWS002',
    name: 'Contract Law',
    department: 'Law',
    description: 'Covers contract formation, terms, and breach of contract.',
  },
  {
    code: 'LAWS003',
    name: 'Criminal Law',
    department: 'Law',
    description: 'Explores criminal offences, defences, and legal procedures.',
  },

  // Marketing (MARK)
  {
    code: 'MARK001',
    name: 'Marketing Principles',
    department: 'Marketing',
    description: 'Introduces marketing concepts, consumer behaviour, and market research.',
  },
  {
    code: 'MARK002',
    name: 'Digital Marketing',
    department: 'Marketing',
    description: 'Covers online marketing strategies, analytics, and digital campaigns.',
  },
  {
    code: 'MARK003',
    name: 'Brand Management',
    department: 'Marketing',
    description: 'Explores brand strategy, identity, and positioning.',
  },

  // Materials Science & Engineering (MATE)
  {
    code: 'MATE001',
    name: 'Materials Science Fundamentals',
    department: 'Materials Science & Engineering',
    description: 'Covers material properties, structure, and characterisation.',
  },
  {
    code: 'MATE002',
    name: 'Metallurgy & Alloys',
    department: 'Materials Science & Engineering',
    description: 'Explores metallic materials and their applications.',
  },
  {
    code: 'MATE003',
    name: 'Polymer & Composite Materials',
    department: 'Materials Science & Engineering',
    description: 'Examines polymers, composites, and advanced materials.',
  },

  // Mathematics (MATH)
  {
    code: 'MATH001',
    name: 'Calculus & Analysis',
    department: 'Mathematics',
    description: 'Covers differential and integral calculus and mathematical analysis.',
  },
  {
    code: 'MATH002',
    name: 'Linear Algebra',
    department: 'Mathematics',
    description: 'Explores vector spaces, matrices, and linear transformations.',
  },
  {
    code: 'MATH003',
    name: 'Probability & Statistics',
    department: 'Mathematics',
    description: 'Introduces probability theory and statistical methods.',
  },

  // Mechanical Engineering (MECH)
  {
    code: 'MECH001',
    name: 'Engineering Mechanics',
    department: 'Mechanical Engineering',
    description: 'Covers statics, dynamics, and mechanical systems.',
  },
  {
    code: 'MECH002',
    name: 'Thermodynamics',
    department: 'Mechanical Engineering',
    description: 'Explores energy systems, heat transfer, and thermodynamic cycles.',
  },
  {
    code: 'MECH003',
    name: 'Mechanical Design',
    department: 'Mechanical Engineering',
    description: 'Covers design principles, CAD, and mechanical components.',
  },

  // Medical Sciences (MEDS)
  {
    code: 'MEDS001',
    name: 'Human Physiology',
    department: 'Medical Sciences',
    description: 'Covers organ systems, physiological processes, and homeostasis.',
  },
  {
    code: 'MEDS002',
    name: 'Pathophysiology',
    department: 'Medical Sciences',
    description: 'Explores disease mechanisms and physiological dysfunction.',
  },
  {
    code: 'MEDS003',
    name: 'Clinical Biochemistry',
    department: 'Medical Sciences',
    description: 'Examines biochemical processes relevant to human health.',
  },

  // Modern Languages & Linguistics (MODL)
  {
    code: 'MODL001',
    name: 'Introduction to Linguistics',
    department: 'Modern Languages & Linguistics',
    description: 'Covers phonetics, syntax, semantics, and linguistic theory.',
  },
  {
    code: 'MODL002',
    name: 'Language Acquisition',
    department: 'Modern Languages & Linguistics',
    description: 'Explores how humans acquire first and second languages.',
  },
  {
    code: 'MODL003',
    name: 'Sociolinguistics',
    department: 'Modern Languages & Linguistics',
    description: 'Examines the relationship between language and society.',
  },

  // Neuroscience (NEUR)
  {
    code: 'NEUR001',
    name: 'Introduction to Neuroscience',
    department: 'Neuroscience',
    description: 'Covers neural structure, function, and communication.',
  },
  {
    code: 'NEUR002',
    name: 'Neurophysiology',
    department: 'Neuroscience',
    description: 'Explores electrical and chemical signalling in the nervous system.',
  },
  {
    code: 'NEUR003',
    name: 'Cognitive Neuroscience',
    department: 'Neuroscience',
    description: 'Examines neural mechanisms underlying cognition and behaviour.',
  },

  // Nursing (NURS)
  {
    code: 'NURS001',
    name: 'Foundations of Nursing Practice',
    department: 'Nursing',
    description: 'Introduces core nursing skills, patient care, and clinical practice.',
  },
  {
    code: 'NURS002',
    name: 'Adult Nursing',
    department: 'Nursing',
    description: 'Covers nursing care for adult patients across healthcare settings.',
  },
  {
    code: 'NURS003',
    name: 'Clinical Assessment Skills',
    department: 'Nursing',
    description: 'Explores patient assessment, monitoring, and clinical decision-making.',
  },

  // Operations & Supply Chain (OPSC)
  {
    code: 'OPSC001',
    name: 'Operations Management',
    department: 'Operations & Supply Chain',
    description: 'Covers production systems, process design, and operations strategy.',
  },
  {
    code: 'OPSC002',
    name: 'Supply Chain Management',
    department: 'Operations & Supply Chain',
    description: 'Explores logistics, procurement, and supply chain optimisation.',
  },
  {
    code: 'OPSC003',
    name: 'Lean Systems & Quality',
    department: 'Operations & Supply Chain',
    description: 'Covers lean methodologies and quality management systems.',
  },

  // Optometry (OPTO)
  {
    code: 'OPTO001',
    name: 'Optics & Visual Science',
    department: 'Optometry',
    description: 'Covers optical principles and visual system function.',
  },
  {
    code: 'OPTO002',
    name: 'Clinical Optometry',
    department: 'Optometry',
    description: 'Explores clinical assessment and management of visual disorders.',
  },
  {
    code: 'OPTO003',
    name: 'Ocular Disease',
    department: 'Optometry',
    description: 'Examines diseases affecting the eye and visual pathways.',
  },

  // Pharmacy (PHAR)
  {
    code: 'PHAR001',
    name: 'Pharmaceutical Chemistry',
    department: 'Pharmacy',
    description: 'Covers chemical principles underlying drug design and development.',
  },
  {
    code: 'PHAR002',
    name: 'Pharmacology',
    department: 'Pharmacy',
    description: 'Explores drug mechanisms, interactions, and therapeutic uses.',
  },
  {
    code: 'PHAR003',
    name: 'Clinical Pharmacy Practice',
    department: 'Pharmacy',
    description: 'Covers patient-centred pharmaceutical care and clinical decision-making.',
  },

  // Philosophy (PHIL)
  {
    code: 'PHIL001',
    name: 'Introduction to Philosophy',
    department: 'Philosophy',
    description: 'Covers major philosophical questions and traditions.',
  },
  {
    code: 'PHIL002',
    name: 'Ethics & Moral Philosophy',
    department: 'Philosophy',
    description: 'Explores ethical theories and moral reasoning.',
  },
  {
    code: 'PHIL003',
    name: 'Philosophy of Mind',
    department: 'Philosophy',
    description: 'Examines theories of consciousness, cognition, and mental states.',
  },

  // Physics & Astronomy (PHAS)
  {
    code: 'PHAS001',
    name: 'Classical Mechanics',
    department: 'Physics & Astronomy',
    description: 'Covers Newtonian mechanics, motion, and forces.',
  },
  {
    code: 'PHAS002',
    name: 'Quantum Physics',
    department: 'Physics & Astronomy',
    description: 'Explores quantum theory, wave-particle duality, and atomic structure.',
  },
  {
    code: 'PHAS003',
    name: 'Astrophysics',
    department: 'Physics & Astronomy',
    description: 'Examines stars, galaxies, and cosmological phenomena.',
  },

  // Politics & International Relations (POLI)
  {
    code: 'POLI001',
    name: 'Introduction to Politics',
    department: 'Politics & International Relations',
    description: 'Covers political systems, ideologies, and governance.',
  },
  {
    code: 'POLI002',
    name: 'International Relations Theory',
    department: 'Politics & International Relations',
    description: 'Explores global politics, diplomacy, and international systems.',
  },
  {
    code: 'POLI003',
    name: 'Comparative Politics',
    department: 'Politics & International Relations',
    description: 'Examines political institutions and behaviour across countries.',
  },

  // Psychology (PSYC)
  {
    code: 'PSYC001',
    name: 'Introduction to Psychology',
    department: 'Psychology',
    description: 'Covers major psychological theories and research methods.',
  },
  {
    code: 'PSYC002',
    name: 'Cognitive Psychology',
    department: 'Psychology',
    description: 'Explores perception, memory, and cognitive processes.',
  },
  {
    code: 'PSYC003',
    name: 'Developmental Psychology',
    department: 'Psychology',
    description: 'Examines human development across the lifespan.',
  },

  // Public Health (PBHL)
  {
    code: 'PBHL001',
    name: 'Public Health Foundations',
    department: 'Public Health',
    description: 'Covers health promotion, epidemiology, and public health systems.',
  },
  {
    code: 'PBHL002',
    name: 'Epidemiology',
    department: 'Public Health',
    description: 'Explores disease patterns, risk factors, and population health.',
  },
  {
    code: 'PBHL003',
    name: 'Global Health',
    department: 'Public Health',
    description: 'Examines global health challenges and international health policy.',
  },
    // Social Policy (SCPL)
  {
    code: 'SCPL001',
    name: 'Social Policy Analysis',
    department: 'Social Policy',
    description: 'Covers policy development, evaluation, and the impact of social interventions.',
  },
  {
    code: 'SCPL002',
    name: 'Welfare Systems & Reform',
    department: 'Social Policy',
    description: 'Explores welfare models, social justice, and contemporary policy debates.',
  },
  {
    code: 'SCPL003',
    name: 'Poverty & Inequality Studies',
    department: 'Social Policy',
    description: 'Examines the causes and consequences of poverty and social inequality.',
  },

  // Sociology (SOCI)
  {
    code: 'SOCI001',
    name: 'Foundations of Sociology',
    department: 'Sociology',
    description: 'Introduces sociological theory, research methods, and social structures.',
  },
  {
    code: 'SOCI002',
    name: 'Sociology of Culture',
    department: 'Sociology',
    description: 'Explores cultural practices, identity, and social meaning.',
  },
  {
    code: 'SOCI003',
    name: 'Social Research Methods',
    department: 'Sociology',
    description: 'Covers qualitative and quantitative research techniques in sociology.',
  },

  // Sports Science (SPOR)
  {
    code: 'SPOR001',
    name: 'Exercise Physiology',
    department: 'Sports Science',
    description: 'Examines physiological responses to exercise and physical activity.',
  },
  {
    code: 'SPOR002',
    name: 'Sports Performance Analysis',
    department: 'Sports Science',
    description: 'Covers performance metrics, biomechanics, and athlete development.',
  },
  {
    code: 'SPOR003',
    name: 'Nutrition for Sport & Exercise',
    department: 'Sports Science',
    description: 'Explores nutritional strategies to support athletic performance.',
  },

  // Theology & Religion (THRE)
  {
    code: 'THRE001',
    name: 'Introduction to Theology',
    department: 'Theology & Religion',
    description: 'Covers major theological traditions, beliefs, and historical development.',
  },
  {
    code: 'THRE002',
    name: 'World Religions',
    department: 'Theology & Religion',
    description: 'Explores global religious traditions and their cultural significance.',
  },
  {
    code: 'THRE003',
    name: 'Philosophy of Religion',
    department: 'Theology & Religion',
    description: 'Examines philosophical questions surrounding belief, faith, and spirituality.',
  },

  // Urban Planning (URBP)
  {
    code: 'URBP001',
    name: 'Urban Planning Principles',
    department: 'Urban Planning',
    description: 'Introduces planning theory, urban development, and land-use strategies.',
  },
  {
    code: 'URBP002',
    name: 'Sustainable Cities',
    department: 'Urban Planning',
    description: 'Explores sustainable urban design, green infrastructure, and environmental planning.',
  },
  {
    code: 'URBP003',
    name: 'Transport & Infrastructure Planning',
    department: 'Urban Planning',
    description: 'Covers transport systems, infrastructure design, and mobility planning.',
  },
]

