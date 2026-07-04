#!/usr/bin/node
import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of 3 ClassRoom objects with specific sizes.
 * @returns {ClassRoom[]} An array of ClassRoom instances.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
