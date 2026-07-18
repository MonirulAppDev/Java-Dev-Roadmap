# Complete Spring Ecosystem Roadmap for a Java Backend Engineer ☕️🚀

This roadmap covers:

- **Spring Framework**
- **Spring Boot**
- **Spring MVC and REST APIs**
- **Spring Data JPA and Hibernate**
- **Spring Security**
- **Spring Testing**
- **Spring AI**
- **Spring Cloud and microservices**
- **Messaging, caching and batch processing**
- **Docker, Kubernetes, CI/CD and cloud**
- **System design, observability and production engineering**

As of **July 17, 2026**, the current Spring ecosystem includes Spring Boot 4.1, Spring Framework 7.0, Spring Security 7.1 and Spring AI 2.0. Spring Boot 4.1 requires at least Java 17 and supports Java versions through Java 26. For learning and professional development, use a current LTS JDK such as **Java 21 or Java 25** unless your project has another requirement. ([Home][1])

---

# Roadmap Overview

```text
Core Java
   ↓
Database and SQL
   ↓
Spring Framework Core
   ↓
Spring Boot Fundamentals
   ↓
Spring MVC and REST API
   ↓
Spring Data JPA and Hibernate
   ↓
Validation and Exception Handling
   ↓
Spring Security
   ↓
Testing
   ↓
Production Readiness
   ↓
Caching, Messaging and Background Jobs
   ↓
Modular Architecture
   ↓
Spring Cloud and Microservices
   ↓
Spring AI
   ↓
Docker, Kubernetes, CI/CD and Cloud
   ↓
System Design and Performance Engineering
```

---

# Priority Indicators

| Symbol | Meaning                                              |
| ------ | ---------------------------------------------------- |
| 🟢     | Essential for every Spring backend developer         |
| 🟡     | Learn after becoming comfortable with the essentials |
| 🔵     | Specialized or project-dependent                     |
| 🔴     | Avoid learning too early                             |

---

# Phase 0 — Prerequisites

Before starting Spring, become comfortable with the following.

## 1. Core Java 🟢

- [ ] Classes and objects
- [ ] Encapsulation
- [ ] Inheritance
- [ ] Polymorphism
- [ ] Abstraction
- [ ] Interfaces
- [ ] Abstract classes
- [ ] Method overloading and overriding
- [ ] Access modifiers
- [ ] Static and instance members
- [ ] Constructors
- [ ] Records
- [ ] Enums
- [ ] Sealed classes
- [ ] Annotations
- [ ] Reflection basics
- [ ] Exception handling
- [ ] Custom exceptions
- [ ] Collections
- [ ] Generics
- [ ] `Comparable` and `Comparator`
- [ ] Lambda expressions
- [ ] Stream API
- [ ] `Optional`
- [ ] Date and time API
- [ ] File handling
- [ ] Multithreading basics
- [ ] `CompletableFuture`
- [ ] Virtual threads
- [ ] JVM memory basics

## 2. SQL and Database Fundamentals 🟢

- [ ] Relational database concepts
- [ ] Tables, rows and columns
- [ ] Primary keys
- [ ] Foreign keys
- [ ] Unique constraints
- [ ] Check constraints
- [ ] `SELECT`
- [ ] `INSERT`
- [ ] `UPDATE`
- [ ] `DELETE`
- [ ] Joins
- [ ] Subqueries
- [ ] Aggregate functions
- [ ] Grouping
- [ ] Indexes
- [ ] Normalization
- [ ] Transactions
- [ ] ACID properties
- [ ] Isolation levels
- [ ] Locking
- [ ] Deadlocks
- [ ] Query execution plans
- [ ] Pagination
- [ ] PostgreSQL or MySQL

## 3. Web Fundamentals 🟢

- [ ] Client-server architecture
- [ ] HTTP and HTTPS
- [ ] HTTP request and response
- [ ] HTTP methods
- [ ] Status codes
- [ ] Headers
- [ ] Request body
- [ ] Path variables
- [ ] Query parameters
- [ ] Cookies
- [ ] Sessions
- [ ] JSON
- [ ] REST
- [ ] CORS
- [ ] Same-origin policy
- [ ] Authentication
- [ ] Authorization
- [ ] Stateless versus stateful applications

## 4. Development Tools 🟢

- [ ] IntelliJ IDEA
- [ ] Git
- [ ] GitHub
- [ ] Maven
- [ ] Gradle basics
- [ ] Postman
- [ ] `curl`
- [ ] Docker basics
- [ ] Database client
- [ ] Linux command line

---

# Phase 1 — Spring Framework Fundamentals

Spring Framework provides the underlying programming and configuration model for dependency injection, transactions, web applications, data access and messaging. Spring Boot builds on top of these capabilities. ([Home][2])

## 5. Understanding Spring

- [ ] What Spring Framework is
- [ ] Problems Spring solves
- [ ] Spring ecosystem overview
- [ ] Spring Framework versus Spring Boot
- [ ] Framework versus library
- [ ] Inversion of Control
- [ ] Dependency Injection
- [ ] Dependency Inversion Principle
- [ ] Convention over configuration
- [ ] Plain Old Java Objects
- [ ] Loose coupling
- [ ] Testable architecture

## 6. Spring IoC Container 🟢

- [ ] `ApplicationContext`
- [ ] `BeanFactory`
- [ ] Spring beans
- [ ] Bean definitions
- [ ] Bean creation process
- [ ] Component scanning
- [ ] Dependency resolution
- [ ] Bean initialization
- [ ] Bean destruction
- [ ] Container startup lifecycle

## 7. Dependency Injection 🟢

- [ ] Constructor injection
- [ ] Setter injection
- [ ] Field injection
- [ ] Why constructor injection is preferred
- [ ] Required dependencies
- [ ] Optional dependencies
- [ ] Circular dependencies
- [ ] Dependency ambiguity
- [ ] Multiple implementations
- [ ] Dependency injection into collections

### Important annotations

- [ ] `@Component`
- [ ] `@Service`
- [ ] `@Repository`
- [ ] `@Controller`
- [ ] `@RestController`
- [ ] `@Autowired`
- [ ] `@Qualifier`
- [ ] `@Primary`
- [ ] `@Value`

## 8. Spring Configuration 🟢

- [ ] Java-based configuration
- [ ] Annotation-based configuration
- [ ] XML configuration concepts
- [ ] `@Configuration`
- [ ] `@Bean`
- [ ] `@ComponentScan`
- [ ] `@Import`
- [ ] `@PropertySource`
- [ ] Configuration composition
- [ ] Full and lite configuration modes
- [ ] Conditional bean registration

## 9. Bean Scope and Lifecycle 🟢

- [ ] Singleton scope
- [ ] Prototype scope
- [ ] Request scope
- [ ] Session scope
- [ ] Application scope
- [ ] WebSocket scope
- [ ] Lazy initialization
- [ ] `@Lazy`
- [ ] `@Scope`
- [ ] `@PostConstruct`
- [ ] `@PreDestroy`
- [ ] `InitializingBean`
- [ ] `DisposableBean`
- [ ] Bean post-processors
- [ ] Factory beans

## 10. Spring Environment and Profiles 🟢

- [ ] `Environment`
- [ ] Property sources
- [ ] Profile-based configuration
- [ ] `@Profile`
- [ ] Development profile
- [ ] Test profile
- [ ] Staging profile
- [ ] Production profile
- [ ] Environment variables
- [ ] External configuration
- [ ] Secret-handling principles

## 11. Spring Expression Language 🟡

- [ ] SpEL syntax
- [ ] Accessing properties
- [ ] Calling methods
- [ ] Collection filtering
- [ ] Conditional expressions
- [ ] SpEL in annotations
- [ ] Security risks of untrusted expressions

## 12. Aspect-Oriented Programming 🟡

- [ ] Cross-cutting concerns
- [ ] Aspect
- [ ] Advice
- [ ] Join point
- [ ] Pointcut
- [ ] Proxy
- [ ] JDK dynamic proxy
- [ ] CGLIB proxy
- [ ] Self-invocation problem
- [ ] Proxy limitations

### Advice annotations

- [ ] `@Aspect`
- [ ] `@Before`
- [ ] `@After`
- [ ] `@AfterReturning`
- [ ] `@AfterThrowing`
- [ ] `@Around`

### Common AOP use cases

- Logging
- Auditing
- Authorization
- Performance measurement
- Transaction management
- Retry handling

---

# Phase 2 — Spring Boot Fundamentals

Spring Boot is designed for standalone, production-grade Spring applications. It provides starter dependencies, embedded servers, auto-configuration, externalized configuration and production monitoring capabilities. ([Home][3])

## 13. Starting a Spring Boot Application 🟢

- [ ] Spring Initializr
- [ ] Project metadata
- [ ] Group ID
- [ ] Artifact ID
- [ ] Package structure
- [ ] Choosing dependencies
- [ ] Maven project structure
- [ ] Gradle project structure
- [ ] Main application class
- [ ] `@SpringBootApplication`
- [ ] Running from IDE
- [ ] Running with Maven
- [ ] Running with Gradle
- [ ] Running an executable JAR

## 14. Understanding `@SpringBootApplication` 🟢

Understand that it combines concepts related to:

- [ ] Spring configuration
- [ ] Component scanning
- [ ] Auto-configuration

Also learn:

- [ ] `@SpringBootConfiguration`
- [ ] `@EnableAutoConfiguration`
- [ ] `@ComponentScan`
- [ ] Excluding auto-configuration
- [ ] Auto-configuration conditions
- [ ] Auto-configuration reports

