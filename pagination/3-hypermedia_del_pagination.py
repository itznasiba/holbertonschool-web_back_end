#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination module.
"""
import csv
import math
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retrieves a page of data starting from a specific index, resilient
        to deletions between reads.
        """
        indexed_data = self.indexed_dataset()
        total_len = len(self.dataset())

        # Verify index is within valid range
        assert index is not None and 0 <= index < total_len
        assert isinstance(page_size, int) and page_size > 0

        data = []
        current_index = index

        # Keep searching for records until page_size elements are collected
        while len(data) < page_size and current_index < total_len:
            item = indexed_data.get(current_index)
            if item is not None:
                data.append(item)
            current_index += 1

        # Determine next index
        next_index = current_index if current_index < total_len else None

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
