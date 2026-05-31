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

    # asyncio.gather runs all four coroutines concurrently
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.perf_counter()
    return end_time - start_time
