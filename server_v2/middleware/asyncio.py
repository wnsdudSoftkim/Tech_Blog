import asyncio
from functools import wraps


def async_decorator(func):
    loop = asyncio.get_running_loop()

    @wraps(func)
    async def wrapper(*args, **kwargs):
        result = loop.run_until_complete(func(*args, **kwargs))
        return result

    return wrapper

