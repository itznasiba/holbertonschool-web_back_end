#!/usr/bin/env python3
"""
This module provides a type-annotated function that sums a list of floats.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats and returns their sum as a float.
    """
    return sum(input_list)
