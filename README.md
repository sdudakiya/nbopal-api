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