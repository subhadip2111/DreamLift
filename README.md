# WhatNext

## Project Overview

WhatNext is a web application designed to assist students in determining their future goals and finding suitable educational paths. By listing exams, colleges, and career opportunities, WhatNext provides students with the information needed to make informed decisions about their education and career.

## Objective

The primary objective of WhatNext is to help students navigate their educational and career choices by:
- Displaying a list of exams based on the student's last academic qualification.
- Providing detailed information about each exam, including eligibility, syllabus, important dates, and more.
- Highlighting potential career paths based on user input.
- Showcasing opportunities and colleges for various fields such as Engineering, Medical, Teaching, etc.
- Emphasizing the importance of skills, patience, and continuous improvement over single exam results.
- Introducing students to the best teachers around their location based on desired exams.
- Creating a learning system for upcoming young teachers to learn exam patterns and syllabi, fostering the profession of good teachers.
- Developing a resilient mindset in students, making them aware of multiple opportunities and upskilling them to think and live like top-tier institution graduates (e.g., IITians).

## Problem Statement

Many students face significant stress and pressure related to their exam results, often believing that a single failure can determine their entire future. This project aims to:
- Break the notion that one exam result defines a student's future.
- Provide alternative pathways to prestigious institutions like IITs and NITs.
- Ensure students are aware of various exams and opportunities available to them.
- Foster a mindset of resilience and continuous learning, enabling students to achieve their goals through multiple avenues.
- Empower young teachers with resources to become excellent educators, thereby improving the overall educational ecosystem.

## Key Features

### MVP 1
- **Exam Listings**: View a list of exams based on the student's last academic qualification.
- **Exam Details**: Detailed information about each exam, including eligibility, syllabus, duration, important dates, and official website links.
- **Career Paths**: Explore potential career paths based on user input.
- **Opportunities & Colleges**: Information on opportunities and colleges for various fields.
- **Blogs & Images**: Post blogs and images to provide additional insights and information.
- **Student-Friendly UI/UX**: Modern and intuitive interface designed for a great user experience.

### MVP 2
- **Teacher Finder**: Find the best teachers around the student's location based on desired exams.
- **Teacher Learning System**: A platform for upcoming young teachers to learn exam patterns and syllabi.
- **Resilient Mindset Development**: Emphasize multiple pathways to success and continuous upskilling to foster a mindset of resilience and adaptability.

## Tech Stack

### Frontend
- **Framework**: Next.js
- **Styling**: Tailwind CSS

### Backend
- **Framework**: Node.js, Express.js

### Database
- **Database**: MongoDB
- **ODM**: Mongoose

## Folder Structure

.
├── components
│ ├── CareerPath.jsx
│ ├── ExamDetails.jsx
│ ├── Blog.jsx
│ ├── TeacherFinder.jsx
│ ├── TeacherLearningSystem.jsx
├── pages
│ ├── index.js
│ ├── about
│ │ ├── page.jsx
│ │ └── layout.js
│ ├── exams
│ │ ├── [id].jsx
│ │ └── index.js
│ ├── teachers
│ │ ├── finder.jsx
│ │ └── learning.jsx
│ └── blog
│ ├── index.js
│ └── [id].jsx
├── styles
│ ├── globals.css
│ └── tailwind.css
├── utils
│ ├── api.js
│ └── constants.js
└── README.md

bash
Copy code

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/whatnext.git
   cd whatnext
Install dependencies:

sh
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add your MongoDB connection string and other necessary environment variables.

Run the development server:

sh
Copy code
npm run dev
Open http://localhost:3000 in your browser to see the application.

API Endpoints
Exams
GET /api/exams: Get a list of exams with pagination and search functionality.
GET /api/exams/
: Get detailed information about a specific exam by ID.
Opportunities
GET /api/opportunities: Get a list of opportunities based on the user's input.
Teachers
GET /api/teachers/finder: Find the best teachers around the user's location based on the desired exam.
GET /api/teachers/learning: Access learning resources for upcoming young teachers to learn exam patterns and syllabi.
Blog
GET /api/blogs: Get a list of blog posts.
GET /api/blogs/
: Get detailed information about a specific blog post by ID.
Contributing
Fork the repository.
Create a new branch for your feature or bug fix:
sh
Copy code
git checkout -b feature-name
Commit your changes:
sh
Copy code
git commit -m 'Add some feature'
Push to the branch:
sh
Copy code
git push origin feature-name
Create a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or inquiries, please contact [your email address].

