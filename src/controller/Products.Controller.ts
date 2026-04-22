import { Request, Response } from 'express';
import {  products } from '../model/products.model';


// Create single or multiple products
const createEvent = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    // support both { products: [...] } and a single object or array
    const data = body.products ?? (Array.isArray(body) ? body : body);
    const savedEvent = Array.isArray(data)
      ? await products.insertMany(data)
      : await products.create(data);
    res.status(201).json({
      success: true,
      message: 'Product(s) created successfully',
      data: savedEvent,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create event',
      error: err.message,
    });
  }
};

// Get all events
 const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await products.find();
    res.status(200).json({
      success: true,
      message: 'Events fetched successfully',
      data: events,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch events',
      error: err.message,
    });
  }
};

// Get single event
 const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await products.findById(req.params.id);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event fetched successfully',
      data: event,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch event',
      error: err.message,
    });
  }
};

// Update event
 const updateEvent = async (req: Request, res: Response) => {
  try {
    const updatedEvent = await products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event updated successfully',
      data: updatedEvent,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update event',
      error: err.message,
    });
  }
};

// Delete event
 const deleteEvent = async (req: Request, res: Response) => {
  try {
    const deletedEvent = await products.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event deleted successfully',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete event',
      error: err.message,
    });
  }
};

export const eventControllers = {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
}