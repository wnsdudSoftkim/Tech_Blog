import uuid
import boto3
import json

from botocore.client import BaseClient


class S3Client(object):
    client = None


def create_s3_client(keyfile: str):
    with open(keyfile) as file:
        data = json.load(file)
    S3Client.client = boto3.client(service_name='s3',
                                   aws_access_key_id=data.get("AWS_ACCESS_KEY"),
                                   aws_secret_access_key=data.get("AWS_SECRET_KEY"))


def get_s3_client() -> BaseClient:
    return S3Client.client


def secure_file_name(filename: str):
    secure_name = f"{uuid.uuid4()}{''.join(a for a in filename if a.isalnum() or a.isdigit()).rstrip()}"
    return secure_name
