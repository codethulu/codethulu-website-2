
const projectsList = [
    {
        name: "The Chamber",
        titleCard: false,
        description: "The Chamber is a procedurally generated dungeon crawler with pathfinding enemies, over 1000 hand drawn sprites and over 100 unique items. Each level of the infinitly sprawling dungeon has a procedurally generated floor plan: each with its own random layout, connections, and aesthetic. Enemies, friendly NPCs, and chests full of useful loot can randomly spawn. Beating enemies and exploring the dungeon help level the player up, which allows them to increase their stats using the skill tree. These stat increasements can aid the player in beating the boss that resides at the end of each floor.",
        tags: ["python"],
        image: "chamber",
        showcase: false,
    },
    {
        name: "Robot Maze",
        titleCard: false,
        description: "I created a pathfinding controller to guide a robot through a randomly generated maze. This project was written in java and made use of my research into pathfinding algorithms such as djikstra and the A* algorithm. ",
        tags: ["java"],
        image: "robot-maze",
        showcase: false,
    },
    {
        name: "Large Data Collider",
        titleCard: false,
        description: "The Large Data Collider is a complex puzzle that involved rotating, transposing and manipulating lists in haskell. I wrote my own tree structure to consider the different decisions in order to solve the puzzle as efficiently as possible.",
        tags: ["haskell", "functional"],
        image: "ldc",
        showcase: false,
    },
    {
        name: "Ncurses Text Editor",
        titleCard: false,
        description: "I created a text editor written in C using the ncurses library in order to deliver a text-user-interface to allow the user to navigate through menus. I added the functionality to scroll, manipulate files and copy and paste within files.",
        tags: ["c"],
        image: "ncurses",
        showcase: false,
    },
    {
        name: "How should society adapt to the autonomy of labour?",
        titleCard: false,
        description: "An essay contemplating the future of automation in the workplace and possible reactions society might take.",
        tags: ["essay"],
        image: "essay",
        showcase: false,
    },
    {
        name: "Investigating security vulnerabilities in Linux",
        titleCard: false,
        description: "An investigation into linux security, where I identified possible security errors in a linux filesystem and webserver.",
        tags: ["linux"],
        image: "security-linux",
        showcase: false,
    },
    {
        name: "SYTES: A task managing web app",
        titleCard: false,
        description: "SYTES is a task managing application, where users can create and log into accounts and create their own 'syte' which contains a number of tasks the user has created. Users can invite other people to their 'syte', sort their tasks, and send email notifications.",
        tags: ["html", "css", "javascript", "SQL", "PHP", "web-dev"],
        image: "sytes",
        showcase: false,
    },
    {
        name: "Scratch Clone",
        titleCard: false,
        description: "Scratch is a high-level visual programming langauge that uses draggable blocks to form procedures. Using Haskell I wrote a back end to interpret blockly blocks. Users of the program can assemble a simple program by dragging blocks to perform arithmetic on values stored in the memory of the program.",
        tags: ["haskell", "functional"],
        image: "scratch-clone",
        showcase: false,
    },
    {
        name: "WAFFLES: A data structure project",
        titleCard: false,
        description: "A project that emphasised the application of data structures and sorting algorithms content I had learnt at University. The backend for a restaurant review website I wrote utilised AVL trees, binary searches and hashmaps to efficiently store and locate data for the system.",
        tags: ["java"],
        image: "waffles",
        showcase: false,
    },
    {
        name: "Personal Website 1.0",
        titleCard: false,
        description: "The first iteration of my personal website. I wrote this first iteraton in plain html, css and javascript.",
        tags: ["html", "css", "javascript", "web-dev"],
        image: "old-website",
        showcase: false,
    },
    {
        name: "Warwick Labour Website Redesign",
        titleCard: false,
        description: "I created a new website for a society at my university. The previous design was created in wordpress and was in much need of a redesign. Using react and typescript I created a flat, modern, simple redesign for the society.",
        tags: ["typescript", "react", "web-dev"],
        image: "warwick-labour-website",
        showcase: false,
    },
    {
        name: "Multithreaded packet sniffer",
        titleCard: false,
        description: "A multithreaded packet sniffer that applies my packet structure knowledge and threading methods to produce a basic intrusion detection system. The program sniffs packets and informs the user if it detects ARP cache poisoning, SYN flooding or a blacklisted URL.",
        tags: ["c"],
        image: "../images/projects/robot-maze.png",
        showcase: false,
    },
    {
        name: "SQL Gig Scheduler",
        titleCard: false,
        description: "In this project I was tasked to write the SQl queries required for a music production company to book acts for an upcoming festival. This involved designing a system and displaying the appropriate data required to schedule, remove and get information about gigs.",
        tags: ["postgresql", "sql", "java"],
        image: "../images/projects/robot-maze.png",
        showcase: false,
    },
    {
        name: "Ursina Elements",
        titleCard: false,
        description: "In this project I was tasked to write the SQl queries required for a music production company to book acts for an upcoming festival. This involved designing a system and displaying the appropriate data required to schedule, remove and get information about gigs.",
        tags: ["python"],
        image: "ursina-elements",
        showcase: false,
    },
    {
        name: "GO Tools",
        titleCard: false,
        description: "An app built for a niche board game called GO. The app allows the user to quickly convert between the different currencies, and calculate the cost of journeys between cities easily without having to consult the paper guide.",
        tags: ["swift", "app-dev"],
        image: "go-tools",
        showcase: false,
    },
]
export default projectsList;