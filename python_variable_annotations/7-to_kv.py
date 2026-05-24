#!/usr/bin/env python3
"""
This module provides a function that converts a string and a number into a
tuple, squaring the number in the process.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple where the first element is k and the second element
    is the square of v as a float.
    """
    return (k, float(v**2))
