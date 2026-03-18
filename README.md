<h1 align="center">Event Management API</h1>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A robust and scalable event management API built with NestJS, a progressive Node.js framework.
</p>

## Features

This event management platform provides a comprehensive set of features to handle everything from event creation to ticket sales.

- **User Management**: Secure user registration and authentication with role-based access control (USER, ADMIN, ORGANIZER).
- **Event Organization**: Allows registered organizers to create, update, and manage events.
- **Venue Details**: Associate events with venues, including address and map links for easy navigation.
- **Session Scheduling**: Organize events into detailed sessions with specific start and end times.
- **Speaker Profiles**: Manage speaker information, including bios and photos, and link them to event sessions.
- **Ticketing System**:
  - **Ticket Tiers**: Create multiple ticket types for an event (e.g., VIP, General Admission) with varying prices and quantities.
  - **Ticket Sales**: Users can purchase tickets for events, with each ticket containing a unique QR code.
- **Order and Payments**:
  - **Order Management**: Track user orders for tickets with a clear status (e.g., PENDING, COMPLETED).
  - **Payment Processing**: Integrated with multiple payment providers (Stripe, SSL Commerz, PayPal) for secure transactions.
- **Sponsorship**: Manage event sponsors and their respective tiers.
- **Feedback and Reviews**:
  - **Event and Session Ratings**: Users can provide ratings and comments for events and sessions they attend.
- **Notifications**: Keep users informed with a built-in notification system.

## How to Contribute

We welcome contributions from the community! To get started, please follow these steps:

1. **Fork the Repository**: Create a fork of this repository to your own GitHub account.
2. **Clone the Fork**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/codisim/tech-conference.git
   ```

3. **Set Up the Environment**: Install the project dependencies using pnpm.

   ```bash
   pnpm install
   ```

4. **Create a New Branch**: Create a new branch for your feature or bugfix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Make Your Changes**: Implement your feature or fix the bug. Be sure to follow the existing code style and conventions.
6. **Test Your Changes**: Run the test suite to ensure that your changes do not break any existing functionality.

   ```bash
   # Run unit tests
   pnpm run test

   # Run end-to-end tests
   pnpm run test:e2e
   ```

7. **Commit Your Changes**: Commit your changes with a clear and descriptive commit message.

   ```bash
   git commit -m "feat: add user authentication"
   ```

8. **Push to Your Fork**: Push your changes to your forked repository.

   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request**: Open a pull request from your fork to the main repository. Provide a detailed description of your changes and why they should be merged.

## Project Setup

```bash
# Install dependencies
$ pnpm install
```

## Compile and Run the Project

```bash
# Development
$ pnpm run start

# Watch mode
$ pnpm run start:dev

# Production mode
$ pnpm run start:prod
```

## Run Tests

```bash
# Unit tests
$ pnpm run test

# End-to-end tests
$ pnpm run test:e2e

# Test coverage
$ pnpm run test:cov
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
