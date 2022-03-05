import logging
from functools import lru_cache

from pydantic import BaseSettings


class GlobalSettings(BaseSettings):
    ENV_STATE: str = 'development'  # change mode
    REDIS_HOST: str
    MONGO_HOST: str
    MONGO_NAME: str
    AWS_HOST: str

    class Config:
        env_file = 'development.env'


class DevSettings(GlobalSettings):
    logging.basicConfig(level=logging.DEBUG)

    class Config:
        env_file = 'development.env'


class ProdSettings(GlobalSettings):
    class Config:
        env_file = "production.env"


class FactorySettings:

    @staticmethod
    def load():
        env_state = GlobalSettings().ENV_STATE
        if env_state == 'development':
            return DevSettings()
        elif env_state == 'production':
            return ProdSettings()


@lru_cache()
def get_setting():
    """LRU cache 쓰는 이유 명확히"""
    return FactorySettings.load()
