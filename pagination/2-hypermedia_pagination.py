#!/usr/bin/env python3
"""
Hypermedia pagination module containing index_range and Server class.
"""
import csv
import math
from typing import List, Dict, Any


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
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        data = self.dataset()

        if start >= len(data):
            return []

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """
        Returns a dictionary containing hypermedia pagination metadata.

        Args:
            page (int): The 1-indexed page number. Must be > 0.
            page_size (int): The size of the page. Must be > 0.

        Returns:
            Dict[str, Any]: Metadata detailing current page state and context.
        """
        # Fetch the requested data page using get_page (handles assertions too)
        data = self.get_page(page, page_size)

        # Calculate total records and total pages
        total_records = len(self.dataset())
        total_pages = math.ceil(total_records / page_size)

        # Determine next and previous pages
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages
        }
