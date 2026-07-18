// ============================================================
// GENERATED MULTI-ROADMAP DATA — Enhanced Parser
// Sources: backend-roadmap.md, database-roadmap.md, devops-roadmap.md, others-roadmap.md
// Total Phases  : 93
// Total Topics  : 430
// Total Subtopics: 4143
// With Code     : 42
// With Overview : 430
// ============================================================

export const PHASES = [
  {
    "id": 1,
    "title": "Prerequisites",
    "icon": "⚙️",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "Before starting Spring, become comfortable with the following.",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t1",
        "number": 1,
        "title": "Core Java",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t1-s1",
            "title": "Classes and objects"
          },
          {
            "id": "backend-t1-s2",
            "title": "Encapsulation"
          },
          {
            "id": "backend-t1-s3",
            "title": "Inheritance"
          },
          {
            "id": "backend-t1-s4",
            "title": "Polymorphism"
          },
          {
            "id": "backend-t1-s5",
            "title": "Abstraction"
          },
          {
            "id": "backend-t1-s6",
            "title": "Interfaces"
          },
          {
            "id": "backend-t1-s7",
            "title": "Abstract classes"
          },
          {
            "id": "backend-t1-s8",
            "title": "Method overloading and overriding"
          },
          {
            "id": "backend-t1-s9",
            "title": "Access modifiers"
          },
          {
            "id": "backend-t1-s10",
            "title": "Static and instance members"
          },
          {
            "id": "backend-t1-s11",
            "title": "Constructors"
          },
          {
            "id": "backend-t1-s12",
            "title": "Records"
          },
          {
            "id": "backend-t1-s13",
            "title": "Enums"
          },
          {
            "id": "backend-t1-s14",
            "title": "Sealed classes"
          },
          {
            "id": "backend-t1-s15",
            "title": "Annotations"
          },
          {
            "id": "backend-t1-s16",
            "title": "Reflection basics"
          },
          {
            "id": "backend-t1-s17",
            "title": "Exception handling"
          },
          {
            "id": "backend-t1-s18",
            "title": "Custom exceptions"
          },
          {
            "id": "backend-t1-s19",
            "title": "Collections"
          },
          {
            "id": "backend-t1-s20",
            "title": "Generics"
          },
          {
            "id": "backend-t1-s21",
            "title": "`Comparable` and `Comparator`"
          },
          {
            "id": "backend-t1-s22",
            "title": "Lambda expressions"
          },
          {
            "id": "backend-t1-s23",
            "title": "Stream API"
          },
          {
            "id": "backend-t1-s24",
            "title": "`Optional`"
          },
          {
            "id": "backend-t1-s25",
            "title": "Date and time API"
          },
          {
            "id": "backend-t1-s26",
            "title": "File handling"
          },
          {
            "id": "backend-t1-s27",
            "title": "Multithreading basics"
          },
          {
            "id": "backend-t1-s28",
            "title": "`CompletableFuture`"
          },
          {
            "id": "backend-t1-s29",
            "title": "Virtual threads"
          },
          {
            "id": "backend-t1-s30",
            "title": "JVM memory basics"
          }
        ],
        "overview": "**Core Java** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Classes and objects, Encapsulation, Inheritance, Polymorphism, and 26 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t2",
        "number": 2,
        "title": "SQL and Database Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t2-s1",
            "title": "Relational database concepts"
          },
          {
            "id": "backend-t2-s2",
            "title": "Tables, rows and columns"
          },
          {
            "id": "backend-t2-s3",
            "title": "Primary keys"
          },
          {
            "id": "backend-t2-s4",
            "title": "Foreign keys"
          },
          {
            "id": "backend-t2-s5",
            "title": "Unique constraints"
          },
          {
            "id": "backend-t2-s6",
            "title": "Check constraints"
          },
          {
            "id": "backend-t2-s7",
            "title": "`SELECT`"
          },
          {
            "id": "backend-t2-s8",
            "title": "`INSERT`"
          },
          {
            "id": "backend-t2-s9",
            "title": "`UPDATE`"
          },
          {
            "id": "backend-t2-s10",
            "title": "`DELETE`"
          },
          {
            "id": "backend-t2-s11",
            "title": "Joins"
          },
          {
            "id": "backend-t2-s12",
            "title": "Subqueries"
          },
          {
            "id": "backend-t2-s13",
            "title": "Aggregate functions"
          },
          {
            "id": "backend-t2-s14",
            "title": "Grouping"
          },
          {
            "id": "backend-t2-s15",
            "title": "Indexes"
          },
          {
            "id": "backend-t2-s16",
            "title": "Normalization"
          },
          {
            "id": "backend-t2-s17",
            "title": "Transactions"
          },
          {
            "id": "backend-t2-s18",
            "title": "ACID properties"
          },
          {
            "id": "backend-t2-s19",
            "title": "Isolation levels"
          },
          {
            "id": "backend-t2-s20",
            "title": "Locking"
          },
          {
            "id": "backend-t2-s21",
            "title": "Deadlocks"
          },
          {
            "id": "backend-t2-s22",
            "title": "Query execution plans"
          },
          {
            "id": "backend-t2-s23",
            "title": "Pagination"
          },
          {
            "id": "backend-t2-s24",
            "title": "PostgreSQL or MySQL"
          }
        ],
        "overview": "**SQL and Database Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Relational database concepts, Tables, rows and columns, Primary keys, Foreign keys, and 20 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t3",
        "number": 3,
        "title": "Web Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t3-s1",
            "title": "Client-server architecture"
          },
          {
            "id": "backend-t3-s2",
            "title": "HTTP and HTTPS"
          },
          {
            "id": "backend-t3-s3",
            "title": "HTTP request and response"
          },
          {
            "id": "backend-t3-s4",
            "title": "HTTP methods"
          },
          {
            "id": "backend-t3-s5",
            "title": "Status codes"
          },
          {
            "id": "backend-t3-s6",
            "title": "Headers"
          },
          {
            "id": "backend-t3-s7",
            "title": "Request body"
          },
          {
            "id": "backend-t3-s8",
            "title": "Path variables"
          },
          {
            "id": "backend-t3-s9",
            "title": "Query parameters"
          },
          {
            "id": "backend-t3-s10",
            "title": "Cookies"
          },
          {
            "id": "backend-t3-s11",
            "title": "Sessions"
          },
          {
            "id": "backend-t3-s12",
            "title": "JSON"
          },
          {
            "id": "backend-t3-s13",
            "title": "REST"
          },
          {
            "id": "backend-t3-s14",
            "title": "CORS"
          },
          {
            "id": "backend-t3-s15",
            "title": "Same-origin policy"
          },
          {
            "id": "backend-t3-s16",
            "title": "Authentication"
          },
          {
            "id": "backend-t3-s17",
            "title": "Authorization"
          },
          {
            "id": "backend-t3-s18",
            "title": "Stateless versus stateful applications"
          }
        ],
        "overview": "**Web Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Client-server architecture, HTTP and HTTPS, HTTP request and response, HTTP methods, and 14 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t4",
        "number": 4,
        "title": "Development Tools",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t4-s1",
            "title": "IntelliJ IDEA"
          },
          {
            "id": "backend-t4-s2",
            "title": "Git"
          },
          {
            "id": "backend-t4-s3",
            "title": "GitHub"
          },
          {
            "id": "backend-t4-s4",
            "title": "Maven"
          },
          {
            "id": "backend-t4-s5",
            "title": "Gradle basics"
          },
          {
            "id": "backend-t4-s6",
            "title": "Postman"
          },
          {
            "id": "backend-t4-s7",
            "title": "`curl`"
          },
          {
            "id": "backend-t4-s8",
            "title": "Docker basics"
          },
          {
            "id": "backend-t4-s9",
            "title": "Database client"
          },
          {
            "id": "backend-t4-s10",
            "title": "Linux command line"
          }
        ],
        "overview": "**Development Tools** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: IntelliJ IDEA, Git, GitHub, Maven, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 2,
    "title": "Spring Framework Fundamentals",
    "icon": "⚙️",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "Spring Framework provides the underlying programming and configuration model for dependency injection, transactions, web applications, data access and messaging. Spring Boot builds on top of these capabilities. ([Home][2])",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t5",
        "number": 1,
        "title": "Understanding Spring",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t5-s1",
            "title": "What Spring Framework is"
          },
          {
            "id": "backend-t5-s2",
            "title": "Problems Spring solves"
          },
          {
            "id": "backend-t5-s3",
            "title": "Spring ecosystem overview"
          },
          {
            "id": "backend-t5-s4",
            "title": "Spring Framework versus Spring Boot"
          },
          {
            "id": "backend-t5-s5",
            "title": "Framework versus library"
          },
          {
            "id": "backend-t5-s6",
            "title": "Inversion of Control"
          },
          {
            "id": "backend-t5-s7",
            "title": "Dependency Injection"
          },
          {
            "id": "backend-t5-s8",
            "title": "Dependency Inversion Principle"
          },
          {
            "id": "backend-t5-s9",
            "title": "Convention over configuration"
          },
          {
            "id": "backend-t5-s10",
            "title": "Plain Old Java Objects"
          },
          {
            "id": "backend-t5-s11",
            "title": "Loose coupling"
          },
          {
            "id": "backend-t5-s12",
            "title": "Testable architecture"
          }
        ],
        "overview": "**Understanding Spring** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: What Spring Framework is, Problems Spring solves, Spring ecosystem overview, Spring Framework versus Spring Boot, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t6",
        "number": 2,
        "title": "Spring IoC Container",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t6-s1",
            "title": "`ApplicationContext`"
          },
          {
            "id": "backend-t6-s2",
            "title": "`BeanFactory`"
          },
          {
            "id": "backend-t6-s3",
            "title": "Spring beans"
          },
          {
            "id": "backend-t6-s4",
            "title": "Bean definitions"
          },
          {
            "id": "backend-t6-s5",
            "title": "Bean creation process"
          },
          {
            "id": "backend-t6-s6",
            "title": "Component scanning"
          },
          {
            "id": "backend-t6-s7",
            "title": "Dependency resolution"
          },
          {
            "id": "backend-t6-s8",
            "title": "Bean initialization"
          },
          {
            "id": "backend-t6-s9",
            "title": "Bean destruction"
          },
          {
            "id": "backend-t6-s10",
            "title": "Container startup lifecycle"
          }
        ],
        "overview": "**Spring IoC Container** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `ApplicationContext`, `BeanFactory`, Spring beans, Bean definitions, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t7",
        "number": 3,
        "title": "Dependency Injection",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t7-s1",
            "title": "Constructor injection"
          },
          {
            "id": "backend-t7-s2",
            "title": "Setter injection"
          },
          {
            "id": "backend-t7-s3",
            "title": "Field injection"
          },
          {
            "id": "backend-t7-s4",
            "title": "Why constructor injection is preferred"
          },
          {
            "id": "backend-t7-s5",
            "title": "Required dependencies"
          },
          {
            "id": "backend-t7-s6",
            "title": "Optional dependencies"
          },
          {
            "id": "backend-t7-s7",
            "title": "Circular dependencies"
          },
          {
            "id": "backend-t7-s8",
            "title": "Dependency ambiguity"
          },
          {
            "id": "backend-t7-s9",
            "title": "Multiple implementations"
          },
          {
            "id": "backend-t7-s10",
            "title": "Dependency injection into collections"
          },
          {
            "id": "backend-t7-s11",
            "title": "`@Component`"
          },
          {
            "id": "backend-t7-s12",
            "title": "`@Service`"
          },
          {
            "id": "backend-t7-s13",
            "title": "`@Repository`"
          },
          {
            "id": "backend-t7-s14",
            "title": "`@Controller`"
          },
          {
            "id": "backend-t7-s15",
            "title": "`@RestController`"
          },
          {
            "id": "backend-t7-s16",
            "title": "`@Autowired`"
          },
          {
            "id": "backend-t7-s17",
            "title": "`@Qualifier`"
          },
          {
            "id": "backend-t7-s18",
            "title": "`@Primary`"
          },
          {
            "id": "backend-t7-s19",
            "title": "`@Value`"
          }
        ],
        "overview": "**Dependency Injection** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Constructor injection, Setter injection, Field injection, Why constructor injection is preferred, and 15 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Important annotations",
            "items": [
              "`@Component`",
              "`@Service`",
              "`@Repository`",
              "`@Controller`",
              "`@RestController`",
              "`@Autowired`",
              "`@Qualifier`",
              "`@Primary`",
              "`@Value`"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t8",
        "number": 4,
        "title": "Spring Configuration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t8-s1",
            "title": "Java-based configuration"
          },
          {
            "id": "backend-t8-s2",
            "title": "Annotation-based configuration"
          },
          {
            "id": "backend-t8-s3",
            "title": "XML configuration concepts"
          },
          {
            "id": "backend-t8-s4",
            "title": "`@Configuration`"
          },
          {
            "id": "backend-t8-s5",
            "title": "`@Bean`"
          },
          {
            "id": "backend-t8-s6",
            "title": "`@ComponentScan`"
          },
          {
            "id": "backend-t8-s7",
            "title": "`@Import`"
          },
          {
            "id": "backend-t8-s8",
            "title": "`@PropertySource`"
          },
          {
            "id": "backend-t8-s9",
            "title": "Configuration composition"
          },
          {
            "id": "backend-t8-s10",
            "title": "Full and lite configuration modes"
          },
          {
            "id": "backend-t8-s11",
            "title": "Conditional bean registration"
          }
        ],
        "overview": "**Spring Configuration** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Java-based configuration, Annotation-based configuration, XML configuration concepts, `@Configuration`, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t9",
        "number": 5,
        "title": "Bean Scope and Lifecycle",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t9-s1",
            "title": "Singleton scope"
          },
          {
            "id": "backend-t9-s2",
            "title": "Prototype scope"
          },
          {
            "id": "backend-t9-s3",
            "title": "Request scope"
          },
          {
            "id": "backend-t9-s4",
            "title": "Session scope"
          },
          {
            "id": "backend-t9-s5",
            "title": "Application scope"
          },
          {
            "id": "backend-t9-s6",
            "title": "WebSocket scope"
          },
          {
            "id": "backend-t9-s7",
            "title": "Lazy initialization"
          },
          {
            "id": "backend-t9-s8",
            "title": "`@Lazy`"
          },
          {
            "id": "backend-t9-s9",
            "title": "`@Scope`"
          },
          {
            "id": "backend-t9-s10",
            "title": "`@PostConstruct`"
          },
          {
            "id": "backend-t9-s11",
            "title": "`@PreDestroy`"
          },
          {
            "id": "backend-t9-s12",
            "title": "`InitializingBean`"
          },
          {
            "id": "backend-t9-s13",
            "title": "`DisposableBean`"
          },
          {
            "id": "backend-t9-s14",
            "title": "Bean post-processors"
          },
          {
            "id": "backend-t9-s15",
            "title": "Factory beans"
          }
        ],
        "overview": "**Bean Scope and Lifecycle** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Singleton scope, Prototype scope, Request scope, Session scope, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t10",
        "number": 6,
        "title": "Spring Environment and Profiles",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t10-s1",
            "title": "`Environment`"
          },
          {
            "id": "backend-t10-s2",
            "title": "Property sources"
          },
          {
            "id": "backend-t10-s3",
            "title": "Profile-based configuration"
          },
          {
            "id": "backend-t10-s4",
            "title": "`@Profile`"
          },
          {
            "id": "backend-t10-s5",
            "title": "Development profile"
          },
          {
            "id": "backend-t10-s6",
            "title": "Test profile"
          },
          {
            "id": "backend-t10-s7",
            "title": "Staging profile"
          },
          {
            "id": "backend-t10-s8",
            "title": "Production profile"
          },
          {
            "id": "backend-t10-s9",
            "title": "Environment variables"
          },
          {
            "id": "backend-t10-s10",
            "title": "External configuration"
          },
          {
            "id": "backend-t10-s11",
            "title": "Secret-handling principles"
          }
        ],
        "overview": "**Spring Environment and Profiles** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `Environment`, Property sources, Profile-based configuration, `@Profile`, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t11",
        "number": 7,
        "title": "Spring Expression Language",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t11-s1",
            "title": "SpEL syntax"
          },
          {
            "id": "backend-t11-s2",
            "title": "Accessing properties"
          },
          {
            "id": "backend-t11-s3",
            "title": "Calling methods"
          },
          {
            "id": "backend-t11-s4",
            "title": "Collection filtering"
          },
          {
            "id": "backend-t11-s5",
            "title": "Conditional expressions"
          },
          {
            "id": "backend-t11-s6",
            "title": "SpEL in annotations"
          },
          {
            "id": "backend-t11-s7",
            "title": "Security risks of untrusted expressions"
          }
        ],
        "overview": "**Spring Expression Language** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: SpEL syntax, Accessing properties, Calling methods, Collection filtering, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t12",
        "number": 8,
        "title": "Aspect-Oriented Programming",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t12-s1",
            "title": "Cross-cutting concerns"
          },
          {
            "id": "backend-t12-s2",
            "title": "Aspect"
          },
          {
            "id": "backend-t12-s3",
            "title": "Advice"
          },
          {
            "id": "backend-t12-s4",
            "title": "Join point"
          },
          {
            "id": "backend-t12-s5",
            "title": "Pointcut"
          },
          {
            "id": "backend-t12-s6",
            "title": "Proxy"
          },
          {
            "id": "backend-t12-s7",
            "title": "JDK dynamic proxy"
          },
          {
            "id": "backend-t12-s8",
            "title": "CGLIB proxy"
          },
          {
            "id": "backend-t12-s9",
            "title": "Self-invocation problem"
          },
          {
            "id": "backend-t12-s10",
            "title": "Proxy limitations"
          },
          {
            "id": "backend-t12-s11",
            "title": "`@Aspect`"
          },
          {
            "id": "backend-t12-s12",
            "title": "`@Before`"
          },
          {
            "id": "backend-t12-s13",
            "title": "`@After`"
          },
          {
            "id": "backend-t12-s14",
            "title": "`@AfterReturning`"
          },
          {
            "id": "backend-t12-s15",
            "title": "`@AfterThrowing`"
          },
          {
            "id": "backend-t12-s16",
            "title": "`@Around`"
          }
        ],
        "overview": "**Aspect-Oriented Programming** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Cross-cutting concerns, Aspect, Advice, Join point, and 12 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Logging",
          "Auditing",
          "Authorization",
          "Performance measurement",
          "Transaction management",
          "Retry handling"
        ],
        "subSections": [
          {
            "title": "Advice annotations",
            "items": [
              "`@Aspect`",
              "`@Before`",
              "`@After`",
              "`@AfterReturning`",
              "`@AfterThrowing`",
              "`@Around`"
            ]
          },
          {
            "title": "Common AOP use cases",
            "items": [
              "Logging",
              "Auditing",
              "Authorization",
              "Performance measurement",
              "Transaction management",
              "Retry handling"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 3,
    "title": "Spring Boot Fundamentals",
    "icon": "⚙️",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "Spring Boot is designed for standalone, production-grade Spring applications. It provides starter dependencies, embedded servers, auto-configuration, externalized configuration and production monitoring capabilities. ([Home][3])",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t13",
        "number": 1,
        "title": "Starting a Spring Boot Application",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t13-s1",
            "title": "Spring Initializr"
          },
          {
            "id": "backend-t13-s2",
            "title": "Project metadata"
          },
          {
            "id": "backend-t13-s3",
            "title": "Group ID"
          },
          {
            "id": "backend-t13-s4",
            "title": "Artifact ID"
          },
          {
            "id": "backend-t13-s5",
            "title": "Package structure"
          },
          {
            "id": "backend-t13-s6",
            "title": "Choosing dependencies"
          },
          {
            "id": "backend-t13-s7",
            "title": "Maven project structure"
          },
          {
            "id": "backend-t13-s8",
            "title": "Gradle project structure"
          },
          {
            "id": "backend-t13-s9",
            "title": "Main application class"
          },
          {
            "id": "backend-t13-s10",
            "title": "`@SpringBootApplication`"
          },
          {
            "id": "backend-t13-s11",
            "title": "Running from IDE"
          },
          {
            "id": "backend-t13-s12",
            "title": "Running with Maven"
          },
          {
            "id": "backend-t13-s13",
            "title": "Running with Gradle"
          },
          {
            "id": "backend-t13-s14",
            "title": "Running an executable JAR"
          }
        ],
        "overview": "**Starting a Spring Boot Application** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Spring Initializr, Project metadata, Group ID, Artifact ID, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t14",
        "number": 2,
        "title": "Understanding `@SpringBootApplication`",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t14-s1",
            "title": "Spring configuration"
          },
          {
            "id": "backend-t14-s2",
            "title": "Component scanning"
          },
          {
            "id": "backend-t14-s3",
            "title": "Auto-configuration"
          },
          {
            "id": "backend-t14-s4",
            "title": "`@SpringBootConfiguration`"
          },
          {
            "id": "backend-t14-s5",
            "title": "`@EnableAutoConfiguration`"
          },
          {
            "id": "backend-t14-s6",
            "title": "`@ComponentScan`"
          },
          {
            "id": "backend-t14-s7",
            "title": "Excluding auto-configuration"
          },
          {
            "id": "backend-t14-s8",
            "title": "Auto-configuration conditions"
          },
          {
            "id": "backend-t14-s9",
            "title": "Auto-configuration reports"
          }
        ],
        "overview": "Understand that it combines concepts related to:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t15",
        "number": 3,
        "title": "Starter Dependencies",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t15-s1",
            "title": "What a starter is"
          },
          {
            "id": "backend-t15-s2",
            "title": "Dependency management"
          },
          {
            "id": "backend-t15-s3",
            "title": "Spring Boot BOM"
          },
          {
            "id": "backend-t15-s4",
            "title": "Transitive dependencies"
          },
          {
            "id": "backend-t15-s5",
            "title": "Version alignment"
          },
          {
            "id": "backend-t15-s6",
            "title": "Excluding dependencies"
          },
          {
            "id": "backend-t15-s7",
            "title": "Replacing default dependencies"
          },
          {
            "id": "backend-t15-s8",
            "title": "Spring Web MVC"
          },
          {
            "id": "backend-t15-s9",
            "title": "Spring Data JPA"
          },
          {
            "id": "backend-t15-s10",
            "title": "Spring Validation"
          },
          {
            "id": "backend-t15-s11",
            "title": "Spring Security"
          },
          {
            "id": "backend-t15-s12",
            "title": "Spring Actuator"
          },
          {
            "id": "backend-t15-s13",
            "title": "Spring Test"
          },
          {
            "id": "backend-t15-s14",
            "title": "Spring WebFlux"
          },
          {
            "id": "backend-t15-s15",
            "title": "Spring Cache"
          },
          {
            "id": "backend-t15-s16",
            "title": "Spring Batch"
          },
          {
            "id": "backend-t15-s17",
            "title": "OAuth2 Resource Server"
          },
          {
            "id": "backend-t15-s18",
            "title": "OAuth2 Client"
          }
        ],
        "overview": "**Starter Dependencies** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: What a starter is, Dependency management, Spring Boot BOM, Transitive dependencies, and 14 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t16",
        "number": 4,
        "title": "Embedded Web Servers",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t16-s1",
            "title": "Embedded server concept"
          },
          {
            "id": "backend-t16-s2",
            "title": "Tomcat"
          },
          {
            "id": "backend-t16-s3",
            "title": "Jetty"
          },
          {
            "id": "backend-t16-s4",
            "title": "Server port"
          },
          {
            "id": "backend-t16-s5",
            "title": "Context path"
          },
          {
            "id": "backend-t16-s6",
            "title": "Thread configuration"
          },
          {
            "id": "backend-t16-s7",
            "title": "Compression"
          },
          {
            "id": "backend-t16-s8",
            "title": "Access logs"
          },
          {
            "id": "backend-t16-s9",
            "title": "HTTPS configuration"
          },
          {
            "id": "backend-t16-s10",
            "title": "Graceful shutdown"
          }
        ],
        "overview": "**Embedded Web Servers** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Embedded server concept, Tomcat, Jetty, Server port, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t17",
        "number": 5,
        "title": "Application Configuration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t17-s1",
            "title": "`application.properties`"
          },
          {
            "id": "backend-t17-s2",
            "title": "`application.yml`"
          },
          {
            "id": "backend-t17-s3",
            "title": "YAML syntax"
          },
          {
            "id": "backend-t17-s4",
            "title": "Configuration precedence"
          },
          {
            "id": "backend-t17-s5",
            "title": "Environment variables"
          },
          {
            "id": "backend-t17-s6",
            "title": "Command-line properties"
          },
          {
            "id": "backend-t17-s7",
            "title": "Profile-specific files"
          },
          {
            "id": "backend-t17-s8",
            "title": "Configuration trees"
          },
          {
            "id": "backend-t17-s9",
            "title": "Default values"
          },
          {
            "id": "backend-t17-s10",
            "title": "Placeholder resolution"
          }
        ],
        "overview": "**Application Configuration** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `application.properties`, `application.yml`, YAML syntax, Configuration precedence, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t18",
        "number": 6,
        "title": "Type-Safe Configuration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t18-s1",
            "title": "`@ConfigurationProperties`"
          },
          {
            "id": "backend-t18-s2",
            "title": "Configuration records"
          },
          {
            "id": "backend-t18-s3",
            "title": "Nested configuration"
          },
          {
            "id": "backend-t18-s4",
            "title": "Configuration validation"
          },
          {
            "id": "backend-t18-s5",
            "title": "Metadata generation"
          },
          {
            "id": "backend-t18-s6",
            "title": "`@EnableConfigurationProperties`"
          },
          {
            "id": "backend-t18-s7",
            "title": "Constructor binding"
          },
          {
            "id": "backend-t18-s8",
            "title": "Avoiding excessive `@Value`"
          }
        ],
        "overview": "**Type-Safe Configuration** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `@ConfigurationProperties`, Configuration records, Nested configuration, Configuration validation, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t19",
        "number": 7,
        "title": "Application Startup",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t19-s1",
            "title": "`CommandLineRunner`"
          },
          {
            "id": "backend-t19-s2",
            "title": "`ApplicationRunner`"
          },
          {
            "id": "backend-t19-s3",
            "title": "Application events"
          },
          {
            "id": "backend-t19-s4",
            "title": "Startup listeners"
          },
          {
            "id": "backend-t19-s5",
            "title": "Startup failure analysis"
          },
          {
            "id": "backend-t19-s6",
            "title": "Initialization order"
          },
          {
            "id": "backend-t19-s7",
            "title": "Startup performance"
          },
          {
            "id": "backend-t19-s8",
            "title": "Lazy initialization"
          }
        ],
        "overview": "**Application Startup** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: `CommandLineRunner`, `ApplicationRunner`, Application events, Startup listeners, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t20",
        "number": 8,
        "title": "Logging",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t20-s1",
            "title": "SLF4J"
          },
          {
            "id": "backend-t20-s2",
            "title": "Logback"
          },
          {
            "id": "backend-t20-s3",
            "title": "Logger creation"
          },
          {
            "id": "backend-t20-s4",
            "title": "Log levels"
          },
          {
            "id": "backend-t20-s5",
            "title": "Parameterized logging"
          },
          {
            "id": "backend-t20-s6",
            "title": "Structured logging"
          },
          {
            "id": "backend-t20-s7",
            "title": "JSON logs"
          },
          {
            "id": "backend-t20-s8",
            "title": "Correlation IDs"
          },
          {
            "id": "backend-t20-s9",
            "title": "Request IDs"
          },
          {
            "id": "backend-t20-s10",
            "title": "Log rotation"
          },
          {
            "id": "backend-t20-s11",
            "title": "Profile-specific logging"
          },
          {
            "id": "backend-t20-s12",
            "title": "Sensitive-data masking"
          },
          {
            "id": "backend-t20-s13",
            "title": "Why passwords and tokens must never be logged"
          }
        ],
        "overview": "**Logging** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: SLF4J, Logback, Logger creation, Log levels, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 4,
    "title": "Spring MVC and REST API Development",
    "icon": "⚙️",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t21",
        "number": 1,
        "title": "Spring MVC Architecture",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t21-s1",
            "title": "Front Controller pattern"
          },
          {
            "id": "backend-t21-s2",
            "title": "`DispatcherServlet`"
          },
          {
            "id": "backend-t21-s3",
            "title": "Handler mapping"
          },
          {
            "id": "backend-t21-s4",
            "title": "Handler adapter"
          },
          {
            "id": "backend-t21-s5",
            "title": "Controller"
          },
          {
            "id": "backend-t21-s6",
            "title": "Argument resolver"
          },
          {
            "id": "backend-t21-s7",
            "title": "Return-value handler"
          },
          {
            "id": "backend-t21-s8",
            "title": "Message converter"
          },
          {
            "id": "backend-t21-s9",
            "title": "Exception resolver"
          },
          {
            "id": "backend-t21-s10",
            "title": "View resolver"
          },
          {
            "id": "backend-t21-s11",
            "title": "Servlet filter"
          },
          {
            "id": "backend-t21-s12",
            "title": "Spring interceptor"
          }
        ],
        "overview": "**Spring MVC Architecture** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Front Controller pattern, `DispatcherServlet`, Handler mapping, Handler adapter, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t22",
        "number": 2,
        "title": "Building REST Controllers",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t22-s1",
            "title": "`@RestController`"
          },
          {
            "id": "backend-t22-s2",
            "title": "`@Controller`"
          },
          {
            "id": "backend-t22-s3",
            "title": "`@RequestMapping`"
          },
          {
            "id": "backend-t22-s4",
            "title": "`@GetMapping`"
          },
          {
            "id": "backend-t22-s5",
            "title": "`@PostMapping`"
          },
          {
            "id": "backend-t22-s6",
            "title": "`@PutMapping`"
          },
          {
            "id": "backend-t22-s7",
            "title": "`@PatchMapping`"
          },
          {
            "id": "backend-t22-s8",
            "title": "`@DeleteMapping`"
          }
        ],
        "overview": "**Building REST Controllers** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `@RestController`, `@Controller`, `@RequestMapping`, `@GetMapping`, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t23",
        "number": 3,
        "title": "Request Handling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t23-s1",
            "title": "`@PathVariable`"
          },
          {
            "id": "backend-t23-s2",
            "title": "`@RequestParam`"
          },
          {
            "id": "backend-t23-s3",
            "title": "`@RequestHeader`"
          },
          {
            "id": "backend-t23-s4",
            "title": "`@RequestBody`"
          },
          {
            "id": "backend-t23-s5",
            "title": "`@CookieValue`"
          },
          {
            "id": "backend-t23-s6",
            "title": "`@RequestPart`"
          },
          {
            "id": "backend-t23-s7",
            "title": "`HttpServletRequest`"
          },
          {
            "id": "backend-t23-s8",
            "title": "`HttpServletResponse`"
          },
          {
            "id": "backend-t23-s9",
            "title": "Multipart requests"
          },
          {
            "id": "backend-t23-s10",
            "title": "Form data"
          },
          {
            "id": "backend-t23-s11",
            "title": "JSON requests"
          }
        ],
        "overview": "**Request Handling** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `@PathVariable`, `@RequestParam`, `@RequestHeader`, `@RequestBody`, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t24",
        "number": 4,
        "title": "Response Handling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t24-s1",
            "title": "Returning POJOs"
          },
          {
            "id": "backend-t24-s2",
            "title": "JSON serialization"
          },
          {
            "id": "backend-t24-s3",
            "title": "`ResponseEntity`"
          },
          {
            "id": "backend-t24-s4",
            "title": "HTTP headers"
          },
          {
            "id": "backend-t24-s5",
            "title": "Status codes"
          },
          {
            "id": "backend-t24-s6",
            "title": "Empty responses"
          },
          {
            "id": "backend-t24-s7",
            "title": "File downloads"
          },
          {
            "id": "backend-t24-s8",
            "title": "Streaming responses"
          },
          {
            "id": "backend-t24-s9",
            "title": "Content negotiation"
          },
          {
            "id": "backend-t24-s10",
            "title": "Media types"
          }
        ],
        "overview": "**Response Handling** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Returning POJOs, JSON serialization, `ResponseEntity`, HTTP headers, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t25",
        "number": 5,
        "title": "Jackson JSON Processing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t25-s1",
            "title": "Serialization"
          },
          {
            "id": "backend-t25-s2",
            "title": "Deserialization"
          },
          {
            "id": "backend-t25-s3",
            "title": "Object mapper"
          },
          {
            "id": "backend-t25-s4",
            "title": "Property naming"
          },
          {
            "id": "backend-t25-s5",
            "title": "Date formatting"
          },
          {
            "id": "backend-t25-s6",
            "title": "Ignoring fields"
          },
          {
            "id": "backend-t25-s7",
            "title": "Custom serializers"
          },
          {
            "id": "backend-t25-s8",
            "title": "Custom deserializers"
          },
          {
            "id": "backend-t25-s9",
            "title": "Unknown-property handling"
          },
          {
            "id": "backend-t25-s10",
            "title": "JSON views"
          },
          {
            "id": "backend-t25-s11",
            "title": "Circular-reference problems"
          },
          {
            "id": "backend-t25-s12",
            "title": "Avoiding direct entity serialization"
          },
          {
            "id": "backend-t25-s13",
            "title": "`@JsonProperty`"
          },
          {
            "id": "backend-t25-s14",
            "title": "`@JsonIgnore`"
          },
          {
            "id": "backend-t25-s15",
            "title": "`@JsonFormat`"
          },
          {
            "id": "backend-t25-s16",
            "title": "`@JsonInclude`"
          },
          {
            "id": "backend-t25-s17",
            "title": "`@JsonCreator`"
          },
          {
            "id": "backend-t25-s18",
            "title": "`@JsonValue`"
          }
        ],
        "overview": "**Jackson JSON Processing** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Serialization, Deserialization, Object mapper, Property naming, and 14 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t26",
        "number": 6,
        "title": "DTO Design",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t26-s1",
            "title": "Request DTO"
          },
          {
            "id": "backend-t26-s2",
            "title": "Response DTO"
          },
          {
            "id": "backend-t26-s3",
            "title": "Create DTO"
          },
          {
            "id": "backend-t26-s4",
            "title": "Update DTO"
          },
          {
            "id": "backend-t26-s5",
            "title": "Patch DTO"
          },
          {
            "id": "backend-t26-s6",
            "title": "Search criteria DTO"
          },
          {
            "id": "backend-t26-s7",
            "title": "Mapping entities to DTOs"
          },
          {
            "id": "backend-t26-s8",
            "title": "Manual mapping"
          },
          {
            "id": "backend-t26-s9",
            "title": "MapStruct"
          },
          {
            "id": "backend-t26-s10",
            "title": "Preventing mass-assignment vulnerabilities"
          },
          {
            "id": "backend-t26-s11",
            "title": "Avoiding exposing database entities"
          }
        ],
        "overview": "**DTO Design** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Request DTO, Response DTO, Create DTO, Update DTO, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t27",
        "number": 7,
        "title": "REST API Design",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t27-s1",
            "title": "Resource-oriented URLs"
          },
          {
            "id": "backend-t27-s2",
            "title": "HTTP-method semantics"
          },
          {
            "id": "backend-t27-s3",
            "title": "Idempotency"
          },
          {
            "id": "backend-t27-s4",
            "title": "Safe methods"
          },
          {
            "id": "backend-t27-s5",
            "title": "Correct status codes"
          },
          {
            "id": "backend-t27-s6",
            "title": "Standard response bodies"
          },
          {
            "id": "backend-t27-s7",
            "title": "Error response contracts"
          },
          {
            "id": "backend-t27-s8",
            "title": "Pagination"
          },
          {
            "id": "backend-t27-s9",
            "title": "Sorting"
          },
          {
            "id": "backend-t27-s10",
            "title": "Filtering"
          },
          {
            "id": "backend-t27-s11",
            "title": "Searching"
          },
          {
            "id": "backend-t27-s12",
            "title": "Field selection"
          },
          {
            "id": "backend-t27-s13",
            "title": "API versioning"
          },
          {
            "id": "backend-t27-s14",
            "title": "Idempotency keys"
          },
          {
            "id": "backend-t27-s15",
            "title": "Optimistic concurrency"
          },
          {
            "id": "backend-t27-s16",
            "title": "ETags"
          },
          {
            "id": "backend-t27-s17",
            "title": "Conditional requests"
          },
          {
            "id": "backend-t27-s18",
            "title": "Rate limiting"
          },
          {
            "id": "backend-t27-s19",
            "title": "API deprecation strategy"
          }
        ],
        "overview": "**REST API Design** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Resource-oriented URLs, HTTP-method semantics, Idempotency, Safe methods, and 15 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t28",
        "number": 8,
        "title": "Pagination and Sorting",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t28-s1",
            "title": "`Pageable`"
          },
          {
            "id": "backend-t28-s2",
            "title": "`Page`"
          },
          {
            "id": "backend-t28-s3",
            "title": "`Slice`"
          },
          {
            "id": "backend-t28-s4",
            "title": "`Sort`"
          },
          {
            "id": "backend-t28-s5",
            "title": "Page-number pagination"
          },
          {
            "id": "backend-t28-s6",
            "title": "Offset pagination"
          },
          {
            "id": "backend-t28-s7",
            "title": "Cursor pagination"
          },
          {
            "id": "backend-t28-s8",
            "title": "Stable sorting"
          },
          {
            "id": "backend-t28-s9",
            "title": "Large-table pagination problems"
          }
        ],
        "overview": "**Pagination and Sorting** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `Pageable`, `Page`, `Slice`, `Sort`, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t29",
        "number": 9,
        "title": "File Handling",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t29-s1",
            "title": "Multipart upload"
          },
          {
            "id": "backend-t29-s2",
            "title": "Upload validation"
          },
          {
            "id": "backend-t29-s3",
            "title": "File-size limits"
          },
          {
            "id": "backend-t29-s4",
            "title": "MIME-type validation"
          },
          {
            "id": "backend-t29-s5",
            "title": "File-name sanitization"
          },
          {
            "id": "backend-t29-s6",
            "title": "Local file storage"
          },
          {
            "id": "backend-t29-s7",
            "title": "Object storage"
          },
          {
            "id": "backend-t29-s8",
            "title": "Streaming download"
          },
          {
            "id": "backend-t29-s9",
            "title": "Pre-signed URLs"
          },
          {
            "id": "backend-t29-s10",
            "title": "Malware-scanning architecture"
          }
        ],
        "overview": "**File Handling** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Multipart upload, Upload validation, File-size limits, MIME-type validation, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t30",
        "number": 10,
        "title": "Filters and Interceptors",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t30-s1",
            "title": "Servlet filters"
          },
          {
            "id": "backend-t30-s2",
            "title": "`OncePerRequestFilter`"
          },
          {
            "id": "backend-t30-s3",
            "title": "Handler interceptors"
          },
          {
            "id": "backend-t30-s4",
            "title": "Request logging"
          },
          {
            "id": "backend-t30-s5",
            "title": "Correlation IDs"
          },
          {
            "id": "backend-t30-s6",
            "title": "Tenant resolution"
          },
          {
            "id": "backend-t30-s7",
            "title": "Locale resolution"
          },
          {
            "id": "backend-t30-s8",
            "title": "Authentication filters"
          },
          {
            "id": "backend-t30-s9",
            "title": "Filter ordering"
          },
          {
            "id": "backend-t30-s10",
            "title": "Interceptor ordering"
          },
          {
            "id": "backend-t30-s11",
            "title": "Filter versus interceptor versus AOP"
          }
        ],
        "overview": "**Filters and Interceptors** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Servlet filters, `OncePerRequestFilter`, Handler interceptors, Request logging, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 5,
    "title": "Validation and Error Handling",
    "icon": "⚙️",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t31",
        "number": 1,
        "title": "Bean Validation",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t31-s1",
            "title": "Jakarta Validation"
          },
          {
            "id": "backend-t31-s2",
            "title": "Validating request bodies"
          },
          {
            "id": "backend-t31-s3",
            "title": "Validating parameters"
          },
          {
            "id": "backend-t31-s4",
            "title": "Validating configuration"
          },
          {
            "id": "backend-t31-s5",
            "title": "Nested validation"
          },
          {
            "id": "backend-t31-s6",
            "title": "Validation groups"
          },
          {
            "id": "backend-t31-s7",
            "title": "Custom validators"
          },
          {
            "id": "backend-t31-s8",
            "title": "Cross-field validation"
          },
          {
            "id": "backend-t31-s9",
            "title": "Method validation"
          },
          {
            "id": "backend-t31-s10",
            "title": "`@Valid`"
          },
          {
            "id": "backend-t31-s11",
            "title": "`@Validated`"
          },
          {
            "id": "backend-t31-s12",
            "title": "`@NotNull`"
          },
          {
            "id": "backend-t31-s13",
            "title": "`@NotBlank`"
          },
          {
            "id": "backend-t31-s14",
            "title": "`@NotEmpty`"
          },
          {
            "id": "backend-t31-s15",
            "title": "`@Size`"
          },
          {
            "id": "backend-t31-s16",
            "title": "`@Min`"
          },
          {
            "id": "backend-t31-s17",
            "title": "`@Max`"
          },
          {
            "id": "backend-t31-s18",
            "title": "`@Positive`"
          },
          {
            "id": "backend-t31-s19",
            "title": "`@Negative`"
          },
          {
            "id": "backend-t31-s20",
            "title": "`@Email`"
          },
          {
            "id": "backend-t31-s21",
            "title": "`@Pattern`"
          },
          {
            "id": "backend-t31-s22",
            "title": "`@Past`"
          },
          {
            "id": "backend-t31-s23",
            "title": "`@Future`"
          }
        ],
        "overview": "**Bean Validation** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Jakarta Validation, Validating request bodies, Validating parameters, Validating configuration, and 19 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t32",
        "number": 2,
        "title": "Exception Handling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t32-s1",
            "title": "Domain exceptions"
          },
          {
            "id": "backend-t32-s2",
            "title": "Validation exceptions"
          },
          {
            "id": "backend-t32-s3",
            "title": "Infrastructure exceptions"
          },
          {
            "id": "backend-t32-s4",
            "title": "Database exceptions"
          },
          {
            "id": "backend-t32-s5",
            "title": "Authentication exceptions"
          },
          {
            "id": "backend-t32-s6",
            "title": "Authorization exceptions"
          },
          {
            "id": "backend-t32-s7",
            "title": "Error-code design"
          },
          {
            "id": "backend-t32-s8",
            "title": "Error-message design"
          },
          {
            "id": "backend-t32-s9",
            "title": "Avoiding stack-trace exposure"
          },
          {
            "id": "backend-t32-s10",
            "title": "`@ExceptionHandler`"
          },
          {
            "id": "backend-t32-s11",
            "title": "`@ControllerAdvice`"
          },
          {
            "id": "backend-t32-s12",
            "title": "`@RestControllerAdvice`"
          },
          {
            "id": "backend-t32-s13",
            "title": "`ResponseStatusException`"
          },
          {
            "id": "backend-t32-s14",
            "title": "Problem Details"
          },
          {
            "id": "backend-t32-s15",
            "title": "Standardized API errors"
          },
          {
            "id": "backend-t32-s16",
            "title": "Global exception handling"
          },
          {
            "id": "backend-t32-s17",
            "title": "Internationalized validation messages"
          }
        ],
        "overview": "**Exception Handling** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Domain exceptions, Validation exceptions, Infrastructure exceptions, Database exceptions, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 6,
    "title": "Spring Data, JPA and Hibernate",
    "icon": "⚙️",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "Spring Data provides a consistent programming model across relational and non-relational data stores. ([Home][4])",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t33",
        "number": 1,
        "title": "Persistence Foundations",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t33-s1",
            "title": "JDBC"
          },
          {
            "id": "backend-t33-s2",
            "title": "JPA specification"
          },
          {
            "id": "backend-t33-s3",
            "title": "Hibernate implementation"
          },
          {
            "id": "backend-t33-s4",
            "title": "Spring Data"
          },
          {
            "id": "backend-t33-s5",
            "title": "Spring Data JPA"
          },
          {
            "id": "backend-t33-s6",
            "title": "Repository pattern"
          },
          {
            "id": "backend-t33-s7",
            "title": "DAO pattern"
          },
          {
            "id": "backend-t33-s8",
            "title": "Persistence context"
          },
          {
            "id": "backend-t33-s9",
            "title": "Entity manager"
          }
        ],
        "overview": "**Persistence Foundations** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: JDBC, JPA specification, Hibernate implementation, Spring Data, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t34",
        "number": 2,
        "title": "Entity Mapping",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t34-s1",
            "title": "`@Entity`"
          },
          {
            "id": "backend-t34-s2",
            "title": "`@Table`"
          },
          {
            "id": "backend-t34-s3",
            "title": "`@Id`"
          },
          {
            "id": "backend-t34-s4",
            "title": "`@GeneratedValue`"
          },
          {
            "id": "backend-t34-s5",
            "title": "`@Column`"
          },
          {
            "id": "backend-t34-s6",
            "title": "`@Transient`"
          },
          {
            "id": "backend-t34-s7",
            "title": "`@Enumerated`"
          },
          {
            "id": "backend-t34-s8",
            "title": "`@Lob`"
          },
          {
            "id": "backend-t34-s9",
            "title": "`@Embeddable`"
          },
          {
            "id": "backend-t34-s10",
            "title": "`@Embedded`"
          },
          {
            "id": "backend-t34-s11",
            "title": "Composite keys"
          },
          {
            "id": "backend-t34-s12",
            "title": "UUID identifiers"
          },
          {
            "id": "backend-t34-s13",
            "title": "Database-generated identifiers"
          }
        ],
        "overview": "**Entity Mapping** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `@Entity`, `@Table`, `@Id`, `@GeneratedValue`, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t35",
        "number": 3,
        "title": "Entity Relationships",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t35-s1",
            "title": "One-to-one"
          },
          {
            "id": "backend-t35-s2",
            "title": "One-to-many"
          },
          {
            "id": "backend-t35-s3",
            "title": "Many-to-one"
          },
          {
            "id": "backend-t35-s4",
            "title": "Many-to-many"
          },
          {
            "id": "backend-t35-s5",
            "title": "Owning side"
          },
          {
            "id": "backend-t35-s6",
            "title": "Inverse side"
          },
          {
            "id": "backend-t35-s7",
            "title": "`mappedBy`"
          },
          {
            "id": "backend-t35-s8",
            "title": "Join columns"
          },
          {
            "id": "backend-t35-s9",
            "title": "Join tables"
          },
          {
            "id": "backend-t35-s10",
            "title": "Bidirectional associations"
          },
          {
            "id": "backend-t35-s11",
            "title": "Unidirectional associations"
          },
          {
            "id": "backend-t35-s12",
            "title": "Relationship helper methods"
          }
        ],
        "overview": "**Entity Relationships** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: One-to-one, One-to-many, Many-to-one, Many-to-many, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t36",
        "number": 4,
        "title": "Fetching and Cascading",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t36-s1",
            "title": "Lazy loading"
          },
          {
            "id": "backend-t36-s2",
            "title": "Eager loading"
          },
          {
            "id": "backend-t36-s3",
            "title": "Cascade types"
          },
          {
            "id": "backend-t36-s4",
            "title": "Orphan removal"
          },
          {
            "id": "backend-t36-s5",
            "title": "Entity graphs"
          },
          {
            "id": "backend-t36-s6",
            "title": "Fetch joins"
          },
          {
            "id": "backend-t36-s7",
            "title": "N+1 query problem"
          },
          {
            "id": "backend-t36-s8",
            "title": "Multiple-bag fetch problems"
          },
          {
            "id": "backend-t36-s9",
            "title": "Lazy initialization exception"
          },
          {
            "id": "backend-t36-s10",
            "title": "Open Session in View"
          },
          {
            "id": "backend-t36-s11",
            "title": "Why disabling OSIV is often appropriate for APIs"
          }
        ],
        "overview": "**Fetching and Cascading** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Lazy loading, Eager loading, Cascade types, Orphan removal, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t37",
        "number": 5,
        "title": "Entity Lifecycle",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t37-s1",
            "title": "Transient state"
          },
          {
            "id": "backend-t37-s2",
            "title": "Managed state"
          },
          {
            "id": "backend-t37-s3",
            "title": "Detached state"
          },
          {
            "id": "backend-t37-s4",
            "title": "Removed state"
          },
          {
            "id": "backend-t37-s5",
            "title": "Dirty checking"
          },
          {
            "id": "backend-t37-s6",
            "title": "Flush"
          },
          {
            "id": "backend-t37-s7",
            "title": "Clear"
          },
          {
            "id": "backend-t37-s8",
            "title": "Refresh"
          },
          {
            "id": "backend-t37-s9",
            "title": "Merge"
          },
          {
            "id": "backend-t37-s10",
            "title": "Persistence-context scope"
          }
        ],
        "overview": "**Entity Lifecycle** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Transient state, Managed state, Detached state, Removed state, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t38",
        "number": 6,
        "title": "Spring Data Repositories",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t38-s1",
            "title": "`Repository`"
          },
          {
            "id": "backend-t38-s2",
            "title": "`CrudRepository`"
          },
          {
            "id": "backend-t38-s3",
            "title": "`PagingAndSortingRepository`"
          },
          {
            "id": "backend-t38-s4",
            "title": "`JpaRepository`"
          },
          {
            "id": "backend-t38-s5",
            "title": "Derived query methods"
          },
          {
            "id": "backend-t38-s6",
            "title": "Query naming conventions"
          },
          {
            "id": "backend-t38-s7",
            "title": "Custom repository interfaces"
          },
          {
            "id": "backend-t38-s8",
            "title": "Custom repository implementations"
          }
        ],
        "overview": "**Spring Data Repositories** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `Repository`, `CrudRepository`, `PagingAndSortingRepository`, `JpaRepository`, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t39",
        "number": 7,
        "title": "Querying Data",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t39-s1",
            "title": "Derived queries"
          },
          {
            "id": "backend-t39-s2",
            "title": "JPQL"
          },
          {
            "id": "backend-t39-s3",
            "title": "Native SQL"
          },
          {
            "id": "backend-t39-s4",
            "title": "Named queries"
          },
          {
            "id": "backend-t39-s5",
            "title": "Criteria API"
          },
          {
            "id": "backend-t39-s6",
            "title": "Specifications"
          },
          {
            "id": "backend-t39-s7",
            "title": "Query by Example"
          },
          {
            "id": "backend-t39-s8",
            "title": "Projections"
          },
          {
            "id": "backend-t39-s9",
            "title": "Interface projections"
          },
          {
            "id": "backend-t39-s10",
            "title": "DTO projections"
          },
          {
            "id": "backend-t39-s11",
            "title": "Dynamic projections"
          },
          {
            "id": "backend-t39-s12",
            "title": "Pagination queries"
          },
          {
            "id": "backend-t39-s13",
            "title": "Count-query optimization"
          }
        ],
        "overview": "**Querying Data** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Derived queries, JPQL, Native SQL, Named queries, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t40",
        "number": 8,
        "title": "Transactions",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t40-s1",
            "title": "Database transaction"
          },
          {
            "id": "backend-t40-s2",
            "title": "Spring transaction abstraction"
          },
          {
            "id": "backend-t40-s3",
            "title": "`@Transactional`"
          },
          {
            "id": "backend-t40-s4",
            "title": "Transaction boundaries"
          },
          {
            "id": "backend-t40-s5",
            "title": "Propagation"
          },
          {
            "id": "backend-t40-s6",
            "title": "Isolation"
          },
          {
            "id": "backend-t40-s7",
            "title": "Read-only transactions"
          },
          {
            "id": "backend-t40-s8",
            "title": "Rollback rules"
          },
          {
            "id": "backend-t40-s9",
            "title": "Checked versus unchecked exceptions"
          },
          {
            "id": "backend-t40-s10",
            "title": "Self-invocation problem"
          },
          {
            "id": "backend-t40-s11",
            "title": "Transaction timeout"
          },
          {
            "id": "backend-t40-s12",
            "title": "Programmatic transactions"
          },
          {
            "id": "backend-t40-s13",
            "title": "Distributed-transaction problems"
          }
        ],
        "overview": "**Transactions** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Database transaction, Spring transaction abstraction, `@Transactional`, Transaction boundaries, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t41",
        "number": 9,
        "title": "Concurrency Control",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t41-s1",
            "title": "Lost updates"
          },
          {
            "id": "backend-t41-s2",
            "title": "Optimistic locking"
          },
          {
            "id": "backend-t41-s3",
            "title": "`@Version`"
          },
          {
            "id": "backend-t41-s4",
            "title": "Pessimistic locking"
          },
          {
            "id": "backend-t41-s5",
            "title": "Lock modes"
          },
          {
            "id": "backend-t41-s6",
            "title": "Database isolation"
          },
          {
            "id": "backend-t41-s7",
            "title": "Retry after optimistic-lock failure"
          },
          {
            "id": "backend-t41-s8",
            "title": "Idempotent write operations"
          }
        ],
        "overview": "**Concurrency Control** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Lost updates, Optimistic locking, `@Version`, Pessimistic locking, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t42",
        "number": 10,
        "title": "Auditing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t42-s1",
            "title": "Created timestamp"
          },
          {
            "id": "backend-t42-s2",
            "title": "Updated timestamp"
          },
          {
            "id": "backend-t42-s3",
            "title": "Created by"
          },
          {
            "id": "backend-t42-s4",
            "title": "Updated by"
          },
          {
            "id": "backend-t42-s5",
            "title": "Soft deletion"
          },
          {
            "id": "backend-t42-s6",
            "title": "Audit tables"
          },
          {
            "id": "backend-t42-s7",
            "title": "Hibernate Envers"
          },
          {
            "id": "backend-t42-s8",
            "title": "Business-event auditing"
          },
          {
            "id": "backend-t42-s9",
            "title": "Security audit trails"
          }
        ],
        "overview": "**Auditing** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Created timestamp, Updated timestamp, Created by, Updated by, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t43",
        "number": 11,
        "title": "Database Migrations",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t43-s1",
            "title": "Flyway"
          },
          {
            "id": "backend-t43-s2",
            "title": "Liquibase"
          },
          {
            "id": "backend-t43-s3",
            "title": "Versioned migrations"
          },
          {
            "id": "backend-t43-s4",
            "title": "Repeatable migrations"
          },
          {
            "id": "backend-t43-s5",
            "title": "Migration checksums"
          },
          {
            "id": "backend-t43-s6",
            "title": "Roll-forward strategy"
          },
          {
            "id": "backend-t43-s7",
            "title": "Schema baseline"
          },
          {
            "id": "backend-t43-s8",
            "title": "Seed data"
          },
          {
            "id": "backend-t43-s9",
            "title": "Environment-specific migrations"
          },
          {
            "id": "backend-t43-s10",
            "title": "Backward-compatible schema changes"
          },
          {
            "id": "backend-t43-s11",
            "title": "Zero-downtime migrations"
          }
        ],
        "overview": "**Database Migrations** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Flyway, Liquibase, Versioned migrations, Repeatable migrations, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t44",
        "number": 12,
        "title": "Connection Pooling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t44-s1",
            "title": "HikariCP"
          },
          {
            "id": "backend-t44-s2",
            "title": "Minimum connections"
          },
          {
            "id": "backend-t44-s3",
            "title": "Maximum pool size"
          },
          {
            "id": "backend-t44-s4",
            "title": "Connection timeout"
          },
          {
            "id": "backend-t44-s5",
            "title": "Idle timeout"
          },
          {
            "id": "backend-t44-s6",
            "title": "Maximum lifetime"
          },
          {
            "id": "backend-t44-s7",
            "title": "Connection leaks"
          },
          {
            "id": "backend-t44-s8",
            "title": "Pool exhaustion"
          },
          {
            "id": "backend-t44-s9",
            "title": "Monitoring pool metrics"
          },
          {
            "id": "backend-t44-s10",
            "title": "Correct pool-sizing principles"
          }
        ],
        "overview": "**Connection Pooling** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: HikariCP, Minimum connections, Maximum pool size, Connection timeout, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t45",
        "number": 13,
        "title": "NoSQL with Spring Data",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t45-s1",
            "title": "MongoDB"
          },
          {
            "id": "backend-t45-s2",
            "title": "Redis"
          },
          {
            "id": "backend-t45-s3",
            "title": "Elasticsearch or OpenSearch"
          },
          {
            "id": "backend-t45-s4",
            "title": "Neo4j"
          },
          {
            "id": "backend-t45-s5",
            "title": "Cassandra"
          },
          {
            "id": "backend-t45-s6",
            "title": "Document databases"
          },
          {
            "id": "backend-t45-s7",
            "title": "Key-value stores"
          },
          {
            "id": "backend-t45-s8",
            "title": "Search engines"
          },
          {
            "id": "backend-t45-s9",
            "title": "Graph databases"
          },
          {
            "id": "backend-t45-s10",
            "title": "Eventual consistency"
          },
          {
            "id": "backend-t45-s11",
            "title": "Data-modeling differences"
          },
          {
            "id": "backend-t45-s12",
            "title": "When not to use a relational database"
          }
        ],
        "overview": "**NoSQL with Spring Data** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: MongoDB, Redis, Elasticsearch or OpenSearch, Neo4j, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 7,
    "title": "Spring Security",
    "icon": "⚙️",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "Spring Security provides authentication, authorization and protection against common attacks. Its servlet security architecture is built around filters and a security filter chain. ([Home][5])",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t46",
        "number": 1,
        "title": "Security Foundations",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t46-s1",
            "title": "Authentication"
          },
          {
            "id": "backend-t46-s2",
            "title": "Authorization"
          },
          {
            "id": "backend-t46-s3",
            "title": "Principal"
          },
          {
            "id": "backend-t46-s4",
            "title": "Credentials"
          },
          {
            "id": "backend-t46-s5",
            "title": "Authority"
          },
          {
            "id": "backend-t46-s6",
            "title": "Role"
          },
          {
            "id": "backend-t46-s7",
            "title": "Permission"
          },
          {
            "id": "backend-t46-s8",
            "title": "Security context"
          },
          {
            "id": "backend-t46-s9",
            "title": "Least privilege"
          },
          {
            "id": "backend-t46-s10",
            "title": "Defense in depth"
          },
          {
            "id": "backend-t46-s11",
            "title": "Zero-trust principles"
          },
          {
            "id": "backend-t46-s12",
            "title": "Threat modeling"
          }
        ],
        "overview": "**Security Foundations** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Authentication, Authorization, Principal, Credentials, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t47",
        "number": 2,
        "title": "Spring Security Architecture",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t47-s1",
            "title": "`SecurityFilterChain`"
          },
          {
            "id": "backend-t47-s2",
            "title": "`FilterChainProxy`"
          },
          {
            "id": "backend-t47-s3",
            "title": "`DelegatingFilterProxy`"
          },
          {
            "id": "backend-t47-s4",
            "title": "`SecurityContext`"
          },
          {
            "id": "backend-t47-s5",
            "title": "`SecurityContextHolder`"
          },
          {
            "id": "backend-t47-s6",
            "title": "`Authentication`"
          },
          {
            "id": "backend-t47-s7",
            "title": "`AuthenticationManager`"
          },
          {
            "id": "backend-t47-s8",
            "title": "`ProviderManager`"
          },
          {
            "id": "backend-t47-s9",
            "title": "`AuthenticationProvider`"
          },
          {
            "id": "backend-t47-s10",
            "title": "`UserDetails`"
          },
          {
            "id": "backend-t47-s11",
            "title": "`UserDetailsService`"
          },
          {
            "id": "backend-t47-s12",
            "title": "`GrantedAuthority`"
          },
          {
            "id": "backend-t47-s13",
            "title": "`PasswordEncoder`"
          }
        ],
        "overview": "**Spring Security Architecture** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `SecurityFilterChain`, `FilterChainProxy`, `DelegatingFilterProxy`, `SecurityContext`, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t48",
        "number": 3,
        "title": "Password Authentication",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t48-s1",
            "title": "Form login"
          },
          {
            "id": "backend-t48-s2",
            "title": "HTTP Basic"
          },
          {
            "id": "backend-t48-s3",
            "title": "Database-backed users"
          },
          {
            "id": "backend-t48-s4",
            "title": "Custom `UserDetailsService`"
          },
          {
            "id": "backend-t48-s5",
            "title": "Custom authentication provider"
          },
          {
            "id": "backend-t48-s6",
            "title": "Password hashing"
          },
          {
            "id": "backend-t48-s7",
            "title": "BCrypt"
          },
          {
            "id": "backend-t48-s8",
            "title": "Argon2"
          },
          {
            "id": "backend-t48-s9",
            "title": "Password-upgrade strategy"
          },
          {
            "id": "backend-t48-s10",
            "title": "Account locking"
          },
          {
            "id": "backend-t48-s11",
            "title": "Failed-login tracking"
          },
          {
            "id": "backend-t48-s12",
            "title": "Password-reset flow"
          },
          {
            "id": "backend-t48-s13",
            "title": "Email-verification flow"
          },
          {
            "id": "backend-t48-s14",
            "title": "Multi-factor authentication concepts"
          }
        ],
        "overview": "**Password Authentication** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Form login, HTTP Basic, Database-backed users, Custom `UserDetailsService`, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t49",
        "number": 4,
        "title": "Authorization",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t49-s1",
            "title": "Request-based authorization"
          },
          {
            "id": "backend-t49-s2",
            "title": "Role-based access control"
          },
          {
            "id": "backend-t49-s3",
            "title": "Permission-based access control"
          },
          {
            "id": "backend-t49-s4",
            "title": "Ownership-based authorization"
          },
          {
            "id": "backend-t49-s5",
            "title": "Method security"
          },
          {
            "id": "backend-t49-s6",
            "title": "Domain-object security concepts"
          },
          {
            "id": "backend-t49-s7",
            "title": "`@EnableMethodSecurity`"
          },
          {
            "id": "backend-t49-s8",
            "title": "`@PreAuthorize`"
          },
          {
            "id": "backend-t49-s9",
            "title": "`@PostAuthorize`"
          },
          {
            "id": "backend-t49-s10",
            "title": "`@PreFilter`"
          },
          {
            "id": "backend-t49-s11",
            "title": "`@PostFilter`"
          }
        ],
        "overview": "Important annotations:\n\nSpring Security supports authorization at web-request and method levels through authorization managers and method annotations. ([Home][6])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t50",
        "number": 5,
        "title": "Session-Based Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t50-s1",
            "title": "HTTP session"
          },
          {
            "id": "backend-t50-s2",
            "title": "Session fixation"
          },
          {
            "id": "backend-t50-s3",
            "title": "Session expiration"
          },
          {
            "id": "backend-t50-s4",
            "title": "Concurrent-session control"
          },
          {
            "id": "backend-t50-s5",
            "title": "Remember-me authentication"
          },
          {
            "id": "backend-t50-s6",
            "title": "Logout"
          },
          {
            "id": "backend-t50-s7",
            "title": "Secure cookies"
          },
          {
            "id": "backend-t50-s8",
            "title": "HTTP-only cookies"
          },
          {
            "id": "backend-t50-s9",
            "title": "SameSite cookies"
          },
          {
            "id": "backend-t50-s10",
            "title": "Distributed sessions"
          },
          {
            "id": "backend-t50-s11",
            "title": "Spring Session"
          },
          {
            "id": "backend-t50-s12",
            "title": "Redis-backed sessions"
          }
        ],
        "overview": "**Session-Based Security** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: HTTP session, Session fixation, Session expiration, Concurrent-session control, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t51",
        "number": 6,
        "title": "Token-Based Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t51-s1",
            "title": "Bearer tokens"
          },
          {
            "id": "backend-t51-s2",
            "title": "JWT structure"
          },
          {
            "id": "backend-t51-s3",
            "title": "Header, payload and signature"
          },
          {
            "id": "backend-t51-s4",
            "title": "Claims"
          },
          {
            "id": "backend-t51-s5",
            "title": "Access token"
          },
          {
            "id": "backend-t51-s6",
            "title": "Refresh token"
          },
          {
            "id": "backend-t51-s7",
            "title": "Token expiration"
          },
          {
            "id": "backend-t51-s8",
            "title": "Token rotation"
          },
          {
            "id": "backend-t51-s9",
            "title": "Token revocation"
          },
          {
            "id": "backend-t51-s10",
            "title": "Signing keys"
          },
          {
            "id": "backend-t51-s11",
            "title": "Symmetric signing"
          },
          {
            "id": "backend-t51-s12",
            "title": "Asymmetric signing"
          },
          {
            "id": "backend-t51-s13",
            "title": "Key rotation"
          },
          {
            "id": "backend-t51-s14",
            "title": "Token validation"
          },
          {
            "id": "backend-t51-s15",
            "title": "Stateless security"
          },
          {
            "id": "backend-t51-s16",
            "title": "JWT security limitations"
          },
          {
            "id": "backend-t51-s17",
            "title": "Why JWT is not automatically the best choice"
          }
        ],
        "overview": "**Token-Based Security** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Bearer tokens, JWT structure, Header, payload and signature, Claims, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t52",
        "number": 7,
        "title": "OAuth 2.0 and OpenID Connect",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t52-s1",
            "title": "Resource owner"
          },
          {
            "id": "backend-t52-s2",
            "title": "Client"
          },
          {
            "id": "backend-t52-s3",
            "title": "Authorization server"
          },
          {
            "id": "backend-t52-s4",
            "title": "Resource server"
          },
          {
            "id": "backend-t52-s5",
            "title": "Authorization Code flow"
          },
          {
            "id": "backend-t52-s6",
            "title": "PKCE"
          },
          {
            "id": "backend-t52-s7",
            "title": "Client Credentials flow"
          },
          {
            "id": "backend-t52-s8",
            "title": "Device Authorization flow"
          },
          {
            "id": "backend-t52-s9",
            "title": "Scope"
          },
          {
            "id": "backend-t52-s10",
            "title": "Consent"
          },
          {
            "id": "backend-t52-s11",
            "title": "Access token"
          },
          {
            "id": "backend-t52-s12",
            "title": "Refresh token"
          },
          {
            "id": "backend-t52-s13",
            "title": "ID token"
          },
          {
            "id": "backend-t52-s14",
            "title": "OIDC discovery"
          },
          {
            "id": "backend-t52-s15",
            "title": "JWK set"
          },
          {
            "id": "backend-t52-s16",
            "title": "OAuth2 client"
          },
          {
            "id": "backend-t52-s17",
            "title": "OAuth2 resource server"
          },
          {
            "id": "backend-t52-s18",
            "title": "Social login"
          },
          {
            "id": "backend-t52-s19",
            "title": "Identity providers"
          }
        ],
        "overview": "**OAuth 2.0 and OpenID Connect** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Resource owner, Client, Authorization server, Resource server, and 15 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t53",
        "number": 8,
        "title": "Spring Authorization Server",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t53-s1",
            "title": "Building an authorization server"
          },
          {
            "id": "backend-t53-s2",
            "title": "Client registration"
          },
          {
            "id": "backend-t53-s3",
            "title": "Token endpoints"
          },
          {
            "id": "backend-t53-s4",
            "title": "Authorization endpoint"
          },
          {
            "id": "backend-t53-s5",
            "title": "Consent"
          },
          {
            "id": "backend-t53-s6",
            "title": "OIDC support"
          },
          {
            "id": "backend-t53-s7",
            "title": "Token customization"
          },
          {
            "id": "backend-t53-s8",
            "title": "Key management"
          },
          {
            "id": "backend-t53-s9",
            "title": "User federation"
          },
          {
            "id": "backend-t53-s10",
            "title": "When to use an external identity provider instead"
          }
        ],
        "overview": "**Spring Authorization Server** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Building an authorization server, Client registration, Token endpoints, Authorization endpoint, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t54",
        "number": 9,
        "title": "Common Web Attacks",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t54-s1",
            "title": "CSRF"
          },
          {
            "id": "backend-t54-s2",
            "title": "XSS"
          },
          {
            "id": "backend-t54-s3",
            "title": "SQL injection"
          },
          {
            "id": "backend-t54-s4",
            "title": "Command injection"
          },
          {
            "id": "backend-t54-s5",
            "title": "Path traversal"
          },
          {
            "id": "backend-t54-s6",
            "title": "Open redirects"
          },
          {
            "id": "backend-t54-s7",
            "title": "Clickjacking"
          },
          {
            "id": "backend-t54-s8",
            "title": "CORS misconfiguration"
          },
          {
            "id": "backend-t54-s9",
            "title": "Session fixation"
          },
          {
            "id": "backend-t54-s10",
            "title": "Credential stuffing"
          },
          {
            "id": "backend-t54-s11",
            "title": "Brute-force attacks"
          },
          {
            "id": "backend-t54-s12",
            "title": "Insecure direct-object references"
          },
          {
            "id": "backend-t54-s13",
            "title": "Server-side request forgery"
          },
          {
            "id": "backend-t54-s14",
            "title": "Mass assignment"
          },
          {
            "id": "backend-t54-s15",
            "title": "Sensitive-data exposure"
          }
        ],
        "overview": "**Common Web Attacks** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: CSRF, XSS, SQL injection, Command injection, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t55",
        "number": 10,
        "title": "Security Headers",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t55-s1",
            "title": "Content Security Policy"
          },
          {
            "id": "backend-t55-s2",
            "title": "HSTS"
          },
          {
            "id": "backend-t55-s3",
            "title": "`X-Content-Type-Options`"
          },
          {
            "id": "backend-t55-s4",
            "title": "Frame options"
          },
          {
            "id": "backend-t55-s5",
            "title": "Referrer policy"
          },
          {
            "id": "backend-t55-s6",
            "title": "Permissions policy"
          },
          {
            "id": "backend-t55-s7",
            "title": "Cache-control for sensitive responses"
          }
        ],
        "overview": "**Security Headers** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Content Security Policy, HSTS, `X-Content-Type-Options`, Frame options, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t56",
        "number": 11,
        "title": "API Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t56-s1",
            "title": "Input validation"
          },
          {
            "id": "backend-t56-s2",
            "title": "Output encoding"
          },
          {
            "id": "backend-t56-s3",
            "title": "Rate limiting"
          },
          {
            "id": "backend-t56-s4",
            "title": "Request-size limits"
          },
          {
            "id": "backend-t56-s5",
            "title": "File-upload protection"
          },
          {
            "id": "backend-t56-s6",
            "title": "Secret management"
          },
          {
            "id": "backend-t56-s7",
            "title": "API keys"
          },
          {
            "id": "backend-t56-s8",
            "title": "Webhook signatures"
          },
          {
            "id": "backend-t56-s9",
            "title": "Replay-attack prevention"
          },
          {
            "id": "backend-t56-s10",
            "title": "Idempotency"
          },
          {
            "id": "backend-t56-s11",
            "title": "Audit logs"
          },
          {
            "id": "backend-t56-s12",
            "title": "Security-event monitoring"
          }
        ],
        "overview": "**API Security** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Input validation, Output encoding, Rate limiting, Request-size limits, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 8,
    "title": "Testing Spring Applications",
    "icon": "⚙️",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t57",
        "number": 1,
        "title": "Testing Foundations",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t57-s1",
            "title": "Unit testing"
          },
          {
            "id": "backend-t57-s2",
            "title": "Integration testing"
          },
          {
            "id": "backend-t57-s3",
            "title": "Component testing"
          },
          {
            "id": "backend-t57-s4",
            "title": "End-to-end testing"
          },
          {
            "id": "backend-t57-s5",
            "title": "Contract testing"
          },
          {
            "id": "backend-t57-s6",
            "title": "Test pyramid"
          },
          {
            "id": "backend-t57-s7",
            "title": "Test isolation"
          },
          {
            "id": "backend-t57-s8",
            "title": "Deterministic tests"
          },
          {
            "id": "backend-t57-s9",
            "title": "Test fixtures"
          },
          {
            "id": "backend-t57-s10",
            "title": "Test-data builders"
          }
        ],
        "overview": "**Testing Foundations** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Unit testing, Integration testing, Component testing, End-to-end testing, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t58",
        "number": 2,
        "title": "JUnit and Mockito",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t58-s1",
            "title": "JUnit lifecycle"
          },
          {
            "id": "backend-t58-s2",
            "title": "Assertions"
          },
          {
            "id": "backend-t58-s3",
            "title": "Parameterized tests"
          },
          {
            "id": "backend-t58-s4",
            "title": "Nested tests"
          },
          {
            "id": "backend-t58-s5",
            "title": "Exception tests"
          },
          {
            "id": "backend-t58-s6",
            "title": "Timeouts"
          },
          {
            "id": "backend-t58-s7",
            "title": "Mockito mocks"
          },
          {
            "id": "backend-t58-s8",
            "title": "Stubs"
          },
          {
            "id": "backend-t58-s9",
            "title": "Spies"
          },
          {
            "id": "backend-t58-s10",
            "title": "Argument captors"
          },
          {
            "id": "backend-t58-s11",
            "title": "Verification"
          },
          {
            "id": "backend-t58-s12",
            "title": "Mocking static methods only when necessary"
          },
          {
            "id": "backend-t58-s13",
            "title": "Avoiding excessive mocking"
          }
        ],
        "overview": "**JUnit and Mockito** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: JUnit lifecycle, Assertions, Parameterized tests, Nested tests, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t59",
        "number": 3,
        "title": "Spring Test Context",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t59-s1",
            "title": "`@SpringBootTest`"
          },
          {
            "id": "backend-t59-s2",
            "title": "`@ContextConfiguration`"
          },
          {
            "id": "backend-t59-s3",
            "title": "`@ActiveProfiles`"
          },
          {
            "id": "backend-t59-s4",
            "title": "`@TestPropertySource`"
          },
          {
            "id": "backend-t59-s5",
            "title": "Context caching"
          },
          {
            "id": "backend-t59-s6",
            "title": "Transactional tests"
          },
          {
            "id": "backend-t59-s7",
            "title": "Application-context reuse"
          },
          {
            "id": "backend-t59-s8",
            "title": "Test configuration"
          }
        ],
        "overview": "**Spring Test Context** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `@SpringBootTest`, `@ContextConfiguration`, `@ActiveProfiles`, `@TestPropertySource`, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t60",
        "number": 4,
        "title": "Test Slices",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t60-s1",
            "title": "Controller tests"
          },
          {
            "id": "backend-t60-s2",
            "title": "Repository tests"
          },
          {
            "id": "backend-t60-s3",
            "title": "JSON tests"
          },
          {
            "id": "backend-t60-s4",
            "title": "JDBC tests"
          },
          {
            "id": "backend-t60-s5",
            "title": "JPA tests"
          },
          {
            "id": "backend-t60-s6",
            "title": "REST-client tests"
          },
          {
            "id": "backend-t60-s7",
            "title": "Security tests"
          },
          {
            "id": "backend-t60-s8",
            "title": "`@WebMvcTest`"
          },
          {
            "id": "backend-t60-s9",
            "title": "`@DataJpaTest`"
          },
          {
            "id": "backend-t60-s10",
            "title": "`@JsonTest`"
          },
          {
            "id": "backend-t60-s11",
            "title": "`@JdbcTest`"
          },
          {
            "id": "backend-t60-s12",
            "title": "`@RestClientTest`"
          }
        ],
        "overview": "**Test Slices** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Controller tests, Repository tests, JSON tests, JDBC tests, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t61",
        "number": 5,
        "title": "API Testing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t61-s1",
            "title": "MockMvc"
          },
          {
            "id": "backend-t61-s2",
            "title": "REST Assured"
          },
          {
            "id": "backend-t61-s3",
            "title": "WebTestClient"
          },
          {
            "id": "backend-t61-s4",
            "title": "Request assertions"
          },
          {
            "id": "backend-t61-s5",
            "title": "Response assertions"
          },
          {
            "id": "backend-t61-s6",
            "title": "JSON-path assertions"
          },
          {
            "id": "backend-t61-s7",
            "title": "Authentication testing"
          },
          {
            "id": "backend-t61-s8",
            "title": "Authorization testing"
          },
          {
            "id": "backend-t61-s9",
            "title": "Validation-error testing"
          },
          {
            "id": "backend-t61-s10",
            "title": "Exception-handler testing"
          }
        ],
        "overview": "**API Testing** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: MockMvc, REST Assured, WebTestClient, Request assertions, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t62",
        "number": 6,
        "title": "Testcontainers",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t62-s1",
            "title": "Real database containers"
          },
          {
            "id": "backend-t62-s2",
            "title": "PostgreSQL container"
          },
          {
            "id": "backend-t62-s3",
            "title": "MySQL container"
          },
          {
            "id": "backend-t62-s4",
            "title": "MongoDB container"
          },
          {
            "id": "backend-t62-s5",
            "title": "Redis container"
          },
          {
            "id": "backend-t62-s6",
            "title": "Kafka container"
          },
          {
            "id": "backend-t62-s7",
            "title": "RabbitMQ container"
          },
          {
            "id": "backend-t62-s8",
            "title": "LocalStack"
          },
          {
            "id": "backend-t62-s9",
            "title": "Container reuse"
          },
          {
            "id": "backend-t62-s10",
            "title": "Dynamic properties"
          },
          {
            "id": "backend-t62-s11",
            "title": "Spring Boot service connections"
          }
        ],
        "overview": "**Testcontainers** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Real database containers, PostgreSQL container, MySQL container, MongoDB container, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t63",
        "number": 7,
        "title": "Database Testing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t63-s1",
            "title": "Repository queries"
          },
          {
            "id": "backend-t63-s2",
            "title": "Database constraints"
          },
          {
            "id": "backend-t63-s3",
            "title": "Migration testing"
          },
          {
            "id": "backend-t63-s4",
            "title": "Transaction behavior"
          },
          {
            "id": "backend-t63-s5",
            "title": "Locking behavior"
          },
          {
            "id": "backend-t63-s6",
            "title": "Native-query testing"
          },
          {
            "id": "backend-t63-s7",
            "title": "Avoiding H2-only assumptions"
          },
          {
            "id": "backend-t63-s8",
            "title": "Testing against the production database engine"
          }
        ],
        "overview": "**Database Testing** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Repository queries, Database constraints, Migration testing, Transaction behavior, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t64",
        "number": 8,
        "title": "Contract Testing",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t64-s1",
            "title": "Consumer-driven contracts"
          },
          {
            "id": "backend-t64-s2",
            "title": "Provider contracts"
          },
          {
            "id": "backend-t64-s3",
            "title": "Spring Cloud Contract"
          },
          {
            "id": "backend-t64-s4",
            "title": "Pact concepts"
          },
          {
            "id": "backend-t64-s5",
            "title": "API compatibility"
          },
          {
            "id": "backend-t64-s6",
            "title": "Schema evolution"
          },
          {
            "id": "backend-t64-s7",
            "title": "Backward compatibility"
          }
        ],
        "overview": "**Contract Testing** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Consumer-driven contracts, Provider contracts, Spring Cloud Contract, Pact concepts, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t65",
        "number": 9,
        "title": "Documentation Testing",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t65-s1",
            "title": "OpenAPI documentation"
          },
          {
            "id": "backend-t65-s2",
            "title": "Swagger UI"
          },
          {
            "id": "backend-t65-s3",
            "title": "Spring REST Docs"
          },
          {
            "id": "backend-t65-s4",
            "title": "Generated request snippets"
          },
          {
            "id": "backend-t65-s5",
            "title": "Generated response snippets"
          },
          {
            "id": "backend-t65-s6",
            "title": "Keeping documentation synchronized with tests"
          }
        ],
        "overview": "**Documentation Testing** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: OpenAPI documentation, Swagger UI, Spring REST Docs, Generated request snippets, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 9,
    "title": "Production-Ready Spring Boot",
    "icon": "⚙️",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "Spring Boot Actuator provides production monitoring and management facilities such as health, auditing and metrics. Spring Boot observability focuses on logs, metrics and traces, using Micrometer for metrics and observations. ([Home][7])",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t66",
        "number": 1,
        "title": "Spring Boot Actuator",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t66-s1",
            "title": "Actuator starter"
          },
          {
            "id": "backend-t66-s2",
            "title": "Health endpoint"
          },
          {
            "id": "backend-t66-s3",
            "title": "Info endpoint"
          },
          {
            "id": "backend-t66-s4",
            "title": "Metrics endpoint"
          },
          {
            "id": "backend-t66-s5",
            "title": "Loggers endpoint"
          },
          {
            "id": "backend-t66-s6",
            "title": "Environment endpoint"
          },
          {
            "id": "backend-t66-s7",
            "title": "Beans endpoint"
          },
          {
            "id": "backend-t66-s8",
            "title": "Mappings endpoint"
          },
          {
            "id": "backend-t66-s9",
            "title": "Thread-dump endpoint"
          },
          {
            "id": "backend-t66-s10",
            "title": "Heap-dump endpoint"
          },
          {
            "id": "backend-t66-s11",
            "title": "Scheduled-tasks endpoint"
          },
          {
            "id": "backend-t66-s12",
            "title": "Custom actuator endpoints"
          },
          {
            "id": "backend-t66-s13",
            "title": "Endpoint exposure"
          },
          {
            "id": "backend-t66-s14",
            "title": "Endpoint security"
          }
        ],
        "overview": "Actuator endpoints can expose application health and management information over HTTP or JMX, but access must be controlled carefully. ([Home][8])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t67",
        "number": 2,
        "title": "Health Checks",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t67-s1",
            "title": "Liveness"
          },
          {
            "id": "backend-t67-s2",
            "title": "Readiness"
          },
          {
            "id": "backend-t67-s3",
            "title": "Startup probes"
          },
          {
            "id": "backend-t67-s4",
            "title": "Database health"
          },
          {
            "id": "backend-t67-s5",
            "title": "Redis health"
          },
          {
            "id": "backend-t67-s6",
            "title": "Disk-space health"
          },
          {
            "id": "backend-t67-s7",
            "title": "Message-broker health"
          },
          {
            "id": "backend-t67-s8",
            "title": "Custom health indicators"
          },
          {
            "id": "backend-t67-s9",
            "title": "Health groups"
          },
          {
            "id": "backend-t67-s10",
            "title": "Preventing sensitive-details exposure"
          }
        ],
        "overview": "**Health Checks** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Liveness, Readiness, Startup probes, Database health, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t68",
        "number": 3,
        "title": "Metrics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t68-s1",
            "title": "Micrometer"
          },
          {
            "id": "backend-t68-s2",
            "title": "Counters"
          },
          {
            "id": "backend-t68-s3",
            "title": "Gauges"
          },
          {
            "id": "backend-t68-s4",
            "title": "Timers"
          },
          {
            "id": "backend-t68-s5",
            "title": "Distribution summaries"
          },
          {
            "id": "backend-t68-s6",
            "title": "Tags"
          },
          {
            "id": "backend-t68-s7",
            "title": "High-cardinality risks"
          },
          {
            "id": "backend-t68-s8",
            "title": "Business metrics"
          },
          {
            "id": "backend-t68-s9",
            "title": "JVM metrics"
          },
          {
            "id": "backend-t68-s10",
            "title": "HTTP metrics"
          },
          {
            "id": "backend-t68-s11",
            "title": "Database-pool metrics"
          },
          {
            "id": "backend-t68-s12",
            "title": "Cache metrics"
          },
          {
            "id": "backend-t68-s13",
            "title": "Kafka metrics"
          },
          {
            "id": "backend-t68-s14",
            "title": "Prometheus"
          },
          {
            "id": "backend-t68-s15",
            "title": "Grafana"
          }
        ],
        "overview": "Spring Boot can automatically instrument HTTP requests, database pools, caches and other integrations through Micrometer. ([Home][9])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t69",
        "number": 4,
        "title": "Distributed Tracing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t69-s1",
            "title": "Trace ID"
          },
          {
            "id": "backend-t69-s2",
            "title": "Span ID"
          },
          {
            "id": "backend-t69-s3",
            "title": "Parent span"
          },
          {
            "id": "backend-t69-s4",
            "title": "Sampling"
          },
          {
            "id": "backend-t69-s5",
            "title": "Baggage"
          },
          {
            "id": "backend-t69-s6",
            "title": "Context propagation"
          },
          {
            "id": "backend-t69-s7",
            "title": "OpenTelemetry"
          },
          {
            "id": "backend-t69-s8",
            "title": "OTLP"
          },
          {
            "id": "backend-t69-s9",
            "title": "Zipkin"
          },
          {
            "id": "backend-t69-s10",
            "title": "Trace-log correlation"
          },
          {
            "id": "backend-t69-s11",
            "title": "Cross-service tracing"
          }
        ],
        "overview": "Spring Boot provides Micrometer Tracing integration and supports OpenTelemetry/OTLP and Zipkin-related tracing configurations. ([Home][10])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t70",
        "number": 5,
        "title": "Observability",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t70-s1",
            "title": "Service-level indicators"
          },
          {
            "id": "backend-t70-s2",
            "title": "Service-level objectives"
          },
          {
            "id": "backend-t70-s3",
            "title": "Error budgets"
          },
          {
            "id": "backend-t70-s4",
            "title": "Alerting"
          },
          {
            "id": "backend-t70-s5",
            "title": "Dashboards"
          },
          {
            "id": "backend-t70-s6",
            "title": "Golden signals"
          },
          {
            "id": "backend-t70-s7",
            "title": "Latency percentiles"
          },
          {
            "id": "backend-t70-s8",
            "title": "Error-rate monitoring"
          },
          {
            "id": "backend-t70-s9",
            "title": "Saturation monitoring"
          },
          {
            "id": "backend-t70-s10",
            "title": "Business observability"
          }
        ],
        "overview": "**Observability** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Service-level indicators, Service-level objectives, Error budgets, Alerting, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t71",
        "number": 6,
        "title": "Resilience",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t71-s1",
            "title": "Timeouts"
          },
          {
            "id": "backend-t71-s2",
            "title": "Retries"
          },
          {
            "id": "backend-t71-s3",
            "title": "Exponential backoff"
          },
          {
            "id": "backend-t71-s4",
            "title": "Jitter"
          },
          {
            "id": "backend-t71-s5",
            "title": "Circuit breakers"
          },
          {
            "id": "backend-t71-s6",
            "title": "Bulkheads"
          },
          {
            "id": "backend-t71-s7",
            "title": "Rate limiters"
          },
          {
            "id": "backend-t71-s8",
            "title": "Fallbacks"
          },
          {
            "id": "backend-t71-s9",
            "title": "Retry storms"
          },
          {
            "id": "backend-t71-s10",
            "title": "Cascading failures"
          },
          {
            "id": "backend-t71-s11",
            "title": "Load shedding"
          },
          {
            "id": "backend-t71-s12",
            "title": "Graceful degradation"
          },
          {
            "id": "backend-t71-s13",
            "title": "Resilience4j"
          }
        ],
        "overview": "**Resilience** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Timeouts, Retries, Exponential backoff, Jitter, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t72",
        "number": 7,
        "title": "Graceful Shutdown",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t72-s1",
            "title": "Stop accepting new requests"
          },
          {
            "id": "backend-t72-s2",
            "title": "Finish active requests"
          },
          {
            "id": "backend-t72-s3",
            "title": "Stop message consumers"
          },
          {
            "id": "backend-t72-s4",
            "title": "Drain connections"
          },
          {
            "id": "backend-t72-s5",
            "title": "Close database pools"
          },
          {
            "id": "backend-t72-s6",
            "title": "Kubernetes termination grace period"
          },
          {
            "id": "backend-t72-s7",
            "title": "Shutdown hooks"
          },
          {
            "id": "backend-t72-s8",
            "title": "Deployment safety"
          }
        ],
        "overview": "**Graceful Shutdown** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Stop accepting new requests, Finish active requests, Stop message consumers, Drain connections, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 10,
    "title": "Calling External Services",
    "icon": "⚙️",
    "color": "#ec4899",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t73",
        "number": 1,
        "title": "HTTP Clients",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t73-s1",
            "title": "`RestClient`"
          },
          {
            "id": "backend-t73-s2",
            "title": "`WebClient`"
          },
          {
            "id": "backend-t73-s3",
            "title": "HTTP interface clients"
          },
          {
            "id": "backend-t73-s4",
            "title": "`RestTemplate` for legacy maintenance"
          },
          {
            "id": "backend-t73-s5",
            "title": "GET requests"
          },
          {
            "id": "backend-t73-s6",
            "title": "POST requests"
          },
          {
            "id": "backend-t73-s7",
            "title": "Headers"
          },
          {
            "id": "backend-t73-s8",
            "title": "Authentication"
          },
          {
            "id": "backend-t73-s9",
            "title": "Query parameters"
          },
          {
            "id": "backend-t73-s10",
            "title": "Request bodies"
          },
          {
            "id": "backend-t73-s11",
            "title": "Error handling"
          },
          {
            "id": "backend-t73-s12",
            "title": "Timeouts"
          },
          {
            "id": "backend-t73-s13",
            "title": "Connection pooling"
          },
          {
            "id": "backend-t73-s14",
            "title": "Retries"
          },
          {
            "id": "backend-t73-s15",
            "title": "Logging"
          },
          {
            "id": "backend-t73-s16",
            "title": "Streaming responses"
          },
          {
            "id": "backend-t73-s17",
            "title": "Multipart requests"
          }
        ],
        "overview": "**HTTP Clients** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `RestClient`, `WebClient`, HTTP interface clients, `RestTemplate` for legacy maintenance, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t74",
        "number": 2,
        "title": "API Client Reliability",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t74-s1",
            "title": "Connect timeout"
          },
          {
            "id": "backend-t74-s2",
            "title": "Read timeout"
          },
          {
            "id": "backend-t74-s3",
            "title": "Response timeout"
          },
          {
            "id": "backend-t74-s4",
            "title": "Pool timeout"
          },
          {
            "id": "backend-t74-s5",
            "title": "Retry classification"
          },
          {
            "id": "backend-t74-s6",
            "title": "Retry only safe operations"
          },
          {
            "id": "backend-t74-s7",
            "title": "Circuit breakers"
          },
          {
            "id": "backend-t74-s8",
            "title": "Idempotency"
          },
          {
            "id": "backend-t74-s9",
            "title": "Response validation"
          },
          {
            "id": "backend-t74-s10",
            "title": "Schema changes"
          },
          {
            "id": "backend-t74-s11",
            "title": "Fallback behavior"
          },
          {
            "id": "backend-t74-s12",
            "title": "Mock server testing"
          }
        ],
        "overview": "**API Client Reliability** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Connect timeout, Read timeout, Response timeout, Pool timeout, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t75",
        "number": 3,
        "title": "Webhooks",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t75-s1",
            "title": "Webhook endpoint"
          },
          {
            "id": "backend-t75-s2",
            "title": "Signature verification"
          },
          {
            "id": "backend-t75-s3",
            "title": "Timestamp verification"
          },
          {
            "id": "backend-t75-s4",
            "title": "Replay protection"
          },
          {
            "id": "backend-t75-s5",
            "title": "Idempotent processing"
          },
          {
            "id": "backend-t75-s6",
            "title": "Retry handling"
          },
          {
            "id": "backend-t75-s7",
            "title": "Dead-letter storage"
          },
          {
            "id": "backend-t75-s8",
            "title": "Delivery auditing"
          }
        ],
        "overview": "**Webhooks** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Webhook endpoint, Signature verification, Timestamp verification, Replay protection, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 11,
    "title": "Caching",
    "icon": "⚙️",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t76",
        "number": 1,
        "title": "Caching Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t76-s1",
            "title": "Cache hit"
          },
          {
            "id": "backend-t76-s2",
            "title": "Cache miss"
          },
          {
            "id": "backend-t76-s3",
            "title": "Hit ratio"
          },
          {
            "id": "backend-t76-s4",
            "title": "Cache-aside"
          },
          {
            "id": "backend-t76-s5",
            "title": "Read-through"
          },
          {
            "id": "backend-t76-s6",
            "title": "Write-through"
          },
          {
            "id": "backend-t76-s7",
            "title": "Write-behind"
          },
          {
            "id": "backend-t76-s8",
            "title": "Time-to-live"
          },
          {
            "id": "backend-t76-s9",
            "title": "Eviction"
          },
          {
            "id": "backend-t76-s10",
            "title": "Cache invalidation"
          },
          {
            "id": "backend-t76-s11",
            "title": "Stale data"
          },
          {
            "id": "backend-t76-s12",
            "title": "Cache stampede"
          },
          {
            "id": "backend-t76-s13",
            "title": "Cache penetration"
          },
          {
            "id": "backend-t76-s14",
            "title": "Cache avalanche"
          }
        ],
        "overview": "**Caching Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Cache hit, Cache miss, Hit ratio, Cache-aside, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t77",
        "number": 2,
        "title": "Spring Cache",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t77-s1",
            "title": "`@EnableCaching`"
          },
          {
            "id": "backend-t77-s2",
            "title": "`@Cacheable`"
          },
          {
            "id": "backend-t77-s3",
            "title": "`@CachePut`"
          },
          {
            "id": "backend-t77-s4",
            "title": "`@CacheEvict`"
          },
          {
            "id": "backend-t77-s5",
            "title": "Cache keys"
          },
          {
            "id": "backend-t77-s6",
            "title": "Conditional caching"
          },
          {
            "id": "backend-t77-s7",
            "title": "Multiple caches"
          },
          {
            "id": "backend-t77-s8",
            "title": "Cache managers"
          },
          {
            "id": "backend-t77-s9",
            "title": "Self-invocation limitation"
          },
          {
            "id": "backend-t77-s10",
            "title": "Transactional caching concerns"
          }
        ],
        "overview": "**Spring Cache** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `@EnableCaching`, `@Cacheable`, `@CachePut`, `@CacheEvict`, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t78",
        "number": 3,
        "title": "Cache Implementations",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t78-s1",
            "title": "Caffeine"
          },
          {
            "id": "backend-t78-s2",
            "title": "Redis"
          },
          {
            "id": "backend-t78-s3",
            "title": "Local versus distributed cache"
          },
          {
            "id": "backend-t78-s4",
            "title": "Serialization"
          },
          {
            "id": "backend-t78-s5",
            "title": "Key naming"
          },
          {
            "id": "backend-t78-s6",
            "title": "Key versioning"
          },
          {
            "id": "backend-t78-s7",
            "title": "Multi-tenant cache isolation"
          },
          {
            "id": "backend-t78-s8",
            "title": "Distributed-lock concepts"
          }
        ],
        "overview": "**Cache Implementations** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Caffeine, Redis, Local versus distributed cache, Serialization, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 12,
    "title": "Messaging and Event-Driven Architecture",
    "icon": "⚙️",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t79",
        "number": 1,
        "title": "Messaging Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t79-s1",
            "title": "Producer"
          },
          {
            "id": "backend-t79-s2",
            "title": "Consumer"
          },
          {
            "id": "backend-t79-s3",
            "title": "Queue"
          },
          {
            "id": "backend-t79-s4",
            "title": "Topic"
          },
          {
            "id": "backend-t79-s5",
            "title": "Message"
          },
          {
            "id": "backend-t79-s6",
            "title": "Event"
          },
          {
            "id": "backend-t79-s7",
            "title": "Command"
          },
          {
            "id": "backend-t79-s8",
            "title": "Consumer group"
          },
          {
            "id": "backend-t79-s9",
            "title": "Partition"
          },
          {
            "id": "backend-t79-s10",
            "title": "Ordering"
          },
          {
            "id": "backend-t79-s11",
            "title": "Offset"
          },
          {
            "id": "backend-t79-s12",
            "title": "Acknowledgement"
          },
          {
            "id": "backend-t79-s13",
            "title": "Delivery guarantees"
          },
          {
            "id": "backend-t79-s14",
            "title": "At-most-once"
          },
          {
            "id": "backend-t79-s15",
            "title": "At-least-once"
          },
          {
            "id": "backend-t79-s16",
            "title": "Effectively-once processing"
          }
        ],
        "overview": "**Messaging Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Producer, Consumer, Queue, Topic, and 12 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t80",
        "number": 2,
        "title": "Kafka",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t80-s1",
            "title": "Kafka broker"
          },
          {
            "id": "backend-t80-s2",
            "title": "Topic"
          },
          {
            "id": "backend-t80-s3",
            "title": "Partition"
          },
          {
            "id": "backend-t80-s4",
            "title": "Producer"
          },
          {
            "id": "backend-t80-s5",
            "title": "Consumer"
          },
          {
            "id": "backend-t80-s6",
            "title": "Consumer group"
          },
          {
            "id": "backend-t80-s7",
            "title": "Offset management"
          },
          {
            "id": "backend-t80-s8",
            "title": "Serialization"
          },
          {
            "id": "backend-t80-s9",
            "title": "Deserialization"
          },
          {
            "id": "backend-t80-s10",
            "title": "Message keys"
          },
          {
            "id": "backend-t80-s11",
            "title": "Partition strategy"
          },
          {
            "id": "backend-t80-s12",
            "title": "Retry topics"
          },
          {
            "id": "backend-t80-s13",
            "title": "Dead-letter topics"
          },
          {
            "id": "backend-t80-s14",
            "title": "Idempotent consumers"
          },
          {
            "id": "backend-t80-s15",
            "title": "Kafka transactions"
          },
          {
            "id": "backend-t80-s16",
            "title": "Schema Registry"
          },
          {
            "id": "backend-t80-s17",
            "title": "Avro, JSON and Protobuf"
          },
          {
            "id": "backend-t80-s18",
            "title": "Spring for Apache Kafka"
          }
        ],
        "overview": "**Kafka** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Kafka broker, Topic, Partition, Producer, and 14 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t81",
        "number": 3,
        "title": "RabbitMQ",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t81-s1",
            "title": "Exchange"
          },
          {
            "id": "backend-t81-s2",
            "title": "Queue"
          },
          {
            "id": "backend-t81-s3",
            "title": "Binding"
          },
          {
            "id": "backend-t81-s4",
            "title": "Routing key"
          },
          {
            "id": "backend-t81-s5",
            "title": "Direct exchange"
          },
          {
            "id": "backend-t81-s6",
            "title": "Topic exchange"
          },
          {
            "id": "backend-t81-s7",
            "title": "Fanout exchange"
          },
          {
            "id": "backend-t81-s8",
            "title": "Headers exchange"
          },
          {
            "id": "backend-t81-s9",
            "title": "Publisher confirmation"
          },
          {
            "id": "backend-t81-s10",
            "title": "Consumer acknowledgement"
          },
          {
            "id": "backend-t81-s11",
            "title": "Dead-letter exchange"
          },
          {
            "id": "backend-t81-s12",
            "title": "Retry queues"
          },
          {
            "id": "backend-t81-s13",
            "title": "Spring AMQP"
          }
        ],
        "overview": "**RabbitMQ** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Exchange, Queue, Binding, Routing key, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t82",
        "number": 4,
        "title": "Event-Processing Patterns",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t82-s1",
            "title": "Idempotent consumer"
          },
          {
            "id": "backend-t82-s2",
            "title": "Transactional outbox"
          },
          {
            "id": "backend-t82-s3",
            "title": "Inbox pattern"
          },
          {
            "id": "backend-t82-s4",
            "title": "Dead-letter queue"
          },
          {
            "id": "backend-t82-s5",
            "title": "Retry with backoff"
          },
          {
            "id": "backend-t82-s6",
            "title": "Event versioning"
          },
          {
            "id": "backend-t82-s7",
            "title": "Schema evolution"
          },
          {
            "id": "backend-t82-s8",
            "title": "Poison messages"
          },
          {
            "id": "backend-t82-s9",
            "title": "Deduplication"
          },
          {
            "id": "backend-t82-s10",
            "title": "Eventual consistency"
          },
          {
            "id": "backend-t82-s11",
            "title": "Compensating actions"
          }
        ],
        "overview": "**Event-Processing Patterns** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Idempotent consumer, Transactional outbox, Inbox pattern, Dead-letter queue, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t83",
        "number": 5,
        "title": "Spring Cloud Stream",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t83-s1",
            "title": "Binder abstraction"
          },
          {
            "id": "backend-t83-s2",
            "title": "Functional programming model"
          },
          {
            "id": "backend-t83-s3",
            "title": "Supplier"
          },
          {
            "id": "backend-t83-s4",
            "title": "Function"
          },
          {
            "id": "backend-t83-s5",
            "title": "Consumer"
          },
          {
            "id": "backend-t83-s6",
            "title": "Bindings"
          },
          {
            "id": "backend-t83-s7",
            "title": "Consumer groups"
          },
          {
            "id": "backend-t83-s8",
            "title": "Partitioning"
          },
          {
            "id": "backend-t83-s9",
            "title": "Error channels"
          },
          {
            "id": "backend-t83-s10",
            "title": "Kafka binder"
          },
          {
            "id": "backend-t83-s11",
            "title": "Rabbit binder"
          }
        ],
        "overview": "Spring Cloud Stream provides abstractions for scalable event-driven microservices connected to shared messaging systems. ([Home][11])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 13,
    "title": "Scheduling and Batch Processing",
    "icon": "⚙️",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t84",
        "number": 1,
        "title": "Scheduling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t84-s1",
            "title": "`@EnableScheduling`"
          },
          {
            "id": "backend-t84-s2",
            "title": "`@Scheduled`"
          },
          {
            "id": "backend-t84-s3",
            "title": "Fixed rate"
          },
          {
            "id": "backend-t84-s4",
            "title": "Fixed delay"
          },
          {
            "id": "backend-t84-s5",
            "title": "Cron expressions"
          },
          {
            "id": "backend-t84-s6",
            "title": "Time zones"
          },
          {
            "id": "backend-t84-s7",
            "title": "Distributed scheduling problems"
          },
          {
            "id": "backend-t84-s8",
            "title": "Preventing duplicate execution"
          },
          {
            "id": "backend-t84-s9",
            "title": "ShedLock"
          },
          {
            "id": "backend-t84-s10",
            "title": "Quartz Scheduler"
          },
          {
            "id": "backend-t84-s11",
            "title": "Job retries"
          },
          {
            "id": "backend-t84-s12",
            "title": "Job monitoring"
          }
        ],
        "overview": "**Scheduling** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: `@EnableScheduling`, `@Scheduled`, Fixed rate, Fixed delay, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t85",
        "number": 2,
        "title": "Asynchronous Execution",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t85-s1",
            "title": "`@EnableAsync`"
          },
          {
            "id": "backend-t85-s2",
            "title": "`@Async`"
          },
          {
            "id": "backend-t85-s3",
            "title": "Task executor"
          },
          {
            "id": "backend-t85-s4",
            "title": "Thread pools"
          },
          {
            "id": "backend-t85-s5",
            "title": "Exception handling"
          },
          {
            "id": "backend-t85-s6",
            "title": "Context propagation"
          },
          {
            "id": "backend-t85-s7",
            "title": "Transaction boundaries"
          },
          {
            "id": "backend-t85-s8",
            "title": "Self-invocation limitation"
          },
          {
            "id": "backend-t85-s9",
            "title": "Virtual-thread executors"
          },
          {
            "id": "backend-t85-s10",
            "title": "When messaging is better than `@Async`"
          }
        ],
        "overview": "**Asynchronous Execution** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: `@EnableAsync`, `@Async`, Task executor, Thread pools, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t86",
        "number": 3,
        "title": "Spring Batch",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t86-s1",
            "title": "Job"
          },
          {
            "id": "backend-t86-s2",
            "title": "Step"
          },
          {
            "id": "backend-t86-s3",
            "title": "Job instance"
          },
          {
            "id": "backend-t86-s4",
            "title": "Job execution"
          },
          {
            "id": "backend-t86-s5",
            "title": "Step execution"
          },
          {
            "id": "backend-t86-s6",
            "title": "Job parameters"
          },
          {
            "id": "backend-t86-s7",
            "title": "Item reader"
          },
          {
            "id": "backend-t86-s8",
            "title": "Item processor"
          },
          {
            "id": "backend-t86-s9",
            "title": "Item writer"
          },
          {
            "id": "backend-t86-s10",
            "title": "Chunk-oriented processing"
          },
          {
            "id": "backend-t86-s11",
            "title": "Tasklet"
          },
          {
            "id": "backend-t86-s12",
            "title": "Skip"
          },
          {
            "id": "backend-t86-s13",
            "title": "Retry"
          },
          {
            "id": "backend-t86-s14",
            "title": "Restart"
          },
          {
            "id": "backend-t86-s15",
            "title": "Partitioning"
          },
          {
            "id": "backend-t86-s16",
            "title": "Parallel steps"
          },
          {
            "id": "backend-t86-s17",
            "title": "Job repository"
          },
          {
            "id": "backend-t86-s18",
            "title": "Job launcher"
          },
          {
            "id": "backend-t86-s19",
            "title": "Job monitoring"
          }
        ],
        "overview": "Spring Batch is intended for high-volume processing and supports chunk processing, transactions, restart, retry, skip and partitioning. ([Home][12])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 14,
    "title": "Reactive Spring",
    "icon": "⚙️",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "Reactive programming is useful for specific workloads. It should not automatically replace Spring MVC.",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t87",
        "number": 1,
        "title": "Reactive Foundations",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t87-s1",
            "title": "Blocking versus non-blocking"
          },
          {
            "id": "backend-t87-s2",
            "title": "Synchronous versus asynchronous"
          },
          {
            "id": "backend-t87-s3",
            "title": "Event loops"
          },
          {
            "id": "backend-t87-s4",
            "title": "Backpressure"
          },
          {
            "id": "backend-t87-s5",
            "title": "Reactive Streams specification"
          },
          {
            "id": "backend-t87-s6",
            "title": "Publisher"
          },
          {
            "id": "backend-t87-s7",
            "title": "Subscriber"
          },
          {
            "id": "backend-t87-s8",
            "title": "Subscription"
          },
          {
            "id": "backend-t87-s9",
            "title": "Operator chains"
          }
        ],
        "overview": "**Reactive Foundations** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Blocking versus non-blocking, Synchronous versus asynchronous, Event loops, Backpressure, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t88",
        "number": 2,
        "title": "Project Reactor",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t88-s1",
            "title": "`Mono`"
          },
          {
            "id": "backend-t88-s2",
            "title": "`Flux`"
          },
          {
            "id": "backend-t88-s3",
            "title": "`map`"
          },
          {
            "id": "backend-t88-s4",
            "title": "`flatMap`"
          },
          {
            "id": "backend-t88-s5",
            "title": "`filter`"
          },
          {
            "id": "backend-t88-s6",
            "title": "`zip`"
          },
          {
            "id": "backend-t88-s7",
            "title": "`concat`"
          },
          {
            "id": "backend-t88-s8",
            "title": "Error handling"
          },
          {
            "id": "backend-t88-s9",
            "title": "Retry"
          },
          {
            "id": "backend-t88-s10",
            "title": "Schedulers"
          },
          {
            "id": "backend-t88-s11",
            "title": "Hot and cold publishers"
          },
          {
            "id": "backend-t88-s12",
            "title": "Context propagation"
          },
          {
            "id": "backend-t88-s13",
            "title": "Blocking detection"
          },
          {
            "id": "backend-t88-s14",
            "title": "StepVerifier"
          }
        ],
        "overview": "**Project Reactor** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: `Mono`, `Flux`, `map`, `flatMap`, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t89",
        "number": 3,
        "title": "Spring WebFlux",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t89-s1",
            "title": "Reactive controllers"
          },
          {
            "id": "backend-t89-s2",
            "title": "Functional endpoints"
          },
          {
            "id": "backend-t89-s3",
            "title": "WebClient"
          },
          {
            "id": "backend-t89-s4",
            "title": "Reactive filters"
          },
          {
            "id": "backend-t89-s5",
            "title": "Reactive security"
          },
          {
            "id": "backend-t89-s6",
            "title": "Reactive database access"
          },
          {
            "id": "backend-t89-s7",
            "title": "R2DBC"
          },
          {
            "id": "backend-t89-s8",
            "title": "Server-sent events"
          },
          {
            "id": "backend-t89-s9",
            "title": "Streaming"
          },
          {
            "id": "backend-t89-s10",
            "title": "Backpressure limitations across HTTP"
          }
        ],
        "overview": "**Spring WebFlux** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Reactive controllers, Functional endpoints, WebClient, Reactive filters, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t90",
        "number": 4,
        "title": "When to Use WebFlux",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**When to Use WebFlux** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "High numbers of concurrent I/O operations are expected",
          "Downstream dependencies are non-blocking",
          "Streaming is central to the system",
          "The team understands reactive debugging and operations",
          "The application is mostly traditional CRUD",
          "JDBC is the primary data-access method",
          "The team is unfamiliar with reactive programming",
          "Blocking libraries dominate the application"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 15,
    "title": "Real-Time Communication",
    "icon": "⚙️",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t91",
        "number": 1,
        "title": "WebSocket",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t91-s1",
            "title": "WebSocket handshake"
          },
          {
            "id": "backend-t91-s2",
            "title": "Full-duplex communication"
          },
          {
            "id": "backend-t91-s3",
            "title": "Native WebSocket"
          },
          {
            "id": "backend-t91-s4",
            "title": "STOMP"
          },
          {
            "id": "backend-t91-s5",
            "title": "Message broker"
          },
          {
            "id": "backend-t91-s6",
            "title": "Topics"
          },
          {
            "id": "backend-t91-s7",
            "title": "User destinations"
          },
          {
            "id": "backend-t91-s8",
            "title": "WebSocket authentication"
          },
          {
            "id": "backend-t91-s9",
            "title": "WebSocket authorization"
          },
          {
            "id": "backend-t91-s10",
            "title": "Horizontal scaling"
          },
          {
            "id": "backend-t91-s11",
            "title": "Redis or broker-based fan-out"
          }
        ],
        "overview": "**WebSocket** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: WebSocket handshake, Full-duplex communication, Native WebSocket, STOMP, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t92",
        "number": 2,
        "title": "Server-Sent Events",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t92-s1",
            "title": "SSE connection"
          },
          {
            "id": "backend-t92-s2",
            "title": "Event stream"
          },
          {
            "id": "backend-t92-s3",
            "title": "Reconnection"
          },
          {
            "id": "backend-t92-s4",
            "title": "Event IDs"
          },
          {
            "id": "backend-t92-s5",
            "title": "Heartbeats"
          },
          {
            "id": "backend-t92-s6",
            "title": "Streaming notifications"
          },
          {
            "id": "backend-t92-s7",
            "title": "SSE versus WebSocket"
          }
        ],
        "overview": "**Server-Sent Events** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: SSE connection, Event stream, Reconnection, Event IDs, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 16,
    "title": "Alternative API Technologies",
    "icon": "⚙️",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t93",
        "number": 1,
        "title": "GraphQL",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "backend-t93-s1",
            "title": "GraphQL schema"
          },
          {
            "id": "backend-t93-s2",
            "title": "Queries"
          },
          {
            "id": "backend-t93-s3",
            "title": "Mutations"
          },
          {
            "id": "backend-t93-s4",
            "title": "Subscriptions"
          },
          {
            "id": "backend-t93-s5",
            "title": "Resolvers"
          },
          {
            "id": "backend-t93-s6",
            "title": "Data fetchers"
          },
          {
            "id": "backend-t93-s7",
            "title": "Input types"
          },
          {
            "id": "backend-t93-s8",
            "title": "Pagination"
          },
          {
            "id": "backend-t93-s9",
            "title": "Validation"
          },
          {
            "id": "backend-t93-s10",
            "title": "Error handling"
          },
          {
            "id": "backend-t93-s11",
            "title": "N+1 queries"
          },
          {
            "id": "backend-t93-s12",
            "title": "DataLoader"
          },
          {
            "id": "backend-t93-s13",
            "title": "GraphQL security"
          },
          {
            "id": "backend-t93-s14",
            "title": "Query-depth limits"
          },
          {
            "id": "backend-t93-s15",
            "title": "Query-complexity limits"
          }
        ],
        "overview": "Spring for GraphQL integrates Spring applications with GraphQL Java. ([Home][13])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t94",
        "number": 2,
        "title": "gRPC",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "backend-t94-s1",
            "title": "Protocol Buffers"
          },
          {
            "id": "backend-t94-s2",
            "title": "Service definition"
          },
          {
            "id": "backend-t94-s3",
            "title": "Unary calls"
          },
          {
            "id": "backend-t94-s4",
            "title": "Server streaming"
          },
          {
            "id": "backend-t94-s5",
            "title": "Client streaming"
          },
          {
            "id": "backend-t94-s6",
            "title": "Bidirectional streaming"
          },
          {
            "id": "backend-t94-s7",
            "title": "Deadlines"
          },
          {
            "id": "backend-t94-s8",
            "title": "Metadata"
          },
          {
            "id": "backend-t94-s9",
            "title": "Interceptors"
          },
          {
            "id": "backend-t94-s10",
            "title": "Error codes"
          },
          {
            "id": "backend-t94-s11",
            "title": "Service-to-service communication"
          },
          {
            "id": "backend-t94-s12",
            "title": "REST versus gRPC"
          }
        ],
        "overview": "**gRPC** is an advanced topic that requires solid foundational knowledge and is critical for senior-level work in the **Backend** roadmap.\n\nIn this topic you will study: Protocol Buffers, Service definition, Unary calls, Server streaming, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t95",
        "number": 3,
        "title": "Spring HATEOAS",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "backend-t95-s1",
            "title": "Hypermedia"
          },
          {
            "id": "backend-t95-s2",
            "title": "Resource links"
          },
          {
            "id": "backend-t95-s3",
            "title": "Representation models"
          },
          {
            "id": "backend-t95-s4",
            "title": "Link relations"
          },
          {
            "id": "backend-t95-s5",
            "title": "Collection models"
          },
          {
            "id": "backend-t95-s6",
            "title": "Discoverable APIs"
          },
          {
            "id": "backend-t95-s7",
            "title": "When HATEOAS adds value"
          }
        ],
        "overview": "**Spring HATEOAS** is an advanced topic that requires solid foundational knowledge and is critical for senior-level work in the **Backend** roadmap.\n\nIn this topic you will study: Hypermedia, Resource links, Representation models, Link relations, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 17,
    "title": "Application Architecture",
    "icon": "⚙️",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t96",
        "number": 1,
        "title": "Layered Architecture",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t96-s1",
            "title": "Controller responsibilities"
          },
          {
            "id": "backend-t96-s2",
            "title": "Service responsibilities"
          },
          {
            "id": "backend-t96-s3",
            "title": "Repository responsibilities"
          },
          {
            "id": "backend-t96-s4",
            "title": "Entity responsibilities"
          },
          {
            "id": "backend-t96-s5",
            "title": "DTO responsibilities"
          },
          {
            "id": "backend-t96-s6",
            "title": "Mapper responsibilities"
          },
          {
            "id": "backend-t96-s7",
            "title": "Boundary enforcement"
          },
          {
            "id": "backend-t96-s8",
            "title": "Avoiding business logic in controllers"
          },
          {
            "id": "backend-t96-s9",
            "title": "Avoiding god services"
          }
        ],
        "overview": "**Layered Architecture** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Controller responsibilities, Service responsibilities, Repository responsibilities, Entity responsibilities, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "Controller\n    ↓\nApplication Service\n    ↓\nDomain\n    ↓\nRepository\n    ↓\nDatabase",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Controller\n    ↓\nApplication Service\n    ↓\nDomain\n    ↓\nRepository\n    ↓\nDatabase",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t97",
        "number": 2,
        "title": "Package Organization",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "For larger applications, prefer organizing primarily by **business feature or domain**.",
        "codeExample": "controller/\nservice/\nrepository/\nentity/\ndto/",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "controller/\nservice/\nrepository/\nentity/\ndto/",
            "caption": ""
          },
          {
            "lang": "text",
            "code": "user/\norder/\npayment/\ninventory/",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Package by layer",
            "items": []
          },
          {
            "title": "Package by feature",
            "items": []
          }
        ],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t98",
        "number": 3,
        "title": "Domain-Driven Design",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t98-s1",
            "title": "Domain"
          },
          {
            "id": "backend-t98-s2",
            "title": "Subdomain"
          },
          {
            "id": "backend-t98-s3",
            "title": "Bounded context"
          },
          {
            "id": "backend-t98-s4",
            "title": "Ubiquitous language"
          },
          {
            "id": "backend-t98-s5",
            "title": "Entity"
          },
          {
            "id": "backend-t98-s6",
            "title": "Value object"
          },
          {
            "id": "backend-t98-s7",
            "title": "Aggregate"
          },
          {
            "id": "backend-t98-s8",
            "title": "Aggregate root"
          },
          {
            "id": "backend-t98-s9",
            "title": "Domain service"
          },
          {
            "id": "backend-t98-s10",
            "title": "Application service"
          },
          {
            "id": "backend-t98-s11",
            "title": "Repository"
          },
          {
            "id": "backend-t98-s12",
            "title": "Domain event"
          },
          {
            "id": "backend-t98-s13",
            "title": "Anti-corruption layer"
          },
          {
            "id": "backend-t98-s14",
            "title": "Context mapping"
          }
        ],
        "overview": "**Domain-Driven Design** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Domain, Subdomain, Bounded context, Ubiquitous language, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t99",
        "number": 4,
        "title": "Clean and Hexagonal Architecture",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t99-s1",
            "title": "Domain layer"
          },
          {
            "id": "backend-t99-s2",
            "title": "Application layer"
          },
          {
            "id": "backend-t99-s3",
            "title": "Infrastructure layer"
          },
          {
            "id": "backend-t99-s4",
            "title": "Ports"
          },
          {
            "id": "backend-t99-s5",
            "title": "Adapters"
          },
          {
            "id": "backend-t99-s6",
            "title": "Use cases"
          },
          {
            "id": "backend-t99-s7",
            "title": "Dependency direction"
          },
          {
            "id": "backend-t99-s8",
            "title": "Framework-independent domain logic"
          },
          {
            "id": "backend-t99-s9",
            "title": "Persistence adapters"
          },
          {
            "id": "backend-t99-s10",
            "title": "Web adapters"
          },
          {
            "id": "backend-t99-s11",
            "title": "Messaging adapters"
          }
        ],
        "overview": "**Clean and Hexagonal Architecture** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Domain layer, Application layer, Infrastructure layer, Ports, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t100",
        "number": 5,
        "title": "SOLID Principles",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t100-s1",
            "title": "Single Responsibility Principle"
          },
          {
            "id": "backend-t100-s2",
            "title": "Open/Closed Principle"
          },
          {
            "id": "backend-t100-s3",
            "title": "Liskov Substitution Principle"
          },
          {
            "id": "backend-t100-s4",
            "title": "Interface Segregation Principle"
          },
          {
            "id": "backend-t100-s5",
            "title": "Dependency Inversion Principle"
          }
        ],
        "overview": "**SOLID Principles** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t101",
        "number": 6,
        "title": "Design Patterns",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t101-s1",
            "title": "Factory"
          },
          {
            "id": "backend-t101-s2",
            "title": "Builder"
          },
          {
            "id": "backend-t101-s3",
            "title": "Abstract Factory"
          },
          {
            "id": "backend-t101-s4",
            "title": "Prototype"
          },
          {
            "id": "backend-t101-s5",
            "title": "Singleton and its limitations"
          },
          {
            "id": "backend-t101-s6",
            "title": "Adapter"
          },
          {
            "id": "backend-t101-s7",
            "title": "Decorator"
          },
          {
            "id": "backend-t101-s8",
            "title": "Facade"
          },
          {
            "id": "backend-t101-s9",
            "title": "Proxy"
          },
          {
            "id": "backend-t101-s10",
            "title": "Composite"
          },
          {
            "id": "backend-t101-s11",
            "title": "Strategy"
          },
          {
            "id": "backend-t101-s12",
            "title": "Observer"
          },
          {
            "id": "backend-t101-s13",
            "title": "Template Method"
          },
          {
            "id": "backend-t101-s14",
            "title": "Command"
          },
          {
            "id": "backend-t101-s15",
            "title": "State"
          },
          {
            "id": "backend-t101-s16",
            "title": "Chain of Responsibility"
          },
          {
            "id": "backend-t101-s17",
            "title": "Repository"
          },
          {
            "id": "backend-t101-s18",
            "title": "Unit of Work"
          },
          {
            "id": "backend-t101-s19",
            "title": "Service Layer"
          },
          {
            "id": "backend-t101-s20",
            "title": "DTO"
          },
          {
            "id": "backend-t101-s21",
            "title": "Transaction Script"
          },
          {
            "id": "backend-t101-s22",
            "title": "Domain Model"
          },
          {
            "id": "backend-t101-s23",
            "title": "Data Mapper"
          },
          {
            "id": "backend-t101-s24",
            "title": "Specification"
          }
        ],
        "overview": "**Design Patterns** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Factory, Builder, Abstract Factory, Prototype, and 20 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Creational",
            "items": [
              "Factory",
              "Builder",
              "Abstract Factory",
              "Prototype",
              "Singleton and its limitations"
            ]
          },
          {
            "title": "Structural",
            "items": [
              "Adapter",
              "Decorator",
              "Facade",
              "Proxy",
              "Composite"
            ]
          },
          {
            "title": "Behavioral",
            "items": [
              "Strategy",
              "Observer",
              "Template Method",
              "Command",
              "State",
              "Chain of Responsibility"
            ]
          },
          {
            "title": "Enterprise patterns",
            "items": [
              "Repository",
              "Unit of Work",
              "Service Layer",
              "DTO",
              "Transaction Script",
              "Domain Model",
              "Data Mapper",
              "Specification"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t102",
        "number": 7,
        "title": "Spring Modulith",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t102-s1",
            "title": "Modular monolith"
          },
          {
            "id": "backend-t102-s2",
            "title": "Application modules"
          },
          {
            "id": "backend-t102-s3",
            "title": "Module boundaries"
          },
          {
            "id": "backend-t102-s4",
            "title": "Module dependencies"
          },
          {
            "id": "backend-t102-s5",
            "title": "Domain events"
          },
          {
            "id": "backend-t102-s6",
            "title": "Event publication registry"
          },
          {
            "id": "backend-t102-s7",
            "title": "Module integration testing"
          },
          {
            "id": "backend-t102-s8",
            "title": "Architecture verification"
          },
          {
            "id": "backend-t102-s9",
            "title": "Module documentation"
          },
          {
            "id": "backend-t102-s10",
            "title": "Extracting services later"
          }
        ],
        "overview": "Spring Modulith helps developers structure Spring Boot applications around domain-driven application modules. ([Home][1])\n\nA **modular monolith** should generally be learned before microservices.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 18,
    "title": "Microservices and Spring Cloud",
    "icon": "⚙️",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "Spring Cloud supports common distributed-system patterns such as configuration management, service discovery, circuit breakers and intelligent routing. ([Home][14])",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t103",
        "number": 1,
        "title": "Microservice Fundamentals",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t103-s1",
            "title": "Monolith"
          },
          {
            "id": "backend-t103-s2",
            "title": "Modular monolith"
          },
          {
            "id": "backend-t103-s3",
            "title": "Microservices"
          },
          {
            "id": "backend-t103-s4",
            "title": "Service boundaries"
          },
          {
            "id": "backend-t103-s5",
            "title": "Independent deployment"
          },
          {
            "id": "backend-t103-s6",
            "title": "Database per service"
          },
          {
            "id": "backend-t103-s7",
            "title": "Distributed communication"
          },
          {
            "id": "backend-t103-s8",
            "title": "Operational complexity"
          },
          {
            "id": "backend-t103-s9",
            "title": "Team ownership"
          },
          {
            "id": "backend-t103-s10",
            "title": "Service autonomy"
          },
          {
            "id": "backend-t103-s11",
            "title": "Microservice fallacies"
          }
        ],
        "overview": "**Microservice Fundamentals** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Monolith, Modular monolith, Microservices, Service boundaries, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t104",
        "number": 2,
        "title": "Service Communication",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t104-s1",
            "title": "REST"
          },
          {
            "id": "backend-t104-s2",
            "title": "gRPC"
          },
          {
            "id": "backend-t104-s3",
            "title": "Messaging"
          },
          {
            "id": "backend-t104-s4",
            "title": "Request-response"
          },
          {
            "id": "backend-t104-s5",
            "title": "Event-driven communication"
          },
          {
            "id": "backend-t104-s6",
            "title": "Synchronous coupling"
          },
          {
            "id": "backend-t104-s7",
            "title": "Temporal coupling"
          },
          {
            "id": "backend-t104-s8",
            "title": "API contracts"
          },
          {
            "id": "backend-t104-s9",
            "title": "Versioning"
          },
          {
            "id": "backend-t104-s10",
            "title": "Timeouts"
          },
          {
            "id": "backend-t104-s11",
            "title": "Retries"
          },
          {
            "id": "backend-t104-s12",
            "title": "Correlation IDs"
          }
        ],
        "overview": "**Service Communication** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: REST, gRPC, Messaging, Request-response, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t105",
        "number": 3,
        "title": "Spring Cloud Config",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t105-s1",
            "title": "Config server"
          },
          {
            "id": "backend-t105-s2",
            "title": "Config client"
          },
          {
            "id": "backend-t105-s3",
            "title": "Git-backed configuration"
          },
          {
            "id": "backend-t105-s4",
            "title": "Profile configuration"
          },
          {
            "id": "backend-t105-s5",
            "title": "Refreshing configuration"
          },
          {
            "id": "backend-t105-s6",
            "title": "Encryption"
          },
          {
            "id": "backend-t105-s7",
            "title": "Secret-management limitations"
          },
          {
            "id": "backend-t105-s8",
            "title": "Highly available configuration"
          }
        ],
        "overview": "**Spring Cloud Config** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Config server, Config client, Git-backed configuration, Profile configuration, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t106",
        "number": 4,
        "title": "Service Discovery",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t106-s1",
            "title": "Client-side discovery"
          },
          {
            "id": "backend-t106-s2",
            "title": "Server-side discovery"
          },
          {
            "id": "backend-t106-s3",
            "title": "Service registry"
          },
          {
            "id": "backend-t106-s4",
            "title": "Eureka concepts"
          },
          {
            "id": "backend-t106-s5",
            "title": "Consul concepts"
          },
          {
            "id": "backend-t106-s6",
            "title": "Kubernetes-native discovery"
          },
          {
            "id": "backend-t106-s7",
            "title": "DNS-based discovery"
          },
          {
            "id": "backend-t106-s8",
            "title": "Health-aware routing"
          }
        ],
        "overview": "**Service Discovery** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Client-side discovery, Server-side discovery, Service registry, Eureka concepts, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t107",
        "number": 5,
        "title": "API Gateway",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t107-s1",
            "title": "Route"
          },
          {
            "id": "backend-t107-s2",
            "title": "Predicate"
          },
          {
            "id": "backend-t107-s3",
            "title": "Gateway filter"
          },
          {
            "id": "backend-t107-s4",
            "title": "Global filter"
          },
          {
            "id": "backend-t107-s5",
            "title": "Authentication"
          },
          {
            "id": "backend-t107-s6",
            "title": "Authorization"
          },
          {
            "id": "backend-t107-s7",
            "title": "Rate limiting"
          },
          {
            "id": "backend-t107-s8",
            "title": "Header transformation"
          },
          {
            "id": "backend-t107-s9",
            "title": "Request rewriting"
          },
          {
            "id": "backend-t107-s10",
            "title": "Response rewriting"
          },
          {
            "id": "backend-t107-s11",
            "title": "Circuit breakers"
          },
          {
            "id": "backend-t107-s12",
            "title": "CORS"
          },
          {
            "id": "backend-t107-s13",
            "title": "Gateway observability"
          },
          {
            "id": "backend-t107-s14",
            "title": "Avoiding business logic in the gateway"
          }
        ],
        "overview": "Spring Cloud Gateway supports API routing and cross-cutting concerns such as security, monitoring and resiliency. ([Home][15])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t108",
        "number": 6,
        "title": "Distributed Data",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t108-s1",
            "title": "Database per service"
          },
          {
            "id": "backend-t108-s2",
            "title": "Eventual consistency"
          },
          {
            "id": "backend-t108-s3",
            "title": "Distributed transactions"
          },
          {
            "id": "backend-t108-s4",
            "title": "Two-phase commit limitations"
          },
          {
            "id": "backend-t108-s5",
            "title": "Saga pattern"
          },
          {
            "id": "backend-t108-s6",
            "title": "Choreography"
          },
          {
            "id": "backend-t108-s7",
            "title": "Orchestration"
          },
          {
            "id": "backend-t108-s8",
            "title": "Transactional outbox"
          },
          {
            "id": "backend-t108-s9",
            "title": "Change data capture"
          },
          {
            "id": "backend-t108-s10",
            "title": "CQRS"
          },
          {
            "id": "backend-t108-s11",
            "title": "Event sourcing"
          },
          {
            "id": "backend-t108-s12",
            "title": "Materialized views"
          }
        ],
        "overview": "**Distributed Data** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Database per service, Eventual consistency, Distributed transactions, Two-phase commit limitations, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t109",
        "number": 7,
        "title": "Resilient Microservices",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t109-s1",
            "title": "Timeouts"
          },
          {
            "id": "backend-t109-s2",
            "title": "Retries"
          },
          {
            "id": "backend-t109-s3",
            "title": "Circuit breakers"
          },
          {
            "id": "backend-t109-s4",
            "title": "Bulkheads"
          },
          {
            "id": "backend-t109-s5",
            "title": "Load shedding"
          },
          {
            "id": "backend-t109-s6",
            "title": "Backpressure"
          },
          {
            "id": "backend-t109-s7",
            "title": "Fallbacks"
          },
          {
            "id": "backend-t109-s8",
            "title": "Idempotency"
          },
          {
            "id": "backend-t109-s9",
            "title": "Dead-letter queues"
          },
          {
            "id": "backend-t109-s10",
            "title": "Graceful degradation"
          },
          {
            "id": "backend-t109-s11",
            "title": "Chaos testing"
          }
        ],
        "overview": "**Resilient Microservices** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Timeouts, Retries, Circuit breakers, Bulkheads, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t110",
        "number": 8,
        "title": "Distributed Observability",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t110-s1",
            "title": "Centralized logging"
          },
          {
            "id": "backend-t110-s2",
            "title": "Trace propagation"
          },
          {
            "id": "backend-t110-s3",
            "title": "Service metrics"
          },
          {
            "id": "backend-t110-s4",
            "title": "Dependency maps"
          },
          {
            "id": "backend-t110-s5",
            "title": "Correlation IDs"
          },
          {
            "id": "backend-t110-s6",
            "title": "OpenTelemetry Collector"
          },
          {
            "id": "backend-t110-s7",
            "title": "Prometheus"
          },
          {
            "id": "backend-t110-s8",
            "title": "Grafana"
          },
          {
            "id": "backend-t110-s9",
            "title": "Loki"
          },
          {
            "id": "backend-t110-s10",
            "title": "Elasticsearch/OpenSearch"
          },
          {
            "id": "backend-t110-s11",
            "title": "Tempo"
          },
          {
            "id": "backend-t110-s12",
            "title": "Jaeger"
          },
          {
            "id": "backend-t110-s13",
            "title": "Zipkin"
          }
        ],
        "overview": "**Distributed Observability** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Centralized logging, Trace propagation, Service metrics, Dependency maps, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t111",
        "number": 9,
        "title": "Microservice Security",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t111-s1",
            "title": "Central identity provider"
          },
          {
            "id": "backend-t111-s2",
            "title": "OAuth2"
          },
          {
            "id": "backend-t111-s3",
            "title": "OpenID Connect"
          },
          {
            "id": "backend-t111-s4",
            "title": "Resource servers"
          },
          {
            "id": "backend-t111-s5",
            "title": "Token propagation"
          },
          {
            "id": "backend-t111-s6",
            "title": "Service accounts"
          },
          {
            "id": "backend-t111-s7",
            "title": "Client Credentials flow"
          },
          {
            "id": "backend-t111-s8",
            "title": "Mutual TLS"
          },
          {
            "id": "backend-t111-s9",
            "title": "Network policies"
          },
          {
            "id": "backend-t111-s10",
            "title": "Secrets"
          },
          {
            "id": "backend-t111-s11",
            "title": "Zero-trust service communication"
          }
        ],
        "overview": "**Microservice Security** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Central identity provider, OAuth2, OpenID Connect, Resource servers, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 19,
    "title": "Spring AI",
    "icon": "⚙️",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "Spring AI 2.0 provides abstractions for AI providers, chat and embedding models, vector stores, structured outputs, tool calling, RAG, chat memory, evaluation, observability and Model Context Protocol integrations. ([Home][16]) Do not start Spring AI before you can build a secure, tested Spring Boot REST application.",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t112",
        "number": 1,
        "title": "AI Foundations for AI Specialization",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t112-s1",
            "title": "Artificial intelligence"
          },
          {
            "id": "backend-t112-s2",
            "title": "Machine learning"
          },
          {
            "id": "backend-t112-s3",
            "title": "Generative AI"
          },
          {
            "id": "backend-t112-s4",
            "title": "Large language models"
          },
          {
            "id": "backend-t112-s5",
            "title": "Tokens"
          },
          {
            "id": "backend-t112-s6",
            "title": "Context windows"
          },
          {
            "id": "backend-t112-s7",
            "title": "Temperature"
          },
          {
            "id": "backend-t112-s8",
            "title": "Top-p"
          },
          {
            "id": "backend-t112-s9",
            "title": "Hallucinations"
          },
          {
            "id": "backend-t112-s10",
            "title": "Embeddings"
          },
          {
            "id": "backend-t112-s11",
            "title": "Vector similarity"
          },
          {
            "id": "backend-t112-s12",
            "title": "Cosine similarity"
          },
          {
            "id": "backend-t112-s13",
            "title": "Prompt engineering"
          },
          {
            "id": "backend-t112-s14",
            "title": "Retrieval-Augmented Generation"
          },
          {
            "id": "backend-t112-s15",
            "title": "Tool calling"
          },
          {
            "id": "backend-t112-s16",
            "title": "AI agents"
          },
          {
            "id": "backend-t112-s17",
            "title": "Model evaluation"
          },
          {
            "id": "backend-t112-s18",
            "title": "AI safety"
          }
        ],
        "overview": "**AI Foundations for AI Specialization** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Artificial intelligence, Machine learning, Generative AI, Large language models, and 14 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t113",
        "number": 2,
        "title": "Spring AI Setup",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t113-s1",
            "title": "Spring AI BOM"
          },
          {
            "id": "backend-t113-s2",
            "title": "Spring Boot starters"
          },
          {
            "id": "backend-t113-s3",
            "title": "Provider configuration"
          },
          {
            "id": "backend-t113-s4",
            "title": "API-key configuration"
          },
          {
            "id": "backend-t113-s5",
            "title": "Environment variables"
          },
          {
            "id": "backend-t113-s6",
            "title": "Secret management"
          },
          {
            "id": "backend-t113-s7",
            "title": "Model configuration"
          },
          {
            "id": "backend-t113-s8",
            "title": "Timeout configuration"
          },
          {
            "id": "backend-t113-s9",
            "title": "Retry configuration"
          },
          {
            "id": "backend-t113-s10",
            "title": "Local models"
          },
          {
            "id": "backend-t113-s11",
            "title": "Ollama integration"
          },
          {
            "id": "backend-t113-s12",
            "title": "Cloud-model integration"
          }
        ],
        "overview": "**Spring AI Setup** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Spring AI BOM, Spring Boot starters, Provider configuration, API-key configuration, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t114",
        "number": 3,
        "title": "Chat Model API",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t114-s1",
            "title": "Chat model"
          },
          {
            "id": "backend-t114-s2",
            "title": "Prompt"
          },
          {
            "id": "backend-t114-s3",
            "title": "User message"
          },
          {
            "id": "backend-t114-s4",
            "title": "System message"
          },
          {
            "id": "backend-t114-s5",
            "title": "Assistant message"
          },
          {
            "id": "backend-t114-s6",
            "title": "Chat response"
          },
          {
            "id": "backend-t114-s7",
            "title": "Generation metadata"
          },
          {
            "id": "backend-t114-s8",
            "title": "Synchronous calls"
          },
          {
            "id": "backend-t114-s9",
            "title": "Streaming calls"
          },
          {
            "id": "backend-t114-s10",
            "title": "Model options"
          },
          {
            "id": "backend-t114-s11",
            "title": "Token usage"
          },
          {
            "id": "backend-t114-s12",
            "title": "Finish reasons"
          }
        ],
        "overview": "Spring AI offers a portable Chat Model API that makes it easier to switch between supported model providers. ([Home][17])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t115",
        "number": 4,
        "title": "ChatClient",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t115-s1",
            "title": "Fluent ChatClient API"
          },
          {
            "id": "backend-t115-s2",
            "title": "Default system prompts"
          },
          {
            "id": "backend-t115-s3",
            "title": "User prompts"
          },
          {
            "id": "backend-t115-s4",
            "title": "Prompt parameters"
          },
          {
            "id": "backend-t115-s5",
            "title": "Streaming responses"
          },
          {
            "id": "backend-t115-s6",
            "title": "Structured responses"
          },
          {
            "id": "backend-t115-s7",
            "title": "Advisors"
          },
          {
            "id": "backend-t115-s8",
            "title": "Request intercepting"
          },
          {
            "id": "backend-t115-s9",
            "title": "Response processing"
          },
          {
            "id": "backend-t115-s10",
            "title": "Error handling"
          }
        ],
        "overview": "**ChatClient** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Fluent ChatClient API, Default system prompts, User prompts, Prompt parameters, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t116",
        "number": 5,
        "title": "Prompt Engineering",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t116-s1",
            "title": "System instructions"
          },
          {
            "id": "backend-t116-s2",
            "title": "Role prompting"
          },
          {
            "id": "backend-t116-s3",
            "title": "Few-shot prompting"
          },
          {
            "id": "backend-t116-s4",
            "title": "Prompt templates"
          },
          {
            "id": "backend-t116-s5",
            "title": "Prompt variables"
          },
          {
            "id": "backend-t116-s6",
            "title": "Context injection"
          },
          {
            "id": "backend-t116-s7",
            "title": "Output constraints"
          },
          {
            "id": "backend-t116-s8",
            "title": "Delimiters"
          },
          {
            "id": "backend-t116-s9",
            "title": "Prompt versioning"
          },
          {
            "id": "backend-t116-s10",
            "title": "Prompt testing"
          },
          {
            "id": "backend-t116-s11",
            "title": "Prompt-injection defense"
          },
          {
            "id": "backend-t116-s12",
            "title": "Separating trusted and untrusted content"
          }
        ],
        "overview": "**Prompt Engineering** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: System instructions, Role prompting, Few-shot prompting, Prompt templates, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t117",
        "number": 6,
        "title": "Structured Output",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t117-s1",
            "title": "Mapping model output to Java classes"
          },
          {
            "id": "backend-t117-s2",
            "title": "Mapping output to records"
          },
          {
            "id": "backend-t117-s3",
            "title": "JSON schema"
          },
          {
            "id": "backend-t117-s4",
            "title": "Validation"
          },
          {
            "id": "backend-t117-s5",
            "title": "Retry on invalid output"
          },
          {
            "id": "backend-t117-s6",
            "title": "Enum restrictions"
          },
          {
            "id": "backend-t117-s7",
            "title": "Nested objects"
          },
          {
            "id": "backend-t117-s8",
            "title": "Structured extraction"
          },
          {
            "id": "backend-t117-s9",
            "title": "Avoiding unsafe free-form parsing"
          }
        ],
        "overview": "**Structured Output** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Mapping model output to Java classes, Mapping output to records, JSON schema, Validation, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t118",
        "number": 7,
        "title": "Embedding Models",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t118-s1",
            "title": "Text embeddings"
          },
          {
            "id": "backend-t118-s2",
            "title": "Embedding dimensions"
          },
          {
            "id": "backend-t118-s3",
            "title": "Chunk embeddings"
          },
          {
            "id": "backend-t118-s4",
            "title": "Query embeddings"
          },
          {
            "id": "backend-t118-s5",
            "title": "Document embeddings"
          },
          {
            "id": "backend-t118-s6",
            "title": "Similarity"
          },
          {
            "id": "backend-t118-s7",
            "title": "Normalization"
          },
          {
            "id": "backend-t118-s8",
            "title": "Embedding-model migration"
          },
          {
            "id": "backend-t118-s9",
            "title": "Re-indexing requirements"
          }
        ],
        "overview": "**Embedding Models** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Text embeddings, Embedding dimensions, Chunk embeddings, Query embeddings, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t119",
        "number": 8,
        "title": "Vector Stores",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t119-s1",
            "title": "Vector store"
          },
          {
            "id": "backend-t119-s2",
            "title": "Adding documents"
          },
          {
            "id": "backend-t119-s3",
            "title": "Similarity search"
          },
          {
            "id": "backend-t119-s4",
            "title": "Top-K retrieval"
          },
          {
            "id": "backend-t119-s5",
            "title": "Similarity threshold"
          },
          {
            "id": "backend-t119-s6",
            "title": "Metadata"
          },
          {
            "id": "backend-t119-s7",
            "title": "Metadata filtering"
          },
          {
            "id": "backend-t119-s8",
            "title": "Document identifiers"
          },
          {
            "id": "backend-t119-s9",
            "title": "Update and deletion"
          },
          {
            "id": "backend-t119-s10",
            "title": "Multi-tenant isolation"
          },
          {
            "id": "backend-t119-s11",
            "title": "Hybrid search"
          },
          {
            "id": "backend-t119-s12",
            "title": "Vector index tuning"
          },
          {
            "id": "backend-t119-s13",
            "title": "PostgreSQL with PGvector"
          },
          {
            "id": "backend-t119-s14",
            "title": "Redis"
          },
          {
            "id": "backend-t119-s15",
            "title": "MongoDB Atlas"
          },
          {
            "id": "backend-t119-s16",
            "title": "Elasticsearch/OpenSearch"
          },
          {
            "id": "backend-t119-s17",
            "title": "Qdrant"
          },
          {
            "id": "backend-t119-s18",
            "title": "Pinecone"
          },
          {
            "id": "backend-t119-s19",
            "title": "Weaviate"
          },
          {
            "id": "backend-t119-s20",
            "title": "Milvus"
          },
          {
            "id": "backend-t119-s21",
            "title": "Neo4j"
          }
        ],
        "overview": "Spring AI exposes vector-store abstractions for storing documents and performing similarity search across several vector-database providers. ([Home][18])\n\nPotential databases:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t120",
        "number": 9,
        "title": "Document Ingestion and ETL",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t120-s1",
            "title": "Document reader"
          },
          {
            "id": "backend-t120-s2",
            "title": "PDF reader"
          },
          {
            "id": "backend-t120-s3",
            "title": "Text reader"
          },
          {
            "id": "backend-t120-s4",
            "title": "Web-content reader"
          },
          {
            "id": "backend-t120-s5",
            "title": "Document transformer"
          },
          {
            "id": "backend-t120-s6",
            "title": "Token-based splitter"
          },
          {
            "id": "backend-t120-s7",
            "title": "Chunk size"
          },
          {
            "id": "backend-t120-s8",
            "title": "Chunk overlap"
          },
          {
            "id": "backend-t120-s9",
            "title": "Metadata enrichment"
          },
          {
            "id": "backend-t120-s10",
            "title": "Document writer"
          },
          {
            "id": "backend-t120-s11",
            "title": "Incremental indexing"
          },
          {
            "id": "backend-t120-s12",
            "title": "Document-version tracking"
          },
          {
            "id": "backend-t120-s13",
            "title": "Duplicate detection"
          }
        ],
        "overview": "**Document Ingestion and ETL** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Document reader, PDF reader, Text reader, Web-content reader, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t121",
        "number": 10,
        "title": "Retrieval-Augmented Generation",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t121-s1",
            "title": "Naive RAG"
          },
          {
            "id": "backend-t121-s2",
            "title": "Modular RAG"
          },
          {
            "id": "backend-t121-s3",
            "title": "Query transformation"
          },
          {
            "id": "backend-t121-s4",
            "title": "Query rewriting"
          },
          {
            "id": "backend-t121-s5",
            "title": "Multi-query retrieval"
          },
          {
            "id": "backend-t121-s6",
            "title": "Metadata filtering"
          },
          {
            "id": "backend-t121-s7",
            "title": "Document retrieval"
          },
          {
            "id": "backend-t121-s8",
            "title": "Document ranking"
          },
          {
            "id": "backend-t121-s9",
            "title": "Reranking"
          },
          {
            "id": "backend-t121-s10",
            "title": "Context assembly"
          },
          {
            "id": "backend-t121-s11",
            "title": "Citation generation"
          },
          {
            "id": "backend-t121-s12",
            "title": "Source attribution"
          },
          {
            "id": "backend-t121-s13",
            "title": "Context-window management"
          },
          {
            "id": "backend-t121-s14",
            "title": "Retrieval evaluation"
          },
          {
            "id": "backend-t121-s15",
            "title": "Answer-groundedness evaluation"
          }
        ],
        "overview": "Spring AI’s RAG components retrieve relevant documents from a vector store and add that context to model requests. ([Home][19])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t122",
        "number": 11,
        "title": "Chat Memory",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t122-s1",
            "title": "Conversation ID"
          },
          {
            "id": "backend-t122-s2",
            "title": "Message-window memory"
          },
          {
            "id": "backend-t122-s3",
            "title": "In-memory repository"
          },
          {
            "id": "backend-t122-s4",
            "title": "JDBC memory repository"
          },
          {
            "id": "backend-t122-s5",
            "title": "Redis or other storage"
          },
          {
            "id": "backend-t122-s6",
            "title": "Token-based memory limits"
          },
          {
            "id": "backend-t122-s7",
            "title": "Summarized memory"
          },
          {
            "id": "backend-t122-s8",
            "title": "Chat history versus chat memory"
          },
          {
            "id": "backend-t122-s9",
            "title": "Multi-user isolation"
          },
          {
            "id": "backend-t122-s10",
            "title": "Data-retention policies"
          },
          {
            "id": "backend-t122-s11",
            "title": "Privacy and deletion"
          }
        ],
        "overview": "Spring AI provides chat-memory abstractions for maintaining model-relevant conversational context. Complete chat history should generally be stored separately using an appropriate persistence mechanism. ([Home][20])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t123",
        "number": 12,
        "title": "Tool Calling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t123-s1",
            "title": "Tool definition"
          },
          {
            "id": "backend-t123-s2",
            "title": "Tool callback"
          },
          {
            "id": "backend-t123-s3",
            "title": "Tool parameters"
          },
          {
            "id": "backend-t123-s4",
            "title": "Tool descriptions"
          },
          {
            "id": "backend-t123-s5",
            "title": "Tool results"
          },
          {
            "id": "backend-t123-s6",
            "title": "Dynamic tools"
          },
          {
            "id": "backend-t123-s7",
            "title": "Tool selection"
          },
          {
            "id": "backend-t123-s8",
            "title": "Tool-execution errors"
          },
          {
            "id": "backend-t123-s9",
            "title": "Tool timeouts"
          },
          {
            "id": "backend-t123-s10",
            "title": "Authorization"
          },
          {
            "id": "backend-t123-s11",
            "title": "Human approval"
          },
          {
            "id": "backend-t123-s12",
            "title": "Idempotency"
          },
          {
            "id": "backend-t123-s13",
            "title": "Audit logging"
          },
          {
            "id": "backend-t123-s14",
            "title": "Preventing unrestricted tool access"
          }
        ],
        "overview": "Spring AI allows a model to request the execution of application-defined tools. ([Home][21])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t124",
        "number": 13,
        "title": "MCP — Model Context Protocol",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t124-s1",
            "title": "MCP architecture"
          },
          {
            "id": "backend-t124-s2",
            "title": "MCP client"
          },
          {
            "id": "backend-t124-s3",
            "title": "MCP server"
          },
          {
            "id": "backend-t124-s4",
            "title": "Tools"
          },
          {
            "id": "backend-t124-s5",
            "title": "Resources"
          },
          {
            "id": "backend-t124-s6",
            "title": "Prompts"
          },
          {
            "id": "backend-t124-s7",
            "title": "Transport"
          },
          {
            "id": "backend-t124-s8",
            "title": "Tool discovery"
          },
          {
            "id": "backend-t124-s9",
            "title": "Spring-based MCP servers"
          },
          {
            "id": "backend-t124-s10",
            "title": "Consuming external MCP servers"
          },
          {
            "id": "backend-t124-s11",
            "title": "MCP authentication"
          },
          {
            "id": "backend-t124-s12",
            "title": "MCP authorization"
          },
          {
            "id": "backend-t124-s13",
            "title": "Tool allowlists"
          },
          {
            "id": "backend-t124-s14",
            "title": "Sandboxing"
          },
          {
            "id": "backend-t124-s15",
            "title": "Audit trails"
          }
        ],
        "overview": "Spring AI includes support for applications that consume MCP servers or expose Spring services through MCP. ([Home][22])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t125",
        "number": 14,
        "title": "AI Agents",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t125-s1",
            "title": "Agent loop"
          },
          {
            "id": "backend-t125-s2",
            "title": "Planning"
          },
          {
            "id": "backend-t125-s3",
            "title": "Tool selection"
          },
          {
            "id": "backend-t125-s4",
            "title": "Observation"
          },
          {
            "id": "backend-t125-s5",
            "title": "Reflection"
          },
          {
            "id": "backend-t125-s6",
            "title": "State"
          },
          {
            "id": "backend-t125-s7",
            "title": "Memory"
          },
          {
            "id": "backend-t125-s8",
            "title": "Multi-step execution"
          },
          {
            "id": "backend-t125-s9",
            "title": "Human-in-the-loop"
          },
          {
            "id": "backend-t125-s10",
            "title": "Approval gates"
          },
          {
            "id": "backend-t125-s11",
            "title": "Maximum-step limits"
          },
          {
            "id": "backend-t125-s12",
            "title": "Cost limits"
          },
          {
            "id": "backend-t125-s13",
            "title": "Time limits"
          },
          {
            "id": "backend-t125-s14",
            "title": "Tool authorization"
          },
          {
            "id": "backend-t125-s15",
            "title": "Agent evaluation"
          },
          {
            "id": "backend-t125-s16",
            "title": "Deterministic workflow versus autonomous agent"
          }
        ],
        "overview": "**AI Agents** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Agent loop, Planning, Tool selection, Observation, and 12 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t126",
        "number": 15,
        "title": "AI Evaluation",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t126-s1",
            "title": "Golden datasets"
          },
          {
            "id": "backend-t126-s2",
            "title": "Exact-match evaluation"
          },
          {
            "id": "backend-t126-s3",
            "title": "Semantic-similarity evaluation"
          },
          {
            "id": "backend-t126-s4",
            "title": "Retrieval precision"
          },
          {
            "id": "backend-t126-s5",
            "title": "Retrieval recall"
          },
          {
            "id": "backend-t126-s6",
            "title": "Context relevance"
          },
          {
            "id": "backend-t126-s7",
            "title": "Answer relevance"
          },
          {
            "id": "backend-t126-s8",
            "title": "Groundedness"
          },
          {
            "id": "backend-t126-s9",
            "title": "Hallucination testing"
          },
          {
            "id": "backend-t126-s10",
            "title": "LLM-as-a-judge"
          },
          {
            "id": "backend-t126-s11",
            "title": "Human evaluation"
          },
          {
            "id": "backend-t126-s12",
            "title": "Regression testing"
          },
          {
            "id": "backend-t126-s13",
            "title": "Prompt A/B testing"
          },
          {
            "id": "backend-t126-s14",
            "title": "Model comparison"
          }
        ],
        "overview": "**AI Evaluation** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Golden datasets, Exact-match evaluation, Semantic-similarity evaluation, Retrieval precision, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t127",
        "number": 16,
        "title": "AI Observability",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t127-s1",
            "title": "Model latency"
          },
          {
            "id": "backend-t127-s2",
            "title": "Token consumption"
          },
          {
            "id": "backend-t127-s3",
            "title": "Request cost"
          },
          {
            "id": "backend-t127-s4",
            "title": "Error rates"
          },
          {
            "id": "backend-t127-s5",
            "title": "Retrieval latency"
          },
          {
            "id": "backend-t127-s6",
            "title": "Tool-call latency"
          },
          {
            "id": "backend-t127-s7",
            "title": "Model-provider failures"
          },
          {
            "id": "backend-t127-s8",
            "title": "Prompt versions"
          },
          {
            "id": "backend-t127-s9",
            "title": "Trace IDs"
          },
          {
            "id": "backend-t127-s10",
            "title": "Sensitive-content redaction"
          },
          {
            "id": "backend-t127-s11",
            "title": "AI quality metrics"
          }
        ],
        "overview": "**AI Observability** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Model latency, Token consumption, Request cost, Error rates, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t128",
        "number": 17,
        "title": "AI Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t128-s1",
            "title": "Prompt injection"
          },
          {
            "id": "backend-t128-s2",
            "title": "Indirect prompt injection"
          },
          {
            "id": "backend-t128-s3",
            "title": "Jailbreaks"
          },
          {
            "id": "backend-t128-s4",
            "title": "Data leakage"
          },
          {
            "id": "backend-t128-s5",
            "title": "Tool abuse"
          },
          {
            "id": "backend-t128-s6",
            "title": "Excessive agency"
          },
          {
            "id": "backend-t128-s7",
            "title": "Insecure output handling"
          },
          {
            "id": "backend-t128-s8",
            "title": "Retrieval poisoning"
          },
          {
            "id": "backend-t128-s9",
            "title": "Model denial of service"
          },
          {
            "id": "backend-t128-s10",
            "title": "Secret exposure"
          },
          {
            "id": "backend-t128-s11",
            "title": "Tenant-data leakage"
          },
          {
            "id": "backend-t128-s12",
            "title": "Model-output validation"
          },
          {
            "id": "backend-t128-s13",
            "title": "Content moderation"
          },
          {
            "id": "backend-t128-s14",
            "title": "Rate limiting"
          },
          {
            "id": "backend-t128-s15",
            "title": "Input-size limits"
          },
          {
            "id": "backend-t128-s16",
            "title": "Tool allowlists"
          },
          {
            "id": "backend-t128-s17",
            "title": "Human approval for sensitive actions"
          }
        ],
        "overview": "**AI Security** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Prompt injection, Indirect prompt injection, Jailbreaks, Data leakage, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t129",
        "number": 18,
        "title": "Spring AI Projects",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Build in this order:\n\n1. AI text-generation API\n\n2. Structured information extractor\n\n3. Streaming chatbot\n\n4. Chatbot with persistent memory\n\n5. Document Q&A using PGvector\n\n6. RAG system with citations\n\n7. Tool-calling assistant\n\n8. Database-query assistant with read-only tools\n\n9. Customer-support copilot\n\n10. MCP server for enterprise services\n\n11. AI agent with approval gates\n\n12. Multi-tenant enterprise RAG platform",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 20,
    "title": "Docker and Containers",
    "icon": "⚙️",
    "color": "#ec4899",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t130",
        "number": 1,
        "title": "Docker Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t130-s1",
            "title": "Images"
          },
          {
            "id": "backend-t130-s2",
            "title": "Containers"
          },
          {
            "id": "backend-t130-s3",
            "title": "Registries"
          },
          {
            "id": "backend-t130-s4",
            "title": "Dockerfile"
          },
          {
            "id": "backend-t130-s5",
            "title": "Layers"
          },
          {
            "id": "backend-t130-s6",
            "title": "Build cache"
          },
          {
            "id": "backend-t130-s7",
            "title": "Ports"
          },
          {
            "id": "backend-t130-s8",
            "title": "Volumes"
          },
          {
            "id": "backend-t130-s9",
            "title": "Networks"
          },
          {
            "id": "backend-t130-s10",
            "title": "Environment variables"
          },
          {
            "id": "backend-t130-s11",
            "title": "Health checks"
          },
          {
            "id": "backend-t130-s12",
            "title": "Container logs"
          }
        ],
        "overview": "**Docker Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Images, Containers, Registries, Dockerfile, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t131",
        "number": 2,
        "title": "Containerizing Spring Boot",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t131-s1",
            "title": "Executable JAR image"
          },
          {
            "id": "backend-t131-s2",
            "title": "Multi-stage Docker build"
          },
          {
            "id": "backend-t131-s3",
            "title": "Layered JAR"
          },
          {
            "id": "backend-t131-s4",
            "title": "Non-root user"
          },
          {
            "id": "backend-t131-s5",
            "title": "Minimal base image"
          },
          {
            "id": "backend-t131-s6",
            "title": "JVM container awareness"
          },
          {
            "id": "backend-t131-s7",
            "title": "Memory limits"
          },
          {
            "id": "backend-t131-s8",
            "title": "CPU limits"
          },
          {
            "id": "backend-t131-s9",
            "title": "Startup optimization"
          },
          {
            "id": "backend-t131-s10",
            "title": "Graceful shutdown"
          },
          {
            "id": "backend-t131-s11",
            "title": "Container health checks"
          },
          {
            "id": "backend-t131-s12",
            "title": "Buildpacks"
          },
          {
            "id": "backend-t131-s13",
            "title": "Image vulnerability scanning"
          }
        ],
        "overview": "**Containerizing Spring Boot** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Executable JAR image, Multi-stage Docker build, Layered JAR, Non-root user, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t132",
        "number": 3,
        "title": "Docker Compose",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Run a complete local environment containing:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring Boot",
          "PostgreSQL",
          "Redis",
          "Kafka or RabbitMQ",
          "Prometheus",
          "Grafana",
          "OpenTelemetry Collector"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 21,
    "title": "Kubernetes",
    "icon": "⚙️",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t133",
        "number": 1,
        "title": "Kubernetes Fundamentals",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t133-s1",
            "title": "Cluster"
          },
          {
            "id": "backend-t133-s2",
            "title": "Node"
          },
          {
            "id": "backend-t133-s3",
            "title": "Pod"
          },
          {
            "id": "backend-t133-s4",
            "title": "Deployment"
          },
          {
            "id": "backend-t133-s5",
            "title": "ReplicaSet"
          },
          {
            "id": "backend-t133-s6",
            "title": "Service"
          },
          {
            "id": "backend-t133-s7",
            "title": "Ingress"
          },
          {
            "id": "backend-t133-s8",
            "title": "ConfigMap"
          },
          {
            "id": "backend-t133-s9",
            "title": "Secret"
          },
          {
            "id": "backend-t133-s10",
            "title": "Namespace"
          },
          {
            "id": "backend-t133-s11",
            "title": "Persistent volume"
          },
          {
            "id": "backend-t133-s12",
            "title": "Persistent-volume claim"
          }
        ],
        "overview": "**Kubernetes Fundamentals** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Cluster, Node, Pod, Deployment, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t134",
        "number": 2,
        "title": "Deploying Spring Boot to Kubernetes",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t134-s1",
            "title": "Deployment manifest"
          },
          {
            "id": "backend-t134-s2",
            "title": "Service manifest"
          },
          {
            "id": "backend-t134-s3",
            "title": "Ingress"
          },
          {
            "id": "backend-t134-s4",
            "title": "Resource requests"
          },
          {
            "id": "backend-t134-s5",
            "title": "Resource limits"
          },
          {
            "id": "backend-t134-s6",
            "title": "Liveness probes"
          },
          {
            "id": "backend-t134-s7",
            "title": "Readiness probes"
          },
          {
            "id": "backend-t134-s8",
            "title": "Startup probes"
          },
          {
            "id": "backend-t134-s9",
            "title": "Rolling updates"
          },
          {
            "id": "backend-t134-s10",
            "title": "Rollbacks"
          },
          {
            "id": "backend-t134-s11",
            "title": "Horizontal Pod Autoscaler"
          },
          {
            "id": "backend-t134-s12",
            "title": "Pod disruption budgets"
          },
          {
            "id": "backend-t134-s13",
            "title": "Graceful termination"
          },
          {
            "id": "backend-t134-s14",
            "title": "ConfigMap configuration"
          },
          {
            "id": "backend-t134-s15",
            "title": "Secret injection"
          }
        ],
        "overview": "**Deploying Spring Boot to Kubernetes** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Deployment manifest, Service manifest, Ingress, Resource requests, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t135",
        "number": 3,
        "title": "Kubernetes Production Concerns",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t135-s1",
            "title": "Stateless services"
          },
          {
            "id": "backend-t135-s2",
            "title": "Externalized sessions"
          },
          {
            "id": "backend-t135-s3",
            "title": "Database migrations"
          },
          {
            "id": "backend-t135-s4",
            "title": "Leader election"
          },
          {
            "id": "backend-t135-s5",
            "title": "Distributed scheduling"
          },
          {
            "id": "backend-t135-s6",
            "title": "Service discovery"
          },
          {
            "id": "backend-t135-s7",
            "title": "Network policies"
          },
          {
            "id": "backend-t135-s8",
            "title": "TLS"
          },
          {
            "id": "backend-t135-s9",
            "title": "Secret rotation"
          },
          {
            "id": "backend-t135-s10",
            "title": "Autoscaling"
          },
          {
            "id": "backend-t135-s11",
            "title": "Cluster observability"
          }
        ],
        "overview": "**Kubernetes Production Concerns** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Stateless services, Externalized sessions, Database migrations, Leader election, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 22,
    "title": "CI/CD",
    "icon": "⚙️",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t136",
        "number": 1,
        "title": "Continuous Integration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t136-s1",
            "title": "Compile"
          },
          {
            "id": "backend-t136-s2",
            "title": "Unit tests"
          },
          {
            "id": "backend-t136-s3",
            "title": "Integration tests"
          },
          {
            "id": "backend-t136-s4",
            "title": "Static analysis"
          },
          {
            "id": "backend-t136-s5",
            "title": "Dependency scanning"
          },
          {
            "id": "backend-t136-s6",
            "title": "Security scanning"
          },
          {
            "id": "backend-t136-s7",
            "title": "Code coverage"
          },
          {
            "id": "backend-t136-s8",
            "title": "Build artifact"
          },
          {
            "id": "backend-t136-s9",
            "title": "Container image"
          },
          {
            "id": "backend-t136-s10",
            "title": "Image scanning"
          },
          {
            "id": "backend-t136-s11",
            "title": "Artifact publishing"
          }
        ],
        "overview": "**Continuous Integration** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Compile, Unit tests, Integration tests, Static analysis, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t137",
        "number": 2,
        "title": "Continuous Delivery",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t137-s1",
            "title": "Environment promotion"
          },
          {
            "id": "backend-t137-s2",
            "title": "Development deployment"
          },
          {
            "id": "backend-t137-s3",
            "title": "Staging deployment"
          },
          {
            "id": "backend-t137-s4",
            "title": "Production deployment"
          },
          {
            "id": "backend-t137-s5",
            "title": "Database migrations"
          },
          {
            "id": "backend-t137-s6",
            "title": "Smoke tests"
          },
          {
            "id": "backend-t137-s7",
            "title": "Rollbacks"
          },
          {
            "id": "backend-t137-s8",
            "title": "Blue-green deployment"
          },
          {
            "id": "backend-t137-s9",
            "title": "Canary deployment"
          },
          {
            "id": "backend-t137-s10",
            "title": "Feature flags"
          },
          {
            "id": "backend-t137-s11",
            "title": "Approval gates"
          }
        ],
        "overview": "**Continuous Delivery** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Environment promotion, Development deployment, Staging deployment, Production deployment, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t138",
        "number": 3,
        "title": "CI/CD Tools",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t138-s1",
            "title": "GitHub Actions"
          },
          {
            "id": "backend-t138-s2",
            "title": "GitLab CI"
          },
          {
            "id": "backend-t138-s3",
            "title": "Jenkins"
          },
          {
            "id": "backend-t138-s4",
            "title": "Azure DevOps"
          },
          {
            "id": "backend-t138-s5",
            "title": "Argo CD"
          }
        ],
        "overview": "**CI/CD Tools** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: GitHub Actions, GitLab CI, Jenkins, Azure DevOps, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 23,
    "title": "Cloud Engineering",
    "icon": "⚙️",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t139",
        "number": 1,
        "title": "Cloud Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t139-s1",
            "title": "Compute"
          },
          {
            "id": "backend-t139-s2",
            "title": "Networking"
          },
          {
            "id": "backend-t139-s3",
            "title": "Load balancing"
          },
          {
            "id": "backend-t139-s4",
            "title": "DNS"
          },
          {
            "id": "backend-t139-s5",
            "title": "Object storage"
          },
          {
            "id": "backend-t139-s6",
            "title": "Managed databases"
          },
          {
            "id": "backend-t139-s7",
            "title": "Managed caches"
          },
          {
            "id": "backend-t139-s8",
            "title": "Message queues"
          },
          {
            "id": "backend-t139-s9",
            "title": "Identity and access management"
          },
          {
            "id": "backend-t139-s10",
            "title": "Secret managers"
          },
          {
            "id": "backend-t139-s11",
            "title": "Monitoring"
          },
          {
            "id": "backend-t139-s12",
            "title": "Autoscaling"
          },
          {
            "id": "backend-t139-s13",
            "title": "Availability zones"
          },
          {
            "id": "backend-t139-s14",
            "title": "Regions"
          },
          {
            "id": "backend-t139-s15",
            "title": "Disaster recovery"
          }
        ],
        "overview": "**Cloud Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Compute, Networking, Load balancing, DNS, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t140",
        "number": 2,
        "title": "AWS, Azure or Google Cloud",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [],
        "overview": "Learn at least one cloud platform.\n\nImportant managed-service categories:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Virtual machines",
          "Container services",
          "Kubernetes",
          "Managed relational databases",
          "Managed Redis",
          "Object storage",
          "Queues and topics",
          "API gateways",
          "Identity providers",
          "Secret managers",
          "Logging and monitoring"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t141",
        "number": 3,
        "title": "Cloud-Native Spring Skills",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t141-s1",
            "title": "External configuration"
          },
          {
            "id": "backend-t141-s2",
            "title": "Stateless services"
          },
          {
            "id": "backend-t141-s3",
            "title": "Twelve-factor applications"
          },
          {
            "id": "backend-t141-s4",
            "title": "Health probes"
          },
          {
            "id": "backend-t141-s5",
            "title": "Horizontal scaling"
          },
          {
            "id": "backend-t141-s6",
            "title": "Distributed sessions"
          },
          {
            "id": "backend-t141-s7",
            "title": "Managed identity"
          },
          {
            "id": "backend-t141-s8",
            "title": "Secret rotation"
          },
          {
            "id": "backend-t141-s9",
            "title": "Cloud storage"
          },
          {
            "id": "backend-t141-s10",
            "title": "Cloud messaging"
          },
          {
            "id": "backend-t141-s11",
            "title": "Deployment automation"
          }
        ],
        "overview": "**Cloud-Native Spring Skills** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: External configuration, Stateless services, Twelve-factor applications, Health probes, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 24,
    "title": "JVM and Performance Engineering",
    "icon": "⚙️",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t142",
        "number": 1,
        "title": "JVM Internals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t142-s1",
            "title": "Heap"
          },
          {
            "id": "backend-t142-s2",
            "title": "Stack"
          },
          {
            "id": "backend-t142-s3",
            "title": "Metaspace"
          },
          {
            "id": "backend-t142-s4",
            "title": "Class loaders"
          },
          {
            "id": "backend-t142-s5",
            "title": "Bytecode"
          },
          {
            "id": "backend-t142-s6",
            "title": "JIT compilation"
          },
          {
            "id": "backend-t142-s7",
            "title": "Object allocation"
          },
          {
            "id": "backend-t142-s8",
            "title": "Escape analysis"
          },
          {
            "id": "backend-t142-s9",
            "title": "Garbage collection"
          },
          {
            "id": "backend-t142-s10",
            "title": "Thread stacks"
          },
          {
            "id": "backend-t142-s11",
            "title": "Native memory"
          }
        ],
        "overview": "**JVM Internals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Heap, Stack, Metaspace, Class loaders, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t143",
        "number": 2,
        "title": "Garbage Collection",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t143-s1",
            "title": "Generational collection"
          },
          {
            "id": "backend-t143-s2",
            "title": "Minor collection"
          },
          {
            "id": "backend-t143-s3",
            "title": "Major collection"
          },
          {
            "id": "backend-t143-s4",
            "title": "Stop-the-world pauses"
          },
          {
            "id": "backend-t143-s5",
            "title": "G1 GC"
          },
          {
            "id": "backend-t143-s6",
            "title": "ZGC"
          },
          {
            "id": "backend-t143-s7",
            "title": "GC logs"
          },
          {
            "id": "backend-t143-s8",
            "title": "Heap sizing"
          },
          {
            "id": "backend-t143-s9",
            "title": "Allocation rate"
          },
          {
            "id": "backend-t143-s10",
            "title": "Memory pressure"
          },
          {
            "id": "backend-t143-s11",
            "title": "Memory leaks"
          }
        ],
        "overview": "**Garbage Collection** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: Generational collection, Minor collection, Major collection, Stop-the-world pauses, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t144",
        "number": 3,
        "title": "Profiling and Diagnostics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t144-s1",
            "title": "Java Flight Recorder"
          },
          {
            "id": "backend-t144-s2",
            "title": "Java Mission Control"
          },
          {
            "id": "backend-t144-s3",
            "title": "Thread dumps"
          },
          {
            "id": "backend-t144-s4",
            "title": "Heap dumps"
          },
          {
            "id": "backend-t144-s5",
            "title": "CPU profiling"
          },
          {
            "id": "backend-t144-s6",
            "title": "Allocation profiling"
          },
          {
            "id": "backend-t144-s7",
            "title": "Lock profiling"
          },
          {
            "id": "backend-t144-s8",
            "title": "Database profiling"
          },
          {
            "id": "backend-t144-s9",
            "title": "Slow-query logs"
          },
          {
            "id": "backend-t144-s10",
            "title": "Application metrics"
          },
          {
            "id": "backend-t144-s11",
            "title": "Distributed traces"
          }
        ],
        "overview": "**Profiling and Diagnostics** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Java Flight Recorder, Java Mission Control, Thread dumps, Heap dumps, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t145",
        "number": 4,
        "title": "Performance Testing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t145-s1",
            "title": "Load testing"
          },
          {
            "id": "backend-t145-s2",
            "title": "Stress testing"
          },
          {
            "id": "backend-t145-s3",
            "title": "Spike testing"
          },
          {
            "id": "backend-t145-s4",
            "title": "Soak testing"
          },
          {
            "id": "backend-t145-s5",
            "title": "Capacity testing"
          },
          {
            "id": "backend-t145-s6",
            "title": "Latency percentiles"
          },
          {
            "id": "backend-t145-s7",
            "title": "Throughput"
          },
          {
            "id": "backend-t145-s8",
            "title": "Concurrent users"
          },
          {
            "id": "backend-t145-s9",
            "title": "Bottleneck identification"
          },
          {
            "id": "backend-t145-s10",
            "title": "JMeter"
          },
          {
            "id": "backend-t145-s11",
            "title": "Gatling"
          },
          {
            "id": "backend-t145-s12",
            "title": "k6"
          }
        ],
        "overview": "**Performance Testing** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Load testing, Stress testing, Spike testing, Soak testing, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t146",
        "number": 5,
        "title": "Backend Performance Topics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t146-s1",
            "title": "Database indexing"
          },
          {
            "id": "backend-t146-s2",
            "title": "Query optimization"
          },
          {
            "id": "backend-t146-s3",
            "title": "Pagination"
          },
          {
            "id": "backend-t146-s4",
            "title": "Batch inserts"
          },
          {
            "id": "backend-t146-s5",
            "title": "Connection pooling"
          },
          {
            "id": "backend-t146-s6",
            "title": "HTTP connection pooling"
          },
          {
            "id": "backend-t146-s7",
            "title": "Thread-pool tuning"
          },
          {
            "id": "backend-t146-s8",
            "title": "Caching"
          },
          {
            "id": "backend-t146-s9",
            "title": "Compression"
          },
          {
            "id": "backend-t146-s10",
            "title": "Asynchronous processing"
          },
          {
            "id": "backend-t146-s11",
            "title": "Payload sizing"
          },
          {
            "id": "backend-t146-s12",
            "title": "Serialization cost"
          },
          {
            "id": "backend-t146-s13",
            "title": "N+1 query prevention"
          },
          {
            "id": "backend-t146-s14",
            "title": "Backpressure"
          },
          {
            "id": "backend-t146-s15",
            "title": "Rate limiting"
          }
        ],
        "overview": "**Backend Performance Topics** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Database indexing, Query optimization, Pagination, Batch inserts, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 25,
    "title": "System Design",
    "icon": "⚙️",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t147",
        "number": 1,
        "title": "System Design Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t147-s1",
            "title": "Functional requirements"
          },
          {
            "id": "backend-t147-s2",
            "title": "Non-functional requirements"
          },
          {
            "id": "backend-t147-s3",
            "title": "Scalability"
          },
          {
            "id": "backend-t147-s4",
            "title": "Availability"
          },
          {
            "id": "backend-t147-s5",
            "title": "Reliability"
          },
          {
            "id": "backend-t147-s6",
            "title": "Maintainability"
          },
          {
            "id": "backend-t147-s7",
            "title": "Security"
          },
          {
            "id": "backend-t147-s8",
            "title": "Performance"
          },
          {
            "id": "backend-t147-s9",
            "title": "Consistency"
          },
          {
            "id": "backend-t147-s10",
            "title": "Durability"
          },
          {
            "id": "backend-t147-s11",
            "title": "Cost"
          }
        ],
        "overview": "**System Design Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Functional requirements, Non-functional requirements, Scalability, Availability, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t148",
        "number": 2,
        "title": "Architecture Components",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t148-s1",
            "title": "Load balancer"
          },
          {
            "id": "backend-t148-s2",
            "title": "Reverse proxy"
          },
          {
            "id": "backend-t148-s3",
            "title": "API gateway"
          },
          {
            "id": "backend-t148-s4",
            "title": "Application server"
          },
          {
            "id": "backend-t148-s5",
            "title": "Relational database"
          },
          {
            "id": "backend-t148-s6",
            "title": "NoSQL database"
          },
          {
            "id": "backend-t148-s7",
            "title": "Cache"
          },
          {
            "id": "backend-t148-s8",
            "title": "Message broker"
          },
          {
            "id": "backend-t148-s9",
            "title": "Object storage"
          },
          {
            "id": "backend-t148-s10",
            "title": "Search engine"
          },
          {
            "id": "backend-t148-s11",
            "title": "CDN"
          },
          {
            "id": "backend-t148-s12",
            "title": "Identity provider"
          },
          {
            "id": "backend-t148-s13",
            "title": "Monitoring system"
          }
        ],
        "overview": "**Architecture Components** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Load balancer, Reverse proxy, API gateway, Application server, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t149",
        "number": 3,
        "title": "Scalability Patterns",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t149-s1",
            "title": "Vertical scaling"
          },
          {
            "id": "backend-t149-s2",
            "title": "Horizontal scaling"
          },
          {
            "id": "backend-t149-s3",
            "title": "Stateless services"
          },
          {
            "id": "backend-t149-s4",
            "title": "Database replication"
          },
          {
            "id": "backend-t149-s5",
            "title": "Read replicas"
          },
          {
            "id": "backend-t149-s6",
            "title": "Sharding"
          },
          {
            "id": "backend-t149-s7",
            "title": "Partitioning"
          },
          {
            "id": "backend-t149-s8",
            "title": "Caching"
          },
          {
            "id": "backend-t149-s9",
            "title": "Asynchronous processing"
          },
          {
            "id": "backend-t149-s10",
            "title": "Load balancing"
          },
          {
            "id": "backend-t149-s11",
            "title": "Queue-based load leveling"
          }
        ],
        "overview": "**Scalability Patterns** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Vertical scaling, Horizontal scaling, Stateless services, Database replication, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t150",
        "number": 4,
        "title": "Reliability Patterns",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t150-s1",
            "title": "Redundancy"
          },
          {
            "id": "backend-t150-s2",
            "title": "Failover"
          },
          {
            "id": "backend-t150-s3",
            "title": "Retry"
          },
          {
            "id": "backend-t150-s4",
            "title": "Circuit breaker"
          },
          {
            "id": "backend-t150-s5",
            "title": "Bulkhead"
          },
          {
            "id": "backend-t150-s6",
            "title": "Idempotency"
          },
          {
            "id": "backend-t150-s7",
            "title": "Deduplication"
          },
          {
            "id": "backend-t150-s8",
            "title": "Disaster recovery"
          },
          {
            "id": "backend-t150-s9",
            "title": "Backup and restoration"
          },
          {
            "id": "backend-t150-s10",
            "title": "Multi-zone deployment"
          },
          {
            "id": "backend-t150-s11",
            "title": "Data reconciliation"
          }
        ],
        "overview": "**Reliability Patterns** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Redundancy, Failover, Retry, Circuit breaker, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t151",
        "number": 5,
        "title": "Design These Systems",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t151-s1",
            "title": "URL shortener"
          },
          {
            "id": "backend-t151-s2",
            "title": "E-commerce backend"
          },
          {
            "id": "backend-t151-s3",
            "title": "Food-delivery platform"
          },
          {
            "id": "backend-t151-s4",
            "title": "Ticket-booking platform"
          },
          {
            "id": "backend-t151-s5",
            "title": "Banking transaction service"
          },
          {
            "id": "backend-t151-s6",
            "title": "Notification service"
          },
          {
            "id": "backend-t151-s7",
            "title": "Chat application"
          },
          {
            "id": "backend-t151-s8",
            "title": "File-storage service"
          },
          {
            "id": "backend-t151-s9",
            "title": "Search service"
          },
          {
            "id": "backend-t151-s10",
            "title": "Payment system"
          },
          {
            "id": "backend-t151-s11",
            "title": "AI document assistant"
          },
          {
            "id": "backend-t151-s12",
            "title": "Multi-tenant SaaS platform"
          }
        ],
        "overview": "**Design These Systems** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: URL shortener, E-commerce backend, Food-delivery platform, Ticket-booking platform, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 26,
    "title": "Software Engineering Practices",
    "icon": "⚙️",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "backend",
    "roadmapLabel": "Backend",
    "roadmapBadge": "Spring / Java",
    "topics": [
      {
        "id": "backend-t152",
        "number": 1,
        "title": "Clean Code",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t152-s1",
            "title": "Meaningful naming"
          },
          {
            "id": "backend-t152-s2",
            "title": "Small methods"
          },
          {
            "id": "backend-t152-s3",
            "title": "Single-purpose classes"
          },
          {
            "id": "backend-t152-s4",
            "title": "Immutability"
          },
          {
            "id": "backend-t152-s5",
            "title": "Defensive programming"
          },
          {
            "id": "backend-t152-s6",
            "title": "Early validation"
          },
          {
            "id": "backend-t152-s7",
            "title": "Avoiding duplication"
          },
          {
            "id": "backend-t152-s8",
            "title": "Refactoring"
          },
          {
            "id": "backend-t152-s9",
            "title": "Avoiding premature abstraction"
          },
          {
            "id": "backend-t152-s10",
            "title": "Avoiding magic values"
          },
          {
            "id": "backend-t152-s11",
            "title": "Useful comments"
          },
          {
            "id": "backend-t152-s12",
            "title": "Javadoc for public APIs"
          }
        ],
        "overview": "**Clean Code** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Meaningful naming, Small methods, Single-purpose classes, Immutability, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t153",
        "number": 2,
        "title": "Code Review",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t153-s1",
            "title": "Correctness"
          },
          {
            "id": "backend-t153-s2",
            "title": "Readability"
          },
          {
            "id": "backend-t153-s3",
            "title": "Security"
          },
          {
            "id": "backend-t153-s4",
            "title": "Test coverage"
          },
          {
            "id": "backend-t153-s5",
            "title": "Performance"
          },
          {
            "id": "backend-t153-s6",
            "title": "Transaction boundaries"
          },
          {
            "id": "backend-t153-s7",
            "title": "Error handling"
          },
          {
            "id": "backend-t153-s8",
            "title": "API compatibility"
          },
          {
            "id": "backend-t153-s9",
            "title": "Database effects"
          },
          {
            "id": "backend-t153-s10",
            "title": "Operational impact"
          }
        ],
        "overview": "**Code Review** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nIn this topic you will study: Correctness, Readability, Security, Test coverage, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t154",
        "number": 3,
        "title": "API Governance",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "backend-t154-s1",
            "title": "API standards"
          },
          {
            "id": "backend-t154-s2",
            "title": "Naming conventions"
          },
          {
            "id": "backend-t154-s3",
            "title": "Error contracts"
          },
          {
            "id": "backend-t154-s4",
            "title": "Pagination conventions"
          },
          {
            "id": "backend-t154-s5",
            "title": "Authentication standards"
          },
          {
            "id": "backend-t154-s6",
            "title": "Versioning policy"
          },
          {
            "id": "backend-t154-s7",
            "title": "Deprecation policy"
          },
          {
            "id": "backend-t154-s8",
            "title": "OpenAPI specifications"
          },
          {
            "id": "backend-t154-s9",
            "title": "Backward compatibility"
          },
          {
            "id": "backend-t154-s10",
            "title": "Consumer communication"
          }
        ],
        "overview": "**API Governance** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **Backend** roadmap.\n\nIn this topic you will study: API standards, Naming conventions, Error contracts, Pagination conventions, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t155",
        "number": 4,
        "title": "Dependency Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "backend-t155-s1",
            "title": "Maven dependency tree"
          },
          {
            "id": "backend-t155-s2",
            "title": "Dependency convergence"
          },
          {
            "id": "backend-t155-s3",
            "title": "BOMs"
          },
          {
            "id": "backend-t155-s4",
            "title": "Version management"
          },
          {
            "id": "backend-t155-s5",
            "title": "Vulnerability scanning"
          },
          {
            "id": "backend-t155-s6",
            "title": "Dependabot or Renovate"
          },
          {
            "id": "backend-t155-s7",
            "title": "Upgrade strategy"
          },
          {
            "id": "backend-t155-s8",
            "title": "Spring release compatibility"
          },
          {
            "id": "backend-t155-s9",
            "title": "Avoiding unmaintained libraries"
          }
        ],
        "overview": "For your **first Java backend job**, prioritize these topics:\n\n3. Collections and Streams\n\n7. HTTP and REST\n\n12. Global exception handling\n\n13. Spring Data JPA\n\n14. Hibernate relationships\n\n15. Transactions\n\n18. Spring Security\n\n19. JWT and OAuth2 fundamentals\n\n23. Testcontainers\n\n26. Logging and metrics\n\nDo not delay employment preparation because of these:\n\nThese are valuable, but they come **after strong Spring Boot fundamentals**.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring WebFlux",
          "Spring Cloud",
          "Microservices",
          "Kubernetes",
          "Spring Batch",
          "GraphQL",
          "gRPC",
          "Event sourcing",
          "CQRS",
          "Advanced Spring AI agents",
          "GraalVM native images"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t156",
        "number": 5,
        "title": "Project 1 — Task Management REST API",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 1 — Task Management REST API** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring Boot",
          "Controllers",
          "Services",
          "Repositories",
          "DTOs",
          "Validation",
          "Exception handling",
          "PostgreSQL",
          "Flyway",
          "Unit tests"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t157",
        "number": 6,
        "title": "Project 2 — Secure Library Management System",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 2 — Secure Library Management System** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring Security",
          "User registration",
          "Password hashing",
          "JWT or sessions",
          "Roles and permissions",
          "Pagination",
          "Auditing",
          "Integration tests",
          "Docker"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t158",
        "number": 7,
        "title": "Project 3 — E-Commerce Backend",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 3 — E-Commerce Backend** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Products",
          "Categories",
          "Inventory",
          "Cart",
          "Orders",
          "Payments",
          "Transactions",
          "Idempotency",
          "Redis caching",
          "File storage",
          "Email notifications",
          "API documentation",
          "Testcontainers"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t159",
        "number": 8,
        "title": "Project 4 — Production-Ready Booking Platform",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 4 — Production-Ready Booking Platform** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Optimistic locking",
          "Preventing double booking",
          "Kafka or RabbitMQ",
          "Transactional outbox",
          "Scheduled jobs",
          "Metrics",
          "Distributed tracing",
          "Rate limiting",
          "CI/CD",
          "Kubernetes deployment"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t160",
        "number": 9,
        "title": "Project 5 — AI-Powered Enterprise Platform",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 5 — AI-Powered Enterprise Platform** is a foundational concept that every developer should understand early in their learning journey in the **Backend** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring AI",
          "Streaming chat",
          "PGvector",
          "Document ingestion",
          "Chat memory",
          "Tool calling",
          "MCP server",
          "AI evaluation",
          "Prompt-injection protection",
          "AI observability"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      },
      {
        "id": "backend-t161",
        "number": 10,
        "title": "Project 6 — Microservice System",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "A strong Java backend engineer is not someone who merely knows many annotations. A strong engineer understands:\n\nThat combination makes someone a **backend engineer**, rather than only a Spring Boot coder. ☕️🔥\n\n[1]: https://spring.io/projects \"Spring | Projects\"\n\n[2]: https://spring.io/projects/spring-framework?utm_source=chatgpt.com \"Spring Framework\"\n\n[3]: https://spring.io/projects/spring-boot?utm_source=chatgpt.com \"Spring Boot\"\n\n[4]: https://spring.io/projects/spring-data?utm_source=chatgpt.com \"Spring Data\"\n\n[5]: https://docs.spring.io/spring-security/reference/index.html?utm_source=chatgpt.com \"Spring Security\"\n\n[6]: https://docs.spring.io/spring-security/reference/servlet/authorization/architecture.html?utm_source=chatgpt.com \"Authorization Architecture :: Spring Security\"\n\n[7]: https://docs.spring.io/spring-boot/reference/actuator/index.html?utm_source=chatgpt.com \"Production-ready Features\"\n\n[8]: https://docs.spring.io/spring-boot/reference/actuator/endpoints.html?utm_source=chatgpt.com \"Endpoints :: Spring Boot\"\n\n[9]: https://docs.spring.io/spring-boot/reference/actuator/metrics.html?utm_source=chatgpt.com \"Metrics :: Spring Boot\"\n\n[10]: https://docs.spring.io/spring-boot/reference/actuator/tracing.html?utm_source=chatgpt.com \"Tracing :: Spring Boot\"\n\n[11]: https://spring.io/projects/spring-cloud-stream?utm_source=chatgpt.com \"Spring Cloud Stream\"\n\n[12]: https://spring.io/projects/spring-batch?utm_source=chatgpt.com \"Spring Batch\"\n\n[13]: https://spring.io/projects/spring-graphql?utm_source=chatgpt.com \"Spring for GraphQL\"\n\n[14]: https://spring.io/projects/spring-cloud?utm_source=chatgpt.com \"Spring Cloud\"\n\n[15]: https://spring.io/projects/spring-cloud-gateway?utm_source=chatgpt.com \"Spring Cloud Gateway\"\n\n[16]: https://spring.io/projects/spring-ai \"Spring AI\"\n\n[17]: https://docs.spring.io/spring-ai/reference/api/chatmodel.html?utm_source=chatgpt.com \"Chat Model API :: Spring AI Reference\"\n\n[18]: https://docs.spring.io/spring-ai/reference/api/vectordbs.html?utm_source=chatgpt.com \"Vector Databases :: Spring AI Reference\"\n\n[19]: https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html?utm_source=chatgpt.com \"Retrieval Augmented Generation :: Spring AI Reference\"\n\n[20]: https://docs.spring.io/spring-ai/reference/api/chat-memory.html?utm_source=chatgpt.com \"Chat Memory :: Spring AI Reference\"\n\n[21]: https://docs.spring.io/spring-ai/reference/api/tools.html?utm_source=chatgpt.com \"Tool Calling :: Spring AI Reference\"\n\n[22]: https://docs.spring.io/spring-ai/reference/api/index.html?utm_source=chatgpt.com \"AI Model API\"",
        "codeExample": "Do not jump directly from basic Java to microservices or Spring AI.\n\nFirst become capable of building one complete, secure, tested,\nobservable and deployable Spring Boot monolith.",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Do not jump directly from basic Java to microservices or Spring AI.\n\nFirst become capable of building one complete, secure, tested,\nobservable and deployable Spring Boot monolith.",
            "caption": ""
          }
        ],
        "tables": [
          "| Stage | Focus                       | Build                             |\n| ----- | --------------------------- | --------------------------------- |\n| 1     | Spring Core and DI          | Console-based Spring application  |\n| 2     | Spring Boot fundamentals    | Simple web application            |\n| 3     | Spring MVC and REST         | Task API                          |\n| 4     | Validation and errors       | Production-style request handling |\n| 5     | JPA and Hibernate           | Database-backed API               |\n| 6     | Transactions and migrations | Banking or inventory module       |\n| 7     | Spring Security             | Secure role-based API             |\n| 8     | Testing                     | Fully tested application          |\n| 9     | Docker and Actuator         | Deployable application            |\n| 10    | Redis and messaging         | Event-driven application          |\n| 11    | Modular architecture        | Modular monolith                  |\n| 12    | Cloud and Kubernetes        | Cloud deployment                  |\n| 13    | Spring AI                   | Secure RAG application            |\n| 14    | Microservices               | Distributed backend platform      |"
        ],
        "notes": [
          "Identity service",
          "Product service",
          "Order service",
          "Payment service",
          "Inventory service",
          "Notification service",
          "AI assistant service",
          "API Gateway",
          "OAuth2/OIDC",
          "Kafka",
          "Redis",
          "PostgreSQL",
          "OpenTelemetry",
          "Prometheus",
          "Grafana",
          "Docker",
          "Kubernetes",
          "Why dependency injection works",
          "Where transaction boundaries belong",
          "How database queries perform",
          "How authentication and authorization differ",
          "How failures propagate",
          "How systems remain secure",
          "How applications are tested",
          "How production incidents are diagnosed",
          "When a monolith is better than microservices",
          "When AI output cannot be trusted"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "backend",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "backend",
        "roadmapLabel": "Backend",
        "roadmapBadge": "Spring / Java"
      }
    ]
  },
  {
    "id": 27,
    "title": "Database Fundamentals",
    "icon": "🗄️",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t1",
        "number": 1,
        "title": "Basic Database Concepts",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t1-s1",
            "title": "What data is"
          },
          {
            "id": "database-t1-s2",
            "title": "Database"
          },
          {
            "id": "database-t1-s3",
            "title": "Database Management System"
          },
          {
            "id": "database-t1-s4",
            "title": "Relational database"
          },
          {
            "id": "database-t1-s5",
            "title": "Non-relational database"
          },
          {
            "id": "database-t1-s6",
            "title": "Database server"
          },
          {
            "id": "database-t1-s7",
            "title": "Database client"
          },
          {
            "id": "database-t1-s8",
            "title": "Schema"
          },
          {
            "id": "database-t1-s9",
            "title": "Table"
          },
          {
            "id": "database-t1-s10",
            "title": "Row"
          },
          {
            "id": "database-t1-s11",
            "title": "Column"
          },
          {
            "id": "database-t1-s12",
            "title": "Record"
          },
          {
            "id": "database-t1-s13",
            "title": "Field"
          },
          {
            "id": "database-t1-s14",
            "title": "Data type"
          },
          {
            "id": "database-t1-s15",
            "title": "Query"
          },
          {
            "id": "database-t1-s16",
            "title": "Transaction"
          },
          {
            "id": "database-t1-s17",
            "title": "Database engine"
          },
          {
            "id": "database-t1-s18",
            "title": "Database instance"
          },
          {
            "id": "database-t1-s19",
            "title": "Metadata"
          }
        ],
        "overview": "**Basic Database Concepts** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: What data is, Database, Database Management System, Relational database, and 15 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t2",
        "number": 2,
        "title": "DBMS versus RDBMS",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**DBMS versus RDBMS** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [
          "| Category      | Examples                              |\n| ------------- | ------------------------------------- |\n| Relational    | PostgreSQL, MySQL, Oracle, SQL Server |\n| Document      | MongoDB, Couchbase                    |\n| Key-value     | Redis, DynamoDB                       |\n| Wide-column   | Cassandra, ScyllaDB                   |\n| Graph         | Neo4j, Amazon Neptune                 |\n| Search engine | Elasticsearch, OpenSearch             |\n| Time-series   | InfluxDB, TimescaleDB                 |"
        ],
        "notes": [
          "DBMS",
          "RDBMS",
          "SQL database",
          "NoSQL database",
          "In-memory database",
          "Distributed database",
          "Embedded database",
          "Cloud-managed database"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 28,
    "title": "Relational Database Fundamentals",
    "icon": "🗄️",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t3",
        "number": 1,
        "title": "Relational Model",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t3-s1",
            "title": "Relation"
          },
          {
            "id": "database-t3-s2",
            "title": "Tuple"
          },
          {
            "id": "database-t3-s3",
            "title": "Attribute"
          },
          {
            "id": "database-t3-s4",
            "title": "Domain"
          },
          {
            "id": "database-t3-s5",
            "title": "Relation schema"
          },
          {
            "id": "database-t3-s6",
            "title": "Database schema"
          },
          {
            "id": "database-t3-s7",
            "title": "Candidate key"
          },
          {
            "id": "database-t3-s8",
            "title": "Primary key"
          },
          {
            "id": "database-t3-s9",
            "title": "Alternate key"
          },
          {
            "id": "database-t3-s10",
            "title": "Composite key"
          },
          {
            "id": "database-t3-s11",
            "title": "Natural key"
          },
          {
            "id": "database-t3-s12",
            "title": "Surrogate key"
          },
          {
            "id": "database-t3-s13",
            "title": "Foreign key"
          },
          {
            "id": "database-t3-s14",
            "title": "Referential integrity"
          }
        ],
        "overview": "**Relational Model** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Relation, Tuple, Attribute, Domain, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t4",
        "number": 2,
        "title": "Relationships",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t4-s1",
            "title": "One-to-one"
          },
          {
            "id": "database-t4-s2",
            "title": "One-to-many"
          },
          {
            "id": "database-t4-s3",
            "title": "Many-to-one"
          },
          {
            "id": "database-t4-s4",
            "title": "Many-to-many"
          },
          {
            "id": "database-t4-s5",
            "title": "Self-referencing relationship"
          },
          {
            "id": "database-t4-s6",
            "title": "Optional relationship"
          },
          {
            "id": "database-t4-s7",
            "title": "Mandatory relationship"
          }
        ],
        "overview": "You should know how to convert each relationship into database tables.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 29,
    "title": "SQL Fundamentals",
    "icon": "🗄️",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "SQL can be divided into several groups. | Category | Purpose                     | | -------- | --------------------------- | | DDL      | Defines database structures | | DML      | Manipulates data            | | DQL      | Retrieves data              | | TCL      | Controls transactions       | | DCL      | Controls permissions        | ---",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t5",
        "number": 1,
        "title": "Data Definition Language",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t5-s1",
            "title": "`CREATE DATABASE`"
          },
          {
            "id": "database-t5-s2",
            "title": "`CREATE SCHEMA`"
          },
          {
            "id": "database-t5-s3",
            "title": "`CREATE TABLE`"
          },
          {
            "id": "database-t5-s4",
            "title": "`ALTER TABLE`"
          },
          {
            "id": "database-t5-s5",
            "title": "`DROP TABLE`"
          },
          {
            "id": "database-t5-s6",
            "title": "`TRUNCATE TABLE`"
          },
          {
            "id": "database-t5-s7",
            "title": "`RENAME`"
          },
          {
            "id": "database-t5-s8",
            "title": "`COMMENT`"
          }
        ],
        "overview": "**Data Definition Language** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `CREATE DATABASE`, `CREATE SCHEMA`, `CREATE TABLE`, `ALTER TABLE`, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "CREATE TABLE users (\n    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n);",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "CREATE TABLE users (\n    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP\n);",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t6",
        "number": 2,
        "title": "SQL Data Types",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t6-s1",
            "title": "`SMALLINT`"
          },
          {
            "id": "database-t6-s2",
            "title": "`INTEGER`"
          },
          {
            "id": "database-t6-s3",
            "title": "`BIGINT`"
          },
          {
            "id": "database-t6-s4",
            "title": "`DECIMAL`"
          },
          {
            "id": "database-t6-s5",
            "title": "`NUMERIC`"
          },
          {
            "id": "database-t6-s6",
            "title": "`REAL`"
          },
          {
            "id": "database-t6-s7",
            "title": "`DOUBLE PRECISION`"
          },
          {
            "id": "database-t6-s8",
            "title": "`CHAR`"
          },
          {
            "id": "database-t6-s9",
            "title": "`VARCHAR`"
          },
          {
            "id": "database-t6-s10",
            "title": "`TEXT`"
          },
          {
            "id": "database-t6-s11",
            "title": "`DATE`"
          },
          {
            "id": "database-t6-s12",
            "title": "`TIME`"
          },
          {
            "id": "database-t6-s13",
            "title": "`TIMESTAMP`"
          },
          {
            "id": "database-t6-s14",
            "title": "Timestamp with timezone"
          },
          {
            "id": "database-t6-s15",
            "title": "Interval"
          },
          {
            "id": "database-t6-s16",
            "title": "`BOOLEAN`"
          },
          {
            "id": "database-t6-s17",
            "title": "`UUID`"
          },
          {
            "id": "database-t6-s18",
            "title": "`JSON`"
          },
          {
            "id": "database-t6-s19",
            "title": "`JSONB`"
          },
          {
            "id": "database-t6-s20",
            "title": "Binary data"
          },
          {
            "id": "database-t6-s21",
            "title": "Arrays"
          },
          {
            "id": "database-t6-s22",
            "title": "Enum types"
          }
        ],
        "overview": "**SQL Data Types** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `SMALLINT`, `INTEGER`, `BIGINT`, `DECIMAL`, and 18 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "Never use FLOAT or DOUBLE for financial amounts.\nUse DECIMAL or NUMERIC.",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Never use FLOAT or DOUBLE for financial amounts.\nUse DECIMAL or NUMERIC.",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Numeric types",
            "items": [
              "`SMALLINT`",
              "`INTEGER`",
              "`BIGINT`",
              "`DECIMAL`",
              "`NUMERIC`",
              "`REAL`",
              "`DOUBLE PRECISION`"
            ]
          },
          {
            "title": "Character types",
            "items": [
              "`CHAR`",
              "`VARCHAR`",
              "`TEXT`"
            ]
          },
          {
            "title": "Date and time types",
            "items": [
              "`DATE`",
              "`TIME`",
              "`TIMESTAMP`",
              "Timestamp with timezone",
              "Interval"
            ]
          },
          {
            "title": "Other types",
            "items": [
              "`BOOLEAN`",
              "`UUID`",
              "`JSON`",
              "`JSONB`",
              "Binary data",
              "Arrays",
              "Enum types"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t7",
        "number": 3,
        "title": "Constraints",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t7-s1",
            "title": "`PRIMARY KEY`"
          },
          {
            "id": "database-t7-s2",
            "title": "`FOREIGN KEY`"
          },
          {
            "id": "database-t7-s3",
            "title": "`UNIQUE`"
          },
          {
            "id": "database-t7-s4",
            "title": "`NOT NULL`"
          },
          {
            "id": "database-t7-s5",
            "title": "`CHECK`"
          },
          {
            "id": "database-t7-s6",
            "title": "`DEFAULT`"
          },
          {
            "id": "database-t7-s7",
            "title": "Composite constraints"
          },
          {
            "id": "database-t7-s8",
            "title": "Cascading actions"
          }
        ],
        "overview": "**Constraints** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "CREATE TABLE orders (\n    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    user_id BIGINT NOT NULL,\n    total_amount NUMERIC(12, 2) NOT NULL CHECK (total_amount >= 0),\n\n    CONSTRAINT fk_orders_user\n        FOREIGN KEY (user_id)\n        REFERENCES users(id)\n        ON DELETE RESTRICT\n);",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "CREATE TABLE orders (\n    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    user_id BIGINT NOT NULL,\n    total_amount NUMERIC(12, 2) NOT NULL CHECK (total_amount >= 0),\n\n    CONSTRAINT fk_orders_user\n        FOREIGN KEY (user_id)\n        REFERENCES users(id)\n        ON DELETE RESTRICT\n);",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [
          "`CASCADE`",
          "`RESTRICT`",
          "`NO ACTION`",
          "`SET NULL`",
          "`SET DEFAULT`"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 30,
    "title": "Data Manipulation",
    "icon": "🗄️",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t8",
        "number": 1,
        "title": "Insert Data",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t8-s1",
            "title": "Single-row insert"
          },
          {
            "id": "database-t8-s2",
            "title": "Multiple-row insert"
          },
          {
            "id": "database-t8-s3",
            "title": "Insert from query"
          },
          {
            "id": "database-t8-s4",
            "title": "Default values"
          },
          {
            "id": "database-t8-s5",
            "title": "Returning generated values"
          },
          {
            "id": "database-t8-s6",
            "title": "Upsert"
          }
        ],
        "overview": "**Insert Data** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Single-row insert, Multiple-row insert, Insert from query, Default values, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "INSERT INTO users (name, email)\nVALUES ('Rahim', 'rahim@example.com');",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "INSERT INTO users (name, email)\nVALUES ('Rahim', 'rahim@example.com');",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t9",
        "number": 2,
        "title": "Update Data",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t9-s1",
            "title": "Updating one column"
          },
          {
            "id": "database-t9-s2",
            "title": "Updating multiple columns"
          },
          {
            "id": "database-t9-s3",
            "title": "Conditional updates"
          },
          {
            "id": "database-t9-s4",
            "title": "Updating from another table"
          },
          {
            "id": "database-t9-s5",
            "title": "Safe update practices"
          }
        ],
        "overview": "Never execute an `UPDATE` without checking the `WHERE` clause.",
        "codeExample": "UPDATE users\nSET name = 'Md. Rahim'\nWHERE id = 1;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "UPDATE users\nSET name = 'Md. Rahim'\nWHERE id = 1;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t10",
        "number": 3,
        "title": "Delete Data",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t10-s1",
            "title": "Conditional deletion"
          },
          {
            "id": "database-t10-s2",
            "title": "Delete with joins"
          },
          {
            "id": "database-t10-s3",
            "title": "Hard deletion"
          },
          {
            "id": "database-t10-s4",
            "title": "Soft deletion"
          },
          {
            "id": "database-t10-s5",
            "title": "Cascading deletion"
          }
        ],
        "overview": "**Delete Data** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Conditional deletion, Delete with joins, Hard deletion, Soft deletion, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "DELETE FROM users\nWHERE id = 1;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "DELETE FROM users\nWHERE id = 1;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 31,
    "title": "Querying Data",
    "icon": "🗄️",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t11",
        "number": 1,
        "title": "Basic `SELECT`",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t11-s1",
            "title": "Selecting columns"
          },
          {
            "id": "database-t11-s2",
            "title": "Selecting all columns"
          },
          {
            "id": "database-t11-s3",
            "title": "Column aliases"
          },
          {
            "id": "database-t11-s4",
            "title": "Table aliases"
          },
          {
            "id": "database-t11-s5",
            "title": "Calculated columns"
          },
          {
            "id": "database-t11-s6",
            "title": "Literal values"
          },
          {
            "id": "database-t11-s7",
            "title": "Removing duplicates with `DISTINCT`"
          }
        ],
        "overview": "Avoid using `SELECT *` in production queries unless it is genuinely appropriate.",
        "codeExample": "SELECT id, name, email\nFROM users;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT id, name, email\nFROM users;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t12",
        "number": 2,
        "title": "Filtering",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t12-s1",
            "title": "`WHERE`"
          },
          {
            "id": "database-t12-s2",
            "title": "Equality conditions"
          },
          {
            "id": "database-t12-s3",
            "title": "Comparison operators"
          },
          {
            "id": "database-t12-s4",
            "title": "`AND`"
          },
          {
            "id": "database-t12-s5",
            "title": "`OR`"
          },
          {
            "id": "database-t12-s6",
            "title": "`NOT`"
          },
          {
            "id": "database-t12-s7",
            "title": "`BETWEEN`"
          },
          {
            "id": "database-t12-s8",
            "title": "`IN`"
          },
          {
            "id": "database-t12-s9",
            "title": "`LIKE`"
          },
          {
            "id": "database-t12-s10",
            "title": "`ILIKE`"
          },
          {
            "id": "database-t12-s11",
            "title": "`IS NULL`"
          },
          {
            "id": "database-t12-s12",
            "title": "`IS NOT NULL`"
          },
          {
            "id": "database-t12-s13",
            "title": "Regular-expression filtering"
          }
        ],
        "overview": "**Filtering** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `WHERE`, Equality conditions, Comparison operators, `AND`, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "SELECT *\nFROM products\nWHERE price BETWEEN 500 AND 2000\n  AND stock_quantity > 0;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT *\nFROM products\nWHERE price BETWEEN 500 AND 2000\n  AND stock_quantity > 0;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t13",
        "number": 3,
        "title": "Sorting and Limiting",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t13-s1",
            "title": "`ORDER BY`"
          },
          {
            "id": "database-t13-s2",
            "title": "Ascending order"
          },
          {
            "id": "database-t13-s3",
            "title": "Descending order"
          },
          {
            "id": "database-t13-s4",
            "title": "Sorting by multiple columns"
          },
          {
            "id": "database-t13-s5",
            "title": "`LIMIT`"
          },
          {
            "id": "database-t13-s6",
            "title": "`OFFSET`"
          },
          {
            "id": "database-t13-s7",
            "title": "Top-N queries"
          },
          {
            "id": "database-t13-s8",
            "title": "Stable sorting"
          }
        ],
        "overview": "**Sorting and Limiting** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `ORDER BY`, Ascending order, Descending order, Sorting by multiple columns, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "SELECT *\nFROM products\nORDER BY price DESC, id ASC\nLIMIT 10;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT *\nFROM products\nORDER BY price DESC, id ASC\nLIMIT 10;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t14",
        "number": 4,
        "title": "Aggregate Functions",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t14-s1",
            "title": "`COUNT`"
          },
          {
            "id": "database-t14-s2",
            "title": "`SUM`"
          },
          {
            "id": "database-t14-s3",
            "title": "`AVG`"
          },
          {
            "id": "database-t14-s4",
            "title": "`MIN`"
          },
          {
            "id": "database-t14-s5",
            "title": "`MAX`"
          },
          {
            "id": "database-t14-s6",
            "title": "Aggregate expressions"
          },
          {
            "id": "database-t14-s7",
            "title": "Handling `NULL`"
          }
        ],
        "overview": "**Aggregate Functions** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `COUNT`, `SUM`, `AVG`, `MIN`, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "SELECT category_id, COUNT(*) AS product_count\nFROM products\nGROUP BY category_id;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT category_id, COUNT(*) AS product_count\nFROM products\nGROUP BY category_id;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t15",
        "number": 5,
        "title": "Grouping Data",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t15-s1",
            "title": "`GROUP BY`"
          },
          {
            "id": "database-t15-s2",
            "title": "Grouping by multiple columns"
          },
          {
            "id": "database-t15-s3",
            "title": "`HAVING`"
          },
          {
            "id": "database-t15-s4",
            "title": "Grouping sets"
          },
          {
            "id": "database-t15-s5",
            "title": "Rollup"
          },
          {
            "id": "database-t15-s6",
            "title": "Cube"
          }
        ],
        "overview": "**Grouping Data** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `GROUP BY`, Grouping by multiple columns, `HAVING`, Grouping sets, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "WHERE filters rows before grouping.\nHAVING filters groups after aggregation.",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "WHERE filters rows before grouping.\nHAVING filters groups after aggregation.",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 32,
    "title": "SQL Joins",
    "icon": "🗄️",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t16",
        "number": 1,
        "title": "Join Types",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t16-s1",
            "title": "Inner join"
          },
          {
            "id": "database-t16-s2",
            "title": "Left join"
          },
          {
            "id": "database-t16-s3",
            "title": "Right join"
          },
          {
            "id": "database-t16-s4",
            "title": "Full outer join"
          },
          {
            "id": "database-t16-s5",
            "title": "Cross join"
          },
          {
            "id": "database-t16-s6",
            "title": "Self join"
          },
          {
            "id": "database-t16-s7",
            "title": "Lateral join"
          },
          {
            "id": "database-t16-s8",
            "title": "Semi-join concept"
          },
          {
            "id": "database-t16-s9",
            "title": "Anti-join concept"
          }
        ],
        "overview": "**Join Types** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Inner join, Left join, Right join, Full outer join, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "SELECT o.id, u.name, o.total_amount\nFROM orders o\nJOIN users u ON u.id = o.user_id;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT o.id, u.name, o.total_amount\nFROM orders o\nJOIN users u ON u.id = o.user_id;",
            "caption": ""
          },
          {
            "lang": "sql",
            "code": "SELECT u.name, o.id\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id;",
            "caption": ""
          },
          {
            "lang": "sql",
            "code": "SELECT u.*\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\nWHERE o.id IS NULL;",
            "caption": ""
          },
          {
            "lang": "sql",
            "code": "SELECT u.*\nFROM users u\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM orders o\n    WHERE o.user_id = u.id\n);",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Inner join",
            "items": []
          },
          {
            "title": "Left join",
            "items": []
          },
          {
            "title": "Find users without orders",
            "items": []
          }
        ],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 33,
    "title": "Subqueries and CTEs",
    "icon": "🗄️",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t17",
        "number": 1,
        "title": "Subqueries",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t17-s1",
            "title": "Scalar subqueries"
          },
          {
            "id": "database-t17-s2",
            "title": "Row subqueries"
          },
          {
            "id": "database-t17-s3",
            "title": "Table subqueries"
          },
          {
            "id": "database-t17-s4",
            "title": "Correlated subqueries"
          },
          {
            "id": "database-t17-s5",
            "title": "Subqueries in `SELECT`"
          },
          {
            "id": "database-t17-s6",
            "title": "Subqueries in `FROM`"
          },
          {
            "id": "database-t17-s7",
            "title": "Subqueries in `WHERE`"
          },
          {
            "id": "database-t17-s8",
            "title": "`EXISTS`"
          },
          {
            "id": "database-t17-s9",
            "title": "`NOT EXISTS`"
          },
          {
            "id": "database-t17-s10",
            "title": "`ANY`"
          },
          {
            "id": "database-t17-s11",
            "title": "`ALL`"
          }
        ],
        "overview": "**Subqueries** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Scalar subqueries, Row subqueries, Table subqueries, Correlated subqueries, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t18",
        "number": 2,
        "title": "Common Table Expressions",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t18-s1",
            "title": "Basic CTE"
          },
          {
            "id": "database-t18-s2",
            "title": "Multiple CTEs"
          },
          {
            "id": "database-t18-s3",
            "title": "Recursive CTE"
          },
          {
            "id": "database-t18-s4",
            "title": "Hierarchical data"
          },
          {
            "id": "database-t18-s5",
            "title": "Recursive traversal"
          }
        ],
        "overview": "**Common Table Expressions** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Basic CTE, Multiple CTEs, Recursive CTE, Hierarchical data, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "WITH active_users AS (\n    SELECT id, name\n    FROM users\n    WHERE active = TRUE\n)\nSELECT *\nFROM active_users;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "WITH active_users AS (\n    SELECT id, name\n    FROM users\n    WHERE active = TRUE\n)\nSELECT *\nFROM active_users;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [
          "Organization hierarchy",
          "Product categories",
          "Folder structures",
          "Referral networks",
          "Tree traversal"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 34,
    "title": "Advanced SQL",
    "icon": "🗄️",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t19",
        "number": 1,
        "title": "Window Functions",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t19-s1",
            "title": "`OVER`"
          },
          {
            "id": "database-t19-s2",
            "title": "`PARTITION BY`"
          },
          {
            "id": "database-t19-s3",
            "title": "`ORDER BY`"
          },
          {
            "id": "database-t19-s4",
            "title": "Window frames"
          },
          {
            "id": "database-t19-s5",
            "title": "`ROW_NUMBER`"
          },
          {
            "id": "database-t19-s6",
            "title": "`RANK`"
          },
          {
            "id": "database-t19-s7",
            "title": "`DENSE_RANK`"
          },
          {
            "id": "database-t19-s8",
            "title": "`LAG`"
          },
          {
            "id": "database-t19-s9",
            "title": "`LEAD`"
          },
          {
            "id": "database-t19-s10",
            "title": "Running total"
          },
          {
            "id": "database-t19-s11",
            "title": "Moving average"
          },
          {
            "id": "database-t19-s12",
            "title": "First value"
          },
          {
            "id": "database-t19-s13",
            "title": "Last value"
          },
          {
            "id": "database-t19-s14",
            "title": "Percent rank"
          }
        ],
        "overview": "Window functions are essential for advanced backend reporting.",
        "codeExample": "SELECT\n    employee_id,\n    department_id,\n    salary,\n    RANK() OVER (\n        PARTITION BY department_id\n        ORDER BY salary DESC\n    ) AS salary_rank\nFROM employees;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT\n    employee_id,\n    department_id,\n    salary,\n    RANK() OVER (\n        PARTITION BY department_id\n        ORDER BY salary DESC\n    ) AS salary_rank\nFROM employees;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t20",
        "number": 2,
        "title": "Conditional Logic",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t20-s1",
            "title": "`CASE`"
          },
          {
            "id": "database-t20-s2",
            "title": "`COALESCE`"
          },
          {
            "id": "database-t20-s3",
            "title": "`NULLIF`"
          },
          {
            "id": "database-t20-s4",
            "title": "Conditional aggregation"
          },
          {
            "id": "database-t20-s5",
            "title": "Conditional ordering"
          }
        ],
        "overview": "**Conditional Logic** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `CASE`, `COALESCE`, `NULLIF`, Conditional aggregation, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "SELECT\n    name,\n    CASE\n        WHEN stock_quantity = 0 THEN 'Out of stock'\n        WHEN stock_quantity < 10 THEN 'Low stock'\n        ELSE 'Available'\n    END AS stock_status\nFROM products;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT\n    name,\n    CASE\n        WHEN stock_quantity = 0 THEN 'Out of stock'\n        WHEN stock_quantity < 10 THEN 'Low stock'\n        ELSE 'Available'\n    END AS stock_status\nFROM products;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t21",
        "number": 3,
        "title": "Set Operations",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t21-s1",
            "title": "`UNION`"
          },
          {
            "id": "database-t21-s2",
            "title": "`UNION ALL`"
          },
          {
            "id": "database-t21-s3",
            "title": "`INTERSECT`"
          },
          {
            "id": "database-t21-s4",
            "title": "`EXCEPT`"
          },
          {
            "id": "database-t21-s5",
            "title": "Column compatibility"
          },
          {
            "id": "database-t21-s6",
            "title": "Duplicate handling"
          }
        ],
        "overview": "**Set Operations** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `UNION`, `UNION ALL`, `INTERSECT`, `EXCEPT`, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t22",
        "number": 4,
        "title": "Working with `NULL`",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Understand carefully:\n\nLearn SQL three-valued logic:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "`NULL` is not zero",
          "`NULL` is not an empty string",
          "`NULL = NULL` is not true",
          "Use `IS NULL`",
          "Aggregate functions often ignore `NULL`",
          "`NOT IN` can behave unexpectedly with `NULL`",
          "True",
          "False",
          "Unknown"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 35,
    "title": "Database Design",
    "icon": "🗄️",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t23",
        "number": 1,
        "title": "Entity-Relationship Modeling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t23-s1",
            "title": "Entity"
          },
          {
            "id": "database-t23-s2",
            "title": "Attribute"
          },
          {
            "id": "database-t23-s3",
            "title": "Relationship"
          },
          {
            "id": "database-t23-s4",
            "title": "Cardinality"
          },
          {
            "id": "database-t23-s5",
            "title": "Participation"
          },
          {
            "id": "database-t23-s6",
            "title": "Weak entity"
          },
          {
            "id": "database-t23-s7",
            "title": "Associative entity"
          },
          {
            "id": "database-t23-s8",
            "title": "ER diagrams"
          },
          {
            "id": "database-t23-s9",
            "title": "Logical data models"
          },
          {
            "id": "database-t23-s10",
            "title": "Physical data models"
          }
        ],
        "overview": "**Entity-Relationship Modeling** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Entity, Attribute, Relationship, Cardinality, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Draw.io",
          "dbdiagram.io",
          "MySQL Workbench",
          "DBeaver",
          "pgModeler"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t24",
        "number": 2,
        "title": "Normalization",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t24-s1",
            "title": "Boyce-Codd Normal Form"
          },
          {
            "id": "database-t24-s2",
            "title": "Fourth Normal Form"
          },
          {
            "id": "database-t24-s3",
            "title": "Functional dependencies"
          },
          {
            "id": "database-t24-s4",
            "title": "Partial dependencies"
          },
          {
            "id": "database-t24-s5",
            "title": "Transitive dependencies"
          }
        ],
        "overview": "**Normalization** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Boyce-Codd Normal Form, Fourth Normal Form, Functional dependencies, Partial dependencies, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Atomic values",
          "No repeating groups",
          "Must be in 1NF",
          "No partial dependency on a composite key",
          "Must be in 2NF",
          "No transitive dependency"
        ],
        "subSections": [
          {
            "title": "First Normal Form",
            "items": [
              "Atomic values",
              "No repeating groups"
            ]
          },
          {
            "title": "Second Normal Form",
            "items": [
              "Must be in 1NF",
              "No partial dependency on a composite key"
            ]
          },
          {
            "title": "Third Normal Form",
            "items": [
              "Must be in 2NF",
              "No transitive dependency",
              "Boyce-Codd Normal Form",
              "Fourth Normal Form",
              "Functional dependencies",
              "Partial dependencies",
              "Transitive dependencies"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t25",
        "number": 3,
        "title": "Denormalization",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Learn when denormalization is useful:\n\nUnderstand the costs:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Read-heavy reporting",
          "Analytics",
          "Search",
          "Precomputed summaries",
          "Reducing expensive joins",
          "Duplicate data",
          "More complicated updates",
          "Consistency risks",
          "Larger storage requirements"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t26",
        "number": 4,
        "title": "Schema Design Principles",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t26-s1",
            "title": "Use meaningful table names"
          },
          {
            "id": "database-t26-s2",
            "title": "Use consistent naming"
          },
          {
            "id": "database-t26-s3",
            "title": "Choose correct data types"
          },
          {
            "id": "database-t26-s4",
            "title": "Add necessary constraints"
          },
          {
            "id": "database-t26-s5",
            "title": "Avoid storing comma-separated values"
          },
          {
            "id": "database-t26-s6",
            "title": "Do not store calculated data unnecessarily"
          },
          {
            "id": "database-t26-s7",
            "title": "Avoid unnecessary nullable columns"
          },
          {
            "id": "database-t26-s8",
            "title": "Avoid excessive use of generic JSON columns"
          },
          {
            "id": "database-t26-s9",
            "title": "Model money correctly"
          },
          {
            "id": "database-t26-s10",
            "title": "Model dates and time zones correctly"
          },
          {
            "id": "database-t26-s11",
            "title": "Design for expected queries"
          }
        ],
        "overview": "**Schema Design Principles** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Use meaningful table names, Use consistent naming, Choose correct data types, Add necessary constraints, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 36,
    "title": "Indexing",
    "icon": "🗄️",
    "color": "#ec4899",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t27",
        "number": 1,
        "title": "Index Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t27-s1",
            "title": "What an index is"
          },
          {
            "id": "database-t27-s2",
            "title": "Index lookup"
          },
          {
            "id": "database-t27-s3",
            "title": "Table scan"
          },
          {
            "id": "database-t27-s4",
            "title": "Index scan"
          },
          {
            "id": "database-t27-s5",
            "title": "Index-only scan"
          },
          {
            "id": "database-t27-s6",
            "title": "Clustered index concept"
          },
          {
            "id": "database-t27-s7",
            "title": "Non-clustered index concept"
          },
          {
            "id": "database-t27-s8",
            "title": "Selectivity"
          },
          {
            "id": "database-t27-s9",
            "title": "Cardinality"
          },
          {
            "id": "database-t27-s10",
            "title": "Index maintenance cost"
          }
        ],
        "overview": "**Index Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: What an index is, Index lookup, Table scan, Index scan, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t28",
        "number": 2,
        "title": "Index Types",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t28-s1",
            "title": "B-tree index"
          },
          {
            "id": "database-t28-s2",
            "title": "Hash index"
          },
          {
            "id": "database-t28-s3",
            "title": "Composite index"
          },
          {
            "id": "database-t28-s4",
            "title": "Unique index"
          },
          {
            "id": "database-t28-s5",
            "title": "Partial index"
          },
          {
            "id": "database-t28-s6",
            "title": "Functional index"
          },
          {
            "id": "database-t28-s7",
            "title": "Covering index"
          },
          {
            "id": "database-t28-s8",
            "title": "Full-text index"
          },
          {
            "id": "database-t28-s9",
            "title": "Spatial index"
          },
          {
            "id": "database-t28-s10",
            "title": "GIN index"
          },
          {
            "id": "database-t28-s11",
            "title": "GiST index"
          },
          {
            "id": "database-t28-s12",
            "title": "BRIN index"
          },
          {
            "id": "database-t28-s13",
            "title": "Expression index"
          }
        ],
        "overview": "**Index Types** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: B-tree index, Hash index, Composite index, Unique index, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t29",
        "number": 3,
        "title": "Composite Indexes",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Understand column order.\n\nIt may efficiently support queries using:\n\nBut it may not efficiently support a query using only `created_at`.",
        "codeExample": "CREATE INDEX idx_orders_user_status_created\nON orders (user_id, status, created_at);",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "CREATE INDEX idx_orders_user_status_created\nON orders (user_id, status, created_at);",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [
          "`user_id`",
          "`user_id, status`",
          "`user_id, status, created_at`",
          "Leftmost-prefix concept",
          "Equality columns before range columns",
          "Sorting through indexes",
          "Covering queries",
          "Index selectivity"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t30",
        "number": 4,
        "title": "When Not to Add an Index",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Avoid unnecessary indexes when:\n\nEvery additional index can slow down:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "The table is very small",
          "The column has very low selectivity",
          "The column is frequently updated",
          "The index duplicates another index",
          "The query is rarely executed",
          "Write performance is more important",
          "Insert",
          "Update",
          "Delete",
          "Vacuuming",
          "Replication",
          "Backup size"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 37,
    "title": "Query Optimization",
    "icon": "🗄️",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t31",
        "number": 1,
        "title": "Query Execution Plans",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t31-s1",
            "title": "`EXPLAIN`"
          },
          {
            "id": "database-t31-s2",
            "title": "`EXPLAIN ANALYZE`"
          },
          {
            "id": "database-t31-s3",
            "title": "Sequential scan"
          },
          {
            "id": "database-t31-s4",
            "title": "Index scan"
          },
          {
            "id": "database-t31-s5",
            "title": "Bitmap index scan"
          },
          {
            "id": "database-t31-s6",
            "title": "Nested-loop join"
          },
          {
            "id": "database-t31-s7",
            "title": "Hash join"
          },
          {
            "id": "database-t31-s8",
            "title": "Merge join"
          },
          {
            "id": "database-t31-s9",
            "title": "Sort operation"
          },
          {
            "id": "database-t31-s10",
            "title": "Estimated rows"
          },
          {
            "id": "database-t31-s11",
            "title": "Actual rows"
          },
          {
            "id": "database-t31-s12",
            "title": "Query cost"
          },
          {
            "id": "database-t31-s13",
            "title": "Planning time"
          },
          {
            "id": "database-t31-s14",
            "title": "Execution time"
          }
        ],
        "overview": "**Query Execution Plans** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `EXPLAIN`, `EXPLAIN ANALYZE`, Sequential scan, Index scan, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t32",
        "number": 2,
        "title": "Query-Optimization Techniques",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t32-s1",
            "title": "Select only required columns"
          },
          {
            "id": "database-t32-s2",
            "title": "Add appropriate indexes"
          },
          {
            "id": "database-t32-s3",
            "title": "Avoid functions on indexed columns when possible"
          },
          {
            "id": "database-t32-s4",
            "title": "Avoid leading wildcard searches"
          },
          {
            "id": "database-t32-s5",
            "title": "Avoid unnecessary joins"
          },
          {
            "id": "database-t32-s6",
            "title": "Avoid N+1 queries"
          },
          {
            "id": "database-t32-s7",
            "title": "Use batch operations"
          },
          {
            "id": "database-t32-s8",
            "title": "Use pagination"
          },
          {
            "id": "database-t32-s9",
            "title": "Check execution plans"
          },
          {
            "id": "database-t32-s10",
            "title": "Avoid very large `IN` lists"
          },
          {
            "id": "database-t32-s11",
            "title": "Avoid unnecessary `DISTINCT`"
          },
          {
            "id": "database-t32-s12",
            "title": "Use `EXISTS` appropriately"
          },
          {
            "id": "database-t32-s13",
            "title": "Partition large tables"
          },
          {
            "id": "database-t32-s14",
            "title": "Archive old data"
          },
          {
            "id": "database-t32-s15",
            "title": "Precompute expensive reports when necessary"
          }
        ],
        "overview": "**Query-Optimization Techniques** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Select only required columns, Add appropriate indexes, Avoid functions on indexed columns when possible, Avoid leading wildcard searches, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 38,
    "title": "Transactions and ACID",
    "icon": "🗄️",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t33",
        "number": 1,
        "title": "ACID Properties",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "All transaction operations succeed or all fail.\n\nThe database moves from one valid state to another.\n\nConcurrent transactions should not improperly interfere.\n\nCommitted changes survive failures.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Atomicity",
            "items": []
          },
          {
            "title": "Consistency",
            "items": []
          },
          {
            "title": "Isolation",
            "items": []
          },
          {
            "title": "Durability",
            "items": []
          }
        ],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t34",
        "number": 2,
        "title": "Transaction Control",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t34-s1",
            "title": "`BEGIN`"
          },
          {
            "id": "database-t34-s2",
            "title": "`COMMIT`"
          },
          {
            "id": "database-t34-s3",
            "title": "`ROLLBACK`"
          },
          {
            "id": "database-t34-s4",
            "title": "`SAVEPOINT`"
          },
          {
            "id": "database-t34-s5",
            "title": "Rollback to savepoint"
          },
          {
            "id": "database-t34-s6",
            "title": "Autocommit"
          },
          {
            "id": "database-t34-s7",
            "title": "Nested-transaction concepts"
          }
        ],
        "overview": "**Transaction Control** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "BEGIN;\n\nUPDATE accounts\nSET balance = balance - 1000\nWHERE id = 1;\n\nUPDATE accounts\nSET balance = balance + 1000\nWHERE id = 2;\n\nCOMMIT;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "BEGIN;\n\nUPDATE accounts\nSET balance = balance - 1000\nWHERE id = 1;\n\nUPDATE accounts\nSET balance = balance + 1000\nWHERE id = 2;\n\nCOMMIT;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t35",
        "number": 3,
        "title": "Transaction Isolation Levels",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t35-s1",
            "title": "Read Uncommitted"
          },
          {
            "id": "database-t35-s2",
            "title": "Read Committed"
          },
          {
            "id": "database-t35-s3",
            "title": "Repeatable Read"
          },
          {
            "id": "database-t35-s4",
            "title": "Serializable"
          }
        ],
        "overview": "**Transaction Isolation Levels** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Read Uncommitted, Read Committed, Repeatable Read, Serializable.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Dirty read",
          "Non-repeatable read",
          "Phantom read",
          "Lost update",
          "Write skew"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t36",
        "number": 4,
        "title": "Locking",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t36-s1",
            "title": "Shared lock"
          },
          {
            "id": "database-t36-s2",
            "title": "Exclusive lock"
          },
          {
            "id": "database-t36-s3",
            "title": "Row-level lock"
          },
          {
            "id": "database-t36-s4",
            "title": "Table-level lock"
          },
          {
            "id": "database-t36-s5",
            "title": "Advisory lock"
          },
          {
            "id": "database-t36-s6",
            "title": "Optimistic locking"
          },
          {
            "id": "database-t36-s7",
            "title": "Pessimistic locking"
          },
          {
            "id": "database-t36-s8",
            "title": "Lock timeout"
          },
          {
            "id": "database-t36-s9",
            "title": "Deadlock"
          }
        ],
        "overview": "**Locking** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Shared lock, Exclusive lock, Row-level lock, Table-level lock, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "SELECT *\nFROM accounts\nWHERE id = 1\nFOR UPDATE;",
        "codeExampleLang": "sql",
        "codeExamples": [
          {
            "lang": "sql",
            "code": "SELECT *\nFROM accounts\nWHERE id = 1\nFOR UPDATE;",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t37",
        "number": 5,
        "title": "MVCC",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Learn Multi-Version Concurrency Control:\n\nMVCC is especially important when learning PostgreSQL.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Readers and writers",
          "Transaction snapshots",
          "Row versions",
          "Visibility rules",
          "Vacuuming",
          "Long-running transactions",
          "Transaction ID wraparound concepts"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 39,
    "title": "Database Objects",
    "icon": "🗄️",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t38",
        "number": 1,
        "title": "Views",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t38-s1",
            "title": "Simple views"
          },
          {
            "id": "database-t38-s2",
            "title": "Complex views"
          },
          {
            "id": "database-t38-s3",
            "title": "Updatable views"
          },
          {
            "id": "database-t38-s4",
            "title": "Security views"
          },
          {
            "id": "database-t38-s5",
            "title": "Views as abstraction layers"
          }
        ],
        "overview": "**Views** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Simple views, Complex views, Updatable views, Security views, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t39",
        "number": 2,
        "title": "Materialized Views",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t39-s1",
            "title": "Stored query results"
          },
          {
            "id": "database-t39-s2",
            "title": "Refreshing materialized views"
          },
          {
            "id": "database-t39-s3",
            "title": "Concurrent refresh concepts"
          },
          {
            "id": "database-t39-s4",
            "title": "Indexes on materialized views"
          },
          {
            "id": "database-t39-s5",
            "title": "Reporting use cases"
          }
        ],
        "overview": "**Materialized Views** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Stored query results, Refreshing materialized views, Concurrent refresh concepts, Indexes on materialized views, and 1 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t40",
        "number": 3,
        "title": "Stored Procedures and Functions",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t40-s1",
            "title": "Stored function"
          },
          {
            "id": "database-t40-s2",
            "title": "Stored procedure"
          },
          {
            "id": "database-t40-s3",
            "title": "Input parameters"
          },
          {
            "id": "database-t40-s4",
            "title": "Output parameters"
          },
          {
            "id": "database-t40-s5",
            "title": "Local variables"
          },
          {
            "id": "database-t40-s6",
            "title": "Conditional logic"
          },
          {
            "id": "database-t40-s7",
            "title": "Loops"
          },
          {
            "id": "database-t40-s8",
            "title": "Exception handling"
          },
          {
            "id": "database-t40-s9",
            "title": "Transaction behavior"
          },
          {
            "id": "database-t40-s10",
            "title": "When business logic belongs in the database"
          }
        ],
        "overview": "Use them selectively. Do not place all application business logic inside stored procedures.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t41",
        "number": 4,
        "title": "Triggers",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t41-s1",
            "title": "Before trigger"
          },
          {
            "id": "database-t41-s2",
            "title": "After trigger"
          },
          {
            "id": "database-t41-s3",
            "title": "Row-level trigger"
          },
          {
            "id": "database-t41-s4",
            "title": "Statement-level trigger"
          },
          {
            "id": "database-t41-s5",
            "title": "Audit triggers"
          },
          {
            "id": "database-t41-s6",
            "title": "Validation triggers"
          },
          {
            "id": "database-t41-s7",
            "title": "Trigger recursion"
          },
          {
            "id": "database-t41-s8",
            "title": "Hidden side effects"
          }
        ],
        "overview": "Triggers can be powerful, but excessive trigger usage makes systems difficult to debug.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 40,
    "title": "PostgreSQL Roadmap",
    "icon": "🗄️",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "For Java backend development, **PostgreSQL is an excellent primary database**.",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t42",
        "number": 1,
        "title": "PostgreSQL Essentials",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t42-s1",
            "title": "Installation"
          },
          {
            "id": "database-t42-s2",
            "title": "`psql`"
          },
          {
            "id": "database-t42-s3",
            "title": "Databases"
          },
          {
            "id": "database-t42-s4",
            "title": "Schemas"
          },
          {
            "id": "database-t42-s5",
            "title": "Roles"
          },
          {
            "id": "database-t42-s6",
            "title": "Permissions"
          },
          {
            "id": "database-t42-s7",
            "title": "Identity columns"
          },
          {
            "id": "database-t42-s8",
            "title": "Sequences"
          },
          {
            "id": "database-t42-s9",
            "title": "UUID"
          },
          {
            "id": "database-t42-s10",
            "title": "Arrays"
          },
          {
            "id": "database-t42-s11",
            "title": "JSONB"
          },
          {
            "id": "database-t42-s12",
            "title": "Enums"
          },
          {
            "id": "database-t42-s13",
            "title": "Full-text search"
          },
          {
            "id": "database-t42-s14",
            "title": "Generated columns"
          },
          {
            "id": "database-t42-s15",
            "title": "Extensions"
          }
        ],
        "overview": "**PostgreSQL Essentials** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Installation, `psql`, Databases, Schemas, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t43",
        "number": 2,
        "title": "PostgreSQL Advanced Features",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t43-s1",
            "title": "`RETURNING`"
          },
          {
            "id": "database-t43-s2",
            "title": "`ON CONFLICT`"
          },
          {
            "id": "database-t43-s3",
            "title": "Partial indexes"
          },
          {
            "id": "database-t43-s4",
            "title": "Expression indexes"
          },
          {
            "id": "database-t43-s5",
            "title": "JSONB operators"
          },
          {
            "id": "database-t43-s6",
            "title": "Array operators"
          },
          {
            "id": "database-t43-s7",
            "title": "Range types"
          },
          {
            "id": "database-t43-s8",
            "title": "Lateral joins"
          },
          {
            "id": "database-t43-s9",
            "title": "Recursive CTEs"
          },
          {
            "id": "database-t43-s10",
            "title": "Window functions"
          },
          {
            "id": "database-t43-s11",
            "title": "Full-text search"
          },
          {
            "id": "database-t43-s12",
            "title": "Table partitioning"
          },
          {
            "id": "database-t43-s13",
            "title": "Logical replication"
          },
          {
            "id": "database-t43-s14",
            "title": "Row-level security"
          }
        ],
        "overview": "**PostgreSQL Advanced Features** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `RETURNING`, `ON CONFLICT`, Partial indexes, Expression indexes, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t44",
        "number": 3,
        "title": "PostgreSQL Administration Basics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t44-s1",
            "title": "Configuration files"
          },
          {
            "id": "database-t44-s2",
            "title": "Connection limits"
          },
          {
            "id": "database-t44-s3",
            "title": "Role management"
          },
          {
            "id": "database-t44-s4",
            "title": "Database privileges"
          },
          {
            "id": "database-t44-s5",
            "title": "Vacuum"
          },
          {
            "id": "database-t44-s6",
            "title": "Autovacuum"
          },
          {
            "id": "database-t44-s7",
            "title": "Analyze"
          },
          {
            "id": "database-t44-s8",
            "title": "Write-ahead logging"
          },
          {
            "id": "database-t44-s9",
            "title": "Checkpoints"
          },
          {
            "id": "database-t44-s10",
            "title": "Backup and restore"
          },
          {
            "id": "database-t44-s11",
            "title": "Replication concepts"
          },
          {
            "id": "database-t44-s12",
            "title": "Monitoring slow queries"
          }
        ],
        "overview": "**PostgreSQL Administration Basics** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Configuration files, Connection limits, Role management, Database privileges, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 41,
    "title": "Database Security",
    "icon": "🗄️",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t45",
        "number": 1,
        "title": "Authentication and Authorization",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t45-s1",
            "title": "Database users"
          },
          {
            "id": "database-t45-s2",
            "title": "Roles"
          },
          {
            "id": "database-t45-s3",
            "title": "Permissions"
          },
          {
            "id": "database-t45-s4",
            "title": "Ownership"
          },
          {
            "id": "database-t45-s5",
            "title": "Grant"
          },
          {
            "id": "database-t45-s6",
            "title": "Revoke"
          },
          {
            "id": "database-t45-s7",
            "title": "Principle of least privilege"
          },
          {
            "id": "database-t45-s8",
            "title": "Separate application and administrator users"
          }
        ],
        "overview": "**Authentication and Authorization** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Database users, Roles, Permissions, Ownership, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t46",
        "number": 2,
        "title": "SQL Injection Prevention",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**SQL Injection Prevention** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "String sql = \"SELECT * FROM users WHERE email = '\" + email + \"'\";",
        "codeExampleLang": "java",
        "codeExamples": [
          {
            "lang": "java",
            "code": "String sql = \"SELECT * FROM users WHERE email = '\" + email + \"'\";",
            "caption": ""
          },
          {
            "lang": "java",
            "code": "String sql = \"SELECT * FROM users WHERE email = ?\";",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [
          "Prepared statements",
          "Parameter binding",
          "Input validation",
          "ORM query parameters",
          "Dynamic query safety",
          "Stored-procedure injection risks"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t47",
        "number": 3,
        "title": "Data Protection",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t47-s1",
            "title": "Encryption in transit"
          },
          {
            "id": "database-t47-s2",
            "title": "TLS"
          },
          {
            "id": "database-t47-s3",
            "title": "Encryption at rest"
          },
          {
            "id": "database-t47-s4",
            "title": "Password hashing"
          },
          {
            "id": "database-t47-s5",
            "title": "Field-level encryption"
          },
          {
            "id": "database-t47-s6",
            "title": "Key management"
          },
          {
            "id": "database-t47-s7",
            "title": "Data masking"
          },
          {
            "id": "database-t47-s8",
            "title": "Tokenization"
          },
          {
            "id": "database-t47-s9",
            "title": "Audit logs"
          },
          {
            "id": "database-t47-s10",
            "title": "Sensitive-data classification"
          },
          {
            "id": "database-t47-s11",
            "title": "Data-retention policies"
          }
        ],
        "overview": "**Data Protection** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Encryption in transit, TLS, Encryption at rest, Password hashing, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 42,
    "title": "Database Migrations",
    "icon": "🗄️",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t48",
        "number": 1,
        "title": "Migration Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t48-s1",
            "title": "Version-controlled schema"
          },
          {
            "id": "database-t48-s2",
            "title": "Repeatable migrations"
          },
          {
            "id": "database-t48-s3",
            "title": "Roll-forward strategy"
          },
          {
            "id": "database-t48-s4",
            "title": "Migration checksum"
          },
          {
            "id": "database-t48-s5",
            "title": "Baseline"
          },
          {
            "id": "database-t48-s6",
            "title": "Seed data"
          },
          {
            "id": "database-t48-s7",
            "title": "Data migration"
          },
          {
            "id": "database-t48-s8",
            "title": "Schema migration"
          },
          {
            "id": "database-t48-s9",
            "title": "Backward-compatible changes"
          }
        ],
        "overview": "**Migration Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Version-controlled schema, Repeatable migrations, Roll-forward strategy, Migration checksum, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Flyway",
          "Liquibase"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t49",
        "number": 2,
        "title": "Zero-Downtime Migrations",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Learn the expand-and-contract pattern:\n\n1. Add a new nullable column.\n\n2. Deploy code that writes both old and new formats.\n\n3. Backfill existing data.\n\n4. Switch reads to the new column.\n\n5. Stop using the old column.\n\n6. Remove the old column later.\n\nAvoid making destructive schema changes during a single deployment.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 43,
    "title": "Backup, Recovery and Reliability",
    "icon": "🗄️",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t50",
        "number": 1,
        "title": "Backup Types",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t50-s1",
            "title": "Full backup"
          },
          {
            "id": "database-t50-s2",
            "title": "Incremental backup"
          },
          {
            "id": "database-t50-s3",
            "title": "Differential backup"
          },
          {
            "id": "database-t50-s4",
            "title": "Logical backup"
          },
          {
            "id": "database-t50-s5",
            "title": "Physical backup"
          },
          {
            "id": "database-t50-s6",
            "title": "Snapshot"
          },
          {
            "id": "database-t50-s7",
            "title": "Point-in-time recovery"
          }
        ],
        "overview": "**Backup Types** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Full backup, Incremental backup, Differential backup, Logical backup, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t51",
        "number": 2,
        "title": "Reliability Concepts",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t51-s1",
            "title": "Recovery Point Objective"
          },
          {
            "id": "database-t51-s2",
            "title": "Recovery Time Objective"
          },
          {
            "id": "database-t51-s3",
            "title": "Write-ahead log"
          },
          {
            "id": "database-t51-s4",
            "title": "Replication"
          },
          {
            "id": "database-t51-s5",
            "title": "Failover"
          },
          {
            "id": "database-t51-s6",
            "title": "High availability"
          },
          {
            "id": "database-t51-s7",
            "title": "Disaster recovery"
          },
          {
            "id": "database-t51-s8",
            "title": "Backup verification"
          },
          {
            "id": "database-t51-s9",
            "title": "Restore testing"
          }
        ],
        "overview": "A backup is not trustworthy until you have successfully tested restoration.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 44,
    "title": "Java and Spring Database Integration",
    "icon": "🗄️",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t52",
        "number": 1,
        "title": "JDBC",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t52-s1",
            "title": "Driver"
          },
          {
            "id": "database-t52-s2",
            "title": "Connection"
          },
          {
            "id": "database-t52-s3",
            "title": "Statement"
          },
          {
            "id": "database-t52-s4",
            "title": "Prepared statement"
          },
          {
            "id": "database-t52-s5",
            "title": "Result set"
          },
          {
            "id": "database-t52-s6",
            "title": "Batch operations"
          },
          {
            "id": "database-t52-s7",
            "title": "Transactions"
          },
          {
            "id": "database-t52-s8",
            "title": "Savepoints"
          },
          {
            "id": "database-t52-s9",
            "title": "Connection pooling"
          },
          {
            "id": "database-t52-s10",
            "title": "Resource closing"
          },
          {
            "id": "database-t52-s11",
            "title": "Try-with-resources"
          }
        ],
        "overview": "**JDBC** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Driver, Connection, Statement, Prepared statement, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t53",
        "number": 2,
        "title": "Spring JDBC",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t53-s1",
            "title": "`JdbcTemplate`"
          },
          {
            "id": "database-t53-s2",
            "title": "Named parameters"
          },
          {
            "id": "database-t53-s3",
            "title": "Row mapper"
          },
          {
            "id": "database-t53-s4",
            "title": "Batch updates"
          },
          {
            "id": "database-t53-s5",
            "title": "Transaction management"
          },
          {
            "id": "database-t53-s6",
            "title": "Exception translation"
          }
        ],
        "overview": "**Spring JDBC** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `JdbcTemplate`, Named parameters, Row mapper, Batch updates, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t54",
        "number": 3,
        "title": "JPA and Hibernate",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t54-s1",
            "title": "Entity mapping"
          },
          {
            "id": "database-t54-s2",
            "title": "Relationships"
          },
          {
            "id": "database-t54-s3",
            "title": "Persistence context"
          },
          {
            "id": "database-t54-s4",
            "title": "Lazy loading"
          },
          {
            "id": "database-t54-s5",
            "title": "Dirty checking"
          },
          {
            "id": "database-t54-s6",
            "title": "JPQL"
          },
          {
            "id": "database-t54-s7",
            "title": "Native queries"
          },
          {
            "id": "database-t54-s8",
            "title": "Transactions"
          },
          {
            "id": "database-t54-s9",
            "title": "Entity graphs"
          },
          {
            "id": "database-t54-s10",
            "title": "Optimistic locking"
          },
          {
            "id": "database-t54-s11",
            "title": "Pessimistic locking"
          },
          {
            "id": "database-t54-s12",
            "title": "N+1 queries"
          },
          {
            "id": "database-t54-s13",
            "title": "Batch fetching"
          }
        ],
        "overview": "**JPA and Hibernate** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Entity mapping, Relationships, Persistence context, Lazy loading, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t55",
        "number": 4,
        "title": "Spring Data JPA",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t55-s1",
            "title": "Repository interfaces"
          },
          {
            "id": "database-t55-s2",
            "title": "Derived query methods"
          },
          {
            "id": "database-t55-s3",
            "title": "Custom JPQL"
          },
          {
            "id": "database-t55-s4",
            "title": "Native queries"
          },
          {
            "id": "database-t55-s5",
            "title": "Specifications"
          },
          {
            "id": "database-t55-s6",
            "title": "Pagination"
          },
          {
            "id": "database-t55-s7",
            "title": "Sorting"
          },
          {
            "id": "database-t55-s8",
            "title": "Projections"
          },
          {
            "id": "database-t55-s9",
            "title": "Auditing"
          }
        ],
        "overview": "You must understand the SQL generated by Hibernate.",
        "codeExample": "Learning JPA does not replace learning SQL.",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Learning JPA does not replace learning SQL.",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 45,
    "title": "NoSQL Fundamentals",
    "icon": "🗄️",
    "color": "#ec4899",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t56",
        "number": 1,
        "title": "What NoSQL Means",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "NoSQL does not mean “SQL is obsolete.”\n\nIt usually refers to databases optimized for:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Flexible schemas",
          "Horizontal scaling",
          "High write throughput",
          "Large distributed datasets",
          "Specific data models",
          "Low-latency access patterns"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t57",
        "number": 2,
        "title": "NoSQL Categories",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**NoSQL Categories** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [
          "| Type        | Data model               | Common use                     |\n| ----------- | ------------------------ | ------------------------------ |\n| Key-value   | Key → value              | Caching, sessions              |\n| Document    | JSON-like documents      | Flexible application data      |\n| Wide-column | Partitioned rows         | High-volume distributed writes |\n| Graph       | Nodes and relationships  | Relationship-heavy queries     |\n| Search      | Inverted index           | Full-text search               |\n| Time-series | Timestamped measurements | Metrics and IoT                |"
        ],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 46,
    "title": "Distributed Database Concepts",
    "icon": "🗄️",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t58",
        "number": 1,
        "title": "CAP Theorem",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "In the presence of a network partition, a distributed system must prioritize either:\n\nThe three properties are:\n\nPartition tolerance is generally unavoidable in distributed systems.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Consistency",
          "Availability",
          "Consistency",
          "Availability",
          "Partition tolerance"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t59",
        "number": 2,
        "title": "Consistency Models",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t59-s1",
            "title": "Strong consistency"
          },
          {
            "id": "database-t59-s2",
            "title": "Eventual consistency"
          },
          {
            "id": "database-t59-s3",
            "title": "Read-your-writes consistency"
          },
          {
            "id": "database-t59-s4",
            "title": "Monotonic reads"
          },
          {
            "id": "database-t59-s5",
            "title": "Session consistency"
          },
          {
            "id": "database-t59-s6",
            "title": "Causal consistency"
          },
          {
            "id": "database-t59-s7",
            "title": "Tunable consistency"
          }
        ],
        "overview": "**Consistency Models** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Strong consistency, Eventual consistency, Read-your-writes consistency, Monotonic reads, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t60",
        "number": 3,
        "title": "BASE",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "BASE is often contrasted with strict ACID behavior, though modern systems may support combinations of both.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Basically Available",
          "Soft state",
          "Eventual consistency"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t61",
        "number": 4,
        "title": "Replication",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t61-s1",
            "title": "Leader-follower replication"
          },
          {
            "id": "database-t61-s2",
            "title": "Multi-leader replication"
          },
          {
            "id": "database-t61-s3",
            "title": "Leaderless replication"
          },
          {
            "id": "database-t61-s4",
            "title": "Synchronous replication"
          },
          {
            "id": "database-t61-s5",
            "title": "Asynchronous replication"
          },
          {
            "id": "database-t61-s6",
            "title": "Replication lag"
          },
          {
            "id": "database-t61-s7",
            "title": "Conflict resolution"
          },
          {
            "id": "database-t61-s8",
            "title": "Read replicas"
          },
          {
            "id": "database-t61-s9",
            "title": "Failover"
          }
        ],
        "overview": "**Replication** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Leader-follower replication, Multi-leader replication, Leaderless replication, Synchronous replication, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t62",
        "number": 5,
        "title": "Partitioning and Sharding",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t62-s1",
            "title": "Horizontal partitioning"
          },
          {
            "id": "database-t62-s2",
            "title": "Vertical partitioning"
          },
          {
            "id": "database-t62-s3",
            "title": "Range partitioning"
          },
          {
            "id": "database-t62-s4",
            "title": "Hash partitioning"
          },
          {
            "id": "database-t62-s5",
            "title": "List partitioning"
          },
          {
            "id": "database-t62-s6",
            "title": "Consistent hashing"
          },
          {
            "id": "database-t62-s7",
            "title": "Shard key"
          },
          {
            "id": "database-t62-s8",
            "title": "Hot partitions"
          },
          {
            "id": "database-t62-s9",
            "title": "Resharding"
          },
          {
            "id": "database-t62-s10",
            "title": "Cross-shard queries"
          },
          {
            "id": "database-t62-s11",
            "title": "Distributed joins"
          }
        ],
        "overview": "The shard key is one of the most important design decisions in a distributed database.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 47,
    "title": "Redis",
    "icon": "🗄️",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "Redis should usually be your first NoSQL database.",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t63",
        "number": 1,
        "title": "Redis Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t63-s1",
            "title": "In-memory data storage"
          },
          {
            "id": "database-t63-s2",
            "title": "Key-value model"
          },
          {
            "id": "database-t63-s3",
            "title": "Key expiration"
          },
          {
            "id": "database-t63-s4",
            "title": "Persistence"
          },
          {
            "id": "database-t63-s5",
            "title": "Eviction"
          },
          {
            "id": "database-t63-s6",
            "title": "Single-threaded execution concepts"
          },
          {
            "id": "database-t63-s7",
            "title": "Redis cluster"
          },
          {
            "id": "database-t63-s8",
            "title": "Replication"
          }
        ],
        "overview": "**Redis Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: In-memory data storage, Key-value model, Key expiration, Persistence, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t64",
        "number": 2,
        "title": "Redis Data Structures",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t64-s1",
            "title": "String"
          },
          {
            "id": "database-t64-s2",
            "title": "Hash"
          },
          {
            "id": "database-t64-s3",
            "title": "List"
          },
          {
            "id": "database-t64-s4",
            "title": "Set"
          },
          {
            "id": "database-t64-s5",
            "title": "Sorted set"
          },
          {
            "id": "database-t64-s6",
            "title": "Bitmap"
          },
          {
            "id": "database-t64-s7",
            "title": "HyperLogLog"
          },
          {
            "id": "database-t64-s8",
            "title": "Geospatial data"
          },
          {
            "id": "database-t64-s9",
            "title": "Stream"
          }
        ],
        "overview": "**Redis Data Structures** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: String, Hash, List, Set, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t65",
        "number": 3,
        "title": "Redis Use Cases",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Redis Use Cases** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Caching",
          "Session storage",
          "Rate limiting",
          "Distributed locks",
          "Leaderboards",
          "Counters",
          "Real-time statistics",
          "Job queues",
          "Pub/sub",
          "Temporary tokens",
          "OTP storage"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t66",
        "number": 4,
        "title": "Redis Caching Patterns",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t66-s1",
            "title": "Cache-aside"
          },
          {
            "id": "database-t66-s2",
            "title": "Read-through"
          },
          {
            "id": "database-t66-s3",
            "title": "Write-through"
          },
          {
            "id": "database-t66-s4",
            "title": "Write-behind"
          },
          {
            "id": "database-t66-s5",
            "title": "Time-to-live"
          },
          {
            "id": "database-t66-s6",
            "title": "Cache invalidation"
          },
          {
            "id": "database-t66-s7",
            "title": "Cache warming"
          }
        ],
        "overview": "**Redis Caching Patterns** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Cache-aside, Read-through, Write-through, Write-behind, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t67",
        "number": 5,
        "title": "Redis Problems",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t67-s1",
            "title": "Cache stampede"
          },
          {
            "id": "database-t67-s2",
            "title": "Cache avalanche"
          },
          {
            "id": "database-t67-s3",
            "title": "Cache penetration"
          },
          {
            "id": "database-t67-s4",
            "title": "Hot keys"
          },
          {
            "id": "database-t67-s5",
            "title": "Large keys"
          },
          {
            "id": "database-t67-s6",
            "title": "Stale data"
          },
          {
            "id": "database-t67-s7",
            "title": "Serialization overhead"
          },
          {
            "id": "database-t67-s8",
            "title": "Distributed-lock mistakes"
          }
        ],
        "overview": "**Redis Problems** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Cache stampede, Cache avalanche, Cache penetration, Hot keys, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t68",
        "number": 6,
        "title": "Redis with Spring Boot",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t68-s1",
            "title": "Spring Data Redis"
          },
          {
            "id": "database-t68-s2",
            "title": "`RedisTemplate`"
          },
          {
            "id": "database-t68-s3",
            "title": "String Redis template"
          },
          {
            "id": "database-t68-s4",
            "title": "Redis repositories"
          },
          {
            "id": "database-t68-s5",
            "title": "Spring Cache"
          },
          {
            "id": "database-t68-s6",
            "title": "`@Cacheable`"
          },
          {
            "id": "database-t68-s7",
            "title": "`@CachePut`"
          },
          {
            "id": "database-t68-s8",
            "title": "`@CacheEvict`"
          },
          {
            "id": "database-t68-s9",
            "title": "Session storage"
          },
          {
            "id": "database-t68-s10",
            "title": "Rate-limiter implementation"
          }
        ],
        "overview": "**Redis with Spring Boot** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Spring Data Redis, `RedisTemplate`, String Redis template, Redis repositories, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 48,
    "title": "MongoDB",
    "icon": "🗄️",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "MongoDB is a document database.",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t69",
        "number": 1,
        "title": "MongoDB Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t69-s1",
            "title": "Database"
          },
          {
            "id": "database-t69-s2",
            "title": "Collection"
          },
          {
            "id": "database-t69-s3",
            "title": "Document"
          },
          {
            "id": "database-t69-s4",
            "title": "BSON"
          },
          {
            "id": "database-t69-s5",
            "title": "Object ID"
          },
          {
            "id": "database-t69-s6",
            "title": "Embedded documents"
          },
          {
            "id": "database-t69-s7",
            "title": "Arrays"
          },
          {
            "id": "database-t69-s8",
            "title": "Flexible schemas"
          },
          {
            "id": "database-t69-s9",
            "title": "Schema validation"
          }
        ],
        "overview": "**MongoDB Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Database, Collection, Document, BSON, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t70",
        "number": 2,
        "title": "MongoDB CRUD",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t70-s1",
            "title": "Insert document"
          },
          {
            "id": "database-t70-s2",
            "title": "Find document"
          },
          {
            "id": "database-t70-s3",
            "title": "Update document"
          },
          {
            "id": "database-t70-s4",
            "title": "Delete document"
          },
          {
            "id": "database-t70-s5",
            "title": "Projection"
          },
          {
            "id": "database-t70-s6",
            "title": "Sorting"
          },
          {
            "id": "database-t70-s7",
            "title": "Pagination"
          },
          {
            "id": "database-t70-s8",
            "title": "Bulk operations"
          },
          {
            "id": "database-t70-s9",
            "title": "Upsert"
          }
        ],
        "overview": "**MongoDB CRUD** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Insert document, Find document, Update document, Delete document, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t71",
        "number": 3,
        "title": "MongoDB Querying",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t71-s1",
            "title": "Comparison operators"
          },
          {
            "id": "database-t71-s2",
            "title": "Logical operators"
          },
          {
            "id": "database-t71-s3",
            "title": "Array queries"
          },
          {
            "id": "database-t71-s4",
            "title": "Element queries"
          },
          {
            "id": "database-t71-s5",
            "title": "Regular expressions"
          },
          {
            "id": "database-t71-s6",
            "title": "Nested fields"
          },
          {
            "id": "database-t71-s7",
            "title": "Aggregation pipelines"
          }
        ],
        "overview": "**MongoDB Querying** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Comparison operators, Logical operators, Array queries, Element queries, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t72",
        "number": 4,
        "title": "MongoDB Aggregation",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t72-s1",
            "title": "`$match`"
          },
          {
            "id": "database-t72-s2",
            "title": "`$project`"
          },
          {
            "id": "database-t72-s3",
            "title": "`$group`"
          },
          {
            "id": "database-t72-s4",
            "title": "`$sort`"
          },
          {
            "id": "database-t72-s5",
            "title": "`$limit`"
          },
          {
            "id": "database-t72-s6",
            "title": "`$skip`"
          },
          {
            "id": "database-t72-s7",
            "title": "`$unwind`"
          },
          {
            "id": "database-t72-s8",
            "title": "`$lookup`"
          },
          {
            "id": "database-t72-s9",
            "title": "`$facet`"
          },
          {
            "id": "database-t72-s10",
            "title": "`$set`"
          },
          {
            "id": "database-t72-s11",
            "title": "`$count`"
          }
        ],
        "overview": "**MongoDB Aggregation** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: `$match`, `$project`, `$group`, `$sort`, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t73",
        "number": 5,
        "title": "MongoDB Data Modeling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**MongoDB Data Modeling** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "Design MongoDB collections around application access patterns,\nnot around relational normalization rules.",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Design MongoDB collections around application access patterns,\nnot around relational normalization rules.",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [
          "Embedding",
          "Referencing",
          "One-to-one",
          "One-to-many",
          "Many-to-many",
          "Document growth",
          "Duplication",
          "Denormalization",
          "Read patterns",
          "Write patterns"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t74",
        "number": 6,
        "title": "MongoDB Indexing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t74-s1",
            "title": "Single-field index"
          },
          {
            "id": "database-t74-s2",
            "title": "Compound index"
          },
          {
            "id": "database-t74-s3",
            "title": "Multikey index"
          },
          {
            "id": "database-t74-s4",
            "title": "Text index"
          },
          {
            "id": "database-t74-s5",
            "title": "Geospatial index"
          },
          {
            "id": "database-t74-s6",
            "title": "TTL index"
          },
          {
            "id": "database-t74-s7",
            "title": "Partial index"
          },
          {
            "id": "database-t74-s8",
            "title": "Sparse index"
          }
        ],
        "overview": "**MongoDB Indexing** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Single-field index, Compound index, Multikey index, Text index, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t75",
        "number": 7,
        "title": "MongoDB Distributed Features",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t75-s1",
            "title": "Replica sets"
          },
          {
            "id": "database-t75-s2",
            "title": "Primary and secondary nodes"
          },
          {
            "id": "database-t75-s3",
            "title": "Read preference"
          },
          {
            "id": "database-t75-s4",
            "title": "Write concern"
          },
          {
            "id": "database-t75-s5",
            "title": "Read concern"
          },
          {
            "id": "database-t75-s6",
            "title": "Sharding"
          },
          {
            "id": "database-t75-s7",
            "title": "Shard keys"
          },
          {
            "id": "database-t75-s8",
            "title": "Transactions"
          },
          {
            "id": "database-t75-s9",
            "title": "Change streams"
          }
        ],
        "overview": "**MongoDB Distributed Features** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Replica sets, Primary and secondary nodes, Read preference, Write concern, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t76",
        "number": 8,
        "title": "MongoDB with Spring Boot",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t76-s1",
            "title": "Spring Data MongoDB"
          },
          {
            "id": "database-t76-s2",
            "title": "`MongoRepository`"
          },
          {
            "id": "database-t76-s3",
            "title": "`MongoTemplate`"
          },
          {
            "id": "database-t76-s4",
            "title": "Document mapping"
          },
          {
            "id": "database-t76-s5",
            "title": "Query annotations"
          },
          {
            "id": "database-t76-s6",
            "title": "Aggregation"
          },
          {
            "id": "database-t76-s7",
            "title": "Index creation"
          },
          {
            "id": "database-t76-s8",
            "title": "Transactions"
          },
          {
            "id": "database-t76-s9",
            "title": "Auditing"
          }
        ],
        "overview": "**MongoDB with Spring Boot** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Spring Data MongoDB, `MongoRepository`, `MongoTemplate`, Document mapping, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 49,
    "title": "Cassandra and Wide-Column Databases",
    "icon": "🗄️",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "Learn Cassandra after SQL, Redis and MongoDB.",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t77",
        "number": 1,
        "title": "Cassandra Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t77-s1",
            "title": "Distributed wide-column database"
          },
          {
            "id": "database-t77-s2",
            "title": "Cluster"
          },
          {
            "id": "database-t77-s3",
            "title": "Node"
          },
          {
            "id": "database-t77-s4",
            "title": "Data center"
          },
          {
            "id": "database-t77-s5",
            "title": "Keyspace"
          },
          {
            "id": "database-t77-s6",
            "title": "Table"
          },
          {
            "id": "database-t77-s7",
            "title": "Partition key"
          },
          {
            "id": "database-t77-s8",
            "title": "Clustering column"
          },
          {
            "id": "database-t77-s9",
            "title": "Replication factor"
          },
          {
            "id": "database-t77-s10",
            "title": "Consistency level"
          }
        ],
        "overview": "**Cassandra Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Distributed wide-column database, Cluster, Node, Data center, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t78",
        "number": 2,
        "title": "Cassandra Data Modeling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t78-s1",
            "title": "Design tables for specific queries"
          },
          {
            "id": "database-t78-s2",
            "title": "Avoid joins"
          },
          {
            "id": "database-t78-s3",
            "title": "Denormalize data"
          },
          {
            "id": "database-t78-s4",
            "title": "Partition-key selection"
          },
          {
            "id": "database-t78-s5",
            "title": "Clustering order"
          },
          {
            "id": "database-t78-s6",
            "title": "Wide partitions"
          },
          {
            "id": "database-t78-s7",
            "title": "Hot partitions"
          },
          {
            "id": "database-t78-s8",
            "title": "Tombstones"
          },
          {
            "id": "database-t78-s9",
            "title": "Time-to-live"
          },
          {
            "id": "database-t78-s10",
            "title": "Materialized views"
          },
          {
            "id": "database-t78-s11",
            "title": "Secondary indexes"
          }
        ],
        "overview": "**Cassandra Data Modeling** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Design tables for specific queries, Avoid joins, Denormalize data, Partition-key selection, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t79",
        "number": 3,
        "title": "Cassandra Consistency",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t79-s1",
            "title": "`ONE`"
          },
          {
            "id": "database-t79-s2",
            "title": "`QUORUM`"
          },
          {
            "id": "database-t79-s3",
            "title": "`ALL`"
          },
          {
            "id": "database-t79-s4",
            "title": "Local consistency levels"
          },
          {
            "id": "database-t79-s5",
            "title": "Read repair"
          },
          {
            "id": "database-t79-s6",
            "title": "Hinted handoff"
          },
          {
            "id": "database-t79-s7",
            "title": "Compaction"
          },
          {
            "id": "database-t79-s8",
            "title": "Anti-entropy repair"
          }
        ],
        "overview": "Use Cassandra for:\n\nDo not use Cassandra for ordinary transactional CRUD applications.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Massive write volume",
          "Event data",
          "IoT data",
          "Large geographically distributed systems",
          "High availability"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 50,
    "title": "Elasticsearch and OpenSearch",
    "icon": "🗄️",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "These are search engines, not primary transactional databases.",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t80",
        "number": 1,
        "title": "Search Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t80-s1",
            "title": "Inverted index"
          },
          {
            "id": "database-t80-s2",
            "title": "Document"
          },
          {
            "id": "database-t80-s3",
            "title": "Index"
          },
          {
            "id": "database-t80-s4",
            "title": "Field"
          },
          {
            "id": "database-t80-s5",
            "title": "Mapping"
          },
          {
            "id": "database-t80-s6",
            "title": "Analyzer"
          },
          {
            "id": "database-t80-s7",
            "title": "Tokenizer"
          },
          {
            "id": "database-t80-s8",
            "title": "Token filter"
          },
          {
            "id": "database-t80-s9",
            "title": "Relevance scoring"
          }
        ],
        "overview": "**Search Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Inverted index, Document, Index, Field, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t81",
        "number": 2,
        "title": "Search Queries",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t81-s1",
            "title": "Match query"
          },
          {
            "id": "database-t81-s2",
            "title": "Term query"
          },
          {
            "id": "database-t81-s3",
            "title": "Boolean query"
          },
          {
            "id": "database-t81-s4",
            "title": "Range query"
          },
          {
            "id": "database-t81-s5",
            "title": "Prefix query"
          },
          {
            "id": "database-t81-s6",
            "title": "Wildcard query"
          },
          {
            "id": "database-t81-s7",
            "title": "Phrase query"
          },
          {
            "id": "database-t81-s8",
            "title": "Fuzzy query"
          },
          {
            "id": "database-t81-s9",
            "title": "Aggregations"
          },
          {
            "id": "database-t81-s10",
            "title": "Highlighting"
          },
          {
            "id": "database-t81-s11",
            "title": "Autocomplete"
          }
        ],
        "overview": "**Search Queries** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Match query, Term query, Boolean query, Range query, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t82",
        "number": 3,
        "title": "Search Design",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t82-s1",
            "title": "Exact fields versus analyzed fields"
          },
          {
            "id": "database-t82-s2",
            "title": "Keyword fields"
          },
          {
            "id": "database-t82-s3",
            "title": "Text fields"
          },
          {
            "id": "database-t82-s4",
            "title": "Synonyms"
          },
          {
            "id": "database-t82-s5",
            "title": "Stemming"
          },
          {
            "id": "database-t82-s6",
            "title": "Typo tolerance"
          },
          {
            "id": "database-t82-s7",
            "title": "Pagination"
          },
          {
            "id": "database-t82-s8",
            "title": "Deep pagination"
          },
          {
            "id": "database-t82-s9",
            "title": "Search after"
          },
          {
            "id": "database-t82-s10",
            "title": "Relevance tuning"
          }
        ],
        "overview": "**Search Design** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Exact fields versus analyzed fields, Keyword fields, Text fields, Synonyms, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t83",
        "number": 4,
        "title": "Search Synchronization",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Common architecture:\n\nThe relational database remains the source of truth. The search engine stores a searchable projection.",
        "codeExample": "PostgreSQL\n    ↓\nOutbox or CDC\n    ↓\nKafka\n    ↓\nElasticsearch/OpenSearch",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "PostgreSQL\n    ↓\nOutbox or CDC\n    ↓\nKafka\n    ↓\nElasticsearch/OpenSearch",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 51,
    "title": "Graph Databases",
    "icon": "🗄️",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t84",
        "number": 1,
        "title": "Graph Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t84-s1",
            "title": "Node"
          },
          {
            "id": "database-t84-s2",
            "title": "Relationship"
          },
          {
            "id": "database-t84-s3",
            "title": "Property"
          },
          {
            "id": "database-t84-s4",
            "title": "Label"
          },
          {
            "id": "database-t84-s5",
            "title": "Path"
          },
          {
            "id": "database-t84-s6",
            "title": "Traversal"
          },
          {
            "id": "database-t84-s7",
            "title": "Directed relationships"
          },
          {
            "id": "database-t84-s8",
            "title": "Weighted relationships"
          }
        ],
        "overview": "**Graph Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Node, Relationship, Property, Label, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t85",
        "number": 2,
        "title": "Neo4j and Cypher",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t85-s1",
            "title": "Creating nodes"
          },
          {
            "id": "database-t85-s2",
            "title": "Creating relationships"
          },
          {
            "id": "database-t85-s3",
            "title": "Matching patterns"
          },
          {
            "id": "database-t85-s4",
            "title": "Filtering"
          },
          {
            "id": "database-t85-s5",
            "title": "Variable-length paths"
          },
          {
            "id": "database-t85-s6",
            "title": "Aggregation"
          },
          {
            "id": "database-t85-s7",
            "title": "Shortest paths"
          },
          {
            "id": "database-t85-s8",
            "title": "Graph indexes"
          },
          {
            "id": "database-t85-s9",
            "title": "Constraints"
          }
        ],
        "overview": "**Neo4j and Cypher** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Creating nodes, Creating relationships, Matching patterns, Filtering, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Social networks",
          "Recommendation engines",
          "Fraud detection",
          "Knowledge graphs",
          "Network topology",
          "Identity relationships",
          "Supply-chain relationships"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 52,
    "title": "Time-Series Databases",
    "icon": "🗄️",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t86",
        "number": 1,
        "title": "Time-Series Concepts",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t86-s1",
            "title": "Timestamp"
          },
          {
            "id": "database-t86-s2",
            "title": "Metric"
          },
          {
            "id": "database-t86-s3",
            "title": "Measurement"
          },
          {
            "id": "database-t86-s4",
            "title": "Tag"
          },
          {
            "id": "database-t86-s5",
            "title": "Field"
          },
          {
            "id": "database-t86-s6",
            "title": "Retention policy"
          },
          {
            "id": "database-t86-s7",
            "title": "Downsampling"
          },
          {
            "id": "database-t86-s8",
            "title": "Aggregation"
          },
          {
            "id": "database-t86-s9",
            "title": "Time-window queries"
          },
          {
            "id": "database-t86-s10",
            "title": "Compression"
          }
        ],
        "overview": "**Time-Series Concepts** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Timestamp, Metric, Measurement, Tag, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "InfluxDB",
          "TimescaleDB",
          "Prometheus",
          "ClickHouse for analytical events",
          "Monitoring",
          "IoT sensor data",
          "Financial market data",
          "Application metrics",
          "Device telemetry"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 53,
    "title": "Analytical Databases",
    "icon": "🗄️",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t87",
        "number": 1,
        "title": "OLTP versus OLAP",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**OLTP versus OLAP** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [
          "| OLTP                     | OLAP                          |\n| ------------------------ | ----------------------------- |\n| Operational transactions | Analytical reporting          |\n| Frequent small writes    | Large analytical queries      |\n| Normalized schema        | Often denormalized            |\n| Low latency              | High throughput               |\n| PostgreSQL/MySQL         | ClickHouse/Snowflake/BigQuery |"
        ],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t88",
        "number": 2,
        "title": "Data-Warehouse Concepts",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "database-t88-s1",
            "title": "Fact table"
          },
          {
            "id": "database-t88-s2",
            "title": "Dimension table"
          },
          {
            "id": "database-t88-s3",
            "title": "Star schema"
          },
          {
            "id": "database-t88-s4",
            "title": "Snowflake schema"
          },
          {
            "id": "database-t88-s5",
            "title": "Data mart"
          },
          {
            "id": "database-t88-s6",
            "title": "ETL"
          },
          {
            "id": "database-t88-s7",
            "title": "ELT"
          },
          {
            "id": "database-t88-s8",
            "title": "Slowly changing dimensions"
          },
          {
            "id": "database-t88-s9",
            "title": "Columnar storage"
          },
          {
            "id": "database-t88-s10",
            "title": "Partition pruning"
          }
        ],
        "overview": "**Data-Warehouse Concepts** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nIn this topic you will study: Fact table, Dimension table, Star schema, Snowflake schema, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 54,
    "title": "Choosing the Correct Database",
    "icon": "🗄️",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t89",
        "number": 1,
        "title": "Decision Guide",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Decision Guide** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [
          "| Requirement                    | Suitable database                             |\n| ------------------------------ | --------------------------------------------- |\n| General business application   | PostgreSQL                                    |\n| Financial transactions         | PostgreSQL or another relational database     |\n| User sessions                  | Redis                                         |\n| Application caching            | Redis                                         |\n| Flexible JSON documents        | MongoDB                                       |\n| Full-text product search       | Elasticsearch/OpenSearch                      |\n| Massive distributed writes     | Cassandra/ScyllaDB                            |\n| Complex relationship traversal | Neo4j                                         |\n| Monitoring metrics             | Prometheus/InfluxDB                           |\n| Analytical event queries       | ClickHouse                                    |\n| Vector similarity search       | PostgreSQL with pgvector or a vector database |"
        ],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t90",
        "number": 2,
        "title": "Questions to Ask",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Before choosing a database, ask:\n\n1. What are the main read queries?\n\n2. What are the main write operations?\n\n3. Are transactions required?\n\n4. How important is strong consistency?\n\n5. How much data will exist?\n\n6. How quickly will data grow?\n\n7. Will the system require joins?\n\n8. Does the schema change frequently?\n\n9. Is horizontal scaling required?\n\n10. What availability level is required?\n\n11. What latency is acceptable?\n\n12. What operational expertise does the team have?",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 55,
    "title": "Common Database Mistakes",
    "icon": "🗄️",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "Avoid these mistakes: * Using NoSQL because it appears more modern * Using MongoDB for strongly relational financial data * Using Redis as the permanent source of truth * Using Elasticsearch as the primary database * Adding indexes without measuring * Having no indexes on foreign keys * Using `SELECT *` everywhere * Ignoring transaction boundaries * Making transactions too long * Storing money in floating-point columns * Storing passwords in plain text * Creating one giant JSON column for everything * Ignoring backup restoration * Performing offset pagination over extremely large tables * Fetching millions of rows into the application * Allowing Hibernate to generate production schemas automatically * Ignoring the SQL generated by an ORM * Creating microservices with a shared database * Using distributed databases without operational expertise ---",
    "roadmapType": "database",
    "roadmapLabel": "Database",
    "roadmapBadge": "SQL / NoSQL",
    "topics": [
      {
        "id": "database-t91",
        "number": 1,
        "title": "Stage 1 — Beginner",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Stage 1 — Beginner** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Database concepts",
          "Tables and relationships",
          "Basic SQL",
          "CRUD",
          "Filtering",
          "Sorting",
          "Aggregation",
          "Joins",
          "Student-management database"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t92",
        "number": 2,
        "title": "Stage 2 — Intermediate SQL",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Stage 2 — Intermediate SQL** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Subqueries",
          "CTEs",
          "Window functions",
          "Constraints",
          "Views",
          "Normalization",
          "Indexes",
          "Transactions",
          "Library-management database",
          "E-commerce database"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t93",
        "number": 3,
        "title": "Stage 3 — PostgreSQL",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Stage 3 — PostgreSQL** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "PostgreSQL data types",
          "JSONB",
          "UUID",
          "Sequences",
          "Explain plans",
          "Advanced indexing",
          "Roles",
          "Backup and restoration",
          "Banking or inventory backend"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t94",
        "number": 4,
        "title": "Stage 4 — Spring Integration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Stage 4 — Spring Integration** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "JDBC",
          "Spring JDBC",
          "Hibernate",
          "Spring Data JPA",
          "Transactions",
          "Flyway",
          "Testcontainers",
          "Production-grade Spring Boot REST API"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t95",
        "number": 5,
        "title": "Stage 5 — Redis",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Add Redis to your existing Spring Boot project.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Cache",
          "Sessions",
          "Rate limiting",
          "Expiration",
          "Sorted sets",
          "Distributed-lock limitations"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t96",
        "number": 6,
        "title": "Stage 6 — MongoDB",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Stage 6 — MongoDB** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Document modeling",
          "Aggregation",
          "Indexes",
          "Replication",
          "Sharding",
          "Content-management system",
          "Product catalog",
          "Activity-feed service"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t97",
        "number": 7,
        "title": "Stage 7 — Specialized Databases",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Stage 7 — Specialized Databases** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Elasticsearch for search",
          "Cassandra for large distributed writes",
          "Neo4j for graphs",
          "InfluxDB for time-series",
          "ClickHouse for analytics"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t98",
        "number": 8,
        "title": "Project 1 — Student Database",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 1 — Student Database** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Students",
          "Courses",
          "Enrollments",
          "Teachers",
          "Results",
          "Joins",
          "Aggregations",
          "Constraints"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t99",
        "number": 9,
        "title": "Project 2 — Library Management System",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 2 — Library Management System** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Books",
          "Authors",
          "Members",
          "Borrowing",
          "Returns",
          "Fines",
          "Transactions",
          "Indexes"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t100",
        "number": 10,
        "title": "Project 3 — E-Commerce Database",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 3 — E-Commerce Database** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Users",
          "Products",
          "Categories",
          "Inventory",
          "Cart",
          "Orders",
          "Order items",
          "Payments",
          "Coupons",
          "Reviews"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t101",
        "number": 11,
        "title": "Project 4 — Banking System",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 4 — Banking System** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Customers",
          "Accounts",
          "Transactions",
          "Transfers",
          "Audit logs",
          "Isolation levels",
          "Row locking",
          "Idempotency"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t102",
        "number": 12,
        "title": "Project 5 — Hybrid Database System",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 5 — Hybrid Database System** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "PostgreSQL for core data",
          "Redis for cache and sessions",
          "Elasticsearch for search",
          "Kafka for events"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t103",
        "number": 13,
        "title": "Project 6 — AI Document System",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 6 — AI Document System** is a foundational concept that every developer should understand early in their learning journey in the **Database** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "PostgreSQL for users and metadata",
          "Object storage for files",
          "PGvector for embeddings",
          "Redis for temporary chat state",
          "Elasticsearch for keyword search"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t104",
        "number": 14,
        "title": "Essential SQL Topics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "6. Window functions\n\n8. Relationships\n\n9. Normalization\n\n11. Transactions\n\n12. Isolation levels\n\n14. Query execution plans\n\n16. Database migrations\n\n17. Backup concepts\n\n18. SQL injection prevention",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      },
      {
        "id": "database-t105",
        "number": 15,
        "title": "Essential NoSQL Topics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "1. NoSQL data models\n\n3. Eventual consistency\n\n7. Caching strategies\n\n8. MongoDB data modeling\n\n9. Search engines\n\n10. Selecting a database by use case\n\nThe most important principle is:\n\n> **Use a relational database by default. Choose NoSQL only when its data model or scaling characteristics solve a real requirement.**\n\nA skilled backend engineer does not merely know SQL syntax. They understand **data integrity, transactions, query performance, indexing, consistency, failure recovery and how database choices affect the entire architecture**. 🧠🗄️",
        "codeExample": "1. PostgreSQL\n2. SQL and relational modeling\n3. Transactions and indexing\n4. JDBC and Spring Data JPA\n5. Flyway and Testcontainers\n6. Redis\n7. MongoDB\n8. Elasticsearch/OpenSearch\n9. Distributed database concepts\n10. Cassandra, Neo4j or time-series databases when required",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "1. PostgreSQL\n2. SQL and relational modeling\n3. Transactions and indexing\n4. JDBC and Spring Data JPA\n5. Flyway and Testcontainers\n6. Redis\n7. MongoDB\n8. Elasticsearch/OpenSearch\n9. Distributed database concepts\n10. Cassandra, Neo4j or time-series databases when required",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "database",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "database",
        "roadmapLabel": "Database",
        "roadmapBadge": "SQL / NoSQL"
      }
    ]
  },
  {
    "id": 56,
    "title": "DevOps Foundations",
    "icon": "🚀",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t1",
        "number": 1,
        "title": "Understand DevOps Concepts",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t1-s1",
            "title": "Software Development Life Cycle"
          },
          {
            "id": "devops-t1-s2",
            "title": "DevOps lifecycle"
          },
          {
            "id": "devops-t1-s3",
            "title": "Development versus operations"
          },
          {
            "id": "devops-t1-s4",
            "title": "Continuous integration"
          },
          {
            "id": "devops-t1-s5",
            "title": "Continuous delivery"
          },
          {
            "id": "devops-t1-s6",
            "title": "Continuous deployment"
          },
          {
            "id": "devops-t1-s7",
            "title": "Infrastructure automation"
          },
          {
            "id": "devops-t1-s8",
            "title": "Configuration management"
          },
          {
            "id": "devops-t1-s9",
            "title": "Immutable infrastructure"
          },
          {
            "id": "devops-t1-s10",
            "title": "Infrastructure as Code"
          },
          {
            "id": "devops-t1-s11",
            "title": "Observability"
          },
          {
            "id": "devops-t1-s12",
            "title": "Reliability engineering"
          },
          {
            "id": "devops-t1-s13",
            "title": "DevSecOps"
          },
          {
            "id": "devops-t1-s14",
            "title": "GitOps"
          },
          {
            "id": "devops-t1-s15",
            "title": "Platform engineering"
          },
          {
            "id": "devops-t1-s16",
            "title": "Shared ownership"
          },
          {
            "id": "devops-t1-s17",
            "title": "Automation-first mindset"
          },
          {
            "id": "devops-t1-s18",
            "title": "Feedback loops"
          },
          {
            "id": "devops-t1-s19",
            "title": "Blameless incident culture"
          }
        ],
        "overview": "**Understand DevOps Concepts** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Software Development Life Cycle, DevOps lifecycle, Development versus operations, Continuous integration, and 15 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t2",
        "number": 2,
        "title": "Common Environments",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t2-s1",
            "title": "Environment-specific configuration"
          },
          {
            "id": "devops-t2-s2",
            "title": "Environment isolation"
          },
          {
            "id": "devops-t2-s3",
            "title": "Promotion between environments"
          },
          {
            "id": "devops-t2-s4",
            "title": "Production parity"
          },
          {
            "id": "devops-t2-s5",
            "title": "Test data versus production data"
          },
          {
            "id": "devops-t2-s6",
            "title": "Feature flags"
          },
          {
            "id": "devops-t2-s7",
            "title": "Approval gates"
          },
          {
            "id": "devops-t2-s8",
            "title": "Rollback procedures"
          }
        ],
        "overview": "Understand how applications move through:",
        "codeExample": "Local\n  ↓\nDevelopment\n  ↓\nTesting\n  ↓\nStaging\n  ↓\nProduction",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Local\n  ↓\nDevelopment\n  ↓\nTesting\n  ↓\nStaging\n  ↓\nProduction",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 57,
    "title": "Linux Administration",
    "icon": "🚀",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "Linux is one of the most important DevOps skills.",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t3",
        "number": 1,
        "title": "Linux Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t3-s1",
            "title": "Linux distributions"
          },
          {
            "id": "devops-t3-s2",
            "title": "Kernel"
          },
          {
            "id": "devops-t3-s3",
            "title": "Shell"
          },
          {
            "id": "devops-t3-s4",
            "title": "Terminal"
          },
          {
            "id": "devops-t3-s5",
            "title": "Filesystem hierarchy"
          },
          {
            "id": "devops-t3-s6",
            "title": "Root directory"
          },
          {
            "id": "devops-t3-s7",
            "title": "Home directories"
          },
          {
            "id": "devops-t3-s8",
            "title": "Absolute paths"
          },
          {
            "id": "devops-t3-s9",
            "title": "Relative paths"
          },
          {
            "id": "devops-t3-s10",
            "title": "Hidden files"
          },
          {
            "id": "devops-t3-s11",
            "title": "Environment variables"
          },
          {
            "id": "devops-t3-s12",
            "title": "Processes"
          },
          {
            "id": "devops-t3-s13",
            "title": "Services"
          },
          {
            "id": "devops-t3-s14",
            "title": "Users and groups"
          }
        ],
        "overview": "Recommended learning distribution:\n\nLater understand:",
        "codeExample": "Ubuntu Server",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Ubuntu Server",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [
          "Debian",
          "Red Hat Enterprise Linux",
          "Rocky Linux",
          "Amazon Linux",
          "Alpine Linux"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t4",
        "number": 2,
        "title": "Essential Linux Commands",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t4-s1",
            "title": "`pwd`"
          },
          {
            "id": "devops-t4-s2",
            "title": "`ls`"
          },
          {
            "id": "devops-t4-s3",
            "title": "`cd`"
          },
          {
            "id": "devops-t4-s4",
            "title": "`tree`"
          },
          {
            "id": "devops-t4-s5",
            "title": "`find`"
          },
          {
            "id": "devops-t4-s6",
            "title": "`locate`"
          },
          {
            "id": "devops-t4-s7",
            "title": "`touch`"
          },
          {
            "id": "devops-t4-s8",
            "title": "`mkdir`"
          },
          {
            "id": "devops-t4-s9",
            "title": "`cp`"
          },
          {
            "id": "devops-t4-s10",
            "title": "`mv`"
          },
          {
            "id": "devops-t4-s11",
            "title": "`rm`"
          },
          {
            "id": "devops-t4-s12",
            "title": "`ln`"
          },
          {
            "id": "devops-t4-s13",
            "title": "`stat`"
          },
          {
            "id": "devops-t4-s14",
            "title": "`file`"
          },
          {
            "id": "devops-t4-s15",
            "title": "`cat`"
          },
          {
            "id": "devops-t4-s16",
            "title": "`less`"
          },
          {
            "id": "devops-t4-s17",
            "title": "`head`"
          },
          {
            "id": "devops-t4-s18",
            "title": "`tail`"
          },
          {
            "id": "devops-t4-s19",
            "title": "`wc`"
          },
          {
            "id": "devops-t4-s20",
            "title": "`grep`"
          },
          {
            "id": "devops-t4-s21",
            "title": "`sort`"
          },
          {
            "id": "devops-t4-s22",
            "title": "`uniq`"
          },
          {
            "id": "devops-t4-s23",
            "title": "`cut`"
          },
          {
            "id": "devops-t4-s24",
            "title": "`tr`"
          },
          {
            "id": "devops-t4-s25",
            "title": "Regular expressions"
          },
          {
            "id": "devops-t4-s26",
            "title": "`grep`"
          },
          {
            "id": "devops-t4-s27",
            "title": "`sed`"
          },
          {
            "id": "devops-t4-s28",
            "title": "`awk`"
          },
          {
            "id": "devops-t4-s29",
            "title": "`xargs`"
          },
          {
            "id": "devops-t4-s30",
            "title": "Pipes: `|`"
          },
          {
            "id": "devops-t4-s31",
            "title": "Input redirection"
          },
          {
            "id": "devops-t4-s32",
            "title": "Output redirection"
          },
          {
            "id": "devops-t4-s33",
            "title": "Error redirection"
          },
          {
            "id": "devops-t4-s34",
            "title": "`tar`"
          },
          {
            "id": "devops-t4-s35",
            "title": "`gzip`"
          },
          {
            "id": "devops-t4-s36",
            "title": "`gunzip`"
          },
          {
            "id": "devops-t4-s37",
            "title": "`zip`"
          },
          {
            "id": "devops-t4-s38",
            "title": "`unzip`"
          }
        ],
        "overview": "**Essential Linux Commands** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: `pwd`, `ls`, `cd`, `tree`, and 34 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Navigation",
            "items": [
              "`pwd`",
              "`ls`",
              "`cd`",
              "`tree`",
              "`find`",
              "`locate`"
            ]
          },
          {
            "title": "File management",
            "items": [
              "`touch`",
              "`mkdir`",
              "`cp`",
              "`mv`",
              "`rm`",
              "`ln`",
              "`stat`",
              "`file`"
            ]
          },
          {
            "title": "Reading files",
            "items": [
              "`cat`",
              "`less`",
              "`head`",
              "`tail`",
              "`wc`",
              "`grep`",
              "`sort`",
              "`uniq`",
              "`cut`",
              "`tr`"
            ]
          },
          {
            "title": "Text processing",
            "items": [
              "Regular expressions",
              "`grep`",
              "`sed`",
              "`awk`",
              "`xargs`",
              "Pipes: `|`",
              "Input redirection",
              "Output redirection",
              "Error redirection"
            ]
          },
          {
            "title": "Archive and compression",
            "items": [
              "`tar`",
              "`gzip`",
              "`gunzip`",
              "`zip`",
              "`unzip`"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t5",
        "number": 3,
        "title": "Linux Users and Permissions",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t5-s1",
            "title": "Users"
          },
          {
            "id": "devops-t5-s2",
            "title": "Groups"
          },
          {
            "id": "devops-t5-s3",
            "title": "File owner"
          },
          {
            "id": "devops-t5-s4",
            "title": "Group owner"
          },
          {
            "id": "devops-t5-s5",
            "title": "Read permission"
          },
          {
            "id": "devops-t5-s6",
            "title": "Write permission"
          },
          {
            "id": "devops-t5-s7",
            "title": "Execute permission"
          },
          {
            "id": "devops-t5-s8",
            "title": "Numeric permissions"
          },
          {
            "id": "devops-t5-s9",
            "title": "Symbolic permissions"
          },
          {
            "id": "devops-t5-s10",
            "title": "`chmod`"
          },
          {
            "id": "devops-t5-s11",
            "title": "`chown`"
          },
          {
            "id": "devops-t5-s12",
            "title": "`chgrp`"
          },
          {
            "id": "devops-t5-s13",
            "title": "`sudo`"
          },
          {
            "id": "devops-t5-s14",
            "title": "`su`"
          },
          {
            "id": "devops-t5-s15",
            "title": "`umask`"
          },
          {
            "id": "devops-t5-s16",
            "title": "Setuid"
          },
          {
            "id": "devops-t5-s17",
            "title": "Setgid"
          },
          {
            "id": "devops-t5-s18",
            "title": "Sticky bit"
          },
          {
            "id": "devops-t5-s19",
            "title": "Principle of least privilege"
          }
        ],
        "overview": "**Linux Users and Permissions** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Users, Groups, File owner, Group owner, and 15 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t6",
        "number": 4,
        "title": "Process Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t6-s1",
            "title": "Process ID"
          },
          {
            "id": "devops-t6-s2",
            "title": "Parent process"
          },
          {
            "id": "devops-t6-s3",
            "title": "Foreground process"
          },
          {
            "id": "devops-t6-s4",
            "title": "Background process"
          },
          {
            "id": "devops-t6-s5",
            "title": "Signals"
          },
          {
            "id": "devops-t6-s6",
            "title": "Zombie process"
          },
          {
            "id": "devops-t6-s7",
            "title": "Daemon"
          },
          {
            "id": "devops-t6-s8",
            "title": "`ps`"
          },
          {
            "id": "devops-t6-s9",
            "title": "`top`"
          },
          {
            "id": "devops-t6-s10",
            "title": "`htop`"
          },
          {
            "id": "devops-t6-s11",
            "title": "`pgrep`"
          },
          {
            "id": "devops-t6-s12",
            "title": "`pkill`"
          },
          {
            "id": "devops-t6-s13",
            "title": "`kill`"
          },
          {
            "id": "devops-t6-s14",
            "title": "`killall`"
          },
          {
            "id": "devops-t6-s15",
            "title": "`jobs`"
          },
          {
            "id": "devops-t6-s16",
            "title": "`bg`"
          },
          {
            "id": "devops-t6-s17",
            "title": "`fg`"
          },
          {
            "id": "devops-t6-s18",
            "title": "`nohup`"
          },
          {
            "id": "devops-t6-s19",
            "title": "`nice`"
          },
          {
            "id": "devops-t6-s20",
            "title": "`renice`"
          }
        ],
        "overview": "**Process Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Process ID, Parent process, Foreground process, Background process, and 16 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t7",
        "number": 5,
        "title": "Service Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t7-s1",
            "title": "Unit"
          },
          {
            "id": "devops-t7-s2",
            "title": "Service"
          },
          {
            "id": "devops-t7-s3",
            "title": "Target"
          },
          {
            "id": "devops-t7-s4",
            "title": "Service file"
          },
          {
            "id": "devops-t7-s5",
            "title": "Startup dependencies"
          },
          {
            "id": "devops-t7-s6",
            "title": "Automatic restart"
          }
        ],
        "overview": "**Service Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Unit, Service, Target, Service file, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "systemctl status application\nsystemctl start application\nsystemctl stop application\nsystemctl restart application\nsystemctl enable application\njournalctl -u application",
        "codeExampleLang": "bash",
        "codeExamples": [
          {
            "lang": "bash",
            "code": "systemctl status application\nsystemctl start application\nsystemctl stop application\nsystemctl restart application\nsystemctl enable application\njournalctl -u application",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t8",
        "number": 6,
        "title": "Package Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t8-s1",
            "title": "`apt`"
          },
          {
            "id": "devops-t8-s2",
            "title": "`dpkg`"
          },
          {
            "id": "devops-t8-s3",
            "title": "`dnf`"
          },
          {
            "id": "devops-t8-s4",
            "title": "`rpm`"
          },
          {
            "id": "devops-t8-s5",
            "title": "Installing packages"
          },
          {
            "id": "devops-t8-s6",
            "title": "Removing packages"
          },
          {
            "id": "devops-t8-s7",
            "title": "Updating packages"
          },
          {
            "id": "devops-t8-s8",
            "title": "Package repositories"
          },
          {
            "id": "devops-t8-s9",
            "title": "Signing keys"
          },
          {
            "id": "devops-t8-s10",
            "title": "Package dependencies"
          }
        ],
        "overview": "**Package Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: `apt`, `dpkg`, `dnf`, `rpm`, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Debian and Ubuntu",
            "items": [
              "`apt`",
              "`dpkg`"
            ]
          },
          {
            "title": "Red Hat-based systems",
            "items": [
              "`dnf`",
              "`rpm`",
              "Installing packages",
              "Removing packages",
              "Updating packages",
              "Package repositories",
              "Signing keys",
              "Package dependencies"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t9",
        "number": 7,
        "title": "Disk and Memory Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t9-s1",
            "title": "Filesystems"
          },
          {
            "id": "devops-t9-s2",
            "title": "Mount points"
          },
          {
            "id": "devops-t9-s3",
            "title": "Disk partitions"
          },
          {
            "id": "devops-t9-s4",
            "title": "Inodes"
          },
          {
            "id": "devops-t9-s5",
            "title": "Swap"
          },
          {
            "id": "devops-t9-s6",
            "title": "Page cache"
          },
          {
            "id": "devops-t9-s7",
            "title": "Memory usage"
          },
          {
            "id": "devops-t9-s8",
            "title": "`df`"
          },
          {
            "id": "devops-t9-s9",
            "title": "`du`"
          },
          {
            "id": "devops-t9-s10",
            "title": "`free`"
          },
          {
            "id": "devops-t9-s11",
            "title": "`lsblk`"
          },
          {
            "id": "devops-t9-s12",
            "title": "`mount`"
          },
          {
            "id": "devops-t9-s13",
            "title": "`umount`"
          },
          {
            "id": "devops-t9-s14",
            "title": "`fdisk`"
          },
          {
            "id": "devops-t9-s15",
            "title": "`lsof`"
          },
          {
            "id": "devops-t9-s16",
            "title": "`vmstat`"
          },
          {
            "id": "devops-t9-s17",
            "title": "`iostat`"
          }
        ],
        "overview": "**Disk and Memory Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Filesystems, Mount points, Disk partitions, Inodes, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t10",
        "number": 8,
        "title": "Linux Logs",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t10-s1",
            "title": "System logs"
          },
          {
            "id": "devops-t10-s2",
            "title": "Application logs"
          },
          {
            "id": "devops-t10-s3",
            "title": "Authentication logs"
          },
          {
            "id": "devops-t10-s4",
            "title": "Kernel logs"
          },
          {
            "id": "devops-t10-s5",
            "title": "Log rotation"
          },
          {
            "id": "devops-t10-s6",
            "title": "`journalctl`"
          },
          {
            "id": "devops-t10-s7",
            "title": "`dmesg`"
          },
          {
            "id": "devops-t10-s8",
            "title": "`tail -f`"
          },
          {
            "id": "devops-t10-s9",
            "title": "`grep`"
          },
          {
            "id": "devops-t10-s10",
            "title": "`logrotate`"
          }
        ],
        "overview": "**Linux Logs** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: System logs, Application logs, Authentication logs, Kernel logs, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 58,
    "title": "Shell Scripting",
    "icon": "🚀",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t11",
        "number": 1,
        "title": "Bash Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t11-s1",
            "title": "Shebang"
          },
          {
            "id": "devops-t11-s2",
            "title": "Variables"
          },
          {
            "id": "devops-t11-s3",
            "title": "Environment variables"
          },
          {
            "id": "devops-t11-s4",
            "title": "Command substitution"
          },
          {
            "id": "devops-t11-s5",
            "title": "Quoting"
          },
          {
            "id": "devops-t11-s6",
            "title": "Positional arguments"
          },
          {
            "id": "devops-t11-s7",
            "title": "Exit codes"
          },
          {
            "id": "devops-t11-s8",
            "title": "Standard input"
          },
          {
            "id": "devops-t11-s9",
            "title": "Standard output"
          },
          {
            "id": "devops-t11-s10",
            "title": "Standard error"
          },
          {
            "id": "devops-t11-s11",
            "title": "Functions"
          },
          {
            "id": "devops-t11-s12",
            "title": "Arrays"
          },
          {
            "id": "devops-t11-s13",
            "title": "Conditional statements"
          },
          {
            "id": "devops-t11-s14",
            "title": "Loops"
          },
          {
            "id": "devops-t11-s15",
            "title": "`case`"
          },
          {
            "id": "devops-t11-s16",
            "title": "File tests"
          },
          {
            "id": "devops-t11-s17",
            "title": "String tests"
          },
          {
            "id": "devops-t11-s18",
            "title": "Numeric tests"
          }
        ],
        "overview": "**Bash Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Shebang, Variables, Environment variables, Command substitution, and 14 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t12",
        "number": 2,
        "title": "Production-Quality Shell Scripts",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t12-s1",
            "title": "Input validation"
          },
          {
            "id": "devops-t12-s2",
            "title": "Error handling"
          },
          {
            "id": "devops-t12-s3",
            "title": "Logging"
          },
          {
            "id": "devops-t12-s4",
            "title": "Cleanup traps"
          },
          {
            "id": "devops-t12-s5",
            "title": "Temporary files"
          },
          {
            "id": "devops-t12-s6",
            "title": "Idempotency"
          },
          {
            "id": "devops-t12-s7",
            "title": "Configuration files"
          },
          {
            "id": "devops-t12-s8",
            "title": "Secret protection"
          },
          {
            "id": "devops-t12-s9",
            "title": "ShellCheck"
          },
          {
            "id": "devops-t12-s10",
            "title": "Script portability"
          }
        ],
        "overview": "**Production-Quality Shell Scripts** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Input validation, Error handling, Logging, Cleanup traps, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "set -euo pipefail",
        "codeExampleLang": "bash",
        "codeExamples": [
          {
            "lang": "bash",
            "code": "set -euo pipefail",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t13",
        "number": 3,
        "title": "Automation Scripts to Build",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t13-s1",
            "title": "Install Java"
          },
          {
            "id": "devops-t13-s2",
            "title": "Build a Maven project"
          },
          {
            "id": "devops-t13-s3",
            "title": "Start and stop a Spring Boot application"
          },
          {
            "id": "devops-t13-s4",
            "title": "Back up PostgreSQL"
          },
          {
            "id": "devops-t13-s5",
            "title": "Rotate application logs"
          },
          {
            "id": "devops-t13-s6",
            "title": "Check disk usage"
          },
          {
            "id": "devops-t13-s7",
            "title": "Check service health"
          },
          {
            "id": "devops-t13-s8",
            "title": "Deploy a JAR file"
          },
          {
            "id": "devops-t13-s9",
            "title": "Roll back to a previous release"
          }
        ],
        "overview": "**Automation Scripts to Build** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Install Java, Build a Maven project, Start and stop a Spring Boot application, Back up PostgreSQL, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 59,
    "title": "Networking",
    "icon": "🚀",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t14",
        "number": 1,
        "title": "Networking Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t14-s1",
            "title": "OSI model"
          },
          {
            "id": "devops-t14-s2",
            "title": "TCP/IP model"
          },
          {
            "id": "devops-t14-s3",
            "title": "IP address"
          },
          {
            "id": "devops-t14-s4",
            "title": "IPv4"
          },
          {
            "id": "devops-t14-s5",
            "title": "IPv6"
          },
          {
            "id": "devops-t14-s6",
            "title": "Public IP"
          },
          {
            "id": "devops-t14-s7",
            "title": "Private IP"
          },
          {
            "id": "devops-t14-s8",
            "title": "Subnet"
          },
          {
            "id": "devops-t14-s9",
            "title": "Subnet mask"
          },
          {
            "id": "devops-t14-s10",
            "title": "CIDR"
          },
          {
            "id": "devops-t14-s11",
            "title": "Default gateway"
          },
          {
            "id": "devops-t14-s12",
            "title": "Routing"
          },
          {
            "id": "devops-t14-s13",
            "title": "NAT"
          },
          {
            "id": "devops-t14-s14",
            "title": "Port"
          },
          {
            "id": "devops-t14-s15",
            "title": "Socket"
          },
          {
            "id": "devops-t14-s16",
            "title": "Firewall"
          },
          {
            "id": "devops-t14-s17",
            "title": "Proxy"
          },
          {
            "id": "devops-t14-s18",
            "title": "Reverse proxy"
          },
          {
            "id": "devops-t14-s19",
            "title": "Load balancer"
          }
        ],
        "overview": "**Networking Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: OSI model, TCP/IP model, IP address, IPv4, and 15 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t15",
        "number": 2,
        "title": "Protocols",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t15-s1",
            "title": "TCP"
          },
          {
            "id": "devops-t15-s2",
            "title": "UDP"
          },
          {
            "id": "devops-t15-s3",
            "title": "HTTP"
          },
          {
            "id": "devops-t15-s4",
            "title": "HTTPS"
          },
          {
            "id": "devops-t15-s5",
            "title": "TLS"
          },
          {
            "id": "devops-t15-s6",
            "title": "DNS"
          },
          {
            "id": "devops-t15-s7",
            "title": "DHCP"
          },
          {
            "id": "devops-t15-s8",
            "title": "SSH"
          },
          {
            "id": "devops-t15-s9",
            "title": "FTP/SFTP"
          },
          {
            "id": "devops-t15-s10",
            "title": "SMTP"
          },
          {
            "id": "devops-t15-s11",
            "title": "WebSocket"
          },
          {
            "id": "devops-t15-s12",
            "title": "ICMP"
          }
        ],
        "overview": "**Protocols** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: TCP, UDP, HTTP, HTTPS, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t16",
        "number": 3,
        "title": "DNS",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t16-s1",
            "title": "Domain"
          },
          {
            "id": "devops-t16-s2",
            "title": "DNS resolver"
          },
          {
            "id": "devops-t16-s3",
            "title": "Authoritative nameserver"
          },
          {
            "id": "devops-t16-s4",
            "title": "DNS zones"
          },
          {
            "id": "devops-t16-s5",
            "title": "TTL"
          },
          {
            "id": "devops-t16-s6",
            "title": "DNS caching"
          },
          {
            "id": "devops-t16-s7",
            "title": "`A`"
          },
          {
            "id": "devops-t16-s8",
            "title": "`AAAA`"
          },
          {
            "id": "devops-t16-s9",
            "title": "`CNAME`"
          },
          {
            "id": "devops-t16-s10",
            "title": "`MX`"
          },
          {
            "id": "devops-t16-s11",
            "title": "`TXT`"
          },
          {
            "id": "devops-t16-s12",
            "title": "`NS`"
          },
          {
            "id": "devops-t16-s13",
            "title": "`SRV`"
          }
        ],
        "overview": "**DNS** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Domain, DNS resolver, Authoritative nameserver, DNS zones, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t17",
        "number": 4,
        "title": "Networking Commands",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t17-s1",
            "title": "`ip`"
          },
          {
            "id": "devops-t17-s2",
            "title": "`ss`"
          },
          {
            "id": "devops-t17-s3",
            "title": "`ping`"
          },
          {
            "id": "devops-t17-s4",
            "title": "`traceroute`"
          },
          {
            "id": "devops-t17-s5",
            "title": "`curl`"
          },
          {
            "id": "devops-t17-s6",
            "title": "`wget`"
          },
          {
            "id": "devops-t17-s7",
            "title": "`dig`"
          },
          {
            "id": "devops-t17-s8",
            "title": "`nslookup`"
          },
          {
            "id": "devops-t17-s9",
            "title": "`netcat`"
          },
          {
            "id": "devops-t17-s10",
            "title": "`telnet`"
          },
          {
            "id": "devops-t17-s11",
            "title": "`tcpdump`"
          },
          {
            "id": "devops-t17-s12",
            "title": "`openssl s_client`"
          },
          {
            "id": "devops-t17-s13",
            "title": "`nmap` for authorized environments"
          }
        ],
        "overview": "**Networking Commands** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: `ip`, `ss`, `ping`, `traceroute`, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t18",
        "number": 5,
        "title": "HTTP and TLS",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t18-s1",
            "title": "HTTP request"
          },
          {
            "id": "devops-t18-s2",
            "title": "HTTP response"
          },
          {
            "id": "devops-t18-s3",
            "title": "Methods"
          },
          {
            "id": "devops-t18-s4",
            "title": "Headers"
          },
          {
            "id": "devops-t18-s5",
            "title": "Status codes"
          },
          {
            "id": "devops-t18-s6",
            "title": "Cookies"
          },
          {
            "id": "devops-t18-s7",
            "title": "Keep-alive"
          },
          {
            "id": "devops-t18-s8",
            "title": "HTTP/2"
          },
          {
            "id": "devops-t18-s9",
            "title": "HTTP/3 concepts"
          },
          {
            "id": "devops-t18-s10",
            "title": "TLS certificate"
          },
          {
            "id": "devops-t18-s11",
            "title": "Certificate authority"
          },
          {
            "id": "devops-t18-s12",
            "title": "Public and private keys"
          },
          {
            "id": "devops-t18-s13",
            "title": "Certificate chain"
          },
          {
            "id": "devops-t18-s14",
            "title": "TLS termination"
          },
          {
            "id": "devops-t18-s15",
            "title": "Mutual TLS"
          },
          {
            "id": "devops-t18-s16",
            "title": "Certificate renewal"
          }
        ],
        "overview": "**HTTP and TLS** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: HTTP request, HTTP response, Methods, Headers, and 12 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 60,
    "title": "Git and Source Control",
    "icon": "🚀",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t19",
        "number": 1,
        "title": "Git Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t19-s1",
            "title": "Repository"
          },
          {
            "id": "devops-t19-s2",
            "title": "Working tree"
          },
          {
            "id": "devops-t19-s3",
            "title": "Staging area"
          },
          {
            "id": "devops-t19-s4",
            "title": "Commit"
          },
          {
            "id": "devops-t19-s5",
            "title": "Branch"
          },
          {
            "id": "devops-t19-s6",
            "title": "Tag"
          },
          {
            "id": "devops-t19-s7",
            "title": "Remote repository"
          },
          {
            "id": "devops-t19-s8",
            "title": "Merge"
          },
          {
            "id": "devops-t19-s9",
            "title": "Rebase"
          },
          {
            "id": "devops-t19-s10",
            "title": "Conflict"
          },
          {
            "id": "devops-t19-s11",
            "title": "`git init`"
          },
          {
            "id": "devops-t19-s12",
            "title": "`git clone`"
          },
          {
            "id": "devops-t19-s13",
            "title": "`git status`"
          },
          {
            "id": "devops-t19-s14",
            "title": "`git add`"
          },
          {
            "id": "devops-t19-s15",
            "title": "`git commit`"
          },
          {
            "id": "devops-t19-s16",
            "title": "`git log`"
          },
          {
            "id": "devops-t19-s17",
            "title": "`git diff`"
          },
          {
            "id": "devops-t19-s18",
            "title": "`git branch`"
          },
          {
            "id": "devops-t19-s19",
            "title": "`git switch`"
          },
          {
            "id": "devops-t19-s20",
            "title": "`git merge`"
          },
          {
            "id": "devops-t19-s21",
            "title": "`git rebase`"
          },
          {
            "id": "devops-t19-s22",
            "title": "`git pull`"
          },
          {
            "id": "devops-t19-s23",
            "title": "`git push`"
          },
          {
            "id": "devops-t19-s24",
            "title": "`git fetch`"
          },
          {
            "id": "devops-t19-s25",
            "title": "`git tag`"
          },
          {
            "id": "devops-t19-s26",
            "title": "`git stash`"
          },
          {
            "id": "devops-t19-s27",
            "title": "`git revert`"
          },
          {
            "id": "devops-t19-s28",
            "title": "`git reset`"
          },
          {
            "id": "devops-t19-s29",
            "title": "`git cherry-pick`"
          }
        ],
        "overview": "**Git Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Repository, Working tree, Staging area, Commit, and 25 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t20",
        "number": 2,
        "title": "Git Collaboration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t20-s1",
            "title": "Pull requests"
          },
          {
            "id": "devops-t20-s2",
            "title": "Code reviews"
          },
          {
            "id": "devops-t20-s3",
            "title": "Protected branches"
          },
          {
            "id": "devops-t20-s4",
            "title": "Required status checks"
          },
          {
            "id": "devops-t20-s5",
            "title": "Merge strategies"
          },
          {
            "id": "devops-t20-s6",
            "title": "Conventional commits"
          },
          {
            "id": "devops-t20-s7",
            "title": "Semantic versioning"
          },
          {
            "id": "devops-t20-s8",
            "title": "Release tags"
          },
          {
            "id": "devops-t20-s9",
            "title": "Changelogs"
          },
          {
            "id": "devops-t20-s10",
            "title": "Git hooks"
          },
          {
            "id": "devops-t20-s11",
            "title": "Signed commits"
          },
          {
            "id": "devops-t20-s12",
            "title": "`.gitignore`"
          }
        ],
        "overview": "**Git Collaboration** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Pull requests, Code reviews, Protected branches, Required status checks, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t21",
        "number": 3,
        "title": "Branching Strategies",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [],
        "overview": "For most modern application teams, learn **short-lived branches and pull-request-based integration** first.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Trunk-based development",
          "Feature branches",
          "GitHub Flow",
          "Git Flow",
          "Release branches",
          "Hotfix branches"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 61,
    "title": "Java Build and Artifact Management",
    "icon": "🚀",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t22",
        "number": 1,
        "title": "Java Build Lifecycle",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t22-s1",
            "title": "`pom.xml`"
          },
          {
            "id": "devops-t22-s2",
            "title": "Coordinates"
          },
          {
            "id": "devops-t22-s3",
            "title": "Dependencies"
          },
          {
            "id": "devops-t22-s4",
            "title": "Plugins"
          },
          {
            "id": "devops-t22-s5",
            "title": "Profiles"
          },
          {
            "id": "devops-t22-s6",
            "title": "Properties"
          },
          {
            "id": "devops-t22-s7",
            "title": "Build lifecycle"
          },
          {
            "id": "devops-t22-s8",
            "title": "Multi-module projects"
          },
          {
            "id": "devops-t22-s9",
            "title": "Dependency scopes"
          },
          {
            "id": "devops-t22-s10",
            "title": "Maven Wrapper"
          },
          {
            "id": "devops-t22-s11",
            "title": "Gradle Wrapper"
          },
          {
            "id": "devops-t22-s12",
            "title": "Tasks"
          },
          {
            "id": "devops-t22-s13",
            "title": "Plugins"
          },
          {
            "id": "devops-t22-s14",
            "title": "Dependencies"
          },
          {
            "id": "devops-t22-s15",
            "title": "Multi-project builds"
          },
          {
            "id": "devops-t22-s16",
            "title": "Build cache"
          }
        ],
        "overview": "For Spring projects, master Maven first:\n\nImportant commands:\n\nLearn Gradle afterward:",
        "codeExample": "./mvnw clean\n./mvnw test\n./mvnw verify\n./mvnw package\n./mvnw spring-boot:run",
        "codeExampleLang": "bash",
        "codeExamples": [
          {
            "lang": "bash",
            "code": "./mvnw clean\n./mvnw test\n./mvnw verify\n./mvnw package\n./mvnw spring-boot:run",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t23",
        "number": 2,
        "title": "Artifact Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t23-s1",
            "title": "JAR"
          },
          {
            "id": "devops-t23-s2",
            "title": "WAR"
          },
          {
            "id": "devops-t23-s3",
            "title": "Build artifact"
          },
          {
            "id": "devops-t23-s4",
            "title": "Snapshot release"
          },
          {
            "id": "devops-t23-s5",
            "title": "Stable release"
          },
          {
            "id": "devops-t23-s6",
            "title": "Artifact versioning"
          },
          {
            "id": "devops-t23-s7",
            "title": "Artifact repository"
          },
          {
            "id": "devops-t23-s8",
            "title": "Dependency repository"
          }
        ],
        "overview": "**Artifact Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: JAR, WAR, Build artifact, Snapshot release, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Maven Central",
          "GitHub Packages",
          "Nexus Repository",
          "JFrog Artifactory",
          "Cloud artifact registries"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t24",
        "number": 3,
        "title": "Software Versioning",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t24-s1",
            "title": "Semantic versioning"
          },
          {
            "id": "devops-t24-s2",
            "title": "Release version"
          },
          {
            "id": "devops-t24-s3",
            "title": "Pre-release version"
          },
          {
            "id": "devops-t24-s4",
            "title": "Snapshot"
          },
          {
            "id": "devops-t24-s5",
            "title": "Build metadata"
          },
          {
            "id": "devops-t24-s6",
            "title": "Git tags"
          },
          {
            "id": "devops-t24-s7",
            "title": "Immutable releases"
          },
          {
            "id": "devops-t24-s8",
            "title": "Reproducible builds"
          }
        ],
        "overview": "**Software Versioning** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Semantic versioning, Release version, Pre-release version, Snapshot, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 62,
    "title": "Continuous Integration and Delivery",
    "icon": "🚀",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "GitHub Actions defines automation using YAML workflows composed of events, jobs and steps, and can automate Java builds, tests and deployment pipelines. ([GitHub Docs][1])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t25",
        "number": 1,
        "title": "CI Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t25-s1",
            "title": "Pipeline"
          },
          {
            "id": "devops-t25-s2",
            "title": "Workflow"
          },
          {
            "id": "devops-t25-s3",
            "title": "Job"
          },
          {
            "id": "devops-t25-s4",
            "title": "Step"
          },
          {
            "id": "devops-t25-s5",
            "title": "Runner"
          },
          {
            "id": "devops-t25-s6",
            "title": "Agent"
          },
          {
            "id": "devops-t25-s7",
            "title": "Trigger"
          },
          {
            "id": "devops-t25-s8",
            "title": "Artifact"
          },
          {
            "id": "devops-t25-s9",
            "title": "Cache"
          },
          {
            "id": "devops-t25-s10",
            "title": "Secret"
          },
          {
            "id": "devops-t25-s11",
            "title": "Environment"
          },
          {
            "id": "devops-t25-s12",
            "title": "Matrix build"
          },
          {
            "id": "devops-t25-s13",
            "title": "Parallel jobs"
          },
          {
            "id": "devops-t25-s14",
            "title": "Conditional execution"
          },
          {
            "id": "devops-t25-s15",
            "title": "Manual approval"
          }
        ],
        "overview": "**CI Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Pipeline, Workflow, Job, Step, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "Checkout\n   ↓\nInstall JDK\n   ↓\nRestore dependency cache\n   ↓\nCompile\n   ↓\nUnit tests\n   ↓\nIntegration tests\n   ↓\nStatic analysis\n   ↓\nSecurity scanning\n   ↓\nPackage\n   ↓\nPublish artifact",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Checkout\n   ↓\nInstall JDK\n   ↓\nRestore dependency cache\n   ↓\nCompile\n   ↓\nUnit tests\n   ↓\nIntegration tests\n   ↓\nStatic analysis\n   ↓\nSecurity scanning\n   ↓\nPackage\n   ↓\nPublish artifact",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t26",
        "number": 2,
        "title": "Choose One CI/CD Tool",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Do not attempt to master all CI systems simultaneously.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "GitHub Actions",
          "GitLab CI/CD",
          "Jenkins",
          "Azure DevOps Pipelines",
          "CircleCI",
          "Bitbucket Pipelines"
        ],
        "subSections": [
          {
            "title": "Recommended first choice",
            "items": [
              "GitHub Actions"
            ]
          },
          {
            "title": "Learn when required",
            "items": [
              "GitLab CI/CD",
              "Jenkins",
              "Azure DevOps Pipelines",
              "CircleCI",
              "Bitbucket Pipelines"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t27",
        "number": 3,
        "title": "GitHub Actions Topics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t27-s1",
            "title": "Workflow YAML"
          },
          {
            "id": "devops-t27-s2",
            "title": "Workflow events"
          },
          {
            "id": "devops-t27-s3",
            "title": "Push triggers"
          },
          {
            "id": "devops-t27-s4",
            "title": "Pull-request triggers"
          },
          {
            "id": "devops-t27-s5",
            "title": "Scheduled workflows"
          },
          {
            "id": "devops-t27-s6",
            "title": "Manual workflows"
          },
          {
            "id": "devops-t27-s7",
            "title": "Jobs"
          },
          {
            "id": "devops-t27-s8",
            "title": "Steps"
          },
          {
            "id": "devops-t27-s9",
            "title": "Actions"
          },
          {
            "id": "devops-t27-s10",
            "title": "Environment variables"
          },
          {
            "id": "devops-t27-s11",
            "title": "Expressions"
          },
          {
            "id": "devops-t27-s12",
            "title": "Contexts"
          },
          {
            "id": "devops-t27-s13",
            "title": "Secrets"
          },
          {
            "id": "devops-t27-s14",
            "title": "Artifacts"
          },
          {
            "id": "devops-t27-s15",
            "title": "Dependency caching"
          },
          {
            "id": "devops-t27-s16",
            "title": "Matrix builds"
          },
          {
            "id": "devops-t27-s17",
            "title": "Reusable workflows"
          },
          {
            "id": "devops-t27-s18",
            "title": "Composite actions"
          },
          {
            "id": "devops-t27-s19",
            "title": "Hosted runners"
          },
          {
            "id": "devops-t27-s20",
            "title": "Self-hosted runners"
          },
          {
            "id": "devops-t27-s21",
            "title": "Environments"
          },
          {
            "id": "devops-t27-s22",
            "title": "Deployment approvals"
          },
          {
            "id": "devops-t27-s23",
            "title": "OpenID Connect authentication"
          }
        ],
        "overview": "**GitHub Actions Topics** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Workflow YAML, Workflow events, Push triggers, Pull-request triggers, and 19 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t28",
        "number": 4,
        "title": "Continuous Delivery",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t28-s1",
            "title": "Artifact promotion"
          },
          {
            "id": "devops-t28-s2",
            "title": "Development deployment"
          },
          {
            "id": "devops-t28-s3",
            "title": "Staging deployment"
          },
          {
            "id": "devops-t28-s4",
            "title": "Production deployment"
          },
          {
            "id": "devops-t28-s5",
            "title": "Approval gates"
          },
          {
            "id": "devops-t28-s6",
            "title": "Smoke tests"
          },
          {
            "id": "devops-t28-s7",
            "title": "Health checks"
          },
          {
            "id": "devops-t28-s8",
            "title": "Database migrations"
          },
          {
            "id": "devops-t28-s9",
            "title": "Rollbacks"
          },
          {
            "id": "devops-t28-s10",
            "title": "Deployment audit trails"
          },
          {
            "id": "devops-t28-s11",
            "title": "Release notifications"
          }
        ],
        "overview": "**Continuous Delivery** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Artifact promotion, Development deployment, Staging deployment, Production deployment, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t29",
        "number": 5,
        "title": "Deployment Strategies",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t29-s1",
            "title": "Recreate deployment"
          },
          {
            "id": "devops-t29-s2",
            "title": "Rolling deployment"
          },
          {
            "id": "devops-t29-s3",
            "title": "Blue-green deployment"
          },
          {
            "id": "devops-t29-s4",
            "title": "Canary deployment"
          },
          {
            "id": "devops-t29-s5",
            "title": "Feature flags"
          },
          {
            "id": "devops-t29-s6",
            "title": "Shadow deployment"
          },
          {
            "id": "devops-t29-s7",
            "title": "A/B testing concepts"
          }
        ],
        "overview": "**Deployment Strategies** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Recreate deployment, Rolling deployment, Blue-green deployment, Canary deployment, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Deployment speed",
          "Rollback speed",
          "Infrastructure cost",
          "Traffic control",
          "Database compatibility"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t30",
        "number": 6,
        "title": "Java CI Pipeline Requirements",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t30-s1",
            "title": "Compilation"
          },
          {
            "id": "devops-t30-s2",
            "title": "Unit tests"
          },
          {
            "id": "devops-t30-s3",
            "title": "Integration tests"
          },
          {
            "id": "devops-t30-s4",
            "title": "Testcontainers tests"
          },
          {
            "id": "devops-t30-s5",
            "title": "JaCoCo coverage"
          },
          {
            "id": "devops-t30-s6",
            "title": "Checkstyle"
          },
          {
            "id": "devops-t30-s7",
            "title": "SpotBugs"
          },
          {
            "id": "devops-t30-s8",
            "title": "Sonar analysis"
          },
          {
            "id": "devops-t30-s9",
            "title": "Dependency vulnerability scan"
          },
          {
            "id": "devops-t30-s10",
            "title": "Secret scan"
          },
          {
            "id": "devops-t30-s11",
            "title": "Maven package"
          },
          {
            "id": "devops-t30-s12",
            "title": "Docker build"
          },
          {
            "id": "devops-t30-s13",
            "title": "Container scan"
          },
          {
            "id": "devops-t30-s14",
            "title": "Image push"
          },
          {
            "id": "devops-t30-s15",
            "title": "Staging deployment"
          },
          {
            "id": "devops-t30-s16",
            "title": "Smoke tests"
          },
          {
            "id": "devops-t30-s17",
            "title": "Production approval"
          },
          {
            "id": "devops-t30-s18",
            "title": "Production deployment"
          },
          {
            "id": "devops-t30-s19",
            "title": "Post-deployment validation"
          }
        ],
        "overview": "Your Spring Boot pipeline should eventually run:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 63,
    "title": "Docker",
    "icon": "🚀",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "Docker provides a standardized approach for developing, packaging, shipping and running applications separately from their underlying infrastructure. ([Docker Documentation][2])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t31",
        "number": 1,
        "title": "Container Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t31-s1",
            "title": "Container"
          },
          {
            "id": "devops-t31-s2",
            "title": "Image"
          },
          {
            "id": "devops-t31-s3",
            "title": "Image layer"
          },
          {
            "id": "devops-t31-s4",
            "title": "Registry"
          },
          {
            "id": "devops-t31-s5",
            "title": "Repository"
          },
          {
            "id": "devops-t31-s6",
            "title": "Tag"
          },
          {
            "id": "devops-t31-s7",
            "title": "Container runtime"
          },
          {
            "id": "devops-t31-s8",
            "title": "Namespace"
          },
          {
            "id": "devops-t31-s9",
            "title": "Control groups"
          },
          {
            "id": "devops-t31-s10",
            "title": "Union filesystem"
          },
          {
            "id": "devops-t31-s11",
            "title": "Container versus virtual machine"
          }
        ],
        "overview": "**Container Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Container, Image, Image layer, Registry, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t32",
        "number": 2,
        "title": "Docker CLI",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t32-s1",
            "title": "`docker pull`"
          },
          {
            "id": "devops-t32-s2",
            "title": "`docker run`"
          },
          {
            "id": "devops-t32-s3",
            "title": "`docker ps`"
          },
          {
            "id": "devops-t32-s4",
            "title": "`docker logs`"
          },
          {
            "id": "devops-t32-s5",
            "title": "`docker exec`"
          },
          {
            "id": "devops-t32-s6",
            "title": "`docker stop`"
          },
          {
            "id": "devops-t32-s7",
            "title": "`docker rm`"
          },
          {
            "id": "devops-t32-s8",
            "title": "`docker images`"
          },
          {
            "id": "devops-t32-s9",
            "title": "`docker rmi`"
          },
          {
            "id": "devops-t32-s10",
            "title": "`docker inspect`"
          },
          {
            "id": "devops-t32-s11",
            "title": "`docker stats`"
          },
          {
            "id": "devops-t32-s12",
            "title": "`docker cp`"
          },
          {
            "id": "devops-t32-s13",
            "title": "`docker build`"
          },
          {
            "id": "devops-t32-s14",
            "title": "`docker push`"
          },
          {
            "id": "devops-t32-s15",
            "title": "`docker login`"
          }
        ],
        "overview": "**Docker CLI** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: `docker pull`, `docker run`, `docker ps`, `docker logs`, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t33",
        "number": 3,
        "title": "Dockerfile",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t33-s1",
            "title": "`FROM`"
          },
          {
            "id": "devops-t33-s2",
            "title": "`WORKDIR`"
          },
          {
            "id": "devops-t33-s3",
            "title": "`COPY`"
          },
          {
            "id": "devops-t33-s4",
            "title": "`ADD`"
          },
          {
            "id": "devops-t33-s5",
            "title": "`RUN`"
          },
          {
            "id": "devops-t33-s6",
            "title": "`ENV`"
          },
          {
            "id": "devops-t33-s7",
            "title": "`ARG`"
          },
          {
            "id": "devops-t33-s8",
            "title": "`EXPOSE`"
          },
          {
            "id": "devops-t33-s9",
            "title": "`USER`"
          },
          {
            "id": "devops-t33-s10",
            "title": "`ENTRYPOINT`"
          },
          {
            "id": "devops-t33-s11",
            "title": "`CMD`"
          },
          {
            "id": "devops-t33-s12",
            "title": "`HEALTHCHECK`"
          },
          {
            "id": "devops-t33-s13",
            "title": "`.dockerignore`"
          }
        ],
        "overview": "**Dockerfile** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: `FROM`, `WORKDIR`, `COPY`, `ADD`, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t34",
        "number": 4,
        "title": "Build Production Images",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t34-s1",
            "title": "Multi-stage builds"
          },
          {
            "id": "devops-t34-s2",
            "title": "Small base images"
          },
          {
            "id": "devops-t34-s3",
            "title": "Non-root users"
          },
          {
            "id": "devops-t34-s4",
            "title": "Immutable image tags"
          },
          {
            "id": "devops-t34-s5",
            "title": "Build cache"
          },
          {
            "id": "devops-t34-s6",
            "title": "Layer ordering"
          },
          {
            "id": "devops-t34-s7",
            "title": "Dependency caching"
          },
          {
            "id": "devops-t34-s8",
            "title": "Image labels"
          },
          {
            "id": "devops-t34-s9",
            "title": "Health checks"
          },
          {
            "id": "devops-t34-s10",
            "title": "Image scanning"
          },
          {
            "id": "devops-t34-s11",
            "title": "Software bills of materials"
          },
          {
            "id": "devops-t34-s12",
            "title": "Image signing"
          },
          {
            "id": "devops-t34-s13",
            "title": "Avoiding secrets in image layers"
          }
        ],
        "overview": "**Build Production Images** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Multi-stage builds, Small base images, Non-root users, Immutable image tags, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "Source code\n    ↓\nMaven build stage\n    ↓\nExecutable Spring Boot JAR\n    ↓\nMinimal Java runtime image\n    ↓\nNon-root application container",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Source code\n    ↓\nMaven build stage\n    ↓\nExecutable Spring Boot JAR\n    ↓\nMinimal Java runtime image\n    ↓\nNon-root application container",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t35",
        "number": 5,
        "title": "Container Networking",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t35-s1",
            "title": "Bridge network"
          },
          {
            "id": "devops-t35-s2",
            "title": "Host network"
          },
          {
            "id": "devops-t35-s3",
            "title": "Port publishing"
          },
          {
            "id": "devops-t35-s4",
            "title": "Container DNS"
          },
          {
            "id": "devops-t35-s5",
            "title": "Network isolation"
          },
          {
            "id": "devops-t35-s6",
            "title": "Service-to-service communication"
          },
          {
            "id": "devops-t35-s7",
            "title": "Binding to `0.0.0.0`"
          },
          {
            "id": "devops-t35-s8",
            "title": "Exposed port versus published port"
          }
        ],
        "overview": "**Container Networking** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Bridge network, Host network, Port publishing, Container DNS, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t36",
        "number": 6,
        "title": "Docker Storage",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t36-s1",
            "title": "Image filesystem"
          },
          {
            "id": "devops-t36-s2",
            "title": "Writable container layer"
          },
          {
            "id": "devops-t36-s3",
            "title": "Volumes"
          },
          {
            "id": "devops-t36-s4",
            "title": "Bind mounts"
          },
          {
            "id": "devops-t36-s5",
            "title": "Temporary filesystems"
          },
          {
            "id": "devops-t36-s6",
            "title": "Persistent database storage"
          },
          {
            "id": "devops-t36-s7",
            "title": "File permissions"
          },
          {
            "id": "devops-t36-s8",
            "title": "Backup of volumes"
          }
        ],
        "overview": "**Docker Storage** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Image filesystem, Writable container layer, Volumes, Bind mounts, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t37",
        "number": 7,
        "title": "Docker Compose",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t37-s1",
            "title": "Services"
          },
          {
            "id": "devops-t37-s2",
            "title": "Networks"
          },
          {
            "id": "devops-t37-s3",
            "title": "Volumes"
          },
          {
            "id": "devops-t37-s4",
            "title": "Environment variables"
          },
          {
            "id": "devops-t37-s5",
            "title": "Health checks"
          },
          {
            "id": "devops-t37-s6",
            "title": "Startup dependencies"
          },
          {
            "id": "devops-t37-s7",
            "title": "Profiles"
          },
          {
            "id": "devops-t37-s8",
            "title": "Secrets"
          },
          {
            "id": "devops-t37-s9",
            "title": "Override files"
          }
        ],
        "overview": "**Docker Compose** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Services, Networks, Volumes, Environment variables, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "Spring Boot application\nPostgreSQL\nRedis\nKafka or RabbitMQ\nPrometheus\nGrafana",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Spring Boot application\nPostgreSQL\nRedis\nKafka or RabbitMQ\nPrometheus\nGrafana",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t38",
        "number": 8,
        "title": "Container Registries",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t38-s1",
            "title": "Push and pull"
          },
          {
            "id": "devops-t38-s2",
            "title": "Authentication"
          },
          {
            "id": "devops-t38-s3",
            "title": "Tags"
          },
          {
            "id": "devops-t38-s4",
            "title": "Image digest"
          },
          {
            "id": "devops-t38-s5",
            "title": "Retention rules"
          },
          {
            "id": "devops-t38-s6",
            "title": "Vulnerability scanning"
          },
          {
            "id": "devops-t38-s7",
            "title": "Private registries"
          },
          {
            "id": "devops-t38-s8",
            "title": "Registry permissions"
          }
        ],
        "overview": "**Container Registries** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Push and pull, Authentication, Tags, Image digest, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Docker Hub",
          "GitHub Container Registry",
          "Amazon ECR",
          "Azure Container Registry",
          "Google Artifact Registry",
          "Harbor"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 64,
    "title": "Web Servers, Proxies and Load Balancing",
    "icon": "🚀",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t39",
        "number": 1,
        "title": "Nginx",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t39-s1",
            "title": "Static file serving"
          },
          {
            "id": "devops-t39-s2",
            "title": "Reverse proxy"
          },
          {
            "id": "devops-t39-s3",
            "title": "Load balancing"
          },
          {
            "id": "devops-t39-s4",
            "title": "TLS termination"
          },
          {
            "id": "devops-t39-s5",
            "title": "HTTP redirects"
          },
          {
            "id": "devops-t39-s6",
            "title": "Header forwarding"
          },
          {
            "id": "devops-t39-s7",
            "title": "Compression"
          },
          {
            "id": "devops-t39-s8",
            "title": "Caching"
          },
          {
            "id": "devops-t39-s9",
            "title": "Request-size limits"
          },
          {
            "id": "devops-t39-s10",
            "title": "Rate limiting"
          },
          {
            "id": "devops-t39-s11",
            "title": "Access logs"
          },
          {
            "id": "devops-t39-s12",
            "title": "Error logs"
          },
          {
            "id": "devops-t39-s13",
            "title": "WebSocket proxying"
          }
        ],
        "overview": "**Nginx** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Static file serving, Reverse proxy, Load balancing, TLS termination, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t40",
        "number": 2,
        "title": "Load Balancing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t40-s1",
            "title": "Round robin"
          },
          {
            "id": "devops-t40-s2",
            "title": "Weighted round robin"
          },
          {
            "id": "devops-t40-s3",
            "title": "Least connections"
          },
          {
            "id": "devops-t40-s4",
            "title": "IP hash"
          },
          {
            "id": "devops-t40-s5",
            "title": "Consistent hashing"
          },
          {
            "id": "devops-t40-s6",
            "title": "Layer 4 load balancing"
          },
          {
            "id": "devops-t40-s7",
            "title": "Layer 7 load balancing"
          },
          {
            "id": "devops-t40-s8",
            "title": "Health checks"
          },
          {
            "id": "devops-t40-s9",
            "title": "Session affinity"
          },
          {
            "id": "devops-t40-s10",
            "title": "Connection draining"
          },
          {
            "id": "devops-t40-s11",
            "title": "TLS termination"
          },
          {
            "id": "devops-t40-s12",
            "title": "High availability"
          }
        ],
        "overview": "**Load Balancing** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Round robin, Weighted round robin, Least connections, IP hash, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 65,
    "title": "Cloud Fundamentals",
    "icon": "🚀",
    "color": "#ec4899",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t41",
        "number": 1,
        "title": "Cloud Computing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t41-s1",
            "title": "Infrastructure as a Service"
          },
          {
            "id": "devops-t41-s2",
            "title": "Platform as a Service"
          },
          {
            "id": "devops-t41-s3",
            "title": "Software as a Service"
          },
          {
            "id": "devops-t41-s4",
            "title": "Public cloud"
          },
          {
            "id": "devops-t41-s5",
            "title": "Private cloud"
          },
          {
            "id": "devops-t41-s6",
            "title": "Hybrid cloud"
          },
          {
            "id": "devops-t41-s7",
            "title": "Multi-cloud"
          },
          {
            "id": "devops-t41-s8",
            "title": "Region"
          },
          {
            "id": "devops-t41-s9",
            "title": "Availability zone"
          },
          {
            "id": "devops-t41-s10",
            "title": "Edge location"
          },
          {
            "id": "devops-t41-s11",
            "title": "Shared-responsibility model"
          }
        ],
        "overview": "**Cloud Computing** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Infrastructure as a Service, Platform as a Service, Software as a Service, Public cloud, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t42",
        "number": 2,
        "title": "Learn One Cloud First",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Recommended choices:\n\nDo not learn all three simultaneously.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t43",
        "number": 3,
        "title": "Cloud Service Categories",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t43-s1",
            "title": "Virtual machines"
          },
          {
            "id": "devops-t43-s2",
            "title": "Virtual networking"
          },
          {
            "id": "devops-t43-s3",
            "title": "Subnets"
          },
          {
            "id": "devops-t43-s4",
            "title": "Route tables"
          },
          {
            "id": "devops-t43-s5",
            "title": "Internet gateways"
          },
          {
            "id": "devops-t43-s6",
            "title": "NAT gateways"
          },
          {
            "id": "devops-t43-s7",
            "title": "Security groups"
          },
          {
            "id": "devops-t43-s8",
            "title": "Load balancers"
          },
          {
            "id": "devops-t43-s9",
            "title": "Autoscaling"
          },
          {
            "id": "devops-t43-s10",
            "title": "Object storage"
          },
          {
            "id": "devops-t43-s11",
            "title": "Block storage"
          },
          {
            "id": "devops-t43-s12",
            "title": "Managed relational databases"
          },
          {
            "id": "devops-t43-s13",
            "title": "Managed Redis"
          },
          {
            "id": "devops-t43-s14",
            "title": "Container registries"
          },
          {
            "id": "devops-t43-s15",
            "title": "Managed Kubernetes"
          },
          {
            "id": "devops-t43-s16",
            "title": "Message queues"
          },
          {
            "id": "devops-t43-s17",
            "title": "Serverless functions"
          },
          {
            "id": "devops-t43-s18",
            "title": "DNS"
          },
          {
            "id": "devops-t43-s19",
            "title": "Content delivery networks"
          },
          {
            "id": "devops-t43-s20",
            "title": "Identity and access management"
          },
          {
            "id": "devops-t43-s21",
            "title": "Secret managers"
          },
          {
            "id": "devops-t43-s22",
            "title": "Monitoring services"
          }
        ],
        "overview": "**Cloud Service Categories** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Virtual machines, Virtual networking, Subnets, Route tables, and 18 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t44",
        "number": 4,
        "title": "Cloud IAM",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t44-s1",
            "title": "User"
          },
          {
            "id": "devops-t44-s2",
            "title": "Group"
          },
          {
            "id": "devops-t44-s3",
            "title": "Role"
          },
          {
            "id": "devops-t44-s4",
            "title": "Policy"
          },
          {
            "id": "devops-t44-s5",
            "title": "Permission"
          },
          {
            "id": "devops-t44-s6",
            "title": "Service identity"
          },
          {
            "id": "devops-t44-s7",
            "title": "Temporary credentials"
          },
          {
            "id": "devops-t44-s8",
            "title": "Least privilege"
          },
          {
            "id": "devops-t44-s9",
            "title": "Role assumption"
          },
          {
            "id": "devops-t44-s10",
            "title": "Workload identity"
          },
          {
            "id": "devops-t44-s11",
            "title": "Multi-factor authentication"
          },
          {
            "id": "devops-t44-s12",
            "title": "Access-key rotation"
          },
          {
            "id": "devops-t44-s13",
            "title": "Audit logs"
          }
        ],
        "overview": "**Cloud IAM** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: User, Group, Role, Policy, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t45",
        "number": 5,
        "title": "Cloud Networking",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t45-s1",
            "title": "Virtual private cloud"
          },
          {
            "id": "devops-t45-s2",
            "title": "Public subnet"
          },
          {
            "id": "devops-t45-s3",
            "title": "Private subnet"
          },
          {
            "id": "devops-t45-s4",
            "title": "Route table"
          },
          {
            "id": "devops-t45-s5",
            "title": "Internet gateway"
          },
          {
            "id": "devops-t45-s6",
            "title": "NAT gateway"
          },
          {
            "id": "devops-t45-s7",
            "title": "Security group"
          },
          {
            "id": "devops-t45-s8",
            "title": "Network access-control list"
          },
          {
            "id": "devops-t45-s9",
            "title": "Peering"
          },
          {
            "id": "devops-t45-s10",
            "title": "Private endpoints"
          },
          {
            "id": "devops-t45-s11",
            "title": "VPN"
          },
          {
            "id": "devops-t45-s12",
            "title": "Direct connectivity"
          },
          {
            "id": "devops-t45-s13",
            "title": "Bastion host"
          },
          {
            "id": "devops-t45-s14",
            "title": "Zero-trust access"
          }
        ],
        "overview": "**Cloud Networking** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Virtual private cloud, Public subnet, Private subnet, Route table, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t46",
        "number": 6,
        "title": "Cloud Cost Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t46-s1",
            "title": "Cost allocation tags"
          },
          {
            "id": "devops-t46-s2",
            "title": "Budgets"
          },
          {
            "id": "devops-t46-s3",
            "title": "Alerts"
          },
          {
            "id": "devops-t46-s4",
            "title": "Rightsizing"
          },
          {
            "id": "devops-t46-s5",
            "title": "Autoscaling"
          },
          {
            "id": "devops-t46-s6",
            "title": "Reserved capacity concepts"
          },
          {
            "id": "devops-t46-s7",
            "title": "Spot/preemptible capacity"
          },
          {
            "id": "devops-t46-s8",
            "title": "Storage lifecycle rules"
          },
          {
            "id": "devops-t46-s9",
            "title": "Idle resource detection"
          },
          {
            "id": "devops-t46-s10",
            "title": "Data-transfer costs"
          },
          {
            "id": "devops-t46-s11",
            "title": "Cost per environment"
          },
          {
            "id": "devops-t46-s12",
            "title": "Cost per service"
          }
        ],
        "overview": "**Cloud Cost Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Cost allocation tags, Budgets, Alerts, Rightsizing, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 66,
    "title": "Infrastructure as Code",
    "icon": "🚀",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "Terraform uses declarative configuration to build, change and version cloud and on-premises infrastructure. ([HashiCorp Developer][3])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t47",
        "number": 1,
        "title": "Infrastructure as Code Principles",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t47-s1",
            "title": "Declarative configuration"
          },
          {
            "id": "devops-t47-s2",
            "title": "Version-controlled infrastructure"
          },
          {
            "id": "devops-t47-s3",
            "title": "Repeatable environments"
          },
          {
            "id": "devops-t47-s4",
            "title": "Idempotency"
          },
          {
            "id": "devops-t47-s5",
            "title": "Immutable infrastructure"
          },
          {
            "id": "devops-t47-s6",
            "title": "Desired state"
          },
          {
            "id": "devops-t47-s7",
            "title": "State reconciliation"
          },
          {
            "id": "devops-t47-s8",
            "title": "Change review"
          },
          {
            "id": "devops-t47-s9",
            "title": "Drift detection"
          }
        ],
        "overview": "**Infrastructure as Code Principles** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Declarative configuration, Version-controlled infrastructure, Repeatable environments, Idempotency, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t48",
        "number": 2,
        "title": "Terraform",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t48-s1",
            "title": "Providers"
          },
          {
            "id": "devops-t48-s2",
            "title": "Resources"
          },
          {
            "id": "devops-t48-s3",
            "title": "Data sources"
          },
          {
            "id": "devops-t48-s4",
            "title": "Variables"
          },
          {
            "id": "devops-t48-s5",
            "title": "Local values"
          },
          {
            "id": "devops-t48-s6",
            "title": "Outputs"
          },
          {
            "id": "devops-t48-s7",
            "title": "Modules"
          },
          {
            "id": "devops-t48-s8",
            "title": "Expressions"
          },
          {
            "id": "devops-t48-s9",
            "title": "Functions"
          },
          {
            "id": "devops-t48-s10",
            "title": "Conditional expressions"
          },
          {
            "id": "devops-t48-s11",
            "title": "`for_each`"
          },
          {
            "id": "devops-t48-s12",
            "title": "`count`"
          },
          {
            "id": "devops-t48-s13",
            "title": "Dynamic blocks"
          },
          {
            "id": "devops-t48-s14",
            "title": "Dependencies"
          },
          {
            "id": "devops-t48-s15",
            "title": "Lifecycle rules"
          }
        ],
        "overview": "**Terraform** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Providers, Resources, Data sources, Variables, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "terraform init\nterraform fmt\nterraform validate\nterraform plan\nterraform apply\nterraform destroy\nterraform output\nterraform state",
        "codeExampleLang": "bash",
        "codeExamples": [
          {
            "lang": "bash",
            "code": "terraform init\nterraform fmt\nterraform validate\nterraform plan\nterraform apply\nterraform destroy\nterraform output\nterraform state",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t49",
        "number": 3,
        "title": "Terraform State",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t49-s1",
            "title": "State file"
          },
          {
            "id": "devops-t49-s2",
            "title": "Remote state"
          },
          {
            "id": "devops-t49-s3",
            "title": "State locking"
          },
          {
            "id": "devops-t49-s4",
            "title": "Sensitive values"
          },
          {
            "id": "devops-t49-s5",
            "title": "State backup"
          },
          {
            "id": "devops-t49-s6",
            "title": "Importing resources"
          },
          {
            "id": "devops-t49-s7",
            "title": "Moving resources"
          },
          {
            "id": "devops-t49-s8",
            "title": "Removing resources from state"
          },
          {
            "id": "devops-t49-s9",
            "title": "State drift"
          },
          {
            "id": "devops-t49-s10",
            "title": "State recovery"
          }
        ],
        "overview": "Never commit an unprotected state file containing sensitive infrastructure data.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t50",
        "number": 4,
        "title": "Terraform Project Structure",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t50-s1",
            "title": "Root module"
          },
          {
            "id": "devops-t50-s2",
            "title": "Reusable modules"
          },
          {
            "id": "devops-t50-s3",
            "title": "Environment directories"
          },
          {
            "id": "devops-t50-s4",
            "title": "Variable files"
          },
          {
            "id": "devops-t50-s5",
            "title": "Backend configuration"
          },
          {
            "id": "devops-t50-s6",
            "title": "Provider constraints"
          },
          {
            "id": "devops-t50-s7",
            "title": "Module versioning"
          },
          {
            "id": "devops-t50-s8",
            "title": "Formatting and validation"
          },
          {
            "id": "devops-t50-s9",
            "title": "Automated plans in pull requests"
          },
          {
            "id": "devops-t50-s10",
            "title": "Approval before apply"
          }
        ],
        "overview": "**Terraform Project Structure** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Root module, Reusable modules, Environment directories, Variable files, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t51",
        "number": 5,
        "title": "OpenTofu",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [],
        "overview": "Understand OpenTofu as an alternative Infrastructure as Code implementation that uses Terraform-compatible concepts. Learn it when your employer or project selects it.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 67,
    "title": "Configuration Management",
    "icon": "🚀",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "Ansible can configure operating systems, deploy software and orchestrate infrastructure workflows using declarative playbooks. ([Ansible Documentation][4])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t52",
        "number": 1,
        "title": "Ansible Fundamentals",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t52-s1",
            "title": "Control node"
          },
          {
            "id": "devops-t52-s2",
            "title": "Managed node"
          },
          {
            "id": "devops-t52-s3",
            "title": "Inventory"
          },
          {
            "id": "devops-t52-s4",
            "title": "Module"
          },
          {
            "id": "devops-t52-s5",
            "title": "Task"
          },
          {
            "id": "devops-t52-s6",
            "title": "Play"
          },
          {
            "id": "devops-t52-s7",
            "title": "Playbook"
          },
          {
            "id": "devops-t52-s8",
            "title": "Role"
          },
          {
            "id": "devops-t52-s9",
            "title": "Variable"
          },
          {
            "id": "devops-t52-s10",
            "title": "Fact"
          },
          {
            "id": "devops-t52-s11",
            "title": "Handler"
          },
          {
            "id": "devops-t52-s12",
            "title": "Template"
          },
          {
            "id": "devops-t52-s13",
            "title": "Vault"
          }
        ],
        "overview": "**Ansible Fundamentals** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Control node, Managed node, Inventory, Module, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t53",
        "number": 2,
        "title": "Ansible Skills",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t53-s1",
            "title": "YAML syntax"
          },
          {
            "id": "devops-t53-s2",
            "title": "Inventory groups"
          },
          {
            "id": "devops-t53-s3",
            "title": "Ad hoc commands"
          },
          {
            "id": "devops-t53-s4",
            "title": "Playbooks"
          },
          {
            "id": "devops-t53-s5",
            "title": "Variables"
          },
          {
            "id": "devops-t53-s6",
            "title": "Loops"
          },
          {
            "id": "devops-t53-s7",
            "title": "Conditionals"
          },
          {
            "id": "devops-t53-s8",
            "title": "Templates with Jinja"
          },
          {
            "id": "devops-t53-s9",
            "title": "Roles"
          },
          {
            "id": "devops-t53-s10",
            "title": "Handlers"
          },
          {
            "id": "devops-t53-s11",
            "title": "Tags"
          },
          {
            "id": "devops-t53-s12",
            "title": "Secrets with Ansible Vault"
          },
          {
            "id": "devops-t53-s13",
            "title": "Idempotent tasks"
          },
          {
            "id": "devops-t53-s14",
            "title": "Dynamic inventories"
          }
        ],
        "overview": "**Ansible Skills** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: YAML syntax, Inventory groups, Ad hoc commands, Playbooks, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t54",
        "number": 3,
        "title": "Ansible Projects",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Ansible Projects** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Java installation",
          "PostgreSQL installation",
          "Nginx configuration",
          "Spring Boot service deployment",
          "Systemd service creation",
          "Firewall configuration",
          "Log rotation",
          "Monitoring-agent installation"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 68,
    "title": "Kubernetes",
    "icon": "🚀",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "Kubernetes represents desired cluster state through declarative objects. A cluster consists of a control plane and worker nodes that run workloads. ([Kubernetes][5]) Do not begin Kubernetes before you are comfortable with Linux, networking, Docker and CI/CD.",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t55",
        "number": 1,
        "title": "Kubernetes Architecture",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t55-s1",
            "title": "API server"
          },
          {
            "id": "devops-t55-s2",
            "title": "Scheduler"
          },
          {
            "id": "devops-t55-s3",
            "title": "Controller manager"
          },
          {
            "id": "devops-t55-s4",
            "title": "`etcd`"
          },
          {
            "id": "devops-t55-s5",
            "title": "Cloud controller manager"
          },
          {
            "id": "devops-t55-s6",
            "title": "Kubelet"
          },
          {
            "id": "devops-t55-s7",
            "title": "Container runtime"
          },
          {
            "id": "devops-t55-s8",
            "title": "Kube-proxy or networking equivalent"
          },
          {
            "id": "devops-t55-s9",
            "title": "Pods"
          }
        ],
        "overview": "**Kubernetes Architecture** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: API server, Scheduler, Controller manager, `etcd`, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [
          {
            "title": "Control plane",
            "items": [
              "API server",
              "Scheduler",
              "Controller manager",
              "`etcd`",
              "Cloud controller manager"
            ]
          },
          {
            "title": "Worker node",
            "items": [
              "Kubelet",
              "Container runtime",
              "Kube-proxy or networking equivalent",
              "Pods"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t56",
        "number": 2,
        "title": "Kubernetes Objects",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t56-s1",
            "title": "Pod"
          },
          {
            "id": "devops-t56-s2",
            "title": "ReplicaSet"
          },
          {
            "id": "devops-t56-s3",
            "title": "Deployment"
          },
          {
            "id": "devops-t56-s4",
            "title": "StatefulSet"
          },
          {
            "id": "devops-t56-s5",
            "title": "DaemonSet"
          },
          {
            "id": "devops-t56-s6",
            "title": "Job"
          },
          {
            "id": "devops-t56-s7",
            "title": "CronJob"
          },
          {
            "id": "devops-t56-s8",
            "title": "Service"
          },
          {
            "id": "devops-t56-s9",
            "title": "Ingress"
          },
          {
            "id": "devops-t56-s10",
            "title": "ConfigMap"
          },
          {
            "id": "devops-t56-s11",
            "title": "Secret"
          },
          {
            "id": "devops-t56-s12",
            "title": "Namespace"
          },
          {
            "id": "devops-t56-s13",
            "title": "ServiceAccount"
          },
          {
            "id": "devops-t56-s14",
            "title": "PersistentVolume"
          },
          {
            "id": "devops-t56-s15",
            "title": "PersistentVolumeClaim"
          },
          {
            "id": "devops-t56-s16",
            "title": "StorageClass"
          }
        ],
        "overview": "**Kubernetes Objects** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Pod, ReplicaSet, Deployment, StatefulSet, and 12 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t57",
        "number": 3,
        "title": "Kubernetes YAML",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t57-s1",
            "title": "`apiVersion`"
          },
          {
            "id": "devops-t57-s2",
            "title": "`kind`"
          },
          {
            "id": "devops-t57-s3",
            "title": "`metadata`"
          },
          {
            "id": "devops-t57-s4",
            "title": "`spec`"
          },
          {
            "id": "devops-t57-s5",
            "title": "`status`"
          },
          {
            "id": "devops-t57-s6",
            "title": "Labels"
          },
          {
            "id": "devops-t57-s7",
            "title": "Selectors"
          },
          {
            "id": "devops-t57-s8",
            "title": "Annotations"
          },
          {
            "id": "devops-t57-s9",
            "title": "Declarative configuration"
          }
        ],
        "overview": "**Kubernetes YAML** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: `apiVersion`, `kind`, `metadata`, `spec`, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t58",
        "number": 4,
        "title": "`kubectl`",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t58-s1",
            "title": "`kubectl get`"
          },
          {
            "id": "devops-t58-s2",
            "title": "`kubectl describe`"
          },
          {
            "id": "devops-t58-s3",
            "title": "`kubectl apply`"
          },
          {
            "id": "devops-t58-s4",
            "title": "`kubectl delete`"
          },
          {
            "id": "devops-t58-s5",
            "title": "`kubectl logs`"
          },
          {
            "id": "devops-t58-s6",
            "title": "`kubectl exec`"
          },
          {
            "id": "devops-t58-s7",
            "title": "`kubectl port-forward`"
          },
          {
            "id": "devops-t58-s8",
            "title": "`kubectl top`"
          },
          {
            "id": "devops-t58-s9",
            "title": "`kubectl rollout`"
          },
          {
            "id": "devops-t58-s10",
            "title": "`kubectl scale`"
          },
          {
            "id": "devops-t58-s11",
            "title": "`kubectl explain`"
          },
          {
            "id": "devops-t58-s12",
            "title": "`kubectl config`"
          },
          {
            "id": "devops-t58-s13",
            "title": "`kubectl auth can-i`"
          }
        ],
        "overview": "**`kubectl`** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: `kubectl get`, `kubectl describe`, `kubectl apply`, `kubectl delete`, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t59",
        "number": 5,
        "title": "Deployments",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t59-s1",
            "title": "Replica management"
          },
          {
            "id": "devops-t59-s2",
            "title": "Rolling updates"
          },
          {
            "id": "devops-t59-s3",
            "title": "Rollbacks"
          },
          {
            "id": "devops-t59-s4",
            "title": "Deployment history"
          },
          {
            "id": "devops-t59-s5",
            "title": "Image tags"
          },
          {
            "id": "devops-t59-s6",
            "title": "Image pull policy"
          },
          {
            "id": "devops-t59-s7",
            "title": "Update strategy"
          },
          {
            "id": "devops-t59-s8",
            "title": "Maximum unavailable pods"
          },
          {
            "id": "devops-t59-s9",
            "title": "Maximum surge"
          },
          {
            "id": "devops-t59-s10",
            "title": "Revision history"
          }
        ],
        "overview": "**Deployments** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Replica management, Rolling updates, Rollbacks, Deployment history, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t60",
        "number": 6,
        "title": "Kubernetes Networking",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t60-s1",
            "title": "Pod networking"
          },
          {
            "id": "devops-t60-s2",
            "title": "Cluster networking"
          },
          {
            "id": "devops-t60-s3",
            "title": "Container Network Interface"
          },
          {
            "id": "devops-t60-s4",
            "title": "Service discovery"
          },
          {
            "id": "devops-t60-s5",
            "title": "ClusterIP"
          },
          {
            "id": "devops-t60-s6",
            "title": "NodePort"
          },
          {
            "id": "devops-t60-s7",
            "title": "LoadBalancer"
          },
          {
            "id": "devops-t60-s8",
            "title": "Headless service"
          },
          {
            "id": "devops-t60-s9",
            "title": "Ingress"
          },
          {
            "id": "devops-t60-s10",
            "title": "Ingress controller"
          },
          {
            "id": "devops-t60-s11",
            "title": "NetworkPolicy"
          },
          {
            "id": "devops-t60-s12",
            "title": "CoreDNS"
          },
          {
            "id": "devops-t60-s13",
            "title": "East-west traffic"
          },
          {
            "id": "devops-t60-s14",
            "title": "North-south traffic"
          }
        ],
        "overview": "**Kubernetes Networking** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Pod networking, Cluster networking, Container Network Interface, Service discovery, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t61",
        "number": 7,
        "title": "Kubernetes Configuration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t61-s1",
            "title": "ConfigMaps"
          },
          {
            "id": "devops-t61-s2",
            "title": "Secrets"
          },
          {
            "id": "devops-t61-s3",
            "title": "Environment variables"
          },
          {
            "id": "devops-t61-s4",
            "title": "Mounted configuration"
          },
          {
            "id": "devops-t61-s5",
            "title": "Immutable configuration"
          },
          {
            "id": "devops-t61-s6",
            "title": "External secret stores"
          },
          {
            "id": "devops-t61-s7",
            "title": "Configuration reload"
          },
          {
            "id": "devops-t61-s8",
            "title": "Secret rotation"
          }
        ],
        "overview": "Kubernetes Secrets are not automatically a complete secret-management solution.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t62",
        "number": 8,
        "title": "Probes",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t62-s1",
            "title": "Startup probe"
          },
          {
            "id": "devops-t62-s2",
            "title": "Liveness probe"
          },
          {
            "id": "devops-t62-s3",
            "title": "Readiness probe"
          },
          {
            "id": "devops-t62-s4",
            "title": "HTTP probe"
          },
          {
            "id": "devops-t62-s5",
            "title": "TCP probe"
          },
          {
            "id": "devops-t62-s6",
            "title": "Command probe"
          },
          {
            "id": "devops-t62-s7",
            "title": "Probe delays"
          },
          {
            "id": "devops-t62-s8",
            "title": "Probe intervals"
          },
          {
            "id": "devops-t62-s9",
            "title": "Failure thresholds"
          }
        ],
        "overview": "For Spring Boot, connect these carefully to Actuator endpoints.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t63",
        "number": 9,
        "title": "Resources and Scheduling",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t63-s1",
            "title": "CPU requests"
          },
          {
            "id": "devops-t63-s2",
            "title": "CPU limits"
          },
          {
            "id": "devops-t63-s3",
            "title": "Memory requests"
          },
          {
            "id": "devops-t63-s4",
            "title": "Memory limits"
          },
          {
            "id": "devops-t63-s5",
            "title": "Out-of-memory termination"
          },
          {
            "id": "devops-t63-s6",
            "title": "Quality-of-service classes"
          },
          {
            "id": "devops-t63-s7",
            "title": "Node selectors"
          },
          {
            "id": "devops-t63-s8",
            "title": "Affinity"
          },
          {
            "id": "devops-t63-s9",
            "title": "Anti-affinity"
          },
          {
            "id": "devops-t63-s10",
            "title": "Taints"
          },
          {
            "id": "devops-t63-s11",
            "title": "Tolerations"
          },
          {
            "id": "devops-t63-s12",
            "title": "Topology-spread constraints"
          },
          {
            "id": "devops-t63-s13",
            "title": "Pod priority"
          },
          {
            "id": "devops-t63-s14",
            "title": "Resource quotas"
          }
        ],
        "overview": "**Resources and Scheduling** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: CPU requests, CPU limits, Memory requests, Memory limits, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t64",
        "number": 10,
        "title": "Persistent Storage",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t64-s1",
            "title": "PersistentVolume"
          },
          {
            "id": "devops-t64-s2",
            "title": "PersistentVolumeClaim"
          },
          {
            "id": "devops-t64-s3",
            "title": "StorageClass"
          },
          {
            "id": "devops-t64-s4",
            "title": "Dynamic provisioning"
          },
          {
            "id": "devops-t64-s5",
            "title": "Access modes"
          },
          {
            "id": "devops-t64-s6",
            "title": "StatefulSets"
          },
          {
            "id": "devops-t64-s7",
            "title": "Volume snapshots"
          },
          {
            "id": "devops-t64-s8",
            "title": "Backup"
          },
          {
            "id": "devops-t64-s9",
            "title": "Data restoration"
          }
        ],
        "overview": "**Persistent Storage** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: PersistentVolume, PersistentVolumeClaim, StorageClass, Dynamic provisioning, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t65",
        "number": 11,
        "title": "Autoscaling",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t65-s1",
            "title": "Horizontal Pod Autoscaler"
          },
          {
            "id": "devops-t65-s2",
            "title": "Vertical Pod Autoscaler concepts"
          },
          {
            "id": "devops-t65-s3",
            "title": "Cluster Autoscaler concepts"
          },
          {
            "id": "devops-t65-s4",
            "title": "CPU-based scaling"
          },
          {
            "id": "devops-t65-s5",
            "title": "Memory-based scaling"
          },
          {
            "id": "devops-t65-s6",
            "title": "Custom metrics"
          },
          {
            "id": "devops-t65-s7",
            "title": "Queue-length scaling"
          },
          {
            "id": "devops-t65-s8",
            "title": "Scaling stabilization"
          },
          {
            "id": "devops-t65-s9",
            "title": "Preventing scaling oscillation"
          }
        ],
        "overview": "**Autoscaling** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Horizontal Pod Autoscaler, Vertical Pod Autoscaler concepts, Cluster Autoscaler concepts, CPU-based scaling, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t66",
        "number": 12,
        "title": "Kubernetes Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t66-s1",
            "title": "Service accounts"
          },
          {
            "id": "devops-t66-s2",
            "title": "Role-Based Access Control"
          },
          {
            "id": "devops-t66-s3",
            "title": "Roles"
          },
          {
            "id": "devops-t66-s4",
            "title": "ClusterRoles"
          },
          {
            "id": "devops-t66-s5",
            "title": "RoleBindings"
          },
          {
            "id": "devops-t66-s6",
            "title": "Network policies"
          },
          {
            "id": "devops-t66-s7",
            "title": "Security contexts"
          },
          {
            "id": "devops-t66-s8",
            "title": "Non-root containers"
          },
          {
            "id": "devops-t66-s9",
            "title": "Read-only filesystems"
          },
          {
            "id": "devops-t66-s10",
            "title": "Linux capabilities"
          },
          {
            "id": "devops-t66-s11",
            "title": "Pod security standards"
          },
          {
            "id": "devops-t66-s12",
            "title": "Admission control"
          },
          {
            "id": "devops-t66-s13",
            "title": "Image policies"
          },
          {
            "id": "devops-t66-s14",
            "title": "Secret management"
          },
          {
            "id": "devops-t66-s15",
            "title": "Audit logging"
          }
        ],
        "overview": "**Kubernetes Security** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Service accounts, Role-Based Access Control, Roles, ClusterRoles, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t67",
        "number": 13,
        "title": "Kubernetes Troubleshooting",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Learn to investigate:\n\nTroubleshooting sequence:",
        "codeExample": "Get object\n   ↓\nDescribe object\n   ↓\nInspect events\n   ↓\nRead current logs\n   ↓\nRead previous-container logs\n   ↓\nCheck configuration\n   ↓\nCheck networking\n   ↓\nCheck resource usage",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Get object\n   ↓\nDescribe object\n   ↓\nInspect events\n   ↓\nRead current logs\n   ↓\nRead previous-container logs\n   ↓\nCheck configuration\n   ↓\nCheck networking\n   ↓\nCheck resource usage",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [
          "`CrashLoopBackOff`",
          "`ImagePullBackOff`",
          "`Pending` pods",
          "Failed readiness probes",
          "Failed liveness probes",
          "DNS failures",
          "Service selector errors",
          "Out-of-memory kills",
          "CPU throttling",
          "Volume mounting failures",
          "Permission problems"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 69,
    "title": "Helm and Kubernetes Configuration",
    "icon": "🚀",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "Helm packages Kubernetes applications into versioned charts that can be installed and upgraded consistently. ([helm.sh][6])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t68",
        "number": 1,
        "title": "Helm",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t68-s1",
            "title": "Chart"
          },
          {
            "id": "devops-t68-s2",
            "title": "Template"
          },
          {
            "id": "devops-t68-s3",
            "title": "Values file"
          },
          {
            "id": "devops-t68-s4",
            "title": "Release"
          },
          {
            "id": "devops-t68-s5",
            "title": "Repository"
          },
          {
            "id": "devops-t68-s6",
            "title": "Dependency"
          },
          {
            "id": "devops-t68-s7",
            "title": "Hook"
          },
          {
            "id": "devops-t68-s8",
            "title": "Chart version"
          },
          {
            "id": "devops-t68-s9",
            "title": "Application version"
          },
          {
            "id": "devops-t68-s10",
            "title": "`helm create`"
          },
          {
            "id": "devops-t68-s11",
            "title": "`helm install`"
          },
          {
            "id": "devops-t68-s12",
            "title": "`helm upgrade`"
          },
          {
            "id": "devops-t68-s13",
            "title": "`helm rollback`"
          },
          {
            "id": "devops-t68-s14",
            "title": "`helm uninstall`"
          },
          {
            "id": "devops-t68-s15",
            "title": "`helm template`"
          },
          {
            "id": "devops-t68-s16",
            "title": "`helm lint`"
          },
          {
            "id": "devops-t68-s17",
            "title": "`helm list`"
          },
          {
            "id": "devops-t68-s18",
            "title": "`helm history`"
          }
        ],
        "overview": "**Helm** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Chart, Template, Values file, Release, and 14 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t69",
        "number": 2,
        "title": "Helm Chart Development",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t69-s1",
            "title": "Templates"
          },
          {
            "id": "devops-t69-s2",
            "title": "Values"
          },
          {
            "id": "devops-t69-s3",
            "title": "Named templates"
          },
          {
            "id": "devops-t69-s4",
            "title": "Helper templates"
          },
          {
            "id": "devops-t69-s5",
            "title": "Conditions"
          },
          {
            "id": "devops-t69-s6",
            "title": "Loops"
          },
          {
            "id": "devops-t69-s7",
            "title": "Dependencies"
          },
          {
            "id": "devops-t69-s8",
            "title": "Environment overrides"
          },
          {
            "id": "devops-t69-s9",
            "title": "Schema validation"
          },
          {
            "id": "devops-t69-s10",
            "title": "Chart testing"
          },
          {
            "id": "devops-t69-s11",
            "title": "Release rollback"
          }
        ],
        "overview": "**Helm Chart Development** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Templates, Values, Named templates, Helper templates, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t70",
        "number": 3,
        "title": "Kustomize",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t70-s1",
            "title": "Base"
          },
          {
            "id": "devops-t70-s2",
            "title": "Overlay"
          },
          {
            "id": "devops-t70-s3",
            "title": "Patches"
          },
          {
            "id": "devops-t70-s4",
            "title": "Image replacement"
          },
          {
            "id": "devops-t70-s5",
            "title": "ConfigMap generation"
          },
          {
            "id": "devops-t70-s6",
            "title": "Secret generation"
          },
          {
            "id": "devops-t70-s7",
            "title": "Environment-specific manifests"
          }
        ],
        "overview": "Understand both Helm and Kustomize, but use one as the main approach per project.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 70,
    "title": "GitOps",
    "icon": "🚀",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "Argo provides Kubernetes-focused tools for GitOps, deployment and rollout management. ([argoproj.github.io][7])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t71",
        "number": 1,
        "title": "GitOps Principles",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t71-s1",
            "title": "Git as source of truth"
          },
          {
            "id": "devops-t71-s2",
            "title": "Declarative infrastructure"
          },
          {
            "id": "devops-t71-s3",
            "title": "Automated reconciliation"
          },
          {
            "id": "devops-t71-s4",
            "title": "Pull-based deployment"
          },
          {
            "id": "devops-t71-s5",
            "title": "Drift detection"
          },
          {
            "id": "devops-t71-s6",
            "title": "Auditable configuration"
          },
          {
            "id": "devops-t71-s7",
            "title": "Rollback through Git"
          },
          {
            "id": "devops-t71-s8",
            "title": "Separation of application and deployment repositories"
          }
        ],
        "overview": "**GitOps Principles** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Git as source of truth, Declarative infrastructure, Automated reconciliation, Pull-based deployment, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t72",
        "number": 2,
        "title": "Argo CD",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t72-s1",
            "title": "Application"
          },
          {
            "id": "devops-t72-s2",
            "title": "Project"
          },
          {
            "id": "devops-t72-s3",
            "title": "Repository"
          },
          {
            "id": "devops-t72-s4",
            "title": "Destination cluster"
          },
          {
            "id": "devops-t72-s5",
            "title": "Synchronization"
          },
          {
            "id": "devops-t72-s6",
            "title": "Health status"
          },
          {
            "id": "devops-t72-s7",
            "title": "Drift"
          },
          {
            "id": "devops-t72-s8",
            "title": "Automated sync"
          },
          {
            "id": "devops-t72-s9",
            "title": "Self-healing"
          },
          {
            "id": "devops-t72-s10",
            "title": "Pruning"
          },
          {
            "id": "devops-t72-s11",
            "title": "Sync waves"
          },
          {
            "id": "devops-t72-s12",
            "title": "Sync hooks"
          },
          {
            "id": "devops-t72-s13",
            "title": "ApplicationSet"
          },
          {
            "id": "devops-t72-s14",
            "title": "Multi-cluster deployment"
          },
          {
            "id": "devops-t72-s15",
            "title": "Role-Based Access Control"
          }
        ],
        "overview": "**Argo CD** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Application, Project, Repository, Destination cluster, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t73",
        "number": 3,
        "title": "Argo Rollouts",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "devops-t73-s1",
            "title": "Canary deployment"
          },
          {
            "id": "devops-t73-s2",
            "title": "Blue-green deployment"
          },
          {
            "id": "devops-t73-s3",
            "title": "Traffic splitting"
          },
          {
            "id": "devops-t73-s4",
            "title": "Analysis templates"
          },
          {
            "id": "devops-t73-s5",
            "title": "Automated promotion"
          },
          {
            "id": "devops-t73-s6",
            "title": "Automated rollback"
          },
          {
            "id": "devops-t73-s7",
            "title": "Metric-based release validation"
          }
        ],
        "overview": "**Argo Rollouts** is an advanced topic that requires solid foundational knowledge and is critical for senior-level work in the **DevOps** roadmap.\n\nIn this topic you will study: Canary deployment, Blue-green deployment, Traffic splitting, Analysis templates, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 71,
    "title": "Observability",
    "icon": "🚀",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "Prometheus stores monitoring information as labeled time-series data and evaluates metrics, rules and alerts. OpenTelemetry provides vendor-neutral instrumentation and collection for telemetry such as traces, metrics and logs. ([Prometheus][8])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t74",
        "number": 1,
        "title": "Monitoring versus Observability",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "Answers known questions:\n\nHelps investigate unknown problems using:",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Is the service running?",
          "Is CPU usage high?",
          "How many requests failed?"
        ],
        "subSections": [
          {
            "title": "Monitoring",
            "items": [
              "Is the service running?",
              "Is CPU usage high?",
              "How many requests failed?"
            ]
          },
          {
            "title": "Observability",
            "items": []
          }
        ],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t75",
        "number": 2,
        "title": "Logging",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t75-s1",
            "title": "Log levels"
          },
          {
            "id": "devops-t75-s2",
            "title": "Structured logging"
          },
          {
            "id": "devops-t75-s3",
            "title": "JSON logs"
          },
          {
            "id": "devops-t75-s4",
            "title": "Timestamps"
          },
          {
            "id": "devops-t75-s5",
            "title": "Correlation IDs"
          },
          {
            "id": "devops-t75-s6",
            "title": "Trace IDs"
          },
          {
            "id": "devops-t75-s7",
            "title": "Centralized logging"
          },
          {
            "id": "devops-t75-s8",
            "title": "Log rotation"
          },
          {
            "id": "devops-t75-s9",
            "title": "Log retention"
          },
          {
            "id": "devops-t75-s10",
            "title": "Sensitive-data redaction"
          },
          {
            "id": "devops-t75-s11",
            "title": "Log sampling"
          },
          {
            "id": "devops-t75-s12",
            "title": "Audit logs"
          }
        ],
        "overview": "**Logging** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Log levels, Structured logging, JSON logs, Timestamps, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Elasticsearch/OpenSearch + log collector + dashboard",
          "Loki + Grafana",
          "Cloud-native logging services"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t76",
        "number": 3,
        "title": "Metrics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t76-s1",
            "title": "Counter"
          },
          {
            "id": "devops-t76-s2",
            "title": "Gauge"
          },
          {
            "id": "devops-t76-s3",
            "title": "Histogram"
          },
          {
            "id": "devops-t76-s4",
            "title": "Summary"
          },
          {
            "id": "devops-t76-s5",
            "title": "Labels"
          },
          {
            "id": "devops-t76-s6",
            "title": "Cardinality"
          },
          {
            "id": "devops-t76-s7",
            "title": "Scraping"
          },
          {
            "id": "devops-t76-s8",
            "title": "Exporters"
          },
          {
            "id": "devops-t76-s9",
            "title": "Recording rules"
          },
          {
            "id": "devops-t76-s10",
            "title": "Alerting rules"
          },
          {
            "id": "devops-t76-s11",
            "title": "PromQL"
          },
          {
            "id": "devops-t76-s12",
            "title": "Service discovery"
          },
          {
            "id": "devops-t76-s13",
            "title": "Retention"
          },
          {
            "id": "devops-t76-s14",
            "title": "Federation concepts"
          }
        ],
        "overview": "Prometheus metric types include:\n\nAvoid high-cardinality labels such as unrestricted user IDs or request IDs. Prometheus models metrics as timestamped values identified by metric names and labeled dimensions. ([Prometheus][9])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t77",
        "number": 4,
        "title": "Grafana",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t77-s1",
            "title": "Data sources"
          },
          {
            "id": "devops-t77-s2",
            "title": "Dashboards"
          },
          {
            "id": "devops-t77-s3",
            "title": "Panels"
          },
          {
            "id": "devops-t77-s4",
            "title": "Variables"
          },
          {
            "id": "devops-t77-s5",
            "title": "Alerts"
          },
          {
            "id": "devops-t77-s6",
            "title": "Annotations"
          },
          {
            "id": "devops-t77-s7",
            "title": "Dashboard provisioning"
          },
          {
            "id": "devops-t77-s8",
            "title": "Dashboard version control"
          },
          {
            "id": "devops-t77-s9",
            "title": "Access control"
          }
        ],
        "overview": "**Grafana** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Data sources, Dashboards, Panels, Variables, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t78",
        "number": 5,
        "title": "Distributed Tracing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t78-s1",
            "title": "Trace"
          },
          {
            "id": "devops-t78-s2",
            "title": "Span"
          },
          {
            "id": "devops-t78-s3",
            "title": "Parent span"
          },
          {
            "id": "devops-t78-s4",
            "title": "Trace context"
          },
          {
            "id": "devops-t78-s5",
            "title": "Context propagation"
          },
          {
            "id": "devops-t78-s6",
            "title": "Sampling"
          },
          {
            "id": "devops-t78-s7",
            "title": "Baggage"
          },
          {
            "id": "devops-t78-s8",
            "title": "Service dependencies"
          },
          {
            "id": "devops-t78-s9",
            "title": "Trace-log correlation"
          },
          {
            "id": "devops-t78-s10",
            "title": "Trace-metric correlation"
          }
        ],
        "overview": "**Distributed Tracing** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Trace, Span, Parent span, Trace context, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "OpenTelemetry",
          "Jaeger",
          "Zipkin",
          "Grafana Tempo",
          "Cloud tracing platforms"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t79",
        "number": 6,
        "title": "OpenTelemetry",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t79-s1",
            "title": "APIs"
          },
          {
            "id": "devops-t79-s2",
            "title": "SDKs"
          },
          {
            "id": "devops-t79-s3",
            "title": "Java agent"
          },
          {
            "id": "devops-t79-s4",
            "title": "Auto-instrumentation"
          },
          {
            "id": "devops-t79-s5",
            "title": "Manual instrumentation"
          },
          {
            "id": "devops-t79-s6",
            "title": "Collector"
          },
          {
            "id": "devops-t79-s7",
            "title": "Receivers"
          },
          {
            "id": "devops-t79-s8",
            "title": "Processors"
          },
          {
            "id": "devops-t79-s9",
            "title": "Exporters"
          },
          {
            "id": "devops-t79-s10",
            "title": "OTLP"
          },
          {
            "id": "devops-t79-s11",
            "title": "Resource attributes"
          },
          {
            "id": "devops-t79-s12",
            "title": "Sampling"
          },
          {
            "id": "devops-t79-s13",
            "title": "Context propagation"
          }
        ],
        "overview": "**OpenTelemetry** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: APIs, SDKs, Java agent, Auto-instrumentation, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t80",
        "number": 7,
        "title": "Spring Boot Observability",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t80-s1",
            "title": "Spring Boot Actuator"
          },
          {
            "id": "devops-t80-s2",
            "title": "Health endpoints"
          },
          {
            "id": "devops-t80-s3",
            "title": "Liveness"
          },
          {
            "id": "devops-t80-s4",
            "title": "Readiness"
          },
          {
            "id": "devops-t80-s5",
            "title": "Micrometer"
          },
          {
            "id": "devops-t80-s6",
            "title": "Prometheus endpoint"
          },
          {
            "id": "devops-t80-s7",
            "title": "JVM metrics"
          },
          {
            "id": "devops-t80-s8",
            "title": "HTTP metrics"
          },
          {
            "id": "devops-t80-s9",
            "title": "Database-pool metrics"
          },
          {
            "id": "devops-t80-s10",
            "title": "Cache metrics"
          },
          {
            "id": "devops-t80-s11",
            "title": "Business metrics"
          },
          {
            "id": "devops-t80-s12",
            "title": "Distributed tracing"
          },
          {
            "id": "devops-t80-s13",
            "title": "Structured logging"
          }
        ],
        "overview": "**Spring Boot Observability** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Spring Boot Actuator, Health endpoints, Liveness, Readiness, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t81",
        "number": 8,
        "title": "Alerting",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t81-s1",
            "title": "Actionable alerts"
          },
          {
            "id": "devops-t81-s2",
            "title": "Warning versus critical alerts"
          },
          {
            "id": "devops-t81-s3",
            "title": "Alert routing"
          },
          {
            "id": "devops-t81-s4",
            "title": "Alert grouping"
          },
          {
            "id": "devops-t81-s5",
            "title": "Alert inhibition"
          },
          {
            "id": "devops-t81-s6",
            "title": "Escalation"
          },
          {
            "id": "devops-t81-s7",
            "title": "On-call rotation"
          },
          {
            "id": "devops-t81-s8",
            "title": "Runbook links"
          },
          {
            "id": "devops-t81-s9",
            "title": "Preventing alert fatigue"
          }
        ],
        "overview": "**Alerting** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Actionable alerts, Warning versus critical alerts, Alert routing, Alert grouping, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t82",
        "number": 9,
        "title": "Golden Signals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Golden Signals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Availability",
          "Queue depth",
          "Database connection usage",
          "Cache hit ratio",
          "JVM heap",
          "Garbage-collection pauses",
          "Thread pools",
          "External dependency failures"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 72,
    "title": "DevSecOps",
    "icon": "🚀",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "OWASP describes DevSecOps as integrating security responsibility and automated security controls throughout the delivery pipeline, including secret management, static analysis, dependency scanning, dynamic testing, infrastructure scanning and container scanning. ([OWASP Foundation][10])",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t83",
        "number": 1,
        "title": "Security Foundations",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t83-s1",
            "title": "Confidentiality"
          },
          {
            "id": "devops-t83-s2",
            "title": "Integrity"
          },
          {
            "id": "devops-t83-s3",
            "title": "Availability"
          },
          {
            "id": "devops-t83-s4",
            "title": "Authentication"
          },
          {
            "id": "devops-t83-s5",
            "title": "Authorization"
          },
          {
            "id": "devops-t83-s6",
            "title": "Least privilege"
          },
          {
            "id": "devops-t83-s7",
            "title": "Defense in depth"
          },
          {
            "id": "devops-t83-s8",
            "title": "Zero trust"
          },
          {
            "id": "devops-t83-s9",
            "title": "Threat modeling"
          },
          {
            "id": "devops-t83-s10",
            "title": "Attack surface"
          },
          {
            "id": "devops-t83-s11",
            "title": "Security boundaries"
          },
          {
            "id": "devops-t83-s12",
            "title": "Secure defaults"
          }
        ],
        "overview": "**Security Foundations** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Confidentiality, Integrity, Availability, Authentication, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t84",
        "number": 2,
        "title": "Pipeline Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t84-s1",
            "title": "Code linting"
          },
          {
            "id": "devops-t84-s2",
            "title": "Static application security testing"
          },
          {
            "id": "devops-t84-s3",
            "title": "Software composition analysis"
          },
          {
            "id": "devops-t84-s4",
            "title": "Secret scanning"
          },
          {
            "id": "devops-t84-s5",
            "title": "Infrastructure-as-Code scanning"
          },
          {
            "id": "devops-t84-s6",
            "title": "Container scanning"
          },
          {
            "id": "devops-t84-s7",
            "title": "Dynamic application security testing"
          },
          {
            "id": "devops-t84-s8",
            "title": "License checks"
          },
          {
            "id": "devops-t84-s9",
            "title": "SBOM generation"
          },
          {
            "id": "devops-t84-s10",
            "title": "Artifact signing"
          },
          {
            "id": "devops-t84-s11",
            "title": "Provenance verification"
          },
          {
            "id": "devops-t84-s12",
            "title": "Deployment policy enforcement"
          }
        ],
        "overview": "**Pipeline Security** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Code linting, Static application security testing, Software composition analysis, Secret scanning, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t85",
        "number": 3,
        "title": "Security Tools",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [],
        "overview": "**Security Tools** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [
          "| Category            | Examples                           |\n| ------------------- | ---------------------------------- |\n| Code quality        | SonarQube                          |\n| Dependency scanning | OWASP Dependency-Check, Dependabot |\n| Container scanning  | Trivy, Grype                       |\n| Secret scanning     | Gitleaks                           |\n| IaC scanning        | Checkov, Trivy                     |\n| Dynamic testing     | OWASP ZAP                          |\n| Kubernetes policy   | Kyverno, OPA Gatekeeper            |\n| Signing             | Cosign                             |\n| SBOM                | Syft                               |"
        ],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t86",
        "number": 4,
        "title": "Secret Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t86-s1",
            "title": "Secret lifecycle"
          },
          {
            "id": "devops-t86-s2",
            "title": "Secret rotation"
          },
          {
            "id": "devops-t86-s3",
            "title": "Temporary credentials"
          },
          {
            "id": "devops-t86-s4",
            "title": "Workload identity"
          },
          {
            "id": "devops-t86-s5",
            "title": "Vault"
          },
          {
            "id": "devops-t86-s6",
            "title": "Cloud secret managers"
          },
          {
            "id": "devops-t86-s7",
            "title": "Kubernetes external-secret operators"
          },
          {
            "id": "devops-t86-s8",
            "title": "Encryption at rest"
          },
          {
            "id": "devops-t86-s9",
            "title": "Encryption in transit"
          },
          {
            "id": "devops-t86-s10",
            "title": "Audit trails"
          }
        ],
        "overview": "**Secret Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Secret lifecycle, Secret rotation, Temporary credentials, Workload identity, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Git repositories",
          "Dockerfiles",
          "Docker images",
          "Plain CI configuration",
          "Public environment files",
          "Application logs"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t87",
        "number": 5,
        "title": "Supply-Chain Security",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t87-s1",
            "title": "Dependency provenance"
          },
          {
            "id": "devops-t87-s2",
            "title": "Lock files"
          },
          {
            "id": "devops-t87-s3",
            "title": "Trusted registries"
          },
          {
            "id": "devops-t87-s4",
            "title": "Image digests"
          },
          {
            "id": "devops-t87-s5",
            "title": "Signed images"
          },
          {
            "id": "devops-t87-s6",
            "title": "SBOM"
          },
          {
            "id": "devops-t87-s7",
            "title": "Reproducible builds"
          },
          {
            "id": "devops-t87-s8",
            "title": "Protected build runners"
          },
          {
            "id": "devops-t87-s9",
            "title": "Minimal build permissions"
          },
          {
            "id": "devops-t87-s10",
            "title": "OpenID Connect for cloud deployments"
          },
          {
            "id": "devops-t87-s11",
            "title": "Dependency pinning"
          },
          {
            "id": "devops-t87-s12",
            "title": "Artifact attestations"
          }
        ],
        "overview": "**Supply-Chain Security** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Dependency provenance, Lock files, Trusted registries, Image digests, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 73,
    "title": "Reliability and SRE",
    "icon": "🚀",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t88",
        "number": 1,
        "title": "Site Reliability Engineering",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t88-s1",
            "title": "Reliability"
          },
          {
            "id": "devops-t88-s2",
            "title": "Availability"
          },
          {
            "id": "devops-t88-s3",
            "title": "Durability"
          },
          {
            "id": "devops-t88-s4",
            "title": "Service-level indicator"
          },
          {
            "id": "devops-t88-s5",
            "title": "Service-level objective"
          },
          {
            "id": "devops-t88-s6",
            "title": "Service-level agreement"
          },
          {
            "id": "devops-t88-s7",
            "title": "Error budget"
          },
          {
            "id": "devops-t88-s8",
            "title": "Toil"
          },
          {
            "id": "devops-t88-s9",
            "title": "On-call"
          },
          {
            "id": "devops-t88-s10",
            "title": "Incident response"
          },
          {
            "id": "devops-t88-s11",
            "title": "Capacity planning"
          },
          {
            "id": "devops-t88-s12",
            "title": "Reliability reviews"
          }
        ],
        "overview": "**Site Reliability Engineering** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Reliability, Availability, Durability, Service-level indicator, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t89",
        "number": 2,
        "title": "Reliability Patterns",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t89-s1",
            "title": "Timeout"
          },
          {
            "id": "devops-t89-s2",
            "title": "Retry"
          },
          {
            "id": "devops-t89-s3",
            "title": "Exponential backoff"
          },
          {
            "id": "devops-t89-s4",
            "title": "Jitter"
          },
          {
            "id": "devops-t89-s5",
            "title": "Circuit breaker"
          },
          {
            "id": "devops-t89-s6",
            "title": "Bulkhead"
          },
          {
            "id": "devops-t89-s7",
            "title": "Rate limiter"
          },
          {
            "id": "devops-t89-s8",
            "title": "Load shedding"
          },
          {
            "id": "devops-t89-s9",
            "title": "Graceful degradation"
          },
          {
            "id": "devops-t89-s10",
            "title": "Idempotency"
          },
          {
            "id": "devops-t89-s11",
            "title": "Deduplication"
          },
          {
            "id": "devops-t89-s12",
            "title": "Health checks"
          },
          {
            "id": "devops-t89-s13",
            "title": "Redundancy"
          },
          {
            "id": "devops-t89-s14",
            "title": "Failover"
          }
        ],
        "overview": "**Reliability Patterns** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Timeout, Retry, Exponential backoff, Jitter, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t90",
        "number": 3,
        "title": "Incident Management",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t90-s1",
            "title": "Incident severity"
          },
          {
            "id": "devops-t90-s2",
            "title": "Incident commander"
          },
          {
            "id": "devops-t90-s3",
            "title": "Communication channel"
          },
          {
            "id": "devops-t90-s4",
            "title": "Timeline"
          },
          {
            "id": "devops-t90-s5",
            "title": "Mitigation"
          },
          {
            "id": "devops-t90-s6",
            "title": "Resolution"
          },
          {
            "id": "devops-t90-s7",
            "title": "Status updates"
          },
          {
            "id": "devops-t90-s8",
            "title": "Root-cause analysis"
          },
          {
            "id": "devops-t90-s9",
            "title": "Post-incident review"
          },
          {
            "id": "devops-t90-s10",
            "title": "Corrective actions"
          },
          {
            "id": "devops-t90-s11",
            "title": "Blameless postmortem"
          }
        ],
        "overview": "**Incident Management** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Incident severity, Incident commander, Communication channel, Timeline, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t91",
        "number": 4,
        "title": "Runbooks and Playbooks",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Runbooks and Playbooks** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Application unavailable",
          "High error rate",
          "High latency",
          "Database connection exhaustion",
          "Disk full",
          "Certificate expiration",
          "Pod crash loop",
          "Message-queue backlog",
          "High memory usage",
          "Failed deployment",
          "Database restoration",
          "Security incident"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t92",
        "number": 5,
        "title": "Chaos Engineering",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "devops-t92-s1",
            "title": "Controlled failure injection"
          },
          {
            "id": "devops-t92-s2",
            "title": "Pod termination"
          },
          {
            "id": "devops-t92-s3",
            "title": "Network latency"
          },
          {
            "id": "devops-t92-s4",
            "title": "Dependency failure"
          },
          {
            "id": "devops-t92-s5",
            "title": "Resource exhaustion"
          },
          {
            "id": "devops-t92-s6",
            "title": "Zone failure"
          },
          {
            "id": "devops-t92-s7",
            "title": "Hypothesis-driven experiments"
          },
          {
            "id": "devops-t92-s8",
            "title": "Safety boundaries"
          },
          {
            "id": "devops-t92-s9",
            "title": "Automatic abort conditions"
          }
        ],
        "overview": "Do not perform chaos experiments without proper safeguards.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 74,
    "title": "Backup and Disaster Recovery",
    "icon": "🚀",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t93",
        "number": 1,
        "title": "Backup Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t93-s1",
            "title": "Full backup"
          },
          {
            "id": "devops-t93-s2",
            "title": "Incremental backup"
          },
          {
            "id": "devops-t93-s3",
            "title": "Differential backup"
          },
          {
            "id": "devops-t93-s4",
            "title": "Snapshot"
          },
          {
            "id": "devops-t93-s5",
            "title": "Database dump"
          },
          {
            "id": "devops-t93-s6",
            "title": "Physical backup"
          },
          {
            "id": "devops-t93-s7",
            "title": "Off-site backup"
          },
          {
            "id": "devops-t93-s8",
            "title": "Immutable backup"
          },
          {
            "id": "devops-t93-s9",
            "title": "Backup encryption"
          },
          {
            "id": "devops-t93-s10",
            "title": "Backup retention"
          }
        ],
        "overview": "**Backup Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Full backup, Incremental backup, Differential backup, Snapshot, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t94",
        "number": 2,
        "title": "Recovery Objectives",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t94-s1",
            "title": "Recovery Point Objective"
          },
          {
            "id": "devops-t94-s2",
            "title": "Recovery Time Objective"
          },
          {
            "id": "devops-t94-s3",
            "title": "Point-in-time recovery"
          },
          {
            "id": "devops-t94-s4",
            "title": "Failover"
          },
          {
            "id": "devops-t94-s5",
            "title": "Disaster-recovery site"
          },
          {
            "id": "devops-t94-s6",
            "title": "Restore testing"
          },
          {
            "id": "devops-t94-s7",
            "title": "Data reconciliation"
          }
        ],
        "overview": "**Recovery Objectives** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Recovery Point Objective, Recovery Time Objective, Point-in-time recovery, Failover, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "A backup is not proven until restoration has been tested.",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "A backup is not proven until restoration has been tested.",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t95",
        "number": 3,
        "title": "High Availability",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t95-s1",
            "title": "Multiple application replicas"
          },
          {
            "id": "devops-t95-s2",
            "title": "Multi-zone deployment"
          },
          {
            "id": "devops-t95-s3",
            "title": "Load balancing"
          },
          {
            "id": "devops-t95-s4",
            "title": "Database replication"
          },
          {
            "id": "devops-t95-s5",
            "title": "Automatic failover"
          },
          {
            "id": "devops-t95-s6",
            "title": "Health-based traffic routing"
          },
          {
            "id": "devops-t95-s7",
            "title": "Redundant network paths"
          },
          {
            "id": "devops-t95-s8",
            "title": "Queue durability"
          },
          {
            "id": "devops-t95-s9",
            "title": "Storage replication"
          },
          {
            "id": "devops-t95-s10",
            "title": "Split-brain concepts"
          }
        ],
        "overview": "**High Availability** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Multiple application replicas, Multi-zone deployment, Load balancing, Database replication, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 75,
    "title": "Performance and Capacity Engineering",
    "icon": "🚀",
    "color": "#ec4899",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t96",
        "number": 1,
        "title": "Performance Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t96-s1",
            "title": "Latency"
          },
          {
            "id": "devops-t96-s2",
            "title": "Throughput"
          },
          {
            "id": "devops-t96-s3",
            "title": "Concurrency"
          },
          {
            "id": "devops-t96-s4",
            "title": "Resource utilization"
          },
          {
            "id": "devops-t96-s5",
            "title": "Saturation"
          },
          {
            "id": "devops-t96-s6",
            "title": "Bottleneck"
          },
          {
            "id": "devops-t96-s7",
            "title": "Percentiles"
          },
          {
            "id": "devops-t96-s8",
            "title": "Capacity"
          },
          {
            "id": "devops-t96-s9",
            "title": "Queueing"
          },
          {
            "id": "devops-t96-s10",
            "title": "Backpressure"
          }
        ],
        "overview": "**Performance Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Latency, Throughput, Concurrency, Resource utilization, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t97",
        "number": 2,
        "title": "Load Testing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t97-s1",
            "title": "Baseline testing"
          },
          {
            "id": "devops-t97-s2",
            "title": "Load testing"
          },
          {
            "id": "devops-t97-s3",
            "title": "Stress testing"
          },
          {
            "id": "devops-t97-s4",
            "title": "Spike testing"
          },
          {
            "id": "devops-t97-s5",
            "title": "Soak testing"
          },
          {
            "id": "devops-t97-s6",
            "title": "Capacity testing"
          }
        ],
        "overview": "**Load Testing** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: Baseline testing, Load testing, Stress testing, Spike testing, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Gatling",
          "JMeter",
          "Requests per second",
          "Error percentage",
          "p50 latency",
          "p95 latency",
          "p99 latency",
          "CPU usage",
          "Memory usage",
          "Database connections",
          "Garbage-collection pauses",
          "Queue depth"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t98",
        "number": 3,
        "title": "Java Production Performance",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "devops-t98-s1",
            "title": "JVM heap sizing"
          },
          {
            "id": "devops-t98-s2",
            "title": "Container memory limits"
          },
          {
            "id": "devops-t98-s3",
            "title": "Garbage collection"
          },
          {
            "id": "devops-t98-s4",
            "title": "Thread pools"
          },
          {
            "id": "devops-t98-s5",
            "title": "Virtual threads"
          },
          {
            "id": "devops-t98-s6",
            "title": "Database connection pools"
          },
          {
            "id": "devops-t98-s7",
            "title": "HTTP client pools"
          },
          {
            "id": "devops-t98-s8",
            "title": "JVM metrics"
          },
          {
            "id": "devops-t98-s9",
            "title": "Thread dumps"
          },
          {
            "id": "devops-t98-s10",
            "title": "Heap dumps"
          },
          {
            "id": "devops-t98-s11",
            "title": "Java Flight Recorder"
          },
          {
            "id": "devops-t98-s12",
            "title": "Java Mission Control"
          },
          {
            "id": "devops-t98-s13",
            "title": "Startup time"
          },
          {
            "id": "devops-t98-s14",
            "title": "Graceful shutdown"
          }
        ],
        "overview": "**Java Production Performance** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nIn this topic you will study: JVM heap sizing, Container memory limits, Garbage collection, Thread pools, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 76,
    "title": "Platform Engineering",
    "icon": "🚀",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t99",
        "number": 1,
        "title": "Platform Engineering Concepts",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [
          {
            "id": "devops-t99-s1",
            "title": "Internal developer platform"
          },
          {
            "id": "devops-t99-s2",
            "title": "Self-service infrastructure"
          },
          {
            "id": "devops-t99-s3",
            "title": "Golden paths"
          },
          {
            "id": "devops-t99-s4",
            "title": "Service templates"
          },
          {
            "id": "devops-t99-s5",
            "title": "Developer portals"
          },
          {
            "id": "devops-t99-s6",
            "title": "Platform APIs"
          },
          {
            "id": "devops-t99-s7",
            "title": "Standardized pipelines"
          },
          {
            "id": "devops-t99-s8",
            "title": "Policy as Code"
          },
          {
            "id": "devops-t99-s9",
            "title": "Environment provisioning"
          },
          {
            "id": "devops-t99-s10",
            "title": "Platform observability"
          },
          {
            "id": "devops-t99-s11",
            "title": "Developer experience"
          }
        ],
        "overview": "**Platform Engineering Concepts** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nIn this topic you will study: Internal developer platform, Self-service infrastructure, Golden paths, Service templates, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t100",
        "number": 2,
        "title": "Common Platform Capabilities",
        "difficulty": "intermediate",
        "estimatedHours": 8,
        "xp": 200,
        "subtopics": [],
        "overview": "**Common Platform Capabilities** is an intermediate-level topic that builds on core fundamentals and is widely used in production in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Service repository templates",
          "Standard Spring Boot templates",
          "CI/CD pipelines",
          "Container build pipelines",
          "Kubernetes deployment templates",
          "Secret management",
          "Database provisioning",
          "Message-broker provisioning",
          "Observability by default",
          "Security scanning",
          "Cost reporting",
          "Service catalogues"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "intermediate"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t101",
        "number": 3,
        "title": "Backstage",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "devops-t101-s1",
            "title": "Software catalogue"
          },
          {
            "id": "devops-t101-s2",
            "title": "Service ownership"
          },
          {
            "id": "devops-t101-s3",
            "title": "Templates"
          },
          {
            "id": "devops-t101-s4",
            "title": "Documentation"
          },
          {
            "id": "devops-t101-s5",
            "title": "Plugins"
          },
          {
            "id": "devops-t101-s6",
            "title": "Developer portal"
          },
          {
            "id": "devops-t101-s7",
            "title": "Self-service actions"
          }
        ],
        "overview": "**Backstage** is an advanced topic that requires solid foundational knowledge and is critical for senior-level work in the **DevOps** roadmap.\n\nIn this topic you will study: Software catalogue, Service ownership, Templates, Documentation, and 3 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 77,
    "title": "Advanced DevOps Topics",
    "icon": "🚀",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "devops",
    "roadmapLabel": "DevOps",
    "roadmapBadge": "CI/CD / Cloud",
    "topics": [
      {
        "id": "devops-t102",
        "number": 1,
        "title": "Service Mesh",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "devops-t102-s1",
            "title": "Sidecar proxy"
          },
          {
            "id": "devops-t102-s2",
            "title": "Data plane"
          },
          {
            "id": "devops-t102-s3",
            "title": "Control plane"
          },
          {
            "id": "devops-t102-s4",
            "title": "Service-to-service TLS"
          },
          {
            "id": "devops-t102-s5",
            "title": "Traffic management"
          },
          {
            "id": "devops-t102-s6",
            "title": "Retries"
          },
          {
            "id": "devops-t102-s7",
            "title": "Circuit breaking"
          },
          {
            "id": "devops-t102-s8",
            "title": "Traffic splitting"
          },
          {
            "id": "devops-t102-s9",
            "title": "Service identity"
          },
          {
            "id": "devops-t102-s10",
            "title": "Service-mesh observability"
          }
        ],
        "overview": "Do not introduce a service mesh unless the system’s complexity justifies it.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Istio",
          "Linkerd"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t103",
        "number": 2,
        "title": "Serverless",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "devops-t103-s1",
            "title": "Function as a Service"
          },
          {
            "id": "devops-t103-s2",
            "title": "Event triggers"
          },
          {
            "id": "devops-t103-s3",
            "title": "Cold starts"
          },
          {
            "id": "devops-t103-s4",
            "title": "Execution limits"
          },
          {
            "id": "devops-t103-s5",
            "title": "Stateless execution"
          },
          {
            "id": "devops-t103-s6",
            "title": "Managed API gateways"
          },
          {
            "id": "devops-t103-s7",
            "title": "Serverless databases"
          },
          {
            "id": "devops-t103-s8",
            "title": "Cost model"
          },
          {
            "id": "devops-t103-s9",
            "title": "Vendor lock-in"
          },
          {
            "id": "devops-t103-s10",
            "title": "Observability"
          }
        ],
        "overview": "**Serverless** is an advanced topic that requires solid foundational knowledge and is critical for senior-level work in the **DevOps** roadmap.\n\nIn this topic you will study: Function as a Service, Event triggers, Cold starts, Execution limits, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t104",
        "number": 3,
        "title": "Multi-Cloud",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "devops-t104-s1",
            "title": "Cloud abstraction"
          },
          {
            "id": "devops-t104-s2",
            "title": "Portability"
          },
          {
            "id": "devops-t104-s3",
            "title": "Network connectivity"
          },
          {
            "id": "devops-t104-s4",
            "title": "Identity federation"
          },
          {
            "id": "devops-t104-s5",
            "title": "Data replication"
          },
          {
            "id": "devops-t104-s6",
            "title": "Cost"
          },
          {
            "id": "devops-t104-s7",
            "title": "Operational complexity"
          },
          {
            "id": "devops-t104-s8",
            "title": "Lowest-common-denominator problem"
          }
        ],
        "overview": "Do not use multi-cloud merely to avoid theoretical vendor lock-in.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t105",
        "number": 4,
        "title": "FinOps",
        "difficulty": "advanced",
        "estimatedHours": 12,
        "xp": 350,
        "subtopics": [
          {
            "id": "devops-t105-s1",
            "title": "Cloud cost allocation"
          },
          {
            "id": "devops-t105-s2",
            "title": "Unit economics"
          },
          {
            "id": "devops-t105-s3",
            "title": "Cost per request"
          },
          {
            "id": "devops-t105-s4",
            "title": "Cost per customer"
          },
          {
            "id": "devops-t105-s5",
            "title": "Cost forecasting"
          },
          {
            "id": "devops-t105-s6",
            "title": "Resource rightsizing"
          },
          {
            "id": "devops-t105-s7",
            "title": "Commitment planning"
          },
          {
            "id": "devops-t105-s8",
            "title": "Storage optimization"
          },
          {
            "id": "devops-t105-s9",
            "title": "Chargeback"
          },
          {
            "id": "devops-t105-s10",
            "title": "Showback"
          }
        ],
        "overview": "As a Java and Spring Boot learner, use this stack first:",
        "codeExample": "Developer pushes code\n        ↓\nPull request created\n        ↓\nCompile and unit test\n        ↓\nIntegration tests with Testcontainers\n        ↓\nCode-quality and security scans\n        ↓\nMaven package\n        ↓\nBuild Docker image\n        ↓\nGenerate SBOM\n        ↓\nScan and sign image\n        ↓\nPush to container registry\n        ↓\nUpdate deployment configuration\n        ↓\nArgo CD deploys to staging\n        ↓\nSmoke and API tests\n        ↓\nProduction approval\n        ↓\nCanary or rolling deployment\n        ↓\nMetrics, logs and traces monitored\n        ↓\nAutomatic or manual rollback if unhealthy",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Developer pushes code\n        ↓\nPull request created\n        ↓\nCompile and unit test\n        ↓\nIntegration tests with Testcontainers\n        ↓\nCode-quality and security scans\n        ↓\nMaven package\n        ↓\nBuild Docker image\n        ↓\nGenerate SBOM\n        ↓\nScan and sign image\n        ↓\nPush to container registry\n        ↓\nUpdate deployment configuration\n        ↓\nArgo CD deploys to staging\n        ↓\nSmoke and API tests\n        ↓\nProduction approval\n        ↓\nCanary or rolling deployment\n        ↓\nMetrics, logs and traces monitored\n        ↓\nAutomatic or manual rollback if unhealthy",
            "caption": ""
          }
        ],
        "tables": [
          "| Area                     | Recommended tool                      |\n| ------------------------ | ------------------------------------- |\n| Operating system         | Ubuntu Linux                          |\n| Shell                    | Bash                                  |\n| Version control          | Git and GitHub                        |\n| Java build               | Maven                                 |\n| CI/CD                    | GitHub Actions                        |\n| Containers               | Docker                                |\n| Local orchestration      | Docker Compose                        |\n| Reverse proxy            | Nginx                                 |\n| Cloud                    | AWS, Azure or Google Cloud—choose one |\n| Infrastructure as Code   | Terraform                             |\n| Configuration management | Ansible                               |\n| Container orchestration  | Kubernetes                            |\n| Kubernetes packaging     | Helm                                  |\n| GitOps                   | Argo CD                               |\n| Metrics                  | Prometheus                            |\n| Dashboards               | Grafana                               |\n| Tracing                  | OpenTelemetry                         |\n| Logs                     | Loki or OpenSearch                    |\n| Security scanning        | Trivy and OWASP tools                 |\n| Secret management        | Vault or a cloud secret manager       |\n| Load testing             | k6 or Gatling                         |"
        ],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "advanced"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t106",
        "number": 5,
        "title": "Project 1 — Linux Deployment",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 1 — Linux Deployment** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Linux virtual machine",
          "Java installation",
          "PostgreSQL",
          "Environment variables",
          "Systemd service",
          "Nginx reverse proxy",
          "HTTPS",
          "Log rotation"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t107",
        "number": 6,
        "title": "Project 2 — Dockerized Spring Boot System",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 2 — Dockerized Spring Boot System** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring Boot",
          "PostgreSQL",
          "Redis",
          "Dockerfile",
          "Multi-stage build",
          "Docker Compose",
          "Persistent volumes",
          "Health checks",
          "Non-root container"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t108",
        "number": 7,
        "title": "Project 3 — CI/CD Pipeline",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 3 — CI/CD Pipeline** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "GitHub Actions",
          "Unit tests",
          "Testcontainers",
          "JaCoCo",
          "Security scanning",
          "Docker build",
          "Registry publishing",
          "Automated staging deployment",
          "Manual production approval"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t109",
        "number": 8,
        "title": "Project 4 — Cloud Infrastructure",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 4 — Cloud Infrastructure** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Virtual network",
          "Public and private subnets",
          "Compute instance",
          "Load balancer",
          "Managed PostgreSQL",
          "Object storage",
          "IAM roles",
          "Monitoring",
          "Secret storage"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t110",
        "number": 9,
        "title": "Project 5 — Kubernetes Deployment",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 5 — Kubernetes Deployment** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Deployment",
          "Service",
          "Ingress",
          "ConfigMap",
          "Secrets",
          "Actuator health probes",
          "Resource requests and limits",
          "Autoscaling",
          "Rolling deployment",
          "Helm chart"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t111",
        "number": 10,
        "title": "Project 6 — Production Observability",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 6 — Production Observability** is a foundational concept that every developer should understand early in their learning journey in the **DevOps** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Prometheus",
          "Grafana",
          "OpenTelemetry",
          "Distributed tracing",
          "Centralized logs",
          "Dashboards",
          "Alerting",
          "Runbooks"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      },
      {
        "id": "devops-t112",
        "number": 11,
        "title": "Project 7 — GitOps Platform",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "As a Java backend developer, prioritize:\n\n1. Linux commands\n\n3. Networking and HTTP\n\n4. Git and GitHub\n\n6. GitHub Actions\n\n8. Docker Compose\n\n10. Basic cloud deployment\n\n11. Environment variables and secrets\n\n13. Spring Boot Actuator\n\n14. Basic metrics\n\n15. Database backup\n\n16. Deployment and rollback\n\nYou do **not** need advanced Kubernetes, service meshes or multi-cloud architecture for your first Java backend role.\n\n1. Linux administration\n\n2. Bash or Python scripting\n\n7. Cloud platform\n\n13. Prometheus and Grafana\n\n14. Centralized logging\n\n15. OpenTelemetry\n\n17. IAM and secret management\n\n18. Incident management\n\n19. Backup and disaster recovery\n\n20. Cost optimization\n\nAvoid these mistakes:\n\nThe strongest combination for your career will be:\n\n> **Java + Spring Boot + PostgreSQL + Redis + GitHub Actions + Docker + cloud fundamentals + Terraform + Kubernetes + observability.**\n\nYour goal should not be to memorize dozens of tools. You should become capable of taking a Spring Boot application from **source code to secure, observable, repeatable and recoverable production deployment**. ⚙️🚀\n\n[1]: https://docs.github.com/actions?utm_source=chatgpt.com \"GitHub Actions documentation\"\n\n[2]: https://docs.docker.com/get-started/?utm_source=chatgpt.com \"Get started\"\n\n[3]: https://developer.hashicorp.com/terraform/docs?utm_source=chatgpt.com \"Terraform Documentation\"\n\n[4]: https://docs.ansible.com/projects/ansible/latest/getting_started/index.html?utm_source=chatgpt.com \"Getting started with Ansible\"\n\n[5]: https://kubernetes.io/docs/concepts/?utm_source=chatgpt.com \"Concepts\"\n\n[6]: https://helm.sh/?utm_source=chatgpt.com \"Helm\"\n\n[7]: https://argoproj.github.io/?utm_source=chatgpt.com \"Argo: Home\"\n\n[8]: https://prometheus.io/docs/introduction/overview/?utm_source=chatgpt.com \"Overview | Prometheus\"\n\n[9]: https://prometheus.io/docs/concepts/data_model/?utm_source=chatgpt.com \"Data model\"\n\n[10]: https://owasp.org/www-project-devsecops-guideline/?utm_source=chatgpt.com \"OWASP DevSecOps Guideline\"",
        "codeExample": "FIRST MASTER\nLinux → Networking → Git → Maven → CI/CD → Docker\n\nTHEN LEARN\nCloud → Terraform → Kubernetes → Helm → Observability\n\nAFTER THAT\nGitOps → DevSecOps → SRE → Platform Engineering\n\nONLY WHEN REQUIRED\nService Mesh → Multi-Cloud → Advanced Serverless → Chaos Engineering",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "FIRST MASTER\nLinux → Networking → Git → Maven → CI/CD → Docker\n\nTHEN LEARN\nCloud → Terraform → Kubernetes → Helm → Observability\n\nAFTER THAT\nGitOps → DevSecOps → SRE → Platform Engineering\n\nONLY WHEN REQUIRED\nService Mesh → Multi-Cloud → Advanced Serverless → Chaos Engineering",
            "caption": ""
          }
        ],
        "tables": [
          "| Stage | Focus                | Practical result                          |\n| ----- | -------------------- | ----------------------------------------- |\n| 1     | Linux and Bash       | Manage a Linux server                     |\n| 2     | Networking and HTTP  | Troubleshoot connectivity                 |\n| 3     | Git and Maven        | Build and version Java applications       |\n| 4     | GitHub Actions       | Automate testing and packaging            |\n| 5     | Docker               | Containerize Spring Boot                  |\n| 6     | Nginx and TLS        | Expose applications securely              |\n| 7     | Cloud fundamentals   | Deploy to a cloud environment             |\n| 8     | Terraform            | Provision infrastructure automatically    |\n| 9     | Ansible              | Configure servers automatically           |\n| 10    | Kubernetes           | Operate containerized workloads           |\n| 11    | Helm and GitOps      | Standardize deployments                   |\n| 12    | Observability        | Diagnose production systems               |\n| 13    | DevSecOps            | Secure the delivery pipeline              |\n| 14    | SRE                  | Improve reliability and incident response |\n| 15    | Platform engineering | Build self-service delivery systems       |"
        ],
        "notes": [
          "Terraform infrastructure",
          "Kubernetes",
          "Helm",
          "Argo CD",
          "Automated image updates",
          "Canary deployments",
          "Policy checks",
          "Secret management",
          "Disaster-recovery procedures",
          "Learning Kubernetes before Docker",
          "Learning tools without understanding Linux",
          "Memorizing YAML without understanding the architecture",
          "Running databases in production without backups",
          "Storing secrets in Git",
          "Using the `latest` image tag for controlled production releases",
          "Running containers as root unnecessarily",
          "Deploying without health checks",
          "Deploying without rollback procedures",
          "Ignoring generated SQL and database performance",
          "Collecting logs without retention policies",
          "Creating alerts for every metric",
          "Using microservices before mastering monolithic deployment",
          "Introducing multiple cloud providers too early",
          "Treating DevOps as only a collection of tools",
          "Automating a broken manual process without understanding it"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "devops",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "devops",
        "roadmapLabel": "DevOps",
        "roadmapBadge": "CI/CD / Cloud"
      }
    ]
  },
  {
    "id": 78,
    "title": "Programming and Computer Science Fundamentals",
    "icon": "🌐",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t1",
        "number": 1,
        "title": "Programming Logic",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t1-s1",
            "title": "Variables ও data types"
          },
          {
            "id": "others-t1-s2",
            "title": "Conditions"
          },
          {
            "id": "others-t1-s3",
            "title": "Loops"
          },
          {
            "id": "others-t1-s4",
            "title": "Methods"
          },
          {
            "id": "others-t1-s5",
            "title": "Arrays"
          },
          {
            "id": "others-t1-s6",
            "title": "Strings"
          },
          {
            "id": "others-t1-s7",
            "title": "Input এবং output"
          },
          {
            "id": "others-t1-s8",
            "title": "Recursion"
          },
          {
            "id": "others-t1-s9",
            "title": "Debugging"
          },
          {
            "id": "others-t1-s10",
            "title": "Algorithm লেখা"
          },
          {
            "id": "others-t1-s11",
            "title": "Flowchart"
          },
          {
            "id": "others-t1-s12",
            "title": "Pseudocode"
          },
          {
            "id": "others-t1-s13",
            "title": "Time ও space complexity-এর প্রাথমিক ধারণা"
          }
        ],
        "overview": "**Programming Logic** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Variables ও data types, Conditions, Loops, Methods, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t2",
        "number": 2,
        "title": "Computer Science Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t2-s1",
            "title": "Binary এবং hexadecimal numbers"
          },
          {
            "id": "others-t2-s2",
            "title": "Bits ও bytes"
          },
          {
            "id": "others-t2-s3",
            "title": "Memory কীভাবে কাজ করে"
          },
          {
            "id": "others-t2-s4",
            "title": "Stack ও heap"
          },
          {
            "id": "others-t2-s5",
            "title": "Process ও thread"
          },
          {
            "id": "others-t2-s6",
            "title": "Compilation ও interpretation"
          },
          {
            "id": "others-t2-s7",
            "title": "Client-server architecture"
          },
          {
            "id": "others-t2-s8",
            "title": "Operating-system fundamentals"
          },
          {
            "id": "others-t2-s9",
            "title": "Database fundamentals"
          },
          {
            "id": "others-t2-s10",
            "title": "Networking fundamentals"
          }
        ],
        "overview": "**Computer Science Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Binary এবং hexadecimal numbers, Bits ও bytes, Memory কীভাবে কাজ করে, Stack ও heap, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 79,
    "title": "Core Java ও OOP",
    "icon": "🌐",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t3",
        "number": 1,
        "title": "Java Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t3-s1",
            "title": "Syntax"
          },
          {
            "id": "others-t3-s2",
            "title": "Primitive এবং reference types"
          },
          {
            "id": "others-t3-s3",
            "title": "Operators"
          },
          {
            "id": "others-t3-s4",
            "title": "Methods"
          },
          {
            "id": "others-t3-s5",
            "title": "Arrays"
          },
          {
            "id": "others-t3-s6",
            "title": "Strings"
          },
          {
            "id": "others-t3-s7",
            "title": "Packages"
          },
          {
            "id": "others-t3-s8",
            "title": "Access modifiers"
          },
          {
            "id": "others-t3-s9",
            "title": "Exception handling"
          },
          {
            "id": "others-t3-s10",
            "title": "File handling"
          },
          {
            "id": "others-t3-s11",
            "title": "Date and Time API"
          },
          {
            "id": "others-t3-s12",
            "title": "Enums"
          },
          {
            "id": "others-t3-s13",
            "title": "Records"
          },
          {
            "id": "others-t3-s14",
            "title": "Annotations"
          },
          {
            "id": "others-t3-s15",
            "title": "Reflection basics"
          }
        ],
        "overview": "**Java Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Syntax, Primitive এবং reference types, Operators, Methods, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t4",
        "number": 2,
        "title": "Object-Oriented Programming",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t4-s1",
            "title": "Classes ও objects"
          },
          {
            "id": "others-t4-s2",
            "title": "Encapsulation"
          },
          {
            "id": "others-t4-s3",
            "title": "Inheritance"
          },
          {
            "id": "others-t4-s4",
            "title": "Polymorphism"
          },
          {
            "id": "others-t4-s5",
            "title": "Abstraction"
          },
          {
            "id": "others-t4-s6",
            "title": "Interfaces"
          },
          {
            "id": "others-t4-s7",
            "title": "Abstract classes"
          },
          {
            "id": "others-t4-s8",
            "title": "Composition"
          },
          {
            "id": "others-t4-s9",
            "title": "Aggregation"
          },
          {
            "id": "others-t4-s10",
            "title": "Association"
          },
          {
            "id": "others-t4-s11",
            "title": "Method overloading"
          },
          {
            "id": "others-t4-s12",
            "title": "Method overriding"
          },
          {
            "id": "others-t4-s13",
            "title": "Immutable classes"
          }
        ],
        "overview": "**Object-Oriented Programming** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Classes ও objects, Encapsulation, Inheritance, Polymorphism, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t5",
        "number": 3,
        "title": "Advanced Core Java",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t5-s1",
            "title": "Collections Framework"
          },
          {
            "id": "others-t5-s2",
            "title": "Generics"
          },
          {
            "id": "others-t5-s3",
            "title": "Comparable ও Comparator"
          },
          {
            "id": "others-t5-s4",
            "title": "Lambda expressions"
          },
          {
            "id": "others-t5-s5",
            "title": "Functional interfaces"
          },
          {
            "id": "others-t5-s6",
            "title": "Stream API"
          },
          {
            "id": "others-t5-s7",
            "title": "Optional"
          },
          {
            "id": "others-t5-s8",
            "title": "Multithreading"
          },
          {
            "id": "others-t5-s9",
            "title": "Synchronization"
          },
          {
            "id": "others-t5-s10",
            "title": "ExecutorService"
          },
          {
            "id": "others-t5-s11",
            "title": "CompletableFuture"
          },
          {
            "id": "others-t5-s12",
            "title": "Concurrent collections"
          },
          {
            "id": "others-t5-s13",
            "title": "Virtual threads"
          },
          {
            "id": "others-t5-s14",
            "title": "JVM এবং garbage collection"
          }
        ],
        "overview": "Java concurrency APIs thread pools, blocking queues এবং অন্যান্য high-performance concurrency utility প্রদান করে; backend scalability ও correctness বোঝার জন্য এগুলো গুরুত্বপূর্ণ। ([Oracle Documentation][2])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 80,
    "title": "Data Structures and Algorithms",
    "icon": "🌐",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "সব algorithm মুখস্থ করার প্রয়োজন নেই। তবে problem-solving এবং interview-এর জন্য নিচের বিষয়গুলো শিখতে হবে।",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t6",
        "number": 1,
        "title": "Data Structures",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t6-s1",
            "title": "Arrays"
          },
          {
            "id": "others-t6-s2",
            "title": "Strings"
          },
          {
            "id": "others-t6-s3",
            "title": "Linked lists"
          },
          {
            "id": "others-t6-s4",
            "title": "Stack"
          },
          {
            "id": "others-t6-s5",
            "title": "Queue"
          },
          {
            "id": "others-t6-s6",
            "title": "Deque"
          },
          {
            "id": "others-t6-s7",
            "title": "HashMap ও HashSet"
          },
          {
            "id": "others-t6-s8",
            "title": "Trees"
          },
          {
            "id": "others-t6-s9",
            "title": "Binary search trees"
          },
          {
            "id": "others-t6-s10",
            "title": "Heap ও priority queue"
          },
          {
            "id": "others-t6-s11",
            "title": "Trie"
          },
          {
            "id": "others-t6-s12",
            "title": "Graph"
          },
          {
            "id": "others-t6-s13",
            "title": "Disjoint set"
          }
        ],
        "overview": "**Data Structures** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Arrays, Strings, Linked lists, Stack, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t7",
        "number": 2,
        "title": "Algorithms",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t7-s1",
            "title": "Linear search"
          },
          {
            "id": "others-t7-s2",
            "title": "Binary search"
          },
          {
            "id": "others-t7-s3",
            "title": "Sorting algorithms"
          },
          {
            "id": "others-t7-s4",
            "title": "Two pointers"
          },
          {
            "id": "others-t7-s5",
            "title": "Sliding window"
          },
          {
            "id": "others-t7-s6",
            "title": "Prefix sum"
          },
          {
            "id": "others-t7-s7",
            "title": "Recursion"
          },
          {
            "id": "others-t7-s8",
            "title": "Backtracking"
          },
          {
            "id": "others-t7-s9",
            "title": "Greedy algorithms"
          },
          {
            "id": "others-t7-s10",
            "title": "Divide and conquer"
          },
          {
            "id": "others-t7-s11",
            "title": "Dynamic programming"
          },
          {
            "id": "others-t7-s12",
            "title": "BFS"
          },
          {
            "id": "others-t7-s13",
            "title": "DFS"
          },
          {
            "id": "others-t7-s14",
            "title": "Shortest-path fundamentals"
          },
          {
            "id": "others-t7-s15",
            "title": "Topological sorting"
          }
        ],
        "overview": "**Algorithms** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Linear search, Binary search, Sorting algorithms, Two pointers, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t8",
        "number": 3,
        "title": "Practice Target",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Practice Target** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "প্রথমে: **100টি easy problem**",
          "এরপর: **100–150টি medium problem**",
          "প্রতিটি problem-এর time এবং space complexity ব্যাখ্যা করতে হবে।"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 81,
    "title": "Git, Linux এবং Networking",
    "icon": "🌐",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t9",
        "number": 1,
        "title": "Git ও GitHub",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t9-s1",
            "title": "Repository"
          },
          {
            "id": "others-t9-s2",
            "title": "Commit"
          },
          {
            "id": "others-t9-s3",
            "title": "Branch"
          },
          {
            "id": "others-t9-s4",
            "title": "Merge"
          },
          {
            "id": "others-t9-s5",
            "title": "Rebase"
          },
          {
            "id": "others-t9-s6",
            "title": "Pull request"
          },
          {
            "id": "others-t9-s7",
            "title": "Conflict resolution"
          },
          {
            "id": "others-t9-s8",
            "title": "Git tags"
          },
          {
            "id": "others-t9-s9",
            "title": "Release"
          },
          {
            "id": "others-t9-s10",
            "title": "`.gitignore`"
          },
          {
            "id": "others-t9-s11",
            "title": "README লেখা"
          },
          {
            "id": "others-t9-s12",
            "title": "Conventional commits"
          }
        ],
        "overview": "**Git ও GitHub** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Repository, Commit, Branch, Merge, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t10",
        "number": 2,
        "title": "Linux",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t10-s1",
            "title": "Linux filesystem"
          },
          {
            "id": "others-t10-s2",
            "title": "File ও directory commands"
          },
          {
            "id": "others-t10-s3",
            "title": "Users ও permissions"
          },
          {
            "id": "others-t10-s4",
            "title": "Processes"
          },
          {
            "id": "others-t10-s5",
            "title": "Services"
          },
          {
            "id": "others-t10-s6",
            "title": "Environment variables"
          },
          {
            "id": "others-t10-s7",
            "title": "Package management"
          },
          {
            "id": "others-t10-s8",
            "title": "Logs"
          },
          {
            "id": "others-t10-s9",
            "title": "Bash scripting"
          },
          {
            "id": "others-t10-s10",
            "title": "SSH"
          },
          {
            "id": "others-t10-s11",
            "title": "`systemd`"
          },
          {
            "id": "others-t10-s12",
            "title": "`cron`"
          }
        ],
        "overview": "**Linux** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Linux filesystem, File ও directory commands, Users ও permissions, Processes, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t11",
        "number": 3,
        "title": "Networking",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t11-s1",
            "title": "OSI ও TCP/IP models"
          },
          {
            "id": "others-t11-s2",
            "title": "IP address"
          },
          {
            "id": "others-t11-s3",
            "title": "Subnet এবং CIDR"
          },
          {
            "id": "others-t11-s4",
            "title": "Ports"
          },
          {
            "id": "others-t11-s5",
            "title": "TCP ও UDP"
          },
          {
            "id": "others-t11-s6",
            "title": "DNS"
          },
          {
            "id": "others-t11-s7",
            "title": "HTTP ও HTTPS"
          },
          {
            "id": "others-t11-s8",
            "title": "TLS certificates"
          },
          {
            "id": "others-t11-s9",
            "title": "Proxy"
          },
          {
            "id": "others-t11-s10",
            "title": "Reverse proxy"
          },
          {
            "id": "others-t11-s11",
            "title": "Load balancer"
          },
          {
            "id": "others-t11-s12",
            "title": "Firewall"
          },
          {
            "id": "others-t11-s13",
            "title": "WebSocket"
          },
          {
            "id": "others-t11-s14",
            "title": "REST communication"
          }
        ],
        "overview": "**Networking** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: OSI ও TCP/IP models, IP address, Subnet এবং CIDR, Ports, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 82,
    "title": "Database Engineering",
    "icon": "🌐",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t12",
        "number": 1,
        "title": "SQL ও PostgreSQL",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t12-s1",
            "title": "Database design"
          },
          {
            "id": "others-t12-s2",
            "title": "Tables ও relationships"
          },
          {
            "id": "others-t12-s3",
            "title": "CRUD"
          },
          {
            "id": "others-t12-s4",
            "title": "Joins"
          },
          {
            "id": "others-t12-s5",
            "title": "Aggregation"
          },
          {
            "id": "others-t12-s6",
            "title": "Subqueries"
          },
          {
            "id": "others-t12-s7",
            "title": "CTE"
          },
          {
            "id": "others-t12-s8",
            "title": "Window functions"
          },
          {
            "id": "others-t12-s9",
            "title": "Constraints"
          },
          {
            "id": "others-t12-s10",
            "title": "Normalization"
          },
          {
            "id": "others-t12-s11",
            "title": "Transactions"
          },
          {
            "id": "others-t12-s12",
            "title": "Isolation levels"
          },
          {
            "id": "others-t12-s13",
            "title": "Locking"
          },
          {
            "id": "others-t12-s14",
            "title": "Indexes"
          },
          {
            "id": "others-t12-s15",
            "title": "Query execution plans"
          },
          {
            "id": "others-t12-s16",
            "title": "Database migrations"
          },
          {
            "id": "others-t12-s17",
            "title": "Backup ও restoration"
          }
        ],
        "overview": "**SQL ও PostgreSQL** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Database design, Tables ও relationships, CRUD, Joins, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t13",
        "number": 2,
        "title": "Java Database Access",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t13-s1",
            "title": "JDBC"
          },
          {
            "id": "others-t13-s2",
            "title": "PreparedStatement"
          },
          {
            "id": "others-t13-s3",
            "title": "Connection pooling"
          },
          {
            "id": "others-t13-s4",
            "title": "Spring JDBC"
          },
          {
            "id": "others-t13-s5",
            "title": "JPA"
          },
          {
            "id": "others-t13-s6",
            "title": "Hibernate"
          },
          {
            "id": "others-t13-s7",
            "title": "Spring Data JPA"
          },
          {
            "id": "others-t13-s8",
            "title": "JPQL"
          },
          {
            "id": "others-t13-s9",
            "title": "Native queries"
          },
          {
            "id": "others-t13-s10",
            "title": "Entity relationships"
          },
          {
            "id": "others-t13-s11",
            "title": "Transaction management"
          },
          {
            "id": "others-t13-s12",
            "title": "N+1 query problem"
          },
          {
            "id": "others-t13-s13",
            "title": "Optimistic locking"
          },
          {
            "id": "others-t13-s14",
            "title": "Flyway অথবা Liquibase"
          },
          {
            "id": "others-t13-s15",
            "title": "Testcontainers"
          }
        ],
        "overview": "**Java Database Access** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: JDBC, PreparedStatement, Connection pooling, Spring JDBC, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t14",
        "number": 3,
        "title": "NoSQL",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**NoSQL** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Elasticsearch/OpenSearch",
          "Cassandra",
          "Neo4j",
          "Time-series database",
          "Vector database",
          "PostgreSQL `pgvector`"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 83,
    "title": "Spring Backend Development",
    "icon": "🌐",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t15",
        "number": 1,
        "title": "Spring Core",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t15-s1",
            "title": "IoC"
          },
          {
            "id": "others-t15-s2",
            "title": "Dependency Injection"
          },
          {
            "id": "others-t15-s3",
            "title": "Beans"
          },
          {
            "id": "others-t15-s4",
            "title": "Bean lifecycle"
          },
          {
            "id": "others-t15-s5",
            "title": "Configuration"
          },
          {
            "id": "others-t15-s6",
            "title": "Profiles"
          },
          {
            "id": "others-t15-s7",
            "title": "AOP"
          },
          {
            "id": "others-t15-s8",
            "title": "Events"
          },
          {
            "id": "others-t15-s9",
            "title": "Transaction abstraction"
          }
        ],
        "overview": "**Spring Core** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: IoC, Dependency Injection, Beans, Bean lifecycle, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t16",
        "number": 2,
        "title": "Spring Boot",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t16-s1",
            "title": "Auto-configuration"
          },
          {
            "id": "others-t16-s2",
            "title": "Starter dependencies"
          },
          {
            "id": "others-t16-s3",
            "title": "Configuration properties"
          },
          {
            "id": "others-t16-s4",
            "title": "Environment profiles"
          },
          {
            "id": "others-t16-s5",
            "title": "Logging"
          },
          {
            "id": "others-t16-s6",
            "title": "Actuator"
          },
          {
            "id": "others-t16-s7",
            "title": "Embedded server"
          },
          {
            "id": "others-t16-s8",
            "title": "Application lifecycle"
          },
          {
            "id": "others-t16-s9",
            "title": "Graceful shutdown"
          }
        ],
        "overview": "**Spring Boot** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Auto-configuration, Starter dependencies, Configuration properties, Environment profiles, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t17",
        "number": 3,
        "title": "Spring MVC এবং REST",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t17-s1",
            "title": "Controllers"
          },
          {
            "id": "others-t17-s2",
            "title": "Request mapping"
          },
          {
            "id": "others-t17-s3",
            "title": "Request DTO"
          },
          {
            "id": "others-t17-s4",
            "title": "Response DTO"
          },
          {
            "id": "others-t17-s5",
            "title": "Validation"
          },
          {
            "id": "others-t17-s6",
            "title": "Exception handling"
          },
          {
            "id": "others-t17-s7",
            "title": "Pagination"
          },
          {
            "id": "others-t17-s8",
            "title": "Sorting"
          },
          {
            "id": "others-t17-s9",
            "title": "Filtering"
          },
          {
            "id": "others-t17-s10",
            "title": "File upload"
          },
          {
            "id": "others-t17-s11",
            "title": "API versioning"
          },
          {
            "id": "others-t17-s12",
            "title": "OpenAPI ও Swagger"
          },
          {
            "id": "others-t17-s13",
            "title": "REST API documentation"
          }
        ],
        "overview": "**Spring MVC এবং REST** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Controllers, Request mapping, Request DTO, Response DTO, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t18",
        "number": 4,
        "title": "Clean Backend Structure",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t18-s1",
            "title": "Package by feature"
          },
          {
            "id": "others-t18-s2",
            "title": "DTO এবং entity separation"
          },
          {
            "id": "others-t18-s3",
            "title": "Mapper"
          },
          {
            "id": "others-t18-s4",
            "title": "Service layer"
          },
          {
            "id": "others-t18-s5",
            "title": "Repository pattern"
          },
          {
            "id": "others-t18-s6",
            "title": "Dependency inversion"
          },
          {
            "id": "others-t18-s7",
            "title": "Modular monolith"
          },
          {
            "id": "others-t18-s8",
            "title": "Spring Modulith"
          },
          {
            "id": "others-t18-s9",
            "title": "Clean architecture basics"
          },
          {
            "id": "others-t18-s10",
            "title": "Hexagonal architecture basics"
          }
        ],
        "overview": "Spring Modulith domain-driven application module তৈরি ও module boundary বজায় রাখতে সহায়তা করে; microservices-এর আগে modular monolith শেখা একটি কার্যকর progression। ([Home][3])",
        "codeExample": "Controller\n    ↓\nApplication Service\n    ↓\nDomain Logic\n    ↓\nRepository\n    ↓\nDatabase",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Controller\n    ↓\nApplication Service\n    ↓\nDomain Logic\n    ↓\nRepository\n    ↓\nDatabase",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 84,
    "title": "API এবং Integration Engineering",
    "icon": "🌐",
    "color": "#0ea5e9",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t19",
        "number": 1,
        "title": "Professional API Design",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t19-s1",
            "title": "Resource-oriented URLs"
          },
          {
            "id": "others-t19-s2",
            "title": "Correct HTTP methods"
          },
          {
            "id": "others-t19-s3",
            "title": "Status codes"
          },
          {
            "id": "others-t19-s4",
            "title": "Error-response structure"
          },
          {
            "id": "others-t19-s5",
            "title": "Idempotency"
          },
          {
            "id": "others-t19-s6",
            "title": "Pagination"
          },
          {
            "id": "others-t19-s7",
            "title": "Cursor pagination"
          },
          {
            "id": "others-t19-s8",
            "title": "Filtering"
          },
          {
            "id": "others-t19-s9",
            "title": "Sorting"
          },
          {
            "id": "others-t19-s10",
            "title": "Rate limiting"
          },
          {
            "id": "others-t19-s11",
            "title": "Request validation"
          },
          {
            "id": "others-t19-s12",
            "title": "API versioning"
          },
          {
            "id": "others-t19-s13",
            "title": "Backward compatibility"
          },
          {
            "id": "others-t19-s14",
            "title": "Webhooks"
          },
          {
            "id": "others-t19-s15",
            "title": "API documentation"
          }
        ],
        "overview": "**Professional API Design** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Resource-oriented URLs, Correct HTTP methods, Status codes, Error-response structure, and 11 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t20",
        "number": 2,
        "title": "External Service Integration",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t20-s1",
            "title": "`RestClient`"
          },
          {
            "id": "others-t20-s2",
            "title": "`WebClient`"
          },
          {
            "id": "others-t20-s3",
            "title": "HTTP interface client"
          },
          {
            "id": "others-t20-s4",
            "title": "Timeout"
          },
          {
            "id": "others-t20-s5",
            "title": "Retry"
          },
          {
            "id": "others-t20-s6",
            "title": "Exponential backoff"
          },
          {
            "id": "others-t20-s7",
            "title": "Circuit breaker"
          },
          {
            "id": "others-t20-s8",
            "title": "Fallback"
          },
          {
            "id": "others-t20-s9",
            "title": "Connection pooling"
          },
          {
            "id": "others-t20-s10",
            "title": "Idempotent request handling"
          },
          {
            "id": "others-t20-s11",
            "title": "Third-party API testing"
          }
        ],
        "overview": "**External Service Integration** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: `RestClient`, `WebClient`, HTTP interface client, Timeout, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t21",
        "number": 3,
        "title": "Other Communication Technologies",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t21-s1",
            "title": "WebSocket"
          },
          {
            "id": "others-t21-s2",
            "title": "Server-Sent Events"
          },
          {
            "id": "others-t21-s3",
            "title": "GraphQL"
          },
          {
            "id": "others-t21-s4",
            "title": "gRPC"
          },
          {
            "id": "others-t21-s5",
            "title": "SOAP maintenance"
          },
          {
            "id": "others-t21-s6",
            "title": "Webhooks"
          }
        ],
        "overview": "**Other Communication Technologies** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: WebSocket, Server-Sent Events, GraphQL, gRPC, and 2 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 85,
    "title": "Software Testing",
    "icon": "🌐",
    "color": "#22c55e",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t22",
        "number": 1,
        "title": "Testing Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t22-s1",
            "title": "Unit test"
          },
          {
            "id": "others-t22-s2",
            "title": "Integration test"
          },
          {
            "id": "others-t22-s3",
            "title": "Component test"
          },
          {
            "id": "others-t22-s4",
            "title": "End-to-end test"
          },
          {
            "id": "others-t22-s5",
            "title": "Contract test"
          },
          {
            "id": "others-t22-s6",
            "title": "Smoke test"
          },
          {
            "id": "others-t22-s7",
            "title": "Regression test"
          },
          {
            "id": "others-t22-s8",
            "title": "Performance test"
          },
          {
            "id": "others-t22-s9",
            "title": "Security test"
          }
        ],
        "overview": "**Testing Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Unit test, Integration test, Component test, End-to-end test, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t23",
        "number": 2,
        "title": "Java এবং Spring Testing",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t23-s1",
            "title": "JUnit"
          },
          {
            "id": "others-t23-s2",
            "title": "Mockito"
          },
          {
            "id": "others-t23-s3",
            "title": "AssertJ"
          },
          {
            "id": "others-t23-s4",
            "title": "MockMvc"
          },
          {
            "id": "others-t23-s5",
            "title": "WebTestClient"
          },
          {
            "id": "others-t23-s6",
            "title": "REST Assured"
          },
          {
            "id": "others-t23-s7",
            "title": "`@SpringBootTest`"
          },
          {
            "id": "others-t23-s8",
            "title": "`@WebMvcTest`"
          },
          {
            "id": "others-t23-s9",
            "title": "`@DataJpaTest`"
          },
          {
            "id": "others-t23-s10",
            "title": "Testcontainers"
          },
          {
            "id": "others-t23-s11",
            "title": "WireMock"
          },
          {
            "id": "others-t23-s12",
            "title": "Spring Security testing"
          },
          {
            "id": "others-t23-s13",
            "title": "JaCoCo"
          },
          {
            "id": "others-t23-s14",
            "title": "Mutation-testing concepts"
          }
        ],
        "overview": "**Java এবং Spring Testing** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: JUnit, Mockito, AssertJ, MockMvc, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t24",
        "number": 3,
        "title": "Code Quality",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t24-s1",
            "title": "Clean Code"
          },
          {
            "id": "others-t24-s2",
            "title": "SOLID"
          },
          {
            "id": "others-t24-s3",
            "title": "DRY"
          },
          {
            "id": "others-t24-s4",
            "title": "KISS"
          },
          {
            "id": "others-t24-s5",
            "title": "YAGNI"
          },
          {
            "id": "others-t24-s6",
            "title": "Refactoring"
          },
          {
            "id": "others-t24-s7",
            "title": "Static analysis"
          },
          {
            "id": "others-t24-s8",
            "title": "Checkstyle"
          },
          {
            "id": "others-t24-s9",
            "title": "SpotBugs"
          },
          {
            "id": "others-t24-s10",
            "title": "SonarQube"
          },
          {
            "id": "others-t24-s11",
            "title": "Code review"
          },
          {
            "id": "others-t24-s12",
            "title": "Technical documentation"
          }
        ],
        "overview": "**Code Quality** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Clean Code, SOLID, DRY, KISS, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 86,
    "title": "Backend এবং API Security",
    "icon": "🌐",
    "color": "#eab308",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t25",
        "number": 1,
        "title": "Security Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t25-s1",
            "title": "Authentication"
          },
          {
            "id": "others-t25-s2",
            "title": "Authorization"
          },
          {
            "id": "others-t25-s3",
            "title": "Sessions"
          },
          {
            "id": "others-t25-s4",
            "title": "Cookies"
          },
          {
            "id": "others-t25-s5",
            "title": "Password hashing"
          },
          {
            "id": "others-t25-s6",
            "title": "JWT"
          },
          {
            "id": "others-t25-s7",
            "title": "OAuth 2.0"
          },
          {
            "id": "others-t25-s8",
            "title": "OpenID Connect"
          },
          {
            "id": "others-t25-s9",
            "title": "Role-based access"
          },
          {
            "id": "others-t25-s10",
            "title": "Permission-based access"
          },
          {
            "id": "others-t25-s11",
            "title": "Multi-factor authentication concepts"
          }
        ],
        "overview": "**Security Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Authentication, Authorization, Sessions, Cookies, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t26",
        "number": 2,
        "title": "Spring Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t26-s1",
            "title": "Security filter chain"
          },
          {
            "id": "others-t26-s2",
            "title": "UserDetailsService"
          },
          {
            "id": "others-t26-s3",
            "title": "Authentication providers"
          },
          {
            "id": "others-t26-s4",
            "title": "Method security"
          },
          {
            "id": "others-t26-s5",
            "title": "OAuth2 resource server"
          },
          {
            "id": "others-t26-s6",
            "title": "OAuth2 client"
          },
          {
            "id": "others-t26-s7",
            "title": "JWT validation"
          },
          {
            "id": "others-t26-s8",
            "title": "Refresh-token design"
          },
          {
            "id": "others-t26-s9",
            "title": "Session security"
          },
          {
            "id": "others-t26-s10",
            "title": "CORS এবং CSRF"
          },
          {
            "id": "others-t26-s11",
            "title": "Password reset"
          },
          {
            "id": "others-t26-s12",
            "title": "Account locking"
          },
          {
            "id": "others-t26-s13",
            "title": "Audit logging"
          }
        ],
        "overview": "**Spring Security** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Security filter chain, UserDetailsService, Authentication providers, Method security, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t27",
        "number": 3,
        "title": "Application Security",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t27-s1",
            "title": "SQL injection"
          },
          {
            "id": "others-t27-s2",
            "title": "XSS"
          },
          {
            "id": "others-t27-s3",
            "title": "CSRF"
          },
          {
            "id": "others-t27-s4",
            "title": "Broken authentication"
          },
          {
            "id": "others-t27-s5",
            "title": "Broken object-level authorization"
          },
          {
            "id": "others-t27-s6",
            "title": "Mass assignment"
          },
          {
            "id": "others-t27-s7",
            "title": "SSRF"
          },
          {
            "id": "others-t27-s8",
            "title": "Path traversal"
          },
          {
            "id": "others-t27-s9",
            "title": "File-upload attacks"
          },
          {
            "id": "others-t27-s10",
            "title": "Rate-limit bypass"
          },
          {
            "id": "others-t27-s11",
            "title": "Secret leakage"
          },
          {
            "id": "others-t27-s12",
            "title": "Dependency vulnerabilities"
          },
          {
            "id": "others-t27-s13",
            "title": "Secure headers"
          },
          {
            "id": "others-t27-s14",
            "title": "Encryption"
          }
        ],
        "overview": "OWASP API Security guidance-এ broken object authorization, broken authentication, unrestricted resource consumption এবং sensitive business-flow abuse-এর মতো ঝুঁকিগুলোকে গুরুত্ব দেওয়া হয়েছে। তাই security শুধু login ও JWT পর্যন্ত সীমিত রাখা উচিত নয়। ([OWASP Foundation][4])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 87,
    "title": "Caching, Messaging এবং Background Processing",
    "icon": "🌐",
    "color": "#ec4899",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t28",
        "number": 1,
        "title": "Redis",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t28-s1",
            "title": "Caching"
          },
          {
            "id": "others-t28-s2",
            "title": "Sessions"
          },
          {
            "id": "others-t28-s3",
            "title": "Counters"
          },
          {
            "id": "others-t28-s4",
            "title": "Rate limiting"
          },
          {
            "id": "others-t28-s5",
            "title": "Expiring tokens"
          },
          {
            "id": "others-t28-s6",
            "title": "Sorted sets"
          },
          {
            "id": "others-t28-s7",
            "title": "Pub/Sub"
          },
          {
            "id": "others-t28-s8",
            "title": "Redis Streams"
          },
          {
            "id": "others-t28-s9",
            "title": "Cache invalidation"
          },
          {
            "id": "others-t28-s10",
            "title": "Cache stampede"
          },
          {
            "id": "others-t28-s11",
            "title": "Distributed-lock limitations"
          }
        ],
        "overview": "**Redis** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Caching, Sessions, Counters, Rate limiting, and 7 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t29",
        "number": 2,
        "title": "Messaging",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t29-s1",
            "title": "Producer"
          },
          {
            "id": "others-t29-s2",
            "title": "Consumer"
          },
          {
            "id": "others-t29-s3",
            "title": "Topic ও queue"
          },
          {
            "id": "others-t29-s4",
            "title": "Partition"
          },
          {
            "id": "others-t29-s5",
            "title": "Consumer groups"
          },
          {
            "id": "others-t29-s6",
            "title": "Acknowledgement"
          },
          {
            "id": "others-t29-s7",
            "title": "Retry"
          },
          {
            "id": "others-t29-s8",
            "title": "Dead-letter queue"
          },
          {
            "id": "others-t29-s9",
            "title": "Idempotent consumer"
          },
          {
            "id": "others-t29-s10",
            "title": "Event schema"
          },
          {
            "id": "others-t29-s11",
            "title": "Message ordering"
          },
          {
            "id": "others-t29-s12",
            "title": "Duplicate delivery"
          },
          {
            "id": "others-t29-s13",
            "title": "Transactional outbox"
          },
          {
            "id": "others-t29-s14",
            "title": "Eventual consistency"
          }
        ],
        "overview": "**Messaging** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Producer, Consumer, Topic ও queue, Partition, and 10 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Kafka অথবা",
          "RabbitMQ"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t30",
        "number": 3,
        "title": "Background Jobs",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t30-s1",
            "title": "Spring Scheduler"
          },
          {
            "id": "others-t30-s2",
            "title": "Cron"
          },
          {
            "id": "others-t30-s3",
            "title": "Quartz"
          },
          {
            "id": "others-t30-s4",
            "title": "Spring Batch"
          },
          {
            "id": "others-t30-s5",
            "title": "Retryable jobs"
          },
          {
            "id": "others-t30-s6",
            "title": "Distributed scheduling"
          },
          {
            "id": "others-t30-s7",
            "title": "Job locking"
          },
          {
            "id": "others-t30-s8",
            "title": "Job monitoring"
          }
        ],
        "overview": "**Background Jobs** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Spring Scheduler, Cron, Quartz, Spring Batch, and 4 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 88,
    "title": "System Design",
    "icon": "🌐",
    "color": "#7c6ef7",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t31",
        "number": 1,
        "title": "Low-Level Design",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t31-s1",
            "title": "Requirements বোঝা"
          },
          {
            "id": "others-t31-s2",
            "title": "Classes ও interfaces design"
          },
          {
            "id": "others-t31-s3",
            "title": "UML class diagrams"
          },
          {
            "id": "others-t31-s4",
            "title": "Sequence diagrams"
          },
          {
            "id": "others-t31-s5",
            "title": "State diagrams"
          },
          {
            "id": "others-t31-s6",
            "title": "SOLID principles"
          },
          {
            "id": "others-t31-s7",
            "title": "Design patterns"
          },
          {
            "id": "others-t31-s8",
            "title": "Domain modeling"
          },
          {
            "id": "others-t31-s9",
            "title": "API contracts"
          }
        ],
        "overview": "**Low-Level Design** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Requirements বোঝা, Classes ও interfaces design, UML class diagrams, Sequence diagrams, and 5 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Factory",
          "Builder",
          "Strategy",
          "Observer",
          "Adapter",
          "Facade",
          "Decorator",
          "Proxy",
          "Template Method",
          "Chain of Responsibility"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t32",
        "number": 2,
        "title": "High-Level Design",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t32-s1",
            "title": "Functional requirements"
          },
          {
            "id": "others-t32-s2",
            "title": "Non-functional requirements"
          },
          {
            "id": "others-t32-s3",
            "title": "Scalability"
          },
          {
            "id": "others-t32-s4",
            "title": "Availability"
          },
          {
            "id": "others-t32-s5",
            "title": "Reliability"
          },
          {
            "id": "others-t32-s6",
            "title": "Consistency"
          },
          {
            "id": "others-t32-s7",
            "title": "Latency"
          },
          {
            "id": "others-t32-s8",
            "title": "Throughput"
          },
          {
            "id": "others-t32-s9",
            "title": "Load balancing"
          },
          {
            "id": "others-t32-s10",
            "title": "Caching"
          },
          {
            "id": "others-t32-s11",
            "title": "Database replication"
          },
          {
            "id": "others-t32-s12",
            "title": "Sharding"
          },
          {
            "id": "others-t32-s13",
            "title": "Queues"
          },
          {
            "id": "others-t32-s14",
            "title": "Object storage"
          },
          {
            "id": "others-t32-s15",
            "title": "CDN"
          },
          {
            "id": "others-t32-s16",
            "title": "Search engine"
          },
          {
            "id": "others-t32-s17",
            "title": "Observability"
          }
        ],
        "overview": "**High-Level Design** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Functional requirements, Non-functional requirements, Scalability, Availability, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t33",
        "number": 3,
        "title": "Distributed Systems",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t33-s1",
            "title": "CAP theorem"
          },
          {
            "id": "others-t33-s2",
            "title": "Consistency models"
          },
          {
            "id": "others-t33-s3",
            "title": "Replication"
          },
          {
            "id": "others-t33-s4",
            "title": "Partitioning"
          },
          {
            "id": "others-t33-s5",
            "title": "Distributed transactions"
          },
          {
            "id": "others-t33-s6",
            "title": "Saga pattern"
          },
          {
            "id": "others-t33-s7",
            "title": "Eventual consistency"
          },
          {
            "id": "others-t33-s8",
            "title": "Idempotency"
          },
          {
            "id": "others-t33-s9",
            "title": "Deduplication"
          },
          {
            "id": "others-t33-s10",
            "title": "Leader election"
          },
          {
            "id": "others-t33-s11",
            "title": "Clock ও ordering problems"
          },
          {
            "id": "others-t33-s12",
            "title": "Failure detection"
          },
          {
            "id": "others-t33-s13",
            "title": "Split-brain concepts"
          },
          {
            "id": "others-t33-s14",
            "title": "Backpressure"
          },
          {
            "id": "others-t33-s15",
            "title": "Distributed locks"
          },
          {
            "id": "others-t33-s16",
            "title": "CQRS concepts"
          },
          {
            "id": "others-t33-s17",
            "title": "Event-sourcing concepts"
          }
        ],
        "overview": "**Distributed Systems** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: CAP theorem, Consistency models, Replication, Partitioning, and 13 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t34",
        "number": 4,
        "title": "Systems to Design",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t34-s1",
            "title": "URL shortener"
          },
          {
            "id": "others-t34-s2",
            "title": "E-commerce platform"
          },
          {
            "id": "others-t34-s3",
            "title": "Payment service"
          },
          {
            "id": "others-t34-s4",
            "title": "Ticket-booking system"
          },
          {
            "id": "others-t34-s5",
            "title": "Notification service"
          },
          {
            "id": "others-t34-s6",
            "title": "Chat system"
          },
          {
            "id": "others-t34-s7",
            "title": "File-storage system"
          },
          {
            "id": "others-t34-s8",
            "title": "Ride-sharing backend"
          },
          {
            "id": "others-t34-s9",
            "title": "Food-delivery system"
          },
          {
            "id": "others-t34-s10",
            "title": "AI document assistant"
          }
        ],
        "overview": "**Systems to Design** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: URL shortener, E-commerce platform, Payment service, Ticket-booking system, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 89,
    "title": "DevOps এবং Cloud",
    "icon": "🌐",
    "color": "#06b6d4",
    "colorVar": "--accent-cyan",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t35",
        "number": 1,
        "title": "Minimum Backend DevOps",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t35-s1",
            "title": "Maven"
          },
          {
            "id": "others-t35-s2",
            "title": "GitHub Actions"
          },
          {
            "id": "others-t35-s3",
            "title": "Docker"
          },
          {
            "id": "others-t35-s4",
            "title": "Docker Compose"
          },
          {
            "id": "others-t35-s5",
            "title": "Nginx"
          },
          {
            "id": "others-t35-s6",
            "title": "HTTPS"
          },
          {
            "id": "others-t35-s7",
            "title": "Linux deployment"
          },
          {
            "id": "others-t35-s8",
            "title": "Environment variables"
          },
          {
            "id": "others-t35-s9",
            "title": "Secrets"
          },
          {
            "id": "others-t35-s10",
            "title": "Logging"
          },
          {
            "id": "others-t35-s11",
            "title": "Database backup"
          },
          {
            "id": "others-t35-s12",
            "title": "Rollback"
          }
        ],
        "overview": "**Minimum Backend DevOps** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Maven, GitHub Actions, Docker, Docker Compose, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t36",
        "number": 2,
        "title": "Advanced DevOps",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t36-s1",
            "title": "Terraform"
          },
          {
            "id": "others-t36-s2",
            "title": "Ansible"
          },
          {
            "id": "others-t36-s3",
            "title": "Kubernetes"
          },
          {
            "id": "others-t36-s4",
            "title": "Helm"
          },
          {
            "id": "others-t36-s5",
            "title": "Argo CD"
          },
          {
            "id": "others-t36-s6",
            "title": "Prometheus"
          },
          {
            "id": "others-t36-s7",
            "title": "Grafana"
          },
          {
            "id": "others-t36-s8",
            "title": "OpenTelemetry"
          },
          {
            "id": "others-t36-s9",
            "title": "Centralized logging"
          },
          {
            "id": "others-t36-s10",
            "title": "DevSecOps"
          },
          {
            "id": "others-t36-s11",
            "title": "Disaster recovery"
          }
        ],
        "overview": "Kubernetes production workloads শুধু container চালানো নয়; Services ও networking, workload management এবং metrics, logs ও traces-ভিত্তিক observability-ও এর গুরুত্বপূর্ণ অংশ। ([Kubernetes][5])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t37",
        "number": 3,
        "title": "Cloud",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t37-s1",
            "title": "IAM"
          },
          {
            "id": "others-t37-s2",
            "title": "Virtual network"
          },
          {
            "id": "others-t37-s3",
            "title": "Virtual machine"
          },
          {
            "id": "others-t37-s4",
            "title": "Load balancer"
          },
          {
            "id": "others-t37-s5",
            "title": "Object storage"
          },
          {
            "id": "others-t37-s6",
            "title": "Managed PostgreSQL"
          },
          {
            "id": "others-t37-s7",
            "title": "Managed Redis"
          },
          {
            "id": "others-t37-s8",
            "title": "Container registry"
          },
          {
            "id": "others-t37-s9",
            "title": "Managed Kubernetes"
          },
          {
            "id": "others-t37-s10",
            "title": "Secret manager"
          },
          {
            "id": "others-t37-s11",
            "title": "Monitoring"
          },
          {
            "id": "others-t37-s12",
            "title": "Autoscaling"
          },
          {
            "id": "others-t37-s13",
            "title": "Cost management"
          }
        ],
        "overview": "**Cloud** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: IAM, Virtual network, Virtual machine, Load balancer, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Azure",
          "Google Cloud"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 90,
    "title": "Spring Cloud এবং Microservices",
    "icon": "🌐",
    "color": "#10b981",
    "colorVar": "--accent-green",
    "estimatedWeeks": "2-4",
    "description": "প্রথমে একটি complete modular monolith তৈরি করতে শিখুন। তারপর microservices।",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t38",
        "number": 1,
        "title": "Microservices Topics",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t38-s1",
            "title": "Service boundaries"
          },
          {
            "id": "others-t38-s2",
            "title": "Database per service"
          },
          {
            "id": "others-t38-s3",
            "title": "Synchronous communication"
          },
          {
            "id": "others-t38-s4",
            "title": "Asynchronous communication"
          },
          {
            "id": "others-t38-s5",
            "title": "API Gateway"
          },
          {
            "id": "others-t38-s6",
            "title": "Service discovery"
          },
          {
            "id": "others-t38-s7",
            "title": "Central configuration"
          },
          {
            "id": "others-t38-s8",
            "title": "Distributed tracing"
          },
          {
            "id": "others-t38-s9",
            "title": "Circuit breakers"
          },
          {
            "id": "others-t38-s10",
            "title": "Event-driven communication"
          },
          {
            "id": "others-t38-s11",
            "title": "Saga"
          },
          {
            "id": "others-t38-s12",
            "title": "Transactional outbox"
          },
          {
            "id": "others-t38-s13",
            "title": "Contract testing"
          },
          {
            "id": "others-t38-s14",
            "title": "Service-level security"
          }
        ],
        "overview": "Spring Cloud distributed-system pattern যেমন configuration, routing এবং service communication-এর জন্য tooling প্রদান করে; তবে এটি শেখার আগে Spring Boot monolith ভালোভাবে আয়ত্ত করা উচিত। ([Home][6])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 91,
    "title": "Spring AI এবং AI Backend Engineering",
    "icon": "🌐",
    "color": "#f59e0b",
    "colorVar": "--accent-gold",
    "estimatedWeeks": "2-4",
    "description": "Spring AI-কে শেষের দিকের specialization হিসেবে রাখুন।",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t39",
        "number": 1,
        "title": "AI Fundamentals",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t39-s1",
            "title": "LLM"
          },
          {
            "id": "others-t39-s2",
            "title": "Tokens"
          },
          {
            "id": "others-t39-s3",
            "title": "Context window"
          },
          {
            "id": "others-t39-s4",
            "title": "Embeddings"
          },
          {
            "id": "others-t39-s5",
            "title": "Vector search"
          },
          {
            "id": "others-t39-s6",
            "title": "Prompt engineering"
          },
          {
            "id": "others-t39-s7",
            "title": "Structured output"
          },
          {
            "id": "others-t39-s8",
            "title": "RAG"
          },
          {
            "id": "others-t39-s9",
            "title": "Tool calling"
          },
          {
            "id": "others-t39-s10",
            "title": "AI agents"
          },
          {
            "id": "others-t39-s11",
            "title": "Model evaluation"
          },
          {
            "id": "others-t39-s12",
            "title": "Hallucination"
          },
          {
            "id": "others-t39-s13",
            "title": "Prompt injection"
          }
        ],
        "overview": "**AI Fundamentals** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: LLM, Tokens, Context window, Embeddings, and 9 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t40",
        "number": 2,
        "title": "Spring AI",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t40-s1",
            "title": "ChatClient"
          },
          {
            "id": "others-t40-s2",
            "title": "Chat models"
          },
          {
            "id": "others-t40-s3",
            "title": "Streaming"
          },
          {
            "id": "others-t40-s4",
            "title": "Structured Java output"
          },
          {
            "id": "others-t40-s5",
            "title": "Embedding models"
          },
          {
            "id": "others-t40-s6",
            "title": "Vector stores"
          },
          {
            "id": "others-t40-s7",
            "title": "Document ingestion"
          },
          {
            "id": "others-t40-s8",
            "title": "RAG"
          },
          {
            "id": "others-t40-s9",
            "title": "Chat memory"
          },
          {
            "id": "others-t40-s10",
            "title": "Tool calling"
          },
          {
            "id": "others-t40-s11",
            "title": "MCP"
          },
          {
            "id": "others-t40-s12",
            "title": "AI observability"
          },
          {
            "id": "others-t40-s13",
            "title": "AI security"
          }
        ],
        "overview": "Spring AI হলো Spring ecosystem-এর AI engineering framework, যা enterprise data, APIs এবং AI model integration-এর জন্য abstractions প্রদান করে। ([Home][7])",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 92,
    "title": "Communication এবং Professional Skills",
    "icon": "🌐",
    "color": "#f43f5e",
    "colorVar": "--accent-rose",
    "estimatedWeeks": "2-4",
    "description": "Technical skill-এর পাশাপাশি এগুলোও প্রয়োজন:",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t41",
        "number": 1,
        "title": "Communication",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t41-s1",
            "title": "পরিষ্কার technical English"
          },
          {
            "id": "others-t41-s2",
            "title": "Requirement clarification"
          },
          {
            "id": "others-t41-s3",
            "title": "Professional email"
          },
          {
            "id": "others-t41-s4",
            "title": "Stand-up update দেওয়া"
          },
          {
            "id": "others-t41-s5",
            "title": "Technical presentation"
          },
          {
            "id": "others-t41-s6",
            "title": "Code ব্যাখ্যা করা"
          },
          {
            "id": "others-t41-s7",
            "title": "Architecture decision ব্যাখ্যা করা"
          },
          {
            "id": "others-t41-s8",
            "title": "Bug report লেখা"
          },
          {
            "id": "others-t41-s9",
            "title": "Documentation লেখা"
          },
          {
            "id": "others-t41-s10",
            "title": "Constructive code review"
          }
        ],
        "overview": "**Communication** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: পরিষ্কার technical English, Requirement clarification, Professional email, Stand-up update দেওয়া, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t42",
        "number": 2,
        "title": "Team Engineering",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t42-s1",
            "title": "Agile এবং Scrum fundamentals"
          },
          {
            "id": "others-t42-s2",
            "title": "Jira বা issue-tracking tools"
          },
          {
            "id": "others-t42-s3",
            "title": "Sprint planning"
          },
          {
            "id": "others-t42-s4",
            "title": "Estimation"
          },
          {
            "id": "others-t42-s5",
            "title": "Pull-request workflow"
          },
          {
            "id": "others-t42-s6",
            "title": "Code ownership"
          },
          {
            "id": "others-t42-s7",
            "title": "Pair programming"
          },
          {
            "id": "others-t42-s8",
            "title": "Incident communication"
          },
          {
            "id": "others-t42-s9",
            "title": "Root-cause analysis"
          },
          {
            "id": "others-t42-s10",
            "title": "Technical debt management"
          }
        ],
        "overview": "**Team Engineering** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Agile এবং Scrum fundamentals, Jira বা issue-tracking tools, Sprint planning, Estimation, and 6 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  },
  {
    "id": 93,
    "title": "Portfolio এবং Job Preparation",
    "icon": "🌐",
    "color": "#8b5cf6",
    "colorVar": "--accent-primary",
    "estimatedWeeks": "2-4",
    "description": "",
    "roadmapType": "others",
    "roadmapLabel": "Others",
    "roadmapBadge": "Tools & More",
    "topics": [
      {
        "id": "others-t43",
        "number": 1,
        "title": "GitHub Profile",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [
          {
            "id": "others-t43-s1",
            "title": "Professional README"
          },
          {
            "id": "others-t43-s2",
            "title": "Pinned projects"
          },
          {
            "id": "others-t43-s3",
            "title": "Meaningful commit history"
          },
          {
            "id": "others-t43-s4",
            "title": "Issue tracking"
          },
          {
            "id": "others-t43-s5",
            "title": "Pull requests"
          },
          {
            "id": "others-t43-s6",
            "title": "API documentation"
          },
          {
            "id": "others-t43-s7",
            "title": "Architecture diagram"
          },
          {
            "id": "others-t43-s8",
            "title": "Database ER diagram"
          },
          {
            "id": "others-t43-s9",
            "title": "Docker setup"
          },
          {
            "id": "others-t43-s10",
            "title": "Automated tests"
          },
          {
            "id": "others-t43-s11",
            "title": "CI/CD pipeline"
          },
          {
            "id": "others-t43-s12",
            "title": "Live deployment"
          }
        ],
        "overview": "**GitHub Profile** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nIn this topic you will study: Professional README, Pinned projects, Meaningful commit history, Issue tracking, and 8 more concepts.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t44",
        "number": 2,
        "title": "Interview Preparation",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Interview Preparation** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Collections",
          "Exceptions",
          "Streams",
          "Generics",
          "Concurrency",
          "Dependency Injection",
          "Bean lifecycle",
          "REST",
          "Transactions",
          "Security",
          "Testing",
          "Joins",
          "Indexes",
          "Transactions",
          "Isolation",
          "Query optimization",
          "HTTP",
          "Linux",
          "Docker",
          "System design",
          "Behavioural questions"
        ],
        "subSections": [
          {
            "title": "Java",
            "items": [
              "Collections",
              "Exceptions",
              "Streams",
              "Generics",
              "Concurrency"
            ]
          },
          {
            "title": "Spring",
            "items": [
              "Dependency Injection",
              "Bean lifecycle",
              "REST",
              "Transactions",
              "Security",
              "Testing"
            ]
          },
          {
            "title": "Database",
            "items": [
              "Joins",
              "Indexes",
              "Transactions",
              "Isolation",
              "Query optimization"
            ]
          },
          {
            "title": "General",
            "items": [
              "HTTP",
              "Linux",
              "Docker",
              "System design",
              "Behavioural questions"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t45",
        "number": 3,
        "title": "Project 1 — Console-Based Application",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Student বা Library Management System**",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Core Java",
          "Collections",
          "Exceptions",
          "File handling",
          "Unit tests"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t46",
        "number": 4,
        "title": "Project 2 — Spring Boot CRUD API",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 2 — Spring Boot CRUD API** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring Boot",
          "REST",
          "PostgreSQL",
          "Validation",
          "Exception handling",
          "Swagger"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t47",
        "number": 5,
        "title": "Project 3 — Secure Business Application",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Library, Hospital অথবা Inventory System**",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Spring Security",
          "JWT বা session authentication",
          "Roles ও permissions",
          "Flyway",
          "Docker",
          "Integration tests"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t48",
        "number": 6,
        "title": "Project 4 — E-Commerce Backend",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 4 — E-Commerce Backend** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Cart",
          "Orders",
          "Inventory",
          "Payments",
          "Transactions",
          "Redis",
          "File storage",
          "Email",
          "Idempotency",
          "CI/CD"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t49",
        "number": 7,
        "title": "Project 5 — Production Booking Platform",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**Project 5 — Production Booking Platform** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [
          "Optimistic locking",
          "Kafka/RabbitMQ",
          "Transactional outbox",
          "Actuator",
          "Prometheus",
          "OpenTelemetry",
          "Cloud deployment",
          "Load testing"
        ],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t50",
        "number": 8,
        "title": "Project 6 — AI-Powered Platform",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "ধরা হয়েছে সপ্তাহে প্রায় **20 ঘণ্টা** পড়াশোনা ও practice করবেন।\n\nCalendar শেষ হওয়াই readiness নয়। প্রতিটি phase-এর project নিজে তৈরি করতে পারা readiness-এর প্রকৃত মানদণ্ড।\n\nচাকরির আবেদন শুরু করার আগে অন্তত এগুলো ভালোভাবে জানতে হবে:\n\nশুরুতেই একসঙ্গে এগুলোতে যাবেন না:",
        "codeExample": "Java\nOOP\nCollections এবং Streams\nException Handling\nBasic DSA\nGit এবং GitHub\nLinux basics\nHTTP এবং REST\nSQL এবং PostgreSQL\nSpring Core\nSpring Boot\nSpring MVC\nJPA এবং Hibernate\nValidation\nException Handling\nSpring Security\nJUnit এবং Mockito\nTestcontainers\nMaven\nDocker\nBasic CI/CD",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "Java\nOOP\nCollections এবং Streams\nException Handling\nBasic DSA\nGit এবং GitHub\nLinux basics\nHTTP এবং REST\nSQL এবং PostgreSQL\nSpring Core\nSpring Boot\nSpring MVC\nJPA এবং Hibernate\nValidation\nException Handling\nSpring Security\nJUnit এবং Mockito\nTestcontainers\nMaven\nDocker\nBasic CI/CD",
            "caption": ""
          },
          {
            "lang": "text",
            "code": "Redis\nKafka অথবা RabbitMQ\nSystem Design\nDistributed Systems\nSpring Modulith\nSpring Cloud\nMicroservices\nTerraform\nKubernetes\nObservability\nPerformance Engineering\nSpring AI\nCloud Architecture\nSecurity Engineering",
            "caption": ""
          }
        ],
        "tables": [
          "| সময়       | মূল বিষয়                     | Project target              |\n| --------- | ---------------------------- | --------------------------- |\n| Month 1–2 | Java fundamentals ও OOP      | Console application         |\n| Month 3   | Collections, Streams, DSA    | Problem-solving repository  |\n| Month 4   | Git, Linux, HTTP, SQL        | PostgreSQL project          |\n| Month 5   | Spring Core ও Spring Boot    | CRUD REST API               |\n| Month 6   | JPA, Hibernate, validation   | Database-backed API         |\n| Month 7   | Security ও testing           | Secure API                  |\n| Month 8   | Redis, messaging, jobs       | Event-driven module         |\n| Month 9   | Docker, CI/CD, cloud         | Deployed application        |\n| Month 10  | System design ও architecture | Modular monolith            |\n| Month 11  | Kubernetes ও observability   | Production-style deployment |\n| Month 12  | Spring AI অথবা microservices | Final capstone              |"
        ],
        "notes": [
          "Spring AI",
          "PGvector",
          "Streaming chat",
          "Chat memory",
          "Tool calling",
          "Citations",
          "AI evaluation",
          "**Month 1–4:** Foundation",
          "**Month 5–7:** Junior backend skill",
          "**Month 8–9:** Job-application preparation",
          "**Month 10–12:** Strong portfolio ও advanced engineering",
          "তিনটি cloud platform",
          "একাধিক message broker",
          "Cassandra",
          "Service mesh",
          "Event sourcing",
          "Advanced CQRS",
          "Multi-cloud",
          "Complex Kubernetes administration",
          "Autonomous AI agents",
          "দশ ধরনের NoSQL database"
        ],
        "subSections": [
          {
            "title": "বাস্তবসম্মত expectation",
            "items": [
              "**Month 1–4:** Foundation",
              "**Month 5–7:** Junior backend skill",
              "**Month 8–9:** Job-application preparation",
              "**Month 10–12:** Strong portfolio ও advanced engineering",
              "তিনটি cloud platform",
              "একাধিক message broker",
              "Cassandra",
              "Service mesh",
              "Event sourcing",
              "Advanced CQRS",
              "Multi-cloud",
              "Complex Kubernetes administration",
              "Autonomous AI agents",
              "দশ ধরনের NoSQL database"
            ]
          }
        ],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t51",
        "number": 9,
        "title": "সঠিক নীতি",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "**সঠিক নীতি** is a foundational concept that every developer should understand early in their learning journey in the **Others** roadmap.\n\nWork through each subtopic systematically, ticking them off as you complete them. Try writing your own code examples to reinforce each concept.",
        "codeExample": "একটি technology গভীরভাবে শিখুন\n        ↓\nএকটি বাস্তব project-এ ব্যবহার করুন\n        ↓\nTest এবং deploy করুন\n        ↓\nতারপর পরবর্তী technology শিখুন",
        "codeExampleLang": "text",
        "codeExamples": [
          {
            "lang": "text",
            "code": "একটি technology গভীরভাবে শিখুন\n        ↓\nএকটি বাস্তব project-এ ব্যবহার করুন\n        ↓\nTest এবং deploy করুন\n        ↓\nতারপর পরবর্তী technology শিখুন",
            "caption": ""
          }
        ],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      },
      {
        "id": "others-t52",
        "number": 10,
        "title": "আপনার সবচেয়ে কার্যকর career stack",
        "difficulty": "beginner",
        "estimatedHours": 4,
        "xp": 100,
        "subtopics": [],
        "overview": "> **Java + Spring Boot + PostgreSQL + Redis + Kafka/RabbitMQ + Security + Testing + Docker + CI/CD + Cloud + System Design**\n\nএর সঙ্গে **Spring AI** যোগ করলে আপনি traditional Java backend-এর পাশাপাশি AI-enabled enterprise backend development-এর জন্যও প্রস্তুত হবেন। 🚀\n\n[1]: https://docs.oracle.com/javase/tutorial/?utm_source=chatgpt.com \"The Java™ Tutorials\"\n\n[2]: https://docs.oracle.com/en/java/javase/25/core/concurrency.html?utm_source=chatgpt.com \"14 Concurrency - Java\"\n\n[3]: https://spring.io/projects?utm_source=chatgpt.com \"Projects\"\n\n[4]: https://owasp.org/API-Security/editions/2023/en/0x11-t10/?utm_source=chatgpt.com \"OWASP Top 10 API Security Risks – 2023\"\n\n[5]: https://kubernetes.io/docs/concepts/overview/?utm_source=chatgpt.com \"Overview\"\n\n[6]: https://spring.io/projects/spring-cloud?utm_source=chatgpt.com \"Spring Cloud\"\n\n[7]: https://spring.io/projects/spring-ai?utm_source=chatgpt.com \"Spring AI\"",
        "codeExample": "",
        "codeExampleLang": "java",
        "codeExamples": [],
        "tables": [],
        "notes": [],
        "subSections": [],
        "exercises": [],
        "tags": [
          "others",
          "beginner"
        ],
        "prerequisites": [],
        "roadmapType": "others",
        "roadmapLabel": "Others",
        "roadmapBadge": "Tools & More"
      }
    ]
  }
];
