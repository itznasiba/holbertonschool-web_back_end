#!/usr/bin/env python3
"""
This module provides a type-annotated function that returns the floor of a float
"""


def floor(n: float) -> int:
    """
    Returns the floor of the float n as an integer.
    """
    return int(n) if n >= 0 else int(n) - (1 if n % 1 != 0 else 0)
