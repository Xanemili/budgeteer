from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Category


class TagForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    expense_id = IntegerField('expense_id')
