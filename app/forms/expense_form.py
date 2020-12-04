from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField, DecimalField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Category


def category_exists(form, field):
    print("Checking if user exits", field.data)
    id = field.data
    category = Category.query.get(id)
    if not category:
        raise ValidationError("Category has not yet been created.")


class ExpenseForm(FlaskForm):
    transaction_type = StringField('transaction_type', validators=[DataRequired()])
    amount = DecimalField('amount', places=2, validators=[DataRequired()])
    date = DateTimeField('date', validators=[DataRequired()])
    note = TextAreaField('note')
    frequency = DateTimeField('frequency')
    category_id = IntegerField('category_id', validators=[DataRequired()])
    tag_ids = StringField('tag_ids')
