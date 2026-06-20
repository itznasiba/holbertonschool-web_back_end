#!/usr/bin/env python3
"""
Module that provides statistics about Nginx logs stored in MongoDB.
"""
from pymongo import MongoClient


def log_stats():
    """
    Connects to the local MongoDB instance, analyzes the Nginx log
    collection, and prints formatting-specific statistics.
    """
    # Connect to the local MongoDB service
    client = MongoClient('mongodb://127.0.0.1:27017')
    
    # Access the 'logs' database and 'nginx' collection
    nginx_collection = client.logs.nginx

    # Get total logs count
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # Display counts per HTTP Method
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Display count for status check route (GET /status)
    status_check_count = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    log_stats()
