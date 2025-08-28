# Next.js JAMstack Learning Project with Claude Interactive Guidance

This is a comprehensive learning project for Next.js, React, JAMstack static site development, and GitHub Actions deployment, featuring **interactive guidance from Claude AI assistant**. The project demonstrates the complete workflow from local development to automated deployment with step-by-step AI assistance.

## Project Goals

- Learn Next.js framework fundamentals with AI guidance
- Master JAMstack static site generation technology
- Implement GitHub Actions automated deployment
- Deploy to single-page hosting platforms
- Experience interactive AI-assisted development workflow

## Technology Stack

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Modern React with functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **JAMstack** - Static site generation architecture
- **GitHub Actions** - CI/CD automation
- **GitHub Pages** - Static hosting platform
- **Claude AI** - Interactive development guidance

## Project Structure

```
jams_next_study/
├── 📄 Documentation
│   ├── README.md                    # Project overview (this file)
│   ├── WORK_PLAN.md                # Detailed work plan
│   ├── LEARNING_MANUAL.md          # Step-by-step learning guide
│   ├── LEARNING_QA.md              # Q&A collection
│   ├── DEPLOYMENT_GUIDE.md         # Deployment instructions
│   └── CLAUDE.md                   # Claude Code guidance file
├── 🚀 Next.js Application
│   ├── next-app/                   # Next.js project directory
│   │   ├── src/
│   │   │   ├── app/                # App Router pages
│   │   │   └── components/         # React components
│   │   ├── next.config.ts          # Next.js configuration
│   │   ├── tailwind.config.js      # Tailwind CSS configuration
│   │   └── package.json            # Dependencies and scripts
│   └── .github/workflows/          # GitHub Actions workflows
│       └── deploy.yml              # Deployment workflow
├── 🔧 Support Files
│   ├── study.md                    # Original learning objectives
│   ├── test-workflow.sh            # Workflow testing script
│   └── .gitignore                  # Git ignore rules
└── 📚 Chinese Versions (Reference)
    ├── WORK_PLAN_CN.md
    ├── LEARNING_MANUAL_CN.md
    └── LEARNING_QA_CN.md
```

## Development Progress

- [x] Project initialization and planning
- [x] Git repository setup with version control
- [x] Next.js project creation with TypeScript
- [x] React component development with Tailwind CSS
- [x] Static site generation configuration
- [x] GitHub Actions CI/CD setup
- [x] Deployment configuration for GitHub Pages
- [x] Complete documentation and learning materials
- [x] Full English language conversion
- [x] Claude AI interactive guidance integration

## 🌐 Live Demo

**GitHub Pages URL**: `https://your-username.github.io/jams_next_study/`

The project is deployment-ready and will be automatically deployed when pushed to GitHub.

## 🤖 Claude Interactive Learning Features

This project is specifically designed to demonstrate **interactive AI-assisted development** with Claude:

### Key Features:
- **Step-by-step Guidance**: Claude provides detailed instructions for each development phase
- **Real-time Problem Solving**: AI assistant helps troubleshoot issues as they arise
- **Educational Explanations**: Each step includes learning insights and best practices
- **Code Quality Assurance**: Claude reviews and suggests improvements to code
- **Documentation Generation**: AI helps create comprehensive documentation
- **Workflow Optimization**: Automated build and deployment processes

### Learning Experience:
1. **Interactive Planning**: Claude helps create detailed work plans
2. **Implementation Guidance**: Step-by-step coding instructions
3. **Debugging Support**: Real-time problem resolution
4. **Best Practices**: Industry-standard development patterns
5. **Documentation**: Complete learning materials and Q&A

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git repository created
- GitHub account for deployment

### Development Setup
```bash
# Clone the repository
git clone https://github.com/your-username/jams_next_study.git
cd jams_next_study

# Install dependencies
cd next-app
npm install

# Start development server
npm run dev
```

### Deployment
```bash
# Build the project
npm run build

# The project is configured for automatic deployment
# Simply push to GitHub to trigger GitHub Actions
git add .
git commit -m "Ready for deployment"
git push origin master
```

## Learning Resources

- [Next.js Official Documentation](https://nextjs.org/docs)
- [React Official Documentation](https://reactjs.org/docs)
- [JAMstack Official Website](https://jamstack.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Claude AI Assistant](https://claude.ai/)

## 📋 Project Configuration

### GitHub Pages Setup
1. Go to repository **Settings → Pages**
2. Set **Source = Deploy from branch**
3. Select **branch = gh-pages** (generated by GitHub Actions)
4. Your site will be available at: `https://your-username.github.io/jams_next_study/`

### Important Configuration Notes
- **deploy.yml**: Configured for automatic deployment from `next-app/out` directory
- **next.config.ts**: Static export with proper basePath for GitHub Pages
- **Trailing slash**: Enabled for proper routing
- **Images**: Unoptimized for static export compatibility

## 🎯 Key Learning Outcomes

By completing this project with Claude guidance, you will learn:
- Modern Next.js 15 App Router architecture
- React functional components with TypeScript
- JAMstack static site generation principles
- GitHub Actions CI/CD automation
- Responsive design with Tailwind CSS
- Interactive AI-assisted development workflow
- Professional documentation practices
- Static hosting deployment strategies

## 🤝 Contributing

This project is designed as a learning resource. Feel free to:
- Use it as a template for your own projects
- Learn from the Claude-guided development process
- Adapt the workflow for your specific needs
- Share your learning experience with others

## 📄 License

MIT License - Feel free to use this project for learning and development.