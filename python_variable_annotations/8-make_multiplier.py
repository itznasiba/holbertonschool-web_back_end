#!/usr/bin/env python3
"""
This module provides a function that returns another function
for multiplication.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by a given multiplier.
    """
    def multiplier_func(n: float) -> float:
        """
        Multiplies a float n by the multiplier from the outer scope.
        """
        return n * multiplier

    return multiplier_func
