import boto3
import json
from botocore.client import BaseClient


class S3Client(object):
    client: BaseClient = None

    @staticmethod
    def create_s3_client(self, keyfile: str):
        with open(keyfile) as file:
            data = json.load(file)

        self.client = boto3.client(service_name='s3',
                                   aws_access_key=data.get("AWS_ACCESS_KEY"),
                                   aws_secret_access_key=data.get("AWS_SECRET_KEY"))

    @staticmethod
    def get_s3_client(self) -> BaseClient:
        return self.client
