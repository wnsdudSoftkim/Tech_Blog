from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class ContentListOutModel(BaseModel):
    id: str
    title: str
    preview: str
    thumbnail: Optional[str]
    name: str
    timestamp: datetime

    def __init__(self, **data):
        if data.get('_id'):
            self.id = str(data['_id'])
        super().__init__(**data)


class ContentOutModel(BaseModel):
    id: str
    title: str
    preview: str
    thumbnail: Optional[str]
    content: str
    name: str
    timestamp: datetime
