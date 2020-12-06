from .db import db
import datetime
import dateutil.parser
import time


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

    categories = db.relationship('Category', back_populates='ledger_entries')
    users = db.relationship('User', back_populates='ledger_entries')

    @property
    def date(self):
        return self.payment_date.replace(tzinfo=timezone.utc).timestamp()

    @date.setter
    def date(self, utc):
        print(dateutil.parser.parse(utc))
        self.payment_date = dateutil.parser.parse(utc)

    def to_dict(self, category_name):
        return {
            "id": self.id,
            "transaction_type": self.transaction_type,
            "amount": float(self.amount),
            "note": self.note,
            "frequency": self.frequency,
            "payment_date": self.payment_date,
            "category_id": self.category_id,
            "category_name": category_name
        }
