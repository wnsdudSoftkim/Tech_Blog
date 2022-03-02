from fastapi import APIRouter
from post import router as post_router

router = APIRouter()

router.include_router(post_router)
