# WhatNext

## Project Overview

WhatNext is a web application designed to help students determine their future goals and find suitable educational paths. The application lists exams, colleges, and career opportunities, providing students with the information they need to make informed decisions about their education and career.

## Objective

The main objective of WhatNext is to assist students in navigating their educational and career choices by:
- Displaying a list of exams based on the student's last academic qualification.
- Providing detailed information about each exam, including eligibility, syllabus, important dates, and more.
- Highlighting potential career paths based on user input.
- Showcasing opportunities and colleges for various fields such as Engineering, Medical, Teaching, etc.
- Emphasizing the importance of skills, patience, and continuous improvement over single exam results.
- Making students aware of alternative ways to achieve their goals, such as joining top colleges like IITs and NITs even if they fail initially.
- Developing a resilient mindset in students, making them aware of multiple opportunities and upskilling them to think and live like graduates of top-tier institutions (e.g., IITians).
- Encouraging part-time teaching for financial stability while pursuing long-term goals.

## Key Features

### MVP 1
- **Exam Listings**: View a list of exams based on the student's last academic qualification.
- **Exam Details**: Detailed information about each exam, including eligibility, syllabus, duration, important dates, and official website links.
- **Career Paths**: Explore potential career paths based on user input.
- **Opportunities & Colleges**: Information on opportunities and colleges for various fields.
- **Blogs & Images**: Post blogs and images to provide additional insights and information.
- **Student-Friendly UI/UX**: Modern and intuitive interface designed for a great user experience.

### MVP 2
- **Teacher Finder**: Students can find the best teachers around their location based on the desired exam.
- **Learning System for Teachers**: A system for upcoming young teachers to learn the exam pattern and syllabus, fostering the profession of good teachers.
- **Alternative Paths Awareness**: Making students aware of alternative ways to achieve their goals, such as joining top colleges like IITs and NITs even if they fail initially.
- **Resilient Mindset Development**: Developing a resilient mindset in students, making them aware of multiple opportunities and upskilling them to think and live like graduates of top-tier institutions (e.g., IITians).
- **Part-time Income for Graduates**: Encouraging students who are preparing for government jobs to consider part-time teaching to earn money, ensuring financial stability while pursuing long-term goals.

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
│ ├── TeacherFinder.jsx
│ ├── LearningSystem.jsx
│ └── Blog.jsx
├── pages
│ ├── index.js
│ ├── about
│ │ ├── page.jsx
│ │ └── layout.js
│ ├── exams
│ │ ├── [id].jsx
│ │ └── index.js
│ ├── teachers
│ │ └── index.js
│ ├── learning
│ │ └── index.js
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
   git clone https://github.com/subhadip2111/DreamLift.git
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
Blog
GET /api/blogs: Get a list of blog posts.
GET /api/blogs/
: Get detailed information about a specific blog post by ID.
Teachers
GET /api/teachers: Find the best teachers around the user's location based on the desired exam.
Learning System
GET /api/learning: Access resources for upcoming young teachers to learn the exam pattern and syllabus.
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
For any questions or inquiries, please contact [subhadipshee20010521@gmail.com].