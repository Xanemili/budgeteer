from .db import db
import datetime


class Ledger(db.Model):
    __tablename__ = 'ledger'

    id = db.Column(db.Integer, primary_key=True)
    transaction_type = db.Column(db.String(3), nullable=False)
    amount = db.Column(db.Numeric(2), nullable=False)
    note = db.Column(db.String(400))
    frequency = db.Column(db.Integer)
    payment_date = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category_id = db.Column(db.Integer,
                            db.ForeignKey('categories.id'),
                            nullable=False)
