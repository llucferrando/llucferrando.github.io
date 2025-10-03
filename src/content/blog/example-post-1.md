---
title: 'Custom Graphic Engine'
description: 'Implementation of a custom graphics engine to explore real-time illumination'
urlRepo: 'https://github.com/llucferrando/AA3_FerrandoLluc'
pubDate: 'Aug 08 2025'
heroImage: '../../assets/images/post1/OpenGL.gif'
category: 'Showcase'
tags: ['OpenGL', 'C++', 'C','Custom Graphic Engine', 'OOP', 'SOLID', 'Gitflow']
---

<div class="text-justify center">

  <div class="mb-12"><h2 class="font-extrabold"> CUSTOM GRAPHIC ENGINE IN OPENGL </h2><div>
  <div id="DESCRIPTION" class="mt-7">
  <blockquote class="!text-[22px]">
  <p>
    This project consists of the implementation of a <strong>custom graphic engine</strong> using <strong>C++</strong>, <strong>OpenGL</strong>, and <strong>Visual Studio</strong>. The main objective was to design a small interactive scene where the focus lies on <strong>real-time illumination</strong> and the simulation of a day–night cycle.
  </p>
  <p>
      The scene is composed of at least three distinct textured models, placed with <strong>pseudo-random generation</strong> at predefined spawn points, with variations in <strong>scale</strong> and <strong>rotation</strong> to ensure realism. The user can explore the environment through a movable camera controlled with <strong>WASD navigation</strong> and <strong>mouse rotation</strong>, creating a first-person explorationexperience.
  </p>
  <p>
      The lighting system includes two orbiting light sources: the <strong>sun</strong> and the <strong>moon</strong>, synchronized at 180° to each other, dynamically affecting the scene. Their illumination gradually changes to simulate <strong>ambient light</strong>, shifting from a warm tone at midday to a darker bluish tone at midnight. A <strong>flashlight mechanic</strong> was also implemented, allowing the player to toggle an additional <strong>spotlight</strong> (inner and outer cone) with limited range, further enhancing the realism of the experience.
  </p>
  <p>
      From a programming perspective, the project emphasizes <strong>Clean Code</strong>, <strong>Object-Oriented Programming (OOP)</strong> principles, and the <strong>SOLID</strong> design pattern. Best practices were applied, such as avoiding <strong>magic numbers</strong>, ensuring consistent variable naming, encapsulating logic through <strong>functions</strong> and <strong>classes</strong>, and maintaining proper <strong>Git Version Control</strong> throughout development.
  </p>
  <p>
      This engine not only demonstrates fundamental <strong>graphics programming techniques</strong> but also highlights the importance of <strong>performance optimization</strong> and readable, maintainable code in real-time applications.
  </p>

  </blockquote>
  </div>
</div>  
  
  <div id="BELOW DESCRIPTION" class=" mb-60 mt-10 flex justify-start gap-10">
    <div id="SKILLS">
      <h4 class="font-bold text-start">SKILLS</h4>
        <button class= "text-sm px-2 py-1 inline-flex items-center justify-center rounded-lg font-semibold no-underline transition-all duration-200 ease-in-out text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)] hover:text-[color:var(--accent-light)] hover:scale-105"> 
        C
        </button> 
        <button class= "text-sm px-2 py-1 inline-flex items-center justify-center rounded-lg font-semibold no-underline transition-all duration-200 ease-in-out text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)] hover:text-[color:var(--accent-light)] hover:scale-105"> 
        C++
        </button>
        <button class= "text-sm px-2 py-1 inline-flex items-center justify-center rounded-lg font-semibold no-underline transition-all duration-200 ease-in-out text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)] hover:text-[color:var(--accent-light)] hover:scale-105"> 
        OOP
        </button> 
        </button> <button class= "text-sm px-2 py-1 inline-flex items-center justify-center rounded-lg font-semibold no-underline transition-all duration-200 ease-in-out text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)] hover:text-[color:var(--accent-light)] hover:scale-105"> 
        SOLID
        </button>
    </div>
    <div id="TOOLS">
      <h4 class="font-bold text-start">TOOLS</h4>
      <button class= "text-sm px-2 py-1 inline-flex items-center justify-center rounded-lg font-semibold no-underline transition-all duration-200 ease-in-out text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)] hover:text-[color:var(--accent-light)] hover:scale-105"> 
        OpenGL
      </button> <button class= "text-sm px-2 py-1 inline-flex items-center justify-center rounded-lg font-semibold no-underline transition-all duration-200 ease-in-out text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)] hover:text-[color:var(--accent-light)] hover:scale-105"> 
        Visual Studio
      </button>
    </div>
    <div id="LINKS">
        <h4 class="font-bold text-start">LINKS</h4>
        <a href= "https://github.com/llucferrando/AA3_FerrandoLluc">
        </button> <button class="text-sm px-2 py-1 inline-flex items-center justify-center rounded-lg font-semibold no-underline transition-all duration-200 ease-in-out text-[var(--accent)] border border-[var(--accent)] bg-transparent hover:bg-[color:var(--color-accent-bg)] hover:text-[color:var(--accent-light)] hover:scale-105"><svg target="_blank" viewBox="0 0 24 24" class="text-[var(--accent)] w-4 h-4 mr-1 " aria-hidden="true"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2.03c-3.2.69-3.87-1.37-3.87-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.27.45-2.31 1.19-3.13-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.76.11 3.05.74.82 1.19 1.86 1.19 3.13 0 4.45-2.68 5.43-5.24 5.72.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg> 
        Repository
        </button>
        </a>
    </div>
</div>












