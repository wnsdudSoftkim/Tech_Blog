from middleware.redis import cached
from fastapi import APIRouter, HTTPException, Body

router = APIRouter(
    prefix='/search'
)


@router.get('/search-suggestion')
async def get_search_suggestion(payload=Body(...)):
    pass


@router.get('/search')
async def get_search_result(payload=Body(...)):
    pass
