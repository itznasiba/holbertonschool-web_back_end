#!/usr/bin/env python3
"""
Main pagination module containing index_range and Server class.
"""
import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Calculate the start and end indexes for a given page and page size.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieves a specific page of data from the dataset.

        Args:
            page (int): The 1-indexed page number. Must be > 0.
            page_size (int): The size of the page. Must be > 0.

        Returns:
            List[List]: A list of rows representing the requested page,
                        or an empty list if out of range.
        """
        # Verify arguments are integers greater than 0
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Obtain the data indexes
        start, end = index_range(page, page_size)

        # Fetch the dataset matrix
        data = self.dataset()

        # Handle out of range requests gracefully
        if start >= len(data):
            return []

        return data[start:end]