## 15. Starter Dependencies 🟢

- [ ] What a starter is
- [ ] Dependency management
- [ ] Spring Boot BOM
- [ ] Transitive dependencies
- [ ] Version alignment
- [ ] Excluding dependencies
- [ ] Replacing default dependencies

Important starters include:

- [ ] Spring Web MVC
- [ ] Spring Data JPA
- [ ] Spring Validation
- [ ] Spring Security
- [ ] Spring Actuator
- [ ] Spring Test
- [ ] Spring WebFlux
- [ ] Spring Cache
- [ ] Spring Batch
- [ ] OAuth2 Resource Server
- [ ] OAuth2 Client

## 16. Embedded Web Servers 🟢

- [ ] Embedded server concept
- [ ] Tomcat
- [ ] Jetty
- [ ] Server port
- [ ] Context path
- [ ] Thread configuration
- [ ] Compression
- [ ] Access logs
- [ ] HTTPS configuration
- [ ] Graceful shutdown

## 17. Application Configuration 🟢

- [ ] `application.properties`
- [ ] `application.yml`
- [ ] YAML syntax
- [ ] Configuration precedence
- [ ] Environment variables
- [ ] Command-line properties
- [ ] Profile-specific files
- [ ] Configuration trees
- [ ] Default values
- [ ] Placeholder resolution

## 18. Type-Safe Configuration 🟢

- [ ] `@ConfigurationProperties`
- [ ] Configuration records
- [ ] Nested configuration
- [ ] Configuration validation
- [ ] Metadata generation
- [ ] `@EnableConfigurationProperties`
- [ ] Constructor binding
- [ ] Avoiding excessive `@Value`

## 19. Application Startup 🟡

- [ ] `CommandLineRunner`
- [ ] `ApplicationRunner`
- [ ] Application events
- [ ] Startup listeners
- [ ] Startup failure analysis
- [ ] Initialization order
- [ ] Startup performance
- [ ] Lazy initialization

## 20. Logging 🟢

- [ ] SLF4J
- [ ] Logback
- [ ] Logger creation
- [ ] Log levels
- [ ] Parameterized logging
- [ ] Structured logging
- [ ] JSON logs
- [ ] Correlation IDs
- [ ] Request IDs
- [ ] Log rotation
- [ ] Profile-specific logging
- [ ] Sensitive-data masking
- [ ] Why passwords and tokens must never be logged

---

# Phase 3 — Spring MVC and REST API Development

## 21. Spring MVC Architecture 🟢

- [ ] Front Controller pattern
- [ ] `DispatcherServlet`
- [ ] Handler mapping
- [ ] Handler adapter
- [ ] Controller
- [ ] Argument resolver
- [ ] Return-value handler
- [ ] Message converter
- [ ] Exception resolver
- [ ] View resolver
- [ ] Servlet filter
- [ ] Spring interceptor

## 22. Building REST Controllers 🟢

- [ ] `@RestController`
- [ ] `@Controller`
- [ ] `@RequestMapping`
- [ ] `@GetMapping`
- [ ] `@PostMapping`
- [ ] `@PutMapping`
- [ ] `@PatchMapping`
- [ ] `@DeleteMapping`

## 23. Request Handling 🟢

- [ ] `@PathVariable`
- [ ] `@RequestParam`
- [ ] `@RequestHeader`
- [ ] `@RequestBody`
- [ ] `@CookieValue`
- [ ] `@RequestPart`
- [ ] `HttpServletRequest`
- [ ] `HttpServletResponse`
- [ ] Multipart requests
- [ ] Form data
- [ ] JSON requests

## 24. Response Handling 🟢

- [ ] Returning POJOs
- [ ] JSON serialization
- [ ] `ResponseEntity`
- [ ] HTTP headers
- [ ] Status codes
- [ ] Empty responses
- [ ] File downloads
- [ ] Streaming responses
- [ ] Content negotiation
- [ ] Media types

## 25. Jackson JSON Processing 🟢

- [ ] Serialization
- [ ] Deserialization
- [ ] Object mapper
- [ ] Property naming
- [ ] Date formatting
- [ ] Ignoring fields
- [ ] Custom serializers
- [ ] Custom deserializers
- [ ] Unknown-property handling
- [ ] JSON views
- [ ] Circular-reference problems
- [ ] Avoiding direct entity serialization

Important annotations:

- [ ] `@JsonProperty`
- [ ] `@JsonIgnore`
- [ ] `@JsonFormat`
- [ ] `@JsonInclude`
- [ ] `@JsonCreator`
- [ ] `@JsonValue`

## 26. DTO Design 🟢

- [ ] Request DTO
- [ ] Response DTO
- [ ] Create DTO
- [ ] Update DTO
- [ ] Patch DTO
- [ ] Search criteria DTO
- [ ] Mapping entities to DTOs
- [ ] Manual mapping
- [ ] MapStruct
- [ ] Preventing mass-assignment vulnerabilities
- [ ] Avoiding exposing database entities

## 27. REST API Design 🟢

- [ ] Resource-oriented URLs
- [ ] HTTP-method semantics
- [ ] Idempotency
- [ ] Safe methods
- [ ] Correct status codes
- [ ] Standard response bodies
- [ ] Error response contracts
- [ ] Pagination
- [ ] Sorting
- [ ] Filtering
- [ ] Searching
- [ ] Field selection
- [ ] API versioning
- [ ] Idempotency keys
- [ ] Optimistic concurrency
- [ ] ETags
- [ ] Conditional requests
- [ ] Rate limiting
- [ ] API deprecation strategy

## 28. Pagination and Sorting 🟢

- [ ] `Pageable`
- [ ] `Page`
- [ ] `Slice`
- [ ] `Sort`
- [ ] Page-number pagination
- [ ] Offset pagination
- [ ] Cursor pagination
- [ ] Stable sorting
- [ ] Large-table pagination problems

## 29. File Handling 🟡

- [ ] Multipart upload
- [ ] Upload validation
- [ ] File-size limits
- [ ] MIME-type validation
- [ ] File-name sanitization
- [ ] Local file storage
- [ ] Object storage
- [ ] Streaming download
- [ ] Pre-signed URLs
- [ ] Malware-scanning architecture

## 30. Filters and Interceptors 🟡

- [ ] Servlet filters
- [ ] `OncePerRequestFilter`
- [ ] Handler interceptors
- [ ] Request logging
- [ ] Correlation IDs
- [ ] Tenant resolution
- [ ] Locale resolution
- [ ] Authentication filters
- [ ] Filter ordering
- [ ] Interceptor ordering
- [ ] Filter versus interceptor versus AOP

---

# Phase 4 — Validation and Error Handling

## 31. Bean Validation 🟢

- [ ] Jakarta Validation
- [ ] Validating request bodies
- [ ] Validating parameters
- [ ] Validating configuration
- [ ] Nested validation
- [ ] Validation groups
- [ ] Custom validators
- [ ] Cross-field validation
- [ ] Method validation

Important annotations:

- [ ] `@Valid`
- [ ] `@Validated`
- [ ] `@NotNull`
- [ ] `@NotBlank`
- [ ] `@NotEmpty`
- [ ] `@Size`
- [ ] `@Min`
- [ ] `@Max`
- [ ] `@Positive`
- [ ] `@Negative`
- [ ] `@Email`
- [ ] `@Pattern`
- [ ] `@Past`
- [ ] `@Future`

## 32. Exception Handling 🟢

- [ ] Domain exceptions
- [ ] Validation exceptions
- [ ] Infrastructure exceptions
- [ ] Database exceptions
- [ ] Authentication exceptions
- [ ] Authorization exceptions
- [ ] Error-code design
- [ ] Error-message design
- [ ] Avoiding stack-trace exposure

Important components:

- [ ] `@ExceptionHandler`
- [ ] `@ControllerAdvice`
- [ ] `@RestControllerAdvice`
- [ ] `ResponseStatusException`
- [ ] Problem Details
- [ ] Standardized API errors
- [ ] Global exception handling
- [ ] Internationalized validation messages

---

# Phase 5 — Spring Data, JPA and Hibernate

Spring Data provides a consistent programming model across relational and non-relational data stores. ([Home][4])

## 33. Persistence Foundations 🟢

Understand these separately:

- [ ] JDBC
- [ ] JPA specification
- [ ] Hibernate implementation
- [ ] Spring Data
- [ ] Spring Data JPA
- [ ] Repository pattern
- [ ] DAO pattern
- [ ] Persistence context
- [ ] Entity manager

## 34. Entity Mapping 🟢

- [ ] `@Entity`
- [ ] `@Table`
- [ ] `@Id`
- [ ] `@GeneratedValue`
- [ ] `@Column`
- [ ] `@Transient`
- [ ] `@Enumerated`
- [ ] `@Lob`
- [ ] `@Embeddable`
- [ ] `@Embedded`
- [ ] Composite keys
- [ ] UUID identifiers
- [ ] Database-generated identifiers

## 35. Entity Relationships 🟢

- [ ] One-to-one
- [ ] One-to-many
- [ ] Many-to-one
- [ ] Many-to-many
- [ ] Owning side
- [ ] Inverse side
- [ ] `mappedBy`
- [ ] Join columns
- [ ] Join tables
- [ ] Bidirectional associations
- [ ] Unidirectional associations
- [ ] Relationship helper methods

## 36. Fetching and Cascading 🟢

