import json
import logging
from functools import wraps
from redis import Redis
from config.config import get_setting


class RedisClient(object):
    host = get_setting().REDIS_HOST
    port = 6379


redis = Redis(host=RedisClient.host, port=RedisClient.port, socket_timeout=2)


def cached(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        key_parts = [func.__name__] + list(args)
        key = '-'.join(key_parts)
        result = redis.get(key)
        if result is None:
            value = func(*args, **kwargs)
            value_json = json.dumps(value)
            redis.set(key, value_json)
        else:
            value_json = result.decode('utf-8')
            value = json.loads(value_json)
        return value

    return wrapper


@cached
def test_redis():
    logging.info('redis test')
    return list(range(10000))
