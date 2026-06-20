#!/usr/bin/env python3
"""
Module that retrieves documents from a MongoDB collection based on a topic.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.

    Args:
        mongo_collection: A pymongo collection object.
        topic (str): The topic searched for within the topics array.

    Returns:
        A list of dictionaries containing school documents.
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find({"topics": topic}))
