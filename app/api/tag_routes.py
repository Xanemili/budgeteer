from flask import Blueprint, request
from flask_login import login_required
from app.models import Tag
from app.forms import TagForm

tag_routes = Blueprint('tags', __name__)


@tag_routes.route('/create', methods=['POST'])
@login_required
def create_tag():
    form = TagForm
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        tag = Tag(
            name=form.data["name"]
        )
