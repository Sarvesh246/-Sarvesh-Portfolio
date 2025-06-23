# Sarvesh Jagtap - Personal Portfolio

A modern, professional, and reactive portfolio website for Sarvesh Jagtap, built to showcase his skills, achievements, and personality for college applications and future opportunities. The website is built with React, Tailwind CSS, and Framer Motion, featuring a clean and minimalist design with a functional light/dark mode.

## 🚀 Features

### Design & UX
- **Modern & Professional**: Clean, minimalist design with a light theme and a comprehensive dark mode.
- **Color Palette**: A professional and calming color scheme with navy blue, mint green, and light grays.
- **Fully Responsive**: Mobile-first design that looks great on all devices, from phones to desktops.
- **Engaging Animations**: Smooth and meaningful animations using Framer Motion to enhance user experience.
- **Accessibility**: Designed with accessibility best practices to ensure it's usable by everyone.

### Sections
1.  **Hero Section**: An impressive entry point with an animated gradient background and clear calls-to-action.
2.  **About Me**: A personal biography that highlights key strengths and aspirations.
3.  **Academic Overview**: A detailed look at academic achievements, including GPA, SAT scores, and relevant coursework.
4.  **Projects**: A showcase of key projects like ParkPoint and Inspirit AI, demonstrating technical skills.
5.  **Athletics**: A dedicated section for athletic achievements in Cross Country, Track & Field, and Taekwondo.
6.  **Leadership & Service**: Highlights of community involvement and leadership roles in clubs like Student Council and Green Team.
7.  **Resume**: An embedded, viewable resume with a download option.
8.  **Gallery**: A filterable photo gallery showcasing different facets of Sarvesh's life.
9.  **Contact**: A functional contact form and direct contact information.
10. **Footer**: Contains social links and copyright information.

### Technical Features
- **React 18**: Built with the latest version of React, using functional components and hooks.
- **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling.
- **Framer Motion**: Implements sophisticated animations and page transitions.
- **Dark Mode**: A fully-featured, persistent dark mode that can be toggled by the user.
- **React Icons**: A comprehensive icon library for a clean and professional look.
- **Intersection Observer**: Powers scroll-triggered animations for a dynamic feel as you navigate.

## 🛠️ Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Sarvesh-Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```
    The website will be available at `http://localhost:3000`.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── AcademicOverview.js
│   ├── Projects.js
│   ├── Athletics.js
│   ├── LeadershipAndService.js  # Formerly Volunteering.js
│   ├── Resume.js
│   ├── Gallery.js
│   ├── Contact.js
│   └── Footer.js
├── App.js
├── index.js
└── index.css
```

## 🎨 Customization

### Color Palette
Colors are defined in `tailwind.config.js`. The key colors are:
- `navy`: Used for primary text and dark backgrounds.
- `mint`: Used for accents, buttons, and highlights.
- `primary` (blue shades): Used for secondary accents.

### Content
All content is located within the `src/components/` directory. To update any section, edit the corresponding component file. For example, to change project descriptions, edit `src/components/Projects.js`.

### Resume PDF
1.  Place your resume file (e.g., `resume.pdf`) in the `public/` folder.
2.  Update the file path in `src/components/Resume.js`.

## 🚀 Deployment

The project is configured for easy deployment on platforms like Netlify or Vercel.

1.  **Build the project:**
    ```bash
    npm run build
    ```
2.  **Deploy:**
    - **Netlify**: Connect your GitHub repository, set the build command to `npm run build`, and the publish directory to `build`.
    - **Vercel**: Install the Vercel CLI (`npm i -g vercel`), run `vercel` in the project root, and follow the prompts.

## 📄 License

This project is open source and available under the MIT License.

---
Built with ❤️ by Sarvesh Jagtap. 