- [ ] Lazy loading
- [ ] Eager loading
- [ ] Cascade types
- [ ] Orphan removal
- [ ] Entity graphs
- [ ] Fetch joins
- [ ] N+1 query problem
- [ ] Multiple-bag fetch problems
- [ ] Lazy initialization exception
- [ ] Open Session in View
- [ ] Why disabling OSIV is often appropriate for APIs

## 37. Entity Lifecycle 🟢

- [ ] Transient state
- [ ] Managed state
- [ ] Detached state
- [ ] Removed state
- [ ] Dirty checking
- [ ] Flush
- [ ] Clear
- [ ] Refresh
- [ ] Merge
- [ ] Persistence-context scope

## 38. Spring Data Repositories 🟢

- [ ] `Repository`
- [ ] `CrudRepository`
- [ ] `PagingAndSortingRepository`
- [ ] `JpaRepository`
- [ ] Derived query methods
- [ ] Query naming conventions
- [ ] Custom repository interfaces
- [ ] Custom repository implementations

## 39. Querying Data 🟢

- [ ] Derived queries
- [ ] JPQL
- [ ] Native SQL
- [ ] Named queries
- [ ] Criteria API
- [ ] Specifications
- [ ] Query by Example
- [ ] Projections
- [ ] Interface projections
- [ ] DTO projections
- [ ] Dynamic projections
- [ ] Pagination queries
- [ ] Count-query optimization

## 40. Transactions 🟢

- [ ] Database transaction
- [ ] Spring transaction abstraction
- [ ] `@Transactional`
- [ ] Transaction boundaries
- [ ] Propagation
- [ ] Isolation
- [ ] Read-only transactions
- [ ] Rollback rules
- [ ] Checked versus unchecked exceptions
- [ ] Self-invocation problem
- [ ] Transaction timeout
- [ ] Programmatic transactions
- [ ] Distributed-transaction problems

## 41. Concurrency Control 🟡

- [ ] Lost updates
- [ ] Optimistic locking
- [ ] `@Version`
- [ ] Pessimistic locking
- [ ] Lock modes
- [ ] Database isolation
- [ ] Retry after optimistic-lock failure
- [ ] Idempotent write operations

## 42. Auditing 🟢

- [ ] Created timestamp
- [ ] Updated timestamp
- [ ] Created by
- [ ] Updated by
- [ ] Soft deletion
- [ ] Audit tables
- [ ] Hibernate Envers
- [ ] Business-event auditing
- [ ] Security audit trails

## 43. Database Migrations 🟢

Learn one:

- [ ] Flyway
- [ ] Liquibase

Topics:

- [ ] Versioned migrations
- [ ] Repeatable migrations
- [ ] Migration checksums
- [ ] Roll-forward strategy
- [ ] Schema baseline
- [ ] Seed data
- [ ] Environment-specific migrations
- [ ] Backward-compatible schema changes
- [ ] Zero-downtime migrations

## 44. Connection Pooling 🟢

- [ ] HikariCP
- [ ] Minimum connections
- [ ] Maximum pool size
- [ ] Connection timeout
- [ ] Idle timeout
- [ ] Maximum lifetime
- [ ] Connection leaks
- [ ] Pool exhaustion
- [ ] Monitoring pool metrics
- [ ] Correct pool-sizing principles

## 45. NoSQL with Spring Data 🟡

Learn based on project requirements:

- [ ] MongoDB
- [ ] Redis
- [ ] Elasticsearch or OpenSearch
- [ ] Neo4j
- [ ] Cassandra

Understand:

- [ ] Document databases
- [ ] Key-value stores
- [ ] Search engines
- [ ] Graph databases
- [ ] Eventual consistency
- [ ] Data-modeling differences
- [ ] When not to use a relational database

---

# Phase 6 — Spring Security

Spring Security provides authentication, authorization and protection against common attacks. Its servlet security architecture is built around filters and a security filter chain. ([Home][5])

## 46. Security Foundations 🟢

- [ ] Authentication
- [ ] Authorization
- [ ] Principal
- [ ] Credentials
- [ ] Authority
- [ ] Role
- [ ] Permission
- [ ] Security context
- [ ] Least privilege
- [ ] Defense in depth
- [ ] Zero-trust principles
- [ ] Threat modeling

## 47. Spring Security Architecture 🟢

- [ ] `SecurityFilterChain`
- [ ] `FilterChainProxy`
- [ ] `DelegatingFilterProxy`
- [ ] `SecurityContext`
- [ ] `SecurityContextHolder`
- [ ] `Authentication`
- [ ] `AuthenticationManager`
- [ ] `ProviderManager`
- [ ] `AuthenticationProvider`
- [ ] `UserDetails`
- [ ] `UserDetailsService`
- [ ] `GrantedAuthority`
- [ ] `PasswordEncoder`

## 48. Password Authentication 🟢

- [ ] Form login
- [ ] HTTP Basic
- [ ] Database-backed users
- [ ] Custom `UserDetailsService`
- [ ] Custom authentication provider
- [ ] Password hashing
- [ ] BCrypt
- [ ] Argon2
- [ ] Password-upgrade strategy
- [ ] Account locking
- [ ] Failed-login tracking
- [ ] Password-reset flow
- [ ] Email-verification flow
- [ ] Multi-factor authentication concepts

## 49. Authorization 🟢

- [ ] Request-based authorization
- [ ] Role-based access control
- [ ] Permission-based access control
- [ ] Ownership-based authorization
- [ ] Method security
- [ ] Domain-object security concepts

Important annotations:

- [ ] `@EnableMethodSecurity`
- [ ] `@PreAuthorize`
- [ ] `@PostAuthorize`
- [ ] `@PreFilter`
- [ ] `@PostFilter`

Spring Security supports authorization at web-request and method levels through authorization managers and method annotations. ([Home][6])

## 50. Session-Based Security 🟢

- [ ] HTTP session
- [ ] Session fixation
- [ ] Session expiration
- [ ] Concurrent-session control
- [ ] Remember-me authentication
- [ ] Logout
- [ ] Secure cookies
- [ ] HTTP-only cookies
- [ ] SameSite cookies
- [ ] Distributed sessions
- [ ] Spring Session
- [ ] Redis-backed sessions

## 51. Token-Based Security 🟢

- [ ] Bearer tokens
- [ ] JWT structure
- [ ] Header, payload and signature
- [ ] Claims
- [ ] Access token
- [ ] Refresh token
- [ ] Token expiration
- [ ] Token rotation
- [ ] Token revocation
- [ ] Signing keys
- [ ] Symmetric signing
- [ ] Asymmetric signing
- [ ] Key rotation
- [ ] Token validation
- [ ] Stateless security
- [ ] JWT security limitations
- [ ] Why JWT is not automatically the best choice

## 52. OAuth 2.0 and OpenID Connect 🟢

- [ ] Resource owner
- [ ] Client
- [ ] Authorization server
- [ ] Resource server
- [ ] Authorization Code flow
- [ ] PKCE
- [ ] Client Credentials flow
- [ ] Device Authorization flow
- [ ] Scope
- [ ] Consent
- [ ] Access token
- [ ] Refresh token
- [ ] ID token
- [ ] OIDC discovery
- [ ] JWK set
- [ ] OAuth2 client
- [ ] OAuth2 resource server
- [ ] Social login
- [ ] Identity providers

## 53. Spring Authorization Server 🟡

- [ ] Building an authorization server
- [ ] Client registration
- [ ] Token endpoints
- [ ] Authorization endpoint
- [ ] Consent
- [ ] OIDC support
- [ ] Token customization
- [ ] Key management
- [ ] User federation
- [ ] When to use an external identity provider instead

## 54. Common Web Attacks 🟢

- [ ] CSRF
- [ ] XSS
- [ ] SQL injection
- [ ] Command injection
- [ ] Path traversal
- [ ] Open redirects
- [ ] Clickjacking
- [ ] CORS misconfiguration
- [ ] Session fixation
- [ ] Credential stuffing
- [ ] Brute-force attacks
- [ ] Insecure direct-object references
- [ ] Server-side request forgery
- [ ] Mass assignment
- [ ] Sensitive-data exposure

## 55. Security Headers 🟢

- [ ] Content Security Policy
- [ ] HSTS
- [ ] `X-Content-Type-Options`
- [ ] Frame options
- [ ] Referrer policy
- [ ] Permissions policy
- [ ] Cache-control for sensitive responses

## 56. API Security 🟢

- [ ] Input validation
- [ ] Output encoding
- [ ] Rate limiting
- [ ] Request-size limits
- [ ] File-upload protection
- [ ] Secret management
- [ ] API keys
- [ ] Webhook signatures
- [ ] Replay-attack prevention
- [ ] Idempotency
- [ ] Audit logs
- [ ] Security-event monitoring

---

# Phase 7 — Testing Spring Applications

## 57. Testing Foundations 🟢

- [ ] Unit testing
- [ ] Integration testing
- [ ] Component testing
- [ ] End-to-end testing
- [ ] Contract testing
- [ ] Test pyramid
- [ ] Test isolation
- [ ] Deterministic tests
- [ ] Test fixtures
- [ ] Test-data builders

## 58. JUnit and Mockito 🟢

- [ ] JUnit lifecycle
- [ ] Assertions
- [ ] Parameterized tests
- [ ] Nested tests
- [ ] Exception tests
- [ ] Timeouts
- [ ] Mockito mocks
- [ ] Stubs
- [ ] Spies
- [ ] Argument captors
- [ ] Verification
- [ ] Mocking static methods only when necessary
- [ ] Avoiding excessive mocking

## 59. Spring Test Context 🟢

