from fastapi import APIRouter

router = APIRouter(
    prefix='/post',
    tags=['post']
)


@router.get('/get_list')
async def get_content_list():
    pass


@router.post('/content')
async def add_content():
    pass


@router.put('/content')
async def update_content():
    pass


@router.get('/content')
async def get_content():
    pass


@router.post("/image")
async def upload_image():
    pass


