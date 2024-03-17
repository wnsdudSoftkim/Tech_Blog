import uuid

from util.util import get_s3_client
import logging
from botocore.exceptions import ClientError


def upload_file(file, bucket, object_name=None):
    if object_name is None:
        object_name = uuid.uuid4()

    try:
        client = get_s3_client()
        client.upload_fileobj(file, bucket, object_name)

    except ClientError as exc:
        logging.error(exc)
        return False
    return True



