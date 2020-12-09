from .db import db


ledger_tag = db.Table('ledger_tag',
                      db.Column('ledger_id', db.Integer,
                                db.ForeignKey('ledger.id')),
                      db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'))
                      )


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    expenses = db.relationship(
        'Ledger', secondary='ledger_tag', back_populates='tags')
