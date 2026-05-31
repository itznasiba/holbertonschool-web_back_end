#!/usr/bin/env python3
"""
Module for task_wait_n that uses task_wait_random.
"""
import asyncio
from typing import List

# Importing task_wait_random from the previous file
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.

    Args:
        n (int): The number of times to spawn the task.
        max_delay (int): The maximum delay for each task.

    Returns:
        List[float]: List of all delays in ascending order.
    """
    # Create n tasks using the task_wait_random function
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Use as_completed to gather results in order of completion
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
