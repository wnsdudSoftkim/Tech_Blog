from pydantic import BaseSettings


class GlobalSettings(BaseSettings):
    ENV_STATE: str = 'development'
    APP_ENV: str = 'development'

    class Config:
        env_file = '.env'


class DevSettings(GlobalSettings):
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


def get_setting():
    return FactorySettings.load()