- [ ] `@SpringBootTest`
- [ ] `@ContextConfiguration`
- [ ] `@ActiveProfiles`
- [ ] `@TestPropertySource`
- [ ] Context caching
- [ ] Transactional tests
- [ ] Application-context reuse
- [ ] Test configuration

## 60. Test Slices 🟢

- [ ] Controller tests
- [ ] Repository tests
- [ ] JSON tests
- [ ] JDBC tests
- [ ] JPA tests
- [ ] REST-client tests
- [ ] Security tests

Common annotations:

- [ ] `@WebMvcTest`
- [ ] `@DataJpaTest`
- [ ] `@JsonTest`
- [ ] `@JdbcTest`
- [ ] `@RestClientTest`

## 61. API Testing 🟢

- [ ] MockMvc
- [ ] REST Assured
- [ ] WebTestClient
- [ ] Request assertions
- [ ] Response assertions
- [ ] JSON-path assertions
- [ ] Authentication testing
- [ ] Authorization testing
- [ ] Validation-error testing
- [ ] Exception-handler testing

## 62. Testcontainers 🟢

- [ ] Real database containers
- [ ] PostgreSQL container
- [ ] MySQL container
- [ ] MongoDB container
- [ ] Redis container
- [ ] Kafka container
- [ ] RabbitMQ container
- [ ] LocalStack
- [ ] Container reuse
- [ ] Dynamic properties
- [ ] Spring Boot service connections

## 63. Database Testing 🟢

- [ ] Repository queries
- [ ] Database constraints
- [ ] Migration testing
- [ ] Transaction behavior
- [ ] Locking behavior
- [ ] Native-query testing
- [ ] Avoiding H2-only assumptions
- [ ] Testing against the production database engine

## 64. Contract Testing 🟡

- [ ] Consumer-driven contracts
- [ ] Provider contracts
- [ ] Spring Cloud Contract
- [ ] Pact concepts
- [ ] API compatibility
- [ ] Schema evolution
- [ ] Backward compatibility

## 65. Documentation Testing 🟡

- [ ] OpenAPI documentation
- [ ] Swagger UI
- [ ] Spring REST Docs
- [ ] Generated request snippets
- [ ] Generated response snippets
- [ ] Keeping documentation synchronized with tests

---

# Phase 8 — Production-Ready Spring Boot

Spring Boot Actuator provides production monitoring and management facilities such as health, auditing and metrics. Spring Boot observability focuses on logs, metrics and traces, using Micrometer for metrics and observations. ([Home][7])

## 66. Spring Boot Actuator 🟢

- [ ] Actuator starter
- [ ] Health endpoint
- [ ] Info endpoint
- [ ] Metrics endpoint
- [ ] Loggers endpoint
- [ ] Environment endpoint
- [ ] Beans endpoint
- [ ] Mappings endpoint
- [ ] Thread-dump endpoint
- [ ] Heap-dump endpoint
- [ ] Scheduled-tasks endpoint
- [ ] Custom actuator endpoints
- [ ] Endpoint exposure
- [ ] Endpoint security

Actuator endpoints can expose application health and management information over HTTP or JMX, but access must be controlled carefully. ([Home][8])

## 67. Health Checks 🟢

- [ ] Liveness
- [ ] Readiness
- [ ] Startup probes
- [ ] Database health
- [ ] Redis health
- [ ] Disk-space health
- [ ] Message-broker health
- [ ] Custom health indicators
- [ ] Health groups
- [ ] Preventing sensitive-details exposure

## 68. Metrics 🟢

- [ ] Micrometer
- [ ] Counters
- [ ] Gauges
- [ ] Timers
- [ ] Distribution summaries
- [ ] Tags
- [ ] High-cardinality risks
- [ ] Business metrics
- [ ] JVM metrics
- [ ] HTTP metrics
- [ ] Database-pool metrics
- [ ] Cache metrics
- [ ] Kafka metrics
- [ ] Prometheus
- [ ] Grafana

Spring Boot can automatically instrument HTTP requests, database pools, caches and other integrations through Micrometer. ([Home][9])

## 69. Distributed Tracing 🟢

- [ ] Trace ID
- [ ] Span ID
- [ ] Parent span
- [ ] Sampling
- [ ] Baggage
- [ ] Context propagation
- [ ] OpenTelemetry
- [ ] OTLP
- [ ] Zipkin
- [ ] Trace-log correlation
- [ ] Cross-service tracing

Spring Boot provides Micrometer Tracing integration and supports OpenTelemetry/OTLP and Zipkin-related tracing configurations. ([Home][10])

## 70. Observability 🟢

Understand the three pillars:

1. Logs
2. Metrics
3. Traces

Also learn:

- [ ] Service-level indicators
- [ ] Service-level objectives
- [ ] Error budgets
- [ ] Alerting
- [ ] Dashboards
- [ ] Golden signals
- [ ] Latency percentiles
- [ ] Error-rate monitoring
- [ ] Saturation monitoring
- [ ] Business observability

## 71. Resilience 🟢

- [ ] Timeouts
- [ ] Retries
- [ ] Exponential backoff
- [ ] Jitter
- [ ] Circuit breakers
- [ ] Bulkheads
- [ ] Rate limiters
- [ ] Fallbacks
- [ ] Retry storms
- [ ] Cascading failures
- [ ] Load shedding
- [ ] Graceful degradation
- [ ] Resilience4j

## 72. Graceful Shutdown 🟢

- [ ] Stop accepting new requests
- [ ] Finish active requests
- [ ] Stop message consumers
- [ ] Drain connections
- [ ] Close database pools
- [ ] Kubernetes termination grace period
- [ ] Shutdown hooks
- [ ] Deployment safety

---

# Phase 9 — Calling External Services

## 73. HTTP Clients 🟢

Learn the modern approaches:

- [ ] `RestClient`
- [ ] `WebClient`
- [ ] HTTP interface clients
- [ ] `RestTemplate` for legacy maintenance

Topics:

- [ ] GET requests
- [ ] POST requests
- [ ] Headers
- [ ] Authentication
- [ ] Query parameters
- [ ] Request bodies
- [ ] Error handling
- [ ] Timeouts
- [ ] Connection pooling
- [ ] Retries
- [ ] Logging
- [ ] Streaming responses
- [ ] Multipart requests

## 74. API Client Reliability 🟢

- [ ] Connect timeout
- [ ] Read timeout
- [ ] Response timeout
- [ ] Pool timeout
- [ ] Retry classification
- [ ] Retry only safe operations
- [ ] Circuit breakers
- [ ] Idempotency
- [ ] Response validation
- [ ] Schema changes
- [ ] Fallback behavior
- [ ] Mock server testing

## 75. Webhooks 🟡

- [ ] Webhook endpoint
- [ ] Signature verification
- [ ] Timestamp verification
- [ ] Replay protection
- [ ] Idempotent processing
- [ ] Retry handling
- [ ] Dead-letter storage
- [ ] Delivery auditing

---

# Phase 10 — Caching

## 76. Caching Fundamentals 🟢

- [ ] Cache hit
- [ ] Cache miss
- [ ] Hit ratio
- [ ] Cache-aside
- [ ] Read-through
- [ ] Write-through
- [ ] Write-behind
- [ ] Time-to-live
- [ ] Eviction
- [ ] Cache invalidation
- [ ] Stale data
- [ ] Cache stampede
- [ ] Cache penetration
- [ ] Cache avalanche

## 77. Spring Cache 🟢

- [ ] `@EnableCaching`
- [ ] `@Cacheable`
- [ ] `@CachePut`
- [ ] `@CacheEvict`
- [ ] Cache keys
- [ ] Conditional caching
- [ ] Multiple caches
- [ ] Cache managers
- [ ] Self-invocation limitation
- [ ] Transactional caching concerns

## 78. Cache Implementations 🟡

- [ ] Caffeine
- [ ] Redis
- [ ] Local versus distributed cache
- [ ] Serialization
- [ ] Key naming
- [ ] Key versioning
- [ ] Multi-tenant cache isolation
- [ ] Distributed-lock concepts

---

# Phase 11 — Messaging and Event-Driven Architecture

## 79. Messaging Fundamentals 🟢

- [ ] Producer
- [ ] Consumer
- [ ] Queue
- [ ] Topic
- [ ] Message
- [ ] Event
- [ ] Command
- [ ] Consumer group
- [ ] Partition
- [ ] Ordering
- [ ] Offset
- [ ] Acknowledgement
- [ ] Delivery guarantees
- [ ] At-most-once
- [ ] At-least-once
- [ ] Effectively-once processing

## 80. Kafka 🟡

- [ ] Kafka broker
- [ ] Topic
- [ ] Partition
- [ ] Producer
- [ ] Consumer
- [ ] Consumer group
- [ ] Offset management
- [ ] Serialization
- [ ] Deserialization
- [ ] Message keys
- [ ] Partition strategy
- [ ] Retry topics
- [ ] Dead-letter topics
- [ ] Idempotent consumers
- [ ] Kafka transactions
- [ ] Schema Registry
- [ ] Avro, JSON and Protobuf
- [ ] Spring for Apache Kafka

## 81. RabbitMQ 🟡

- [ ] Exchange
- [ ] Queue
- [ ] Binding
- [ ] Routing key
- [ ] Direct exchange
- [ ] Topic exchange
- [ ] Fanout exchange
- [ ] Headers exchange
- [ ] Publisher confirmation
- [ ] Consumer acknowledgement
- [ ] Dead-letter exchange
- [ ] Retry queues
- [ ] Spring AMQP

## 82. Event-Processing Patterns 🟢

