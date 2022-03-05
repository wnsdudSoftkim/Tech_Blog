from fastapi import FastAPI
from api import router
from config.config import get_setting
from db import connect_db, close_db
from util.util import create_s3_client
import logging

app = FastAPI()
app.include_router(router)


@app.get("/")
def root():

    return f'running mode : {get_setting()}'


@app.on_event("startup")
async def startup_event():
    logging.info('START EVENT')
    create_s3_client('secrets/.aws_secrets.json')
    connect_db()


@app.on_event("shutdown")
async def shutdown_evnet():
    close_db()
