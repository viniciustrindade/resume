const data = {
  picture: `${process.env.PUBLIC_URL}/img/pic.jpg`,
  lastModification: new Date(),
  aboutme: 'Fanatic for technology always looking for challenges and opportunities. Currently working in an environmental company and in other projects in free time. Has used several technology to improve skills and always been search for new technologic approaches.',
  company: {
    name: 'Vinicius Trindade',
    addressLine1: 'Salvador, BA',
    addressLine2: 'Brazil'
  },
  social: {
    site: {
      url: 'http://www.viniciustrindade.com.br',
      title: 'My Site'
    },
    facebook: {
      url: '',
      title: ''
    },
    twitter: {
      url: 'https://twitter.com/viniblessing',
      title: '#MySocialChannel'
    },
    linkedin: {
      url: 'http://www.linkedin.com/in/viniciustrindade',
      title: 'My work history.Follow me there!'
    },
    instagram: {
      url: '',
      title: ''
    },
    gitlab: {
      url: 'https://gitlab.com/viniciustrindade',
      title: 'Some projects that I\'m following, forking and coding.'
    },
    github: {
      url: 'https://github.com/viniciustrindade',
      title: 'Some projects that I\'m following, forking and coding.'
    },
  },
  title: 'Vinicius Trindade',
  subTitle: 'System Analyst and Web Developer',
  phone: {
    url: '#',
    number: '',
  },
  email: {
    address: 'contact@viniciustrindade.com.br',
    subject: '[Site Contact]&body=I saw your CV OnLine. Please, get in touch. Thanks.'
  },
  career_sumary: 'Results oriented IT developing with more than 7 years of experience on web system development, acting as develop engineer for agriculture, mining and petrochemical industry areas. Strong knowledge and experience in geographic information system (GIS).Team lead and player with good communication skills.',
  education: [
    {
      title: 'Master of Computer Science at UFBA – Universidade Federal da Bahia, WISER (Web, Internet and Intelligent Systems Research Group).',
      period: '2021 - now',
      detail: 'Master Paper area: Iot',
    },
    {
      title: 'Post Graduate on Distributed and Ubiquitous Computing at IFBA – Instituto Federal da Bahia, GSORT Research Group',
      period: '2015 - 2016',
      detail: 'Pst Graduate Paper: Supporting Self-Adaptive Behavior in Service-Oriented Mobile Applications',
    },
    {
      title: 'MBA in Project Management at Centro Universitário Jorge Amado',
      period: '2009 - 2010',
      detail: 'MBA Paper: A project management implementation in a small business based on the PMBOK 4th edition.',
    },
    {
      title: 'Bachelor of Computer Science at Ruy Barbosa College',
      period: '2004 - 2008',
      detail: 'Graduation Paper: A genetic algorithms application in optimization of a vertical transport system based on fuzzy logic.',
    },
    {
      title: 'Technical Course in Industrial Automation & Control at IFBA',
      period: '2004 - 2005',
      detail: 'Industrial skills and worked as trainee in a Petrochemical Industry as Instrumentation Operator working with process variables , several equipment, UNIX, Ladder language, Programmable logic controller (PLC), supervisory control and data acquisition (SCADA).',
    },
  ],
  skills: [
    {
      tag: 'Frontend',
      skills: ['BootstrapCSS', 'Webpack', 'MaterialUI', 'AngularJS', 'React', 'FlexBoxGrid']
    },
    {
      tag: 'Backend - Node',
      skills: ['Sequelize', 'Mocha', 'Express', 'NextJS', 'Chai (TDD)']
    },
    {
      tag: 'Backend - Java',
      skills: ['Spring Boot', 'PostgreSQL', 'MySQL', 'JSF', 'JPA', 'Prime Faces', 'Maven', 'SOA', 'Java Beans']
    },
    {
      tag: 'Operation',
      skills: ['AWS S3, RDS, Route S3 and CLI', 'Virtualization', 'Docker', 'Digital Ocean', 'Heroku']
    }
  ],
  experience: [
    {
      company: 'Solidareasy',
      actas: 'CTO of Solidareasy',
      period: 'Feb/2017 - now',
      detail: 'Management and Development of IT solutions for non-profits organizations. First non-profit online payment system at Salvador, BA, Brazil, to raising funds to amount 80 organizations and to help them at coronavirus pandemic year. I\'ve been leading a small remote development team. We built system to raised money for ONGs with qrcode at youtube lives, instagram links e embedded website button.',
    },
    {
      company: 'UFBA - Federal University of Bahia',
      actas: 'Senior Software Development Engineer ',
      period: 'Feb/2016 - now',
      detail: 'Development and Maintain of Several Academic Systems at the University. Technical manager of the largest university system. Act as main of system architecture and responsible by the integration between system versions through GIT, GITFLOW, JENKINS, CI, I support the quality of deliveries, code review, tracking changes and I’ve working at web development using Java, JPA, JSF, Prime Faces, Spring Boot, Maven, SOA, and REST API.',
    },
    {
      company: 'COREN-BA - Conselho Regional de Enfermagem da Bahia',
      actas: 'Senior Software Development Engineer ',
      period: 'July/2014 - Feb/2016 ',
      detail: 'Development and Maintain of Several Systems in Tomcat, Apache and JBoss, and several databases for Health Professionals and for administrative sectors. Mobile developer with Android and web developer with apis, Single Pages Applications, angularjs, jquery, css3, Java, EJB, CDI, Several Security Frameworks for authorizations and authentications (Ldap, Token, Basic ...) with Big Database with strong knowledge in interactive delivery and agile development for dynamic environment',
    },
    {
      company: 'SOLUTIS TECNOLOGIAS',
      actas: 'Senior Software Development Engineer ',
      period: 'April/2014 - July/2014',
      detail: 'Development of High Availability Software in JSF, JPA, Hibernate, PrimeFaces with WebSphere Server and Oracle Database. At this opportunity acting as Analyst I improved my skills in a Scrum environment and it was possible work with Maven, SVN, Velocity, PrettyFaces, JPA, Hibernate, and others technologies',
    },
    {
      company: 'XYZTemas LTDA, Brazil',
      actas: 'Developer',
      period: 'Jan/2007 - April/2014',
      detail: 'GIS engineering for agribusiness and team leader for software development in Java. Experience on requirements analysis, client meetings, software prototyping and conception; customer service in post-sale, software maintenance and versioning control. Experience on daily team meeting, task estimates, resolving impediments, trainee\'s supervision, reporting to director and management of indicators of production and software quality',
    },
  ],
  source: 'https://github.com/viniciustrindade/resume',
  slides: [
    // {
    //   url: `${process.env.PUBLIC_URL}/img/photos/s1.jpg`,
    //   alt: ''
    // },
  ]
}

export default data;