- [ ] Idempotent consumer
- [ ] Transactional outbox
- [ ] Inbox pattern
- [ ] Dead-letter queue
- [ ] Retry with backoff
- [ ] Event versioning
- [ ] Schema evolution
- [ ] Poison messages
- [ ] Deduplication
- [ ] Eventual consistency
- [ ] Compensating actions

## 83. Spring Cloud Stream 🟡

Spring Cloud Stream provides abstractions for scalable event-driven microservices connected to shared messaging systems. ([Home][11])

Learn:

- [ ] Binder abstraction
- [ ] Functional programming model
- [ ] Supplier
- [ ] Function
- [ ] Consumer
- [ ] Bindings
- [ ] Consumer groups
- [ ] Partitioning
- [ ] Error channels
- [ ] Kafka binder
- [ ] Rabbit binder

---

# Phase 12 — Scheduling and Batch Processing

## 84. Scheduling 🟢

- [ ] `@EnableScheduling`
- [ ] `@Scheduled`
- [ ] Fixed rate
- [ ] Fixed delay
- [ ] Cron expressions
- [ ] Time zones
- [ ] Distributed scheduling problems
- [ ] Preventing duplicate execution
- [ ] ShedLock
- [ ] Quartz Scheduler
- [ ] Job retries
- [ ] Job monitoring

## 85. Asynchronous Execution 🟡

- [ ] `@EnableAsync`
- [ ] `@Async`
- [ ] Task executor
- [ ] Thread pools
- [ ] Exception handling
- [ ] Context propagation
- [ ] Transaction boundaries
- [ ] Self-invocation limitation
- [ ] Virtual-thread executors
- [ ] When messaging is better than `@Async`

## 86. Spring Batch 🟡

Spring Batch is intended for high-volume processing and supports chunk processing, transactions, restart, retry, skip and partitioning. ([Home][12])

Learn:

- [ ] Job
- [ ] Step
- [ ] Job instance
- [ ] Job execution
- [ ] Step execution
- [ ] Job parameters
- [ ] Item reader
- [ ] Item processor
- [ ] Item writer
- [ ] Chunk-oriented processing
- [ ] Tasklet
- [ ] Skip
- [ ] Retry
- [ ] Restart
- [ ] Partitioning
- [ ] Parallel steps
- [ ] Job repository
- [ ] Job launcher
- [ ] Job monitoring

---

# Phase 13 — Reactive Spring

Reactive programming is useful for specific workloads. It should not automatically replace Spring MVC.

## 87. Reactive Foundations 🟡

- [ ] Blocking versus non-blocking
- [ ] Synchronous versus asynchronous
- [ ] Event loops
- [ ] Backpressure
- [ ] Reactive Streams specification
- [ ] Publisher
- [ ] Subscriber
- [ ] Subscription
- [ ] Operator chains

## 88. Project Reactor 🟡

- [ ] `Mono`
- [ ] `Flux`
- [ ] `map`
- [ ] `flatMap`
- [ ] `filter`
- [ ] `zip`
- [ ] `concat`
- [ ] Error handling
- [ ] Retry
- [ ] Schedulers
- [ ] Hot and cold publishers
- [ ] Context propagation
- [ ] Blocking detection
- [ ] StepVerifier

## 89. Spring WebFlux 🟡

- [ ] Reactive controllers
- [ ] Functional endpoints
- [ ] WebClient
- [ ] Reactive filters
- [ ] Reactive security
- [ ] Reactive database access
- [ ] R2DBC
- [ ] Server-sent events
- [ ] Streaming
- [ ] Backpressure limitations across HTTP

## 90. When to Use WebFlux

Use it when:

- High numbers of concurrent I/O operations are expected
- Downstream dependencies are non-blocking
- Streaming is central to the system
- The team understands reactive debugging and operations

Avoid it when:

- The application is mostly traditional CRUD
- JDBC is the primary data-access method
- The team is unfamiliar with reactive programming
- Blocking libraries dominate the application

---

# Phase 14 — Real-Time Communication

## 91. WebSocket 🟡

- [ ] WebSocket handshake
- [ ] Full-duplex communication
- [ ] Native WebSocket
- [ ] STOMP
- [ ] Message broker
- [ ] Topics
- [ ] User destinations
- [ ] WebSocket authentication
- [ ] WebSocket authorization
- [ ] Horizontal scaling
- [ ] Redis or broker-based fan-out

## 92. Server-Sent Events 🟡

- [ ] SSE connection
- [ ] Event stream
- [ ] Reconnection
- [ ] Event IDs
- [ ] Heartbeats
- [ ] Streaming notifications
- [ ] SSE versus WebSocket

---

# Phase 15 — Alternative API Technologies

## 93. GraphQL 🔵

Spring for GraphQL integrates Spring applications with GraphQL Java. ([Home][13])

Learn:

- [ ] GraphQL schema
- [ ] Queries
- [ ] Mutations
- [ ] Subscriptions
- [ ] Resolvers
- [ ] Data fetchers
- [ ] Input types
- [ ] Pagination
- [ ] Validation
- [ ] Error handling
- [ ] N+1 queries
- [ ] DataLoader
- [ ] GraphQL security
- [ ] Query-depth limits
- [ ] Query-complexity limits

## 94. gRPC 🔵

- [ ] Protocol Buffers
- [ ] Service definition
- [ ] Unary calls
- [ ] Server streaming
- [ ] Client streaming
- [ ] Bidirectional streaming
- [ ] Deadlines
- [ ] Metadata
- [ ] Interceptors
- [ ] Error codes
- [ ] Service-to-service communication
- [ ] REST versus gRPC

## 95. Spring HATEOAS 🔵

- [ ] Hypermedia
- [ ] Resource links
- [ ] Representation models
- [ ] Link relations
- [ ] Collection models
- [ ] Discoverable APIs
- [ ] When HATEOAS adds value

---

# Phase 16 — Application Architecture

## 96. Layered Architecture 🟢

Typical layers:

```text
Controller
    ↓
Application Service
    ↓
Domain
    ↓
Repository
    ↓
Database
```

Learn:

- [ ] Controller responsibilities
- [ ] Service responsibilities
- [ ] Repository responsibilities
- [ ] Entity responsibilities
- [ ] DTO responsibilities
- [ ] Mapper responsibilities
- [ ] Boundary enforcement
- [ ] Avoiding business logic in controllers
- [ ] Avoiding god services

## 97. Package Organization 🟢

Compare:

### Package by layer

```text
controller/
service/
repository/
entity/
dto/
```

### Package by feature

```text
user/
order/
payment/
inventory/
```

For larger applications, prefer organizing primarily by **business feature or domain**.

## 98. Domain-Driven Design 🟡

- [ ] Domain
- [ ] Subdomain
- [ ] Bounded context
- [ ] Ubiquitous language
- [ ] Entity
- [ ] Value object
- [ ] Aggregate
- [ ] Aggregate root
- [ ] Domain service
- [ ] Application service
- [ ] Repository
- [ ] Domain event
- [ ] Anti-corruption layer
- [ ] Context mapping

## 99. Clean and Hexagonal Architecture 🟡

- [ ] Domain layer
- [ ] Application layer
- [ ] Infrastructure layer
- [ ] Ports
- [ ] Adapters
- [ ] Use cases
- [ ] Dependency direction
- [ ] Framework-independent domain logic
- [ ] Persistence adapters
- [ ] Web adapters
- [ ] Messaging adapters

## 100. SOLID Principles 🟢

- [ ] Single Responsibility Principle
- [ ] Open/Closed Principle
- [ ] Liskov Substitution Principle
- [ ] Interface Segregation Principle
- [ ] Dependency Inversion Principle

## 101. Design Patterns 🟢

### Creational

- [ ] Factory
- [ ] Builder
- [ ] Abstract Factory
- [ ] Prototype
- [ ] Singleton and its limitations

### Structural

- [ ] Adapter
- [ ] Decorator
- [ ] Facade
- [ ] Proxy
- [ ] Composite

### Behavioral

- [ ] Strategy
- [ ] Observer
- [ ] Template Method
- [ ] Command
- [ ] State
- [ ] Chain of Responsibility

### Enterprise patterns

- [ ] Repository
- [ ] Unit of Work
- [ ] Service Layer
- [ ] DTO
- [ ] Transaction Script
- [ ] Domain Model
- [ ] Data Mapper
- [ ] Specification

## 102. Spring Modulith 🟡

Spring Modulith helps developers structure Spring Boot applications around domain-driven application modules. ([Home][1])

Learn:

- [ ] Modular monolith
- [ ] Application modules
- [ ] Module boundaries
- [ ] Module dependencies
- [ ] Domain events
- [ ] Event publication registry
- [ ] Module integration testing
- [ ] Architecture verification
- [ ] Module documentation
- [ ] Extracting services later

A **modular monolith** should generally be learned before microservices.

---

# Phase 17 — Microservices and Spring Cloud

Spring Cloud supports common distributed-system patterns such as configuration management, service discovery, circuit breakers and intelligent routing. ([Home][14])

## 103. Microservice Fundamentals 🟡

- [ ] Monolith
- [ ] Modular monolith
- [ ] Microservices
- [ ] Service boundaries
- [ ] Independent deployment
- [ ] Database per service
- [ ] Distributed communication
- [ ] Operational complexity
- [ ] Team ownership
- [ ] Service autonomy
- [ ] Microservice fallacies

## 104. Service Communication 🟡

