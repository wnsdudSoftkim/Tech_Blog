from fastapi import FastAPI

from config.config import get_setting

app = FastAPI()


@app.get("/")
def root():
    return f'running mode : {get_setting()}'


