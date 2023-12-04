# Bitly Clone with Next.js 13 and Go

## Overview

This project is a simplified Bitly clone that uses Next.js 13 for the frontend and Go for the backend API. The application allows users to shorten long URLs and provides a mechanism to redirect users to the original URL when they access the shortened link.

## Technologies Used

- **Frontend:** Next.js 13, React
- **Backend:** Go
- **Database:** MySQL

## Getting Started

### Prerequisites

- Node.js and Yarn
- Go
- MySQL Database

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/fossyy/cutit.git
   cd bitly-clone
   ```
2. **Install Dependencies**
   ```
   cd frontend
   yarn install
   ```
3. **Configure Environment Variables**
   
   Open `.env` files and configure your own environment variables.
   
5. **Build the Application**
   ```
   yarn run build
   ```
6. **Run the Application**
   ```
   yarn start
   ```
   
The frontend will be accessible at http://localhost:3000, and the backend API at http://localhost:8080.

Note: The backend API is currently not public due to an existing bug. Feel free to contribute and help me improve!

## License
This project is licensed under the [MIT License](LICENSE).