- [ ] REST
- [ ] gRPC
- [ ] Messaging
- [ ] Request-response
- [ ] Event-driven communication
- [ ] Synchronous coupling
- [ ] Temporal coupling
- [ ] API contracts
- [ ] Versioning
- [ ] Timeouts
- [ ] Retries
- [ ] Correlation IDs

## 105. Spring Cloud Config 🟡

- [ ] Config server
- [ ] Config client
- [ ] Git-backed configuration
- [ ] Profile configuration
- [ ] Refreshing configuration
- [ ] Encryption
- [ ] Secret-management limitations
- [ ] Highly available configuration

## 106. Service Discovery 🟡

- [ ] Client-side discovery
- [ ] Server-side discovery
- [ ] Service registry
- [ ] Eureka concepts
- [ ] Consul concepts
- [ ] Kubernetes-native discovery
- [ ] DNS-based discovery
- [ ] Health-aware routing

## 107. API Gateway 🟡

Spring Cloud Gateway supports API routing and cross-cutting concerns such as security, monitoring and resiliency. ([Home][15])

Learn:

- [ ] Route
- [ ] Predicate
- [ ] Gateway filter
- [ ] Global filter
- [ ] Authentication
- [ ] Authorization
- [ ] Rate limiting
- [ ] Header transformation
- [ ] Request rewriting
- [ ] Response rewriting
- [ ] Circuit breakers
- [ ] CORS
- [ ] Gateway observability
- [ ] Avoiding business logic in the gateway

## 108. Distributed Data 🟡

- [ ] Database per service
- [ ] Eventual consistency
- [ ] Distributed transactions
- [ ] Two-phase commit limitations
- [ ] Saga pattern
- [ ] Choreography
- [ ] Orchestration
- [ ] Transactional outbox
- [ ] Change data capture
- [ ] CQRS
- [ ] Event sourcing
- [ ] Materialized views

## 109. Resilient Microservices 🟡

- [ ] Timeouts
- [ ] Retries
- [ ] Circuit breakers
- [ ] Bulkheads
- [ ] Load shedding
- [ ] Backpressure
- [ ] Fallbacks
- [ ] Idempotency
- [ ] Dead-letter queues
- [ ] Graceful degradation
- [ ] Chaos testing

## 110. Distributed Observability 🟡

- [ ] Centralized logging
- [ ] Trace propagation
- [ ] Service metrics
- [ ] Dependency maps
- [ ] Correlation IDs
- [ ] OpenTelemetry Collector
- [ ] Prometheus
- [ ] Grafana
- [ ] Loki
- [ ] Elasticsearch/OpenSearch
- [ ] Tempo
- [ ] Jaeger
- [ ] Zipkin

## 111. Microservice Security 🟡

- [ ] Central identity provider
- [ ] OAuth2
- [ ] OpenID Connect
- [ ] Resource servers
- [ ] Token propagation
- [ ] Service accounts
- [ ] Client Credentials flow
- [ ] Mutual TLS
- [ ] Network policies
- [ ] Secrets
- [ ] Zero-trust service communication

---

# Phase 18 — Spring AI

Spring AI 2.0 provides abstractions for AI providers, chat and embedding models, vector stores, structured outputs, tool calling, RAG, chat memory, evaluation, observability and Model Context Protocol integrations. ([Home][16])

Do not start Spring AI before you can build a secure, tested Spring Boot REST application.

## 112. AI Foundations 🟢 for AI Specialization

- [ ] Artificial intelligence
- [ ] Machine learning
- [ ] Generative AI
- [ ] Large language models
- [ ] Tokens
- [ ] Context windows
- [ ] Temperature
- [ ] Top-p
- [ ] Hallucinations
- [ ] Embeddings
- [ ] Vector similarity
- [ ] Cosine similarity
- [ ] Prompt engineering
- [ ] Retrieval-Augmented Generation
- [ ] Tool calling
- [ ] AI agents
- [ ] Model evaluation
- [ ] AI safety

## 113. Spring AI Setup 🟢

- [ ] Spring AI BOM
- [ ] Spring Boot starters
- [ ] Provider configuration
- [ ] API-key configuration
- [ ] Environment variables
- [ ] Secret management
- [ ] Model configuration
- [ ] Timeout configuration
- [ ] Retry configuration
- [ ] Local models
- [ ] Ollama integration
- [ ] Cloud-model integration

## 114. Chat Model API 🟢

Spring AI offers a portable Chat Model API that makes it easier to switch between supported model providers. ([Home][17])

Learn:

- [ ] Chat model
- [ ] Prompt
- [ ] User message
- [ ] System message
- [ ] Assistant message
- [ ] Chat response
- [ ] Generation metadata
- [ ] Synchronous calls
- [ ] Streaming calls
- [ ] Model options
- [ ] Token usage
- [ ] Finish reasons

## 115. ChatClient 🟢

- [ ] Fluent ChatClient API
- [ ] Default system prompts
- [ ] User prompts
- [ ] Prompt parameters
- [ ] Streaming responses
- [ ] Structured responses
- [ ] Advisors
- [ ] Request intercepting
- [ ] Response processing
- [ ] Error handling

## 116. Prompt Engineering 🟢

- [ ] System instructions
- [ ] Role prompting
- [ ] Few-shot prompting
- [ ] Prompt templates
- [ ] Prompt variables
- [ ] Context injection
- [ ] Output constraints
- [ ] Delimiters
- [ ] Prompt versioning
- [ ] Prompt testing
- [ ] Prompt-injection defense
- [ ] Separating trusted and untrusted content

## 117. Structured Output 🟢

- [ ] Mapping model output to Java classes
- [ ] Mapping output to records
- [ ] JSON schema
- [ ] Validation
- [ ] Retry on invalid output
- [ ] Enum restrictions
- [ ] Nested objects
- [ ] Structured extraction
- [ ] Avoiding unsafe free-form parsing

## 118. Embedding Models 🟢

- [ ] Text embeddings
- [ ] Embedding dimensions
- [ ] Chunk embeddings
- [ ] Query embeddings
- [ ] Document embeddings
- [ ] Similarity
- [ ] Normalization
- [ ] Embedding-model migration
- [ ] Re-indexing requirements

## 119. Vector Stores 🟢

Spring AI exposes vector-store abstractions for storing documents and performing similarity search across several vector-database providers. ([Home][18])

Learn:

- [ ] Vector store
- [ ] Adding documents
- [ ] Similarity search
- [ ] Top-K retrieval
- [ ] Similarity threshold
- [ ] Metadata
- [ ] Metadata filtering
- [ ] Document identifiers
- [ ] Update and deletion
- [ ] Multi-tenant isolation
- [ ] Hybrid search
- [ ] Vector index tuning

Potential databases:

- [ ] PostgreSQL with PGvector
- [ ] Redis
- [ ] MongoDB Atlas
- [ ] Elasticsearch/OpenSearch
- [ ] Qdrant
- [ ] Pinecone
- [ ] Weaviate
- [ ] Milvus
- [ ] Neo4j

## 120. Document Ingestion and ETL 🟢

- [ ] Document reader
- [ ] PDF reader
- [ ] Text reader
- [ ] Web-content reader
- [ ] Document transformer
- [ ] Token-based splitter
- [ ] Chunk size
- [ ] Chunk overlap
- [ ] Metadata enrichment
- [ ] Document writer
- [ ] Incremental indexing
- [ ] Document-version tracking
- [ ] Duplicate detection

## 121. Retrieval-Augmented Generation 🟢

Spring AI’s RAG components retrieve relevant documents from a vector store and add that context to model requests. ([Home][19])

Learn:

- [ ] Naive RAG
- [ ] Modular RAG
- [ ] Query transformation
- [ ] Query rewriting
- [ ] Multi-query retrieval
- [ ] Metadata filtering
- [ ] Document retrieval
- [ ] Document ranking
- [ ] Reranking
- [ ] Context assembly
- [ ] Citation generation
- [ ] Source attribution
- [ ] Context-window management
- [ ] Retrieval evaluation
- [ ] Answer-groundedness evaluation

## 122. Chat Memory 🟢

Spring AI provides chat-memory abstractions for maintaining model-relevant conversational context. Complete chat history should generally be stored separately using an appropriate persistence mechanism. ([Home][20])

Learn:

- [ ] Conversation ID
- [ ] Message-window memory
- [ ] In-memory repository
- [ ] JDBC memory repository
- [ ] Redis or other storage
- [ ] Token-based memory limits
- [ ] Summarized memory
- [ ] Chat history versus chat memory
- [ ] Multi-user isolation
- [ ] Data-retention policies
- [ ] Privacy and deletion

## 123. Tool Calling 🟢

Spring AI allows a model to request the execution of application-defined tools. ([Home][21])

Learn:

- [ ] Tool definition
- [ ] Tool callback
- [ ] Tool parameters
- [ ] Tool descriptions
- [ ] Tool results
- [ ] Dynamic tools
- [ ] Tool selection
- [ ] Tool-execution errors
- [ ] Tool timeouts
- [ ] Authorization
- [ ] Human approval
- [ ] Idempotency
- [ ] Audit logging
- [ ] Preventing unrestricted tool access

## 124. MCP — Model Context Protocol 🟡

- [ ] MCP architecture
- [ ] MCP client
- [ ] MCP server
- [ ] Tools
- [ ] Resources
- [ ] Prompts
- [ ] Transport
- [ ] Tool discovery
- [ ] Spring-based MCP servers
- [ ] Consuming external MCP servers
- [ ] MCP authentication
- [ ] MCP authorization
- [ ] Tool allowlists
- [ ] Sandboxing
- [ ] Audit trails

