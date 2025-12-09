# Contribution Guidelines

Thank you for contributing to the Video Streaming App! This document provides guidelines for collaborating effectively as a hackathon team.

## 📖 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Testing Requirements](#testing-requirements)
8. [Code Review Process](#code-review-process)
9. [Deployment](#deployment)
10. [Team Coordination](#team-coordination)

## 🤝 Code of Conduct

All team members are expected to:

- **Be Respectful**: Treat all team members with respect and professionalism
- **Communicate Clearly**: Keep communication transparent and constructive
- **Collaborate**: Work together to solve problems and support each other
- **Take Ownership**: Be responsible for your assigned tasks
- **Help Others**: Assist team members when they're stuck or need guidance
- **Learn Together**: Share knowledge and help the team grow

### Unacceptable Behavior

- Harassment or discrimination of any kind
- Intentionally breaking code or disrupting others' work
- Refusing to collaborate or communicate
- Taking credit for others' work

## 🚀 Getting Started

### 1. Clone and Setup

```bash
git clone https://github.com/your-org/video-streaming-app.git
cd video-streaming-app
git checkout -b develop
npm install
```

### 2. Create Your Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/feature-name` - New features
- `bugfix/bug-name` - Bug fixes
- `docs/documentation-name` - Documentation updates
- `refactor/component-name` - Code refactoring
- `test/test-description` - Test additions

### 3. Set Up Your Development Environment

```bash
# Copy environment template
cp .env.example .env

# Configure your .env file with local settings
# Install dependencies
npm install

# Run development server
npm run dev
```

## 🔄 Development Workflow

### Daily Workflow

1. **Sync with main branch**
   ```bash
   git fetch origin
   git rebase origin/develop
   ```

2. **Work on your feature**
   - Make incremental, meaningful commits
   - Test frequently
   - Keep changes focused

3. **Before committing**
   ```bash
   npm run lint
   npm run format
   npm test
   ```

4. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Link related issues
   - Provide clear description
   - Request reviews from team members

### Branch Protection Rules

- `main` branch: Production-ready code only
- `develop` branch: Integration branch for features
- Feature branches: Delete after merge to save space

## 📝 Coding Standards

### JavaScript/TypeScript

```javascript
// Use const by default, let for reassignment
const config = {};
let counter = 0;

// Use arrow functions
const sum = (a, b) => a + b;

// Use template literals
const message = `Hello, ${name}!`;

// Use destructuring
const { user, data } = response;

// Use async/await for promises
async function fetchData() {
  try {
    const data = await api.get('/videos');
    return data;
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
}
```

### File Organization

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── services/         # API and external service calls
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── styles/           # Global styles
├── constants/        # Constants and enums
├── types/            # TypeScript type definitions
└── tests/            # Test files
```

### Naming Conventions

- **Files**: `camelCase` for utility files, `PascalCase` for components
- **Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Classes**: `PascalCase`
- **Functions**: `camelCase` (verbs for actions)

### Documentation

```javascript
/**
 * Converts seconds to readable time format
 * @param {number} seconds - Total seconds
 * @returns {string} Formatted time (HH:MM:SS)
 * @example
 * formatTime(125) // Returns "00:02:05"
 */
function formatTime(seconds) {
  // implementation
}
```

### Linting & Formatting

All code must pass:
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **EditorConfig**: Consistent editor settings

```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code
npm run format
```

## ✍️ Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build, CI, dependency updates

### Examples

```bash
# Feature commit
git commit -m "feat(video-player): add subtitle support

- Add subtitle upload functionality
- Implement subtitle parsing
- Add subtitle toggle in player controls"

# Bug fix commit
git commit -m "fix(auth): resolve token expiration issue

Fixes #123"

# Documentation commit
git commit -m "docs(api): update endpoint documentation"
```

### Commit Best Practices

- ✅ Commit frequently with small, logical changes
- ✅ Write clear, descriptive commit messages
- ✅ Reference issue numbers when applicable
- ✅ Keep commits atomic (one concern per commit)
- ❌ Don't mix feature and style changes
- ❌ Don't commit large debugging logs
- ❌ Don't commit sensitive information

## 🔀 Pull Request Process

### Before Creating a PR

1. **Update your branch**
   ```bash
   git fetch origin
   git rebase origin/develop
   ```

2. **Run tests locally**
   ```bash
   npm test
   npm run lint
   ```

3. **Push to remote**
   ```bash
   git push origin feature/your-feature-name
   ```

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #123

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] All tests passing

## Screenshots
[If applicable, add screenshots]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
```

### PR Review Expectations

- **Reviewers**: At least 2 team members must approve
- **Timeline**: Aim for 24-hour review turnaround
- **Feedback**: Be constructive and respectful
- **Resolution**: Author addresses all comments before merge

### Merging a PR

- Use "Squash and merge" for feature branches
- Use "Create a merge commit" for release branches
- Delete branch after merging
- Update related issues

## 🧪 Testing Requirements

### Test Coverage Goals

- Aim for 80%+ code coverage
- 100% coverage for critical paths
- All new features must include tests

### Test Types

```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Run all tests
npm test

# Run with coverage report
npm run test:coverage
```

### Writing Tests

```javascript
// Example test structure
describe('VideoPlayer', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
  });

  it('should play video when play button is clicked', () => {
    // Arrange
    const video = render(<VideoPlayer src="test.mp4" />);
    
    // Act
    fireEvent.click(video.getByTestId('play-button'));
    
    // Assert
    expect(video.getByTestId('video')).toHaveClass('playing');
  });
});
```

## 👀 Code Review Process

### For Authors

- Keep PRs focused (single feature or fix)
- Keep size reasonable (< 400 lines preferred)
- Provide context in PR description
- Respond to feedback promptly
- Request re-review after making changes

### For Reviewers

- Review within 24 hours if possible
- Be constructive and respectful
- Comment on important issues
- Approve when satisfied with quality
- Help authors improve their code

### Review Checklist

- [ ] Code follows style guidelines
- [ ] Logic is correct and efficient
- [ ] Tests are adequate
- [ ] Documentation is clear
- [ ] No security vulnerabilities
- [ ] No performance regressions

## 🚢 Deployment

### Development Environment
```bash
npm run dev
```

### Staging Environment
```bash
npm run build:staging
npm run deploy:staging
```

### Production Environment
```bash
npm run build:prod
npm run deploy:prod
```

Only merge to `main` and deploy after:
- ✅ All tests pass
- ✅ Code review approved
- ✅ QA sign-off
- ✅ Documentation updated

## 👥 Team Coordination

### Communication Channels

- **Daily Standup**: [Time] - Share progress and blockers
- **Slack/Discord**: Real-time team communication
- **GitHub Issues**: Feature requests and bug tracking
- **Weekly Sync**: [Day/Time] - Team retrospective and planning

### Conflict Resolution

If conflicts arise:
1. Discuss directly with the involved parties
2. Document the issue in GitHub
3. Escalate to team leads if needed
4. Follow up in team meetings

### Knowledge Sharing

- Pair programming for complex features
- Code reviews for knowledge transfer
- Documentation for future reference
- Weekly tech talks or demos

## 📊 Sprint Guidelines

### Task Assignment

- Tasks should have clear definition of done
- Estimate effort realistically
- Communicate blockers immediately
- Update task status regularly

### Burndown

- Track progress daily
- Update issue status as you work
- Communicate changes to project manager
- Celebrate completed milestones

## 🎯 Quality Standards

Minimum requirements before merging:

- ✅ Code builds without errors
- ✅ All tests pass locally
- ✅ Linting passes (no errors or warnings)
- ✅ At least 2 approvals
- ✅ No merge conflicts
- ✅ Documentation updated

## 📚 Resources

- [Development Setup Guide](./docs/SETUP.md)
- [API Documentation](./docs/API.md)
- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Testing Guide](./docs/TESTING.md)
- [Git Workflow](./docs/GIT_WORKFLOW.md)

## ❓ Questions?

- Check the FAQ in docs
- Ask in Slack/Discord
- Reach out to team leads
- Open a discussion issue

---

**Thank you for contributing! Let's build something amazing together! 🚀**