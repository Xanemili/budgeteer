from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Category


category_routes = Blueprint('category', __name__)


@category_routes.route('/create', methods=['POST'])
@login_required
def create_category():
    data = request.get_json()
    category = Category(
        name=data["name"],
        goal=data["goal"],
        user_id=current_user.id
    )
    db.session.add(category)
    db.session.commit()
    return {
        "category": category.to_dict()
    }


@category_routes.route('/', methods=['GET'])
@login_required
def view_categories():
    categories = Category.query.filter(Category.user_id == current_user.id)
    return {"categories": [category.to_dict() for category in categories]}
