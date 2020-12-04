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
        user_id=current_user.id
    )
    db.session.add(category)
    db.session.commit()
    return {
        "category": category.to_dict()
    }