Spring AI includes support for applications that consume MCP servers or expose Spring services through MCP. ([Home][22])

## 125. AI Agents 🟡

- [ ] Agent loop
- [ ] Planning
- [ ] Tool selection
- [ ] Observation
- [ ] Reflection
- [ ] State
- [ ] Memory
- [ ] Multi-step execution
- [ ] Human-in-the-loop
- [ ] Approval gates
- [ ] Maximum-step limits
- [ ] Cost limits
- [ ] Time limits
- [ ] Tool authorization
- [ ] Agent evaluation
- [ ] Deterministic workflow versus autonomous agent

## 126. AI Evaluation 🟢

- [ ] Golden datasets
- [ ] Exact-match evaluation
- [ ] Semantic-similarity evaluation
- [ ] Retrieval precision
- [ ] Retrieval recall
- [ ] Context relevance
- [ ] Answer relevance
- [ ] Groundedness
- [ ] Hallucination testing
- [ ] LLM-as-a-judge
- [ ] Human evaluation
- [ ] Regression testing
- [ ] Prompt A/B testing
- [ ] Model comparison

## 127. AI Observability 🟢

- [ ] Model latency
- [ ] Token consumption
- [ ] Request cost
- [ ] Error rates
- [ ] Retrieval latency
- [ ] Tool-call latency
- [ ] Model-provider failures
- [ ] Prompt versions
- [ ] Trace IDs
- [ ] Sensitive-content redaction
- [ ] AI quality metrics

## 128. AI Security 🟢

- [ ] Prompt injection
- [ ] Indirect prompt injection
- [ ] Jailbreaks
- [ ] Data leakage
- [ ] Tool abuse
- [ ] Excessive agency
- [ ] Insecure output handling
- [ ] Retrieval poisoning
- [ ] Model denial of service
- [ ] Secret exposure
- [ ] Tenant-data leakage
- [ ] Model-output validation
- [ ] Content moderation
- [ ] Rate limiting
- [ ] Input-size limits
- [ ] Tool allowlists
- [ ] Human approval for sensitive actions

## 129. Spring AI Projects

Build in this order:

1. AI text-generation API
2. Structured information extractor
3. Streaming chatbot
4. Chatbot with persistent memory
5. Document Q&A using PGvector
6. RAG system with citations
7. Tool-calling assistant
8. Database-query assistant with read-only tools
9. Customer-support copilot
10. MCP server for enterprise services
11. AI agent with approval gates
12. Multi-tenant enterprise RAG platform

---

# Phase 19 — Docker and Containers

## 130. Docker Fundamentals 🟢

- [ ] Images
- [ ] Containers
- [ ] Registries
- [ ] Dockerfile
- [ ] Layers
- [ ] Build cache
- [ ] Ports
- [ ] Volumes
- [ ] Networks
- [ ] Environment variables
- [ ] Health checks
- [ ] Container logs

## 131. Containerizing Spring Boot 🟢

- [ ] Executable JAR image
- [ ] Multi-stage Docker build
- [ ] Layered JAR
- [ ] Non-root user
- [ ] Minimal base image
- [ ] JVM container awareness
- [ ] Memory limits
- [ ] CPU limits
- [ ] Startup optimization
- [ ] Graceful shutdown
- [ ] Container health checks
- [ ] Buildpacks
- [ ] Image vulnerability scanning

## 132. Docker Compose 🟢

Run a complete local environment containing:

- Spring Boot
- PostgreSQL
- Redis
- Kafka or RabbitMQ
- Prometheus
- Grafana
- OpenTelemetry Collector

---

# Phase 20 — Kubernetes

## 133. Kubernetes Fundamentals 🟡

- [ ] Cluster
- [ ] Node
- [ ] Pod
- [ ] Deployment
- [ ] ReplicaSet
- [ ] Service
- [ ] Ingress
- [ ] ConfigMap
- [ ] Secret
- [ ] Namespace
- [ ] Persistent volume
- [ ] Persistent-volume claim

## 134. Deploying Spring Boot to Kubernetes 🟡

- [ ] Deployment manifest
- [ ] Service manifest
- [ ] Ingress
- [ ] Resource requests
- [ ] Resource limits
- [ ] Liveness probes
- [ ] Readiness probes
- [ ] Startup probes
- [ ] Rolling updates
- [ ] Rollbacks
- [ ] Horizontal Pod Autoscaler
- [ ] Pod disruption budgets
- [ ] Graceful termination
- [ ] ConfigMap configuration
- [ ] Secret injection

## 135. Kubernetes Production Concerns 🟡

- [ ] Stateless services
- [ ] Externalized sessions
- [ ] Database migrations
- [ ] Leader election
- [ ] Distributed scheduling
- [ ] Service discovery
- [ ] Network policies
- [ ] TLS
- [ ] Secret rotation
- [ ] Autoscaling
- [ ] Cluster observability

---

# Phase 21 — CI/CD

## 136. Continuous Integration 🟢

- [ ] Compile
- [ ] Unit tests
- [ ] Integration tests
- [ ] Static analysis
- [ ] Dependency scanning
- [ ] Security scanning
- [ ] Code coverage
- [ ] Build artifact
- [ ] Container image
- [ ] Image scanning
- [ ] Artifact publishing

## 137. Continuous Delivery 🟢

- [ ] Environment promotion
- [ ] Development deployment
- [ ] Staging deployment
- [ ] Production deployment
- [ ] Database migrations
- [ ] Smoke tests
- [ ] Rollbacks
- [ ] Blue-green deployment
- [ ] Canary deployment
- [ ] Feature flags
- [ ] Approval gates

## 138. CI/CD Tools

Learn one primary tool:

- [ ] GitHub Actions
- [ ] GitLab CI
- [ ] Jenkins
- [ ] Azure DevOps
- [ ] Argo CD

---

# Phase 22 — Cloud Engineering

## 139. Cloud Fundamentals 🟢

- [ ] Compute
- [ ] Networking
- [ ] Load balancing
- [ ] DNS
- [ ] Object storage
- [ ] Managed databases
- [ ] Managed caches
- [ ] Message queues
- [ ] Identity and access management
- [ ] Secret managers
- [ ] Monitoring
- [ ] Autoscaling
- [ ] Availability zones
- [ ] Regions
- [ ] Disaster recovery

## 140. AWS, Azure or Google Cloud 🟡

Learn at least one cloud platform.

Important managed-service categories:

- Virtual machines
- Container services
- Kubernetes
- Managed relational databases
- Managed Redis
- Object storage
- Queues and topics
- API gateways
- Identity providers
- Secret managers
- Logging and monitoring

## 141. Cloud-Native Spring Skills 🟡

- [ ] External configuration
- [ ] Stateless services
- [ ] Twelve-factor applications
- [ ] Health probes
- [ ] Horizontal scaling
- [ ] Distributed sessions
- [ ] Managed identity
- [ ] Secret rotation
- [ ] Cloud storage
- [ ] Cloud messaging
- [ ] Deployment automation

---

# Phase 23 — JVM and Performance Engineering

## 142. JVM Internals 🟢

- [ ] Heap
- [ ] Stack
- [ ] Metaspace
- [ ] Class loaders
- [ ] Bytecode
- [ ] JIT compilation
- [ ] Object allocation
- [ ] Escape analysis
- [ ] Garbage collection
- [ ] Thread stacks
- [ ] Native memory

## 143. Garbage Collection 🟡

- [ ] Generational collection
- [ ] Minor collection
- [ ] Major collection
- [ ] Stop-the-world pauses
- [ ] G1 GC
- [ ] ZGC
- [ ] GC logs
- [ ] Heap sizing
- [ ] Allocation rate
- [ ] Memory pressure
- [ ] Memory leaks

## 144. Profiling and Diagnostics 🟢

- [ ] Java Flight Recorder
- [ ] Java Mission Control
- [ ] Thread dumps
- [ ] Heap dumps
- [ ] CPU profiling
- [ ] Allocation profiling
- [ ] Lock profiling
- [ ] Database profiling
- [ ] Slow-query logs
- [ ] Application metrics
- [ ] Distributed traces

## 145. Performance Testing 🟢

- [ ] Load testing
- [ ] Stress testing
- [ ] Spike testing
- [ ] Soak testing
- [ ] Capacity testing
- [ ] Latency percentiles
- [ ] Throughput
- [ ] Concurrent users
- [ ] Bottleneck identification
- [ ] JMeter
- [ ] Gatling
- [ ] k6

## 146. Backend Performance Topics 🟢

- [ ] Database indexing
- [ ] Query optimization
- [ ] Pagination
- [ ] Batch inserts
- [ ] Connection pooling
- [ ] HTTP connection pooling
- [ ] Thread-pool tuning
- [ ] Caching
- [ ] Compression
- [ ] Asynchronous processing
- [ ] Payload sizing
- [ ] Serialization cost
- [ ] N+1 query prevention
- [ ] Backpressure
- [ ] Rate limiting

---

# Phase 24 — System Design

## 147. System Design Fundamentals 🟢

- [ ] Functional requirements
- [ ] Non-functional requirements
- [ ] Scalability
- [ ] Availability
- [ ] Reliability
- [ ] Maintainability
- [ ] Security
- [ ] Performance
- [ ] Consistency
- [ ] Durability
- [ ] Cost

## 148. Architecture Components 🟢

- [ ] Load balancer
- [ ] Reverse proxy
- [ ] API gateway
- [ ] Application server
- [ ] Relational database
- [ ] NoSQL database
- [ ] Cache
- [ ] Message broker
- [ ] Object storage
- [ ] Search engine
- [ ] CDN
- [ ] Identity provider
- [ ] Monitoring system

