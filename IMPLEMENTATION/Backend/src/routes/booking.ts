import express from "express";
import { createBookings, getBookings } from "../controller/bookingController";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Yacht booking management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - customerName
 *         - yatchName
 *         - start_date
 *         - end_date
 *       properties:
 *         customerName:
 *           type: string
 *           example: Mayank Sagar
 *         yatchName:
 *           type: string
 *           example: Ocean Pearl
 *         start_date:
 *           type: string
 *           format: date
 *           example: 2026-01-20
 *         end_date:
 *           type: string
 *           format: date
 *           example: 2026-01-22
 *         status:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get Bookings
 *     tags: [Bookings]
 *     responses:
 *       201:
 *         description: Booking fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Server error
 */

// Adding validations should be here using express validate
router.get("/", getBookings);

/**
 * @swagger
 * /api/bookings/add:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Server error
 */

// Adding validations should be here using express validate
router.post("/add", createBookings);
// clearUserInfoProgress

export default router;
