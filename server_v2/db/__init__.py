import logging
from typing import Optional

from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field

from config.config import get_setting


class Database(object):
    client: AsyncIOMotorClient = None
    db = None
    url = get_setting().MONGO_HOST
    db_name = get_setting().MONGO_NAME


def connect_db():
    logging.info('connecting db..')
    Database.client = AsyncIOMotorClient(Database.url)
    Database.db = Database.client[Database.db_name]
    logging.info('connect complete!')


def close_db():
    logging.info('db closing...')
    Database.client.close()
    logging.info('closed db complete!')


def get_mongo_db():
    return Database.db


class PyObjectId(ObjectId):

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid objectid')
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type='string')


class BaseMongoDBModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id")

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        allow_population_by_field_name = True
