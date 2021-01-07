from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Tag, Ledger
from app.forms import TagForm

tag_routes = Blueprint('tags', __name__)


@tag_routes.route('/create', methods=['POST'])
# @login_required
def create_tag():
    form = TagForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        tag = Tag(
            name=form.data["name"],
            user_id=12,
        )
        print(form.data['expense_id'])
        expense = Ledger.query.get(form.data["expense_id"])
        expense.tags.append(tag)
        db.session.add(tag)
        db.session.commit()
        return tag.to_dict()
    return {"errors": "testing"}


@tag_routes.route('/<int:id>', methods=['GET', 'POST', 'DELETE'])
@login_required
def edit_tag(id):
    tag = Tag.query.get(id)
    if request.method == 'POST':
        data = request.get_json()
        print(tag)
        print(data)
        if tag and data:
            tag.name = data["name"]
            db.session.commit()
            return {"tag": tag.to_dict()}
    elif request.method == 'DELETE':
        deleted_tag = tag.to_dict()
        db.session.delete(tag)
        db.session.commit()
        return {'tag': deleted_tag}
    return {"error": "error"}


@tag_routes.route('/', methods=['GET'])
@login_required
def view_tags():
    tags = Tag.query.filter(Tag.user_id == current_user.id).all()
    if tags:
        return {"tags": [tag.to_dict() for tag in tags]}
    return {"error": "testings"}