## 149. Scalability Patterns 🟢

- [ ] Vertical scaling
- [ ] Horizontal scaling
- [ ] Stateless services
- [ ] Database replication
- [ ] Read replicas
- [ ] Sharding
- [ ] Partitioning
- [ ] Caching
- [ ] Asynchronous processing
- [ ] Load balancing
- [ ] Queue-based load leveling

## 150. Reliability Patterns 🟢

- [ ] Redundancy
- [ ] Failover
- [ ] Retry
- [ ] Circuit breaker
- [ ] Bulkhead
- [ ] Idempotency
- [ ] Deduplication
- [ ] Disaster recovery
- [ ] Backup and restoration
- [ ] Multi-zone deployment
- [ ] Data reconciliation

## 151. Design These Systems

- [ ] URL shortener
- [ ] E-commerce backend
- [ ] Food-delivery platform
- [ ] Ticket-booking platform
- [ ] Banking transaction service
- [ ] Notification service
- [ ] Chat application
- [ ] File-storage service
- [ ] Search service
- [ ] Payment system
- [ ] AI document assistant
- [ ] Multi-tenant SaaS platform

---

# Phase 25 — Software Engineering Practices

## 152. Clean Code 🟢

- [ ] Meaningful naming
- [ ] Small methods
- [ ] Single-purpose classes
- [ ] Immutability
- [ ] Defensive programming
- [ ] Early validation
- [ ] Avoiding duplication
- [ ] Refactoring
- [ ] Avoiding premature abstraction
- [ ] Avoiding magic values
- [ ] Useful comments
- [ ] Javadoc for public APIs

## 153. Code Review 🟢

- [ ] Correctness
- [ ] Readability
- [ ] Security
- [ ] Test coverage
- [ ] Performance
- [ ] Transaction boundaries
- [ ] Error handling
- [ ] API compatibility
- [ ] Database effects
- [ ] Operational impact

## 154. API Governance 🟡

- [ ] API standards
- [ ] Naming conventions
- [ ] Error contracts
- [ ] Pagination conventions
- [ ] Authentication standards
- [ ] Versioning policy
- [ ] Deprecation policy
- [ ] OpenAPI specifications
- [ ] Backward compatibility
- [ ] Consumer communication

## 155. Dependency Management 🟢

- [ ] Maven dependency tree
- [ ] Dependency convergence
- [ ] BOMs
- [ ] Version management
- [ ] Vulnerability scanning
- [ ] Dependabot or Renovate
- [ ] Upgrade strategy
- [ ] Spring release compatibility
- [ ] Avoiding unmaintained libraries

---

# What You Must Master First

For your **first Java backend job**, prioritize these topics:

1. Core Java
2. OOP
3. Collections and Streams
4. SQL
5. Git
6. Maven
7. HTTP and REST
8. Spring Core
9. Spring Boot
10. Spring MVC
11. Validation
12. Global exception handling
13. Spring Data JPA
14. Hibernate relationships
15. Transactions
16. PostgreSQL
17. Flyway
18. Spring Security
19. JWT and OAuth2 fundamentals
20. JUnit
21. Mockito
22. MockMvc
23. Testcontainers
24. Docker
25. Actuator
26. Logging and metrics

---

# What to Learn Later

Do not delay employment preparation because of these:

- Spring WebFlux
- Spring Cloud
- Microservices
- Kubernetes
- Spring Batch
- GraphQL
- gRPC
- Event sourcing
- CQRS
- Advanced Spring AI agents
- GraalVM native images

These are valuable, but they come **after strong Spring Boot fundamentals**.

---

# Recommended Project Progression

## Project 1 — Task Management REST API

Cover:

- Spring Boot
- Controllers
- Services
- Repositories
- DTOs
- Validation
- Exception handling
- PostgreSQL
- JPA
- Flyway
- Unit tests

## Project 2 — Secure Library Management System

Add:

- Spring Security
- User registration
- Password hashing
- JWT or sessions
- Roles and permissions
- Pagination
- Auditing
- Integration tests
- Docker

## Project 3 — E-Commerce Backend

Add:

- Products
- Categories
- Inventory
- Cart
- Orders
- Payments
- Transactions
- Idempotency
- Redis caching
- File storage
- Email notifications
- API documentation
- Testcontainers

## Project 4 — Production-Ready Booking Platform

Add:

- Optimistic locking
- Preventing double booking
- Kafka or RabbitMQ
- Transactional outbox
- Scheduled jobs
- Metrics
- Distributed tracing
- Rate limiting
- CI/CD
- Kubernetes deployment

## Project 5 — AI-Powered Enterprise Platform

Add:

- Spring AI
- Streaming chat
- RAG
- PGvector
- Document ingestion
- Chat memory
- Tool calling
- MCP server
- AI evaluation
- Prompt-injection protection
- AI observability

## Project 6 — Microservice System

Services:

- Identity service
- Product service
- Order service
- Payment service
- Inventory service
- Notification service
- AI assistant service

Infrastructure:

- API Gateway
- OAuth2/OIDC
- Kafka
- Redis
- PostgreSQL
- OpenTelemetry
- Prometheus
- Grafana
- Docker
- Kubernetes

---

# Suggested Learning Order

| Stage | Focus                       | Build                             |
| ----- | --------------------------- | --------------------------------- |
| 1     | Spring Core and DI          | Console-based Spring application  |
| 2     | Spring Boot fundamentals    | Simple web application            |
| 3     | Spring MVC and REST         | Task API                          |
| 4     | Validation and errors       | Production-style request handling |
| 5     | JPA and Hibernate           | Database-backed API               |
| 6     | Transactions and migrations | Banking or inventory module       |
| 7     | Spring Security             | Secure role-based API             |
| 8     | Testing                     | Fully tested application          |
| 9     | Docker and Actuator         | Deployable application            |
| 10    | Redis and messaging         | Event-driven application          |
| 11    | Modular architecture        | Modular monolith                  |
| 12    | Cloud and Kubernetes        | Cloud deployment                  |
| 13    | Spring AI                   | Secure RAG application            |
| 14    | Microservices               | Distributed backend platform      |

---

# The Most Important Rule

```text
Do not jump directly from basic Java to microservices or Spring AI.

First become capable of building one complete, secure, tested,
observable and deployable Spring Boot monolith.
```

A strong Java backend engineer is not someone who merely knows many annotations. A strong engineer understands:

- Why dependency injection works
- Where transaction boundaries belong
- How database queries perform
- How authentication and authorization differ
- How failures propagate
- How systems remain secure
- How applications are tested
- How production incidents are diagnosed
- When a monolith is better than microservices
- When AI output cannot be trusted

That combination makes someone a **backend engineer**, rather than only a Spring Boot coder. ☕️🔥

[1]: https://spring.io/projects "Spring | Projects"
[2]: https://spring.io/projects/spring-framework?utm_source=chatgpt.com "Spring Framework"
[3]: https://spring.io/projects/spring-boot?utm_source=chatgpt.com "Spring Boot"
[4]: https://spring.io/projects/spring-data?utm_source=chatgpt.com "Spring Data"
[5]: https://docs.spring.io/spring-security/reference/index.html?utm_source=chatgpt.com "Spring Security"
[6]: https://docs.spring.io/spring-security/reference/servlet/authorization/architecture.html?utm_source=chatgpt.com "Authorization Architecture :: Spring Security"
[7]: https://docs.spring.io/spring-boot/reference/actuator/index.html?utm_source=chatgpt.com "Production-ready Features"
[8]: https://docs.spring.io/spring-boot/reference/actuator/endpoints.html?utm_source=chatgpt.com "Endpoints :: Spring Boot"
[9]: https://docs.spring.io/spring-boot/reference/actuator/metrics.html?utm_source=chatgpt.com "Metrics :: Spring Boot"
[10]: https://docs.spring.io/spring-boot/reference/actuator/tracing.html?utm_source=chatgpt.com "Tracing :: Spring Boot"
[11]: https://spring.io/projects/spring-cloud-stream?utm_source=chatgpt.com "Spring Cloud Stream"
[12]: https://spring.io/projects/spring-batch?utm_source=chatgpt.com "Spring Batch"
[13]: https://spring.io/projects/spring-graphql?utm_source=chatgpt.com "Spring for GraphQL"
[14]: https://spring.io/projects/spring-cloud?utm_source=chatgpt.com "Spring Cloud"
[15]: https://spring.io/projects/spring-cloud-gateway?utm_source=chatgpt.com "Spring Cloud Gateway"
[16]: https://spring.io/projects/spring-ai "Spring AI"
[17]: https://docs.spring.io/spring-ai/reference/api/chatmodel.html?utm_source=chatgpt.com "Chat Model API :: Spring AI Reference"
[18]: https://docs.spring.io/spring-ai/reference/api/vectordbs.html?utm_source=chatgpt.com "Vector Databases :: Spring AI Reference"
[19]: https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html?utm_source=chatgpt.com "Retrieval Augmented Generation :: Spring AI Reference"
[20]: https://docs.spring.io/spring-ai/reference/api/chat-memory.html?utm_source=chatgpt.com "Chat Memory :: Spring AI Reference"
[21]: https://docs.spring.io/spring-ai/reference/api/tools.html?utm_source=chatgpt.com "Tool Calling :: Spring AI Reference"
[22]: https://docs.spring.io/spring-ai/reference/api/index.html?utm_source=chatgpt.com "AI Model API"
