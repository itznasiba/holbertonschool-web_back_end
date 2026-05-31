#!/usr/bin/env python3
"""
Module for creating an asyncio.Task from a coroutine.
"""
import asyncio

# Importing wait_random from the previous file
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Takes an integer max_delay and returns an asyncio.Task.

    Args:
        max_delay (int): The maximum delay for the wait_random coroutine.

    Returns:
        asyncio.Task: The task object created from wait_random.
    """
    # We call wait_random(max_delay) to get the coroutine object,
    # then wrap it in a task using create_task.
    return asyncio.create_task(wait_random(max_delay))
