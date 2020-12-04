from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Ledger
from app.forms import ExpenseForm

expense_routes = Blueprint('expenses', __name__)


@expense_routes.route('/create', methods=['POST'])
@login_required
def create_expense():
    form = ExpenseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.validate())
    print(form.data)
    if form.validate_on_submit():
        entry = Ledger(
            transaction_type="CRE",
            amount=form.data["amount"],
            name=form.data["name"],
            date=form.data["date"],
            note=form.data["note"]
        )
        print('validated')
        # db.session.add(entry)
        # db.session.commit()
    return {
        "fuck this stuypid shit that I cant even work with.": 'lol'
    }
