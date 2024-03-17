from bson import ObjectId

from db.model.post import ContentListOutModel, ContentOutModel
from db.operations import Operator as op


class PostManager(object):

    @classmethod
    async def get_all_content_list(cls) -> ContentListOutModel:
        content_list = await op.get_list('content', {}, ['_id', 'title', 'preview', 'thumbnail', 'name', 'timestamp'])
        return content_list

    @classmethod
    async def get_single_content(cls, c_id: str) -> ContentOutModel:
        content = await op.get('content', {'_id': ObjectId(c_id)})
        return content
