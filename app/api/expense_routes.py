from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Ledger, Category
from app.forms import ExpenseForm

expense_routes = Blueprint('expenses', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@expense_routes.route('/create', methods=['POST'])
@login_required
def create_expense():
    form = ExpenseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form['transaction_type'].data = "CRE"
    print(form.validate())
    print(form.data)
    print(request.get_json())
    if form.validate_on_submit():
        entry = Ledger(
            transaction_type="CRE",
            name=form.data["name"],
            amount=form.data["amount"],
            date=form.data["date"],
            note=form.data["note"],
            user_id=current_user.id,
            category_id=form.data["category_id"]
        )
        db.session.add(entry)
        db.session.commit()
        return entry.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@expense_routes.route('/', methods=['GET'])
@login_required
def view_expenses():
    expenses = db.session.query(Ledger, Category).join(Ledger.categories).filter(Ledger.user_id == 1).order_by(Ledger.category_id).all()
    data = {}
    categories = {}
    for expense in expenses:
        if expense[1].name in data:
            data[expense[1].name].append(expense[0].to_category_dict(expense[1].name))
        else:
            data[expense[1].name] = [expense[0].to_category_dict(expense[1].name)]
    return {"expenses": data}


@expense_routes.route('/<int:id>', methods=['POST', 'DELETE'])
# @login_required
def edit_expense(id):
    expense = Ledger.query.get_or_404(id)

    if request.method == 'DELETE':
        deleted_expense = expense.to_dict()
        db.session.delete(expense)
        db.session.commit()
        return {'expense': deleted_expense}

    form = ExpenseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    form['transaction_type'].data = "CRE"
    print(form.validate())
    print(form.data)
    print(request.get_json())
    if form.validate_on_submit():
        if expense:
            expense.name = form.data["name"]
            expense.amount = form.data["amount"]
            expense.date = form.data["date"]
            expense.note = form.data["note"]
            expense.user_id = 1 #this will need to be updated with current_user.id
            expense.category_id = form.data["category_id"]
            db.session.commit()
            return expense.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
