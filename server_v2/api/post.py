from fastapi import APIRouter, HTTPException
from logic.post import PostManager as pm
from db.model import post as ml
from middleware.redis import cached

router = APIRouter(
    prefix='/post',
    tags=['post']
)


@router.get('/get_list', response_model=ml.ContentListOutModel)
@cached
async def get_content_list():
    if (content_list := await pm.get_all_content_list()) is not None:
        return content_list

    raise HTTPException(status_code=404, detail='content not found')


@router.post('/content')
async def add_content():
    pass


@router.put('/content')
async def update_content():
    pass


@router.get('/content/{content_id}', response_model=ml.ContentOutModel)
async def get_content(content_id: str):
    if (content := await pm.get_single_content(content_id)) is not None:
        return content
    raise HTTPException(status_code=404, detail='content not found')


@router.post("/image")
async def upload_image():
    pass


