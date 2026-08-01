# Synora Architecture

## Current Request Flow

Client

↓

/ (Application Route)

↓

/api (API Entry Point)

↓

/api/incidents (Resource Route)

↓

Controller

↓

Service

↓

Repository

↓

Response

## Current Supported Routes

GET /

GET /api

GET /api/incidents

GET /api/incidents/:id

## Current Layers

- Routes
- Controllers
- Services
- Repositories
- Shared Utilities
- Middleware
- Logger

This document will evolve as Synora grows.
