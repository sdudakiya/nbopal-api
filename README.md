# MyGate - Residential Community Management System


A secure REST API backend for managing residential communities.

## Features

- User authentication and authorization
- Visitor management
- Resident directory
- Real-time notifications
- Staff attendance tracking
- Vehicle management
- Emergency contact management

## Tech Stack

- Node.js/Express
- Supabase (Database)
- JWT Authentication
- Winston (Logging)
- Swagger/OpenAPI (Documentation)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update with your Supabase credentials and JWT secret

4. Start the server:
   ```bash
   npm run dev
   ```

## API Documentation

Access the API documentation at `/api-docs` when the server is running.

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- Request validation
- CORS protection
- Helmet security headers

## Database Schema

The database schema is available in `database/schema.sql`. It includes:
- Users management
- Visitor logs
- Vehicle records
- Staff attendance
- Emergency contacts
- Notifications

## Testing

Run tests using:
```bash
npm test
```

Here's your complete guide to installing and running the application using Docker:

Prerequisites
Install Docker:

Windows/Mac: Download and install Docker Desktop from https://www.docker.com/products/docker-desktop
Linux: Run these commands:

sudo apt-get update
sudo apt-get install docker.io docker-compose
Verify installation:


docker --version
docker-compose --version
Setup Instructions
Environment Configuration

Copy .env.example to .env

Update the environment variables with your Supabase credentials

cp .env.example .env
Build the Docker Image


# Using Docker
docker build -t mygate-backend .

# Or using Docker Compose
docker-compose build
Run the Container


# Using Docker
docker run -p 3000:3000 --env-file .env mygate-backend

# Or using Docker Compose (recommended)
docker-compose up -d
Verify the Application

The API should now be running at http://localhost:3000
Access the Swagger documentation at http://localhost:3000/api-docs
Test the health endpoint: http://localhost:3000/api/health
Additional Commands

# View logs
docker-compose logs -f

# Stop the container
docker-compose down

# Restart the container

docker-compose restart

# Remove containers and volumes
docker-compose down -v


## Deployment

1. Set up a Supabase project
2. Configure environment variables
3. Deploy to your preferred hosting service
4. Set up SSL/TLS
5. Configure proper security groups and firewall rules

## Monitoring

The application uses Winston for logging. Logs are stored in:
- error.log (Error level logs)
- combined.log (All logs)

## License

MIT



