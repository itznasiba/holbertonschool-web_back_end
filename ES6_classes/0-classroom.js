#!/usr/bin/node

/**
 * Represents a classroom.
 */
export default class ClassRoom {
  /**
   * Creates a new ClassRoom.
   * @param {Number} maxStudentsSize - The maximum number of students allowed in the class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
