from db import get_mongo_db
from typing import List, Any, Optional, Dict


class Operator(object):

    @staticmethod
    async def get(collection: str, condition: dict, projection: Optional[Dict]):
        db = get_mongo_db()

        if condition is None:
            condition = {}

        return await db[collection].find_one(condition, projection)

    @staticmethod
    async def update(collection: str, condition: dict, field: dict):
        db = get_mongo_db()

        if condition is None:
            condition = {}
        if len(field) == 0:
            return 0
        await db[collection].update_one(condition, field)

        return condition.get('_id')

    @staticmethod
    async def create(collection: str, field: dict):
        db = get_mongo_db()

        if len(field) == 0:
            return 0
        await db[collection].insert_one(field)

        return field.get('_id')

    @staticmethod
    async def delete(collection: str, condition: dict):
        db = get_mongo_db()

        await db[collection].delete_one(condition)
        return condition.get('_id')

    @staticmethod
    async def aggregate(collection: str, pipeline: List[Any] = None):

        db = get_mongo_db()

        if pipeline is None:
            pipeline = []

        results = []
        try:
            results = db[collection].aggregate(pipeline)
            results = [result async for result in results]
        except Exception as exc_info:
            print("error occur: ", exc_info)

        return results
