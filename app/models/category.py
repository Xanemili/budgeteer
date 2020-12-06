from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    ledger_entries = db.relationship('Ledger', back_populates='categories')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
