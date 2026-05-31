#!/usr/bin/env python3
"""
Module for measuring the runtime of parallel comprehensions.
"""
import asyncio
import time

# Importing async_comprehension from the previous file
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel using
    asyncio.gather and measures the total runtime.

    Returns:
        float: The total elapsed time in seconds.
    """
    start_time = time.perf_counter()

    # Create a list containing 4 calls to the coroutine
    tasks = [async_comprehension() for _ in range(4)]
    
    # Use the * operator to unpack the list into asyncio.gather
    await asyncio.gather(*tasks)

    end_time = time.perf_counter()
    return end_time - start_time
