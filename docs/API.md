# Synora API Documentation

## API Version

v1 (Foundation)

---

## Health Endpoint

### Purpose

Verifies that the Synora backend is running and reachable.

### Endpoint

GET /health

### Success Response

Status Code

200 OK

Response

```json
{
  "success": true,
  "status": "UP",
  "service": "Synora",
  "message": "API is healthy"
}
```

---

## Notes

This endpoint is intended only for backend health verification.

Additional endpoints will be documented as new API capabilities are introduced.
