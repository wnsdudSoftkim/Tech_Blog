from fastapi import FastAPI
from api import router
from config.config import get_setting
from util.util import create_s3_client

app = FastAPI()
app.include_router(router)


@app.get("/")
def root():

    return f'running mode : {get_setting()}'


@app.on_event("startup")
async def startup_event():
    create_s3_client('secrets/.aws_secrets.json')


@app.on_event("shutdown")
async def shutdown_evnet():
    pass
